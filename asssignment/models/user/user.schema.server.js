/**
 * Created by surajsatheeshnair on 11/7/17.
 */
var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  dob:Date,
  salary: Number
}, {collection: 'user'});

module.exports =  UserSchema;
