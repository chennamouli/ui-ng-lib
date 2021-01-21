(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature/components/data-entry/data-entry.component */ "./src/app/feature/components/data-entry/data-entry.component.ts");
/* harmony import */ var _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature/components/home/home.component */ "./src/app/feature/components/home/home.component.ts");
/* harmony import */ var _feature_components_pick4_pick4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/components/pick4/pick4.component */ "./src/app/feature/components/pick4/pick4.component.ts");







const routes = [
    {
        path: 'home',
        component: _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { title: 'Home' },
    },
    {
        path: 'data-entry',
        component: _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_2__["DataEntryComponent"],
        data: { title: 'Data-Entry' },
    },
    {
        path: 'pick4',
        component: _feature_components_pick4_pick4_component__WEBPACK_IMPORTED_MODULE_4__["Pick4Component"],
        data: { title: 'Pick-4' },
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        redirectTo: '/home',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true,
                scrollPositionRestoration: 'enabled',
                enableTracing: false,
                onSameUrlNavigation: 'reload',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        scrollPositionRestoration: 'enabled',
                        enableTracing: false,
                        onSameUrlNavigation: 'reload',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["/data-entry"]; };
const _c1 = function () { return ["/pick4"]; };
class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'ui-ng-lib';
        translate.setDefaultLang('en-US');
        translate.use('en-US');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 34, vars: 4, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "navbar-header", "navbar-right"], ["href", "http://localhost:4200/#/home", 1, "nav-link", "text-white"], ["href", "https://chennamouli.github.io/ui-ng-lib/#/home", 1, "nav-link", "text-white"], ["href", "https://github.com/chennamouli/ui-ng-lib", 1, "nav-link", "text-white"], ["role", "main", 1, "container"], [1, "footer"], [1, "container"], [1, "text-muted"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ui-ng-lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Data-Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pick-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Local App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "GitHub App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "GitHub Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "main", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "@Copyright: 2020 ui-ng-lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_http_interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/http-interceptors */ "./src/app/core/http-interceptors/index.ts");
/* harmony import */ var _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature/components/data-entry/data-entry.component */ "./src/app/feature/components/data-entry/data-entry.component.ts");
/* harmony import */ var _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature/components/home/home.component */ "./src/app/feature/components/home/home.component.ts");
/* harmony import */ var _feature_components_pick4_pick4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature/components/pick4/pick4.component */ "./src/app/feature/components/pick4/pick4.component.ts");
















function createTranslateLoader(http) {
    // cache-buster, cb=time query paramer prevents from caching this file at the client side.
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, 'assets/i18n/', '.json?cb=' + new Date().getTime());
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_http_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]],
                },
            }),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_11__["DataEntryComponent"], _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _feature_components_pick4_pick4_component__WEBPACK_IMPORTED_MODULE_13__["Pick4Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_11__["DataEntryComponent"], _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _feature_components_pick4_pick4_component__WEBPACK_IMPORTED_MODULE_13__["Pick4Component"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]],
                        },
                    }),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ],
                providers: [_core_http_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/http-interceptors/auth-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/http-interceptors/auth-interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class AuthInterceptor {
    constructor() {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            // log warning message only in dev mode and only once
            console.warn('[AuthInterceptor] HTTP request method has been modified to GET for development only.');
        }
    }
    intercept(req, next) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            req = this.getClonedReqForProd(req); // PROD
        }
        else {
            req = this.getClonedReqForDevelopment(req); // DEVELOPMENT ONLY ***
        }
        return next.handle(req);
    }
    getClonedReqForDevelopment(r) {
        return r.clone({
            method: 'GET',
            headers: this.getHeaders(r.headers),
            params: r.params,
        });
    }
    getClonedReqForProd(r) {
        return r.clone({
            headers: this.getHeaders(r.headers),
            params: r.params,
            withCredentials: true,
        });
    }
    getHeaders(reqHdrs) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](Object.assign({}, src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["defaultHTTPHeaders"], this.getPassedHeaders(reqHdrs)));
    }
    getPassedHeaders(hdrs) {
        const temp = {};
        if (hdrs && hdrs.keys().length > 0) {
            hdrs.keys().forEach((h) => {
                temp[h] = hdrs.get(h);
            });
        }
        return temp;
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/http-interceptors/index.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http-interceptors/index.ts ***!
  \*************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_http_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/http-interceptors/spinner-interceptor */ "./src/app/shared/http-interceptors/spinner-interceptor.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/core/http-interceptors/auth-interceptor.ts");
/* "Barrel" of Http Interceptors */



/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: src_app_shared_http_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_1__["SpinnerInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/feature/components/base/base.ts":
/*!*************************************************!*\
  !*** ./src/app/feature/components/base/base.ts ***!
  \*************************************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils */ "./src/app/shared/utils/utils.ts");


class Base {
    formControl(validators, value = null) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value, {
            validators,
            updateOn: 'blur',
        });
    }
    getErrors(form) {
        return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getFormValidationErrors(form);
    }
    isControlValid(control) {
        return control && control.invalid && (control.touched || control.dirty);
    }
    onInput(formatType, event) {
        // console.log('On input event ', event);
        if (['insertText', 'insertFromPaste'].includes(event.inputType)) {
            event.target.value = this.formatInput(formatType, event.target.value);
        }
    }
    formatInput(formatType, input) {
        switch (formatType) {
            case 'integer':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatNumber(input);
            case 'ssn':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatSSN(input);
            case 'phone':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatPhoneNumber(input);
            case 'sin':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatSIN(input);
            case 'zip':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatZip(input);
            case 'postal':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatPostalCode(input);
            case 'city':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatCity(input);
            case 'date':
                return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatDate(input);
            default:
                return input;
        }
    }
}


/***/ }),

/***/ "./src/app/feature/components/data-entry/data-entry.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/feature/components/data-entry/data-entry.component.ts ***!
  \***********************************************************************/
/*! exports provided: DataEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEntryComponent", function() { return DataEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var _validators_data_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/data-validators */ "./src/app/feature/validators/data-validators.ts");
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base */ "./src/app/feature/components/base/base.ts");
/* harmony import */ var _services_dummy_api_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dummy-api/dummy-api.service */ "./src/app/feature/services/dummy-api/dummy-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/control-error/control-error.component */ "./src/app/shared/components/control-error/control-error.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/disable-if-req-in-progress/disable-if-req-in-progress.directive */ "./src/app/shared/directives/disable-if-req-in-progress/disable-if-req-in-progress.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













