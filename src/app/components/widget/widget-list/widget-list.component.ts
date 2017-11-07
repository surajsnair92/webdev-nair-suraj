import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((widgets) => {
          this.widgets = widgets;
        });
    });
    console.log(this.widgets)
  }
  // https://angular.io/api/platform-browser/DomSanitizer
  safeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
