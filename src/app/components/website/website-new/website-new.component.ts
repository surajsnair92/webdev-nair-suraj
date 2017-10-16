import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/websites.model.client';
import {User} from '../../../models/user.model.client'
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client'
import { UserService } from '../../../services/user.service.client'

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  web: Website[];
  userId:String;
  user: User;
  constructor(private websiteService: WebsiteService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId']
      this.user = this.userService.findUserById(this.userId)
      this.web = this.websiteService.getListOfWebsites(this.userId)
      // this.web = this.websiteService.findWebsiteById(this.websiteId);

    })
  }

}
