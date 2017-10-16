import { Website } from '../models/websites.model.client'
import { Injectable } from '@angular/core';

@Injectable()
export class WebsiteService {
  websites: Website [] = [
    new Website('123','Facebook', '456', 'Lorem'),
    new Website('234','Twitter', '456', 'Lorem'),
    new Website('456','Gizmodo', '456', 'Lorem'),
    new Website('890','Go', '123', 'Lorem'),
    new Website('567','Tic Tac Toe', '123', 'Lorem'),
    new Website('678','Checkers', '123', 'Lorem'),
    new Website('789','Chess', '234', 'Lorem')
  ];

  findWebsiteById(websiteId){
    return this.websites.find(function (web) {
      return web._id === websiteId;
    })
  }

  getListOfWebsites(userId){
    var result = [];
    for (var website in this.websites){
      if(this.websites[website].developerId === userId){
        result.push(this.websites[website]);
      }
    }return result;
  }

  createWebsite(userId, website: Website){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    this.websites.push(website);
    return this.websites.find(function (user) {
      return user._id === userId
    })
  }

  updateWebsite(websiteId, web: Website){
    for (let i =0 ; i < this.websites.length; i++){
      const _website = this.websites[i];
      if(_website._id === web._id){
        this.websites[i].name = web.name
        this.websites[i].description = web.description
      }
    }
  }

  findWebsitesByUser(userId){
    return this.websites.find(function (web) {
      return web.developerId === userId;
    })
  }

  deleteWebsite(websiteId){
    this.websites.splice(websiteId,1)
    return this.websites
  }
}
