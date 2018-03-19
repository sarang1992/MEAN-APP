"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var express = require("express");
// import HeroRoutes = require('../routes2/HeroRoutes');
var UserRoutes = require("../routes2/UserRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            // app.use("/", new HeroRoutes().routes);
            app.use("/", new UserRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMyL1JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxpQ0FBb0M7QUFHcEMsd0RBQXdEO0FBQ3hELGtEQUFxRDtBQUVyRCxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUVwQjtJQUFBO0lBUUEsQ0FBQztJQU5HLHNCQUFJLDBCQUFNO2FBQVY7WUFFSSx5Q0FBeUM7WUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlczIvUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cbiAqL1xuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gaW1wb3J0IEhlcm9Sb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMyL0hlcm9Sb3V0ZXMnKTtcbmltcG9ydCBVc2VyUm91dGVzID0gcmVxdWlyZSgnLi4vcm91dGVzMi9Vc2VyUm91dGVzJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIFJvdXRlcyB7XG5cbiAgICBnZXQgcm91dGVzKCkge1xuXG4gICAgICAgIC8vIGFwcC51c2UoXCIvXCIsIG5ldyBIZXJvUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9cIiwgbmV3IFVzZXJSb3V0ZXMoKS5yb3V0ZXMpO1xuICAgICAgICByZXR1cm4gYXBwO1xuICAgIH1cbn1cbmV4cG9ydCA9IFJvdXRlczsiXX0=
