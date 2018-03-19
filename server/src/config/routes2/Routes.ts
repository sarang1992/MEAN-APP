/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

// import HeroRoutes = require('../routes2/HeroRoutes');
import UserRoutes = require('../routes2/UserRoutes');

var app = express();

class Routes {

    get routes() {

        // app.use("/", new HeroRoutes().routes);
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
export = Routes;