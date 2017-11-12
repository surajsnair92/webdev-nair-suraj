import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  text: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
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
      this.widgetService.findWidgetById(this.pageId)
        .subscribe((widget) => {
          if(widget){
            this.widget = widget;
          }
        });
    });
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
      });
  }

  createWidget(text) {
    const test = {
      text: text,
    };
    this.widgetService.createWidgetHtml(this.pageId, test)
      .subscribe((widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
        }
      });
  }
  updateWidget(text) {
    const test = {
      text: text,
      pageId: this.pageId,
      widgetType: 'HTML'
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
//   createWidget(text) {
//     const test = {
//       text: text,
//     };
//     this.widgetService.createWidget(this.pageId, test)
//       .subscribe((widget) => {
//         if (widget) {
//           this.widget = widget;
//           this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
//         }
//       });
//   }
//
// }
