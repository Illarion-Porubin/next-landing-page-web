
export interface IAdminDto {
    id: string
    isAdmin: boolean;
    isActivated: boolean;
}

class AdminDto {
    id: string
    isAdmin: boolean;
    isActivated: boolean;

    constructor(model: IAdminDto){
        this.id = model.id;
        this.isAdmin = model.isAdmin;
        this.isActivated = model.isActivated
    }
}

export default AdminDto