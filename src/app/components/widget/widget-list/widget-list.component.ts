import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from "../../../models/widget.model.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgets : Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService.findAllWidgetsForPage(this.pageId)
        .subscribe((widgets) => {
          this.widgets = widgets;
          console.log(this.widgets)
        });
    });

  }
  // https://angular.io/api/platform-browser/DomSanitizer
  safeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updatePosition(event: Object) {
    this.widgetService.updateWidgetPosition(this.pageId, event['startIndex'], event['endIndex'])
      .subscribe((data) => {
        if (data && data.success === true) {
          console.log('success');
        }else {
          console.log('error in updating position');
        }
      });
  }

}
