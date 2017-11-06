import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  videoName: String;
  videoDesc: String;
  url: String;
  width: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  edit: Boolean;
  widget = {};
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.edit = true;
        this.videoName = this.widget['name'];
        this.videoDesc = this.widget['text'];
        this.url = this.widget['url'];
        this.width = this.widget['width'];
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.videoName;
    this.widget['text'] = this.videoDesc;
    this.widget['url'] = this.url;
    this.widget['width'] = this.width;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }

  updateWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.videoName;
    this.widget['text'] = this.videoDesc;
    this.widget['url'] = this.url;
    this.widget['width'] = this.width;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data) => {

      });
  }

}
