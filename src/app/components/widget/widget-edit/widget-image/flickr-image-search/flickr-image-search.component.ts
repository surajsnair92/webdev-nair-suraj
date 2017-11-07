import {Component, OnInit, ViewChild} from '@angular/core';
import {FlickerService} from '../../../../../services/flickr.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  searchText: String;
  photos = {};

  constructor(private flickrService: FlickerService,
              private activatedRoute: ActivatedRoute) { }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      websiteId: this.websiteId,
      pageId: this.pageId,
      url: url
    };
  }
    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.userId = params['userId'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        this.flickrService.searchPhotos('searchme')
          .subscribe((photos) => {
            this.photos = photos;
          });
      });  }

}
