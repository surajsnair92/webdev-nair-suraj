import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  text: String;
  name: String;
  size: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  edit: Boolean;
  widget: Widget;
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          if(widget){
            this.widget = widget;
          }
        });
    });
  }

  createWidget(name, text, size) {
    const test = {
      name: name,
      text: text,
      size: size
    };
    this.widgetService.createWidgetText(this.pageId, test)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
        }
      });
  }

  updateWidget(name, text,size) {
    const test = {
      name: name,
      text: text,
      size: size,
      pageId: this.pageId,
      widgetType: 'HEADER'
    };
    this.widgetService.updateWidget(this.widgetId, test)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
      });
  }

}
