import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class PageService {

  constructor(private http: Http) {

  }
  baseUrl = environment.baseUrl;


  pages: Page[] = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '777', 'name': 'Post 22', 'websiteId': '567', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
  ];

  createPage(websiteId, page) {
    // page._id = Math.random()
    // page.websiteId = webiteId;
    // this.pages.push(page);
    // return page;
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, {
      '_id': Math.random(),
      'name': page.name,
      'websiteId': websiteId,
      'description': page.description
    })
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findPagesByWebsiteId(websiteId) {
    // return this.pages.filter(function (page) {
    //   return page.websiteId === websiteId;
    // });
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageById(pageId) {
    // return this.pages.find(function (page) {
    //   return page._id === pageId;
    // });
    console.log('pageId',pageId)
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updatePage(pageId, page) {
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     this.pages[x].name = page.name;
    //     this.pages[x].description = page.description;
    //     return this.pages[x];
    //   }
    // }
    const url = this.baseUrl + '/api/page/'+pageId;
    return this.http.put(url, {
      '_id': Math.random(),
      'name': page.name,
      'websiteId': page.websiteId,
      'description': page.description
    })
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deletePage(pageId) {
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     delete this.pages[x];
    //   }
    // }
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );

  }


}
