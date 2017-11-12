export class Widget{
  _id: String;
  text: String;
  name: String;
  widgetType: String;
  pageId: String;
  size: String;


  constructor(_id, widgetType, pageId, _text, name, size){
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = _text;
    this.name = name;
    this.size = size;

  }

}
