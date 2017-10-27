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
  pageName: String;
  pageDesc: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

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

  createPage(page) {
    console.log('page',page);
    this.pageService.createPage(this.websiteId, page)
      .subscribe((page: Page) => {
        if(page){
          this.router.navigate(['/user/'+this.userId+'/website/'+this.websiteId+'/page']);
        }
      });
  }

}
