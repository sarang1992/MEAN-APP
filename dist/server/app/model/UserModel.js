"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return this._userModel.v_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.v_email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "pwd", {
        get: function () {
            return this._userModel.v_pwd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "type", {
        get: function () {
            return this._userModel.v_type;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
Object.seal(UserModel);
module.exports = UserModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBSUg7SUFJSSxtQkFBWSxTQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVMLGdCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsaUJBQVUsU0FBUyxDQUFDIiwiZmlsZSI6ImFwcC9tb2RlbC9Vc2VyTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL1VzZXJNb2RlbCcpO1xuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgcHJpdmF0ZSBfdXNlck1vZGVsOiBJVXNlck1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IodXNlck1vZGVsOiBJVXNlck1vZGVsKSB7XG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbCA9IHVzZXJNb2RlbDtcbiAgICB9XG4gICAgZ2V0IG5hbWUgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwudl9uYW1lO1xuICAgIH1cblxuICAgIGdldCBlbWFpbCAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC52X2VtYWlsO1xuICAgIH1cblxuICAgIGdldCBwd2QgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwudl9wd2Q7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwudl90eXBlO1xuICAgIH1cbiAgICBcbn1cbk9iamVjdC5zZWFsKFVzZXJNb2RlbCk7XG5leHBvcnQgPSAgVXNlck1vZGVsOyJdfQ==
