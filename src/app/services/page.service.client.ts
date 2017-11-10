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

  createPage(websiteId, page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    const test =  {
      'name': page.name,
      'websiteId': websiteId,
      'description': page.description
    };
    return this.http.post(url, test)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPagesByWebsiteId(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json()
      });
  }

  findPageById(pageId) {
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
    const url = this.baseUrl + '/api/page/'+pageId;
    const test = {
      _id: pageId,
      name: page.name,
      description: page.description,
      websiteId: page.websiteId
    };
    return this.http.put(url, test)
      .map((response: Response) => {
        return response.json();
      })
  }

  deletePage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map((res: Response) => {
          return res.json();
        });

  }

}
