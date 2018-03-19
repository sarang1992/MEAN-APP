import express = require("express");
import UserController = require("./../../controllers/UserController");
// var auth = require('./../../middleware/auth');
var authUser = require('connect-ensure-login');
var router = express.Router();
class UserRoutes {
    private _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () {
        var controller = this._userController;

        // router.get("/user",authUser.ensureLoggedIn('/login'), controller.retrieve);
        // router.get("/user",controller.retrieve);
        router.post("/user", controller.create);
        router.put("/user/:_id", controller.update);
        router.get("/user/:_id", controller.findById);
        router.delete("/user/:_id", controller.delete);

        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;