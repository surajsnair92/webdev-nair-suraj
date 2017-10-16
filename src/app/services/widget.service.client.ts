import { Website } from '../models/websites.model.client'
import { Injectable } from '@angular/core';
import {WidgetHTML} from "../models/widget.model.client";
import {WidgetHeading} from "../models/widget-others.model.client";
import {WidgetImage} from "../models/widget-image.model.client";

@Injectable()
export class WidgetService {
  widgets: WidgetHTML [] = [
    new WidgetHTML('456', 'HTML', '123', "<p>Lorem ipsum</p>"),
    new WidgetHTML('789', 'HTML', '123', "<p>Lorem ipsum</p>"),
    new WidgetHTML('123', 'HTML', '321', "<p>Lorem ipsum</p>"),
    new WidgetHTML('234', 'HTML', '567', "<p>Lorem ipsum</p>")
  ];

  widgetHeader: WidgetHeading[] =[
    new WidgetHeading('456', 'Heading', '123', '2', "Heading 1"),
    new WidgetHeading('123', 'Heading', '567', '4', "<p>Lorem ipsum</p>")
];
  widgetMedia: WidgetImage[] =[
    new WidgetImage('456', 'Image', '123', '100','http://lorempixel.com/400/200'),
    new WidgetImage('123', 'YouTube', '567', '4', "https://youtu.be/AM2Ivdi9c4E"),
  ];

  // deleteWidget(widgetId) {
  //   var widget = this.findWidgetById(widgetId);
  //   var index = this.widgets.indexOf(widget);
  //   this.widgets.splice(index, 1);
  // }

  findWidgetByPageId(pageId) {
    var result = [];
    for (var w in this.widgets) {
      if (this.widgets[w].pageId === pageId) {
        result.push(this.widgets[w]);
      }
    }
    for (var w in this.widgetHeader) {
      if (this.widgetHeader[w].pageId === pageId) {
        result.push(this.widgetHeader[w]);
      }
    }
    for (var w in this.widgetMedia) {
      if (this.widgetMedia[w].pageId === pageId) {
        result.push(this.widgetMedia[w]);
      }
    }
    return result;

  }

  // findWidgetById(widgetId) {
  //   this.widget = this.widgets.find(function (widget) {
  //     return widget._id === widgetId;
  //
  //   })
  // }

  updateWidget(widgetId, widget) {
    for (var w in this.widgets) {
      if (this.widgets[w]._id === widgetId) {
        switch (widget.widgetType) {
          case "HEADER":
            this.widgetHeader[w].size = widget.size;
            this.widgetHeader[w]._text = widget.text;
            return this.widgets[w];
          case "IMAGE":
            this.widgetMedia[w]._url = widget.url;
            this.widgetMedia[w].width = widget.width;
            return this.widgets[w];
          case "YOUTUBE":
            this.widgetMedia[w]._url = widget.url;
            this.widgetMedia[w].width = widget.width;
            return this.widgets[w];
          default:
            return null;
        }
      }
    }
    return null;

  }

  createWidget(pageId, widget) {
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;

  }
}
