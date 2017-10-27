import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client'
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client'
import { UserService } from '../../../services/user.service.client'
import { PageService } from '../../../services/page.service.client';
import { WidgetService } from '../../../services/widget.service.client';
import {Page} from '../../../models/page.model.client';
import {Widget} from "../../../models/widget.model.client";
import {WidgetHeading} from "../../../models/widget-others.model.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  page: Page[];
  widget: Widget[];
  widgetHeader: WidgetHeading[];

  constructor(private pageService: PageService,
              private widgetService: WidgetService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      this.webId = params['wid']
      this.pageId = params['pid']
      console.log(this.pageId)
      // this.widget = this.widgetService.findWidgetByPageId(this.pageId);
      // this.widgetHeader = this.widgetService.findWidgetByPageId(this.pageId)
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((widgets) => {
          this.widget = widgets;
        });
      console.log((this.widget))


    })

  }
}
