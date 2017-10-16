/**
 * Created by surajsatheeshnair on 10/15/17.
 */
import { Page } from '../models/page.model.client'
import { Injectable } from '@angular/core';

@Injectable()

export class PageService {
  pages: Page [] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'post 2', '456', 'Lorem'),
    new Page('123', 'post 5', '567', 'Lorem'),
    new Page('456', 'post 6', '567', 'Lorem'),
    new Page('789', 'post 7', '567', 'Lorem')
  ];

  deletePage(pageId) {
    var pageToDelete = this.findPageById(pageId);
    var index = this.pages.indexOf(pageToDelete);
    this.pages.splice(index, 1);

  }

  findPageByWebsiteId(websiteId) {
    var result = [];
    for (var page in this.pages) {
      if (this.pages[page].websiteId === websiteId) {
        result.push(this.pages[page]);
      }
    }
    return result;

  }

  findPageById(pageId) {
    return this.pages.find(function (page) {
      return page._id === pageId;

    })
  }

  updatePage(pageId, page) {
    for (var p in this.pages) {
      if (this.pages[p]._id === pageId) {
        this.pages[p].name = page.name;
        this.pages[p].description = page.description;
        return this.pages[p];
      }
    }
  }
}
