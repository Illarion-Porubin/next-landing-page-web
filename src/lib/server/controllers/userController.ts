import { connectToDb } from "..";
import { Content } from "../models/content-model";
import { userService } from "../services/userService";


class UserController  {
    async registration(data: { email: string, password: string, securePass: string }) {
      try {
        const { email, password, securePass } = data;
        const userData = await userService.registration(email, password, securePass );
        return userData.refreshToken;
      } catch (e) {
          console.log(e);
      }
    }
  }
  
  export const userController = new UserController