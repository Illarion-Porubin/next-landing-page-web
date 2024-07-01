import { IUserInfo } from "@/types";

class UserDto {
    id: string
    isAdmin: boolean;
    isActivated: boolean;

    constructor(model: IUserInfo){
        this.id = model.id;
        this.isAdmin = model.isAdmin;
        this.isActivated = model.isActivated
    }
}

export default UserDto