import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client'
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client'
import { UserService } from '../../../services/user.service.client'
import {Router } from '@angular/router'
@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {
  websiteId : String;
  web: Website[];
  userId:String;
  user: User;

  constructor(private websiteService: WebsiteService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.websiteService.findAllWebsitesForUser(this.userId)
        .subscribe((web: Website[]) => {
          if(web){
            this.web = web;
            console.log(web);
            // this.router.navigate(['/user/',this.userId,'/webite']);
          }
        });
      // this.web = this.websiteService.findWebsiteById(this.websiteId);

    })
  }
}
