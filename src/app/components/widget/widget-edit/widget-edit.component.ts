import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})

export class WidgetEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgets: Widget;
  widget = {};
  widgetType: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          if(widget){
            this.widgets = widget;
            this.widgetType = widget.widgetType;
            console.log(this.widgets)
          }
        });
    });
  }

}

