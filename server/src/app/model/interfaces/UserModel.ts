import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    v_name: string;
    v_email: string;
    v_pwd: string;
    v_type:string;
}

export = UserModel;