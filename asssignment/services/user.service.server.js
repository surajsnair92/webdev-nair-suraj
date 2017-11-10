 /**
 * Created by surajsatheeshnair on 10/24/17.
 */

 module.exports = function (app) {

   var userModel = require("../models/user/user.model.server");
   app.get("/api/user/hello", helloUser);
   app.get("/api/user/:userId", findUserById);
   app.get("/api/user", findUsers);
   app.post('/api/user', createUsers);
   app.put('/api/user/:userId', updateUser);
   app.delete('/api/user/:userId', deleteUser);
   var users = [
     {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
     {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
     {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
   ];

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
 }
