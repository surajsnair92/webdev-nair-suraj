import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  pages :Page;
  name: String;
  description: String;

  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) { }

  createPage(page) {
    this.pageService.createPage(this.websiteId, page)
      .subscribe((page: Page) => {
        this.pages = page;
        console.log('page',this.pages);
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page'])
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
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
