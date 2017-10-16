/**
 * Created by surajsatheeshnair on 10/16/17.
 */
export class WidgetHeading{
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  _text: String;

  constructor(_id, widgetType, pageId, size,  _text){
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this._text = _text;
  }
}
