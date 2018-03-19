/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get name (): string {
        return this._userModel.v_name;
    }

    get email (): string {
        return this._userModel.v_email;
    }

    get pwd (): string {
        return this._userModel.v_pwd;
    }

    get type (): string {
        return this._userModel.v_type;
    }
    
}
Object.seal(UserModel);
export =  UserModel;