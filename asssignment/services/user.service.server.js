 /**
 * Created by surajsatheeshnair on 10/24/17.
 */

 module.exports = function (app) {

   var userModel = require("../models/user/user.model.server");
   var fbModel = require("../models/facebook/facebook.model.server");
   var passport = require('passport');
   var bcrypt = require('bcrypt-nodejs');


   passport.serializeUser(serializeUser);
   passport.deserializeUser(deserializeUser);
   var LocalStrategy = require("passport-local").Strategy;
   var FacebookStrategy = require('passport-facebook').Strategy;
   passport.use(new LocalStrategy(localStrategy));
   var facebookConfig = {
     clientID     : process.env.clientID, //'392060261226689',
     clientSecret : process.env.clientSecret, //'d1854bce272261df0459a39065b4d087',
     callbackURL  : process.env.callbackURL//'http://localhost:3100/auth/facebook/callback'
     // callbackURL  : 'webdev-nair-suraj.herokuapp.com/auth/facebook/callback'

   };
   passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

   app.post('/api/login', passport.authenticate('local'), login);
   app.post('/api/logout',logout);
   app.post("/api/loggedIn",loggedIn);
   app.post('/api/register',register);
   app.get("/api/user/hello", helloUser);
   app.get("/api/user/:userId", findUserById);
   app.get("/api/user", findUsers);
   app.post('/api/user', createUsers);

   app.put('/api/user/:userId', updateUser);
   app.delete('/api/user/:userId', deleteUser);
   app.get ('/auth/facebook',
     passport.authenticate('facebook', { scope : 'email' }));
   app.get ('/auth/facebook/callback',
     passport.authenticate('facebook', {
       successRedirect: 'https://webdev-nair-suraj.herokuapp.com/user',
       failureRedirect: 'https://webdev-nair-suraj.herokuapp.com/login'
       // successRedirect: 'http://localhost:4200/user',
       // failureRedirect: 'http://localhost:4200/login'
     }));

   var users = [
     {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
     {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
     {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
   ];



   function facebookStrategy(token, refreshToken, profile, done) {
     fbModel
       .findUserByFacebookId(profile.id)
       .then(function(user) {
       if(user) { return done(null, user); } // already in db
       else { // if not, insert into db using profile info
         var names = profile.displayName.split(" ");
         var newFacebookUser = { lastName:  names[1],
           firstName: names[0],
           email:     profile.emails ? profile.emails[0].value:"",
           facebook: { id:    profile.id, token: token }
         };
         return userModel.createUser(newFacebookUser);
       }
     })
      .then(
         function(user){
           return done(null, user);
         }
       );
   }


   function register(req,res) {
     var user = req.body;
     user.password = bcrypt.hashSync(user.password);
     userModel
       .createUser(user)
       .then(function (user) {
         req
           .login(user,function (err) {
             res.json(user)
             // res.sendStatus(200);
           });
       })

   }

   function login(req,res) {
     res.json(req.user);
   }

   function logout(req,res) {
     req.logout();
     res.sendStatus(200);
   }

   function loggedIn(req,res) {
     if(req.isAuthenticated()){
       res.json(req.user);
     }else{
       res.send('0');
     }
   }

   function localStrategy(username,password,done) {
     userModel
       .findUserByUsername(username)
       .then(
         function (user) {
           if (user.username === username
             && bcrypt.compareSync(password, user.password)) {
             return done(null, user);
           } else {
             return done(null, false);
           }
         },
         function (err) {
           if (err) {
             return done(err);
           }
         }
       );

   }

   function findUserById(req, res) {
     var userId = req.params["userId"];
     // var user  = users.find(function (user) {
     //   return user._id == userId;
     // });
     var promise = userModel.findUserById(userId);
     promise.then(function (user) {
       res.json(user)
     })

   }

   function helloUser(req, res) {
     res.send("hi from user service");
  }

   function createUsers(req, res) {
     var data = req.body;
     userModel.createUser(data)
       .then(function (user) {
         res.json(user)
       })
   }

   function deleteUser(req, res) {
     var userId = req.params['userId'];
     var data = req.body;
     userModel.deleteUser(userId)
       .then(function (user) {
         res.json(user)
       })
   }

   function updateUser(req, res) {
     // var data = req.body;
     // for (i =0 ; i < users.length; i++){
     //   const _user = users[i];
     //   if(_user._id === data._id){
     //     users[i].lastName = data.lastName;
     //     users[i].firstName = data.firstName;
     //   }
     // }
     // var user  = users.find(function (user) {
     //   return user._id == data._id;
     // });
     // res.json(user)
     var userId = req.params.userId;
     var user = req.body;
     userModel.updateUser(userId, user)
       .then(function (user) {
         res.json(user)
       })
   }



  function findUsers(req, res) {
     var username = req.query["username"];
     var password = req.query["password"];
     if(username && password){
       var promise = userModel.findUserByCredentials(username, password);
       promise.then(function (user) {
         res.json(user);
      });
       return;
     }
     else if(username){
       var promise = userModel.findUserByUsername(username);
       promise.then(function (user) {
         res.json(user);
       });
       return;
     }
  }
   function serializeUser(user, done) {
     done(null, user);
   }

   function deserializeUser(user, done) {
     userModel
       .findUserById(user._id)
       .then(
         function(user){
           done(null, user);
         },
         function(err){
           done(err, null);
         }
       );
   }
 }
