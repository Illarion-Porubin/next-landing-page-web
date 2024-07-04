"use server"

import * as uuid from "uuid";
import bcrypt from "bcrypt";
import UserDto from "../dtos/user-dto";
import { Admin } from "../models/admin-model";
import { connectToDb } from "..";
import { findToken, generateTokens, saveToken, validateRefreshToken } from "./tokenService";
import { IUserInfo } from "@/types";
import * as jwt from "jsonwebtoken";


export const registration = async (data: { email: string, password: string, securePass: string }) => {
    connectToDb();
    const { email, password, securePass } = data;
    const candidate = await Admin.findOne({ email })

    if (candidate) {
        return false
    }
    else if (securePass !== process.env.SECURITY_PASSWORD) {
        return false
    }
    else {
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await Admin.create({ email, password: hashPassword, activationLink });

        const userDto = new UserDto(user)
        const tokens = await generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);
        return JSON.parse(JSON.stringify(tokens.refreshToken));
    }
}

export const getUsers = async () => {
    // noStore();
    connectToDb();
    try {
        const users = await Admin.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new TypeError("Failed to fetch - getUsers!");
    }
};

export const login = async (data: { email: string, password: string }) => {
    const user = await Admin.findOne({ email: data.email });
    console.log(user);
    if (!user) {
        return false
    }

    const isPassEquals = await bcrypt.compare(data.password, user.password);
    if (!isPassEquals) {
        return false
    }

    const userDto = new UserDto(user);
    const tokens = await generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        accessToken: tokens.accessToken,
        user: userDto
    }
}

export const checkMe = async (value: { token: string }) => {
    try {
        if (value.token) {
            const access = jwt.verify(value.token, process.env.JWT_ACCESS_SECRET!) as jwt.JwtPayload;
            if (access) {
                const user: IUserInfo | null = await Admin.findById(access.id)
                return user?.isAdmin && user?.isActivated
            }
            return false
        }
        else {
            return false
        }
    }
    catch (error) {
        return false
    }
}

export const refresh = async (refreshToken: string) => {
    if (!refreshToken) {
        return false
    }

    const userData: any = validateRefreshToken(refreshToken);
    // console.log(userData);


    const tokenFromDb = await findToken(refreshToken);

    if (!userData || !tokenFromDb) {
        return false
    }

    const user = await Admin.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = await generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }
}