"use server"

import { User, Content } from "./models";
import { connectToDb } from "./index";
import UserDto from "./dtos/user-dto";
import bcrypt from "bcrypt";
import {v4} from "uuid";
import { generateTokens, saveToken } from "./services/tokenService";



//user
export const registration = async (data: { email: string, password: string, securePass: string }) => {
  const { email, password, securePass } = data;
  const candidate = await User.findOne({ email })
  if (candidate) {
    throw new Error('Ошибка регистрации')
  }
  else if (securePass !== process.env.SECURITY_PASSWORD) {
    throw new Error('Не безопасный запрос')
  }
  else {
    try {
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = v4();
      const user = await User.create({ email, password: hashPassword, activationLink });

      const userDto = new UserDto(user)
      const tokens = generateTokens({ ...userDto });

      if (tokens?.refreshToken) {
        await saveToken(userDto.id, tokens.refreshToken);
      }
      const userData = { ...tokens, user: userDto}
      return userData.refreshToken
  

    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      } else {
        console.log('Unexpected error', error);
      }
    }

  }
}
//auth


//content

export const getUsers = async () => {
  // noStore();
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const updateUser = async (data: { email: string, password: string }) => {
  try {
    connectToDb();
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      return 'Не найдено'
    }
    await user.updateOne({ password })
    return await User.find()
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};




export const getContent = async () => {
  // noStore();
  try {
    connectToDb();
    const content = await Content.findOne();
    return content;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error("Failed to fetch user!");
    } else {
      console.log('Unexpected error', err);
    }
  }
};