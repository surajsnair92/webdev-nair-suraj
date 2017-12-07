/**
 * Created by surajsatheeshnair on 11/7/17.
 */

var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
module.exports = UserModel;

function findUserByFacebookId() {

}
function updateUser(userId, user) {
  return UserModel.update({_id:userId}, user);
}
function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}
function createUser(user){
  return UserModel.create(user);
}

function findAllUsers(){
  UserModel.find(function (err, docs) {
    console.log(err);
    console.log(docs);
  })
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserById(userId){
  return UserModel.findById(userId);

}

function deleteUser(userId){
  return UserModel.findByIdAndRemove({userId: userId});
}
