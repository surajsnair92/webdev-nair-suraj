import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client'
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client'
import { UserService } from '../../../services/user.service.client'
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Router } from '@angular/router'
@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  web: Website;
  name: String;
  description: String;
  userId:String;
  user: User;
  constructor(private websiteService: WebsiteService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http) { }

  createWebsite(website){

    this.websiteService.createWebsite(this.userId, website)
      .subscribe((websites) => {
        this.web = websites;
        this.router.navigate(['/user', this.userId, 'website']);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteService.findAllWebsitesForUser(this.userId)
        .subscribe((web: Website) => {
          if(web){
            this.web = web;
          }
        });
      // this.user = this.userService.findUserById(this.userId)
      // this.web = this.websiteService.getListOfWebsites(this.userId)
      // this.web = this.websiteService.findWebsiteById(this.websiteId);

    })
  }

}
