"use server"

import { User, } from "../models/user-model";
import bcrypt from "bcrypt";
import * as uuid from "uuid";
import UserDto from "../dtos/user-dto";
import { connectToDb } from "..";
import { generateTokens, saveToken } from "./tokenService";



export const registration = async (data: {email: string, password: string, securePass: string}) => {
    console.log(data, 'da');
    connectToDb();
    const {email, password, securePass} = data;
    const candidate = await User.findOne({ email })
    console.log(1);

    if (candidate) {
        console.log(2);

        throw new TypeError('Ошибка регистрации')
    }
    else if (securePass !== process.env.SECURITY_PASSWORD) {
        throw new TypeError('Не безопасный запрос')
    }
    else {
        console.log(3);
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({ email, password: hashPassword, activationLink });

        const userDto = new UserDto(user)
        const tokens = await generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);
        return JSON.parse(JSON.stringify({
            ...tokens,
            user: userDto
        }));
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