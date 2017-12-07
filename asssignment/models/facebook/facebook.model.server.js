/**
 * Created by surajsatheeshnair on 11/29/17.
 */

var mongoose = require('mongoose');
var fbSchema = require("./facebook.schema.server");
var userModel = mongoose.model("FbModel", fbSchema);

userModel.findUserByFacebookId = findUserByFacebookId;
module.exports = userModel;

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}
