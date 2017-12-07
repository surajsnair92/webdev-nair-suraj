/**
 * Created by surajsatheeshnair on 11/29/17.
 */

var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  facebook: {
    id:    String,
    token: String
  }
});
module.exports = userSchema;
