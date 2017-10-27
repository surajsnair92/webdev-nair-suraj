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

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page['_id'] = Math.random();
    page['websiteId'] = websiteId;
    pages_list.push(page);
    res.json(page);
  }

  function findPagesInWebsite(req, res) {
    console.log('jhkjhl');
    var websiteId = req.params['websiteId'];
    console.log('web:',websiteId)
    var result = pages_list.filter(function (page) {
      return page['websiteId'] === websiteId;
    });
    res.json(result);
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
    var data = null;

    for (i =0 ; i < pages_list.length; i++){
      if(pages_list[i]._id == pageId){
        pages_list[i].name = page.name;
        pages_list[i].description = page.description;
      }
    }
    return res.send(pages_list)
  }

  function deletePage(req, res) {
    var pageId = req.param('pageId');
    for (var x = 0; x < pages_list.length; x++) {
      if (pages_list[x]['_id'] === pageId) {
        delete pages_list[x];
        return;
      }
    }
  }

}
