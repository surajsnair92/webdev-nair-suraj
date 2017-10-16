
export class WidgetImage{
  _id: String;
  widgetType: String;
  pageId: String;
  width: String;
  _url: String;

  constructor(_id, widgetType, pageId, size,  _text){
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.width = size;
    this._url = _text;
  }
}

