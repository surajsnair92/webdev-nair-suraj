export class WidgetHTML{
  _id: String;
  widgetType: String;
  pageId: String;
  _text: String;

  constructor(_id, widgetType, pageId, _text){
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this._text = _text;
  }

}
