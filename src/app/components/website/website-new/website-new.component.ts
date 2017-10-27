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
  userId:String;
  user: User;
  constructor(private websiteService: WebsiteService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http) { }

  createWebsite(web:Website){
    console.log(web);
    this.websiteService.createWebsite(this.userId, web)
      .subscribe((web: Website) => {
        if(web){
          this.router.navigate(['/user/'+this.userId+'/website']);
        }
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      this.websiteService.findAllWebsitesForUser(this.userId)
        .subscribe((web: Website) => {
          if(web){
            this.web = web;
            console.log(web);
            // this.router.navigate(['/user/',this.userId,'/webite']);
          }
        });
      // this.user = this.userService.findUserById(this.userId)
      // this.web = this.websiteService.getListOfWebsites(this.userId)
      // this.web = this.websiteService.findWebsiteById(this.websiteId);

    })
  }

}
