/**
 * Created by surajsatheeshnair on 11/11/17.
 */
var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var pageModel = require("../page/page.model.server");

var widgetModel = mongoose.model("widgetModel", widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(widget){
  return widgetModel.create(widget);
}

function findAllWidgetsForPage(pageId){
  return widgetModel.find({pageId:pageId});

}

function findWidgetById(widgetId){
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget){
  return widgetModel.update({_id:widgetId},widget)

}

function deleteWidget(widgetId, pageId){
  return widgetModel.remove({_id:widgetId})
    .then(function () {
      pageModel.deleteWidget(pageId,widgetId);
      return;

    })
}

function reorderWidget(pageId, start, end) {
  return model.pageModel
    .findPageById(pageId)
    .then(function (page) {
      page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
      page.save();
      return 200;
    }, function (err) {
      return err;
    });
}
