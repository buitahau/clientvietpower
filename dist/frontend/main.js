(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - SB Admin v5.0.2 (https://startbootstrap.com/template-overviews/sb-admin)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)\r\n */\nhtml {\n  position: relative;\n  min-height: 100%; }\nbody {\n  height: 100%; }\n#wrapper {\n  display: flex; }\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 80px; }\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 90px; }\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 90px; } }\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 46px; }\n.scroll-to-top:focus, .scroll-to-top:hover {\n  color: white; }\n.scroll-to-top:hover {\n  background: #343a40; }\n.scroll-to-top i {\n  font-weight: 800; }\n.smaller {\n  font-size: 0.7rem; }\n.o-hidden {\n  overflow: hidden !important; }\n.z-0 {\n  z-index: 0; }\n.z-1 {\n  z-index: 1; }\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\n  width: 1rem;\n  text-align: center;\n  float: right;\n  vertical-align: 0;\n  border: 0;\n  font-weight: 900;\n  content: '\\f105';\n  font-family: 'Font Awesome 5 Free'; }\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\n  content: '\\f107'; }\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\n  display: none; }\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n.sidebar {\n  width: 90px !important;\n  background-color: #212529;\n  min-height: calc(100vh - 56px); }\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n.sidebar .nav-item .nav-link {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  width: 90px; }\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(90px + 0.5rem) !important;\n  margin: 0; }\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n.sidebar .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75); }\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 90px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 90px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(90px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n.card-body-icon {\n  position: absolute;\n  z-index: 0;\n  top: -1.25rem;\n  right: -1rem;\n  opacity: 0.4;\n  font-size: 5rem;\n  -webkit-transform: rotate(15deg);\n  transform: rotate(15deg); }\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 1;\n    column-count: 1; } }\n@media (min-width: 768px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n@media (min-width: 1200px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n:root {\n  --input-padding-x: 0.75rem;\n  --input-padding-y: 0.75rem; }\n.card-login {\n  max-width: 25rem; }\n.card-register {\n  max-width: 40rem; }\n.form-label-group {\n  position: relative; }\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto; }\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out; }\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n.form-label-group input:-ms-input-placeholder {\n  color: transparent; }\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n.form-label-group input::placeholder {\n  color: transparent; }\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\nfooter.sticky-footer {\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 90px);\n  height: 80px;\n  background-color: #e9ecef; }\nfooter.sticky-footer .copyright {\n  line-height: 1;\n  font-size: 0.8rem; }\n@media (min-width: 768px) {\n  footer.sticky-footer {\n    width: calc(100% - 225px); } }\nbody.sidebar-toggled footer.sticky-footer {\n  width: 100%; }\n@media (min-width: 768px) {\n  body.sidebar-toggled footer.sticky-footer {\n    width: calc(100% - 90px); } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvWDpcXHdzX2xlYXJuaW5nXFxjbGllbnR2aWV0cG93ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUg7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUdFLGNBQWEsRUFDZDtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3JCO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjtBQUVEO0VBQ0U7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQixFQUNuQixFQUFBO0FBR0g7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQ0FBaUM7RUFDakMsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjtBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLDRCQUEyQixFQUM1QjtBQUVEO0VBQ0UsV0FBVSxFQUNYO0FBRUQ7RUFDRSxXQUFVLEVBQ1g7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsWUFBVyxFQUNaO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsVUFBUztFQUNULGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsbUNBQWtDLEVBQ25DO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGNBQWEsRUFDZDtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRTtJQUNFLFlBQVcsRUFDWixFQUFBO0FBR0g7RUFDRSx1QkFBc0I7RUFDdEIsMEJBQXlCO0VBQ3pCLCtCQUE4QixFQUMvQjtBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjtBQUVEO0VBQ0UsOEJBQTZCO0VBQzdCLG1DQUFrQztFQUNsQywyQkFBMEI7RUFDMUIscUNBQW9DO0VBQ3BDLFVBQVMsRUFDVjtBQUVEO0VBQ0UsVUFBUztFQUNULHFCQUFvQixFQUNyQjtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRSxnQ0FBK0IsRUFDaEM7QUFFRDtFQUNFLGlDQUFnQyxFQUNqQztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0U7SUFDRSx3QkFBdUIsRUFDeEI7RUFDRDtJQUNFLGVBQWM7SUFDZCxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYixhQUFZLEVBQ2I7RUFDRDtJQUNFLGdCQUFlO0lBQ2YsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLDRCQUEyQjtJQUMzQixlQUFjO0lBQ2QsT0FBTSxFQUNQO0VBQ0Q7SUFDRSxlQUFjLEVBQ2Y7RUFDRDtJQUNFLGtCQUFpQjtJQUNqQix1QkFBc0IsRUFDdkI7RUFDRDtJQUNFLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0UsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixZQUFXLEVBQ1o7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixlQUFjLEVBQ2Y7RUFDRDtJQUNFLDhCQUE2QjtJQUM3QixtQ0FBa0M7SUFDbEMsMkJBQTBCO0lBQzFCLHFDQUFvQztJQUNwQyxVQUFTLEVBQ1Y7RUFDRDtJQUNFLFVBQVM7SUFDVCxxQkFBb0IsRUFDckI7RUFDRDtJQUNFLGNBQWEsRUFDZCxFQUFBO0FBR0g7RUFDRSxVQUFTO0VBQ1QsMkJBQTBCO0VBQzFCLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixjQUFhO0VBQ2IsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBZTtFQUNmLGlDQUFnQztFQUNoQyx5QkFBd0IsRUFDekI7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCLEVBQUE7QUFHSDtFQUNFO0lBQ0Usd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCLEVBQUE7QUFHSDtFQUNFO0lBQ0Usd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCLEVBQUE7QUFHSDtFQUNFLDJCQUFrQjtFQUNsQiwyQkFBa0IsRUFDbkI7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDs7RUFFRSx1REFBc0Q7RUFDdEQsYUFBWSxFQUNiO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxlQUFjO0VBQ2QsWUFBVztFQUNYLGlCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCw4QkFBNkI7RUFDN0IsdUJBQXNCO0VBRXRCLGlDQUFnQyxFQUNqQztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSw2RUFBNEU7RUFDNUUsaURBQWdELEVBQ2pEO0FBRUQ7RUFDRSw4Q0FBNkM7RUFDN0MsaURBQWdEO0VBQ2hELGdCQUFlO0VBQ2YsWUFBVyxFQUNaO0FBRUQ7RUFHRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QseUJBQXdCO0VBQ3hCLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7QUFFRDtFQUNFLGVBQWM7RUFDZCxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFO0lBQ0UsMEJBQXlCLEVBQzFCLEVBQUE7QUFHSDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0U7SUFDRSx5QkFBd0IsRUFDekIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBTQiBBZG1pbiB2NS4wLjIgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlLW92ZXJ2aWV3cy9zYi1hZG1pbilcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxOCBTdGFydCBCb290c3RyYXBcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vQmxhY2tyb2NrRGlnaXRhbC9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jd3JhcHBlciAjY29udGVudC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbmJvZHkuZml4ZWQtbmF2ICNjb250ZW50LXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG59XHJcblxyXG5ib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgfVxyXG4gIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtdG8tdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XHJcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbn1cclxuXHJcbi5zY3JvbGwtdG8tdG9wOmZvY3VzLCAuc2Nyb2xsLXRvLXRvcDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxufVxyXG5cclxuLnNjcm9sbC10by10b3AgaSB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnNtYWxsZXIge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uby1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnotMCB7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnotMSB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICB3aWR0aDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbnRlbnQ6ICdcXGYxMDUnO1xyXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbS5kcm9wZG93bi5zaG93IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBjb250ZW50OiAnXFxmMTA3JztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtLmRyb3Bkb3duLm5vLWFycm93IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xyXG4gIHRvcDogMC4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogY2FsYyg5MHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbms6YWN0aXZlLCAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzLCAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxuLnNpZGViYXIudG9nZ2xlZCB7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2lkZWJhci50b2dnbGVkIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGNhbGMoOTBweCArIDAuNXJlbSkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUuZHJvcHVwIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIuZml4ZWQtdG9wIHtcclxuICB0b3A6IDU2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNhcmQtYm9keS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IC0xLjI1cmVtO1xyXG4gIHJpZ2h0OiAtMXJlbTtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAgIGNvbHVtbi1jb3VudDogMjtcclxuICB9XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMC43NXJlbTtcclxuICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmQtbG9naW4ge1xyXG4gIG1heC13aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXJlZ2lzdGVyIHtcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbmZvb3Rlci5zdGlja3ktZm9vdGVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG5mb290ZXIuc3RpY2t5LWZvb3RlciAuY29weXJpZ2h0IHtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9vdGVyLnN0aWNreS1mb290ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyNXB4KTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkuc2lkZWJhci10b2dnbGVkIGZvb3Rlci5zdGlja3ktZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgYm9keS5zaWRlYmFyLXRvZ2dsZWQgZm9vdGVyLnN0aWNreS1mb290ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_issue_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/issue/list/list.component */ "./src/app/components/issue/list/list.component.ts");
/* harmony import */ var _components_issue_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/issue/create/create.component */ "./src/app/components/issue/create/create.component.ts");
/* harmony import */ var _components_issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/issue/edit/edit.component */ "./src/app/components/issue/edit/edit.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_help_structure_structure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/help/structure/structure.component */ "./src/app/components/help/structure/structure.component.ts");
/* harmony import */ var ng_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-cookie */ "./node_modules/ng-cookie/dist/cookie.service.js");
/* harmony import */ var ng_cookie__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_cookie__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_issues_issue_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/issues/issue.service */ "./src/app/services/issues/issue.service.ts");
/* harmony import */ var _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/colorant/colorant.service */ "./src/app/services/colorant/colorant.service.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/formula/formula.service */ "./src/app/services/formula/formula.service.ts");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/productbase/productbase.service */ "./src/app/services/productbase/productbase.service.ts");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
/* harmony import */ var _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/jobstatus/jobstatus.service */ "./src/app/services/jobstatus/jobstatus.service.ts");
/* harmony import */ var _directions_boostrap_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directions/boostrap/modal/modal.component */ "./src/app/directions/boostrap/modal/modal.component.ts");
/* harmony import */ var _components_login_page_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/login-page/login/login.component */ "./src/app/components/login-page/login/login.component.ts");
/* harmony import */ var _components_login_page_register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/login-page/register/register.component */ "./src/app/components/login-page/register/register.component.ts");
/* harmony import */ var _components_login_page_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/login-page/forgotpassword/forgotpassword.component */ "./src/app/components/login-page/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/layout/navigation/navigation.component */ "./src/app/components/layout/navigation/navigation.component.ts");
/* harmony import */ var _components_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/layout/breadcrumb/breadcrumb.component */ "./src/app/components/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_backgroundtask_backgroundtask_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/backgroundtask/backgroundtask.component */ "./src/app/components/backgroundtask/backgroundtask.component.ts");
/* harmony import */ var _components_setting_colorant_colorant_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/setting/colorant/colorant.component */ "./src/app/components/setting/colorant/colorant.component.ts");
/* harmony import */ var _components_setting_base_base_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/setting/base/base.component */ "./src/app/components/setting/base/base.component.ts");
/* harmony import */ var _components_setting_collection_collection_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/setting/collection/collection.component */ "./src/app/components/setting/collection/collection.component.ts");
/* harmony import */ var _components_setting_product_product_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/setting/product/product.component */ "./src/app/components/setting/product/product.component.ts");
/* harmony import */ var _components_formula_listformula_formula_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/formula/listformula/formula.component */ "./src/app/components/formula/listformula/formula.component.ts");
/* harmony import */ var _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/formula/viewformula/viewformula.component */ "./src/app/components/formula/viewformula/viewformula.component.ts");
/* harmony import */ var _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/formula/maintenance/maintenance.component */ "./src/app/components/formula/maintenance/maintenance.component.ts");
/* harmony import */ var _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/help/language/language.component */ "./src/app/components/help/language/language.component.ts");
/* harmony import */ var _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/help/question/question.component */ "./src/app/components/help/question/question.component.ts");
/* harmony import */ var _shared_http_http_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared/http/http.module */ "./src/app/shared/http/http.module.ts");
/* harmony import */ var _directions_product_viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./directions/product/viewdetail/viewdetail.component */ "./src/app/directions/product/viewdetail/viewdetail.component.ts");
/* harmony import */ var _components_backgroundtask_viewdispensetask_viewdispensetask_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/backgroundtask/viewdispensetask/viewdispensetask.component */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.ts");
/* harmony import */ var _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/machine/machinesetting/machinesetting.component */ "./src/app/components/machine/machinesetting/machinesetting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// IMPORT MATERIAL






















// import direction










// setting




// formula



// help page !!






