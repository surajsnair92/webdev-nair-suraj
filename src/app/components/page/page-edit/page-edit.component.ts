import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  page = {};
  pageId: String;
  pages :Page;
  pageName: String;
  pageDesc: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.page = this.pageService.findPageById(this.pageId);
      this.pageService.findPagesByWebsiteId(this.websiteId)
        .subscribe((pages) => {
          if (pages) {
            this.pages = pages;
          }
        });

    });
  }

  updatePage(page){
    console.log('jhkjhk',page);
    this.pageService.updatePage(this.pageId, page)
      .subscribe((page: Page) => {
        if(page){
          this.pages = page;
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page']);
        }
      });
  }

  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((pages) => {
        this.pages = pages;

      });
  }

}
