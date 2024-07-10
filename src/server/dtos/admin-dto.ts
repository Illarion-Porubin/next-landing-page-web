
export interface IAdminDto {
    id: string
    email: string;
    password: string;
    isAdmin: boolean;
    isActivated: boolean;
}

class AdminDto {
    id: string
    email: string;
    password: string;
    isAdmin: boolean;
    isActivated: boolean;

    constructor(model: IAdminDto){
        this.id = model.id;
        this.email = model.email;
        this.isAdmin = model.isAdmin;
        this.password = model.password;
        this.isActivated = model.isActivated
    }
}

export default AdminDto