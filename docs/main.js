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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/data-entry"]; };
class AppComponent {
    constructor() {
        this.title = 'ui-ng-lib';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 2, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "navbar-header", "navbar-right"], ["href", "https://chennamouli.github.io/ui-ng-lib/#/home", 1, "nav-link", "text-white"], ["role", "main", 1, "container"], [1, "footer"], [1, "container"], [1, "text-muted"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "@Copyright: 2020 ui-ng-lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature/components/data-entry/data-entry.component */ "./src/app/feature/components/data-entry/data-entry.component.ts");
/* harmony import */ var _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature/components/home/home.component */ "./src/app/feature/components/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_4__["DataEntryComponent"], _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _feature_components_data_entry_data_entry_component__WEBPACK_IMPORTED_MODULE_4__["DataEntryComponent"], _feature_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


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
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");


class Base {
    formControl(validators, value = null) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value, {
            validators,
            updateOn: 'blur',
        });
    }
    getErrors(form) {
        return src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getFormValidationErrors(form);
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
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base */ "./src/app/feature/components/base/base.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class DataEntryComponent extends _base_base__WEBPACK_IMPORTED_MODULE_2__["Base"] {
    ngOnInit() {
        this.form = this.createForm();
    }
    createForm() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: this.formControl([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
        });
    }
}
DataEntryComponent.ɵfac = function DataEntryComponent_Factory(t) { return ɵDataEntryComponent_BaseFactory(t || DataEntryComponent); };
DataEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataEntryComponent, selectors: [["app-data-entry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 54, vars: 10, consts: [[1, "row", "g-3", 3, "formGroup"], [1, "form-group", "col-md-6"], ["for", "firstName", 1, "form-label"], ["type", "text", "formControlName", "firstName", "id", "firstName", 1, "form-control"], ["for", "lastName", 1, "form-label"], ["type", "text", "formControlName", "lastName", "id", "lastName", 1, "form-control"], ["for", "inputEmail4", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "inputEmail4", 1, "form-control"], [1, "form-group", "col-12"], ["for", "inputAddress", 1, "form-label"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2", 1, "form-label"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity", 1, "form-label"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState", 1, "form-label"], ["id", "inputState", 1, "form-control"], ["selected", ""], ["value", "TX"], [1, "form-group", "col-md-2"], ["for", "inputZip", 1, "form-label"], ["type", "text", "id", "inputZip", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary"], [1, "py-4"]], template: function DataEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Texas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Check me out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Form valid: ", ctx.form.valid, ", Touched: ", ctx.form.touched, ", Dirty: ", ctx.form.dirty, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form errors: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 6, ctx.getErrors(ctx.form)), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form data: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 8, ctx.form.value), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29tcG9uZW50cy9kYXRhLWVudHJ5L2RhdGEtZW50cnkuY29tcG9uZW50LnNjc3MifQ== */"] });
const ɵDataEntryComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DataEntryComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-entry',
                templateUrl: './data-entry.component.html',
                styleUrls: ['./data-entry.component.scss'],
            }]
    }], null, null); })();


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

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: Constants, defaultDismissTimeOut, defaultCalendarMinDate, dateFormatYYYYMMDD, dateFormatMMDDYYYY, RegExps, KeyCodes, invalidSSNValues, invalidSINValues, countryList, HttpStatus, defaultHTTPHeaders, fieldErrors */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldErrors", function() { return fieldErrors; });
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
const fieldErrors = {
    required: 'Required field',
    minlength: 'Must be at least {1} character',
    maxlength: 'Cannot be greater than {1} characters',
    requiredBefore: 'Date cannot be before {1}',
    requiredAfter: 'Date cannot be after {1}',
    invalid: 'Enter a valid {0}',
    message: 'Enter a valid {0}',
};


/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/shared/constants.ts");




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
        else if (input.length > 0) {
            return `${first}`;
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
        else if (input.length > 0) {
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
        else if (input.length > 0) {
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
        else if (input.length > 0) {
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
        else if (input.length > 0) {
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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