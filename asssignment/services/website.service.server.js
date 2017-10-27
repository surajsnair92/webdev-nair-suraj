/**
 * Created by surajsatheeshnair on 10/24/17.
 */

module.exports = function (app) {
  app.get("/api/website/:websiteId", findWebsiteById);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);
  var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  ];


  function findWebsiteById(req, res) {
    var websiteId = req.params["websiteId"];
    var website  = websites.find(function (website) {
      return website._id == websiteId;
    });
    res.json(website)
  }

  function helloUser(req, res) {
    res.send("hi from user service");
  }

  function createWebsite(req, res) {
    var data = req.body;
    var websiteId = data._id;
    websites.push(data);
    var website  = websites.find(function (website) {
      return website._id == websiteId;
    });
    res.json(websites)
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    var body = req.body;
    for (i =0 ; i < websites.length; i++) {
      if (websites[i]._id == websiteId) {
        websites.splice(i,1)
      }
    }
    return res.send(websites)
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var website = req.body;
    var data = null;

    for (i =0 ; i < websites.length; i++){
      if(websites[i]._id == websiteId){
        websites[i].name = website.name
        websites[i].description = website.description;
      }
    }
    return res.send(websites)
  }



  function findAllWebsitesForUser(req, res) {
    // var username = req.query["username"];
    // var password = req.query["password"];
    var userId = req.params["userId"];
    var result = [];
    for(var i=0;i<websites.length;i++){
      if(websites[i].developerId == userId){
        result.push(websites[i]);
      }
    }
   if(result){
      // console.log(result)
      res.send(result);
   }
   else{
     res.send({});
   }
      return;
   res.json(websites);
  }

}
