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

  var websiteModel = require('../models/website/website.model.server');


  function findWebsiteById(req, res) {
    var websiteId = req.params["websiteId"];
    websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website);
      })
  }

  function helloUser(req, res) {
    res.send("hi from user service");
  }

  function createWebsite(req, res) {
    var userId = req.params.userId;
    var website = req.body;
    website.developerId = userId;
    websiteModel.createWebsite(website)
      .then(function (website) {
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
        res.json(website);
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    var website = req.body;
    websiteModel.deleteWebsite(websiteId)
      .then(function (website) {
        res.json(website);
      })
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then(function(website){
        res.json(website);
      })
  }



  function findAllWebsitesForUser(req, res) {
    // var username = req.query["username"];
    // var password = req.query["password"];
    var userId = req.params["userId"];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      })
  }

}
