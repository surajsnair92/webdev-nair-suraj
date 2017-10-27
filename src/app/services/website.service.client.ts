import { Website } from '../models/websites.model.client'
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

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

  constructor(private http:Http){}

  findWebsiteById(websiteId){
    return this.websites.find(function (web) {
      return web._id === websiteId;
    })
  }

  findAllWebsitesForUser(userId){
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
  }


  createWebsite(userId, website: Website){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    // console.log(website);
    return this.http.post(url,{
      '_id': '296',
      'name': website.name,
      'developerId': userId,
      'description': website.description
    })
      .map((response: Response) => {
        return response.json()
      });
  }

  updateWebsite(web){
    // for (let i =0 ; i < this.websites.length; i++){
    //   const _website = this.websites[i];
    //   if(_website._id === web._id){
    //     this.websites[i].name = web.name
    //     this.websites[i].description = web.description
    //   }
    // }
    const url = 'http://localhost:3100/api/website/'+web._id;
    console.log('console',web);
    return this.http.put(url, {
      '_id': web._id,
      'name': web.name,
      'developerId': web.developerId,
      'description': web.description
    })
      .map((response: Response) => {
        return response.json()
      })
  }

  findWebsitesByUser(userId){
    return this.websites.find(function (web) {
      return web.developerId === userId;
    })
  }

  deleteWebsite(websiteId){
    // this.websites.splice(websiteId,1)
    // return this.websites
    const url = 'http://localhost:3100/api/website/'+websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json()
      });
  }

}
