module.exports = function(app) {
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../public/uploads' });

  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/page/:pageId/widget', sortWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var widgetModel = require("../models/widget/widget.model.server");

  function findAllWidgetsForPage(req,res) {
    var pageId = req.params.pageId;
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);

      })
  }

  function findWidgetById(req,res) {
    var widgetId = req.params.widgetId;
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function updateWidget(req,res) {
    var widget = req.body;
    var widgetId = req.params.widgetId;
    var widgetType = widget.widgetType;
    var pageId = req.params.pageId;
    widgetModel
      .findWidgetById(widgetId)
      .then(function (found) {
        switch(found.widgetType){
          case "HEADER":
            found.size = widget.size;
            found.text = widget.text;
            widgetModel
              .updateWidget(widgetId,found)
              .then(function (widget) {
                  // console.log(widget);
                  res.json(widget);
                },
                function (error) {
                  console.log('error: ' + error);
                });
            break;
          case "IMAGE":
            found.url = widget.url;
            found.width = widget.width;
            found.name = widget.name;
            found.text= widget.text;
            widgetModel
              .updateWidget(widgetId,found)
              .then(function (widget) {
                res.json(widget);

              });
            break;
          case "YOUTUBE":
            found.url = widget.url;
            found.width = widget.width;
            found.name = widget.name;
            found.text= widget.text;
            // console.log(found);
            widgetModel
              .updateWidget(widgetId ,found)
              .then(function (widget) {
                res.json(widget);

              });
            break;
          case "TEXT":
            found.text = widget.text;
            found.rows = widget.rows;
            found.placeholder = widget.placeholder;
            found.formatted = widget.formatted;
            widgetModel
              .updateWidget(widgetId,found)
              .then(function (widget) {
                res.json(widget);

              });
            break;
          case "HTML":
            found.text = widget.text;
            widgetModel
              .updateWidget(widgetId,found)
              .then(function (widget) {
                res.json(widget);

              });
            break;
          default:
            res.sendStatus(400);
            break;
        }

      })
  }
  function createWidget(req,res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget['pageId'] = pageId;
    widgetModel
      .createWidget(widget)
      .then(function (widget) {
        widgetModel.findAllWidgetsForPage(pageId)
          .then(function (widgets) {
            res.json(widgets)
          });
        res.json(widget);
      });
  }

  function sortWidgets(req, res) {
    var initial = req.query['initial'];
    var final = req.query['final'];
  }

  function deleteWidget(req,res) {
    var widgetId = req.params.widgetId;
    var pageId = req.params.pageId;
    widgetModel
      .deleteWidget(widgetId, pageId)
      .then(function () {
        res.sendStatus(200);

      })
  }

  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId        = req.body.userId;
    var websiteId     = req.body.websiteId;
    var pageId        = req.body.pageId;
    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        widget.url = '/assignment/uploads/'+filename;
        widgetModel.updateWidget(widgetId,widget)
          .then(function () {
            var callbackUrl= "/assignment/#!/website/"+websiteId+"/page/"+pageId+"/widget";
            res.redirect(callbackUrl);

          });

      });
  }
}
