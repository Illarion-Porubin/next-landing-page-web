class UserDto {
    id: string;
    admin: boolean;
    isActivated: boolean;

    constructor(model){
        this.id = model._id;
        this.admin = model.admin;
        this.isActivated = model.isActivated
    }
}

export default UserDto