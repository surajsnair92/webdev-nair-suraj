module.exports = function(app) {

  app.get('/api/page/:pageId', findPageById);
  app.get('/api/website/:websiteId/page', findPagesInWebsite);
  app.post('/api/website/:websiteId/page', createPage);
  app.delete('/api/page/:pageId', deletePage);
  app.put('/api/page/:pageId', updatePage);

  pages_list = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 5', 'websiteId': '567', 'description': 'Lorem'},
    {'_id': '333', 'name': 'Post 22', 'websiteId': '567', 'description': 'Lorem'}
  ];
  var pageModel = require('../models/page/page.model.server');

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page.websiteId = websiteId;

    pageModel.createPage(page)
      .then(function (page) {
        pageModel.findAllPagesForWebsite(websiteId)
          .then(function (pages) {
            res.json(pages)
          });
        res.json(page);
      });
  }



  function findPagesInWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function (websites) {
        res.json(websites);
      })
  }

  function findPagesByWebsiteId(websiteId) {
    var pages = [];
    for(var i = 0; i < pages_list.length; i++){
      if(pages_list[i].websiteId === websiteId){
        pages.push(pages_list[i]);
      }
    }
    res.json(pages);
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    var page = pages_list.find(function (page) {
      return page['_id'] === pageId;
    });
    res.json(page);
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function (page) {
        res.json(page);
      })
  }

  function deletePage(req, res) {
    var pageId = req.param('pageId');
    var page = req.body;
    pageModel.deletePage(pageId)
      .then(function (page) {
        res.json(page)
      })
  }
}
