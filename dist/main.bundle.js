webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_34__directives_sortable_directive__["a" /* SortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_33__services_authentication_service_client__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_28__services_flickr_service_client__["a" /* FlickerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");



















var APP_ROUTES = [
    // {path: '', component : HomeComponent},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\n  font-size: xx-large;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n<h1> Assignment 3</h1>\n  <div class=\"home\">\n\n  <a routerLink=\"/login\"> Go to Login Page</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header -->\n<nav class=\"ssn-page-navbar-color navbar navbar-default navbar-fixed-top active\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\" col-xs-4 hidden-xs\">\n        <div class=\"\">\n\n          <div class=\"navbar-text pull-right\">\n            <a href=\"#\" class=\"ssn-glyphicon-white navbar-link active\">\n              <span class=\"ssn-glyphicon-black glyphicon glyphicon-plus\"></span>\n            </a>\n          </div>\n\n\n          <div class=\"navbar-text pull-left\">\n            <a [routerLink]=\"['/user', userId, 'website',pageId, 'page']\"\n               class=\"ssn-glyphicon-white navbar-link active\">\n              <span class=\"ssn-glyphicon-black glyphicon glyphicon-chevron-left\"></span>\n            </a>\n          </div>\n\n          <div class=\"navbar-header\">\n            <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n              <div class=\"ssn-glyphicon-black\"> Websites</div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" col-sm-12 col-sm-8 hidden-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a class=\"ssn-glyphicon-black navbar-link\"\n             (click)=\"updatePage(pages)\">\n            <span class=\"ssn-glyphicon-black glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n\n        <div class=\" navbar-header\">\n          <a class=\"ssn-color-white navbar-brand ssn-navbar\">\n            <div class=\"ssn-glyphicon-black\"> Edit Page</div>\n          </a>\n        </div>\n\n      </div>\n      <div class=\" col-xs-12 visible-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"updatePage(pages)\"\n             class=\" navbar-link\">\n            <span class=\"ssn-glyphicon-black glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n\n        <div class=\"navbar-text pull-left\">\n          <a class=\"navbar-link active\" [routerLink]=\"['/user', userId, 'website',pageId, 'page']\">\n                     <span class=\"ssn-glyphicon-black glyphicon glyphicon-chevron-left\">\n                     </span>\n          </a>\n        </div>\n\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand ssn-navbar\" >\n            <div class=\"ssn-glyphicon-black\"> Edit Page </div>\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</nav>\n<br><br><br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"ssn-profile col-xs-4 hidden-xs\">\n      <div class=\"\" >\n        <ul class=\"list-group\">\n          <li *ngFor=\"let p of pages\" class=\"ssn-border-none list-group-item\">\n            {{p.name}}\n            <a href=\"website-edit-trial.html\"\n               class=\"pull-right\">\n              <span class=\"glyphicon-cog glyphicon\"></span>\n            </a>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <div class = \"ssn-profile\">\n        <label>Page Name</label>\n        <input [ngModel]=\"pages?.name\" (ngModelChange)=\"pages.name = $event\"\n\n               class=\"form-control\"/>\n        <label>Page Description</label>\n        <textarea [ngModel]=\"pages?.description\" (ngModelChange)=\"pages.description = $event\" class=\"form-control\"></textarea>\n        <br>\n        <a (click)=\"deletePage(pages)\" class=\"btn btn-danger btn-block\">\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <!--Footer -->\n  <nav class=\"ssn-page-navbar-color navbar navbar-default  navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-right\">\n        <a href=\"../user/profile.html\"\n           class=\"navbar-link\">\n          <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {};
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.page = _this.pageService.findPageById(_this.pageId);
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                if (pages) {
                    _this.pages = pages;
                }
            });
        });
    };
    PageEditComponent.prototype.updatePage = function (page) {
        var _this = this;
        console.log('jhkjhk', page);
        this.pageService.updatePage(this.pageId, page)
            .subscribe(function (page) {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (page) {
            if (page) {
                _this.page = page;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
            }
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-profile\">\n  <nav class=\"ssn-page-navbar-color navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n\n        <a class=\"ssn-glyphicon-black navbar-brand ssn-navbar\"\n           [routerLink]=\"['/user', userId, 'website']\">\n          <div class=\"ssn-glyphicon-black glyphicon glyphicon-chevron-left\"></div>\n          Pages\n        </a>\n      </div>\n\n      <div class=\"navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\"\n               class=\"ssn-glyphicon-black glyphicon glyphicon-plus pull-right\">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n<br><br><br>\n<ul class=\"list-group\">\n  <div *ngFor=\"let page of pages\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId,'page', page._id, 'widget']\">\n        {{page.name}}\n      </a>\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\n         class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n  </div>\n</ul>\n\n\n\n\n<div class = \"ssn-profile\">\n  <nav class=\"ssn-page-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a href=\"../user/profile.html\"\n               class=\"ssn-glyphicon-black glyphicon glyphicon-user pull-right\">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (page) {
                if (page) {
                    _this.pages = page;
                    console.log(_this.pages);
                }
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"ssn-page-navbar-color navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 hidden-xs\">\n        <div class=\"\">\n          <div class=\"navbar-text pull-left\">\n            <a [routerLink]=\"['/user', userId, 'website', pageId, 'page']\" class=\"ssn-glyphicon-white navbar-link\">\n                     <span class=\"ssn-glyphicon-black glyphicon glyphicon-chevron-left\">\n                     </span>\n            </a>\n          </div>\n\n          <div class=\"navbar-header\">\n            <a class=\"ssn-glyphicon-black navbar-brand ssn-navbar\" >\n              Pages\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-sm-12 col-sm-8 hidden-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a class=\" navbar-link\"\n             (click)=\"createPage(pages)\">\n            <span class=\"ssn-glyphicon-black glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n\n        <div class=\"navbar-header\">\n          <a class=\"ssn-glyphicon-black navbar-brand ssn-navbar\" >\n            New Page\n          </a>\n        </div>\n      </div>\n      <div class=\" col-xs-12 visible-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a (click)=\"createPage(pages)\"\n             class=\"ssn-glyphicon-white navbar-link\">\n            <span class=\"ssn-glyphicon-black glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n        <div class=\"navbar-text pull-left\">\n          <a class=\"ssn-glyphicon-white navbar-link active\"\n             [routerLink]=\"['/user', userId, 'website', pageId, 'page']\">\n            <span class=\"ssn-glyphicon-black glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </div>\n\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand ssn-navbar\" >\n            <div class=\"ssn-glyphicon-black\"> New Website</div>\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</nav>\n<br><br><br><br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"ssn-profile col-xs-4 hidden-xs\">\n      <div class=\"\" >\n        <ul class=\"list-group\">\n          <li *ngFor=\"let p of pages\" class=\"ssn-border-none list-group-item\">\n            {{p.name}}\n            <a href=\"#\" class=\"pull-right\">\n              <span class=\"glyphicon-cog glyphicon\"></span>\n            </a>\n          </li>\n          <!--<li class=\"ssn-border-none list-group-item\">-->\n            <!--Address Book App-->\n            <!--<a href=\"#\" class=\"pull-right\">-->\n              <!--<span class=\"glyphicon-cog glyphicon\"></span>-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li class=\"ssn-border-none list-group-item\">-->\n            <!--Script Testing App-->\n            <!--<a href=\"#\" class=\"pull-right\">-->\n              <!--<span class=\"glyphicon-cog glyphicon\"></span>-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li class=\"ssn-border-none list-group-item\">-->\n            <!--Blogger-->\n            <!--<a href=\"website-edit-trial.html\" class=\"pull-right\">-->\n              <!--<span class=\"glyphicon-cog glyphicon\"></span>-->\n            <!--</a>-->\n          <!--</li>-->\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <div class = \"ssn-profile\">\n        <label>Page Name</label>\n        <input id =\"name\" type=\"text\"\n               [ngModel]=\"pages?.name\" (ngModelChange)=\"pages.name = $event\"\n               placeholder=\"Enter the name of website\"\n               class=\"form-control\"/>\n        <label>Page Description</label>\n        <textarea id =\"description\" type=\"text\"\n               [ngModel]=\"pages?.description\" (ngModelChange)=\"pages.description = $event\"\n               placeholder=\"Description\"\n                  class=\"form-control\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <nav class=\"ssn-page-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-right\">\n        <a href=\"../user/profile.html\" class=\"navbar-link\">\n                     <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\">\n                     </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
    }
    PageNewComponent.prototype.createPage = function (page) {
        var _this = this;
        this.pageService.createPage(this.websiteId, page)
            .subscribe(function (page) {
            _this.pages = page;
            console.log('page', _this.pages);
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (page) {
                if (page) {
                    _this.pages = page;
                    console.log(_this.pages);
                }
            });
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> Login </h1>\n  <input [(ngModel)] = \"username\"\n         type=\"text\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)] = \"password\"\n         id=\"password\" type=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <a (click)=\"login(username, password)\" class=\"btn btn-primary btn-block\">\n    Login\n  </a>\n  <a href=\"https://webdev-nair-suraj.herokuapp.com/auth/facebook\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n  <a routerLink=\"/register\" class=\"btn btn-success btn-block\">\n    Register\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.username;
        this.password = this.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.sharedService.user = user;
            _this.router.navigate(['/user']);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = error;
        });
    };
    // login(username: String, password: String){
    //
    //   this.userService
    //     .login(this.username, this.password)
    //     .subscribe((user) =>{
    //     this.sharedService.user = user;
    //     console.log(user);
    //       this.router.navigate(['/user']);
    //       })
    //
    //   // this.userService.findUserByCredentials(username, password)
    //   // // this.userService.findUserByUsername(username)
    //   //   .subscribe((user: User) => {
    //   //     if(user){
    //   //       this.router.navigate(['/user', user._id]);
    //   //     }
    //   //   });
    // }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <label for=\"username\"> Username </label>\n    <input id =\"username\" type=\"text\"\n           value=username\n           [(ngModel)] = \"username\"\n         readonly\n         placeholder=\"username\"\n         class=\"form-control\"/>\n\n  <!--<label for=\"email\">Email</label>-->\n  <!--<input id=\"email\" type=\"email\"-->\n         <!--placeholder=\"abc@xyz.com\"-->\n         <!--class=\"form-control\"/>-->\n\n  <label for=\"firstName\"> First Name </label>\n  <input id =\"firstName\" type=\"text\"\n         [(ngModel)] = \"firstName\"\n         placeholder=\"Alice\"\n         class=\"form-control\"/>\n\n  <label for=\"lastName\"> Last Name </label>\n  <input id =\"lastName\" type=\"text\"\n         [ngModel]=\"lastName\"\n\n         placeholder=\"Wonderland\"\n         class=\"form-control\"/>\n\n  <!--<a href=\"../website/website-list.html\" class=\"btn btn-primary btn-block\">-->\n    <!--Websites-->\n  <!--</a>-->\n  <a routerLink=\"/user/{{userId}}/website\" class=\"btn btn-primary btn-block\">\n    Websites\n  </a>\n  <a (click)=\"deleteUser(user)\" class=\"btn btn-danger btn-block\">\n    Delete User\n  </a>\n  <a (click)=\"updateUser(user)\" class=\"btn btn-success btn-block\">\n    Update User\n  </a>\n  <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">\n    Logout\n  </a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, sharedService, route, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.updateUser = function (user) {
        this.userService
            .updateUser(user)
            .subscribe(function (user) {
            console.log(user);
        });
    };
    ProfileComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService
            .deleteUser(user._id)
            .subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.username = this.sharedService.user.username;
        this.firstName = this.sharedService.user.firstName;
        this.userId = this.sharedService.user._id;
        this.lastName = this.sharedService.user.lastName;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//   this.route.params.subscribe(params => {
//     this.userId = params['userId'];
//
//     this.userService.findUserById(this.userId)
//       .subscribe((user: User) => {
//         if(user){
//           this.user = user;
//           this.firstName = user.firstName;
//             console.log(user);
//             this.router.navigate(['/user', user._id]);
//         }
//       });
//
//     // alert(this.userId)
//   })
// }
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\n  <h1> Register </h1>\n  <input [(ngModel)] = \"username\"\n         id =\"username\" type=\"text\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n\n  <input [(ngModel)] = \"password\"\n         id=\"password\" type=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n\n  <input id=\"verify-password\" type=\"password\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n\n  <input [(ngModel)] = \"firstName\"\n         id =\"firstName\" type=\"text\"\n         placeholder=\"Enter first name\"\n         class=\"form-control\"/>\n\n  <input [(ngModel)] = \"lastName\"\n         id=\"lastName\" type=\"text\"\n         placeholder=\"Enter last name\"\n         class=\"form-control\"/>\n\n  <a (click)=\"register(username,password,firstName,lastName)\"\n     class=\"btn btn-primary btn-block\">\n    Register\n  </a>\n\n  <a routerLink=\"/login\"\n     class=\"btn btn-danger btn-block\">\n    Cancel\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.register = function (username, password, firstName, lastName) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userService.register(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user']);
        });
        // this.userService.findUserByUsername(username)
        //   .subscribe((user: User) => {
        //     console.log(user);
        //     if(user === null){
        //       // this.router.navigate(['/profile', user._id])
        //       const newUser = {
        //         username : this.username,
        //         password : this.password,
        //         firstName : this.firstName,
        //         lastName : this.lastName
        //       };
        //       this.userService.createUser(newUser)
        //         .subscribe((userFromServer) => {
        //           this.router.navigate(['/user', userFromServer._id]);
        //         })
        //     }
        //   });
        // this.userService.createUser(username, password, firstName, lastName)
        //   .subscribe((user: User) => {
        //     if(user){
        //       this.router.navigate(['/profile', user._id]);
        //     }
        //   });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top active\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"ssn-edit-website col-xs-4 hidden-xs\">\n        <div class=\"\">\n          <div class=\"navbar-text pull-right\">\n            <a href=\"#\" class=\"ssn-glyphicon-white navbar-link active\">\n                     <span class=\"glyphicon glyphicon-plus\">\n                     </span>\n            </a>\n          </div>\n\n          <div class=\"navbar-text pull-left\">\n            <a [routerLink]=\"['/user', userId, 'website']\" class=\"ssn-glyphicon-white navbar-link active\">\n                     <span class=\"glyphicon glyphicon-chevron-left\">\n                     </span>\n            </a>\n          </div>\n\n          <div class=\"navbar-header\">\n            <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n              Websites\n            </a>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"ssn-edit-website col-sm-12 col-sm-8 hidden-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a class=\"ssn-glyphicon-white navbar-link\"\n             (click)=\"updateWebsite(web)\">\n            <span class=\"glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n\n        <div class=\"ssn-edit-website navbar-header\">\n          <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n            Edit Website\n          </a>\n        </div>\n      </div>\n      <div class=\"ssn-edit-website col-xs-12 visible-xs\">\n        <div class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/{{userId}}/website\"\n             class=\"ssn-glyphicon-white navbar-link\">\n            <span class=\"glyphicon glyphicon glyphicon-ok\"></span>\n          </a>\n        </div>\n\n        <div class=\"navbar-text pull-left\">\n          <a class=\"ssn-glyphicon-white navbar-link active\" [routerLink]=\"['/user', userId, 'website']\">\n                     <span class=\"glyphicon glyphicon-chevron-left\">\n                     </span>\n          </a>\n        </div>\n\n        <div class=\"navbar-header\">\n          <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n            Edit Website\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<br><br><br><br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"ssn-profile col-xs-4 hidden-xs\">\n      <div class=\"\" >\n\n        <ul class=\"list-group\">\n\n          <li *ngFor=\"let website of web\" class=\"ssn-border-none list-group-item\">\n            {{website.name}}\n            <a href=\"#\" class=\"pull-right\">\n              <span class=\"glyphicon-cog glyphicon\"></span>\n            </a>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <div class = \"ssn-profile\">\n        <label>Website Name</label>\n        <input [ngModel]=\"web?.name\" (ngModelChange)=\"web.name = $event\"\n\n               class=\"form-control\"/>\n        <label>Website Description</label>\n        <textarea [ngModel]=\"web?.description\" (ngModelChange)=\"web.description = $event\" class=\"form-control\"></textarea>\n        <br>\n        <a (click)=\"deleteWebsite(web)\" class=\"btn btn-danger btn-block\">\n          Delete\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <nav class=\"navbar navbar-default ssn-edit-website navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId]\"\n           class=\"navbar-link\">\n          <span class=\"ssn-glyphicon-white glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, userService, route, router) {
        this.websiteService = websiteService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    WebsiteEditComponent.prototype.updateWebsite = function (website) {
        var _this = this;
        console.log(website);
        this.websiteService.updateWebsite(this.userId, website)
            .subscribe(function (website) {
            _this.router.navigate(['/user/' + _this.userId + '/website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function (website) {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (web) {
            if (web) {
                _this.web = website;
                _this.router.navigate(['/user/' + _this.userId + '/website']);
            }
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.websiteService.findAllWebsitesForUser(_this.userId)
                .subscribe(function (web) {
                if (web) {
                    _this.web = web;
                    _this.web._id = _this.websiteId;
                    console.log(_this.websiteId);
                    // this.router.navigate(['/user/',this.userId,'/webite']);
                }
            });
            // this.web = this.websiteService.findWebsiteById(this.websiteId);
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-profile\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\"\n           [routerLink]=\"['/user', userId]\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Websites\n        </a>\n      </div>\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <!--<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">-->\n\n      <!-- Edited navbar-right to pull-right to align the cog and user glyphicon -->\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <!-- Edited navbar-right to pull-right to align the cog and user glyphicon -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/user/{{userId}}/website/new\" class=\"glyphicon glyphicon-plus pull-right\"></a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n\n\n\n<br><br><br><br>\n<ul class=\"list-group\">\n  <li *ngFor=\"let website of web\" class=\"ssn-hide-border list-group-item\">\n    <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\"> {{website.name}} </a>\n    <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"pull-right\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n    </a>\n  </li>\n</ul>\n\n\n\n\n<div class = \"ssn-profile\">\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <!--<div class=\"navbar-header\">-->\n\n\n      <!--</div>-->\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <!-- Edited navbar-right to pull-right to align the cog and user glyphicon -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a [routerLink]=\"['/user', userId]\" class=\"glyphicon glyphicon-user pull-right\"></a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, userService, router, route) {
        this.websiteService = websiteService;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findAllWebsitesForUser(_this.userId)
                .subscribe(function (web) {
                if (web) {
                    _this.web = web;
                    console.log(web);
                    // this.router.navigate(['/user/',this.userId,'/webite']);
                }
            });
            // this.web = this.websiteService.findWebsiteById(this.websiteId);
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top active\">\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"ssn-edit-website col-xs-4 hidden-xs\">\n      <div class=\"\">\n        <div class=\"navbar-text pull-right\">\n          <a href=\"website-new.html\" class=\"ssn-glyphicon-white navbar-link active\">\n                     <span class=\"glyphicon glyphicon-plus\">\n                     </span>\n          </a>\n        </div>\n\n\n        <div class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website']\" class=\"ssn-glyphicon-white navbar-link active\">\n                     <span class=\"glyphicon glyphicon-chevron-left\">\n                     </span>\n          </a>\n        </div>\n\n        <div class=\"navbar-header\">\n          <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n            Websites\n          </a>\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n    <div class=\"ssn-edit-website col-sm-12 col-sm-8 hidden-xs\">\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"createWebsite(web)\" class=\"ssn-glyphicon-white navbar-link\">\n                             <span class=\"glyphicon glyphicon glyphicon-ok\">\n                             </span>\n        </a>\n      </div>\n\n      <div class=\"ssn-edit-website navbar-header\">\n        <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n          New Website\n        </a>\n      </div>\n\n    </div>\n    <div class=\"ssn-edit-website col-xs-12 visible-xs\">\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"createWebsite(web)\" class=\"ssn-glyphicon-white navbar-link\">\n                             <span class=\"glyphicon glyphicon glyphicon-ok\">\n                             </span>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-left\">\n        <a class=\"ssn-glyphicon-white navbar-link active\" [routerLink]=\"['/user', userId, 'website']\">\n                     <span class=\"glyphicon glyphicon-chevron-left\">\n                     </span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"ssn-color-white navbar-brand ssn-navbar\" >\n          New Website\n        </a>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n</nav>\n<br><br><br><\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"ssn-profile col-xs-4 hidden-xs\">\n      <div class=\"\" >\n        <ul class=\"list-group\">\n          <li *ngFor=\"let w of web\" class=\"ssn-border-none list-group-item\">\n            {{w.name}}\n            <a href=\"#\" class=\"pull-right\">\n              <span class=\"glyphicon-cog glyphicon\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <div class = \"ssn-profile\">\n        <label>Website Name</label>\n        <input id =\"name\" type=\"text\"\n               [ngModel]=\"web?.name\" (ngModelChange)=\"web.name = $event\"\n               placeholder=\"Enter the name of website\"\n               class=\"form-control\"/>\n        <label>Website Description</label>\n        <input id =\"description\" type=\"text\"\n               [ngModel]=\"web?.description\" (ngModelChange)=\"web.description = $event\"\n               placeholder=\"Description\"\n               class=\"form-control\"/>\n      </div>\n\n\n\n    </div>\n  </div>\n\n  <nav class=\"navbar navbar-default ssn-edit-website navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-text pull-right\">\n        <a href=\"../user/profile.html\" class=\"navbar-link\">\n                     <span class=\"ssn-glyphicon-white glyphicon glyphicon-user\">\n                     </span>\n        </a>\n      </div>\n\n\n\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, userService, route, router, http) {
        this.websiteService = websiteService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    WebsiteNewComponent.prototype.createWebsite = function (website) {
        var _this = this;
        this.websiteService.createWebsite(this.userId, website)
            .subscribe(function (websites) {
            _this.web = websites;
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findAllWebsitesForUser(_this.userId)
                .subscribe(function (web) {
                if (web) {
                    _this.web = web;
                }
            });
            // this.user = this.userService.findUserById(this.userId)
            // this.web = this.websiteService.getListOfWebsites(this.userId)
            // this.web = this.websiteService.findWebsiteById(this.websiteId);
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Choose Widget\n        </a>\n      </div>\n\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n<br><br><br>\n\n<div class=\"container-fluid\" style=\"margin-top: 70px\">\n  <ul class=\"list-group\">\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'heading']\">\n      <li class=\"list-group-item\">\n        Header\n      </li>\n    </a>\n\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\">\n      <li class=\"list-group-item\">\n        Image\n      </li>\n    </a>\n\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\">\n      <li class=\"list-group-item\">\n        YouTube\n      </li>\n    </a>\n\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'html']\">\n      <li class=\"list-group-item\">\n        HTML\n      </li>\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'text']\">\n      <li class=\"list-group-item\">\n        TEXT\n      </li>\n    </a>\n\n  </ul>\n</div>\n<!--<div *ngFor=\"let w of widget \" class=\"container-fluid\">-->\n  <!--<div [ngSwitch]=\"w.widgetType\" class=\"ssn-widget\">-->\n    <!--<div  *ngSwitchCase=\"'HEADING'\" class=\"ssn-widget-toolbar\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{w._id}}\">-->\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      <!--</a>-->\n      <!--<span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>-->\n      <!--{{w.widgetType}}-->\n    <!--</div>-->\n\n    <!--<div  *ngSwitchCase=\"'IMAGE'\" class=\"ssn-widget-toolbar\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{w._id}}\">-->\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      <!--</a>-->\n      <!--<span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>-->\n      <!--<img width=\"100%\" src=\"http://lorempixel.com/400/200\" />-->\n    <!--</div>-->\n    <!--<br>-->\n    <!--<div *ngSwitchCase=\"'YOUTUBE'\" class=\"ssn-widget-toolbar\">-->\n      <!--<a routerLink=\"/user/{{userId}}/website/{{webId}}/page/{{pageId}}/widget/{{w._id}}\">-->\n        <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n      <!--<span class=\"glyphicon glyphicon-menu-hamburger\"></span>-->\n\n\n      <!--<div class=\"video-container\">-->\n        <!--<iframe width=\"560\" height=\"315\"-->\n                <!--src=\"https://www.youtube.com/embed/li41sHoxqZQ\"-->\n                <!--frameborder=\"0\" allowfullscreen>-->\n        <!--</iframe>-->\n      <!--</div>-->\n\n    <!--</div>-->\n  <!--</div>-->\n<!--<div class=\"ssn-widget\">-->\n  <!--<ul class=\"list-group\">-->\n    <!--&lt;!&ndash;<li class=\"active list-group-item\">&ndash;&gt;-->\n    <!--&lt;!&ndash;Name&ndash;&gt;-->\n    <!--&lt;!&ndash;</li>&ndash;&gt;-->\n    <!--<li *ngFor=\"let w of widget\" class=\"ssn-hide-border list-group-item\">-->\n      <!--&lt;!&ndash;<div class=\"row\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"col-xs-9 col-sm-6 col-md-3\">&ndash;&gt;-->\n       <!--{{w.widgetType}}-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"col-md-3 hidden-xs hidden-sm\">&ndash;&gt;-->\n      <!--&lt;!&ndash;01/01/2017&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">&ndash;&gt;-->\n      <!--&lt;!&ndash;Suraj&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n\n\n    <!--</li>-->\n    <!--<li class=\"ssn-hide-border list-group-item\">-->\n      <!--<a href=\"widget-image.html\"> Image </a>-->\n\n    <!--</li>-->\n    <!--<li class=\"ssn-hide-border list-group-item\">-->\n      <!--<a href=\"widget-image.html\"> HTML </a>-->\n    <!--</li>-->\n    <!--<li class=\"ssn-hide-border list-group-item\">-->\n      <!--<a href=\"widget-image.html\"> Link </a>-->\n    <!--</li>-->\n    <!--<li class=\"ssn-hide-border list-group-item\">-->\n      <!--<a href=\"widget-image.html\"> Button </a>-->\n    <!--</li>-->\n    <!--<li class=\"ssn-hide-border list-group-item\">-->\n      <!--<a href=\"widget-heading.html\"> Header </a>-->\n    <!--</li>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\" class=\"navbar-link\">\n          <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\">\n                     </span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetChooserComponent);

var _a;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let w of widget\" class=\"container-fluid\">-->\n  <!--<div [ngSwitch] = 'w.widgetType'>-->\n    <!--<div *ngSwitchCase=\"'Heading'\">-->\n      <!--<app-widget-header></app-widget-header>-->\n    <!--</div>-->\n    <!--<div *ngSwitchCase=\"'IMAGE'\">-->\n      <!--<app-widget-image></app-widget-image>-->\n    <!--</div>-->\n    <!--<div *ngSwitchCase=\"'YOUTUBE'\">-->\n      <!--<app-widget-youtube></app-widget-youtube>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widget Edit\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"update\">\n                             <span class=\"glyphicon glyphicon glyphicon-ok\">\n                             </span>\n        </a>\n      </div>\n\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n<br><br><br>\n<!--<div class=\"container-fluid\">-->\n  <!--<form>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label>Name</label>-->\n      <!--<input type=\"text\" class=\"form-control\" placeholder=\"Name\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label>Text</label>-->\n      <!--<input type=\"text\" class=\"form-control\" placeholder=\"abcd\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label>URL</label>-->\n      <!--<input type=\"url\" class=\"form-control\" placeholder=\"xyz.com\">-->\n    <!--</div>-->\n    <!--<div class=\"form-group\">-->\n      <!--<label>Width</label>-->\n      <!--<input type=\"range\" class=\"form-control\" placeholder=\"100%\">-->\n    <!--</div>-->\n    <!--<a href = \"widget-list.html\" class=\"btn btn-danger btn-block\">Delete</a>-->\n  <!--</form>-->\n\n\n\n<!--</div>-->\n<div class=\"container-fluid\">\n  <div [ngSwitch] = 'widgetType'>\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = {};
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                if (widget) {
                    _this.widgets = widget;
                    _this.widgetType = widget.widgetType;
                    console.log(_this.widgets);
                }
            });
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand ssn-navbar\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widget Edit\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"ssn-glyphicon-black navbar-link\"\n           (click)=\"createWidget(name, text,size)\">\n          <span class=\"glyphicon glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<br><br><br>\n<div class=\"ssn-widget\">\n  <div class=\"container-fluid\">\n\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" id=\"name\" class=\"form-control\"\n               [(ngModel)] = 'name'\n               placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Text</label>\n        <input type=\"text\" id = 'text' class=\"form-control\" id=\"text\"\n               [(ngModel)] ='text'\n               placeholder=\"Alice\">\n      </div>\n      <div class=\"form-group\">\n        <label>Size</label>\n        <!--[ngModel]=\"widget?.size\" (ngModelChange)=\"widget.size = $event\"-->\n        <input type=\"text\" id= \"size\" class=\"form-control\"\n               [(ngModel)] ='size'\n               placeholder=\"2\">\n      </div>\n    <a (click)=\"updateWidget(name,text,size)\"\n       class=\"btn btn-primary btn-block \">\n      Update Widget\n    </a>\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete Widget\n      </a>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\"\n         class=\"navbar-link\">\n        <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
        });
    };
    WidgetHeaderComponent.prototype.createWidget = function (name, text, size) {
        var _this = this;
        var test = {
            name: name,
            text: text,
            size: size
        };
        this.widgetService.createWidgetText(this.pageId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function (name, text, size) {
        var _this = this;
        var test = {
            name: name,
            text: text,
            size: size,
            pageId: this.pageId,
            widgetType: 'HEADER'
        };
        this.widgetService.updateWidget(this.widgetId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id = \"page-nav\" class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n      <span class=\"glyphicon glyphicon-chevron-left pull-left\"></span>    </a>\n  </div>\n\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\">\n      Widget Edit\n    </a>\n  </div>\n\n  <div class=\"navbar-text pull-right\">\n    <a (click)=\"createWidget(text)\">\n      <span class=\"glyphicon glyphicon-ok pull-left\"></span>\n    </a>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid\" style=\"margin-top: 70px\">\n  <form>\n    <div class=\"form-group\">\n      <label>\n        Text\n      </label>\n      <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"updateWidget(text)\"\n         class=\"btn btn-primary btn-block\">\n        Update Widget\n      </a>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<footer id=\"foot-nav\" class=\"footer\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user pull-right\" style=\"font-size: 30px\"></span>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.pageId)
                .subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function (text) {
        var _this = this;
        var test = {
            text: text,
        };
        this.widgetService.createWidgetHtml(this.pageId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (text) {
        var _this = this;
        var test = {
            text: text,
            pageId: this.pageId,
            widgetType: 'HTML'
        };
        this.widgetService.updateWidget(this.widgetId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//   createWidget(text) {
//     const test = {
//       text: text,
//     };
//     this.widgetService.createWidget(this.pageId, test)
//       .subscribe((widget) => {
//         if (widget) {
//           this.widget = widget;
//           this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page',this.pageId,'widget'])
//         }
//       });
//   }
//
// }
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Search Flickr\n        </a>\n      </div>\n\n\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n<br><br><br>\n<div class=\"ssn-widget\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n        <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                     <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n      </div>\n    </div>\n\n      <div class=\"row\">\n        <div *ngFor = \"let pic of photos['photo']\"\n             class=\"col-xs-4\">\n          <img (click)=\"selectPhoto(pic)\"\n                  width=\"100%\"\n                  [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n          <p></p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, activatedRoute, router) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.photos = {};
        this.widget = {};
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            pageId: this.pageId,
            url: url,
            widgetType: 'IMAGE',
            width: '50%'
        };
        this.widgetService.createWidgetImage(this.pageId, widget)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                // console.log(this.widget)
                _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
            }
        });
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = Math.random().toString();
            console.log(_this.widgetId);
            _this.flickrService.searchPhotos('searchme')
                .subscribe(function (photos) {
                _this.photos = photos;
            });
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widget Edit\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a class=\"ssn-glyphicon-black navbar-link\" (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <span class=\"glyphicon glyphicon glyphicon-ok\">       </span>\n        </a>\n      </div>\n\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n<br><br><br>\n<div class=\"ssn-widget\">\n  <div class=\"container-fluid\">\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n\n  </div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\"\n         class=\"navbar-link\">\n        <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.edit = true;
                _this.imageName = _this.widget['name'];
                _this.imageText = _this.widget['text'];
                _this.imageWidth = _this.widget['width'];
                _this.imageUrl = _this.widget['url'];
                _this.uploadImage = _this.widget['upload'];
            }
        });
    };
    WidgetImageComponent.prototype.createWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.imageText;
        this.widget['url'] = this.imageUrl;
        this.widget['width'] = this.imageWidth;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.imageName;
        this.widgetService.createWidgetImage(this.pageId, this.widget)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
            }
        });
        console.log(this.widget);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.imageText;
        this.widget['url'] = this.imageUrl;
        this.widget['width'] = this.imageWidth;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.imageName;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
            }
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class =  \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand ssn-navbar\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widget Edit\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"ssn-glyphicon-black navbar-link\"\n           (click)=\"createWidget(rows, text,placeholder, name, formatted)\">\n          <span class=\"glyphicon glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<br><br><br>\n\n<div class=\"container-fluid\" style=\"margin-top: 70px\">\n  <form>\n    <div class=\"form-group\">\n      <label>\n        Text\n      </label>\n      <input [(ngModel)]=\"text\"\n             class=\"form-control\"\n             name=\"text\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label>\n        Rows\n      </label>\n      <input [(ngModel)]=\"rows\" class=\"form-control\" type=\"number\" name=\"rows\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Placeholder</label>\n      <input [(ngModel)]=\"placeholder\" class=\"form-control\" name=\"placeholder\" required/>\n    </div>\n\n    <span class=\"input-group-addon\">\n            <input [(ngModel)]=\"formatted\"\n                   name=\"formatted\"\n                   type=\"checkbox\"/></span>\n    <div class=\"form-group\">\n      <a (click)=\"updateWidget(rows, text, placeholder, name, formatted)\"\n         class=\"btn btn-primary btn-block \">\n        Update Widget\n      </a>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.pageId)
                .subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
        });
    };
    WidgetTextComponent.prototype.createWidget = function (rows, text, placeholder, name, formatted) {
        var _this = this;
        var test = {
            name: name,
            text: text,
            placeholder: placeholder,
            pageId: this.pageId,
            rows: rows,
            widgetType: 'TEXT',
            formatted: formatted
        };
        this.widgetService.createWidgetText(this.pageId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (rows, text, placeholder, name, formatted) {
        var _this = this;
        var test = {
            name: name,
            text: text,
            placeholder: placeholder,
            pageId: this.pageId,
            rows: rows,
            widgetType: 'TEXT',
            formatted: formatted
        };
        this.widgetService.updateWidget(this.widgetId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n\n        <a class=\"navbar-brand ssn-navbar\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widget Edit\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"createWidget(name, text, url)\">\n                             <span class=\"glyphicon glyphicon glyphicon-ok\">\n                             </span>\n        </a>\n      </div>\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n<br><br><br>\n<div class=\"ssn-widget\">\n  <div class=\"container-fluid\">\n\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\"\n               [(ngModel)] = 'name'\n               placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Text</label>\n        <input type=\"text\"\n               [(ngModel)] = 'text'\n               class=\"form-control\" placeholder=\"abcd\">\n      </div>\n      <div class=\"form-group\">\n        <label>URL</label>\n        <input type=\"url\"\n               [(ngModel)] = 'url'\n               class=\"form-control\" placeholder=\"xyz.com\">\n      </div>\n      <a href = \"#\" class=\"btn btn-primary btn-block\">Upload YouTube Video</a>\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">Delete</a>\n\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\"\n         class=\"navbar-link\">\n          <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\">\n                     </span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.pageId)
                .subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function (name, text, url) {
        var _this = this;
        var test = {
            name: name,
            text: text,
            url: url,
            widgetType: 'YOUTUBE',
            pageId: this.pageId,
            width: '50'
        };
        console.log(test);
        this.widgetService.createWidgetYoutube(this.pageId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            }
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        var test = {
            name: name,
            // text: text,
            // url: url,
            widgetType: 'YOUTUBE',
            pageId: this.pageId,
            width: '50'
        };
        this.widgetService.updateWidget(this.widgetId, test)
            .subscribe(function (widget) {
            if (widget) {
                _this.widget = widget;
            }
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"ssn-widget\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n         <a class=\"navbar-brand ssn-navbar\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n          <div class=\"glyphicon glyphicon-chevron-left\"></div>\n          Widgets\n        </a>\n      </div>\n\n      <div class=\"navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n               class=\"ssn-glyphicon-black glyphicon glyphicon-plus pull-right\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n<br><br><br>\n\n<div class=\"container-fluid\" appSortable (newIndexes)=\"updatePosition($event)\">\n<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget['widgetType']\">\n    <div *ngSwitchCase=\"'HEADER'\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div [ngSwitch]=\"widget['size']\">\n            <div *ngSwitchCase=\"1\">\n              <h1>{{widget['text']}}</h1>\n            </div>\n            <div *ngSwitchCase=\"2\">\n              <h2>{{widget['text']}}</h2>\n            </div>\n            <div *ngSwitchCase=\"3\">\n              <h3>{{widget['text']}}</h3>\n            </div>\n            <div *ngSwitchCase=\"4\">\n              <h4 >{{widget['text']}}</h4>\n            </div>\n          </div>\n          <div class=\"dg-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <iframe [width]=\"widget['width']\"\n                  height=\"300\"\n                  [src]=\"safeUrl(widget['url'])\">\n          </iframe>\n          <div class=\"dg-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n            <img [style.width]=\"widget['width']\"\n                 [src]=\"safeUrl(widget['url'])\">\n          </a>\n          <div class=\"dg-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'HTML'\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div [innerHTML]=\"widget['text']\">\n          </div>\n          <div class=\"dg-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'TEXT'\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div [innerHTML]=\"widget['text']\">\n          </div>\n          <div class=\"dg-widget-toolbar\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\" class=\"navbar-link\">\n          <span class=\"ssn-glyphicon-black glyphicon glyphicon-user\">\n                     </span>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-left\">\n      <a href=\"#\" class=\"navbar-link\">\n        <span class=\"ssn-glyphicon-black glyphicon glyphicon-play\"></span>\n        <span class=\"ssn-glyphicon-black glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, activatedRoute, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService.findAllWidgetsForPage(_this.pageId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
    };
    // https://angular.io/api/platform-browser/DomSanitizer
    WidgetListComponent.prototype.safeUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.updatePosition = function (event) {
        this.widgetService.updateWidgetPosition(this.pageId, event['startIndex'], event['endIndex'])
            .subscribe(function (data) {
            if (data && data.success === true) {
                console.log('success');
            }
            else {
                console.log('error in updating position');
            }
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by surajsatheeshnair on 12/7/17.
 */

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/websites.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=websites.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, widgetType, pageId, _text, name, size) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = _text;
        this.name = name;
        this.size = size;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by surajsatheeshnair on 11/6/17.
 */



