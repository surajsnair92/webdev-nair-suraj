import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component'
import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component'
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component'
import {AuthenticationService} from "./services/authentication.service.client";



const APP_ROUTES: Routes = [
  // {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'user/:userId/website', component: WebsiteListComponent},
  {path: 'user/:userId/website/new', component: WebsiteNewComponent},
  {path: 'user/:userId/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:userId/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:userId/website/:wid/page', component: PageListComponent},
  {path: 'user/:userId/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:userId/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path : 'user/:userId/website/:wid/page/:pid/widget/new/heading' , component: WidgetHeaderComponent},
  {path : 'user/:userId/website/:wid/page/:pid/widget/new/image' , component: FlickrImageSearchComponent},
  {path : 'user/:userId/website/:wid/page/:pid/widget/new/youtube' , component: WidgetYoutubeComponent},
  {path : 'user/:userId/website/:wid/page/:pid/widget/new/html' , component: WidgetHtmlComponent},
  {path : 'user/:userId/website/:wid/page/:pid/widget/new/text' , component: WidgetTextComponent}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
