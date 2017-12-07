import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;


  createWidgetText(pageId, widget) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    const test =  {
      name: widget.name,
      text: widget.text,
      size: widget.size,
      widgetType: widget.widgetType,
      pageId: pageId
    };
    return this.http.post(url, test)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.status;
      });
  }

  createWidgetHtml(pageId, widget1) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    widget1 = {"widgetType": "HTML"};
    return this.http.post(url, widget1)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllWidgetsForPage(pageId) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    console.log(url);
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidget(widgetId, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    const test = {
      name: widget.name,
      text: widget.text,
      size: widget.size,
      widgetType: widget.widgetType,
      pageId: widget.pageId
    };
    return this.http.put(url, widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidgetPosition(pageId, initial, final) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial='+ initial + '&final=' + final;
    return this.http.put(url, null)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createWidgetImage(pageId, widget) {
    const url = this.baseUrl +  '/api/page/' + pageId + '/widget';
    const test =  {
      'name': widget.name,
      'pageId': pageId,
      'widgetType': widget.widgetType,
      'url': widget.url,
      'width': widget.width
    };
    return this.http.post(url, test)
      .map((res: Response) => {
        return res.json();
      });
  }


  createWidgetYoutube(pageId, widget) {
    const url = this.baseUrl +  '/api/page/' + pageId + '/widget';
    const test =  {
      'name': widget.name,
      'pageId': pageId,
      'widgetType': widget.widgetType,
      'url': widget.url,
      'width': widget.width
    };
    return this.http.post(url, test)
      .map((res: Response) => {
        return res.json();
      });
  }

}
  //
  // findWidgetsByPageId(pageId) {
  //   const url = this.baseUrl + '/api/page/'+ pageId+'/widget';
  //   return this.http.get(url)
  //     .map((res: Response) => {
  //         return res.json();
  //       }
  //     );
  // }
  //
  // findWidgetById(widgetId) {
  //   const url = this.baseUrl + '/api/widget/' + widgetId;
  //   return this.http.get(url)
  //     .map((res: Response) => {
  //         return res.json();
  //       });
  // }
  //
  // updateWidget(widgetId, widget) {
  //   const url = this.baseUrl +  '/api/widget/' + widgetId;
  //   const test = {
  //     _id: widgetId,
  //     name: widget.name,
  //     widgetType: widget.widgetType,
  //     pageId: widget.pageId
  //   };
  //   return this.http.put(url, widget)
  //     .map((res: Response) => {
  //         return res.json();
  //       });
  // }
  //
  // deleteWidget(widgetId) {
  //   const url = this.baseUrl +  '/api/widget/' + widgetId;
  //   return this.http.delete(url)
  //     .map((res: Response) => {
  //         return res.status;
  //       });
  // }

