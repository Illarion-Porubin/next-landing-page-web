import * as jwt from 'jsonwebtoken';
import { Token } from '../models/token-model';


export const generateTokens = (payload) => {
    if (process.env.JWT_ACCESS_SECRET && process.env.JWT_REFRESH_SECRET) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
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