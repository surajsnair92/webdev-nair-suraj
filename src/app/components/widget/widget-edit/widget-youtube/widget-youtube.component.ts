import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  name: String;
  text: String;
  url: String;
  width: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  edit: Boolean;
  widget = Widget;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
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

  createWidget(name, text, url) {
    const test = {
      name: name,
      text: text,
      url: url,
      widgetType : 'YOUTUBE',
      pageId: this.pageId,
      width: '50'
    };
    console.log(test);

    this.widgetService.createWidgetYoutube(this.pageId, test)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
        }
      });
  }

  updateWidget() {
    const test = {
      name: name,
      // text: text,
      // url: url,
      widgetType : 'YOUTUBE',
      pageId: this.pageId,
      width: '50'
    };
    this.widgetService.updateWidget(this.widgetId, test)
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