var FlickerService = (function () {
    function FlickerService(http) {
        this.http = http;
        this.key = "b27927bb63a72f32d7be94ccca1e811c";
        this.secret = "41c78a13775d47a4";
        this.urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
    }
    FlickerService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickerService;
}());
FlickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickerService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        var test = {
            'name': page.name,
            'websiteId': websiteId,
            'description': page.description
        };
        return this.http.post(url, test)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        console.log('pageId', pageId);
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        var test = {
            _id: pageId,
            name: page.name,
            description: page.description,
            websiteId: page.websiteId
        };
        return this.http.put(url, test)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by surajsatheeshnair on 11/26/17.
 */

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder'),
            new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley'),
            new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia'),
            new __WEBPACK_IMPORTED_MODULE_0__models_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
        ];
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        // return this.users.find(function (user) {
        //   return user.username === username && user.password === password;
        // });
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
        // this.users.push(new User('001', username, password, firstName, lastName));
        // return this.users.find(function (user) {
        //   return user.username === username
        // })
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + '/api/user/' + user._id;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        // return this.users.find(function (user) {
        //   return user.username === username;
        // })
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
        //
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__ = __webpack_require__("../../../../../src/app/models/websites.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.websites = [
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('123', 'Facebook', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('234', 'Twitter', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('456', 'Gizmodo', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('890', 'Go', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('678', 'Checkers', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_0__models_websites_model_client__["a" /* Website */]('789', 'Chess', '234', 'Lorem')
        ];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (web) {
            return web._id === websiteId;
        });
    };
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        // console.log(this.users.push(new User('001',username, password, firstName, lastName)))
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        var test = {
            name: website.name,
            description: website.description
        };
        console.log(website);
        return this.http.post(url, test)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (userId, web) {
        var url = this.baseUrl + '/api/website/' + web._id;
        console.log('console', web);
        var test = {
            _id: web._id,
            name: web.name,
            description: web.description,
            developerId: userId
        };
        return this.http.put(url, test)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        // this.websites.splice(websiteId,1)
        // return this.websites
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidgetText = function (pageId, widget) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        var test = {
            name: widget.name,
            text: widget.text,
            size: widget.size,
            widgetType: widget.widgetType,
            pageId: pageId
        };
        return this.http.post(url, test)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (res) {
            return res.status;
        });
    };
    WidgetService.prototype.createWidgetHtml = function (pageId, widget1) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        widget1 = { "widgetType": "HTML" };
        return this.http.post(url, widget1)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findAllWidgetsForPage = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        console.log(url);
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        var test = {
            name: widget.name,
            text: widget.text,
            size: widget.size,
            widgetType: widget.widgetType,
            pageId: widget.pageId
        };
        return this.http.put(url, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidgetPosition = function (pageId, initial, final) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initial + '&final=' + final;
        return this.http.put(url, null)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.createWidgetImage = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        var test = {
            'name': widget.name,
            'pageId': pageId,
            'widgetType': widget.widgetType,
            'url': widget.url,
            'width': widget.width
        };
        return this.http.post(url, test)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.createWidgetYoutube = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        var test = {
            'name': widget.name,
            'pageId': pageId,
            'widgetType': widget.widgetType,
            'url': widget.url,
            'width': widget.width
        };
        return this.http.post(url, test)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
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
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map