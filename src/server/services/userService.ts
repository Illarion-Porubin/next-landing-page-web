"use server"

import * as uuid from "uuid";
import bcrypt from "bcrypt";
import UserDto from "../dtos/user-dto";
import { User, } from "../models/admin-model";
import { connectToDb } from "..";
import { findToken, generateTokens, saveToken, validateRefreshToken } from "./tokenService";
import { Token } from "../models/token-model";
import { IAdmin, IUser } from "@/types";


export const registration = async (data: {email: string, password: string, securePass: string}) => {
    connectToDb();
    const {email, password, securePass} = data;
    const candidate = await User.findOne({ email })

    if (candidate) {
        return false
    }
    else if (securePass !== process.env.SECURITY_PASSWORD) {
        return false
    }
    else {
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({ email, password: hashPassword, activationLink });

        const userDto = new UserDto(user)
        const tokens = await generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);
        return JSON.parse(JSON.stringify(tokens.refreshToken));
    }
}

export const getUsers = async () => {
    // noStore();
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new TypeError("Failed to fetch - getUsers!");
    }
};

export const login = async (data: {email: string, password: string}) =>{
    const user = await User.findOne({ email: data.email });
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

export const refresh = async (refreshToken: string) => {
    if (!refreshToken) {
        return false
    }

    const userData: any = validateRefreshToken(refreshToken);
    console.log(userData);


    const tokenFromDb = await findToken(refreshToken);

    if (!userData || !tokenFromDb) {
        return false
    }

    const user = await User.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = await generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }
}