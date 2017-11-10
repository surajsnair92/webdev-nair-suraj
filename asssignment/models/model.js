/**
 * Created by surajsatheeshnair on 11/7/17.
 */
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/cs5610'; // for local
var db = mongoose.connect(connectionString,{useMongoClient: true});
if(process.env.MLAB_USERNAME) { // check if running remotely
  var username = process.env.MLAB_USERNAME; // get from environment
  var password = process.env.MLAB_PASSWORD;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds135514.mlab.com:35514/heroku_330hh7vq';
  db = mongoose.connect(connectionString,{useMongoClient: true});
}
module.exports = db;
