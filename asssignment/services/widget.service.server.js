module.exports = function(app) {
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findWidgetsInPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "333 ",  "text": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "333", "text": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "333", "text": "<p>Lorem ipsum</p>"}
  ];

  function createWidget(req, res) {
    var pageId = req.param('pageId');
    var widget = req.body;
    widget['_id'] = Math.floor(Math.random() * 1000) + '';
    widget['pageId'] = pageId;
    widget['index'] = getHighestIndex(pageId) + 1;
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
    return;
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
      if (widgets[i]['_id'] === widgetId) {
        delete widgets[i];
        return;
      }
    }
    return;
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var upFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = upFile.originalname;
    var filename = upFile.filename;
    var path = upFile.path;
    var destination = upFile.destination;
    var size = upFile.size;
    var mimetype = upFile.mimetype;

    widget = {
      '_id': widgetId,
      'widgetType': 'IMAGE',
      'pageId': pageId,
      'width': width
    };

    widget.url = '/assets/uploads/' + filename;
    this.widgets.push(widget);

    var widgetUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';

    res.redirect(widgetUrl);
  }


}
