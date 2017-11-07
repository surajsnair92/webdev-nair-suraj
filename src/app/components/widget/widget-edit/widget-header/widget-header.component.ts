import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  headerText: String;
  headerSize: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  edit: Boolean;
  widget = {};
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.headerText = 'Page';
      this.headerSize = '2';
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.edit = true;
        this.headerText = this.widget['text'];
        this.headerSize = this.widget['size'];
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'HEADER';
    this.widget['text'] = this.headerText;
    console.log(this.widget['text']);
    this.widget['size'] = this.headerSize;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }

  updateWidget() {
    this.widget['widgetType'] = 'HEADER';
    this.widget['text'] = this.headerText;
    this.widget['size'] = this.headerSize;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {

      });
  }

}
