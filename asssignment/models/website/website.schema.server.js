/**
 * Created by surajsatheeshnair on 11/9/17.
 */

var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema({
  name: String,
  description: String,
  developerId: String
}, {collection: 'website'});

module.exports = websiteSchema;
