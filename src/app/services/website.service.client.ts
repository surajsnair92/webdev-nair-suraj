import { Website } from '../models/websites.model.client'
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
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
  baseUrl = environment.baseUrl;

  findWebsiteById(websiteId){
    return this.websites.find(function (web) {
      return web._id === websiteId;
    })
  }

  findAllWebsitesForUser(userId){
    const url = this.baseUrl +'/api/user/'+ userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
  }


  createWebsite(userId, website){
    // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
    const url = this.baseUrl+'/api/user/' + userId + '/website';
    const test = {
      name: website.name,
      description: website.description
    };
    console.log(website);
    return this.http.post(url, test)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(userId, web){
    const url = this.baseUrl+'/api/website/'+web._id;
    console.log('console',web);
    const test = {
      _id: web._id,
      name: web.name,
      description: web.description,
      developerId: userId
    };
    return this.http.put(url, test)
      .map((response: Response) => {
        return response.json();
      })
  }

  deleteWebsite(websiteId){
    // this.websites.splice(websiteId,1)
    // return this.websites
    const url = this.baseUrl+'/api/website/'+websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json()
      });
  }

}