const _c0 = function (a0) { return { "text-danger": a0 }; };
class DataEntryComponent extends _base_base__WEBPACK_IMPORTED_MODULE_4__["Base"] {
    constructor(service) {
        super();
        this.service = service;
    }
    ngOnInit() {
        this.defaultMinDate = src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_2__["defaultCalendarMinDate"];
        this.form = this.createForm();
    }
    onSubmit() {
        this.form.markAllAsTouched();
        console.log('Form valid: ', this.form.valid);
        console.log('Form data: ', this.form.value);
        this.service.getPosts().subscribe((data) => console.log(data));
    }
    createForm() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: this.formControl([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _validators_data_validators__WEBPACK_IMPORTED_MODULE_3__["DataValidators"].firstName,
            ]),
            lastName: this.formControl([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _validators_data_validators__WEBPACK_IMPORTED_MODULE_3__["DataValidators"].lastName,
            ]),
            gender: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dateOfBirth: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ssn: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_data_validators__WEBPACK_IMPORTED_MODULE_3__["DataValidators"].ssn]),
            email: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            addressLine1: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            addressLine2: this.formControl([]),
            city: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            state: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            zip: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_data_validators__WEBPACK_IMPORTED_MODULE_3__["DataValidators"].zip]),
        });
    }
}
DataEntryComponent.ɵfac = function DataEntryComponent_Factory(t) { return new (t || DataEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dummy_api_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__["DummyApiService"])); };
DataEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataEntryComponent, selectors: [["app-data-entry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 113, vars: 142, consts: [[1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "form-group", "col-md-6"], ["for", "firstName", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "firstName", "id", "firstName", "maxlength", "30", 1, "form-control"], [3, "control", "fieldErrorsMap"], ["for", "lastName", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "lastName", "id", "lastName", "maxlength", "30", 1, "form-control"], ["for", "gender", 1, "form-label", 3, "ngClass"], [1, "form-row"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "formControlName", "gender", "value", "M", "id", "gender1", 1, "custom-control-input"], ["for", "gender1", 1, "custom-control-label"], ["type", "radio", "formControlName", "gender", "value", "F", "id", "gender2", 1, "custom-control-input"], ["for", "gender2", 1, "custom-control-label"], ["for", "dateOfBirth", 1, "form-label", 3, "ngClass"], [1, "input-group"], ["formControlName", "dateOfBirth", "maxlength", "10", "id", "dateOfBirth", "ngbDatepicker", "", 1, "form-control", 3, "minDate", "input"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["for", "ssn", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "ssn", "id", "ssn", "maxlength", "11", 1, "form-control", 3, "input"], ["for", "personal-email", 1, "form-label", 3, "ngClass"], ["type", "email", "formControlName", "email", "id", "personal-email", "maxlength", "128", 1, "form-control"], [1, "form-group", "col-12"], ["for", "addressLine1", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "addressLine1", "id", "addressLine1", 1, "form-control"], ["for", "addressLine2", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "addressLine2", "id", "addressLine1", 1, "form-control"], ["for", "city", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "city", "id", "city", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "state", 1, "form-label", 3, "ngClass"], ["id", "state", "formControlName", "state", 1, "form-control"], ["value", "null", "selected", ""], ["value", "TX"], [1, "form-group", "col-sm-12", "col-md-4", "col-lg-3"], ["for", "zip", 1, "form-label", 3, "ngClass"], ["type", "text", "formControlName", "zip", "id", "zip", "maxlength", "5", 1, "form-control", 3, "input"], [1, "col-12"], ["type", "submit", "appDisableIfReqInProgress", "", 1, "btn", "btn-primary"], [1, "py-4"]], template: function DataEntryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DataEntryComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DataEntryComponent_Template_input_input_35_listener($event) { return ctx.onInput("date", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataEntryComponent_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DataEntryComponent_Template_input_input_46_listener($event) { return ctx.onInput("ssn", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Texas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DataEntryComponent_Template_input_input_97_listener($event) { return ctx.onInput("zip", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "app-control-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](120, _c0, ctx.isControlValid(ctx.form.get("firstName"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 58, "fields.firstName.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("firstName"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 60, "fields.firstName.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](122, _c0, ctx.isControlValid(ctx.form.get("lastName"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 62, "fields.lastName.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("lastName"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 64, "fields.lastName.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](124, _c0, ctx.isControlValid(ctx.form.get("gender"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 66, "fields.gender.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("gender"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 68, "fields.gender.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](126, _c0, ctx.isControlValid(ctx.form.get("dateOfBirth"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 70, "fields.dateOfBirth.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minDate", ctx.defaultMinDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 72, "fields.dateOfBirth.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("dateOfBirth"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 74, "fields.dateOfBirth.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](128, _c0, ctx.isControlValid(ctx.form.get("ssn"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 76, "fields.ssn.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 78, "fields.ssn.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("ssn"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 80, "fields.ssn.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](130, _c0, ctx.isControlValid(ctx.form.get("email"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 82, "fields.personalEmail.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 84, "fields.personalEmail.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("email"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 86, "fields.personalEmail.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](132, _c0, ctx.isControlValid(ctx.form.get("addressLine1"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 88, "fields.addressLine1.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 90, "fields.addressLine1.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("addressLine1"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 92, "fields.addressLine1.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](134, _c0, ctx.isControlValid(ctx.form.get("addressLine2"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 94, "fields.addressLine2.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 96, "fields.addressLine2.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("addressLine2"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 98, "fields.addressLine2.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](136, _c0, ctx.isControlValid(ctx.form.get("city"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 100, "fields.city.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 102, "fields.city.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("city"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 104, "fields.city.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](138, _c0, ctx.isControlValid(ctx.form.get("state"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 106, "fields.state.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("state"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 108, "fields.state.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](140, _c0, ctx.isControlValid(ctx.form.get("zip"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 110, "fields.zip.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 112, "fields.zip.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("zip"))("fieldErrorsMap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 114, "fields.zip.errors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Form valid: ", ctx.form.valid, ", Touched: ", ctx.form.touched, ", Dirty: ", ctx.form.dirty, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form errors: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 116, ctx.getErrors(ctx.form)), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form data: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 118, ctx.form.value), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _shared_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_7__["ControlErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_9__["DisableIfReqInProgressDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29tcG9uZW50cy9kYXRhLWVudHJ5L2RhdGEtZW50cnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-entry',
                templateUrl: './data-entry.component.html',
                styleUrls: ['./data-entry.component.scss'],
            }]
    }], function () { return [{ type: _services_dummy_api_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__["DummyApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/components/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/feature/components/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Angular reusable components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/components/pick4/pick4.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/feature/components/pick4/pick4.component.ts ***!
  \*************************************************************/
/*! exports provided: Pick4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pick4Component", function() { return Pick4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Pick4Component {
    constructor() { }
    ngOnInit() {
    }
}
Pick4Component.ɵfac = function Pick4Component_Factory(t) { return new (t || Pick4Component)(); };
Pick4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick4Component, selectors: [["app-pick4"]], decls: 2, vars: 0, template: function Pick4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pick4 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29tcG9uZW50cy9waWNrNC9waWNrNC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Pick4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pick4',
                templateUrl: './pick4.component.html',
                styleUrls: ['./pick4.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/services/dummy-api/dummy-api.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature/services/dummy-api/dummy-api.service.ts ***!
  \*****************************************************************/
/*! exports provided: DummyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyApiService", function() { return DummyApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DummyApiService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        // const url = environment.postsUrl.format(postId);
        return this.http.get('http://jsonplaceholder.typicode.com/posts');
    }
}
DummyApiService.ɵfac = function DummyApiService_Factory(t) { return new (t || DummyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DummyApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DummyApiService, factory: DummyApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/validators/data-validators.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature/validators/data-validators.ts ***!
  \*******************************************************/
/*! exports provided: DataValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidators", function() { return DataValidators; });
/* harmony import */ var src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils */ "./src/app/shared/utils/utils.ts");


class DataValidators {
    static firstName(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isBlank(fc.value)) {
            return { message: true };
        }
        else if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            let invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].matchWithRegExp(fc.value.trim(), src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].FirstName);
            invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeDuplicates(invalidChars);
            return invalidChars ? { invalid: invalidChars } : null;
        }
        return null;
    }
    static middleName(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            let invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].matchWithRegExp(fc.value.trim(), src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].FirstName);
            invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeDuplicates(invalidChars);
            return invalidChars ? { invalid: invalidChars } : null;
        }
        return null;
    }
    static lastName(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isBlank(fc.value)) {
            return { message: true };
        }
        else if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            let invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].matchWithRegExp(fc.value.trim(), src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].FirstName);
            invalidChars = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeDuplicates(invalidChars);
            return invalidChars ? { invalid: invalidChars } : null;
        }
        return null;
    }
    static phoneNumber(fc) {
        let input = fc.value;
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isBlank(fc.value)) {
            return { message: true };
        }
        else if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            input = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getOnlyDigitsFromString(input);
            if (input === '' || input.match(/[0-9]{10}/g)) {
                return null;
            }
            return { message: true };
        }
        return null;
    }
    static personalEmail(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            const matches = new RegExp(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].Email).test(fc.value.trim());
            return matches ? null : { message: true };
        }
        return null;
    }
    static workEmail(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isBlank(fc.value)) {
            return { message: true };
        }
        else if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            const matches = new RegExp(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].Email).test(fc.value.trim());
            return matches ? null : { message: true };
        }
        return null;
    }
    static ssn(fc) {
        let input = fc.value;
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            input = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getOnlyDigitsFromString(input);
            if (input.length === 9) {
                if (input.substring(0, 1) === '9' ||
                    input.substring(3, 5) === '00' ||
                    input.substring(0, 3) === '000' ||
                    input.substring(5, 9) === '0000' ||
                    input.substring(0, 3) === '666' ||
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["invalidSSNValues"].indexOf(input) > -1) {
                    return { message: true };
                }
                else {
                    return null;
                }
            }
            else {
                return { message: true };
            }
        }
        return null;
    }
    static sin(fc) {
        let input = fc.value;
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            input = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getOnlyDigitsFromString(input);
            if (input.length === 9) {
                if (
                // SIN should not start with 0 or 8
                input.substring(0, 1) === '0' ||
                    input.substring(0, 1) === '8' ||
                    src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["invalidSINValues"].indexOf(input) > -1 ||
                    !src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isSINValid(input)) {
                    return { message: true };
                }
                else {
                    return null;
                }
            }
            else {
                return { message: true };
            }
        }
        return null;
    }
    static zip(fc) {
        let input = fc.value;
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            input = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getOnlyDigitsFromString(input);
            if (!(input.length === 5 || input.length === 9)) {
                return { invalid: true };
            }
        }
        return null;
    }
    static postalCode(fc) {
        let input = fc.value;
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            input = src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getOnlyAlphaNumericFromString(input);
            if (input.length !== 6) {
                return { invalid: true };
            }
            else {
                const matches = new RegExp(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].PostalCode).test(input.trim());
                return matches ? null : { message: true };
            }
        }
        return null;
    }
    static addressLine1(fc) {
        return src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isStringValid(fc.value);
    }
    static city(fc) {
        if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isBlank(fc.value)) {
            return { message: true };
        }
        else if (src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotEmpty(fc.value) && src_app_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNotBlank(fc.value)) {
            const matches = new RegExp(src_app_shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RegExps"].City).test(fc.value.trim());
            return matches ? null : { message: true };
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/shared/components/control-error/control-error.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/control-error/control-error.component.ts ***!
  \****************************************************************************/
/*! exports provided: ControlErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorComponent", function() { return ControlErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/shared/utils/constants.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/app/shared/utils/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ControlErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "\n");
} }
class ControlErrorComponent {
    constructor() { }
    ngOnInit() { }
    get errorMessage() {
        const errors = this.control.errors || {};
        if (errors instanceof Object && Object.keys(errors).length > 0) {
            const firstKey = Object.keys(errors)[0];
            if (this.fieldErrorsMap && this.fieldErrorsMap[firstKey]) {
                // if first key found in field errors then format and return it
                const msg = this.fieldErrorsMap[firstKey].format(errors[firstKey]);
                return msg;
            }
            else if (errors.hasOwnProperty('required')) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].required;
            }
            else if (errors.hasOwnProperty('minlength') && errors['minlength']) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].minlength.format(errors['minlength']['requiredLength']);
            }
            else if (errors.hasOwnProperty('maxlength') && errors['maxlength']) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].maxlength.format(errors['maxlength']['requiredLength']);
            }
            else if (errors.hasOwnProperty('requiredBefore')) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].requiredBefore.format(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].formatNgbDateToString(errors['requiredBefore'], _utils_constants__WEBPACK_IMPORTED_MODULE_1__["dateFormatMMDDYYYY"]));
            }
            else if (errors.hasOwnProperty('requiredAfter')) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].requiredAfter.format(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].formatNgbDateToString(errors['requiredAfter'], _utils_constants__WEBPACK_IMPORTED_MODULE_1__["dateFormatMMDDYYYY"]));
            }
            else if (errors.hasOwnProperty('invalid') &&
                Array.isArray(errors['invalid'])) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].invalid.format(errors['invalid']);
            }
            else if (errors.hasOwnProperty('invalid')) {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].invalid;
            }
            else {
                return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["defaultFieldErrors"].message || '';
            }
        }
        return null;
    }
}
ControlErrorComponent.ɵfac = function ControlErrorComponent_Factory(t) { return new (t || ControlErrorComponent)(); };
ControlErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlErrorComponent, selectors: [["app-control-error"]], inputs: { control: "control", fieldErrorsMap: "fieldErrorsMap" }, decls: 1, vars: 1, consts: [["aria-relevant", "[additions,text]", "class", "field-error-icon field-error text-danger", 4, "ngIf"], ["aria-relevant", "[additions,text]", 1, "field-error-icon", "field-error", "text-danger"]], template: function ControlErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ControlErrorComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control && ctx.control.invalid && (ctx.control.touched || ctx.control.dirty));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2wtZXJyb3IvY29udHJvbC1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control-error',
                templateUrl: './control-error.component.html',
                styleUrls: ['./control-error.component.scss'],
            }]
    }], function () { return []; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldErrorsMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/disable-if-req-in-progress/disable-if-req-in-progress.directive.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/directives/disable-if-req-in-progress/disable-if-req-in-progress.directive.ts ***!
  \******************************************************************************************************/
/*! exports provided: DisableIfReqInProgressDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableIfReqInProgressDirective", function() { return DisableIfReqInProgressDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spinner/spinner.service */ "./src/app/shared/services/spinner/spinner.service.ts");





class DisableIfReqInProgressDirective {
    constructor(host, ss) {
        this.host = host;
        this.ss = ss;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        const sub = this.ss.reqInProgress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).subscribe((value) => {
            if (value) {
                this.element.setAttribute('disabled', 'disabled');
            }
            else {
                this.element.removeAttribute('disabled');
            }
        });
        this.subscription.add(sub);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    get element() {
        return this.host.nativeElement;
    }
}
DisableIfReqInProgressDirective.ɵfac = function DisableIfReqInProgressDirective_Factory(t) { return new (t || DisableIfReqInProgressDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"])); };
DisableIfReqInProgressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableIfReqInProgressDirective, selectors: [["", "appDisableIfReqInProgress", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisableIfReqInProgressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDisableIfReqInProgress]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-interceptors/spinner-interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/http-interceptors/spinner-interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: SpinnerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function() { return SpinnerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spinner/spinner.service */ "./src/app/shared/services/spinner/spinner.service.ts");




class SpinnerInterceptor {
    constructor(sn) {
        this.sn = sn;
        // keep track of requests which are in progress
        this.inProgressReqs = new Map();
    }
    intercept(req, next) {
        this.sn.publishReqInProgress(true);
        this.inProgressReqs.set(req.method + req.urlWithParams, req.url); // add to map before request start
        return next.handle(req).pipe(
        // Log when response observable either completes or errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.inProgressReqs.delete(req.method + req.urlWithParams); // delete from map after request is done
            if (this.inProgressReqs.size === 0) {
                this.sn.publishReqInProgress(false);
            }
        }));
    }
}
SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) { return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"])); };
SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerInterceptor, factory: SpinnerInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/custom-ngb-date-adapter/custom-ngb-date-adapter.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/services/custom-ngb-date-adapter/custom-ngb-date-adapter.service.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomNgbDateAdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNgbDateAdapterService", function() { return CustomNgbDateAdapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class CustomNgbDateAdapterService extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10),
            };
        }
        return null;
    }
    toModel(date) {
        return date
            ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
            : null;
    }
}
CustomNgbDateAdapterService.ɵfac = function CustomNgbDateAdapterService_Factory(t) { return ɵCustomNgbDateAdapterService_BaseFactory(t || CustomNgbDateAdapterService); };
CustomNgbDateAdapterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomNgbDateAdapterService, factory: CustomNgbDateAdapterService.ɵfac, providedIn: 'root' });
const ɵCustomNgbDateAdapterService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomNgbDateAdapterService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomNgbDateAdapterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/custom-ngb-date-parser-formatter/custom-ngb-date-parser-formatter.service.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/services/custom-ngb-date-parser-formatter/custom-ngb-date-parser-formatter.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CustomNgbDateParserFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNgbDateParserFormatterService", function() { return CustomNgbDateParserFormatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class CustomNgbDateParserFormatterService extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10),
            };
        }
        return null;
    }
    format(date) {
        return date
            ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
            : '';
    }
}
CustomNgbDateParserFormatterService.ɵfac = function CustomNgbDateParserFormatterService_Factory(t) { return ɵCustomNgbDateParserFormatterService_BaseFactory(t || CustomNgbDateParserFormatterService); };
CustomNgbDateParserFormatterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomNgbDateParserFormatterService, factory: CustomNgbDateParserFormatterService.ɵfac, providedIn: 'root' });
const ɵCustomNgbDateParserFormatterService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomNgbDateParserFormatterService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomNgbDateParserFormatterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/spinner/spinner.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/spinner/spinner.service.ts ***!
  \************************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SpinnerService {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._reqInProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.reqInProgress$ = this._reqInProgress$.asObservable();
    }
    publishReqInProgress(progress = false) {
        this._reqInProgress$.next(progress);
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/control-error/control-error.component */ "./src/app/shared/components/control-error/control-error.component.ts");
/* harmony import */ var _directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/disable-if-req-in-progress/disable-if-req-in-progress.directive */ "./src/app/shared/directives/disable-if-req-in-progress/disable-if-req-in-progress.directive.ts");
/* harmony import */ var _services_custom_ngb_date_adapter_custom_ngb_date_adapter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/custom-ngb-date-adapter/custom-ngb-date-adapter.service */ "./src/app/shared/services/custom-ngb-date-adapter/custom-ngb-date-adapter.service.ts");
/* harmony import */ var _services_custom_ngb_date_parser_formatter_custom_ngb_date_parser_formatter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/custom-ngb-date-parser-formatter/custom-ngb-date-parser-formatter.service */ "./src/app/shared/services/custom-ngb-date-parser-formatter/custom-ngb-date-parser-formatter.service.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _services_custom_ngb_date_adapter_custom_ngb_date_adapter_service__WEBPACK_IMPORTED_MODULE_5__["CustomNgbDateAdapterService"] },
        {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
            useClass: _services_custom_ngb_date_parser_formatter_custom_ngb_date_parser_formatter_service__WEBPACK_IMPORTED_MODULE_6__["CustomNgbDateParserFormatterService"],
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"], _directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_4__["DisableIfReqInProgressDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]], exports: [_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"], _directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_4__["DisableIfReqInProgressDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"], _directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_4__["DisableIfReqInProgressDirective"]],
                exports: [_components_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"], _directives_disable_if_req_in_progress_disable_if_req_in_progress_directive__WEBPACK_IMPORTED_MODULE_4__["DisableIfReqInProgressDirective"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"], useClass: _services_custom_ngb_date_adapter_custom_ngb_date_adapter_service__WEBPACK_IMPORTED_MODULE_5__["CustomNgbDateAdapterService"] },
                    {
                        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
                        useClass: _services_custom_ngb_date_parser_formatter_custom_ngb_date_parser_formatter_service__WEBPACK_IMPORTED_MODULE_6__["CustomNgbDateParserFormatterService"],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/utils/constants.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/constants.ts ***!
  \*******************************************/
/*! exports provided: Constants, defaultDismissTimeOut, defaultCalendarMinDate, dateFormatYYYYMMDD, dateFormatMMDDYYYY, RegExps, KeyCodes, invalidSSNValues, invalidSINValues, countryList, HttpStatus, defaultHTTPHeaders, defaultFieldErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDismissTimeOut", function() { return defaultDismissTimeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCalendarMinDate", function() { return defaultCalendarMinDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatYYYYMMDD", function() { return dateFormatYYYYMMDD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatMMDDYYYY", function() { return dateFormatMMDDYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExps", function() { return RegExps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidSSNValues", function() { return invalidSSNValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidSINValues", function() { return invalidSINValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpStatus", function() { return HttpStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHTTPHeaders", function() { return defaultHTTPHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldErrors", function() { return defaultFieldErrors; });
class Constants {
}
const defaultDismissTimeOut = 8000; // in ms
const defaultCalendarMinDate = { year: 1903, month: 1, day: 1 };
const dateFormatYYYYMMDD = 'yyyy-MM-dd';
const dateFormatMMDDYYYY = 'MM/dd/yyyy';
// prettier-ignore
//tslint:disable
var RegExps;
(function (RegExps) {
    RegExps["CookieReader"] = "=([^;]+)";
    RegExps["Environment"] = "(platform|micro|local|trinet)([a-zA-Z0-9]+).hrpassport.com";
    RegExps["NumericOnly"] = "^[0-9]$";
    RegExps["AlphaNumericOnly"] = "^[a-zA-Z0-9]$";
    RegExps["FirstName"] = "[^a-zA-Z0-9\\s\\,\\.\\'\\&\\-]";
    RegExps["MiddleName"] = "[^a-zA-Z0-9\\s\\,\\.\\'\\&\\-]";
    RegExps["LastName"] = "[^a-zA-Z0-9\\s\\,\\.\\'\\&\\-]";
    RegExps["Email"] = "^[a-zA-Z0-9\\'\\.\\_\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,18}$";
    RegExps["ZipCode"] = "^[0-9]{5}(?:[-s][0-9]{4})?$";
    RegExps["City"] = "^([a-zA-Z]+[\\']*)+(?:([\\.][\\s]|[-]|[\\s])?([a-zA-Z]+[\\']*)+)*$";
    RegExps["PostalCode"] = "^[a-zA-Z][0-9][a-zA-Z]\\s?[0-9][a-zA-Z][0-9]$";
    RegExps["DateMMDDYYYY"] = "^([0]?[1-9]|[1][0-2])[s./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[s./-]([0-9]{4})$";
    RegExps["DateYYYYMMDD"] = "^([0-9]{4})[s./-]([0]?[1-9]|[1][0-2])[s./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$";
})(RegExps || (RegExps = {}));
//tslint: end-disable
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
    KeyCodes[KeyCodes["LEFT"] = 37] = "LEFT";
    KeyCodes[KeyCodes["UP"] = 38] = "UP";
    KeyCodes[KeyCodes["RIGHT"] = 39] = "RIGHT";
    KeyCodes[KeyCodes["DOWN"] = 40] = "DOWN";
})(KeyCodes || (KeyCodes = {}));
const invalidSSNValues = [
    '000000000',
    '111111111',
    '222222222',
    '333333333',
    '444444444',
    '555555555',
    '666666666',
    '777777777',
    '888888888',
    '999999999',
    '123456789',
];
const invalidSINValues = ['000000000'];
const countryList = [
    {
        key: 'US',
        value: 'USA',
    },
    {
        key: 'CA',
        value: 'Canada',
    },
];
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HttpStatus || (HttpStatus = {}));
const defaultHTTPHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
const defaultFieldErrors = {
    required: 'Required field',
    minlength: 'Must be at least {1} character',
    maxlength: 'Cannot be greater than {1} characters',
    requiredBefore: 'Date cannot be before {1}',
    requiredAfter: 'Date cannot be after {1}',
    invalid: 'Invalid input',
    message: 'Enter a valid input',
};


/***/ }),

