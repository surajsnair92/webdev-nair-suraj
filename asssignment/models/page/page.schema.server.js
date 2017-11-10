/**
 * Created by surajsatheeshnair on 11/9/17.
 */
var mongoose = require('mongoose');
var pageSchema = mongoose.Schema({
  name: String,
  title: String,
  description: String,
  websiteId: String
}, {collection: 'page'});

module.exports = pageSchema;
