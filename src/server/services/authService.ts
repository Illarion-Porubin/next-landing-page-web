"use server"

import * as uuid from "uuid";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AdminDto, { IAdminDto } from "../dtos/admin-dto";
import { Admin } from "../models/admin-model";
import { connectToDb } from "..";
import { findToken, generateTokens, saveToken, validateRefreshToken } from "./tokenService";
import { Token } from "../models/token-model";
import { IAdmin } from "@/types";


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

        const admin = await Admin.create({ email, password: hashPassword });

        const adminDto = new AdminDto(admin)
        const tokens = await generateTokens({ ...adminDto });
        await saveToken(adminDto.id, tokens.refreshToken);
        return true;
    }
}

export const login = async (data: { email: string, password: string }) => {
    const admin = await Admin.findOne({ email: data.email });

    if (!admin) {
        return false
    }

    const isPassEquals = await bcrypt.compare(data.password, admin.password);
    if (!isPassEquals) {
        return false
    }
    
    const adminDto = new AdminDto(admin);
    const tokens = await generateTokens({ ...adminDto });
    
    await saveToken(adminDto.id, tokens.refreshToken);
    admin.accessToken = tokens.accessToken;
    await admin.save()

    return tokens
}

export const checkMe = async (res: { token: string }) => {
    console.log("check");
    try {
        const access = jwt.verify(res.token, process.env.JWT_ACCESS_SECRET!) as jwt.JwtPayload;
        const admin:IAdmin | null = await Admin.findById(access.id);  
        if(access && admin){
            return res.token === admin.accessToken && admin.isAdmin && admin.isActivated
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
    const userDto = new AdminDto(user);
    const tokens = await generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }
}