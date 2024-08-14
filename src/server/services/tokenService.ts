"use server"


import * as jwt from 'jsonwebtoken';
import { Token } from '../models/token-model';
import AdminDto from '../dtos/admin-dto';

export const generateTokens = async (payload: AdminDto)  => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: '30d' })
    return {
        accessToken,
        refreshToken
    }
}

export const validateAccessToken = async (token: string) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!)
        return userData;
    } catch (e) {
        return null;
    }
}

export const validateRefreshToken = async (token: string) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET!)
        return userData;
    } catch (e) {
        return null;
    }
}

export const saveToken = async (adminId: string, refreshToken: string) => {
    const tokenData = await Token.findOne({ admin: adminId })
    console.log(tokenData, 'adminId<<<<<<<<');
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await Token.create({ admin: adminId, refreshToken })
    return token;
}

export const removeToken = async (refreshToken: string) => {
    const tokenData = await Token.deleteOne({refreshToken})
    return tokenData;
}

export const findToken = async (refreshToken: string) => {
    const tokenData = await Token.findOne({refreshToken})
    return tokenData;
}