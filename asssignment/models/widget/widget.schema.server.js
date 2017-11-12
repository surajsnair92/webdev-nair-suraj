/**
 * Created by surajsatheeshnair on 11/11/17.
 */
var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
  pageId: String,
  widgetType:String,
  name:String,
  text:String,
  placeholder:String,
  description:String,
  url:String,
  width:String,
  height:String,
  rows:Number,
  size:Number,
  class:String,
  icon:String,
  deletable:Boolean,
  formatted:Boolean,
  dateCreated:{type:Date, default:Date.now()}
},{collection:"widget"});

module.exports = widgetSchema;
