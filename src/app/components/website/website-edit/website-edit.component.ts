import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client'
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client'
import { UserService } from '../../../services/user.service.client'
import { Router } from '@angular/router';
@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  web: Website;
  websiteId: String;
  userId:String;
  user: User;
  constructor(private websiteService: WebsiteService,
  private userService: UserService,
  private route: ActivatedRoute,private router: Router) { }

  updateWebsite(website){
    console.log(website);
    this.websiteService.updateWebsite(website)
      .subscribe((website: Website) => {
        if(website){
          this.web = website;
          this.router.navigate(['/user/'+this.userId+'/website']);
        }
      });
  }

  deleteWebsite(website){
    this.websiteService.deleteWebsite(this.websiteId)
    // this.userService.findUserByUsername(username)
      .subscribe((web: Website) => {
        if(web){
          this.web = website;
          this.router.navigate(['/user/'+this.userId+'/website']);
        }
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.websiteService.findAllWebsitesForUser(this.userId)
        .subscribe((web: Website) => {
          if(web){
            this.web = web;
            this.web._id = this.websiteId
            console.log(this.websiteId);
            // this.router.navigate(['/user/',this.userId,'/webite']);
          }
        });
      // this.web = this.websiteService.findWebsiteById(this.websiteId);

    })
  }

}