/***/ "./src/app/shared/utils/custom-prototypes.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/utils/custom-prototypes.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import this file in main.ts and test.ts so that these prototype functions
// will be available across the application as well as in unit testing.
String.prototype.format = format;
/**
 * Custom printf-style String format function.
 *
 * Returns formatted string which may contain given string with one or more embedded format specifiers.
 *
 * Thanks for the below post.
 *
 * https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 *
 * Ex., "Hi {0}".format('Boss'); returns  'Hi Boss'
 */
function format(...args) {
    return this.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match;
    });
}
Date.prototype.addbusinessDays = addbusinessDays;
/**
 * Custom Date function.
 *
 * Adds given number of business days to the given date and returns it.
 *
 * Thanks for the below post.
 *
 * https://www.sitepoint.com/community/t/add-days-to-date-while-ignoring-weekends-and-holidays-possible/3827/4
 *
 * @param n number, it can be +ve or -ve
 */
function addbusinessDays(n) {
    let dt = this;
    const num = Math.abs(n);
    let tem;
    let count = 0;
    const dir = n < 0 ? -1 : 1;
    while (count < num) {
        dt = new Date(dt.setDate(dt.getDate() + dir));
        tem = dt.getDay();
        if (tem !== 0 && tem !== 6) {
            ++count;
        }
    }
    return dt;
}


