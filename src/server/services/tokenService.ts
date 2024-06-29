"use server"


import * as jwt from 'jsonwebtoken';
import { Token } from '../models/token-model';

export const generateTokens = async (payload: any)  => {
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

export const saveToken = async (userId: string, refreshToken: string) => {
    const tokenData = await Token.findOne({ user: userId })
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await Token.create({ user: userId, refreshToken })
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