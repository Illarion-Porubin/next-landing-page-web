import { User, } from "../models/user-model";
import { Content } from "../models/content-model";
import bcrypt from "bcrypt";
import * as uuid from "uuid";
import { tokenService } from "./tokenService";
import UserDto from "../dtos/user-dto";



class UserService {
    async registration(email: string, password: string, securePass: string) {
        const candidate = await User.findOne({ email })
        if (candidate) {
            throw new Error('Ошибка регистрации')
        }
        else if (securePass !== process.env.SECURITY_PASSWORD) {
            throw new Error('Не безопасный запрос')
        }
        else {
            const hashPassword = await bcrypt.hash(password, 3);
            const activationLink = uuid.v4();

            const user = await User.create({ email, password: hashPassword, activationLink });


            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDto });
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userDto
            }
        }
    }
}

export const userService = new UserService()