var routes = [
    { 'path': '', redirectTo: 'login', pathMatch: 'full' },
    { 'path': 'index', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"] },
    { 'path': 'login', component: _components_login_page_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"] }, { 'path': 'sign-in', component: _components_login_page_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"] },
    { 'path': 'register', component: _components_login_page_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"] }, { 'path': 'sign-up', component: _components_login_page_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"] },
    { 'path': 'forgot-password', component: _components_login_page_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_31__["ForgotpasswordComponent"] },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"],
        children: [
            { path: '', redirectTo: 'formula', pathMatch: 'full' },
            { path: 'colorant', component: _components_setting_colorant_colorant_component__WEBPACK_IMPORTED_MODULE_38__["ColorantComponent"] },
            { path: 'base', component: _components_setting_base_base_component__WEBPACK_IMPORTED_MODULE_39__["BaseComponent"] },
            { path: 'collection', component: _components_setting_collection_collection_component__WEBPACK_IMPORTED_MODULE_40__["CollectionComponent"] },
            { path: 'product', component: _components_setting_product_product_component__WEBPACK_IMPORTED_MODULE_41__["ProductComponent"] },
            // {path: 'product/view-detail/:id', component: ViewDetailComponent},
            { path: 'formula', component: _components_formula_listformula_formula_component__WEBPACK_IMPORTED_MODULE_42__["FormulaComponent"] },
            { path: 'view-formula/:id', component: _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_43__["ViewFormulaComponent"] },
            { path: 'job-status', component: _components_backgroundtask_backgroundtask_component__WEBPACK_IMPORTED_MODULE_37__["BackgroundTaskComponent"] },
            { path: 'maintenance', component: _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_44__["MaintenanceComponent"] },
            { path: 'machine', component: _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_50__["MachineSettingComponent"] },
            { path: 'question', component: _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_46__["QuestionComponent"] },
            { path: 'help/overview', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"] },
            { path: 'help/language', component: _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_45__["LanguageComponent"] },
            { path: 'help/boostrap', component: _components_help_structure_structure_component__WEBPACK_IMPORTED_MODULE_16__["StructureComponent"] },
            { path: 'create', component: _components_issue_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"] },
            { path: 'edit/:id', component: _components_issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"] },
            { path: 'list', component: _components_issue_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                // import directions
                _directions_boostrap_modal_modal_component__WEBPACK_IMPORTED_MODULE_28__["ModalComponent"],
                // page !!
                _components_login_page_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
                _components_login_page_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
                _components_login_page_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_31__["ForgotpasswordComponent"],
                // dashboard after login
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"],
                // common layout
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_33__["HeaderComponent"],
                _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_34__["NavigationComponent"],
                _components_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_36__["FooterComponent"],
                _components_backgroundtask_backgroundtask_component__WEBPACK_IMPORTED_MODULE_37__["BackgroundTaskComponent"],
                _components_backgroundtask_viewdispensetask_viewdispensetask_component__WEBPACK_IMPORTED_MODULE_49__["ViewDispenseTaskComponent"],
                // setting component
                _components_setting_colorant_colorant_component__WEBPACK_IMPORTED_MODULE_38__["ColorantComponent"],
                _components_setting_base_base_component__WEBPACK_IMPORTED_MODULE_39__["BaseComponent"],
                _components_setting_collection_collection_component__WEBPACK_IMPORTED_MODULE_40__["CollectionComponent"],
                _components_setting_product_product_component__WEBPACK_IMPORTED_MODULE_41__["ProductComponent"],
                _directions_product_viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_48__["ViewDetailComponent"],
                // formula component
                _components_formula_listformula_formula_component__WEBPACK_IMPORTED_MODULE_42__["FormulaComponent"],
                _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_43__["ViewFormulaComponent"],
                _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_44__["MaintenanceComponent"],
                // machine component
                _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_50__["MachineSettingComponent"],
                // test component
                _components_issue_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _components_issue_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
                _components_issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"],
                // help page
                _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_46__["QuestionComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
                _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_45__["LanguageComponent"],
                _components_help_structure_structure_component__WEBPACK_IMPORTED_MODULE_16__["StructureComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_http_http_module__WEBPACK_IMPORTED_MODULE_47__["HttpModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                // IMPORT MATERIAL
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                // import boostrap
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_10__["NgSelect2Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                ng_cookie__WEBPACK_IMPORTED_MODULE_17__["CookieService"],
                _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_27__["JobStatusService"],
                _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_26__["ModalService"],
                _services_issues_issue_service__WEBPACK_IMPORTED_MODULE_18__["IssueService"],
                _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_19__["ColourantService"],
                _services_product_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"],
                _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_21__["CollectionService"],
                _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_22__["FormulaService"],
                _services_base_base_service__WEBPACK_IMPORTED_MODULE_23__["BaseService"],
                _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_24__["ProductBaseService"],
                _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_25__["MachineService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/backgroundtask/backgroundtask.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/backgroundtask/backgroundtask.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Job status</h1>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Job\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" > <!---->\r\n            <tr>\r\n              <th mat-sort-header=\"jobStatusId\">#Id</th>\r\n              <th mat-sort-header=\"type\">Type</th>\r\n              <th mat-sort-header=\"status\">Status</th>\r\n              <th mat-sort-header=\"process\">Process</th>\r\n              <th mat-sort-header=\"startTime\">Start Time</th>\r\n              <th mat-sort-header=\"stopTime\">End Time</th>\r\n              <th>Action</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of listBackgroundTask\">\r\n              <td>{{item.jobStatusId}}</td>\r\n              <td>{{item.type}}</td>\r\n              <td>{{item.status}}</td>\r\n              <td>{{process}} / 100%</td>\r\n              <td>{{item.startTime | date: 'hh:mm:ss dd/MM/yyyy'}}</td>\r\n              <td>{{item.stopTime |  date: 'hh:mm:ss dd/MM/yyyy'}}</td>\r\n              <td><span (click)=\"viewCurrentTask(item.jobStatusId)\"><i class=\"fas fa-info-circle\"></i></span></td>\r\n            </tr>\r\n\r\n            <!--<tfoot>-->\r\n            <!--<tr>-->\r\n              <!--<td colspan=\"100%\">-->\r\n                <!--Show {{pagenationMode.listItems.length}} of  {{pagenationMode.totalItem}} items.-->\r\n\r\n                <!--<span class=\"pagenation-footer\" style=\"float: right\">-->\r\n                  <!--<span *ngIf=\"pagenationMode.pageIndex > 0\" (click)=\"goToPage(pagenationMode.pageIndex - 1)\" class=\"btn-action\">previous</span>-->\r\n                  <!--<span>{{pagenationMode.pageIndex + 1}}</span>-->\r\n                  <!--<span *ngIf=\"pagenationMode.pageIndex * pagenationMode.maxPageItem + pagenationMode.maxPageItem < pagenationMode.totalItem\"  (click)=\"goToPage(pagenationMode.pageIndex + 1)\" class=\"btn-action\">next</span>-->\r\n                <!--</span>-->\r\n              <!--</td>-->\r\n            <!--</tr>-->\r\n            <!--</tfoot>-->\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/backgroundtask/backgroundtask.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/backgroundtask/backgroundtask.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2dyb3VuZHRhc2svYmFja2dyb3VuZHRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/backgroundtask/backgroundtask.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/backgroundtask/backgroundtask.component.ts ***!
  \***********************************************************************/
/*! exports provided: BackgroundTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundTaskComponent", function() { return BackgroundTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/jobstatus/jobstatus.service */ "./src/app/services/jobstatus/jobstatus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundTaskComponent = /** @class */ (function () {
    function BackgroundTaskComponent(jobStatusService) {
        this.jobStatusService = jobStatusService;
    }
    BackgroundTaskComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    BackgroundTaskComponent.prototype.loadData = function () {
        this.listBackgroundTask = this.jobStatusService.getListJob();
    };
    BackgroundTaskComponent.prototype.viewCurrentTask = function (jobId) {
        console.log(this.jobStatusService.subcribleTask(jobId, this));
    };
    BackgroundTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backgroundtask',
            template: __webpack_require__(/*! ./backgroundtask.component.html */ "./src/app/components/backgroundtask/backgroundtask.component.html"),
            styles: [__webpack_require__(/*! ./backgroundtask.component.scss */ "./src/app/components/backgroundtask/backgroundtask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_1__["JobStatusService"]])
    ], BackgroundTaskComponent);
    return BackgroundTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-content\" *ngIf=\"currentTask != null\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div *ngIf=\"currentBgrTask != null\">\r\n        {{currentBgrTask.type}}\r\n\r\n        <div class=\"component-pumping-info\" *ngIf=\"'pumping' == currentBgrTask.type\">\r\n\r\n          <table cellpadding=\"5\" cellspacing=\"0\">\r\n            <tr>\r\n              <td class=\"text-right\">Component</td>\r\n              <td colspan=\"100%\" class=\"text-center\" [style]=\"{'margin-left': '50px'}\">\r\n                  <span class=\"color-bar\" >\r\n                    <span class=\"color-select\" [ngStyle]=\"{'background': currentBgrTask.taskData.colorant.rbgHex, 'width': '20px', 'height': '150px'}\"></span>\r\n                  </span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-right\"><span class=\"component-name\">{{currentBgrTask.taskData.colorant.colourantName}}</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Wanted</td>\r\n            </tr>\r\n            <tr>\r\n              <td  class=\"text-right\"><span class=\"component-name\">{{currentBgrTask.taskData.quantity}}</span> ml</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Dispensed</td>\r\n            </tr>\r\n            <tr>\r\n              <td  class=\"text-right\"><span class=\"component-name\">0</span> ml</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-5\">\r\n      <div *ngIf=\"currentTask.childrenTask != null && currentTask.childrenTask.length > 0\" >\r\n\r\n        {{currentBgrTask.type}}\r\n\r\n        <div  *ngIf=\"'prepare' == currentBgrTask.type\" class=\"formula-animation preparing-animation text-center\">\r\n          <img src=\"../../../../assets/videos/Preparing.gif\" width=\"250\" height=\"250\"/>\r\n        </div>\r\n\r\n        <div *ngIf=\"'pumping' == currentBgrTask.type\" class=\"formula-animation pumping-animation text-center\">\r\n          <img src=\"../../../../assets/videos/Pumping.gif\" width=\"250\" height=\"250\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div *ngFor=\"let colorantItem of listColorant\" class=\"color-bar-group\">\r\n          <span class=\"color-bar\" >\r\n            <span class=\"color-select\" [ngStyle]=\"{'background': colorantItem.colorant.rbgHex, 'width': (colorantItem.quantity / maxColorQuantity) * 100 + '%'}\">\r\n              <span class=\"color-name\">{{colorantItem.colorant.name}}</span>\r\n            </span>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-5\">\r\n        <span class=\"base-can-empty\" *ngIf=\"currentTask.taskData != null\">\r\n          <span class=\"base-can-background\">\r\n            <span class=\"base-can-volume\"\r\n                  [ngStyle]=\"{'background-color': currentTask.taskData.productBaseCan.productBase.rbgHex, 'height': currentTask.taskData.productBaseCan.percentage + '%'}\">\r\n              <span class=\"can-base-info\">\r\n                <span class=\"base-type\">Base : {{currentTask.taskData.productBaseCan.productBase.base.baseCode}}</span>\r\n                <span class=\"base-volume\">{{currentTask.taskData.canSize + \" \" + currentTask.taskData.unit}}</span>\r\n                <span class=\"base-name\">{{currentTask.taskData.formulaProductBase.formula.collection.collectionName}}</span>\r\n              </span>\r\n            </span>\r\n          </span>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2dyb3VuZHRhc2svdmlld2Rpc3BlbnNldGFzay92aWV3ZGlzcGVuc2V0YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewDispenseTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDispenseTaskComponent", function() { return ViewDispenseTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/jobstatus/jobstatus.service */ "./src/app/services/jobstatus/jobstatus.service.ts");
/* harmony import */ var _models_job_status_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/job.status.model */ "./src/app/models/job.status.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewDispenseTaskComponent = /** @class */ (function () {
    function ViewDispenseTaskComponent(jobStatusService) {
        this.jobStatusService = jobStatusService;
    }
    ViewDispenseTaskComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    ViewDispenseTaskComponent.prototype.fetchData = function () {
        var _this = this;
        if (this.taskId != null && this.taskId > 0) {
            this.jobStatusService.subcribleTask(this.taskId, this).subscribe(function (result) {
                _this.currentTask = result;
                _this.updateDataForCurrentTask();
            });
        }
    };
    ViewDispenseTaskComponent.prototype.triggerUpdateTask = function (taskData) {
        this.currentTask = taskData;
        this.updateDataForCurrentTask();
    };
    ViewDispenseTaskComponent.prototype.updateDataForCurrentTask = function () {
        if (this.currentTask != null) {
            for (var _i = 0, _a = this.currentTask.childrenTask; _i < _a.length; _i++) {
                var task = _a[_i];
                if (task.state === _models_job_status_model__WEBPACK_IMPORTED_MODULE_2__["MAP_TASK_STATE"].IN_PROGRESS) {
                    this.currentBgrTask = task;
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ViewDispenseTaskComponent.prototype, "taskId", void 0);
    ViewDispenseTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewdispensetask',
            template: __webpack_require__(/*! ./viewdispensetask.component.html */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.html"),
            styles: [__webpack_require__(/*! ./viewdispensetask.component.scss */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_1__["JobStatusService"]])
    ], ViewDispenseTaskComponent);
    return ViewDispenseTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div id=\"wrapper\">\r\n  <div id=\"content-wrapper\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"container\">\r\n        <app-breadcrumb></app-breadcrumb>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n\r\n      <!--<section class=\"content\">-->\r\n      <!---->\r\n      <!--</section>-->\r\n<!---->\r\n      <!--<section class=\"content\">-->\r\n        <!---->\r\n      <!--</section>-->\r\n    </div>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/listformula/formula.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/formula/listformula/formula.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Formula</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card filter-card\">\r\n      <div class=\"card-header\">\r\n        Filter\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form class=\"form form-horizontal form-detail\">\r\n          <div class=\"form-body\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Select Color</label>\r\n              <div class=\"input-group input-group-sm col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedFormulaFilter\" name=\"selectedFormulaFilter\" [(ngModel)]=\"filter.formulaId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Color</option>\r\n                  <option *ngFor=\"let f of listFormulas\" value=\"{{f.formulaId}}\">{{f.formulaName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Select Collection</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedCollectionFilter\" name=\"selectedCollectionFilter\" [(ngModel)]=\"filter.collectionId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Collection</option>\r\n                  <option *ngFor=\"let c of listCollections\" value=\"{{c._collectionId}}\">{{c._collectionName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Select Product</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedProductFilter\" name=\"selectedProductFilter\" [(ngModel)]=\"filter.productId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Product</option>\r\n                  <option *ngFor=\"let c of listProducts\" value=\"{{c._productId}}\">{{c._productCode}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-actions text-center\">\r\n            <button class=\"btn btn-primary mr-3\" (click)=\"filterFormula(null)\">Search</button>\r\n            <button class=\"btn btn-default\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <!--<div class=\"card-footer\">-->\r\n\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Colorant\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" > <!---->\r\n            <tr>\r\n              <th mat-sort-header=\"formulaCode\">Formula Code</th>\r\n              <th mat-sort-header=\"formulaName\">Formula Name</th>\r\n              <th mat-sort-header=\"collection\">Collection\r\n              <th mat-sort-header=\"product\">Product</th>\r\n              <th mat-sort-header=\"createdDate\">Created Date</th>\r\n              <th mat-sort-header=\"createdBy\">Created By</th>\r\n              <th>Action</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of pagenationMode.listItems\">\r\n              <td>{{item.formula.formulaCode}}</td>\r\n              <td>{{item.formula.formulaName}}</td>\r\n              <td>{{item.formula.collection.collectionName}}</td>\r\n              <td>{{item.productBase.product.productName}}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>\r\n                <button class=\"btn btn-primary\" (click)=\"viewFormula(item.formulaProductBaseId)\"><i class=\"fas fa-info-circle\"></i> View</button>\r\n            </tr>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"100%\">\r\n                Show {{pagenationMode.listItems.length}} of  {{pagenationMode.totalItem}} items.\r\n\r\n                <span class=\"pagenation-footer\" style=\"float: right\">\r\n                  <span *ngIf=\"pagenationMode.pageIndex > 0\" (click)=\"goToPage(pagenationMode.pageIndex - 1)\" class=\"btn-action\">previous</span>\r\n                  <span>{{pagenationMode.pageIndex + 1}}</span>\r\n                  <span *ngIf=\"pagenationMode.pageIndex * pagenationMode.maxPageItem + pagenationMode.maxPageItem < pagenationMode.totalItem\"  (click)=\"goToPage(pagenationMode.pageIndex + 1)\" class=\"btn-action\">next</span>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/formula/listformula/formula.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/formula/listformula/formula.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-color-field {\n  width: 100%; }\n\n.select2.select2-container {\n  min-width: 300px;\n  width: 100%; }\n\n.pagenation-footer {\n  float: right; }\n\n.pagenation-footer span {\n    display: inline-block;\n    min-width: 50px;\n    text-align: center;\n    padding: 5px 10px; }\n\n.pagenation-footer span.btn-action {\n      border: 1px solid #ccc;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2xpc3Rmb3JtdWxhL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtdWxhXFxsaXN0Zm9ybXVsYVxcZm9ybXVsYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXLEVBQ1o7O0FBR0Q7RUFDRSxhQUFZLEVBYWI7O0FBZEQ7SUFHSyxzQkFBcUI7SUFFckIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsa0JBQWlCLEVBTWxCOztBQWJKO01BVU8sdUJBQXNCO01BQ3RCLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2xpc3Rmb3JtdWxhL2Zvcm11bGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNvbG9yLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VsZWN0Mi5zZWxlY3QyLWNvbnRhaW5lcntcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnBhZ2VuYXRpb24tZm9vdGVye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAgc3BhbntcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG4gICAgICYuYnRuLWFjdGlvbntcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgfVxyXG4gICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/formula/listformula/formula.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/formula/listformula/formula.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaComponent", function() { return FormulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/formula/formula.service */ "./src/app/services/formula/formula.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/pagination.model */ "./src/app/models/pagination.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormulaComponent = /** @class */ (function () {
    function FormulaComponent(formulaService, collectionService, productService, router) {
        this.formulaService = formulaService;
        this.collectionService = collectionService;
        this.productService = productService;
        this.router = router;
        this.listItems = [];
        this.listOriginal = [];
        this.listFormulas = [];
        this.listCollections = [];
        this.listProducts = [];
        this.pagenationMode = new _models_pagination_model__WEBPACK_IMPORTED_MODULE_5__["PagenationModel"]([], 0, 0, 15);
        this.filter = {
            formulaId: undefined,
            productId: undefined,
            collectionId: undefined
        };
        this.updatePagenationMode = function () {
            var listItem = this.listItems;
            var currentPage = this.pagenationMode.pageIndex;
            var _listItem = [];
            for (var i = currentPage * this.pagenationMode.maxPageItem; i < listItem.length; i++) {
                if (i < currentPage * this.pagenationMode.maxPageItem + this.pagenationMode.maxPageItem) {
                    _listItem.push(listItem[i]);
                }
                else {
                    break;
                }
            }
            this.pagenationMode.listItems = _listItem;
            this.pagenationMode.totalItem = listItem.length;
        };
    }
    FormulaComponent.prototype.ngOnInit = function () {
        this.initMetadata();
    };
    FormulaComponent.prototype.initMetadata = function () {
        var _this = this;
        // this.formulaService.postData();
        // this.formulaService.postData1();
        var me = this;
        this.listFormulas = [];
        this.formulaService.getALl().subscribe(function (datas) {
            datas.map(function (c) {
                me.listFormulas.push(c);
            });
        });
        this.listProducts = [];
        this.productService.getListItems().subscribe(function (datas) {
            datas.map(function (p) {
                me.listProducts.push(p);
            });
        });
        this.listCollections = [];
        this.collectionService.getListItems().subscribe(function (datas) {
            datas.map(function (c) {
                me.listCollections.push(c);
            });
        });
        // get list formula product base
        this.listItems = [];
        this.listOriginal = [];
        this.formulaService.getAllFormulaProductBase().subscribe(function (datas) {
            datas.map(function (fpb) {
                me.listItems.push(fpb);
                me.listOriginal.push(fpb);
            });
            _this.updatePagenationMode();
        });
    };
    FormulaComponent.prototype.viewFormula = function (formulaProductBaseId) {
        this.router.navigate(["../dashboard/view-formula/" + formulaProductBaseId]);
    };
    FormulaComponent.prototype.onFilterChange = function () {
        this.refresh();
    };
    FormulaComponent.prototype.refresh = function () {
        var _this = this;
        var resFilter = this.listOriginal;
        if (this.filter.formulaId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.formula.formulaId.toString() === _this.filter.formulaId.toString();
            });
        }
        if (this.filter.collectionId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.formula.collection.collectionId.toString() === _this.filter.collectionId.toString();
            });
        }
        if (this.filter.productId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.productBase.product.productId.toString() === _this.filter.productId.toString();
            });
        }
        this.listItems = resFilter;
        this.pagenationMode.pageIndex = 0;
        this.updatePagenationMode();
    };
    FormulaComponent.prototype.goToPage = function (pageIndex) {
        this.pagenationMode.pageIndex = pageIndex;
        this.updatePagenationMode();
    };
    FormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formula',
            template: __webpack_require__(/*! ./formula.component.html */ "./src/app/components/formula/listformula/formula.component.html"),
            styles: [__webpack_require__(/*! ./formula.component.scss */ "./src/app/components/formula/listformula/formula.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_formula_formula_service__WEBPACK_IMPORTED_MODULE_1__["FormulaService"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_3__["CollectionService"],
            _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormulaComponent);
    return FormulaComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/maintenance/maintenance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/maintenance/maintenance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Maintenance</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/formula/maintenance/maintenance.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/maintenance/maintenance.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9tYWludGVuYW5jZS9tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/formula/maintenance/maintenance.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/formula/maintenance/maintenance.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/components/formula/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.scss */ "./src/app/components/formula/maintenance/maintenance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/viewformula/viewformula.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/viewformula/viewformula.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Standard Formula</h1>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"dbItem != null\">\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Information\r\n      </div>\r\n\r\n      <div class=\"card-body form-detail\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Color</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.formulaCode}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Collection</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.collection.collectionName}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Approximate Color</label>\r\n          <div class=\"col-md-8\">\r\n            <span [ngStyle]=\"{'background': dbItem.formula.colorRGB, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Product</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.productBase.product.productName}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Formula Date</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.createdDate | date : 'dd/MM/yyyy'}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Substrate</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.productBase.substrate}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Comments</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.comments}}\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Barcode</label>\r\n          <div class=\"col-md-8\">\r\n            <span *ngIf=\"selectProductBase != null\">\r\n              {{selectProductBase.barCode}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Component colors\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" >\r\n            <tr>\r\n              <th style=\"width: 30%\">Component</th>\r\n              <th style=\"width: 20%\">ml</th>\r\n              <th style=\"width: 50%\">Color\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let colorantItem of listFormulaColorant\">\r\n              <td>{{colorantItem.colourant.colourantName}}</td>\r\n              <td>{{colorantItem.quantity * canSize}}</td>\r\n              <td>\r\n                <span class=\"color-bar\" >\r\n                  <span class=\"color-select\" [ngStyle]=\"{'background': colorantItem.colourant.rbgHex, 'width': (colorantItem.quantity / maxColorQuantity) * 100 + '%'}\"></span>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Mixed\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-126 col-xs-12 text-right\">\r\n\r\n             <span class=\"base-can-empty\" *ngIf=\"selectProductBase != null\">\r\n                <span class=\"base-can-background\">\r\n                  <span class=\"base-can-volume\" [ngStyle]=\"{'background-color': selectProductBase.productBase.rbgHex, 'height': selectProductBase.percentage + '%'}\">\r\n                    <span class=\"can-base-info\">\r\n                      <span class=\"base-type\">Base : {{selectProductBase.productBase.base.baseCode}}</span>\r\n                      <span class=\"base-volume\">{{canSize + \" \" + selectProductBase.unit}}</span>\r\n                      <span class=\"base-name\">{{selectProductBase.productBase.product.productName}}</span>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n              </span>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 col-md-6 col-sm-126 col-xs-12 form-detail\">\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Number of cans : </label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" [(ngModel)]=\"numberOfCan\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width': '200px'}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Can size:</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" [(ngModel)]=\"canSize\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width': '200px'}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Or select:</label>\r\n              <div class=\"col-md-8\">\r\n                <ng-select2 class=\"select-color-field\" [(ngModel)]=\"canSize\" [data]=\"listProductBase\" [value]=\"canSize\" [placeholder]=\"'Choose Can Size'\" [width]=\"200\" (valueChanged)=\"changedCanSize($event)\"></ng-select2>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\"></label>\r\n\r\n              <div class=\"col-md-8\">\r\n                <button class=\"btn btn-primary\" (click)=\"beginDispense('view-dispense-task-modal')\"><i class=\"fas fa-fill-drip\"></i> <span *ngIf=\"isNotBusy\">Dispense</span> <span *ngIf=\"! isNotBusy\">In Progress</span> </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<pp-modal id=\"view-dispense-task-modal\" class=\"modal dispense-job-status-modal\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Dispense Job Status</h5>\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-dispense-task-modal')\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <app-viewdispensetask [taskId]=\"currentJob.taskId \" *ngIf=\"currentJob != null && currentJob.taskId != null && currentJob.taskId > 0\"></app-viewdispensetask>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal('view-dispense-task-modal')\">Hide</button>\r\n    </div>\r\n  </div>\r\n</pp-modal>\r\n\r\n<pp-modal id=\"print-formula-modal\" class=\"modal print-formula-modal\" *ngIf=\"isTaskDone\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Print</h5>\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('print-formula-modal')\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-12 formula-color-info\"><h3>{{dbItem.formula.formulaCode}}</h3></div>\r\n        <div class=\"col-md-12 collection-info\"><h4>{{dbItem.formula.collection.collectionName}}</h4></div>\r\n        <div class=\"col-md-12 shop-info\"><h5>Paintshop \"Demo\"</h5></div>\r\n        <div class=\"col-md-12 street-info\"><h5>Demostreet 1</h5></div>\r\n        <div class=\"col-md-12 ville-info\"><h5>Demo ville</h5></div>\r\n        <div class=\"col-md-12 substrate-info\"><p>Substrate recommendation Universal primer Grey</p></div>\r\n        <div class=\"col-md-12 bar-code-info \"><p><span class=\"bar-code-sample\"></span></p></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"closeDispenseModel()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeDispenseModel()\">Print</button>\r\n    </div>\r\n  </div>\r\n</pp-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/formula/viewformula/viewformula.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/viewformula/viewformula.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-bar {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  height: 1em; }\n  .color-bar .color-select {\n    display: inline-block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3ZpZXdmb3JtdWxhL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtdWxhXFx2aWV3Zm9ybXVsYVxcdmlld2Zvcm11bGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixZQUFXLEVBU1o7RUFiRDtJQU9JLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm11bGEvdmlld2Zvcm11bGEvdmlld2Zvcm11bGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItYmFye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxZW07XHJcblxyXG4gIC5jb2xvci1zZWxlY3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/formula/viewformula/viewformula.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/formula/viewformula/viewformula.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewFormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormulaComponent", function() { return ViewFormulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/formula/formula.service */ "./src/app/services/formula/formula.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
/* harmony import */ var _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/job.status.model */ "./src/app/models/job.status.model.ts");
/* harmony import */ var _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/jobstatus/jobstatus.service */ "./src/app/services/jobstatus/jobstatus.service.ts");
/* harmony import */ var _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/productbase/productbase.service */ "./src/app/services/productbase/productbase.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewFormulaComponent = /** @class */ (function () {
    function ViewFormulaComponent(formulaService, productBaseService, modalService, jobStatusService, router, route, cd) {
        this.formulaService = formulaService;
        this.productBaseService = productBaseService;
        this.modalService = modalService;
        this.jobStatusService = jobStatusService;
        this.router = router;
        this.route = route;
        this.cd = cd;
        // formula Product Base
        this.dbItem = null;
        this.listFormulaColorant = null;
        this.listProductBaseCan = null;
        this.maxColorQuantity = 0;
        this.canSize = 1;
        this.selectProductBase = null;
        this.numberOfCan = 1;
        this.listProductBase = null;
        this.currentJob = null;
        this.listColorant = null;
    }
    ViewFormulaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.formulaProductBaseId = parseInt(params.id);
            _this.listFormulaColorant = [];
            _this.listProductBaseCan = [];
            _this.fetchDBItem();
        });
    };
    ViewFormulaComponent.prototype.fetchDBItem = function () {
        var _this = this;
        this.selectProductBase = null;
        // step 1. Get Formula By Id
        this.formulaService.findFormulaProductBaseById(this.formulaProductBaseId).subscribe(function (data) {
            _this.dbItem = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_7__["default"].convertToFormulaProductBaseObject(data);
            _this.getRelativeData();
        });
    };
    ViewFormulaComponent.prototype.getRelativeData = function () {
        var _this = this;
        if (this.dbItem != null) {
            // Step 2. Get list Colorant of Formula
            this.formulaService.getListColorantOfFormula(this.dbItem.formula.formulaId).subscribe(function (data) {
                _this.listFormulaColorant = data;
                // Step 4. Process data before render
                _this.listColorant = [];
                for (var _i = 0, _a = _this.listFormulaColorant; _i < _a.length; _i++) {
                    var colorant = _a[_i];
                    _this.listColorant.push({ colorant: colorant.colourant, quantity: colorant.quantity });
                    if (_this.maxColorQuantity === 0 || _this.maxColorQuantity < colorant.quantity) {
                        _this.maxColorQuantity = colorant.quantity;
                    }
                }
            });
            // Step 3. Get List Product Base Can of Formula
            this.formulaService.getListProductBaseCan(this.dbItem.productBase.productBaseId).subscribe(function (datas) {
                _this.listProductBaseCan = datas;
                _this.listProductBase = [];
                for (var _i = 0, _a = _this.listProductBaseCan; _i < _a.length; _i++) {
                    var productBaseCan = _a[_i];
                    _this.listProductBase.push({
                        id: productBaseCan.can,
                        text: productBaseCan.can + ' ' + (productBaseCan.unit === null ? 'L' : productBaseCan.unit)
                    });
                    if (productBaseCan.can === _this.canSize) {
                        _this.selectProductBase = productBaseCan;
                    }
                }
                if (_this.selectProductBase == null && _this.listProductBaseCan.length > 0) {
                    _this.selectProductBase = _this.listProductBaseCan[0];
                    _this.canSize = _this.selectProductBase.can;
                }
            });
            this.isTaskDone = false;
            this.isNotBusy = this.jobStatusService.getState() === _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_5__["MAP_JOB_STATE"].WAITING;
        }
    };
    ViewFormulaComponent.prototype.changedCanSize = function (e) {
        this.canSize = e.value;
    };
    ViewFormulaComponent.prototype.beginDispense = function (modalId) {
        var _this = this;
        this.isNotBusy = this.jobStatusService.getState() === _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_5__["MAP_JOB_STATE"].WAITING;
        if (this.isNotBusy) {
            this.isTaskDone = false;
            var listPumpingTask = [];
            for (var _i = 0, _a = this.listColorant; _i < _a.length; _i++) {
                var colorant = _a[_i];
                var prepare_t = new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["TaskModel"]();
                var pumping_t = new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["TaskModel"]();
                prepare_t.updateState('prepare', null, null, null);
                pumping_t.updateState('pumping', null, new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["DispenseStepDataModel"](colorant.colorant, colorant.quantity * this.canSize), null);
                listPumpingTask.push(prepare_t);
                listPumpingTask.push(pumping_t);
            }
            var stop_t = new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["TaskModel"]();
            stop_t.updateState('finished', null, null, function () {
                _this.isTaskDone = true;
                setTimeout(function () {
                    _this.openModal('print-formula-modal');
                }, 500);
            });
            listPumpingTask.push(stop_t);
            this.currentJob = new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["TaskModel"]();
            this.currentJob.updateState('Dispense', listPumpingTask, new _models_job_status_model__WEBPACK_IMPORTED_MODULE_4__["DispenseDataModel"](this.dbItem, this.selectProductBase, this.canSize, this.numberOfCan), null);
            this.jobStatusService.addJob(this.currentJob, this);
        }
        this.openModal(modalId);
    };
    ViewFormulaComponent.prototype.triggerUpdateTask = function (taskData) {
        this.currentJob = taskData;
    };
    ViewFormulaComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ViewFormulaComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ViewFormulaComponent.prototype.closeDispenseModel = function () {
        this.closeModal('view-dispense-task-modal');
        this.closeModal('print-formula-modal');
    };
    ViewFormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewformula',
            template: __webpack_require__(/*! ./viewformula.component.html */ "./src/app/components/formula/viewformula/viewformula.component.html"),
            styles: [__webpack_require__(/*! ./viewformula.component.scss */ "./src/app/components/formula/viewformula/viewformula.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_formula_formula_service__WEBPACK_IMPORTED_MODULE_1__["FormulaService"],
            _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_6__["ProductBaseService"],
            _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _services_jobstatus_jobstatus_service__WEBPACK_IMPORTED_MODULE_5__["JobStatusService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ViewFormulaComponent);
    return ViewFormulaComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n  <h2>Hướng dẫn setup git nếu commit ko được</h2>\r\n  <div class=\"content\">\r\n    <p>Khi gặp lỗi này: </p>\r\n    <blockquote>\r\n      Failed with error: unable to access 'https://github.com/buitahau/demoson.git/': The requested URL returned error: 403\r\n    </blockquote>\r\n\r\n    <p>Ta cần làm như sau: Vào folder .git/config, edit lại cái url như sau :</p>\r\n\r\n    <p>url = https://github.com/buitahau/demoson.git</p>\r\n\r\n    <p>url = https://bluesky020990:xxxxxxxxxxx@github.com/buitahau/demoson.git</p>\r\n\r\n    <p>Vẫn ko được :( Do ko đc share !!</p>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <h2>Hướng dẫn cài đặt angular</h2>\r\n\r\n  <div class=\"content\">\r\n    <p>Để cài đặt angular, đầu tiên ta new 1 cái angular project</p>\r\n\r\n    <blockquote>\r\n      ng new frontend\r\n    </blockquote>\r\n\r\n    <p>Sau khi khởi tạo nó rồi, đơn giản là ta sẽ start nó thôi đúng ko</p>\r\n\r\n    <blockquote>\r\n      ng serve --open\r\n    </blockquote>\r\n\r\n    <p>--open khai báo tự open cái browser lên để show cái page.</p>\r\n\r\n\r\n    <p>Các npm cần install để làm việc trong project này bao gồm:</p>\r\n    <ol>\r\n      <li>material </li>\r\n      <li>boostrap</li>\r\n      <li>node sass (để generate scss files)</li>\r\n    </ol>\r\n\r\n    <p>Sau đó, ta add material cho cái project này</p>\r\n\r\n    <blockquote>\r\n      ng add @angular/material\r\n    </blockquote>\r\n\r\n\r\n    <p>Add luon cai boostrap</p>\r\n\r\n    <p>Install boostrap</p>\r\n\r\n    <blockquote>\r\n      npm install ngx-bootstrap --save\r\n    </blockquote>\r\n\r\n    <p>Add boostrap to project </p>\r\n\r\n    <blockquote>\r\n      ng add ngx-bootstrap\r\n    </blockquote>\r\n\r\n    <p>Xem hướng dẫn install bootstrap cho angular tai  : <a href=\"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b\">đây</a> </p>\r\n\r\n    <p>Install node sass để generate scss file. Nếu ko cài cái này thì style trong file scss sẽ ko được generate ra đâu</p>\r\n\r\n    <blockquote>\r\n      npm install -g node-sass\r\n    </blockquote>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <h2>Hướng dẫn tạo component và khai báo routers</h2>\r\n\r\n  <div class=\"content\">\r\n    <p>Để tạo một component tự động, ta làm như sau : ** Khuyến khích xài command line vì generate thủ công\r\n    rất dễ sai và đôi khi xảy ra những sai sót ko đáng có.</p>\r\n\r\n    <ol>\r\n      <li>cd vào folder cài đặt angular, folder chứa file package.json (ở đây là front-end)</li>\r\n      <li>Dùng command line sau để tạo component một cách tự động:\r\n        <blockquote>\r\n          ng g c components/help\r\n        </blockquote>\r\n\r\n        <p>Giải thích  thêm : g - generate, c - component, components/help : tạo component Help ở folder /components</p>\r\n      </li>\r\n    </ol>\r\n\r\n    <img src=\"../../../assets/help/add_components.JPG\" width=\"989\" height=\"837\" class=\"img-fluid\"/>\r\n\r\n    <p>Đối với component, luôn có 2 phần, 1 là annotation @component và 2 là export class. 2 Cái này luôn đi với nhau, như hình:</p>\r\n\r\n    <img src=\"../../../assets/help/component_note_1.JPG\" width=\"1492\" height=\"1235\" class=\"img-fluid\"/>\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <p>Quan trọng nhất của angular là các router. Ta phải khai báo các router này để định tuyến các request tới\r\n    các Component tương ứng.</p>\r\n\r\n    <p>Trong file app.module.ts, ta khai báo routers như sau: Xem image</p>\r\n\r\n    <img src=\"../../../assets/help/config_routers.jpg\" width=\"1884\" height=\"1453\"/>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <h2>Những lưu ý khi sử dụng các components trong Angular.</h2>\r\n\r\n  <div class=\"content\">\r\n    <p>Nếu một tag chưa được khai báo, thì nó sẽ báo lỗi biên dịch. Ví dụ thêm vào < mat-toolbar>&lt;/> thì ngay lập tức nó báo lỗi.</p>\r\n    <p>Khi import một module vào, thì phải thêm nó ở trong imports</p>\r\n\r\n    <img src=\"../../../assets/help/add_module.JPG\" width=\"1432\" height=\"1467\" class=\"img-fluid\"/>\r\n\r\n  </div>\r\n</section>\r\n\r\n\r\n<section class=\"container\">\r\n  <h2>Tạo service trong Angular </h2>\r\n\r\n  <div class=\"content\">\r\n    <p>Việc tạo service cũng như tạo component, tốt nhất nên generate tự động.</p>\r\n\r\n    <blockquote>\r\n      ng g s issue\r\n    </blockquote>\r\n\r\n    <p>Khác với component, sau khi generate xong ta phải khao báo trong declarations của app.module, thì service phải được khai báo trong providers.</p>\r\n\r\n    <img src=\"../../../assets/help/add_service.JPG\" width=\"2134\" height=\"1700\" class=\"img-fluid\"/>\r\n\r\n    <p>Như vậy, trước mắt ta có các lưu ý sau:</p>\r\n\r\n    <ol>\r\n      <li>Component khai báo trong declarations</li>\r\n      <li>Service khai báo trong providers</li>\r\n      <li>Module khai báo trong imports</li>\r\n    </ol>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/help/help.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-help blockquote {\n  border: 1px solid #ccc;\n  padding: 5px; }\n\napp-help img {\n  max-width: 50% !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWxwXFxoZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjs7QUFKSDtFQU9JLDBCQUF5QjtFQUN6Qix3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWxwe1xyXG4gIGJsb2NrcXVvdGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/components/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/help/language/language.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/help/language/language.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Angular language</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Làm việc với kiểu dữ liệu trong angular.\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <p>Danh sách các vấn đề cần quan tâm bao gồm :</p>\r\n\r\n        <ul>\r\n          <li>Show 1 biến ra màn hình</li>\r\n          <li>Gán giá trị local trong template</li>\r\n          <li>Câu điều kiện if else</li>\r\n          <li>Vòng lặp</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Overview</h4>\r\n\r\n        <p>Trong angular, để set các biến cho các component để sử dụng bên html page, thì ta phải khai báo nó trong method export component.</p>\r\n\r\n        <p>Mỗi languge có những vấn đề khác nhau, ở đây ta sẽ tìm hiểu về việc show cái giá trị biến, gán giá trị, so sánh\r\n          điều kiện if  else if, else, các vòng lặp for, while (nếu có), cũng như các hashtag khác.</p>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Show 1 biến ra màn hình</h4>\r\n\r\n        <p>Biến trong angular được export trong đoạn block code cuối cùng của component. Ví dụ ta có biến pageTitle.</p>\r\n\r\n        <p>Để show nó ra màn hình ta sử dụng cặp dấu \"{{'{'}}\" \"{{ '{' }}\" \"{{ '}' }}\" \"{{ '}' }}\" này nhé.</p>\r\n\r\n        <p>(Lưu ý là show nó, còn sử dụng thì ko cần cặp dấu  \"{{'{'}}\" \"{{ '}' }}\" này đâu nhé. Xem file colorant.component.html để biết thêm chi tiết)</p>\r\n\r\n        <blockquote>\r\n          Content này lấy từ pageTitle : {{ pageTitle | uppercase }}\r\n        </blockquote>\r\n\r\n        <p>Màu của biến nó sẽ khác với màu của mấy thằng còn lại nên sẽ rất dễ xem.</p>\r\n\r\n        <p>Để gán giá trị của biến, ta cần sử dụng ngInit</p>\r\n\r\n        <blockquote>\r\n          *ngInit\r\n        </blockquote>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Gán giá trị local trong template.</h4>\r\n\r\n        <p>để khai báo 1 biến, ta sử dụng từ khóa ngInit</p>\r\n\r\n        <p>Xem thêm ở đây <a href=\"https://www.guru99.com/angularjs-expressions.html\" target=\"_blank\">Click to view</a></p>\r\n\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Câu điều kiện if else</h4>\r\n\r\n        <p>Đây là 1 ví dụ của câu điều kiện if</p>\r\n\r\n        <blockquote>\r\n          &lt;p *ngIf=\"heroes.length > 3\">There are many heroes!&lt;/p&gt;`\r\n        </blockquote>\r\n\r\n        <p *ngIf=\"test_if_value  == true\">There are many heroes!</p>\r\n\r\n        <p>Xem thêm ở đây <a href=\"https://angular.io/guide/template-syntax#ngIf\" target=\"_blank\">Click to view</a> </p>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Làm việc với biến.</h4>\r\n\r\n        <p>Biến trong angular được export trong đoạn block code cuối cùng của component. Ví dụ ta có biến pageTitle.</p>\r\n\r\n        <p>Để sử dụng nó, ta sử dụng cặp dấu \"{{'{'}}\" \"{{ '{' }}\" \"{{ '}' }}\" \"{{ '}' }}\" này nhé.</p>\r\n\r\n        <blockquote>\r\n          Content này lấy từ pageTitle : {{ pageTitle }}\r\n        </blockquote>\r\n\r\n        <p>Màu của biến nó sẽ khác với màu của mấy thằng còn lại nên sẽ rất dễ xem.</p>\r\n      </div>\r\n\r\n\r\n\r\n      *ngIf=\"heroes.length > 3\"\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Làm việc với mảng.</h4>\r\n\r\n        <p>Duyệt các phần tử của mảng : sử dụng * ngFor=\"let item of listItem\" </p>\r\n\r\n        <blockquote>\r\n          <ul *ngFor=\"let item of listItems\">\r\n            <li>{{item}}</li>\r\n          </ul>\r\n        </blockquote>\r\n      </div>\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <h4>Style trong angular</h4>\r\n\r\n        <p>Xem tai link sau : <a href=\"https://alligator.io/angular/style-binding-ngstyle-angular/\" target=\"_blank\">Click to view </a></p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/components/help/language/language.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/help/language/language.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/help/language/language.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/help/language/language.component.ts ***!
  \****************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageComponent = /** @class */ (function () {
    function LanguageComponent() {
        this.test_if_value = true;
        this.pageTitle = 'ANGULAR LANGUAGE !!';
        this.listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/components/help/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.scss */ "./src/app/components/help/language/language.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/components/help/question/question.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/help/question/question.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Help</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        How to use this app...\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        Content .....\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        How to use this app...\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        Content .....\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        How to use this app...\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        Content .....\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        How to use this app...\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        Content .....\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        How to use this app...\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        Content .....\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/help/question/question.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/help/question/question.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/help/question/question.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/help/question/question.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/components/help/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.scss */ "./src/app/components/help/question/question.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/help/structure/structure.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/help/structure/structure.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Structure HTML & Boostrap</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Overview\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <p>Cái nào cùng vậy, đã là web thì kiểu gì cũng phải xài boostrap. Boostrap không những giúp code nhanh hơn, mà hơn\r\n        hết, cái thư viện css và js của nó rất đẹp. Nên nếu biết sử dụng đúng cách thì ko cần biết về css cũng có thể làm được.</p>\r\n\r\n        <p>Bản chất của boostrap là quy định các template. Chỉ cần khai báo đúng template là đc. Riêng vấn đề này đòi hỏi ta phải làm\r\n        nhiều mới nhớ được.</p>\r\n\r\n        <p>Đối với bất cứ việc design một cái website nào cũng vậy, theo yêu cầu khách hàng, ta nên search trên mạng để tìm 1 cái layout cho hợp lý\r\n        sau đó mang về chỉnh sửa lại css custom theo ý ta muốn. Tất nhiên, để custom thì chắc chắn phải biết 1 chút về css và các layout của boostrap rồi, đúng ko?</p>\r\n\r\n        <p>Boostrap ra đời lâu rồi. Cái này xài boostrap 4. Ngày xưa boostrap chạy với js, thì giờ ta phải sửa lại để nó cũng chạy với angula.</p>\r\n\r\n        <p>Trong cái này, sẽ bỏ vào từ từ các template của angular và boostrap.</p>\r\n\r\n        <p>Đối với việc chuyển từ js sang angular, nó phức tạp hơn những gì ta tưởng. Tuy nhiên, may mắn thay là đã có những plugin (library) hỗ trợ\r\n          ta làm cái đó. Bài viết này chủ yếu list các trường hợp như vậy thôi</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Boostrap modal\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <p>Boostrap modal là 1 component thường gặp nhất. Nó show các boostbox nhưu confirm, alert, và các modal để tương tác.</p>\r\n\r\n        <p>Hướng dãn thêm boostrap modal vào, ta xem ở đây <a href=\"http://eriktufvesson.github.io/ngbootbox/\" target=\"_blank\">Click to view</a> </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/help/structure/structure.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/help/structure/structure.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscC9zdHJ1Y3R1cmUvc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/help/structure/structure.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/help/structure/structure.component.ts ***!
  \******************************************************************/
/*! exports provided: StructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureComponent", function() { return StructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StructureComponent = /** @class */ (function () {
    function StructureComponent() {
    }
    StructureComponent.prototype.ngOnInit = function () {
    };
    StructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-structure',
            template: __webpack_require__(/*! ./structure.component.html */ "./src/app/components/help/structure/structure.component.html"),
            styles: [__webpack_require__(/*! ./structure.component.scss */ "./src/app/components/help/structure/structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StructureComponent);
    return StructureComponent;
}());



/***/ }),

/***/ "./src/app/components/issue/create/create.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/issue/create/create.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  create works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/issue/create/create.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/issue/create/create.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXNzdWUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/issue/create/create.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/issue/create/create.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/issues/issue.service */ "./src/app/services/issues/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateComponent = /** @class */ (function () {
    function CreateComponent(issueService) {
        this.issueService = issueService;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/issue/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/components/issue/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/issue/edit/edit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/issue/edit/edit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/issue/edit/edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/issue/edit/edit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXNzdWUvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/issue/edit/edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/issue/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/issues/issue.service */ "./src/app/services/issues/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = /** @class */ (function () {
    function EditComponent(issueService) {
        this.issueService = issueService;
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/issue/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/issue/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/issue/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/issue/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/issue/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/issue/list/list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXNzdWUvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/issue/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/issue/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/issues/issue.service */ "./src/app/services/issues/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(issueService) {
        this.issueService = issueService;
    }
    ListComponent.prototype.ngOnInit = function () {
        // this.issueService.getIssues().subscribe(response => this.videos = response);
        // this.issueService.getIssues().subscribe(issues => {
        //   console.log(issues);
        // });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/issue/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/issue/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_issues_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a href=\"index.html\">Dashboard</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item active\">Sample</li>\r\n</ol>\r\n"

/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/layout/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer\">\r\n  <div class=\"container my-auto\">\r\n    <div class=\"copyright text-center my-auto\">\r\n      <span>Copyright © VietPower 2018</span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand static-top\">\r\n  <div class=\"container\">\r\n    <div class=\"page-logo\">\r\n      <a class=\"navbar-brand mr-1\" [routerLink]=\"['../dashboard']\"><img src=\"/assets/images/logo.png\" width=\"249\" height=\"51\"/></a>\r\n    </div>\r\n\r\n    <div class=\"page-menu\">\r\n      <app-navigation></app-navigation>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar.navbar-expand {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  transition: all 0.5s;\n  z-index: 997;\n  background: #fff;\n  box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);\n  display: flex;\n  justify-content: space-between !important;\n  margin-bottom: 10px; }\n  .navbar.navbar-expand .page-menu {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixRQUFPO0VBQ1AsT0FBTTtFQUNOLFNBQVE7RUFDUixxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLGlCQUFnQjtFQUVoQixpRUFBZ0U7RUFFaEUsY0FBYTtFQUNiLDBDQUF5QztFQUN6QyxvQkFBbUIsRUFNcEI7RUFuQkQ7SUFpQkksYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIubmF2YmFyLWV4cGFuZHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgei1pbmRleDogOTk3O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy90cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBib3gtc2hhZG93OiAtMjEuMjEzcHggMjEuMjEzcHggMzBweCAwcHggcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjMpO1xyXG4gIC8vXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHJcbiAgLnBhZ2UtbWVudXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav navigation-bar\">\r\n\r\n  <li class=\"nav-item dropdown\" *ngIf=\"currentUser != null && currentUser.role.roleName == USER_ROLE.SHOP\">\r\n    <a class=\"nav-link dropdown-toggle\" id=\"user-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(userMode)\" [attr.aria-expanded]=\"currentMode == userMode\" aria-controls=\"collapseExample\">\r\n      <i class=\"fas fa-users-cog\"></i>\r\n      <span class=\"menu-item\">User Setting</span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"setting-dropdown\" [ngbCollapse]=\"currentMode != userMode\" (click)=\"updateCurrentMode('hide')\">\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/colorant']\">User Manager</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/colorant']\">Customer Manager</a>\r\n    </div>\r\n  </li>\r\n\r\n  <li class=\"nav-item dropdown\" *ngIf=\"currentUser != null && (currentUser.role.roleName == USER_ROLE.SHOP || currentUser.role.roleName == USER_ROLE.ADMIN)\">\r\n    <a class=\"nav-link dropdown-toggle\" id=\"setting-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(settingMode)\" [attr.aria-expanded]=\"currentMode == settingMode\" aria-controls=\"collapseExample\">\r\n      <i class=\"fas fa-cogs\"></i>\r\n      <span class=\"menu-item\">Setting</span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"setting-dropdown\" [ngbCollapse]=\"currentMode != settingMode\" (click)=\"updateCurrentMode('hide')\">\r\n      <!--<h6 class=\"dropdown-header\">System setting:</h6>-->\r\n\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/colorant']\">Colorant</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/base']\">Base</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/collection']\">Collection</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/product']\">Product</a>\r\n\r\n      <ng-container *ngIf=\"currentUser != null && currentUser.role.roleName == USER_ROLE.SHOP\">\r\n        <div class=\"dropdown-divider\"></div>\r\n        <h6 class=\"dropdown-header\">Machine Setting:</h6>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/machine']\">Machine</a>\r\n      </ng-container>\r\n    </div>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('formula')\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/formula']\">\r\n      <i class=\"fas fa-palette\"></i>\r\n      <span class=\"menu-item\">Formula</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/job-status']\">\r\n      <i class=\"fas fa-file-contract\"></i>\r\n      <span class=\"menu-item\">Job status</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('maintenance')\" *ngIf=\"currentUser != null && (currentUser.role.roleName == USER_ROLE.ADMIN && currentUser.role.roleName == USER_ROLE.MAINTENANCE)\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/maintenance']\">\r\n      <i class=\"fas fa-hammer\"></i>\r\n      <span class=\"menu-item\">Maintenance</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('question')\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/question']\">\r\n      <i class=\"fas fa-question-circle\"></i>\r\n      <span class=\"menu-item\">Help</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"logOut()\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"fas fa-sign-out-alt\"></i>\r\n      <span class=\"menu-item\">Logout</span></a>\r\n  </li>\r\n\r\n  <!--<li class=\"nav-item dropdown\">-->\r\n    <!--<a class=\"nav-link dropdown-toggle\" id=\"developer-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(devMode)\" [attr.aria-expanded]=\"currentMode == devMode\" aria-controls=\"collapseExample\">-->\r\n      <!--<i class=\"fab fa-dev\"></i>-->\r\n      <!--<span class=\"menu-item\">Developer</span>-->\r\n    <!--</a>-->\r\n\r\n    <!--<div class=\"dropdown-menu\" aria-labelledby=\"developer-dropdown\" [ngbCollapse]=\"currentMode != devMode\" (click)=\"updateCurrentMode('hide')\">-->\r\n      <!--<h6 class=\"dropdown-header\">Document :</h6>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/overview']\">Overview</a>-->\r\n      <!--<div class=\"dropdown-divider\"></div>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/language']\">Language</a>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/boostrap']\">Boostrap Template</a>-->\r\n    <!--</div>-->\r\n  <!--</li>-->\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-bar .nav-item {\n  margin-left: 25px;\n  color: #00417b;\n  text-align: center; }\n  .navigation-bar .nav-item > .nav-link {\n    color: #00417b; }\n  .navigation-bar .nav-item > .nav-link > i.fas {\n      font-size: 42px;\n      color: #00417b; }\n  .navigation-bar .nav-item.dropdown .dropdown-toggle::after {\n    display: none; }\n  .navigation-bar span.menu-item {\n  font-size: 14px !important;\n  white-space: nowrap;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9YOlxcd3NfbGVhcm5pbmdcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGF5b3V0XFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBa0IsRUFnQm5CO0VBcEJIO0lBT00sZUFBZSxFQU1oQjtFQWJMO01BVVEsZ0JBQWU7TUFDZixlQUFlLEVBQ2hCO0VBWlA7SUFpQlEsY0FBYSxFQUNmO0VBbEJOO0VBc0JJLDJCQUEwQjtFQUMxQixvQkFBbUI7RUFDbkIsZUFBYyxFQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tYmFye1xyXG4gIC5uYXYtaXRlbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6ICAjMDA0MTdiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgID4gLm5hdi1saW5re1xyXG4gICAgICBjb2xvcjogICMwMDQxN2I7XHJcblxyXG4gICAgICA+IGkuZmFze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBjb2xvcjogICMwMDQxN2I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRyb3Bkb3due1xyXG4gICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuLm1lbnUtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/constant */ "./src/app/models/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.USER_ROLE = _models_constant__WEBPACK_IMPORTED_MODULE_3__["USER_ROLE"];
        this.currentMode = '';
        this.userMode = 'user';
        this.settingMode = 'setting';
        this.devMode = 'dev';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userService.getLoginUser();
        if (this.currentUser == null) {
            this.router.navigate(["../login"]);
        }
    };
    NavigationComponent.prototype.updateCurrentMode = function (selectMode) {
        if (this.currentMode === selectMode) {
            this.currentMode = '';
        }
        else {
            this.currentMode = selectMode;
        }
    };
    NavigationComponent.prototype.logOut = function () {
        this.userService.logOut();
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/layout/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/forgotpassword/forgotpassword.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/login-page/forgotpassword/forgotpassword.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-login mx-auto mt-5\">\r\n    <div class=\"card-header\">Reset Password</div>\r\n    <div class=\"card-body\">\r\n      <div class=\"text-center mb-4\">\r\n        <h4>Forgot your password?</h4>\r\n        <p>Enter your email address and we will send you instructions on how to reset your password.</p>\r\n      </div>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter email address\" required=\"required\" autofocus=\"autofocus\">\r\n            <label for=\"inputEmail\">Enter email address</label>\r\n          </div>\r\n        </div>\r\n        <a class=\"btn btn-primary btn-block\" [routerLink]=\"['../login']\">Reset Password</a>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <a class=\"d-block small mt-3\" [routerLink]=\"['../register']\">Register an Account</a>\r\n        <a class=\"d-block small\" [routerLink]=\"['../login']\">Login Page</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/forgotpassword/forgotpassword.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/login-page/forgotpassword/forgotpassword.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login-page/forgotpassword/forgotpassword.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/login-page/forgotpassword/forgotpassword.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent() {
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/components/login-page/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.scss */ "./src/app/components/login-page/forgotpassword/forgotpassword.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login/login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/login-page/login/login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-login mx-auto mt-5\">\r\n    <div class=\"card-header\">Login</div>\r\n    <div class=\"card-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"text\" id=\"inputUserName\" [(ngModel)]=\"userName\" class=\"form-control\" placeholder=\"UserName\" required=\"required\" autofocus=\"autofocus\" [ngModelOptions]=\"{standalone: true}\">\r\n            <label for=\"inputUserName\">Email address</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\" [ngModelOptions]=\"{standalone: true}\">\r\n            <label for=\"inputPassword\">Password</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"checkbox\">\r\n            <label>\r\n              <input type=\"checkbox\" value=\"remember-me\">\r\n              Remember Password\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <a (click)=\"login()\"><button class=\"btn btn-primary btn-block\">Login</button></a>\r\n      </form>\r\n      <div class=\"text-center\">\r\n        <a class=\"d-block small mt-3\" [routerLink]=\"['../register']\">Register an Account</a>\r\n        <a class=\"d-block small\"      [routerLink]=\"['../forgot-password']\">Forgot Password?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/login/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/login-page/login/login.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-component {\n  width: 800px;\n  margin: 80px auto;\n  font-size: 20px; }\n  .login-component .login-container {\n    display: flex;\n    flex-direction: column; }\n  .login-component .login-container > * {\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpbi1wYWdlXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlLEVBVWhCO0VBYkQ7SUFNSSxjQUFhO0lBQ2IsdUJBQXNCLEVBS3ZCO0VBWkg7TUFVTSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLXBhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29tcG9uZW50e1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDgwcHggYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgPiAqe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login-page/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/login-page/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userName = null;
        this.password = null;
    }
    // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
    // @ViewChild(MatFormField) _matFormField: MatFormField;
    LoginComponent.prototype.ngOnInit = function () {
        // this._matFormField._control = this._control;
    };
    LoginComponent.prototype.login = function () {
        this.userService.login(this.userName, this.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login-page/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/register/register.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/login-page/register/register.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-register mx-auto mt-5\">\r\n    <div class=\"card-header\">Register an Account</div>\r\n    <div class=\"card-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-label-group\">\r\n                <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" required=\"required\" autofocus=\"autofocus\">\r\n                <label for=\"firstName\">First name</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-label-group\">\r\n                <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" required=\"required\">\r\n                <label for=\"lastName\">Last name</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label-group\">\r\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\">\r\n            <label for=\"inputEmail\">Email address</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-label-group\">\r\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\r\n                <label for=\"inputPassword\">Password</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-label-group\">\r\n                <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm password\" required=\"required\">\r\n                <label for=\"confirmPassword\">Confirm password</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"btn btn-primary btn-block\" [routerLink]=\"['../login']\">Register</a>\r\n      </form>\r\n\r\n      <div class=\"text-center\">\r\n        <a class=\"d-block small mt-3\" [routerLink]=\"['../login']\">Login Page</a>\r\n        <a class=\"d-block small\" [routerLink]=\"['../forgot-password']\">Forgot Password?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/register/register.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/login-page/register/register.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login-page/register/register.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/login-page/register/register.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/login-page/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/login-page/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/machinesetting/machinesetting.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/machine/machinesetting/machinesetting.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Machine Setting</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Colorant Machine {{ machine.name + '(' + machine.code + ')'}}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"machine-colourant-group\">\r\n          <div class=\"machine-background\">\r\n            <span class=\"machine-colourant-max-range\" [ngStyle]=\"{'height': '100%'}\"><span class=\"step-label\">{{maxQuantity}}</span></span>\r\n            <span class=\"machine-colourant-warning-range\" [ngStyle]=\"{'height': (minQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{minQuantity}}</span></span>\r\n            <span class=\"machine-colourant-min-range\" [ngStyle]=\"{'height': '0%'}\"><span class=\"step-label\">0</span></span>\r\n          </div>\r\n\r\n          <ng-container *ngFor=\"let machineColourant of listMachineColourant\">\r\n            <div class=\"machine-colourant-item\" (click)=\"selectMachineColourant(machineColourant.colourant.colourantId)\">\r\n              <span *ngIf=\"selectedMachineColourant != null && selectedMachineColourant.colourant.colourantId == machineColourant.colourant.colourantId\" class=\"selected-colourant-bgr\"></span>\r\n              <span class=\"machine-colourant-bgr\">\r\n                <span class=\"machine-colourant-current-range\" [ngStyle]=\"{'height': (machineColourant.quantity / maxQuantity) * 100 + '%', 'background-color': machineColourant.colourant.rbgHex, 'border': '1px solid #' + machineColourant.colourant.rbgHex}\"></span>\r\n              </span>\r\n              <span class=\"colourant-name\">{{machineColourant.colourant.colourantName}}</span>\r\n              <span class=\"colourant-code\" [ngStyle]=\"{color: machineColourant.colourant.rbgHex}\">{{machineColourant.colourant.colourantCode}}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"selectedMachineColourant != null\">\r\n  <pp-modal id=\"view-selected-colourant-machine-modal\" class=\"modal machine-colourant-single-item\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Canister Refill</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-selected-colourant-machine-modal')\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\r\n            <div class=\"machine-colourant-group\">\r\n              <div class=\"machine-background\">\r\n                <span class=\"machine-colourant-max-range\" [ngStyle]=\"{'height': '100%'}\"><span class=\"step-label\">{{maxQuantity}}</span></span>\r\n                <span class=\"machine-colourant-warning-range\" [ngStyle]=\"{'height': (minQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{minQuantity}}</span></span>\r\n                <span class=\"machine-colourant-min-range\" [ngStyle]=\"{'height': '0%'}\"><span class=\"step-label\">0</span></span>\r\n              </div>\r\n              <div class=\"machine-colourant-item\">\r\n                <span class=\"machine-colourant-bgr\">\r\n                  <span class=\"machine-colourant-update-range\"  [ngStyle]=\"{'height': ((selectedMachineColourant.quantity + addedAmount) / maxQuantity) * 100 + '%', 'background-color': selectedMachineColourant.colourant.rbgHex, 'border': '1px solid #' + selectedMachineColourant.colourant.rbgHex}\"></span>\r\n                  <span class=\"machine-colourant-current-range\" [ngStyle]=\"{'height': (selectedMachineColourant.quantity / maxQuantity) * 100 + '%', 'background-color': selectedMachineColourant.colourant.rbgHex, 'border': '1px solid #' + selectedMachineColourant.colourant.rbgHex}\"></span>\r\n                </span>\r\n                <span class=\"colourant-name\">{{selectedMachineColourant.colourant.colourantName}}</span>\r\n                <span class=\"colourant-code\" [ngStyle]=\"{color: selectedMachineColourant.colourant.rbgHex}\">{{selectedMachineColourant.colourant.colourantCode}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-10 col-md-10 col-sm-9 col-xs-9 \">\r\n            <div class=\"machine-colourant-info form-detail\">\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Amount:</label>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"number\" [(ngModel)]=\"addedAmount\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" (change)=\"updateAddedAmount('amount')\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\">ml</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Refill Factor:</label>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"number\" [(ngModel)]=\"addedAmountPercent\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" (change)=\"updateAddedAmount('percent')\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\">%</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">\r\n\r\n                </label>\r\n                <div class=\"col-md-8\">\r\n                  <button class=\"btn btn-dark\" (click)=\"fillByPercent(100);\">Fill to 100%</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Canister</label>\r\n                <div class=\"col-md-8\">\r\n                  {{selectedMachineColourant.colourant.colourantId}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Component</label>\r\n                <div class=\"col-md-8\">\r\n                  {{selectedMachineColourant.colourant.colourantCode}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Current</label>\r\n                <div class=\"col-md-8\">\r\n                  {{selectedMachineColourant.quantity / 1000}} L\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Maximum</label>\r\n                <div class=\"col-md-8\">\r\n                  {{maxQuantity / 1000}} L\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Minimum</label>\r\n                <div class=\"col-md-8\">\r\n                  {{minQuantity / 1000}} L\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                <label class=\"col-md-4 label-control\">Density</label>\r\n                <div class=\"col-md-8\">\r\n                  {{selectedMachineColourant.colourant.density}} kg/L\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row form-group\">\r\n                View Usage >>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateAndSaving('view-selected-colourant-machine-modal')\">Update</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('view-selected-colourant-machine-modal')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </pp-modal>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/machine/machinesetting/machinesetting.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/machine/machinesetting/machinesetting.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".machine-colourant-group {\n  margin: 30px 10px 50px 50px;\n  position: relative;\n  display: flex; }\n\n.machine-colourant-single-item .machine-colourant-group {\n  margin: 0px; }\n\n.machine-colourant-single-item .machine-colourant-item {\n  min-width: 60px; }\n\n.machine-colourant-single-item .machine-colourant-min-range .step-label,\n.machine-colourant-single-item .machine-colourant-warning-range .step-label,\n.machine-colourant-single-item .machine-colourant-max-range .step-label {\n  display: none; }\n\n.machine-background {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px; }\n\n.machine-background .machine-colourant-min-range,\n  .machine-background .machine-colourant-warning-range,\n  .machine-background .machine-colourant-max-range {\n    width: 100%;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    opacity: 0.5; }\n\n.machine-background .machine-colourant-min-range .step-label,\n    .machine-background .machine-colourant-warning-range .step-label,\n    .machine-background .machine-colourant-max-range .step-label {\n      position: absolute;\n      top: 0px;\n      left: -5px;\n      -webkit-transform: translate(-100%, -50%);\n      transform: translate(-100%, -50%); }\n\n.machine-background .machine-colourant-warning-range {\n    border-top: 1px dashed darkorange; }\n\n.machine-background .machine-colourant-warning-range .step-label {\n      color: darkorange; }\n\n.machine-background .machine-colourant-min-range {\n    border-top: 1px dashed red; }\n\n.machine-background .machine-colourant-min-range .step-label {\n      color: red; }\n\n.machine-background .machine-colourant-max-range {\n    border-top: 1px dashed green; }\n\n.machine-background .machine-colourant-max-range .step-label {\n      color: green; }\n\n.machine-colourant-item {\n  width: 6.25%;\n  display: inline-block;\n  height: 400px;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative; }\n\n.machine-colourant-item .machine-colourant-bgr {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 15px;\n    right: 15px;\n    border: 1px solid #333333; }\n\n.machine-colourant-item .machine-colourant-bgr:after {\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      right: 0px;\n      bottom: 0px;\n      background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(204, 204, 204, 0.5), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)); }\n\n.machine-colourant-item .machine-colourant-bgr .machine-colourant-update-range,\n    .machine-colourant-item .machine-colourant-bgr .machine-colourant-current-range {\n      position: absolute;\n      display: inline-block;\n      left: 1px;\n      right: 1px;\n      bottom: 0px; }\n\n.machine-colourant-item .machine-colourant-bgr .machine-colourant-update-range {\n      opacity: 0.5; }\n\n.machine-colourant-item .selected-colourant-bgr {\n    position: absolute;\n    outline: 2px solid #00417b;\n    top: -15px;\n    left: 0px;\n    right: 0px;\n    bottom: -15px; }\n\n.machine-colourant-item .colourant-name {\n    position: absolute;\n    width: 100%;\n    display: inline-block;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: left center;\n            transform-origin: left center;\n    left: 50%;\n    bottom: 0px;\n    white-space: nowrap; }\n\n.machine-colourant-item .colourant-code {\n    font-weight: bold;\n    font-size: 120%;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 45px);\n            transform: translate(-50%, 45px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL21hY2hpbmVzZXR0aW5nL1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWNoaW5lXFxtYWNoaW5lc2V0dGluZ1xcbWFjaGluZXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFHRDtFQUVJLFlBQVcsRUFDWjs7QUFISDtFQU1JLGdCQUFlLEVBQ2hCOztBQVBIOzs7RUFhTSxjQUFhLEVBQ2Q7O0FBSUw7RUFDRSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFXO0VBQ1gsV0FBVSxFQTRDWDs7QUFqREQ7OztJQVVJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFdBQVU7SUFDVixZQUFXO0lBQ1gsYUFBWSxFQVliOztBQTNCSDs7O01Ba0JNLG1CQUFrQjtNQUNsQixTQUFRO01BQ1IsV0FBVTtNQUNWLDBDQUF5QztNQUl6QyxrQ0FBaUMsRUFDbEM7O0FBMUJMO0lBOEJJLGtDQUFpQyxFQUlsQzs7QUFsQ0g7TUFnQ00sa0JBQWlCLEVBQ2xCOztBQWpDTDtJQXFDSSwyQkFBMEIsRUFJM0I7O0FBekNIO01BdUNNLFdBQVUsRUFDWDs7QUF4Q0w7SUE0Q0ksNkJBQTRCLEVBSTdCOztBQWhESDtNQThDTSxhQUFZLEVBQ2I7O0FBSUw7RUFDRSxhQUF5QjtFQUN6QixzQkFBcUI7RUFDckIsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBK0RuQjs7QUFyRUQ7SUFTSSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVc7SUFDWCxXQUFVO0lBQ1YsWUFBVztJQUNYLDBCQUF5QixFQXlCMUI7O0FBdkNIO01BaUJNLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLFNBQVE7TUFDUixVQUFTO01BQ1QsV0FBVTtNQUNWLFlBQVc7TUFDWCxnSkFBb0osRUFDcko7O0FBekJMOztNQTZCTSxtQkFBa0I7TUFDbEIsc0JBQXFCO01BQ3JCLFVBQVM7TUFDVCxXQUFVO01BQ1YsWUFBVyxFQUNaOztBQWxDTDtNQXFDTSxhQUFZLEVBQ2I7O0FBdENMO0lBMENJLG1CQUFrQjtJQUNsQiwyQkFBMEI7SUFDMUIsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFVO0lBQ1YsY0FBYSxFQUNkOztBQWhESDtJQW1ESSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLHNCQUFxQjtJQUNyQixrQ0FBeUI7WUFBekIsMEJBQXlCO0lBQ3pCLHNDQUE2QjtZQUE3Qiw4QkFBNkI7SUFDN0IsVUFBUztJQUNULFlBQVc7SUFDWCxvQkFBbUIsRUFDcEI7O0FBM0RIO0lBOERJLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsVUFBUztJQUNULHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hY2hpbmUvbWFjaGluZXNldHRpbmcvbWFjaGluZXNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFjaGluZS1jb2xvdXJhbnQtZ3JvdXB7XHJcbiAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuLm1hY2hpbmUtY29sb3VyYW50LXNpbmdsZS1pdGVte1xyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1ncm91cHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LWl0ZW17XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAubWFjaGluZS1jb2xvdXJhbnQtbWluLXJhbmdlLFxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC13YXJuaW5nLXJhbmdlLFxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1tYXgtcmFuZ2V7XHJcbiAgICAuc3RlcC1sYWJlbHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWNoaW5lLWJhY2tncm91bmR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMHB4O1xyXG5cclxuICAubWFjaGluZS1jb2xvdXJhbnQtbWluLXJhbmdlLFxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC13YXJuaW5nLXJhbmdlLFxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1tYXgtcmFuZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAuc3RlcC1sYWJlbHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogLTVweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC13YXJuaW5nLXJhbmdle1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCBkYXJrb3JhbmdlO1xyXG4gICAgLnN0ZXAtbGFiZWx7XHJcbiAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LW1pbi1yYW5nZXtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgcmVkO1xyXG4gICAgLnN0ZXAtbGFiZWx7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFjaGluZS1jb2xvdXJhbnQtbWF4LXJhbmdle1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCBncmVlbjtcclxuICAgIC5zdGVwLWxhYmVse1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFjaGluZS1jb2xvdXJhbnQtaXRlbXtcclxuICB3aWR0aDogcGVyY2VudGFnZSgxIC8gMTYpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1iZ3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuXHJcbiAgICAmOmFmdGVye1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApLCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSksICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hY2hpbmUtY29sb3VyYW50LXVwZGF0ZS1yYW5nZSxcclxuICAgIC5tYWNoaW5lLWNvbG91cmFudC1jdXJyZW50LXJhbmdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGxlZnQ6IDFweDtcclxuICAgICAgcmlnaHQ6IDFweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hY2hpbmUtY29sb3VyYW50LXVwZGF0ZS1yYW5nZXtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkLWNvbG91cmFudC1iZ3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzAwNDE3YjtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICB9XHJcblxyXG4gIC5jb2xvdXJhbnQtbmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLmNvbG91cmFudC1jb2RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA0NXB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/machine/machinesetting/machinesetting.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/machine/machinesetting/machinesetting.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MachineSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineSettingComponent", function() { return MachineSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/colorant/colorant.service */ "./src/app/services/colorant/colorant.service.ts");
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MachineSettingComponent = /** @class */ (function () {
    function MachineSettingComponent(modalService, machineService, colourantService) {
        this.modalService = modalService;
        this.machineService = machineService;
        this.colourantService = colourantService;
        this.selectedMachineColourant = null;
    }
    MachineSettingComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    MachineSettingComponent.prototype.fetchData = function () {
        var _this = this;
        this.machine = this.machineService.getCurrentMachine();
        this.minQuantity = this.machine.minQuantity;
        this.maxQuantity = this.machine.maxQuantity;
        this.machineService.fetchDataFromServer().subscribe(function (datas) {
            _this.processListColourantData(datas);
        });
        function getRandomBetweenTwoNumber(begin, end) {
            return begin + Math.ceil(Math.random() * (end - begin));
        }
    };
    MachineSettingComponent.prototype.processListColourantData = function (datas) {
        this.listMachineColourant = datas;
        this.selectedMachineColourant = null;
        this.addedAmount = 0;
        this.addedAmountPercent = 0;
    };
    MachineSettingComponent.prototype.selectMachineColourant = function (colourantId) {
        var _this = this;
        var listFilter = this.listMachineColourant.filter(function (item) {
            return item.colourant.colourantId === colourantId;
        });
        this.selectedMachineColourant = listFilter.length > 0 ? listFilter[0] : null;
        this.addedAmount = 0;
        this.addedAmountPercent = 0;
        setTimeout(function () {
            _this.openModal('view-selected-colourant-machine-modal');
        }, 0);
    };
    MachineSettingComponent.prototype.updateAddedAmount = function (type) {
        if (type === 'amount') {
            this.addedAmountPercent = this.addedAmount * 100 / this.maxQuantity;
        }
        else if (type === 'percent') {
            this.addedAmount = (this.addedAmountPercent - (this.selectedMachineColourant.quantity / this.maxQuantity)) * this.maxQuantity;
        }
    };
    MachineSettingComponent.prototype.fillByPercent = function (percent) {
        if (this.selectedMachineColourant != null) {
            var currentAmount = this.selectedMachineColourant.quantity;
            var currentPercent = currentAmount * 100 / this.maxQuantity;
            var remainPercent = percent - currentPercent;
            this.addedAmount = remainPercent / 100 * this.maxQuantity;
            this.addedAmountPercent = remainPercent;
        }
    };
    MachineSettingComponent.prototype.updateAndSaving = function (id) {
        var _this = this;
        this.machineService.updateColourantMachineData(this.machine, this.selectedMachineColourant.colourant, this.addedAmount)
            .subscribe(function (datas) {
            _this.processListColourantData(datas);
            _this.modalService.close(id);
        });
    };
    MachineSettingComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    MachineSettingComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    MachineSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machinesetting',
            template: __webpack_require__(/*! ./machinesetting.component.html */ "./src/app/components/machine/machinesetting/machinesetting.component.html"),
            styles: [__webpack_require__(/*! ./machinesetting.component.scss */ "./src/app/components/machine/machinesetting/machinesetting.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"],
            _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_2__["ColourantService"]])
    ], MachineSettingComponent);
    return MachineSettingComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/base/base.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/setting/base/base.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Base Manager</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Base type\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n            <tr>\r\n              <th mat-sort-header=\"baseCode\">Base Code</th>\r\n              <th mat-sort-header=\"baseName\">Base Name</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let base of listBases\">\r\n              <td>{{base.baseCode}}</td>\r\n              <td>{{base.baseName}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/base/base.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/setting/base/base.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9iYXNlL2Jhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/base/base.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/base/base.component.ts ***!
  \***********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/base/base.service */ "./src/app/services/base/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseComponent = /** @class */ (function () {
    function BaseComponent(baseService) {
        this.baseService = baseService;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.fletchData();
    };
    BaseComponent.prototype.sortData = function (sort) {
        this.listBases = this.listBases.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            return compare(a.baseCode, b.baseCode, isAsc);
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    BaseComponent.prototype.fletchData = function () {
        var _this = this;
        this.baseService.getListBaseFromServer().subscribe(function (data) {
            _this.listBases = data;
        });
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/components/setting/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.scss */ "./src/app/components/setting/base/base.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/collection/collection.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/collection/collection.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Collection\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n            <tr>\r\n              <th mat-sort-header=\"collectionName\">Collection Name</th>\r\n              <th mat-sort-header=\"description\">Description</th>\r\n              <th mat-sort-header=\"createdDate\">Created Date</th>\r\n              <th mat-sort-header=\"createBy\">Created By</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of listItems\">\r\n              <td>{{item.collectionName}}</td>\r\n              <td>{{item.description}}</td>\r\n              <td>{{item.createdDate |  date: 'dd/MM/yyyy'}}</td>\r\n              <td>\r\n                <p *ngIf=\"item.createBy == null\">System</p>\r\n                <p *ngIf=\"item.createBy != null\">Me</p>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/collection/collection.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/collection/collection.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/collection/collection.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/setting/collection/collection.component.ts ***!
  \***********************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(collectionService) {
        this.collectionService = collectionService;
        this.collectionCode = null;
        this.collectionName = null;
        this.sortedData = null;
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    CollectionComponent.prototype.sortData = function (sort) {
        var data = this.listItems.slice();
        // if (!sort.active || sort.direction === '') {
        //   this.sortedData = data;
        //   return;
        // }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'code':
                    return compare(a.collectionCode, b.collectionCode, isAsc);
                case 'collectionName':
                    return compare(a.collectionName, b.collectionName, isAsc);
                default:
                    return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    CollectionComponent.prototype.fetchData = function () {
        var _this = this;
        this.collectionService.getListItems().subscribe(function (data) {
            _this.listItems = data;
        });
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/setting/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.scss */ "./src/app/components/setting/collection/collection.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/colorant/colorant.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/colorant/colorant.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Colorant Manager</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card filter-card\">\r\n      <div class=\"card-header\">\r\n        Filter\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n            <input placeholder=\"Code\" [(ngModel)]=\"code\">\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-footer\">\r\n        <!--<mat-card-actions>-->\r\n          <button mat-raised-button color=\"primary\" (click)=\"filter()\">Search</button>\r\n          <button mat-button class=\"btn btn-default\" (click)=\"resetFilter()\">Reset</button>\r\n        <!--</mat-card-actions>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" ng-init=\"testInput='value'\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Colorant\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n            <tr>\r\n              <th mat-sort-header=\"code\">Colourant Code</th>\r\n              <th mat-sort-header=\"name\">Colourant Name</th>\r\n              <th mat-sort-header=\"density\">Density</th>\r\n              <th mat-sort-header=\"redV\">Price Per Unit</th>\r\n              <th mat-sort-header=\"greenV\">Surcharge</th>\r\n              <th mat-sort-header=\"blueV\">Blue</th>\r\n              <th mat-sort-header=\"color\">kind</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let colorant of sortedData\">\r\n              <td>{{colorant.colourantCode}}</td>\r\n              <td>{{colorant.colourantName}}</td>\r\n              <td>{{colorant.density}}</td>\r\n              <td>{{colorant.pricePerUnit}}</td>\r\n              <td>{{colorant.surcharge}}</td>\r\n              <td><span [ngStyle]=\"{'background': colorant.rbgHex, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span></td>\r\n              <td>{{colorant.kind}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/colorant/colorant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/colorant/colorant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nL2NvbG9yYW50L1g6XFx3c19sZWFybmluZ1xcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZXR0aW5nXFxjb2xvcmFudFxcY29sb3JhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmcvY29sb3JhbnQvY29sb3JhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/setting/colorant/colorant.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/colorant/colorant.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorantComponent", function() { return ColorantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/colorant/colorant.service */ "./src/app/services/colorant/colorant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorantComponent = /** @class */ (function () {
    function ColorantComponent(colourantService) {
        this.colourantService = colourantService;
        this.code = null;
        this.name = null;
    }
    ColorantComponent.prototype.ngOnInit = function () {
        this.filter(this.code, this.name);
    };
    ColorantComponent.prototype.filter = function (code, name) {
        var _this = this;
        this.colourantService.getListItems().subscribe(function (data) {
            _this.sortedData = data;
        });
    };
    ColorantComponent.prototype.resetFilter = function () {
        this.code = null;
        this.name = null;
    };
    ColorantComponent.prototype.sortData = function (sort) {
        this.filter(null, null);
    };
    ColorantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colorant',
            template: __webpack_require__(/*! ./colorant.component.html */ "./src/app/components/setting/colorant/colorant.component.html"),
            styles: [__webpack_require__(/*! ./colorant.component.scss */ "./src/app/components/setting/colorant/colorant.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_1__["ColourantService"]])
    ], ColorantComponent);
    return ColorantComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/product/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/product/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Product Manager</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Product\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\">\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Product Code</th>\r\n              <th>Product Name</th>\r\n              <th>Created Date</th>\r\n              <th>Created By</th>\r\n            </tr>\r\n\r\n            <ng-container *ngFor=\"let item of sortedData let i=index\">\r\n              <tr>\r\n                <td>\r\n                  <span *ngIf=\"currentProductViewer == item.productId\" (click)=\"showProductDetail(-1)\"><i class=\"fas fa-minus\"></i></span>\r\n                  <span *ngIf=\"currentProductViewer != item.productId\" (click)=\"showProductDetail(item.productId)\"><i class=\"fas fa-plus\"></i></span>\r\n                </td>\r\n                <td>{{item.productCode}}</td>\r\n                <td>{{item.productName}}</td>\r\n                <td>{{item.createdDate | date : 'dd/MM/yyyy'}}</td>\r\n                <td>\r\n                  <span *ngIf=\"item.createBy == null\">\r\n                    System\r\n                  </span>\r\n\r\n                  <span *ngIf=\"item.createBy != null\">\r\n                    Me\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr *ngIf=\"currentProductViewer == item.productId\" selected class=\"product-detail-row\">\r\n                <td></td>\r\n                <td colspan=\"4\">\r\n                  <app-viewdetail [productId]=\"item.productId\"></app-viewdetail>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/setting/product/product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/product/product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/product/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/setting/product/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product/product.service */ "./src/app/services/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.productCode = null;
        this.productName = null;
        this.listItems = null;
        this.sortedData = null;
        this.currentProductViewer = null;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.fletchData();
    };
    ProductComponent.prototype.filter = function () {
        // const filterProduct = function (filter) {
        //   return function (item: ProductDTO): boolean {
        //     return (filter.productCode === null || filter.productCode === '' || item.productCode === filter.productCode)
        //       && (filter.productName === null || filter.productName === '' || item.productName === filter.productName);
        //   };
        // };
        //
        // this.sortedData = this.listItems.filter(filterProduct({code: this.productCode, name: this.productName}));
    };
    ProductComponent.prototype.sortData = function (sort) {
        return this.productService.sortData(sort);
    };
    ProductComponent.prototype.fletchData = function () {
        var _this = this;
        this.productService.getListItems().subscribe(function (data) {
            _this.sortedData = data;
        });
    };
    ProductComponent.prototype.showProductDetail = function (productId) {
        this.currentProductViewer = productId;
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/setting/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/components/setting/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/directions/boostrap/modal/modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/directions/boostrap/modal/modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-modal modal-dialog modal-dialog-centered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"modal-backdrop fade show\"></div>\r\n"

/***/ }),

/***/ "./src/app/directions/boostrap/modal/modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/directions/boostrap/modal/modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGlvbnMvYm9vc3RyYXAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/directions/boostrap/modal/modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/directions/boostrap/modal/modal.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'pp-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pp-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/directions/boostrap/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/directions/boostrap/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/directions/product/viewdetail/viewdetail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/directions/product/viewdetail/viewdetail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table table-borderless\">\r\n    <thead>\r\n    <tr>\r\n      <th>Base</th>\r\n      <th>Density</th>\r\n      <th>Color</th>\r\n    </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let item of listProductBaseCan let i=index\">\r\n      <td>{{item.base.baseName}}</td>\r\n      <td>{{item.density}}</td>\r\n      <td>\r\n        <span [ngStyle]=\"{'background': item.rbgHex, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/directions/product/viewdetail/viewdetail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/directions/product/viewdetail/viewdetail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGlvbnMvcHJvZHVjdC92aWV3ZGV0YWlsL3ZpZXdkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/directions/product/viewdetail/viewdetail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/directions/product/viewdetail/viewdetail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailComponent", function() { return ViewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product/product.service */ "./src/app/services/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewDetailComponent = /** @class */ (function () {
    function ViewDetailComponent(productService) {
        this.productService = productService;
        this.listProductBaseCan = null;
        // this.element = el.nativeElement;
    }
    ViewDetailComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    ViewDetailComponent.prototype.fetchData = function () {
        var _this = this;
        this.productService.viewProductDetail(this.productId).subscribe(function (data) {
            _this.listProductBaseCan = data;
            console.log(_this.listProductBaseCan);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ViewDetailComponent.prototype, "productId", void 0);
    ViewDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewdetail',
            template: __webpack_require__(/*! ./viewdetail.component.html */ "./src/app/directions/product/viewdetail/viewdetail.component.html"),
            styles: [__webpack_require__(/*! ./viewdetail.component.scss */ "./src/app/directions/product/viewdetail/viewdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ViewDetailComponent);
    return ViewDetailComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // Material
                // MatAutocompleteModule,
                // MatButtonModule,
                // MatButtonToggleModule,
                // MatCardModule,
                // MatCheckboxModule,
                // MatChipsModule,
                // MatDatepickerModule,
                // MatDialogModule,
                // MatExpansionModule,
                // MatGridListModule,
                // MatIconModule,
                // MatInputModule,
                // MatListModule,
                // MatMenuModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                // MatSelectModule,
                // MatSidenavModule,
                // MatSlideToggleModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                // MatSnackBarModule,
                // MatStepperModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            ],
            exports: [
                // Material
                // MatAutocompleteModule,
                // MatButtonModule,
                // MatButtonToggleModule,
                // MatCardModule,
                // MatCheckboxModule,
                // MatChipsModule,
                // MatDatepickerModule,
                // MatDialogModule,
                // MatExpansionModule,
                // MatGridListModule,
                // MatIconModule,
                // MatInputModule,
                // MatListModule,
                // MatMenuModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                // MatSelectModule,
                // MatSidenavModule,
                // MatSlideToggleModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                // MatSnackBarModule,
                // MatStepperModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/base.ts":
/*!********************************!*\
  !*** ./src/app/models/base.ts ***!
  \********************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    Object.defineProperty(BaseModel.prototype, "baseId", {
        get: function () {
            return this._baseId;
        },
        set: function (value) {
            this._baseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "baseCode", {
        get: function () {
            return this._baseCode;
        },
        set: function (value) {
            this._baseCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "baseName", {
        get: function () {
            return this._baseName;
        },
        set: function (value) {
            this._baseName = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseModel;
}());



/***/ }),

/***/ "./src/app/models/collection.ts":
/*!**************************************!*\
  !*** ./src/app/models/collection.ts ***!
  \**************************************/
/*! exports provided: CollectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModel", function() { return CollectionModel; });
var CollectionModel = /** @class */ (function () {
    function CollectionModel() {
    }
    Object.defineProperty(CollectionModel.prototype, "collectionId", {
        get: function () {
            return this._collectionId;
        },
        set: function (value) {
            this._collectionId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionModel.prototype, "collectionName", {
        get: function () {
            return this._collectionName;
        },
        set: function (value) {
            this._collectionName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionModel.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        set: function (value) {
            this._createdDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionModel.prototype, "createBy", {
        get: function () {
            return this._createBy;
        },
        set: function (value) {
            this._createBy = value;
        },
        enumerable: true,
        configurable: true
    });
    return CollectionModel;
}());



/***/ }),

/***/ "./src/app/models/colorant.ts":
/*!************************************!*\
  !*** ./src/app/models/colorant.ts ***!
  \************************************/
/*! exports provided: ColorantModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorantModel", function() { return ColorantModel; });
var ColorantModel = /** @class */ (function () {
    function ColorantModel() {
    }
    Object.defineProperty(ColorantModel.prototype, "colourantId", {
        get: function () {
            return this._colourantId;
        },
        set: function (value) {
            this._colourantId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "colourantCode", {
        get: function () {
            return this._colourantCode;
        },
        set: function (value) {
            this._colourantCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "colourantName", {
        get: function () {
            return this._colourantName;
        },
        set: function (value) {
            this._colourantName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "density", {
        get: function () {
            return this._density;
        },
        set: function (value) {
            this._density = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "pricePerUnit", {
        get: function () {
            return this._pricePerUnit;
        },
        set: function (value) {
            this._pricePerUnit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "surcharge", {
        get: function () {
            return this._surcharge;
        },
        set: function (value) {
            this._surcharge = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "rbgHex", {
        get: function () {
            return this._rbgHex;
        },
        set: function (value) {
            this._rbgHex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorantModel.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: true,
        configurable: true
    });
    return ColorantModel;
}());



/***/ }),

/***/ "./src/app/models/constant.ts":
/*!************************************!*\
  !*** ./src/app/models/constant.ts ***!
  \************************************/
/*! exports provided: USER_ROLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
var USER_ROLE = {
    'ADMIN': 'ADMIN',
    'SHOP': 'SHOP',
    'OPERATOR': 'OPERATOR',
    'MAINTENANCE': 'MAINTENANCE'
};


/***/ }),

/***/ "./src/app/models/formula.ts":
/*!***********************************!*\
  !*** ./src/app/models/formula.ts ***!
  \***********************************/
/*! exports provided: FormulaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaModel", function() { return FormulaModel; });
var FormulaModel = /** @class */ (function () {
    function FormulaModel() {
    }
    Object.defineProperty(FormulaModel.prototype, "formulaId", {
        get: function () {
            return this._formulaId;
        },
        set: function (value) {
            this._formulaId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "formulaCode", {
        get: function () {
            return this._formulaCode;
        },
        set: function (value) {
            this._formulaCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "formulaName", {
        get: function () {
            return this._formulaName;
        },
        set: function (value) {
            this._formulaName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        set: function (value) {
            this._collection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        set: function (value) {
            this._createdDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "createBy", {
        get: function () {
            return this._createBy;
        },
        set: function (value) {
            this._createBy = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaModel;
}());



/***/ }),

/***/ "./src/app/models/formula_product_base.ts":
/*!************************************************!*\
  !*** ./src/app/models/formula_product_base.ts ***!
  \************************************************/
/*! exports provided: FormulaProductBaseModel, FormulaColourantModel, ProductBaseCanModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaProductBaseModel", function() { return FormulaProductBaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaColourantModel", function() { return FormulaColourantModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBaseCanModel", function() { return ProductBaseCanModel; });
var FormulaProductBaseModel = /** @class */ (function () {
    function FormulaProductBaseModel() {
    }
    Object.defineProperty(FormulaProductBaseModel.prototype, "formulaProductBaseId", {
        get: function () {
            return this._formulaProductBaseId;
        },
        set: function (value) {
            this._formulaProductBaseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaProductBaseModel.prototype, "formula", {
        get: function () {
            return this._formula;
        },
        set: function (value) {
            this._formula = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaProductBaseModel.prototype, "productBase", {
        get: function () {
            return this._productBase;
        },
        set: function (value) {
            this._productBase = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaProductBaseModel;
}());

var FormulaColourantModel = /** @class */ (function () {
    function FormulaColourantModel() {
    }
    Object.defineProperty(FormulaColourantModel.prototype, "formulaColourantId", {
        get: function () {
            return this._formulaColourantId;
        },
        set: function (value) {
            this._formulaColourantId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaColourantModel.prototype, "formula", {
        get: function () {
            return this._formula;
        },
        set: function (value) {
            this._formula = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaColourantModel.prototype, "colourant", {
        get: function () {
            return this._colourant;
        },
        set: function (value) {
            this._colourant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaColourantModel.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaColourantModel;
}());

var ProductBaseCanModel = /** @class */ (function () {
    function ProductBaseCanModel() {
    }
    Object.defineProperty(ProductBaseCanModel.prototype, "productBaseCanId", {
        get: function () {
            return this._productBaseCanId;
        },
        set: function (value) {
            this._productBaseCanId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "productBase", {
        get: function () {
            return this._productBase;
        },
        set: function (value) {
            this._productBase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "can", {
        get: function () {
            return this._can;
        },
        set: function (value) {
            this._can = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (value) {
            this._unit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "pricePerCan", {
        get: function () {
            return this._pricePerCan;
        },
        set: function (value) {
            this._pricePerCan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "barCode", {
        get: function () {
            return this._barCode;
        },
        set: function (value) {
            this._barCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseCanModel.prototype, "percentage", {
        get: function () {
            return this._percentage;
        },
        set: function (value) {
            this._percentage = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductBaseCanModel;
}());



/***/ }),

/***/ "./src/app/models/job.status.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/job.status.model.ts ***!
  \********************************************/
/*! exports provided: DispenseDataModel, DispenseStepDataModel, MAP_TASK_STATE, TaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseDataModel", function() { return DispenseDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseStepDataModel", function() { return DispenseStepDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_TASK_STATE", function() { return MAP_TASK_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
var DispenseDataModel = /** @class */ (function () {
    function DispenseDataModel(formulaProductBase, productBaseCan, canSize, numberOfCan) {
        this._formulaProductBase = formulaProductBase;
        this._productBaseCan = productBaseCan;
        this._canSize = canSize;
        this._numberOfCan = numberOfCan;
    }
    Object.defineProperty(DispenseDataModel.prototype, "formulaProductBase", {
        get: function () {
            return this._formulaProductBase;
        },
        set: function (value) {
            this._formulaProductBase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseDataModel.prototype, "productBaseCan", {
        get: function () {
            return this._productBaseCan;
        },
        set: function (value) {
            this._productBaseCan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseDataModel.prototype, "canSize", {
        get: function () {
            return this._canSize;
        },
        set: function (value) {
            this._canSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseDataModel.prototype, "numberOfCan", {
        get: function () {
            return this._numberOfCan;
        },
        set: function (value) {
            this._numberOfCan = value;
        },
        enumerable: true,
        configurable: true
    });
    return DispenseDataModel;
}());

var DispenseStepDataModel = /** @class */ (function () {
    function DispenseStepDataModel(colorant, quantity) {
        this._colorant = colorant;
        this._quantity = quantity;
    }
    Object.defineProperty(DispenseStepDataModel.prototype, "colorant", {
        get: function () {
            return this._colorant;
        },
        set: function (value) {
            this._colorant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseStepDataModel.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    return DispenseStepDataModel;
}());

var MAP_TASK_STATE = {
    SLEEP: 'SLEEP',
    IN_PROGRESS: 'IN-PROGRESS',
    FINISHED: 'FINISHED'
};
var TaskModel = /** @class */ (function () {
    function TaskModel() {
    }
    TaskModel.prototype.ngOnInit = function () {
    };
    TaskModel.prototype.updateState = function (type, listTask, taskData, callBackFunction) {
        this._type = type;
        this._state = MAP_TASK_STATE.SLEEP;
        this._process = 0;
        this._totalProcess = 0;
        this._childrenTask = listTask;
        this._taskData = taskData;
        this._callBackFunction = callBackFunction;
        if (this._type === 'pumping' && this._taskData != null && this._taskData instanceof DispenseStepDataModel) {
            this._totalProcess = this._taskData.quantity / 2 * 1000; // 1 s thi bom duoc 2 ml son tinh chat
        }
        else if (this._type === 'prepare') {
            this._totalProcess = 2000; // prepare by 2000ms
        }
        else if (this._type === 'finished') {
            this._totalProcess = 2000;
        }
        else {
            this._totalProcess = 0;
        }
        if (listTask != null) {
            var index = 0;
            for (var _i = 0, listTask_1 = listTask; _i < listTask_1.length; _i++) {
                var childTask = listTask_1[_i];
                childTask._taskId = index;
                childTask._parentTask = this;
                this._totalProcess += childTask._totalProcess;
                index++;
            }
        }
        else {
            this._totalProcess = this._totalProcess;
        }
    };
    TaskModel.prototype.run = function (jobStatusService) {
        var _this = this;
        this.jobStatusService = jobStatusService;
        this._state = MAP_TASK_STATE.IN_PROGRESS;
        this._startTime = new Date();
        if (this._type === 'Dispense') {
            this.jobStatusService.record('Dispense', this._taskData);
        }
        if (this._childrenTask != null && this._childrenTask.length > 0) {
            this._childrenTask[0].run(jobStatusService);
        }
        else { // fake event should be call after task done.
            var waitTime = this.totalProcess;
            setTimeout(function () {
                _this.notify('done', _this._taskData);
            }, waitTime);
        }
    };
    TaskModel.prototype.notify = function (type, taskData) {
        if (type === 'done') {
            // update data for pumping
            if ('pumping' === this._type && this._taskData != null && this._taskData instanceof DispenseStepDataModel) {
                this.jobStatusService.record('pumping', this._taskData);
                this._taskData.quantity = 0;
            }
            // update data for prepare
            if (this._callBackFunction != null && this._callBackFunction !== undefined) {
                this._callBackFunction();
            }
            this._state = MAP_TASK_STATE.FINISHED;
            if (this._parentTask != null) {
                this._parentTask.notify('next-step', this);
            }
            if (this._callBackFunction != null && this._callBackFunction !== undefined) {
                this._callBackFunction();
            }
        }
        else if (type === 'next-step' && taskData != null && taskData instanceof TaskModel) {
            if (this.jobStatusService != null && this.jobStatusService !== undefined) {
                this.jobStatusService.publishTask(this.parentTask != null ? this.parentTask : this);
            }
            this.goToNextStep(taskData);
        }
    };
    TaskModel.prototype.goToNextStep = function (taskData) {
        this._process += taskData != null ? taskData.totalProcess : this._totalProcess;
        if (this._childrenTask != null && this._childrenTask.length > 0 && taskData._taskId + 1 < this._childrenTask.length) {
            var nextStep = this._childrenTask[taskData._taskId + 1];
            nextStep.run(this.jobStatusService);
        }
        else {
            this._state = MAP_TASK_STATE.FINISHED;
            this.jobStatusService.record('finished', this.taskData);
        }
    };
    Object.defineProperty(TaskModel.prototype, "taskId", {
        get: function () {
            return this._taskId;
        },
        set: function (value) {
            this._taskId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "process", {
        get: function () {
            return this._process;
        },
        set: function (value) {
            this._process = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "totalProcess", {
        get: function () {
            return this._totalProcess;
        },
        set: function (value) {
            this._totalProcess = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "taskData", {
        get: function () {
            return this._taskData;
        },
        set: function (value) {
            this._taskData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "childrenTask", {
        get: function () {
            return this._childrenTask;
        },
        set: function (value) {
            this._childrenTask = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "parentTask", {
        get: function () {
            return this._parentTask;
        },
        set: function (value) {
            this._parentTask = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskModel.prototype, "callBackFunction", {
        get: function () {
            return this._callBackFunction;
        },
        set: function (value) {
            this._callBackFunction = value;
        },
        enumerable: true,
        configurable: true
    });
    return TaskModel;
}());



/***/ }),

/***/ "./src/app/models/pagination.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/pagination.model.ts ***!
  \********************************************/
/*! exports provided: PagenationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenationModel", function() { return PagenationModel; });
var PagenationModel = /** @class */ (function () {
    function PagenationModel(listItems, totalItem, pageIndex, maxPageItem) {
        this._listItems = listItems;
        this._totalItem = totalItem;
        this._pageIndex = pageIndex;
        this._maxPageItem = maxPageItem;
    }
    Object.defineProperty(PagenationModel.prototype, "listItems", {
        get: function () {
            return this._listItems;
        },
        set: function (value) {
            this._listItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationModel.prototype, "totalItem", {
        get: function () {
            return this._totalItem;
        },
        set: function (value) {
            this._totalItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationModel.prototype, "pageIndex", {
        get: function () {
            return this._pageIndex;
        },
        set: function (value) {
            this._pageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationModel.prototype, "maxPageItem", {
        get: function () {
            return this._maxPageItem;
        },
        set: function (value) {
            this._maxPageItem = value;
        },
        enumerable: true,
        configurable: true
    });
    return PagenationModel;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    Object.defineProperty(ProductModel.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "productCode", {
        get: function () {
            return this._productCode;
        },
        set: function (value) {
            this._productCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (value) {
            this._productName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        set: function (value) {
            this._createdDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "createBy", {
        get: function () {
            return this._createBy;
        },
        set: function (value) {
            this._createBy = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductModel;
}());



/***/ }),

/***/ "./src/app/models/product_base.ts":
/*!****************************************!*\
  !*** ./src/app/models/product_base.ts ***!
  \****************************************/
/*! exports provided: ProductBaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBaseModel", function() { return ProductBaseModel; });
var ProductBaseModel = /** @class */ (function () {
    function ProductBaseModel() {
    }
    Object.defineProperty(ProductBaseModel.prototype, "productBaseId", {
        get: function () {
            return this._productBaseId;
        },
        set: function (value) {
            this._productBaseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseModel.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseModel.prototype, "base", {
        get: function () {
            return this._base;
        },
        set: function (value) {
            this._base = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseModel.prototype, "rbgHex", {
        get: function () {
            return this._rbgHex;
        },
        set: function (value) {
            this._rbgHex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductBaseModel.prototype, "density", {
        get: function () {
            return this._density;
        },
        set: function (value) {
            this._density = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductBaseModel;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: MachineModel, RoleModel, UserModel, MachineColourantModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineModel", function() { return MachineModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineColourantModel", function() { return MachineColourantModel; });
var MachineModel = /** @class */ (function () {
    function MachineModel() {
    }
    Object.defineProperty(MachineModel.prototype, "machineId", {
        get: function () {
            return this._machineId;
        },
        set: function (value) {
            this._machineId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineModel.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineModel.prototype, "minQuantity", {
        get: function () {
            return this._minQuantity;
        },
        set: function (value) {
            this._minQuantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineModel.prototype, "maxQuantity", {
        get: function () {
            return this._maxQuantity;
        },
        set: function (value) {
            this._maxQuantity = value;
        },
        enumerable: true,
        configurable: true
    });
    return MachineModel;
}());

var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    Object.defineProperty(RoleModel.prototype, "roleId", {
        get: function () {
            return this._roleId;
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleModel.prototype, "roleName", {
        get: function () {
            return this._roleName;
        },
        set: function (value) {
            this._roleName = value;
        },
        enumerable: true,
        configurable: true
    });
    return RoleModel;
}());

var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    Object.defineProperty(UserModel.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());

var MachineColourantModel = /** @class */ (function () {
    function MachineColourantModel() {
    }
    Object.defineProperty(MachineColourantModel.prototype, "machineColourantId", {
        get: function () {
            return this._machineColourantId;
        },
        set: function (value) {
            this._machineColourantId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineColourantModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineColourantModel.prototype, "colourant", {
        get: function () {
            return this._colourant;
        },
        set: function (value) {
            this._colourant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineColourantModel.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    return MachineColourantModel;
}());



/***/ }),

/***/ "./src/app/services/base/base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/base/base.service.ts ***!
  \***********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.getListBaseFromServer = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'base/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var listBases = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var base = data_1[_i];
                    listBases.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertBaseObject(base));
                }
            }
            return listBases;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/boostrap/modal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/boostrap/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/collection/collection.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/collection/collection.service.ts ***!
  \***********************************************************/
/*! exports provided: CollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionService", function() { return CollectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/collection */ "./src/app/models/collection.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionService = /** @class */ (function () {
    function CollectionService(http) {
        this.http = http;
    }
    CollectionService.prototype.getListItems = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].settings.serverendpoint + 'collection/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var collection = data_1[_i];
                    listItems.push(_this.convertCollectionToDTO(collection));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    CollectionService.prototype.convertCollectionToDTO = function (object) {
        var collection = new _models_collection__WEBPACK_IMPORTED_MODULE_4__["CollectionModel"]();
        collection.collectionId = object.collectionId;
        collection.collectionName = object.collectionName;
        collection.description = object.description;
        collection.createdDate = object.createdDate;
        collection.createBy = object.createBy;
        return collection;
    };
    CollectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], CollectionService);
    return CollectionService;
}());



/***/ }),

/***/ "./src/app/services/colorant/colorant.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/colorant/colorant.service.ts ***!
  \*******************************************************/
/*! exports provided: ColourantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourantService", function() { return ColourantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_colorant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/colorant */ "./src/app/models/colorant.ts");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColourantService = /** @class */ (function () {
    function ColourantService(http) {
        this.http = http;
    }
    ColourantService.prototype.search = function (code, name) {
        return this.getListItems();
        // return this.listItems.filter(filterColor({code: code, name: name}));
    };
    ColourantService.prototype.sortData = function (sort) {
        return this.getListItems();
    };
    ColourantService.prototype.getListItems = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].settings.serverendpoint + 'colourant/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listColourant = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var colorant = data_1[_i];
                    listColourant.push(_this.convertColourantToDTO(colorant));
                }
            }
            return listColourant;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    ColourantService.prototype.convertColourantToDTO = function (object) {
        var colourantModel = new _models_colorant__WEBPACK_IMPORTED_MODULE_3__["ColorantModel"]();
        colourantModel.colourantId = object.colourantId;
        colourantModel.colourantCode = object.colourantCode;
        colourantModel.colourantName = object.colourantName;
        colourantModel.density = object.density;
        colourantModel.pricePerUnit = object.pricePerUnit;
        colourantModel.surcharge = object.surcharge;
        colourantModel.rbgHex = object.rbgHex;
        colourantModel.kind = object.kind;
        return colourantModel;
    };
    ColourantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], ColourantService);
    return ColourantService;
}());



/***/ }),

/***/ "./src/app/services/formula/formula.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/formula/formula.service.ts ***!
  \*****************************************************/
/*! exports provided: FormulaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaService", function() { return FormulaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormulaService = /** @class */ (function () {
    function FormulaService(http) {
        this.http = http;
        this.listFormula = [];
        this.listFormulaProductBase = [];
        this.fetchData();
    }
    FormulaService.prototype.fetchData = function () {
        this.getALl();
        this.getAllFormulaProductBase();
    };
    FormulaService.prototype.getAllFormulaProductBase = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'formula_product_base/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var listFormulaProductBase = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var fpb = data_1[_i];
                    listFormulaProductBase.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertFormulaProductBaseObject(fpb));
                }
            }
            _this.listFormulaProductBase = listFormulaProductBase;
            return listFormulaProductBase;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.getALl = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'formula/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var formula = data_2[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToFormulaObject(formula));
                }
            }
            _this.listFormula = result;
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.postData = function () {
        var dt = {
            machine: {
                machineId: 3
            },
            colourant: {
                colourantId: 2
            },
            quantity: 2
        };
        debugger;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'machine_colour', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            console.log(datas);
        })).subscribe();
    };
    FormulaService.prototype.postData1 = function () {
        var dt = {
            machine: {
                machineId: 3
            },
            formulaProductBase: {
                formulaProductBaseId: 698
            },
            quantity: 10
        };
        debugger;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'machine_formula', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            console.log(datas);
        })).subscribe();
    };
    FormulaService.prototype.findById = function (formulaId) {
        var result = this.listFormula.filter(filterById);
        return result != null && result.length > 0 ? Object.assign({}, result[0]) : null;
        function filterById(item, index, array) {
            return (item.formulaId === formulaId);
        }
    };
    FormulaService.prototype.getListColorantOfFormula = function (formulaId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'formula/getColourants/' + formulaId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToFormulaColourantObject(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.getListProductBaseCan = function (productBaseId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'product_base_can/findById/' + productBaseId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data);
            var result = [];
            if (data) {
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToProductBaseCanObject(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.findFormulaProductBaseById = function (formulaProductBaseId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].settings.serverendpoint + 'formula_product_base/findById/' + formulaProductBaseId);
    };
    FormulaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], FormulaService);
    return FormulaService;
}());



/***/ }),

/***/ "./src/app/services/issues/issue.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/issues/issue.service.ts ***!
  \**************************************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
        this.listIssues = [];
    }
    IssueService.prototype.getIssues = function () {
        this.listIssues.push(this.generateIssue('Title 1', 'response 1', 'description 1', 'severity', 'status 1'));
        this.listIssues.push(this.generateIssue('Title 2', 'response 2', 'description 2', 'severity', 'status 2'));
        this.listIssues.push(this.generateIssue('Title 3', 'response 3', 'description 3', 'severity', 'status 3'));
        this.listIssues.push(this.generateIssue('Title 4', 'response 4', 'description 4', 'severity', 'status 3'));
        return this.listIssues;
        // return this.http.get(`${this.uri}`)
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssueService.prototype.addIssue = function (title, responsive, description, severity) {
        var issue = {
            title: title, responsive: responsive, description: description, severity: severity
        };
        return this.http.post(this.uri + "/issues/add", issue);
    };
    IssueService.prototype.updateIssue = function (id, title, responsive, description, severity, status) {
        var issue = {
            title: title,
            responsive: responsive,
            description: description,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/issues/update/" + id, issue);
    };
    IssueService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssueService.prototype.generateIssue = function (title, responsive, description, severity, status) {
        return {
            title: title,
            responsive: responsive,
            description: description,
            severity: severity,
            status: status
        };
    };
    IssueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/services/jobstatus/jobstatus.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/jobstatus/jobstatus.service.ts ***!
  \*********************************************************/
/*! exports provided: MAP_JOB_STATE, JobStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_JOB_STATE", function() { return MAP_JOB_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatusService", function() { return JobStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_job_status_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/job.status.model */ "./src/app/models/job.status.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _machine_machine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MAP_JOB_STATE = {
    WAITING: 'WAITING',
    IN_PROGRESS: 'IN-PROGRESS',
};
var JobStatusService = /** @class */ (function () {
    function JobStatusService(machineService, userService) {
        this.machineService = machineService;
        this.userService = userService;
        this.currentTask = null;
        this.loadCurrentData();
        this.currentTask = null;
        this.currentTaskId = 1;
        this.status = MAP_JOB_STATE.WAITING;
        this.listSubcribleComponent = {};
    }
    JobStatusService.prototype.loadCurrentData = function () {
        this.listTask = [];
    };
    JobStatusService.prototype.getState = function () {
        return this.status;
    };
    JobStatusService.prototype.getListJob = function () {
        return this.listTask;
    };
    JobStatusService.prototype.getCurrentJob = function () {
        return this.listTask;
    };
    JobStatusService.prototype.update = function () {
        if (this.status === MAP_JOB_STATE.WAITING && this.listTask != null && this.listTask.length > 0) {
            this.currentTask = this.listTask[0];
            this.currentTask.run(this);
            this.status = MAP_JOB_STATE.IN_PROGRESS;
        }
    };
    JobStatusService.prototype.record = function (type, data) {
        if (type === 'pumping' && data instanceof _models_job_status_model__WEBPACK_IMPORTED_MODULE_1__["DispenseStepDataModel"]) {
            this.machineService.subtractionColourantMachine(data.colorant, data.quantity);
        }
        else if (type === 'finished' && data instanceof _models_job_status_model__WEBPACK_IMPORTED_MODULE_1__["DispenseDataModel"]) {
            this.machineService.recordDispenseFormulaProductBase(data.formulaProductBase, data.canSize);
            this.status = MAP_JOB_STATE.WAITING;
        }
    };
    JobStatusService.prototype.addJob = function (job, component) {
        job.taskId = this.currentTaskId;
        this.listTask.push(job);
        this.currentTaskId++;
        this.subcribleTheTask(job.taskId, component);
        this.update();
    };
    JobStatusService.prototype.removeJob = function (job) {
        for (var i = 0; i < this.listTask.length; i++) {
            var currentJob = this.listTask[i];
            if (currentJob.taskId === job.taskId) {
                this.listTask.splice(i, 1);
                break;
            }
        }
    };
    JobStatusService.prototype.publishTask = function (task) {
        var listComponentRegister = this.listSubcribleComponent[task.taskId];
        if (listComponentRegister != null && listComponentRegister.length > 0) {
            for (var _i = 0, listComponentRegister_1 = listComponentRegister; _i < listComponentRegister_1.length; _i++) {
                var item = listComponentRegister_1[_i];
                try {
                    item.triggerUpdateTask(task);
                }
                catch (e) {
                    console.log('The component does support this method !! Please implement ');
                    console.log(item);
                }
            }
        }
    };
    JobStatusService.prototype.subcribleTask = function (taskId, component) {
        var _this = this;
        var taskObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var currentTask = null;
            for (var _i = 0, _a = _this.listTask; _i < _a.length; _i++) {
                var task = _a[_i];
                if (taskId === task.taskId) {
                    currentTask = task;
                    break;
                }
            }
            setTimeout(function () {
                observer.next(currentTask);
            }, 1);
        });
        this.subcribleTheTask(taskId, component);
        return taskObservable;
    };
    JobStatusService.prototype.subcribleTheTask = function (taskId, component) {
        var listComponentRegister = this.listSubcribleComponent[taskId];
        if (listComponentRegister == null || listComponentRegister.length === 0) {
            listComponentRegister = [];
        }
        listComponentRegister.push(component);
        this.listSubcribleComponent[taskId] = listComponentRegister;
    };
    JobStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_machine_machine_service__WEBPACK_IMPORTED_MODULE_3__["MachineService"], _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], JobStatusService);
    return JobStatusService;
}());



/***/ }),

/***/ "./src/app/services/machine/machine.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/machine/machine.service.ts ***!
  \*****************************************************/
/*! exports provided: MachineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineService", function() { return MachineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MachineService = /** @class */ (function () {
    function MachineService(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.machine = null;
        this.fetchData();
    }
    MachineService.prototype.fetchData = function () {
        var _this = this;
        this.machine = this.userService.getLoginUser().machine;
        if (this.machine != null) {
            this.fetchDataFromServer().subscribe(function (data) {
                _this.listMachineColourants = data;
                if (_this.listMachineColourants == null || _this.listMachineColourants.length === 0) {
                    // this.router.navigate([`../dashboard/machine`]);
                }
            });
        }
    };
    MachineService.prototype.fetchDataFromServer = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].settings.serverendpoint + 'machine/getColourants/' + this.machine.machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var result = [];
            if (data && data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToMachineColourant(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return [];
        }));
    };
    MachineService.prototype.getListColorantOfMachine = function () {
        return this.listMachineColourants;
    };
    MachineService.prototype.getCurrentMachine = function () {
        return this.machine;
    };
    MachineService.prototype.updateColourantMachineData = function (machine, colourant, addedAmount) {
        var dt = {
            machine: { machineId: machine.machineId },
            colourant: { colourantId: colourant.colourantId },
            quantity: addedAmount
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].settings.serverendpoint + 'machine_colour/update', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var result = [];
            if (data && data.length > 0) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToMachineColourant(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return [];
        }));
    };
    MachineService.prototype.subtractionColourantMachine = function (colorant, quantity) {
        var machine = this.getCurrentMachine();
        var dt = {
            machine: { machineId: machine.machineId },
            colourant: { colourantId: colorant.colourantId },
            quantity: quantity
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].settings.serverendpoint + 'machine_colour/subtraction', dt).pipe().subscribe();
    };
    MachineService.prototype.recordDispenseFormulaProductBase = function (formulaProductBase, quantity) {
        var machine = this.getCurrentMachine();
        var user = this.userService.getLoginUser();
        var dt = {
            formulaProductBase: { formulaProductBaseId: formulaProductBase.formulaProductBaseId },
            user: { userId: user.userId },
            quantity: quantity,
            machine: { machineId: machine.machineId }
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].settings.serverendpoint + 'machine_formula/record', dt).pipe().subscribe();
    };
    MachineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MachineService);
    return MachineService;
}());



/***/ }),

/***/ "./src/app/services/product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.listItems = [];
        this.sortedData = null;
    }
    ProductService.prototype.getListItems = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].settings.serverendpoint + 'product/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    listItems.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToProductObject(item));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    ProductService.prototype.viewProductDetail = function (productId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].settings.serverendpoint + 'product/view-detail/' + productId);
    };
    ProductService.prototype.sortData = function (sort) {
        var data = this.listItems.slice();
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'productCode':
                    return compare(a.productCode, b.productCode, isAsc);
                case 'productName':
                    return compare(a.productName, b.productName, isAsc);
                default:
                    return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/productbase/productbase.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/productbase/productbase.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBaseService", function() { return ProductBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductBaseService = /** @class */ (function () {
    function ProductBaseService(http) {
        this.http = http;
    }
    ProductBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ProductBaseService);
    return ProductBaseService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-cookie */ "./node_modules/ng-cookie/dist/cookie.service.js");
/* harmony import */ var ng_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.isLogin = false;
        this.userDTO = null;
        this.isAuthenticated();
    }
    UserService.prototype.isAuthenticated = function () {
        if (this.cookieService.get_cookie('username') && this.cookieService.get_cookie('password')) {
            this.login(this.cookieService.get_cookie('username'), this.cookieService.get_cookie('password'));
        }
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var dt = {
            userName: userName,
            password: password,
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].settings.serverendpoint + 'login_test', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            if (datas != null) {
                _this.isLogin = true;
                _this.userDTO = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_6__["default"].convertToUserModel(datas);
                _this.cookieService.set_cookie('username', userName, 1);
                _this.cookieService.set_cookie('password', password, 1);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.userDTO = null;
                _this.isLogin = false;
                alert('Username or Password is incorrect! Please try again');
            }
        })).subscribe();
    };
    UserService.prototype.getLoginUser = function () {
        return this.userDTO;
    };
    UserService.prototype.logOut = function () {
        this.userDTO = null;
        this.isLogin = false;
        this.cookieService.delete_cookie('username');
        this.cookieService.delete_cookie('token');
        this.router.navigate(["../login"]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_cookie__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/http/http.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/http/http.module.ts ***!
  \********************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _interceptor_https_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptor/https-interceptor */ "./src/app/shared/http/interceptor/https-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule_1 = HttpModule;
    HttpModule.forRoot = function () {
        return {
            ngModule: HttpModule_1,
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
            ]
        };
    };
    var HttpModule_1;
    HttpModule = HttpModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [],
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
                _interceptor_https_interceptor__WEBPACK_IMPORTED_MODULE_4__["AppHttpInterceptor"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_https_interceptor__WEBPACK_IMPORTED_MODULE_4__["AppHttpInterceptor"],
                    multi: true
                }
            ],
            exports: []
        })
    ], HttpModule);
    return HttpModule;
}());



/***/ }),

/***/ "./src/app/shared/http/interceptor/https-interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/http/interceptor/https-interceptor.ts ***!
  \**************************************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthService } from 'src/app/auth/auth.service';

var AppHttpInterceptor = /** @class */ (function () {
    // constructor(private authService: AuthService) {
    // }
    function AppHttpInterceptor() {
    }
    AppHttpInterceptor.prototype.intercept = function (req, next) {
        var authReq = null;
        // var token = this.authService.getToken();
        // if (token) {
        req.headers.set("Access-Control-Allow-Origin", "*");
        req.headers.set("ContentType ", "application/json");
        authReq = req.clone({ headers: req.headers });
        // } else {
        //   authReq = req.clone();
        // }
        // Clone the request to add the new header.
        //send the newly created request
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlePdmHttpError.bind(this)));
    };
    /**
     * Handle http errors
     * `caught`, which is the source observable, in case you'd like to "retry" that observable by returning it again.
     * Whatever observable
     *  is returned by the `selector` will be used to continue the observable chain.
     *
     * @private
     * @param {(Response | any)} error
     * @param {Observable} caught
     * @returns {Observable<any>}
     * @memberof HttpService
     */
    AppHttpInterceptor.prototype.handleHttpError = function (error, caught) {
        // if (error.status == 401) {
        //   this.authService.logout();
        // }
        var message;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            message = error.message;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(message);
    };
    /**
     * Handle pdm http errors
     * `caught`, which is the source observable, in case you'd like to "retry" that observable by returning it again.
     * Whatever observable
     *  is returned by the `selector` will be used to continue the observable chain.
     *
     * @private
     * @param {(Response | any)} error
     * @param {Observable} caught
     * @returns {Observable<any>}
     * @memberof HttpService
     */
    AppHttpInterceptor.prototype.handlePdmHttpError = function (error, caught) {
        // if (error.status == 401) {
        //   this.authService.logout();
        // }
        var message;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // error from loopback
            if (error.error.error) {
                message = error.error.error.message;
            }
            else {
                message = error.message;
            }
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(message);
    };
    AppHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/http/services/http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/http/services/http.service.ts ***!
  \******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpService);
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/utils/convert-models-utils.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/convert-models-utils.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_formula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/formula */ "./src/app/models/formula.ts");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/collection */ "./src/app/models/collection.ts");
/* harmony import */ var _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/formula_product_base */ "./src/app/models/formula_product_base.ts");
/* harmony import */ var _models_product_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product_base */ "./src/app/models/product_base.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _models_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/base */ "./src/app/models/base.ts");
/* harmony import */ var _models_colorant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/colorant */ "./src/app/models/colorant.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");








var ConvertModelUtils = /** @class */ (function () {
    function ConvertModelUtils() {
    }
    ConvertModelUtils.convertToFormulaObject = function (object) {
        var formula = new _models_formula__WEBPACK_IMPORTED_MODULE_0__["FormulaModel"]();
        formula.formulaId = object.formulaId;
        formula.formulaCode = object.formulaCode;
        formula.formulaName = object.formulaName;
        formula.collection = ConvertModelUtils.convertCollectionObject(object.collection);
        formula.createdDate = object.createdDate;
        formula.createBy = object.createBy;
        return formula;
    };
    ConvertModelUtils.convertToProductObject = function (object) {
        var item = new _models_product__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
        item.productId = object.productId;
        item.productCode = object.productCode;
        item.productName = object.productName;
        item.createdDate = object.createdDate;
        item.createBy = object.createBy;
        return item;
    };
    ConvertModelUtils.convertToFormulaProductBaseObject = function (object) {
        var item = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"]();
        item.formulaProductBaseId = object.formulaProductBaseId;
        item.productBase = ConvertModelUtils.convertProductBaseObject(object.productBase);
        item.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
        return item;
    };
    ConvertModelUtils.convertToFormulaColourantObject = function (object) {
        var item = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaColourantModel"]();
        item.formulaColourantId = object.formulaColourantId;
        item.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
        item.colourant = ConvertModelUtils.convertToColourantObject(object.colourant);
        item.quantity = object.quantity;
        return item;
    };
    ConvertModelUtils.convertToColourantObject = function (object) {
        var item = new _models_colorant__WEBPACK_IMPORTED_MODULE_6__["ColorantModel"]();
        item.colourantId = object.colourantId;
        item.colourantCode = object.colourantCode;
        item.colourantName = object.colourantName;
        item.density = object.density;
        item.pricePerUnit = object.pricePerUnit;
        item.surcharge = object.surcharge;
        item.rbgHex = object.rbgHex;
        item.kind = object.kind;
        return item;
    };
    ConvertModelUtils.convertToProductBaseCanObject = function (object) {
        var item = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["ProductBaseCanModel"]();
        item.productBaseCanId = object.productBaseCanId;
        item.productBase = object.productBase;
        item.can = object.can;
        item.unit = object.unit;
        item.pricePerCan = object.pricePerCan;
        item.barCode = object.barCode;
        item.percentage = object.percentage;
        return item;
    };
    ConvertModelUtils.convertCollectionObject = function (object) {
        var collection = new _models_collection__WEBPACK_IMPORTED_MODULE_1__["CollectionModel"]();
        collection.collectionId = object.collectionId;
        collection.collectionName = object.collectionName;
        collection.description = object.description;
        return collection;
    };
    ConvertModelUtils.convertFormulaProductBaseObject = function (object) {
        var formulaProductBase = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"]();
        formulaProductBase.formulaProductBaseId = object.formulaProductBaseId;
        formulaProductBase.formula = ConvertModelUtils.convertToFormulaObject(object.formula);
        formulaProductBase.productBase = ConvertModelUtils.convertProductBaseObject(object.productBase);
        return formulaProductBase;
    };
    ConvertModelUtils.convertProductBaseObject = function (object) {
        var productBase = new _models_product_base__WEBPACK_IMPORTED_MODULE_3__["ProductBaseModel"]();
        productBase.productBaseId = object.productBaseId;
        productBase.product = ConvertModelUtils.convertProductObject(object.product);
        productBase.base = ConvertModelUtils.convertBaseObject(object.base);
        productBase.rbgHex = object.rbgHex;
        productBase.density = object.density;
        return productBase;
    };
    ConvertModelUtils.convertProductObject = function (object) {
        var product = new _models_product__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
        product.productId = object.productId;
        product.productCode = object.productCode;
        product.productName = object.productName;
        return product;
    };
    ConvertModelUtils.convertBaseObject = function (object) {
        var base = new _models_base__WEBPACK_IMPORTED_MODULE_5__["BaseModel"]();
        base.baseCode = object.baseCode;
        base.baseId = object.baseId;
        base.baseName = object.baseName;
        return base;
    };
    ConvertModelUtils.convertToUserModel = function (object) {
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        user.userId = object.userId;
        user.userName = object.userName;
        user.role = ConvertModelUtils.convertToRoleModel(object.role);
        user.machine = ConvertModelUtils.convertToMachineModel(object.machine);
        return user;
    };
    ConvertModelUtils.convertToRoleModel = function (object) {
        var role = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["RoleModel"]();
        role.roleId = object.roleId;
        role.roleName = object.roleName;
        return role;
    };
    ConvertModelUtils.convertToMachineModel = function (object) {
        var machine = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["MachineModel"]();
        machine.machineId = object.machineId;
        machine.code = object.code;
        machine.name = object.name;
        machine.minQuantity = object.minQuantity;
        machine.maxQuantity = object.maxQuantity;
        return machine;
    };
    ConvertModelUtils.convertToMachineColourant = function (object) {
        var item = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["MachineColourantModel"]();
        item.machineColourantId = object.machineColourantId;
        item.colourant = ConvertModelUtils.convertToColourantObject(object.colourant);
        item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
        item.quantity = object.quantity;
        return item;
    };
    return ConvertModelUtils;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConvertModelUtils);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, StaticVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticVariable", function() { return StaticVariable; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    settings: {
        serverendpoint: 'http://ec2-34-227-171-6.compute-1.amazonaws.com:8081/demoson/server/api',
        dateFormat: 'dd/MM/yyyy'
    }
};
var StaticVariable = /** @class */ (function () {
    function StaticVariable() {
        this.STATIC_VARIABLE = StaticVariable;
        StaticVariable._settings = environment.settings;
    }
    Object.defineProperty(StaticVariable, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: true,
        configurable: true
    });
    return StaticVariable;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\ws_learning\clientvietpower\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map