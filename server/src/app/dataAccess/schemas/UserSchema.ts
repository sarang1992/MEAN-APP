import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            v_name : {
                type: String,
                required: true
            },
            v_email : {
                type: String,
                required: true
            },
            v_pwd : {
                type: String,
                required: true
            },
            v_type : {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;""