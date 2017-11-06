module.exports = function(app) {
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../public/uploads' });
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findWidgetsInPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "543", "size": 4, "text": "Hello World! Welcome to Widgets! "},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "543", "width": "50%",
      "url": "http://smallbusinessbc.ca/wp-content/themes/sbbcmain/images/circle-icons/icon-education.svg"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "333", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];

  function createWidget(req, res) {
    var pageId = req.param('pageId');
    var widget = req.body;
    widget['_id'] = Math.floor(Math.random() * 1000) + '';
    widget['pageId'] = pageId;
    widgets.push(widget);
    res.json(widget);
  }

  function findWidgetsInPage(req, res) {
    console.log('jhkjhl');
    var pageId = req.params['pageId'];
    console.log('paaage:',pageId);
    var result = widgets.filter(function (page) {
      return page['pageId'] === pageId;
    });
    console.log(result);
    res.json(result);
  }

  function findWidgetById(req, res) {
    var widgetId = req.param('widgetId');
    var widget = widgets.find(function (widget) {
      return widget['_id'] === widgetId;
    });
    res.json(widget);
  }

  function updateWidget(req, res) {
    var widgetId = req.param('widgetId');
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]['_id'] === widgetId) {
        switch (widget['type']) {
          case 'HEADING':
            widgets[i]['size'] = widget['size'];
            widgets[i]['text'] = widget['text'];
            break;
          case 'IMAGE':
            widgets[i]['width'] = widget['width'];
            widgets[i]['url'] = widget['url'];
            break;
          case 'YOUTUBE':
            widgets[i]['width'] = widget['width'];
            widgets[i]['url'] = widget['url'];
            break;
          case 'HTML':
            widgets[i]['text'] = widget['text'];
            break;
        }
        widgets[i]['_id'] = widgetId;
        res.json(widgets[i]);
        return;
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.param('widgetId');

    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i, 1);
      }
    }
    return res.send(widgets)
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    var callbackUrl   = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';

    res.redirect(callbackUrl);
  }
}
