import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()

export class WidgetService {

  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;


  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vlDzYIIOYmM'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  createWidget(pageId, widget) {

    const url = this.baseUrl +  '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl + '/api/page/'+ pageId+'/widget';
    return this.http.get(url)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId, widget) {
   const url = this.baseUrl +  '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl +  '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.status;
        }
      );
  }
}