/***/ }),

/***/ "./src/app/shared/utils/utils.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/shared/utils/constants.ts");




class Utils {
    static isNumericKey(event) {
        return new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].NumericOnly).test(event.key);
    }
    static isStringValid(value) {
        if (Utils.isNotEmpty(value) && Utils.isBlank(value)) {
            return { message: true };
        }
        else if (Utils.isNotEmpty(value) && Utils.isNotBlank(value)) {
            return null;
        }
        return null;
    }
    static isAlphaNumericKey(event) {
        return new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].AlphaNumericOnly).test(event.key);
    }
    /**
     * Returns true if key pressed is a modifiker key otherwise false.
     * Refer https://keycode.info/
     */
    static isModifierKey(event) {
        // tslint:disable-next-line: deprecation
        const key = event.keyCode;
        return (event.shiftKey === true ||
            key === 35 || // End key
            key === 36 || // Allow Shift, Home, End
            key === 8 ||
            key === 9 ||
            key === 13 ||
            key === 46 || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            // Allow Ctrl/Command + A,C,V,X,Z
            ((event.ctrlKey === true || event.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)));
    }
    static formatPhoneNumber(value) {
        if (!value) {
            return '';
        }
        const input = value.replace(/\D/g, '').substring(0, 10);
        const first = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);
        if (input.length > 5) {
            return `(${first}) ${middle}-${last}`;
        }
        else if (input.length > 2) {
            return `(${first}) ${middle}`;
        }
        else if (input.length > 0) {
            return `(${first}`;
        }
    }
    static formatNumber(value) {
        if (!value || isNaN(value)) {
            return '';
        }
        return value;
    }
    static formatTo2IntegerlNumber(value) {
        if (!value || isNaN(value)) {
            return '';
        }
        try {
            return parseInt(value, 10);
        }
        catch (error) { }
        return value;
    }
    static formatTo2DecimalNumber(value) {
        if (!value || isNaN(value)) {
            return '';
        }
        try {
            return parseFloat(value).toFixed(2);
        }
        catch (error) { }
        return value;
    }
    static formatSSN(value) {
        if (!value) {
            return '';
        }
        const input = value.replace(/\D/g, '').substring(0, 9);
        const first = input.substring(0, 3);
        const middle = input.substring(3, 5);
        const last = input.substring(5, 9);
        if (input.length > 4) {
            return `${first}-${middle}-${last}`;
        }
        else if (input.length > 2) {
            return `${first}-${middle}`;
        }
        else {
            return first;
        }
    }
    static formatSIN(value) {
        if (!value) {
            return '';
        }
        const input = value.replace(/\D/g, '').substring(0, 9);
        const first = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 9);
        if (input.length > 5) {
            return `${first}-${middle}-${last}`;
        }
        else if (input.length > 2) {
            return `${first}-${middle}`;
        }
        else {
            return `${first}`;
        }
    }
    static formatDate(value) {
        if (!value) {
            return '';
        }
        const input = value.replace(/\D/g, '').substring(0, 8);
        const first = input.substring(0, 2);
        const middle = input.substring(2, 4);
        const last = input.substring(4, 8);
        if (input.length > 3) {
            return `${first}/${middle}/${last}`;
        }
        else if (input.length > 1) {
            return `${first}/${middle}`;
        }
        else {
            return `${first}`;
        }
    }
    static formatZip(value) {
        if (!value) {
            return '';
        }
        const input = value.replace(/\D/g, '').substring(0, 9);
        const first = input.substring(0, 5);
        const last = input.substring(5, 9);
        if (input.length > 5) {
            return `${first}-${last}`;
        }
        else {
            return `${first}`;
        }
    }
    static formatPostalCode(value) {
        if (!value) {
            return '';
        }
        // replace non-alphanumeric by empty string
        const input = value.replace(/[^a-z0-9]/gi, '').substring(0, 6);
        const first = input.substring(0, 3);
        const last = input.substring(3, 6);
        if (input.length > 2) {
            return `${first} ${last}`;
        }
        else {
            return `${first}`;
        }
    }
    static formatCity(value) {
        if (!value) {
            return '';
        }
        let city;
        // replace en-dash, em-dash, and minus sign with standard hyphen
        city = value.replace(/[\u2013\u2014\u2212]/g, '\u002D');
        // replace left and right single quotation marks with apostrophe
        city = city.replace(/[\u2018\u2019]/g, '\u0027');
        // replace nbsp; with regular space
        city = city.replace(/\u00A0/g, '\u0020');
        return city;
    }
    // thanks: https://stackoverflow.com/questions/23221557/restrict-to-2-decimal-places-in-keypress-of-a-text-box/23222269
    static limitToTwoDecimals(event) {
        const charCode = event.which ? event.which : event.keyCode;
        const numArray = event.target.value.split('.');
        // not a digit key
        if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        // just one dot
        if (numArray.length > 1 && charCode === 46) {
            return false;
        }
        // get the carat position
        const caratPos = event.target.selectionStart;
        const dotPos = event.target.value.indexOf('.');
        if (caratPos > dotPos && dotPos > -1 && numArray[1].length > 1) {
            return false;
        }
        return true;
    }
    static isUnder14(dob) {
        const dateAt14 = Utils.getNgbDateAtNYearsBack(14);
        return dob && dob.after(dateAt14);
    }
    static isUnder18(dob) {
        const dateAt18 = Utils.getNgbDateAtNYearsBack(18);
        return dob && dob.after(dateAt18);
    }
    static getNgbDateAtNYearsBack(years) {
        const d = new Date();
        d.setFullYear(d.getFullYear() - years);
        return Utils.formatDateToNgbDate(d);
    }
    // static getNthBusinessDayFromToday(days: number): NgbDate {
    //   const d = Utils.formatDateToNgbDate(new Date().addbusinessDays(days));
    //   return d;
    // }
    static formatDateToNgbDate(date) {
        if (!date || !(date instanceof Date)) {
            return null;
        }
        return _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
        });
    }
    static formatDateToString(date, dateFormatString) {
        if (!date || !(date instanceof Date)) {
            return null;
        }
        try {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
            return datePipe.transform(new Date(), dateFormatString);
        }
        catch (e) {
            // console.warn('[Utils] formatNgbDateToString(): Error while formatting the date. ', e);
        }
        return null;
    }
    static parseStringToNgbDate(value) {
        const dt = Utils.parseStringToNgbDateStruct(value);
        return dt ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(dt) : null;
    }
    static parseStringToNgbDateStruct(value) {
        const validFormat = new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].DateMMDDYYYY).test(value) ||
            new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].DateYYYYMMDD).test(value);
        if (!value || !validFormat) {
            return null;
        }
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        try {
            const dateParts = datePipe.transform(value.trim(), 'M-d-y').split('-');
            return {
                year: parseInt(dateParts[2], 10),
                month: parseInt(dateParts[0], 10),
                day: parseInt(dateParts[1], 10),
            };
        }
        catch (e) {
            // console.warn('[Utils] parseStringToNgbDateStruct(): Error while parsing the date. ', e);
        }
        return null;
    }
    static formatNgbDateToString(date, dateFormatString) {
        if (!date) {
            return '';
        }
        try {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
            return datePipe.transform(new Date(date.year, date.month - 1, date.day), dateFormatString);
        }
        catch (e) {
            // console.warn('[Utils] formatNgbDateToString(): Error while formatting the date. ', e);
        }
        return '';
    }
    static formatNgbDateToDate(date) {
        if (!date) {
            return null;
        }
        try {
            return new Date(date.year, date.month - 1, date.day);
        }
        catch (e) {
            // console.warn('[Utils] formatNgbDateToDate(): Error while formatting the date. ', e);
        }
        return null;
    }
    static formatNgbDateToNgbDateStruct(date) {
        if (!date) {
            return null;
        }
        try {
            return {
                year: date.year,
                month: date.month,
                day: date.day,
            };
        }
        catch (e) {
            // console.warn('[Utils] formatNgbDateToNgbDateStruct(): Error while formatting the date. ', e);
        }
        return null;
    }
    static getOnlyDigitsFromString(value) {
        if (!value) {
            return '';
        }
        return value.replace(/\D/g, '');
    }
    static getOnlyDigitsIncludingPeriodFromString(value) {
        if (!value) {
            return '';
        }
        return value.replace(/[^0-9.]/g, '');
    }
    static getOnlyAlphaNumericFromString(value) {
        if (!value) {
            return '';
        }
        return value.replace(/[^a-z0-9]/gi, '');
    }
    static getHostName() {
        return document.location.hostname;
    }
    static getEnvironmentFromHostName(hostName) {
        const regExp = new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].Environment);
        const value = regExp.exec(hostName);
        return value !== null ? value[2].toUpperCase() : null;
    }
    static getCookieValue(cookieName) {
        const regExp = new RegExp(cookieName + _constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].CookieReader);
        const value = regExp.exec(document.cookie);
        return value !== null ? value[1] : '';
    }
    static matchWithRegExp(text, regExp) {
        return text.match(new RegExp(regExp, 'ig'));
    }
    /**
     * This method checks CANADA Social Insurance Number (SIN) valid or not - LUHN Algorithm
     * @param sin string
     */
    static isSINValid(sin) {
        if (!sin) {
            return false;
        }
        let valid = false;
        let ch; // the current character
        let odd = 0;
        let even = 0;
        let total = 0;
        let mod = 0;
        let digit = 0;
        let right = 0;
        let j = 0;
        if (sin != null && sin.length === 9) {
            sin = sin.slice(0, 3) + '-' + sin.slice(3);
            sin = sin.slice(0, 7) + '-' + sin.slice(7);
        }
        for (let i = 0; i < 11; i++) {
            ch = sin.charAt(i); // current character
            if (ch === '-') {
                continue;
            }
            const chint = parseInt(ch.charAt(0), 10);
            j = j + 1;
            if (j % 2 === 1 && j < 8) {
                odd = odd * 1 + chint * 1;
            }
            if (j % 2 === 0) {
                if (chint * 2 > 9) {
                    even = even + (chint * 2 - 10) + 1;
                }
                else {
                    even = even + chint * 2;
                }
            }
            if (j === 9) {
                right = chint * 1;
            }
        }
        total = odd + even;
        mod = total % 10;
        if (mod > 0) {
            digit = 10 - mod;
        }
        else {
            digit = mod;
        }
        if (digit === right) {
            valid = true;
        }
        return valid;
    }
    static getFormValidationErrors(form) {
        let errors = {};
        Object.keys((form && form.controls) || []).forEach((key) => {
            let controlErrors;
            const ctrl = form.get(key);
            if (ctrl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                controlErrors = Utils.getFormValidationErrors(ctrl);
            }
            else {
                controlErrors = form.get(key).errors;
            }
            if (controlErrors != null && Object.keys(controlErrors).length > 0) {
                const e = {};
                e[key] = controlErrors;
                errors = Object.assign(errors, e);
            }
        });
        return errors;
    }
    static getObjectKeysCount(obj) {
        let count = 0;
        Object.keys(obj).forEach((key) => {
            if (Array.isArray(obj[key])) {
                count += 1;
            }
            else if (typeof obj[key] === 'object') {
                // tslint:disable-next-line:no-string-literal
                if (obj[key]['year'] && obj[key]['month'] && obj[key]['day']) {
                    // for date object, consider as 1 key instead of 3 keys
                    count += 1;
                }
                else {
                    count += Utils.getObjectKeysCount(obj[key]);
                }
            }
            else {
                count += 1;
            }
        });
        return count;
    }
    // 400 - Bad Request, 401 - Unauthorized, 403 - Forbidden, 500 - Internal Server Error
    // static handleError(response: HttpErrorResponse) {
    //   const statusArray: number[] = [401, 403];
    //   let msg: BannerMessage;
    //   // derive error request id and code if exist
    //   const requestId =
    //     response && response.error ? response.error._requestId : '';
    //   const errorCode =
    //     response && response.error && response.error._error
    //       ? response.error._error.errorCode
    //       : '';
    //   if (!response || response.status === 0) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     msg = new BannerMessage(response.status, 'danger', '', 'http.0', '0', '');
    //   } else if (statusArray.includes(response.status)) {
    //     msg = new BannerMessage(
    //       response.status,
    //       'danger',
    //       '',
    //       'http.' + response.status,
    //       requestId,
    //       errorCode
    //     );
    //   } else if (response.error && response.error._error) {
    //     // any other server error
    //     const m = `${
    //       response.error._error.message || response.error._statusText
    //     } (Error ID: ${requestId}, Error Code: ${errorCode})`;
    //     msg = new BannerMessage(
    //       response.status,
    //       'danger',
    //       '',
    //       m,
    //       requestId,
    //       errorCode
    //     );
    //   } else {
    //     // unknown error, generic message
    //     msg = new BannerMessage(
    //       response.status,
    //       'danger',
    //       '',
    //       'http.0',
    //       `${response.status}`,
    //       ''
    //     );
    //   }
    //   if (response.status !== 404) {
    //     console.error('[Utils] handleError(): HTTP Request Failure', response);
    //   }
    //   // return an observable with a user-facing error message
    //   return throwError(msg);
    // }
    // thanks: https://medium.com/@appl4e/scroll-to-top-button-for-angular-99ddeebb8c3a
    static scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 2);
            }
        })();
    }
    static focusElementById(id) {
        const el = document.getElementById(id);
        try {
            if (el) {
                el.focus();
            }
        }
        catch (error) { }
    }
    /**
     * Trims the value of the each key in a given object and returns trimmed object.
     * @param fd object
     */
    static trimJSON(obj) {
        const data = Object.assign({}, obj);
        try {
            Object.keys(data).forEach((key) => {
                const value = data[key];
                if (value) {
                    if (Array.isArray(value)) {
                        data[key] = value;
                    }
                    else if (typeof value === 'object') {
                        data[key] = Utils.trimJSON(value);
                    }
                    else if (typeof value === 'string') {
                        data[key] = value.trim();
                    }
                }
            });
        }
        catch (e) {
            console.warn('[Utils] Unable to trim JSON object.', e);
        }
        return data;
    }
    static isNotEmptyJSON(obj, ingnorekeys = []) {
        let isEmpty = false;
        if (!obj) {
            return isEmpty;
        }
        try {
            Object.keys(obj).forEach((key) => {
                const value = obj[key];
                if (value && !isEmpty && ingnorekeys.indexOf(key) < 0) {
                    if (Array.isArray(value)) {
                        isEmpty = value.length > 0;
                    }
                    else if (typeof value === 'object') {
                        isEmpty = Utils.isNotEmptyJSON(value);
                    }
                    else if (typeof value === 'string') {
                        isEmpty = Utils.isNotBlank(value);
                    }
                    else if (typeof value === 'boolean') {
                        isEmpty = true;
                    }
                    else if (typeof value === 'number') {
                        isEmpty = true;
                    }
                }
            });
        }
        catch (e) {
            console.error('[Utils] isJSONEmpty() Unable to check JSON is empty or not.', e);
            return true;
        }
        return isEmpty;
    }
    /**
     * Checks if a String is empty ("") or null.
     *
     * isEmpty(null)      = true
     *
     * isEmpty("")        = true
     *
     * isEmpty(" ")       = false
     *
     * isEmpty("bob")     = false
     *
     * isEmpty("  bob  ") = false
     * @param value string
     */
    static isEmpty(value) {
        if (!value || value === '') {
            return true;
        }
        return false;
    }
    static isNotEmpty(value) {
        return !Utils.isEmpty(value);
    }
    /**
     * Checks if a String is whitespace, empty ("") or null.
     *
     * isBlank(null)      = true
     *
     * isBlank("")        = true
     *
     * isBlank(" ")       = true
     *
     * isBlank("bob")     = false
     *
     * isBlank("  bob  ") = false
     * @param value string
     */
    static isBlank(value) {
        if (Utils.isEmpty(value)) {
            return true;
        }
        else if (typeof value === 'string' && value.trim() === '') {
            return true;
        }
        else {
            return false;
        }
    }
    static isNotBlank(value) {
        return !Utils.isBlank(value);
    }
    /**
     * Returns true if given value is exist in KeyValuePair[]
     * otherwise returns false.
     * @param val string
     * @param options KeyValuePair[]
     */
    static doesKeyExistInKeyValuePairs(val, options) {
        let flag = false;
        Object.values(options || [])
            .filter((option) => option.key === val)
            .forEach((option) => {
            flag = true;
        });
        return flag;
    }
    static doesValueExistInKeyValuePairs(val, options) {
        let flag = false;
        Object.values(options || [])
            .filter((option) => {
            const value = option.value;
            if (typeof value === 'string' && val) {
                return (value.trim().toLowerCase() ===
                    val.trim().toLowerCase() && !flag);
            }
            else {
                return value === val && !flag;
            }
        })
            .forEach((option) => {
            flag = true;
        });
        return flag;
    }
    static getKeyValuePair(val, options) {
        if (!val || !options) {
            return {};
        }
        const objArray = Object.values(options || [])
            .filter((option) => {
            return (option.key === val ||
                option.value === val ||
                (typeof val === 'string' &&
                    typeof option.value === 'string' &&
                    option.value.toLowerCase().trim() === val.toLowerCase().trim()));
        })
            .map((option) => {
            return option;
        });
        return objArray.length > 0 ? objArray[0] : {};
    }
    static removeDuplicates(array = []) {
        if (!array) {
            return null;
        }
        const newArray = array.filter((item, index) => array.indexOf(item) === index);
        return newArray;
    }
    static formatCurrency(value) {
        const currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]('en-US');
        try {
            const formattedValue = currencyPipe.transform(value);
            return formattedValue ? formattedValue : value;
        }
        catch (error) {
            console.warn('[Utils] formatCurrency() Unable to format currency value', error);
            return value;
        }
    }
    /**
     * Resets control if the control's value isn't within the list of options
     * @param control The control being checked
     * @param options List of valid options for control
     */
    static resetControlIfValueNotFound(control, options) {
        const validValueSelected = Utils.doesKeyExistInKeyValuePairs(control.value, options);
        if (!validValueSelected && control.value !== null) {
            control.setValue(null);
        }
    }
    static getBrowser() {
        if ((navigator.userAgent.indexOf('Opera') ||
            navigator.userAgent.indexOf('OPR')) !== -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf('Chrome') !== -1) {
            return 'Chrome';
        }
        else if (navigator.userAgent.indexOf('Safari') !== -1) {
            return 'Safari';
        }
        else if (navigator.userAgent.indexOf('Firefox') !== -1) {
            return 'Firefox';
        }
        else if (navigator.userAgent.indexOf('Edge') !== -1) {
            return 'Edge';
        }
        else if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            !!document['documentMode'] === true) {
            return 'IE';
        }
        else {
            return 'unknown';
        }
    }
    static getTagManagerMapping() {
        const labelMap = new Map();
        labelMap.set('Employee', ['person', 'Person Page']);
        labelMap.set('Work', ['work', 'Work Page']);
        labelMap.set('Money', ['money', 'Money Page']);
        labelMap.set('Intro / Closing', [
            'customize',
            'Customize Intro/Closing Page',
        ]);
        labelMap.set('Review & Send', ['review', 'Review Page']);
        return labelMap;
    }
    static formatDate2(value) {
        const validFormat = new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].DateMMDDYYYY).test(value) ||
            new RegExp(_constants__WEBPACK_IMPORTED_MODULE_3__["RegExps"].DateYYYYMMDD).test(value);
        if (!value || !validFormat) {
            return null;
        }
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        try {
            const dateParts = datePipe
                .transform(value.trim(), 'MM-dd-yyyy')
                .split('-');
            return dateParts[0] + '/' + dateParts[1] + '/' + dateParts[2];
        }
        catch (e) { }
        return null;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_shared_utils_custom_prototypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/shared/utils/custom-prototypes */ "./src/app/shared/utils/custom-prototypes.ts");
/* harmony import */ var _app_shared_utils_custom_prototypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_shared_utils_custom_prototypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        try {
            window['ngRef'].destroy();
        }
        catch (error) {
            console.error('[main.ts] Unable to destroy window["ngRef"]', error);
        }
    }
    window['ngRef'] = ref;
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cgajam/workspace-ui/ui-ng-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map