"use strict";
var express = require("express");
var UserController = require("./../../controllers/UserController");
// var auth = require('./../../middleware/auth');
var authUser = require('connect-ensure-login');
var router = express.Router();
var UserRoutes = (function () {
    function UserRoutes() {
        this._userController = new UserController();
    }
    Object.defineProperty(UserRoutes.prototype, "routes", {
        get: function () {
            var controller = this._userController;
            // router.get("/user",authUser.ensureLoggedIn('/login'), controller.retrieve);
            // router.get("/user",controller.retrieve);
            router.post("/user", controller.create);
            router.put("/user/:_id", controller.update);
            router.get("/user/:_id", controller.findById);
            router.delete("/user/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return UserRoutes;
}());
Object.seal(UserRoutes);
module.exports = UserRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMyL1VzZXJSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFvQztBQUNwQyxtRUFBc0U7QUFDdEUsaURBQWlEO0FBQ2pELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QjtJQUdJO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDRCxzQkFBSSw4QkFBTTthQUFWO1lBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0Qyw4RUFBOEU7WUFDOUUsMkNBQTJDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUvQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlczIvVXNlclJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlclwiKTtcbi8vIHZhciBhdXRoID0gcmVxdWlyZSgnLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnKTtcbnZhciBhdXRoVXNlciA9IHJlcXVpcmUoJ2Nvbm5lY3QtZW5zdXJlLWxvZ2luJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNsYXNzIFVzZXJSb3V0ZXMge1xuICAgIHByaXZhdGUgX3VzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fdXNlckNvbnRyb2xsZXIgPSBuZXcgVXNlckNvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgZ2V0IHJvdXRlcyAoKSB7XG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5fdXNlckNvbnRyb2xsZXI7XG5cbiAgICAgICAgLy8gcm91dGVyLmdldChcIi91c2VyXCIsYXV0aFVzZXIuZW5zdXJlTG9nZ2VkSW4oJy9sb2dpbicpLCBjb250cm9sbGVyLnJldHJpZXZlKTtcbiAgICAgICAgLy8gcm91dGVyLmdldChcIi91c2VyXCIsY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL3VzZXJcIiwgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KFwiL3VzZXIvOl9pZFwiLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5nZXQoXCIvdXNlci86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiL3VzZXIvOl9pZFwiLCBjb250cm9sbGVyLmRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFVzZXJSb3V0ZXMpO1xuZXhwb3J0ID0gVXNlclJvdXRlczsiXX0=
