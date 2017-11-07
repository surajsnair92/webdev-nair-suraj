/**
 * Created by surajsatheeshnair on 11/6/17.
 */
import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class FlickerService {

  key = "b27927bb63a72f32d7be94ccca1e811c";
  secret = "41c78a13775d47a4";
  urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


  constructor(private http: Http) {
  }

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);

    return this.http.get(url);
  }
}

