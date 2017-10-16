import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client';
import {Page} from '../../../models/page.model.client';
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  webId: String;
  page: Page[];

  constructor(private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      this.webId = params['wid']
      this.page = this.pageService.findPageByWebsiteId(this.webId)
    })

  }

}
