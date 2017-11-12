import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  text: string;
  name: string;
  rows: string;
  placeholder: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;
  formatted: string;
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.pageId)
        .subscribe((widget) => {
          if(widget){
            this.widget = widget;
          }
        });
    });
  }
  createWidget(rows, text, placeholder, name, formatted) {
    const test = {
      name: name,
      text: text,
      placeholder: placeholder,
      pageId: this.pageId,
      rows: rows,
      widgetType: 'TEXT',
      formatted: formatted
    };
    this.widgetService.createWidgetText(this.pageId, test)
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

  updateWidget(rows, text,placeholder, name, formatted) {
    const test = {
      name: name,
      text: text,
      placeholder: placeholder,
      pageId: this.pageId,
      rows: rows,
      widgetType: 'TEXT',
      formatted: formatted
    };
    this.widgetService.updateWidget(this.widgetId, test)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
        }
      });
  }

}
