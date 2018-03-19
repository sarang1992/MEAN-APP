import express = require('express');
// import BaseRoutes = require("./config/routes/Routes");
import bodyParser = require("body-parser");

import path = require('path');
import UserController = require("./controllers/UserController");
var port: number = process.env.PORT || 3000;
var env:string = process.env.NODE_ENV || 'developement';

var app = express();
var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;
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
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());



// app.use('/api', new BaseRoutes().routes);

app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',(req:any, res:any, next:any) => {
    passport.authenticate('local', (err:any, user:any) => {
      if (err) return next(err)
      if (!user) {
        return res.send({"status": "fail"});
      }
       req.logIn(user, function (err:any) { // <-- Log user in
         next();
      });
  
  
    })(req, res, next)
  },function(req,res){
      res.send({"status": "success", "user": req.session.passport.user});
});
app.get('/logout',(req:any, res:any, next:any) => {
    req.logout();
    res.json({ 'status': true });
});
  
/**
 * Passport Local
 */
app.use(passport.initialize())
app.use(passport.session())

/**
 * Node ACL
 */

const userObj = [{
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
    const nodeAcl = new ACL(new ACL.memoryBackend())

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
    nodeAcl.addRoleParents('user', 'guest')
    nodeAcl.addRoleParents('admin', 'user')

    nodeAcl.addUserRoles(1, 'admin')
    nodeAcl.addUserRoles(2, 'user')
    nodeAcl.addUserRoles(0, 'guest')

    return nodeAcl
}


function authenticate() {
    passport.serializeUser((user:any, done:any) => {
      done(null, user)
    })
  
    passport.deserializeUser((u:any, done:any) => {
      //        const user = await serviceAuth.findById(id)
      const user = userObj.find(item => item.id === u.id)
      done(null, user)
    })
  
    // Sign in with username and Password
    passport.use('local', new LocalStrategy({
      usernameField : 'v_name',
          passwordField : 'v_pwd'
    }, async(username:any, password:any, done:any) => {
      const user = userObj.find(item => item.username === username)
      done(null, user)
    }))
}

const access = accessControl();

access.allow('admin', '/api/user/', ['get', 'post', 'delete', 'view', 'put']);

const isAuthenticated = (req:any, res:any, next:any) => {
    if (req.isAuthenticated()) {
      res.locals.user = req.session.user;
      return next()
    }
    res.redirect('login')
}
authenticate();

app.get("/api/user", [isAuthenticated, access.middleware()], controller.retrieve);
// app.get("/api/heroes", [isAuthenticated, access.middleware()], controller.retrieve);
app.post("/api/user",[isAuthenticated], controller.create);
app.put("/api/user/:_id",[isAuthenticated], controller.update);
app.get("/api/user/:_id",[isAuthenticated], controller.findById);
app.delete("/api/user/:_id",[isAuthenticated], controller.delete);


// var renderIndex = (req: express.Request, res: express.Response) => {
//     console.log("Abcd..");
//     res.sendFile(path.resolve(__dirname, '../client/index.html'));
// }

// app.get('/', renderIndex);

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '../client/index.html'));  
    res.sendFile(path.join(__dirname, '../client/index.html'));
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
});

if(env === 'developement'){
    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
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

app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }