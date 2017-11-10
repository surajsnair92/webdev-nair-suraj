/**
 * Created by surajsatheeshnair on 11/9/17.
 */

/**
 * Created by surajsatheeshnair on 11/9/17.
 */

var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var pageModel = mongoose.model('PageModel',pageSchema );
pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
module.exports = pageModel;

function createPage(page) {
  return pageModel.create(page);
}
function findAllPagesForWebsite(websiteId) {
  return pageModel.find({websiteId: websiteId});
}
function findPageById(pageId){
  return pageModel.findById(pageId);
}
function updatePage(pageId, page) {
  return pageModel.update({_id:pageId}, page);
}
function deletePage(pageId){
  return pageModel.findByIdAndRemove({_id: pageId});
}

