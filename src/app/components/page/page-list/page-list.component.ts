import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pages :Page[];
  userId: String;
  websiteId: String;
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageService.findPagesByWebsiteId(this.websiteId)
        .subscribe((page) => {
          if(page){
            this.pages = page;
            console.log(this.pages);
          }
        });
    });
  }

}
