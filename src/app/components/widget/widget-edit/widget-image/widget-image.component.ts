import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';
@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  baseUrl = environment.baseUrl;
  imageName: String;
  imageText: String;
  imageWidth: String;
  imageUrl: String;
  uploadImage: String;
  edit: Boolean;
  widget = {};
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.edit = true;
        this.imageName = this.widget['name'];
        this.imageText = this.widget['text'];
        this.imageWidth = this.widget['width'];
        this.imageUrl = this.widget['url'];
        this.uploadImage = this.widget['upload'];
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.imageText;
    this.widget['url'] = this.imageUrl;
    this.widget['width'] = this.imageWidth;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.imageName;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }
  updateWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.imageText;
    this.widget['url'] = this.imageUrl;
    this.widget['width'] = this.imageWidth;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.imageName;
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
