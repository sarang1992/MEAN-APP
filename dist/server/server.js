"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import BaseRoutes = require("./config/routes/Routes");
var bodyParser = require("body-parser");
var path = require("path");
var UserController = require("./controllers/UserController");
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'developement';
var app = express();
exports.app = app;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require("express-session");
// var auth = require('./middleware/auth');
var cookieParser = require('cookie-parser');
var ACL = require('acl');
var controller = new UserController();
app.set('port', port);
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
// app.use('/public', express.static(path.resolve(__dirname, '../dist/client')));
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
// app.use(express.static(path.resolve(__dirname, '../../node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/api', new BaseRoutes().routes);
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err)
            return next(err);
        if (!user) {
            return res.send({ "status": "fail" });
        }
        req.logIn(user, function (err) {
            next();
        });
    })(req, res, next);
}, function (req, res) {
    res.send({ "status": "success", "user": req.session.passport.user });
});
app.get('/logout', function (req, res, next) {
    req.logout();
    res.json({ 'status': true });
});
/**
 * Passport Local
 */
app.use(passport.initialize());
app.use(passport.session());
/**
 * Node ACL
 */
var userObj = [{
        id: 1,
        username: 'admin',
        password: 'admin',
        email: 'admin@admin.com',
        role: 'admin',
    },
    {
        id: 2,
        username: 'user',
        password: 'user',
        email: 'user@user.com',
        role: 'user',
    },
];
function accessControl() {
    var nodeAcl = new ACL(new ACL.memoryBackend());
    nodeAcl.allow([{
            roles: 'admin',
            allows: [
                {
                    resources: '/api/dashboard',
                    permissions: '*',
                },
                {
                    resources: '/api/user/:id',
                    permissions: '*',
                },
                {
                    resources: '/api/user',
                    permissions: '*',
                }
            ],
        }, {
            roles: 'user',
            allows: [
                {
                    resources: '/api/dashboard',
                    permissions: 'get',
                },
                {
                    resources: '/api/user',
                    permissions: 'get',
                }
            ],
        }, {
            roles: 'guest',
            allows: [],
        }]);
    // Inherit roles
    //  Every user is allowed to do what guests do
    //  Every admin is allowed to do what users do
    nodeAcl.addRoleParents('user', 'guest');
    nodeAcl.addRoleParents('admin', 'user');
    nodeAcl.addUserRoles(1, 'admin');
    nodeAcl.addUserRoles(2, 'user');
    nodeAcl.addUserRoles(0, 'guest');
    return nodeAcl;
}
function authenticate() {
    var _this = this;
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (u, done) {
        //        const user = await serviceAuth.findById(id)
        var user = userObj.find(function (item) { return item.id === u.id; });
        done(null, user);
    });
    // Sign in with username and Password
    passport.use('local', new LocalStrategy({
        usernameField: 'v_name',
        passwordField: 'v_pwd'
    }, function (username, password, done) { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            user = userObj.find(function (item) { return item.username === username; });
            done(null, user);
            return [2 /*return*/];
        });
    }); }));
}
var access = accessControl();
access.allow('admin', '/api/user/', ['get', 'post', 'delete', 'view', 'put']);
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.session.user;
        return next();
    }
    res.redirect('login');
};
authenticate();
app.get("/api/user", [isAuthenticated, access.middleware()], controller.retrieve);
// app.get("/api/heroes", [isAuthenticated, access.middleware()], controller.retrieve);
app.post("/api/user", [isAuthenticated], controller.create);
app.put("/api/user/:_id", [isAuthenticated], controller.update);
app.get("/api/user/:_id", [isAuthenticated], controller.findById);
app.delete("/api/user/:_id", [isAuthenticated], controller.delete);
// var renderIndex = (req: express.Request, res: express.Response) => {
//     console.log("Abcd..");
//     res.sendFile(path.resolve(__dirname, '../client/index.html'));
// }
// app.get('/', renderIndex);
app.get('*', function (req, res) {
    // res.sendFile(path.join(__dirname, '../client/index.html'));  
    res.sendFile(path.join(__dirname, '../client/index.html'));
    //   res.sendFile(path.join(__dirname, 'dist/index.html'));
});
if (env === 'developement') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}
// app.use(function(req: express.Request, res: express.Response, next) {
//     let err = new Error("Not Found");
//     next(err);
// });
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQy9ELDJEQUEyRDtBQUMzRCxDQUFDLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsQ0FBQSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1FBQzlGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSyxFQUFFLEdBQUc7WUFDVixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0Qsd0VBQXdFO0FBQ3hFLHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsTUFBTTtBQUVOLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQzlGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87S0FDdkIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG4vLyBpbXBvcnQgQmFzZVJvdXRlcyA9IHJlcXVpcmUoXCIuL2NvbmZpZy9yb3V0ZXMvUm91dGVzXCIpO1xuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IFVzZXJDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXJcIik7XG52YXIgcG9ydDogbnVtYmVyID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xudmFyIGVudjpzdHJpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcGVtZW50JztcblxudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoICdwYXNzcG9ydCcgKTtcbnZhciBMb2NhbFN0cmF0ZWd5ID0gcmVxdWlyZSggJ3Bhc3Nwb3J0LWxvY2FsJyApLlN0cmF0ZWd5O1xudmFyIHNlc3Npb24gPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpO1xuLy8gdmFyIGF1dGggPSByZXF1aXJlKCcuL21pZGRsZXdhcmUvYXV0aCcpO1xudmFyIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKTtcbnZhciBBQ0wgPSByZXF1aXJlKCdhY2wnKTtcbnZhciBjb250cm9sbGVyID0gbmV3IFVzZXJDb250cm9sbGVyKCk7XG5cbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuYXBwLnVzZSgnL2FwcCcsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvYXBwJykpKTtcbmFwcC51c2UoJy9saWJzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9saWJzJykpKTtcbi8vIGFwcC51c2UoJy9wdWJsaWMnLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vZGlzdC9jbGllbnQnKSkpO1xuXG4vLyBmb3Igc3lzdGVtLmpzIHRvIHdvcmsuIENhbiBiZSByZW1vdmVkIGlmIGJ1bmRsaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2xpZW50JykpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL25vZGVfbW9kdWxlcycpKSk7XG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9ub2RlX21vZHVsZXMnKSkpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcblxuXG5cbi8vIGFwcC51c2UoJy9hcGknLCBuZXcgQmFzZVJvdXRlcygpLnJvdXRlcyk7XG5cbmFwcC51c2Uoc2Vzc2lvbih7IHNlY3JldDogXCJjYXRzXCIgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuXG5cbmFwcC5wb3N0KCcvbG9naW4nLChyZXE6YW55LCByZXM6YW55LCBuZXh0OmFueSkgPT4ge1xuICAgIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCAoZXJyOmFueSwgdXNlcjphbnkpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBuZXh0KGVycilcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnNlbmQoe1wic3RhdHVzXCI6IFwiZmFpbFwifSk7XG4gICAgICB9XG4gICAgICAgcmVxLmxvZ0luKHVzZXIsIGZ1bmN0aW9uIChlcnI6YW55KSB7IC8vIDwtLSBMb2cgdXNlciBpblxuICAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gIFxuICBcbiAgICB9KShyZXEsIHJlcywgbmV4dClcbiAgfSxmdW5jdGlvbihyZXEscmVzKXtcbiAgICAgIHJlcy5zZW5kKHtcInN0YXR1c1wiOiBcInN1Y2Nlc3NcIiwgXCJ1c2VyXCI6IHJlcS5zZXNzaW9uLnBhc3Nwb3J0LnVzZXJ9KTtcbn0pO1xuYXBwLmdldCgnL2xvZ291dCcsKHJlcTphbnksIHJlczphbnksIG5leHQ6YW55KSA9PiB7XG4gICAgcmVxLmxvZ291dCgpO1xuICAgIHJlcy5qc29uKHsgJ3N0YXR1cyc6IHRydWUgfSk7XG59KTtcbiAgXG4vKipcbiAqIFBhc3Nwb3J0IExvY2FsXG4gKi9cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKVxuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpXG5cbi8qKlxuICogTm9kZSBBQ0xcbiAqL1xuXG5jb25zdCB1c2VyT2JqID0gW3tcbiAgICBpZDogMSxcbiAgICB1c2VybmFtZTogJ2FkbWluJyxcbiAgICBwYXNzd29yZDogJ2FkbWluJyxcbiAgICBlbWFpbDogJ2FkbWluQGFkbWluLmNvbScsXG4gICAgcm9sZTogJ2FkbWluJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHVzZXJuYW1lOiAndXNlcicsXG4gICAgcGFzc3dvcmQ6ICd1c2VyJyxcbiAgICBlbWFpbDogJ3VzZXJAdXNlci5jb20nLFxuICAgIHJvbGU6ICd1c2VyJyxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGFjY2Vzc0NvbnRyb2woKSB7XG4gICAgY29uc3Qgbm9kZUFjbCA9IG5ldyBBQ0wobmV3IEFDTC5tZW1vcnlCYWNrZW5kKCkpXG5cbiAgICBub2RlQWNsLmFsbG93KFt7XG4gICAgICAgIHJvbGVzOiAnYWRtaW4nLFxuICAgICAgICAgICAgYWxsb3dzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6ICcvYXBpL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiAnKicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlczogJy9hcGkvdXNlci86aWQnLFxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogJyonLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6ICcvYXBpL3VzZXInLFxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogJyonLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHJvbGVzOiAndXNlcicsXG4gICAgICAgICAgICBhbGxvd3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VzOiAnL2FwaS9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZXM6ICcvYXBpL3VzZXInLFxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByb2xlczogJ2d1ZXN0JyxcbiAgICAgICAgICAgIGFsbG93czogW10sXG4gICAgfV0pO1xuXG4gICAgLy8gSW5oZXJpdCByb2xlc1xuICAgIC8vICBFdmVyeSB1c2VyIGlzIGFsbG93ZWQgdG8gZG8gd2hhdCBndWVzdHMgZG9cbiAgICAvLyAgRXZlcnkgYWRtaW4gaXMgYWxsb3dlZCB0byBkbyB3aGF0IHVzZXJzIGRvXG4gICAgbm9kZUFjbC5hZGRSb2xlUGFyZW50cygndXNlcicsICdndWVzdCcpXG4gICAgbm9kZUFjbC5hZGRSb2xlUGFyZW50cygnYWRtaW4nLCAndXNlcicpXG5cbiAgICBub2RlQWNsLmFkZFVzZXJSb2xlcygxLCAnYWRtaW4nKVxuICAgIG5vZGVBY2wuYWRkVXNlclJvbGVzKDIsICd1c2VyJylcbiAgICBub2RlQWNsLmFkZFVzZXJSb2xlcygwLCAnZ3Vlc3QnKVxuXG4gICAgcmV0dXJuIG5vZGVBY2xcbn1cblxuXG5mdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgcGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlcjphbnksIGRvbmU6YW55KSA9PiB7XG4gICAgICBkb25lKG51bGwsIHVzZXIpXG4gICAgfSlcbiAgXG4gICAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1OmFueSwgZG9uZTphbnkpID0+IHtcbiAgICAgIC8vICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgc2VydmljZUF1dGguZmluZEJ5SWQoaWQpXG4gICAgICBjb25zdCB1c2VyID0gdXNlck9iai5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdS5pZClcbiAgICAgIGRvbmUobnVsbCwgdXNlcilcbiAgICB9KVxuICBcbiAgICAvLyBTaWduIGluIHdpdGggdXNlcm5hbWUgYW5kIFBhc3N3b3JkXG4gICAgcGFzc3BvcnQudXNlKCdsb2NhbCcsIG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgICAgIHVzZXJuYW1lRmllbGQgOiAndl9uYW1lJyxcbiAgICAgICAgICBwYXNzd29yZEZpZWxkIDogJ3ZfcHdkJ1xuICAgIH0sIGFzeW5jKHVzZXJuYW1lOmFueSwgcGFzc3dvcmQ6YW55LCBkb25lOmFueSkgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IHVzZXJPYmouZmluZChpdGVtID0+IGl0ZW0udXNlcm5hbWUgPT09IHVzZXJuYW1lKVxuICAgICAgZG9uZShudWxsLCB1c2VyKVxuICAgIH0pKVxufVxuXG5jb25zdCBhY2Nlc3MgPSBhY2Nlc3NDb250cm9sKCk7XG5cbmFjY2Vzcy5hbGxvdygnYWRtaW4nLCAnL2FwaS91c2VyLycsIFsnZ2V0JywgJ3Bvc3QnLCAnZGVsZXRlJywgJ3ZpZXcnLCAncHV0J10pO1xuXG5jb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAocmVxOmFueSwgcmVzOmFueSwgbmV4dDphbnkpID0+IHtcbiAgICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICByZXMubG9jYWxzLnVzZXIgPSByZXEuc2Vzc2lvbi51c2VyO1xuICAgICAgcmV0dXJuIG5leHQoKVxuICAgIH1cbiAgICByZXMucmVkaXJlY3QoJ2xvZ2luJylcbn1cbmF1dGhlbnRpY2F0ZSgpO1xuXG5hcHAuZ2V0KFwiL2FwaS91c2VyXCIsIFtpc0F1dGhlbnRpY2F0ZWQsIGFjY2Vzcy5taWRkbGV3YXJlKCldLCBjb250cm9sbGVyLnJldHJpZXZlKTtcbi8vIGFwcC5nZXQoXCIvYXBpL2hlcm9lc1wiLCBbaXNBdXRoZW50aWNhdGVkLCBhY2Nlc3MubWlkZGxld2FyZSgpXSwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG5hcHAucG9zdChcIi9hcGkvdXNlclwiLFtpc0F1dGhlbnRpY2F0ZWRdLCBjb250cm9sbGVyLmNyZWF0ZSk7XG5hcHAucHV0KFwiL2FwaS91c2VyLzpfaWRcIixbaXNBdXRoZW50aWNhdGVkXSwgY29udHJvbGxlci51cGRhdGUpO1xuYXBwLmdldChcIi9hcGkvdXNlci86X2lkXCIsW2lzQXV0aGVudGljYXRlZF0sIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuYXBwLmRlbGV0ZShcIi9hcGkvdXNlci86X2lkXCIsW2lzQXV0aGVudGljYXRlZF0sIGNvbnRyb2xsZXIuZGVsZXRlKTtcblxuXG4vLyB2YXIgcmVuZGVySW5kZXggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiQWJjZC4uXCIpO1xuLy8gICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2xpZW50L2luZGV4Lmh0bWwnKSk7XG4vLyB9XG5cbi8vIGFwcC5nZXQoJy8nLCByZW5kZXJJbmRleCk7XG5cbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgICAvLyByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudC9pbmRleC5odG1sJykpOyAgXG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9jbGllbnQvaW5kZXguaHRtbCcpKTtcbi8vICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdkaXN0L2luZGV4Lmh0bWwnKSk7XG59KTtcblxuaWYoZW52ID09PSAnZGV2ZWxvcGVtZW50Jyl7XG4gICAgYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQpIHtcbi8vICAgICBsZXQgZXJyID0gbmV3IEVycm9yKFwiTm90IEZvdW5kXCIpO1xuLy8gICAgIG5leHQoZXJyKTtcbi8vIH0pO1xuXG5hcHAudXNlKGZ1bmN0aW9uKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgZXJyb3I6IHt9LFxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgIH0pO1xufSk7XG5cbmV4cG9ydCB7IGFwcCB9Il19
