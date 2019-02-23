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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - SB Admin v5.0.2 (https://startbootstrap.com/template-overviews/sb-admin)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)\r\n */\nhtml {\n  position: relative;\n  min-height: 100%; }\nbody {\n  height: 100%; }\n#wrapper {\n  display: flex; }\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 80px; }\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 90px; }\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 90px; } }\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 46px; }\n.scroll-to-top:focus, .scroll-to-top:hover {\n  color: white; }\n.scroll-to-top:hover {\n  background: #343a40; }\n.scroll-to-top i {\n  font-weight: 800; }\n.smaller {\n  font-size: 0.7rem; }\n.o-hidden {\n  overflow: hidden !important; }\n.z-0 {\n  z-index: 0; }\n.z-1 {\n  z-index: 1; }\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\n  width: 1rem;\n  text-align: center;\n  float: right;\n  vertical-align: 0;\n  border: 0;\n  font-weight: 900;\n  content: '\\f105';\n  font-family: 'Font Awesome 5 Free'; }\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\n  content: '\\f107'; }\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\n  display: none; }\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n.sidebar {\n  width: 90px !important;\n  background-color: #212529;\n  min-height: calc(100vh - 56px); }\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n.sidebar .nav-item .nav-link {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  width: 90px; }\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(90px + 0.5rem) !important;\n  margin: 0; }\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n.sidebar .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75); }\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 90px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 90px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(90px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n.card-body-icon {\n  position: absolute;\n  z-index: 0;\n  top: -1.25rem;\n  right: -1rem;\n  opacity: 0.4;\n  font-size: 5rem;\n  -webkit-transform: rotate(15deg);\n  transform: rotate(15deg); }\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 1;\n    column-count: 1; } }\n@media (min-width: 768px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n@media (min-width: 1200px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n:root {\n  --input-padding-x: 0.75rem;\n  --input-padding-y: 0.75rem; }\n.card-login {\n  max-width: 25rem; }\n.card-register {\n  max-width: 40rem; }\n.form-label-group {\n  position: relative; }\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto; }\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out; }\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n.form-label-group input:-ms-input-placeholder {\n  color: transparent; }\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n.form-label-group input::placeholder {\n  color: transparent; }\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3); }\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777; }\nfooter.sticky-footer {\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 90px);\n  height: 80px;\n  background-color: #e9ecef; }\nfooter.sticky-footer .copyright {\n  line-height: 1;\n  font-size: 0.8rem; }\n@media (min-width: 768px) {\n  footer.sticky-footer {\n    width: calc(100% - 225px); } }\nbody.sidebar-toggled footer.sticky-footer {\n  width: 100%; }\n@media (min-width: 768px) {\n  body.sidebar-toggled footer.sticky-footer {\n    width: calc(100% - 90px); } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXFdvcmtzcGFjZVxcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVIO0VBQ0UsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFHRSxjQUFhLEVBQ2Q7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUNyQjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFO0lBQ0Usb0JBQW1CLEVBQ3BCO0VBQ0Q7SUFDRSxtQkFBa0IsRUFDbkIsRUFBQTtBQUdIO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0NBQWlDO0VBQ2pDLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSw0QkFBMkIsRUFDNUI7QUFFRDtFQUNFLFdBQVUsRUFDWDtBQUVEO0VBQ0UsV0FBVSxFQUNYO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLG1DQUFrQyxFQUNuQztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7QUFFRDtFQUNFLGNBQWEsRUFDZDtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQTtBQUdIO0VBQ0UsdUJBQXNCO0VBQ3RCLDBCQUF5QjtFQUN6QiwrQkFBOEIsRUFDL0I7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXLEVBQ1o7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHFDQUFvQztFQUNwQyxVQUFTLEVBQ1Y7QUFFRDtFQUNFLFVBQVM7RUFDVCxxQkFBb0IsRUFDckI7QUFFRDtFQUNFLGNBQWEsRUFDZDtBQUVEO0VBQ0UsZ0NBQStCLEVBQ2hDO0FBRUQ7RUFDRSxpQ0FBZ0MsRUFDakM7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLE9BQU0sRUFDUDtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsdUJBQXNCLEVBQ3ZCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBQ0Q7SUFDRSw4QkFBNkI7SUFDN0IsbUNBQWtDO0lBQ2xDLDJCQUEwQjtJQUMxQixxQ0FBb0M7SUFDcEMsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QscUJBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBQUdIO0VBQ0UsVUFBUztFQUNULDJCQUEwQjtFQUMxQixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsY0FBYTtFQUNiLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQ0FBZ0M7RUFDaEMseUJBQXdCLEVBQ3pCO0FBRUQ7RUFDRTtJQUNFLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQixFQUFBO0FBR0g7RUFDRTtJQUNFLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQixFQUFBO0FBR0g7RUFDRTtJQUNFLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQixFQUFBO0FBR0g7RUFDRSwyQkFBa0I7RUFDbEIsMkJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBRUQ7O0VBRUUsdURBQXNEO0VBQ3RELGFBQVksRUFDYjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsZUFBYztFQUNkLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsOEJBQTZCO0VBQzdCLHVCQUFzQjtFQUV0QixpQ0FBZ0MsRUFDakM7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsNkVBQTRFO0VBQzVFLGlEQUFnRCxFQUNqRDtBQUVEO0VBQ0UsOENBQTZDO0VBQzdDLGlEQUFnRDtFQUNoRCxnQkFBZTtFQUNmLFlBQVcsRUFDWjtBQUVEO0VBR0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULHlCQUF3QjtFQUN4QixhQUFZO0VBQ1osMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRTtJQUNFLDBCQUF5QixFQUMxQixFQUFBO0FBR0g7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQUNFO0lBQ0UseUJBQXdCLEVBQ3pCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogU3RhcnQgQm9vdHN0cmFwIC0gU0IgQWRtaW4gdjUuMC4yIChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3Mvc2ItYWRtaW4pXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTggU3RhcnQgQm9vdHN0cmFwXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtc2ItYWRtaW4vYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG5odG1sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3dyYXBwZXIgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG5ib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gIHBhZGRpbmctbGVmdDogOTBweDtcclxufVxyXG5cclxuYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gIH1cclxuICBib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcDpmb2N1cywgLnNjcm9sbC10by10b3A6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNjcm9sbC10by10b3A6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5zY3JvbGwtdG8tdG9wIGkge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zbWFsbGVyIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLm8taGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi56LTAge1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi56LTEge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb250ZW50OiAnXFxmMTA1JztcclxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0uZHJvcGRvd24uc2hvdyAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcZjEwNyc7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbS5kcm9wZG93bi5uby1hcnJvdyAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcclxuICB0b3A6IDAuM3JlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyLW5hdiAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IGNhbGMoOTBweCArIDAuNXJlbSkgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmFjdGl2ZSwgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluazpmb2N1cywgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLnRvZ2dsZWQge1xyXG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDIyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gIH1cclxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBjYWxjKDkwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLmZpeGVkLXRvcCB7XHJcbiAgdG9wOiA1NnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWJvZHktaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdG9wOiAtMS4yNXJlbTtcclxuICByaWdodDogLTFyZW07XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICBjb2x1bW4tY291bnQ6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2FyZC1jb2x1bW5zIHtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWxvZ2luIHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1yZWdpc3RlciB7XHJcbiAgbWF4LXdpZHRoOiA0MHJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XHJcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG5mb290ZXIuc3RpY2t5LWZvb3RlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxufVxyXG5cclxuZm9vdGVyLnN0aWNreS1mb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGZvb3Rlci5zdGlja3ktZm9vdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjVweCk7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5LnNpZGViYXItdG9nZ2xlZCBmb290ZXIuc3RpY2t5LWZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHkuc2lkZWJhci10b2dnbGVkIGZvb3Rlci5zdGlja3ktZm9vdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(globalVariable) {
        this.globalVariable = globalVariable;
        this.title = 'frontend';
        this.globalVariable.getEndpoint();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"]])
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
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
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
/* harmony import */ var _services_dispensetask_dispensetask_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/dispensetask/dispensetask.service */ "./src/app/services/dispensetask/dispensetask.service.ts");
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
/* harmony import */ var _components_formula_formula_formula_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/formula/formula/formula.component */ "./src/app/components/formula/formula/formula.component.ts");
/* harmony import */ var _components_formula_list_formula_list_formula_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/formula/list-formula/list-formula.component */ "./src/app/components/formula/list-formula/list-formula.component.ts");
/* harmony import */ var _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/formula/viewformula/viewformula.component */ "./src/app/components/formula/viewformula/viewformula.component.ts");
/* harmony import */ var _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/formula/maintenance/maintenance.component */ "./src/app/components/formula/maintenance/maintenance.component.ts");
/* harmony import */ var _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/help/language/language.component */ "./src/app/components/help/language/language.component.ts");
/* harmony import */ var _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/help/question/question.component */ "./src/app/components/help/question/question.component.ts");
/* harmony import */ var _shared_http_http_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/http/http.module */ "./src/app/shared/http/http.module.ts");
/* harmony import */ var _directions_product_viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./directions/product/viewdetail/viewdetail.component */ "./src/app/directions/product/viewdetail/viewdetail.component.ts");
/* harmony import */ var _components_backgroundtask_viewdispensetask_viewdispensetask_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/backgroundtask/viewdispensetask/viewdispensetask.component */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.ts");
/* harmony import */ var _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/machine/machinesetting/machinesetting.component */ "./src/app/components/machine/machinesetting/machinesetting.component.ts");
/* harmony import */ var _components_setting_productbase_productbase_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/setting/productbase/productbase.component */ "./src/app/components/setting/productbase/productbase.component.ts");
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/dashboard/dashboard.service */ "./src/app/services/dashboard/dashboard.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _components_formula_edit_formula_edit_formula_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/formula/edit-formula/edit-formula.component */ "./src/app/components/formula/edit-formula/edit-formula.component.ts");
/* harmony import */ var _directions_product_tablecolourant_table_colourants_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./directions/product/tablecolourant/table-colourants.component */ "./src/app/directions/product/tablecolourant/table-colourants.component.ts");
/* harmony import */ var _directions_product_base_can_base_can_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./directions/product/base-can/base-can.component */ "./src/app/directions/product/base-can/base-can.component.ts");
/* harmony import */ var _components_setting_customer_customer_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/setting/customer/customer.component */ "./src/app/components/setting/customer/customer.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// IMPORT MATERIAL






















// import direction










// setting








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
            // {path: '', redirectTo: 'formula', pathMatch: 'full'},
            { path: 'colorant', component: _components_setting_colorant_colorant_component__WEBPACK_IMPORTED_MODULE_38__["ColorantComponent"] },
            { path: 'base', component: _components_setting_base_base_component__WEBPACK_IMPORTED_MODULE_39__["BaseComponent"] },
            { path: 'collection', component: _components_setting_collection_collection_component__WEBPACK_IMPORTED_MODULE_40__["CollectionComponent"] },
            { path: 'product', component: _components_setting_product_product_component__WEBPACK_IMPORTED_MODULE_41__["ProductComponent"] },
            { path: 'customer', component: _components_setting_customer_customer_component__WEBPACK_IMPORTED_MODULE_58__["CustomerComponent"] },
            { path: 'company', component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_60__["CompanyComponent"] },
            // {path: 'product/view-detail/:id', component: ViewDetailComponent},
            { path: 'formula', component: _components_formula_formula_formula_component__WEBPACK_IMPORTED_MODULE_42__["FormulaComponent"] },
            // {path: 'formula', loadChildren: './components/formula/'},
            { path: 'view-formula/:id', component: _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_44__["ViewFormulaComponent"] },
            { path: 'formula/add', component: _components_formula_edit_formula_edit_formula_component__WEBPACK_IMPORTED_MODULE_55__["EditFormulaComponent"] },
            { path: 'formula/edit/:id', component: _components_formula_edit_formula_edit_formula_component__WEBPACK_IMPORTED_MODULE_55__["EditFormulaComponent"] },
            { path: 'job-status', component: _components_backgroundtask_backgroundtask_component__WEBPACK_IMPORTED_MODULE_37__["BackgroundTaskComponent"] },
            { path: 'maintenance', component: _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_45__["MaintenanceComponent"] },
            { path: 'machine', component: _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_51__["MachineSettingComponent"] },
            { path: 'question', component: _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_47__["QuestionComponent"] },
            { path: 'help/overview', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"] },
            { path: 'help/language', component: _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_46__["LanguageComponent"] },
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
                _directions_product_tablecolourant_table_colourants_component__WEBPACK_IMPORTED_MODULE_56__["TableColourantsComponent"],
                _directions_product_base_can_base_can_component__WEBPACK_IMPORTED_MODULE_57__["BaseCanComponent"],
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
                _components_backgroundtask_viewdispensetask_viewdispensetask_component__WEBPACK_IMPORTED_MODULE_50__["ViewDispenseTaskComponent"],
                // setting component
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_59__["UserComponent"],
                _components_setting_colorant_colorant_component__WEBPACK_IMPORTED_MODULE_38__["ColorantComponent"],
                _components_setting_base_base_component__WEBPACK_IMPORTED_MODULE_39__["BaseComponent"],
                _components_setting_collection_collection_component__WEBPACK_IMPORTED_MODULE_40__["CollectionComponent"],
                _components_setting_product_product_component__WEBPACK_IMPORTED_MODULE_41__["ProductComponent"],
                _components_setting_customer_customer_component__WEBPACK_IMPORTED_MODULE_58__["CustomerComponent"],
                _components_setting_productbase_productbase_component__WEBPACK_IMPORTED_MODULE_52__["ProductbaseComponent"],
                _directions_product_viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_49__["ViewDetailComponent"],
                // formula component
                _components_formula_formula_formula_component__WEBPACK_IMPORTED_MODULE_42__["FormulaComponent"],
                _components_formula_list_formula_list_formula_component__WEBPACK_IMPORTED_MODULE_43__["ListFormulaComponent"],
                _components_formula_viewformula_viewformula_component__WEBPACK_IMPORTED_MODULE_44__["ViewFormulaComponent"],
                _components_formula_edit_formula_edit_formula_component__WEBPACK_IMPORTED_MODULE_55__["EditFormulaComponent"],
                _components_formula_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_45__["MaintenanceComponent"],
                // machine component
                _components_machine_machinesetting_machinesetting_component__WEBPACK_IMPORTED_MODULE_51__["MachineSettingComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_59__["UserComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_60__["CompanyComponent"],
                // test component
                _components_issue_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _components_issue_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
                _components_issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"],
                // help page
                _components_help_question_question_component__WEBPACK_IMPORTED_MODULE_47__["QuestionComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
                _components_help_language_language_component__WEBPACK_IMPORTED_MODULE_46__["LanguageComponent"],
                _components_help_structure_structure_component__WEBPACK_IMPORTED_MODULE_16__["StructureComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_http_http_module__WEBPACK_IMPORTED_MODULE_48__["HttpModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                // import boostrap
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_9__["NgSelect2Module"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_10__["NgxBarcodeModule"],
                // IMPORT MATERIAL
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [
                ng_cookie__WEBPACK_IMPORTED_MODULE_17__["CookieService"],
                _services_store_store_service__WEBPACK_IMPORTED_MODULE_54__["StoreService"],
                _services_dispensetask_dispensetask_service__WEBPACK_IMPORTED_MODULE_27__["DispenseTaskService"],
                _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_26__["ModalService"],
                _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_53__["DashboardService"],
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

module.exports = "<div [ngStyle]=\"{'display' : selectedFormula != null ? 'none': 'block'}\">\r\n  <div class=\"block-header\">\r\n    <h1>Dispense History</h1>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Dispense History\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n              <tr>\r\n                <th mat-sort-header=\"machineFormulaProductBaseId\">#Id</th>\r\n                <th mat-sort-header=\"approximateColor\">Color</th>\r\n                <th mat-sort-header=\"formulaName\">Formula Name</th>\r\n                <th mat-sort-header=\"collectionName\">Collection</th>\r\n                <th mat-sort-header=\"productName\">Product</th>\r\n                <th mat-sort-header=\"canSize\">Can Size</th>\r\n                <th mat-sort-header=\"status\">Status</th>\r\n                <th mat-sort-header=\"createdDate\">Created Time</th>\r\n                <th mat-sort-header=\"finishedDate\">Finished Time</th>\r\n                <th>Action</th>\r\n              </tr>\r\n\r\n              <tr *ngFor=\"let item of listBackgroundTask\">\r\n                <td>{{item.machineFormulaProductBaseId}}</td>\r\n                <td class=\"text-center\"><span [ngStyle]=\"{'background': item.formulaProductBase.formula.approximateColor, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span></td>\r\n                <td>{{item.formulaProductBase.formula.formulaName}}</td>\r\n                <td>{{item.formulaProductBase.formula.collection.collectionName}}</td>\r\n                <td>{{item.formulaProductBase.productBase.product.productName}}</td>\r\n                <td>{{item.canSize}} L</td>\r\n                <td>{{item.status}}</td>\r\n                <td>{{item.createdDate | date: 'hh:mm:ss dd/MM/yyyy'}}</td>\r\n                <td>{{item.finishedDate | date: 'hh:mm:ss dd/MM/yyyy'}}</td>\r\n                <td><span (click)=\"viewCurrentTask(item)\"><i class=\"fas fa-info-circle\"></i></span></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"selectedFormula\">\r\n  <app-viewformula [dbItem]=\"selectedFormula\"></app-viewformula>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"selectedFormula\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <button class=\"btn btn-primary push-left\" (click)=\"clearSelectedFormula()\"><i class=\"fas fa-arrow-circle-left\"></i> Back</button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n"

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
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
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
    function BackgroundTaskComponent(storeService, machineService, router) {
        this.storeService = storeService;
        this.machineService = machineService;
        this.router = router;
        this.currentBackgroundTask = null;
    }
    BackgroundTaskComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    BackgroundTaskComponent.prototype.loadData = function () {
        var _this = this;
        this.machine = this.storeService.getMachineData();
        if (this.machine != null && this.machine.machineId > 0) {
            this.machineService.findAllDispenseTask().subscribe(function (datas) {
                _this.listItems = datas;
                _this.listBackgroundTask = _this.listItems;
            });
        }
    };
    BackgroundTaskComponent.prototype.viewCurrentTask = function (task) {
        this.currentBackgroundTask = task;
        this.selectedFormula = this.currentBackgroundTask.formulaProductBase;
    };
    BackgroundTaskComponent.prototype.clearSelectedFormula = function () {
        this.currentBackgroundTask = null;
        this.selectedFormula = null;
    };
    BackgroundTaskComponent.prototype.sortData = function (sort) {
        var data = this.listItems.slice();
        if (!sort.active || sort.direction === '') {
            this.listBackgroundTask = data;
            return;
        }
        this.listBackgroundTask = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'machineFormulaProductBaseId':
                    return compare(a.machineFormulaProductBaseId, b.machineFormulaProductBaseId, isAsc);
                case 'approximateColor':
                    return compare(a.formulaProductBase.formula.approximateColor, b.formulaProductBase.formula.approximateColor, isAsc);
                case 'formulaName':
                    return compare(a.formulaProductBase.formula.formulaName, b.formulaProductBase.formula.formulaName, isAsc);
                case 'collectionName':
                    return compare(a.formulaProductBase.formula.collection.collectionName, b.formulaProductBase.formula.collection.collectionName, isAsc);
                case 'productName':
                    return compare(a.formulaProductBase.productBase.product.productName, b.formulaProductBase.productBase.product.productName, isAsc);
                case 'canSize':
                    return compare(a.canSize, b.canSize, isAsc);
                case 'status':
                    return compare(a.status, b.status, isAsc);
                case 'createdDate':
                    return compare(a.createdDate, b.createdDate, isAsc);
                case 'finishedDate':
                    return compare(a.finishedDate == null ? 0 : 1, b.finishedDate == null ? 0 : 1, isAsc);
                default:
                    return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    BackgroundTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backgroundtask',
            template: __webpack_require__(/*! ./backgroundtask.component.html */ "./src/app/components/backgroundtask/backgroundtask.component.html"),
            styles: [__webpack_require__(/*! ./backgroundtask.component.scss */ "./src/app/components/backgroundtask/backgroundtask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<div class=\"task-content\" *ngIf=\"dispenseStepTask != null\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div *ngIf=\"dispenseStepTask != null\">\r\n        {{dispenseStepTask.type}}\r\n\r\n        <div class=\"component-pumping-info\" *ngIf=\"'pumping' == dispenseStepTask.type\">\r\n\r\n          <table cellpadding=\"5\" cellspacing=\"0\">\r\n            <tr>\r\n              <td class=\"text-right\">Component</td>\r\n              <td colspan=\"100%\" class=\"text-center\" [style]=\"{'margin-left': '50px'}\">\r\n\r\n                  <span class=\"color-bar\" >\r\n                    <span class=\"color-select\" [ngStyle]=\"{'background': dispenseStepTask.taskData.colorant.rbgHex, 'width': '20px', 'height': '150px'}\"></span>\r\n                  </span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-right\"><span class=\"component-name\">{{dispenseStepTask.taskData.colorant.colourantName}}</span></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Wanted</td>\r\n            </tr>\r\n            <tr>\r\n              <td  class=\"text-right\"><span class=\"component-name\">{{dispenseStepTask.taskData.quantity}}</span> ml</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Dispensed</td>\r\n            </tr>\r\n            <tr>\r\n              <td  class=\"text-right\"><span class=\"component-name\">0</span> ml</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-5\">\r\n      <div *ngIf=\"dispenseTask.childrenTask != null && dispenseTask.childrenTask.length > 0\" >\r\n\r\n        <div  *ngIf=\"'prepare' == dispenseStepTask.type\" class=\"formula-animation preparing-animation text-center\">\r\n          <img src=\"/assets/videos/Preparing.gif\" width=\"250\" height=\"250\"/>\r\n        </div>\r\n\r\n        <div *ngIf=\"'pumping' == dispenseStepTask.type\" class=\"formula-animation pumping-animation text-center\">\r\n          <img src=\"/assets/videos/Pumping.gif\" width=\"250\" height=\"250\"/>\r\n        </div>\r\n\r\n        <div *ngIf=\"'finished' == dispenseStepTask.type\" class=\"text-center\">\r\n          FINISHED\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div *ngFor=\"let colorantItem of listColorantUsed\" class=\"color-bar-group\">\r\n          <span class=\"color-bar\" >\r\n            <span class=\"color-select\" [ngStyle]=\"{'background': colorantItem.colorant.rbgHex, 'width': (colorantItem.quantity / maxColorQuantity) * 100 + '%'}\">\r\n              <span class=\"color-name\">{{colorantItem.colorant.name}}</span>\r\n            </span>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-5\">\r\n        <span class=\"base-can-empty\" *ngIf=\"dispenseTask.taskData != null\">\r\n          <span class=\"base-can-background\">\r\n            <span class=\"base-can-volume\"\r\n                  [ngStyle]=\"{'background-color': dispenseTask.taskData.productBaseCan.productBase.rbgHex, 'height': dispenseTask.taskData.productBaseCan.percentage + '%'}\">\r\n              <span class=\"can-base-info\">\r\n                <span class=\"base-type\">Base : {{dispenseTask.taskData.productBaseCan.productBase.base.baseCode}}</span>\r\n                <span class=\"base-volume\">{{dispenseTask.taskData.canSize}} Liter</span>\r\n                <span class=\"base-name\">{{dispenseTask.taskData.formulaProductBase.formula.collection.collectionName}}</span>\r\n              </span>\r\n            </span>\r\n          </span>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-bar {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  height: 1em; }\n  .color-bar .color-select {\n    display: inline-block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWNrZ3JvdW5kdGFzay92aWV3ZGlzcGVuc2V0YXNrL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmFja2dyb3VuZHRhc2tcXHZpZXdkaXNwZW5zZXRhc2tcXHZpZXdkaXNwZW5zZXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixZQUFXLEVBU1o7RUFiRDtJQU9JLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhY2tncm91bmR0YXNrL3ZpZXdkaXNwZW5zZXRhc2svdmlld2Rpc3BlbnNldGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1iYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDFlbTtcclxuXHJcbiAgLmNvbG9yLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/dispense.task.model */ "./src/app/models/dispense.task.model.ts");
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
    function ViewDispenseTaskComponent() {
    }
    ViewDispenseTaskComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    ViewDispenseTaskComponent.prototype.fetchData = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_1__["DispenseTaskModel"])
    ], ViewDispenseTaskComponent.prototype, "dispenseTask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_1__["DispenseTaskStepModel"])
    ], ViewDispenseTaskComponent.prototype, "dispenseStepTask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ViewDispenseTaskComponent.prototype, "listColorantUsed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ViewDispenseTaskComponent.prototype, "maxColorQuantity", void 0);
    ViewDispenseTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewdispensetask',
            template: __webpack_require__(/*! ./viewdispensetask.component.html */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.html"),
            styles: [__webpack_require__(/*! ./viewdispensetask.component.scss */ "./src/app/components/backgroundtask/viewdispensetask/viewdispensetask.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewDispenseTaskComponent);
    return ViewDispenseTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\" *ngIf=\"dbItem != null\">\n  <h1>Company {{dbItem.code}}</h1>\n</div>\n\n<div class=\"row\" *ngIf=\"dbItem != null\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Company {{dbItem.code}} Information\n      </div>\n\n      <div class=\"card-body\">\n        <form class=\"form form-horizontal form-detail\">\n          <div class=\"form-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">Company Name</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.name\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['name'] != null\">\n                  <span class=\"error-label\">{{errorValidation['name']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">Phone Number</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.phone\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['phone'] != null\">\n                  <span class=\"error-label\">{{errorValidation['phone']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">website</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.website\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['website'] != null\">\n                  <span class=\"error-label\">{{errorValidation['website']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">email</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.email\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['email'] != null\">\n                  <span class=\"error-label\">{{errorValidation['email']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">address</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.address\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['address'] != null\">\n                  <span class=\"error-label\">{{errorValidation['address']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">city</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.city\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['city'] != null\">\n                  <span class=\"error-label\">{{errorValidation['city']}}</span>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n          <input type=\"hidden\" [(ngModel)]=\"dbItem.companyId\" [ngModelOptions]=\"{standalone: true}\">\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary\" (click)=\"updateCompanyInfo()\">Update</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/company/company.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(router, storeService, userService) {
        this.router = router;
        this.storeService = storeService;
        this.userService = userService;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.dbItem = this.storeService.getLoginUserData().company;
    };
    CompanyComponent.prototype.updateCompanyInfo = function () {
        var _this = this;
        this.errorValidation = {};
        var errorData = this.validateDataBeforeSubmit();
        if (!errorData.hasError) {
            this.userService.updateCompanyInfo(this.dbItem).subscribe(function (data) {
                _this.storeService.getLoginUserData().company = data;
                _this.router.navigate(['/dashboard']);
            });
        }
        else {
            this.errorValidation = errorData.mapErrors;
        }
    };
    CompanyComponent.prototype.validateDataBeforeSubmit = function () {
        var hasError = false;
        var mapErrors = {};
        if (this.dbItem.name == null || this.dbItem.name.trim() === '') {
            hasError = true;
            mapErrors['name'] = 'Please enter the Company Name!';
        }
        if (this.dbItem.phone == null || this.dbItem.phone.trim() === '') {
            hasError = true;
            mapErrors['phone'] = 'Please enter the Phone Number';
        }
        if (this.dbItem.website == null || this.dbItem.website.trim() === '') {
            hasError = true;
            mapErrors['website'] = 'Please enter the website!';
        }
        if (this.dbItem.email == null || this.dbItem.email.trim() === '') {
            hasError = true;
            mapErrors['email'] = 'Please enter the email';
        }
        return {
            hasError: hasError, mapErrors: mapErrors
        };
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/components/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"wrapper\">\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n\n      <div class=\"container\">\n        <app-breadcrumb></app-breadcrumb>\n      </div>\n\n      <div class=\"container\">\n        <router-outlet></router-outlet>\n      </div>\n\n      <!--<section class=\"content\">-->\n      <!---->\n      <!--</section>-->\n<!---->\n      <!--<section class=\"content\">-->\n        <!---->\n      <!--</section>-->\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n"

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
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dashboard/dashboard.service */ "./src/app/services/dashboard/dashboard.service.ts");
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
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.validateMachineData();
    };
    DashboardComponent.prototype.validateMachineData = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/edit-formula/edit-formula.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/formula/edit-formula/edit-formula.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n  <h1>{{viewMode}} Formula</h1>\n</div>\n\n<div class=\"row\" *ngIf=\"dbItem != null\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card filter-card\">\n      <div class=\"card-header\">\n        Standard Formula\n      </div>\n\n      <div class=\"card-body\">\n        <form class=\"form form-horizontal form-detail\">\n          <div class=\"form-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 label-control\">Formula Code</label>\n              <div class=\"input-group input-group-sm col-md-4\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.formula.formulaCode\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" (change)=\"clearErrorField('formulaCode')\">\n                <ng-container *ngIf=\"errorValidation['formulaCode'] != null\">\n                  <span class=\"error-label\">{{errorValidation['formulaCode']}}</span>\n                </ng-container>\n              </div>\n\n              <label class=\"col-md-2 label-control\">Formula name</label>\n              <div class=\"input-group input-group-sm col-md-4\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.formula.formulaName\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" (change)=\"clearErrorField('formulaName')\">\n                <ng-container *ngIf=\"errorValidation['formulaName'] != null\">\n                  <span class=\"error-label\">{{errorValidation['formulaName']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 label-control\">Collection</label>\n              <div class=\"col-md-4\">\n                <select class=\"form-control form-control-sm select-sm\" [(ngModel)]=\"dbItem.formula.collection.collectionId\" [ngModelOptions]=\"{standalone: true}\"  (change)=\"clearErrorField('collectionId')\">\n                  <option [ngValue]=\"undefined\">Choose Collection</option>\n                  <option *ngFor=\"let c of listCollections\" [ngValue]=\"c.collectionId\">{{c.collectionName}}</option>\n                </select>\n\n                <ng-container *ngIf=\"errorValidation['collectionId'] != null\">\n                  <span class=\"error-label\">{{errorValidation['collectionId']}}</span>\n                </ng-container>\n              </div>\n\n              <label class=\"col-md-2 label-control\">Product</label>\n              <div class=\"col-md-4\">\n                {{dbItem.productBase.product.productCode}} : {{dbItem.productBase.product.productName}}\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 label-control\">Approximate color</label>\n              <div class=\"col-md-4\">\n                <input [value]=\"dbItem.formula.approximateColor\" [style.background]=\"dbItem.formula.approximateColor\" [(colorPicker)]=\"dbItem.formula.approximateColor\" (colorPickerChange)=\"clearErrorField('approximateColor')\"/>\n\n                <ng-container *ngIf=\"errorValidation['approximateColor'] != null\">\n                  <span class=\"error-label\">{{errorValidation['approximateColor']}}</span>\n                </ng-container>\n              </div>\n\n              <label class=\"col-md-2 label-control\">Formula Date</label>\n              <div class=\"col-md-4\">\n                {{dbItem.formula.createdDate | date : 'dd/MM/yyyy'}}\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 label-control\">Substrate</label>\n              <div class=\"col-md-4\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.formula.substrate\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n\n              <label class=\"col-md-2 label-control\">Barcode</label>\n              <div class=\"col-md-4\">\n                <!--{{dbItem.productBase.product}}-->\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-2 label-control\">Comment</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"dbItem.formula.comment\" [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width': '100%', 'min-height': (1.2 * 4) +'em'}\">{{dbItem.formula.comment}}</textarea>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"row\" *ngIf=\"listCustomerSelected != null && listCustomerSelected.length > 0\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-bordered\">\n              <tr>\n                <th>#</th>\n                <th>Name</th>\n                <th>Phone Number</th>\n                <th>Email</th>\n                <th>Address</th>\n              </tr>\n\n              <tr *ngFor=\"let customerSelected of listCustomerSelected\">\n                <td>\n                  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"customerSelected.checked\"></mat-checkbox>\n                </td>\n                <td>{{customerSelected.customer.name}}</td>\n                <td>{{customerSelected.customer.phone}}</td>\n                <td>{{customerSelected.customer.email}}</td>\n                <td>{{customerSelected.customer.address}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"row\">\n          <label class=\"col-md-3 label-control\"></label>\n          <div class=\"col-md-9\">\n            <button class=\"btn btn-primary mr-3\" (click)=\"saveOrUpdateFormula('saving')\">\n              <span *ngIf=\"viewMode == 'Add'\">Save</span>\n              <span *ngIf=\"viewMode == 'Edit'\">Update</span>\n            </button>\n\n            <button class=\"btn btn-default mr-3\" (click)=\"goToFormulaPage()\">\n              Back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"dbItem != null && listColourants != null\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card filter-card\">\n      <div class=\"card-header\">\n        Formula Detail\n      </div>\n\n      <div class=\"card-body\">\n        <form class=\"form form-horizontal form-detail\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"row\">\n                <div class=\"card-subtitle col-md-12\">\n                  <h4>Contents</h4>\n                </div>\n                <div class=\"col-md-12\">\n                  <ng-container *ngIf=\"errorValidation['listColourants'] != null\">\n                    <span class=\"error-label\">{{errorValidation['listColourants']}}</span>\n                  </ng-container>\n                  <app-table-colourants [listFormulaColorant]=\"listColourants\" [canSize]=\"1\" [baseOnCan]=\"dbItem.formula.baseOnCan\" [maxColorQuantity]=\"getMaxColourantValue(listColourants)\"></app-table-colourants>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <br />\n                  <br />\n                </div>\n\n                <div class=\"col-md-12\">\n                  <app-base-can [productBase]=\"dbItem.productBase\" [canSize]=\"1\" [collection]=\"dbItem.formula.collection\"></app-base-can>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <br />\n                <br />\n              </div>\n\n              <div class=\"row text-center\" *ngIf=\"dbItem.formula == null || dbItem.formula.formulaId == null\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveOrUpdateFormula('template')\">Dispense Manual</button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"row\">\n                <div class=\"card-subtitle col-md-12\">\n                  <h4>Components</h4>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 label-control\">Product</label>\n                    <div class=\"col-md-8\">\n                      <select class=\"form-control form-control-sm select-sm\" [(ngModel)]=\"selectedProductId\" [ngModelOptions]=\"{standalone: true}\" (change)=\"getListProductBase(); clearErrorField('productId')\">\n                        <option [ngValue]=\"undefined\">Choose Product</option>\n                        <option *ngFor=\"let c of listProducts\" [ngValue]=\"c.productId\">{{c.productCode}}</option>\n                      </select>\n\n                      <ng-container *ngIf=\"errorValidation['productId'] != null\">\n                        <span class=\"error-label\">{{errorValidation['productId']}}</span>\n                      </ng-container>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 label-control\">Base</label>\n                    <div class=\"col-md-8\">\n                      <select class=\"form-control form-control-sm select-sm\" [(ngModel)]=\"selectedProductBaseId\" [ngModelOptions]=\"{standalone: true}\" (change)=\"updateCurrentProductBase(); clearErrorField('baseId')\">\n                        <option [ngValue]=\"undefined\">Choose Base</option>\n                        <option *ngFor=\"let pb of listProductBases\" [ngValue]=\"pb.productBaseId\">{{pb.base.baseName}} ({{pb.base.baseCode}})</option>\n                      </select>\n\n                      <ng-container *ngIf=\"errorValidation['baseId'] != null\">\n                        <span class=\"error-label\">{{errorValidation['baseId']}}</span>\n                      </ng-container>\n                    </div>\n                  </div>\n\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 label-control\">Base On Can</label>\n                    <div class=\"col-md-8\">\n                      <input type=\"number\" [(ngModel)]=\"dbItem.formula.baseOnCan\" [ngModelOptions]=\"{standalone: true}\"  (change)=\"updateCurrentProductBase(); clearErrorField('baseOnCan')\"/>\n\n                      <ng-container *ngIf=\"errorValidation['baseOnCan'] != null\">\n                        <span class=\"error-label\">{{errorValidation['baseOnCan']}}</span>\n                      </ng-container>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"card-subtitle col-md-12\">\n                  <h4>Colourants</h4>\n                </div>\n\n                <ng-container *ngFor=\"let colour of listColourants\">\n                  <div class=\"col-md-6 colourant-group\">\n                    <div class=\"row\">\n                      <label class=\"col-md-8 label-control\">\n                        <span class=\"colour-bar\" [ngStyle]=\"{'background': colour.colourant.rbgHex}\">{{colour.colourant.colourantCode}} : {{colour.colourant.colourantName}}</span>\n                      </label>\n                      <div class=\"col-md-4\">\n                        <input type=\"number\" [(ngModel)]=\"colour.quantity\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"  (change)=\"clearErrorField('listColourants')\">\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-container *ngIf=\"updateMessage != null\">\n  <pp-modal id=\"show-update-formula-model\" class=\"modal show-update-formula-model\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{updateMessage.title}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('show-update-formula-model')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        {{updateMessage.message}}\n      </div>\n\n      <div class=\"modal-footer\">\n        <ng-container *ngIf=\"updateMessage.title == 'Error'\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('show-update-formula-model')\">Close</button>\n        </ng-container>\n\n        <ng-container *ngIf=\"updateMessage.title != 'Error'\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal('show-update-formula-model')\">OK</button>\n        </ng-container>\n      </div>\n    </div>\n  </pp-modal>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/formula/edit-formula/edit-formula.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/formula/edit-formula/edit-formula.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colourant-group {\n  margin-bottom: 10px; }\n  .colourant-group .colour-bar {\n    display: inline-block;\n    width: 100%;\n    min-height: 1em;\n    border: 1px solid #000;\n    padding: 3px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2VkaXQtZm9ybXVsYS9HOlxcV29ya3NwYWNlXFxjbGllbnR2aWV0cG93ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm11bGFcXGVkaXQtZm9ybXVsYVxcZWRpdC1mb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CLEVBU3BCO0VBVkQ7SUFJSSxzQkFBcUI7SUFDckIsWUFBVztJQUNYLGdCQUFlO0lBQ2YsdUJBQXNCO0lBQ3RCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9lZGl0LWZvcm11bGEvZWRpdC1mb3JtdWxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG91cmFudC1ncm91cHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuY29sb3VyLWJhcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/formula/edit-formula/edit-formula.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/edit-formula/edit-formula.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditFormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormulaComponent", function() { return EditFormulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/formula_product_base */ "./src/app/models/formula_product_base.ts");
/* harmony import */ var _models_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/formula */ "./src/app/models/formula.ts");
/* harmony import */ var _models_product_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/product_base */ "./src/app/models/product_base.ts");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/formula/formula.service */ "./src/app/services/formula/formula.service.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/collection */ "./src/app/models/collection.ts");
/* harmony import */ var _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/colorant/colorant.service */ "./src/app/services/colorant/colorant.service.ts");
/* harmony import */ var _models_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../models/base */ "./src/app/models/base.ts");
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/customer/customer.service */ "./src/app/services/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EditFormulaComponent = /** @class */ (function () {
    function EditFormulaComponent(router, route, modalService, colourantService, formulaService, customerService, collectionService, productService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.colourantService = colourantService;
        this.formulaService = formulaService;
        this.customerService = customerService;
        this.collectionService = collectionService;
        this.productService = productService;
        this.viewMode = null;
        this.listProducts = null;
        this.listProductBases = null;
        this.listCollections = null;
        this.listColourants = null;
        this.listCustomerSelected = [];
        this.listFormulaCustomer = [];
        this.errorValidation = null;
        this.updateMessage = null;
    }
    EditFormulaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateMessage = null;
        this.errorValidation = {};
        this.route.params.subscribe(function (params) {
            _this.formulaProductBaseId = params.id != null && params.id.trim() !== '' ? parseInt(params.id) : null;
            if (_this.formulaProductBaseId != null && _this.formulaProductBaseId > 0) {
                _this.viewMode = 'Edit';
                _this.loadCurrentFormulaProductBase();
            }
            else {
                _this.viewMode = 'Add';
                _this.generateNewFormulaProductBase();
            }
            _this.loadRelativeData();
        });
    };
    EditFormulaComponent.prototype.generateNewFormulaProductBase = function () {
        var collection = new _models_collection__WEBPACK_IMPORTED_MODULE_9__["CollectionModel"]();
        var formula = new _models_formula__WEBPACK_IMPORTED_MODULE_3__["FormulaModel"]();
        formula.approximateColor = '';
        formula.collection = collection;
        formula.baseOnCan = 1;
        var product = new _models_product__WEBPACK_IMPORTED_MODULE_8__["ProductModel"]();
        var base = new _models_base__WEBPACK_IMPORTED_MODULE_11__["BaseModel"]();
        var productBase = new _models_product_base__WEBPACK_IMPORTED_MODULE_4__["ProductBaseModel"]();
        productBase.product = product;
        productBase.base = base;
        this.dbItem = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"]();
        this.dbItem.formula = formula;
        this.dbItem.productBase = productBase;
        this.loadColourantDatas();
    };
    EditFormulaComponent.prototype.loadCurrentFormulaProductBase = function () {
        var _this = this;
        this.formulaService.findFormulaProductBaseById(this.formulaProductBaseId).subscribe(function (data) {
            _this.dbItem = data;
            _this.selectedProductBase = _this.dbItem.productBase;
            _this.selectedProduct = _this.dbItem.productBase.product;
            _this.selectedProductBaseId = _this.selectedProductBase.productBaseId;
            _this.selectedProductId = _this.selectedProduct.productId;
            _this.getListProductBase();
            _this.loadColourantDatas();
        });
    };
    EditFormulaComponent.prototype.loadRelativeData = function () {
        var _this = this;
        this.listProducts = [];
        this.productService.getListItems().subscribe(function (datas) {
            _this.listProducts = datas;
        });
        this.listCollections = [];
        this.collectionService.getListItems().subscribe(function (datas) {
            _this.listCollections = datas;
        });
        this.listCustomerSelected = [];
        this.customerService.findAll().subscribe(function (datas) {
            datas.map(function (c) {
                var customerSelected = new _models_customer__WEBPACK_IMPORTED_MODULE_13__["CustomerSelectedModel"]();
                customerSelected.customer = c;
                customerSelected.checked = false;
                _this.listCustomerSelected.push(customerSelected);
            });
        });
        this.listFormulaCustomer = [];
        this.formulaService.findAllByCustomer().subscribe(function (datas) {
            _this.listFormulaCustomer = datas;
            if (_this.listFormulaCustomer != null && _this.listFormulaCustomer.length > 0) {
                var _loop_1 = function (formulaCustomer) {
                    var filterCustomerIdx = _this.listCustomerSelected.findIndex(function (item) {
                        return item.customer.customerId === formulaCustomer.customer.customerId;
                    });
                    if (filterCustomerIdx != null && filterCustomerIdx > -1) {
                        console.log(filterCustomerIdx);
                        _this.listCustomerSelected[filterCustomerIdx].checked = true;
                    }
                };
                for (var _i = 0, _a = _this.listFormulaCustomer; _i < _a.length; _i++) {
                    var formulaCustomer = _a[_i];
                    _loop_1(formulaCustomer);
                }
            }
        });
    };
    EditFormulaComponent.prototype.getListProductBase = function () {
        var _this = this;
        if (this.selectedProductId != null && this.selectedProductId !== undefined) {
            var selectedProduct = this.listProducts.find(function (item) {
                return item.productId === _this.selectedProductId;
            });
            if (selectedProduct != null) {
                this.selectedProduct = selectedProduct;
                this.dbItem.productBase.product = this.selectedProduct;
            }
            this.listProductBases = [];
            this.productService.getListProductBaseFromProduct(this.selectedProductId).subscribe(function (datas) {
                _this.listProductBases = datas;
            });
        }
    };
    EditFormulaComponent.prototype.updateCurrentProductBase = function () {
        var _this = this;
        var selectedProductBase = this.listProductBases.find(function (item) {
            return item.productBaseId === _this.selectedProductBaseId && item.product.productId === _this.selectedProductId;
        });
        if (selectedProductBase != null) {
            this.selectedProductBase = selectedProductBase;
            this.dbItem.productBase = this.selectedProductBase;
        }
    };
    EditFormulaComponent.prototype.loadColourantDatas = function () {
        var _this = this;
        this.colourantService.getListItems().subscribe(function (datas) {
            _this.listColourants = [];
            for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
                var colour = datas_1[_i];
                var formulaColourant = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaColourantModel"]();
                formulaColourant.colourant = colour;
                formulaColourant.formula = _this.dbItem.formula;
                formulaColourant.quantity = null;
                _this.listColourants.push(formulaColourant);
            }
            if (_this.dbItem != null && _this.dbItem.formulaProductBaseId != null && _this.dbItem.formulaProductBaseId > 0) {
                _this.formulaService.getListColorantOfFormula(_this.dbItem.formula.formulaId).subscribe(function (result) {
                    var listColourantDb = result;
                    var _loop_2 = function (colour) {
                        var existColourantIndex = _this.listColourants.findIndex(function (item) {
                            return item.colourant.colourantId === colour.colourant.colourantId;
                        });
                        if (existColourantIndex != null) {
                            _this.listColourants[existColourantIndex].quantity = colour.quantity;
                        }
                    };
                    for (var _i = 0, listColourantDb_1 = listColourantDb; _i < listColourantDb_1.length; _i++) {
                        var colour = listColourantDb_1[_i];
                        _loop_2(colour);
                    }
                });
            }
        });
    };
    EditFormulaComponent.prototype.getMaxColourantValue = function (listFormulaColorant) {
        var maxQuantity = 0;
        for (var _i = 0, listFormulaColorant_1 = listFormulaColorant; _i < listFormulaColorant_1.length; _i++) {
            var c = listFormulaColorant_1[_i];
            if (c.quantity != null && c.quantity > 0) {
                if (maxQuantity == null || maxQuantity < c.quantity) {
                    maxQuantity = c.quantity;
                }
            }
        }
        return maxQuantity;
    };
    EditFormulaComponent.prototype.validateDataBeforeSubmit = function (type) {
        var hasError = false;
        var mapErrors = {};
        // when type is saving --> validate the formula
        if (type === 'saving') {
            if (this.dbItem.formula.formulaCode == null || this.dbItem.formula.formulaCode.trim() === '') {
                hasError = true;
                mapErrors['formulaCode'] = 'Please enter the formula code';
            }
            if (this.dbItem.formula.formulaName == null || this.dbItem.formula.formulaName.trim() === '') {
                hasError = true;
                mapErrors['formulaName'] = 'Please enter the formula name';
            }
            if (this.dbItem.formula.collection == null || this.dbItem.formula.collection.collectionId == null) {
                hasError = true;
                mapErrors['collectionId'] = 'Please select the collection';
            }
            if (this.dbItem.formula.approximateColor == null || this.dbItem.formula.approximateColor.trim() === '') {
                hasError = true;
                mapErrors['approximateColor'] = 'Please select the collection';
            }
        }
        if (this.dbItem.formula.baseOnCan == null) {
            hasError = true;
            mapErrors['baseOnCan'] = 'Please enter the base on can (Default 1)';
        }
        if (this.selectedProductBase == null || this.selectedProductBase.product == null
            || this.selectedProductBase.product.productId == null) {
            hasError = true;
            mapErrors['productId'] = 'Please select the product';
        }
        if (this.selectedProductBase == null || this.selectedProductBase.base == null || this.selectedProductBase.base.baseId == null) {
            hasError = true;
            mapErrors['baseId'] = 'Please select the base';
        }
        if (this.listColourants == null || this.listColourants.length === 0) {
            hasError = true;
            mapErrors['listColourants'] = 'Please add colourants detail.';
        }
        else {
            var listColourant = this.listColourants.filter(function (item) {
                return item.quantity > 0;
            });
            if (listColourant == null || listColourant.length === 0) {
                hasError = true;
                mapErrors['listColourants'] = 'Please add colourants detail.';
            }
        }
        return {
            hasError: hasError, mapErrors: mapErrors
        };
    };
    EditFormulaComponent.prototype.clearErrorField = function (field) {
        this.errorValidation[field] = null;
    };
    EditFormulaComponent.prototype.saveOrUpdateFormula = function (type) {
        this.errorValidation = {};
        this.updateMessage = null;
        var validateData = this.validateDataBeforeSubmit(type);
        if (!validateData.hasError) {
            this.updateOrSavingDispenseFormula(type);
        }
        else {
            this.errorValidation = validateData.mapErrors;
        }
    };
    EditFormulaComponent.prototype.updateOrSavingDispenseFormula = function (type) {
        var _this = this;
        if (type === 'template') {
            this.dbItem.formula.formulaCode = 'TEMPLATE FORMULA';
        }
        this.formulaService.saveOrUpdateFormulaData(this.dbItem.formulaProductBaseId, this.dbItem.formula, this.selectedProductBase, this.listColourants, this.listCustomerSelected).subscribe(function (datas) {
            if (datas.formulaProductBaseId != null) {
                if (_this.dbItem.formulaProductBaseId == null) {
                    _this.updateMessage = {
                        title: 'Save',
                        message: 'Saving the formula successful!.'
                    };
                }
                else {
                    _this.updateMessage = {
                        title: 'Update',
                        message: 'Update the formula successful!.'
                    };
                }
            }
            else {
                _this.updateMessage = {
                    title: 'Error',
                    message: 'Have problem when saving the formula. Please retry.'
                };
            }
            if (type === 'saving') {
                setTimeout(function () {
                    _this.openModal('show-update-formula-model');
                }, 1);
            }
            else {
                _this.router.navigate(["../dashboard/view-formula/" + datas.formulaProductBaseId]);
            }
        });
    };
    EditFormulaComponent.prototype.goToFormulaPage = function () {
        try {
            this.closeModal('show-update-formula-model');
        }
        catch (e) {
        }
        this.router.navigate(["../dashboard/formula"]);
    };
    EditFormulaComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    EditFormulaComponent.prototype.closeModal = function (id) {
        if (this.updateMessage != null && this.updateMessage.title != null && this.updateMessage.title !== 'Error') {
            this.modalService.close(id);
            this.updateMessage = null;
            this.router.navigate(["../dashboard/formula"]);
        }
        else {
            this.modalService.close(id);
            this.updateMessage = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"])
    ], EditFormulaComponent.prototype, "dbItem", void 0);
    EditFormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-formula',
            template: __webpack_require__(/*! ./edit-formula.component.html */ "./src/app/components/formula/edit-formula/edit-formula.component.html"),
            styles: [__webpack_require__(/*! ./edit-formula.component.scss */ "./src/app/components/formula/edit-formula/edit-formula.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
            _services_colorant_colorant_service__WEBPACK_IMPORTED_MODULE_10__["ColourantService"],
            _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_6__["FormulaService"],
            _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_14__["CustomerService"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"],
            _services_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]])
    ], EditFormulaComponent);
    return EditFormulaComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/formula/formula.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/formula/formula/formula.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngStyle]=\"{'display' : viewItem != null ? 'none': 'block'}\">\n  <app-list-formula (selectedFormula)=\"selectFormula($event)\"></app-list-formula>\n</div>\n\n<ng-container *ngIf=\"viewItem\">\n  <app-viewformula [dbItem]=\"viewItem\"></app-viewformula>\n</ng-container>\n\n<ng-container *ngIf=\"editItem\">\n  <app-edit-formula [dbItem]=\"editItem\"></app-edit-formula>\n</ng-container>\n\n<ng-container *ngIf=\"addItem\">\n  <app-edit-formula [dbItem]=\"addItem\"></app-edit-formula>\n</ng-container>\n\n<ng-container *ngIf=\"viewItem\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button class=\"btn btn-primary push-left\" (click)=\"clearSelectedFormula()\"><i class=\"fas fa-arrow-circle-left\"></i> Back</button>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/formula/formula/formula.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/formula/formula/formula.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS9mb3JtdWxhL2Zvcm11bGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/formula/formula/formula.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/formula/formula/formula.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaComponent", function() { return FormulaComponent; });
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

var FormulaComponent = /** @class */ (function () {
    function FormulaComponent() {
        this.viewItem = null;
        this.editItem = null;
        this.addItem = null;
    }
    FormulaComponent.prototype.ngOnInit = function () {
    };
    FormulaComponent.prototype.selectFormula = function (selectedFormula) {
        this.viewItem = selectedFormula;
    };
    FormulaComponent.prototype.clearSelectedFormula = function () {
        this.viewItem = null;
        this.editItem = null;
        this.addItem = null;
    };
    FormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formula',
            template: __webpack_require__(/*! ./formula.component.html */ "./src/app/components/formula/formula/formula.component.html"),
            styles: [__webpack_require__(/*! ./formula.component.scss */ "./src/app/components/formula/formula/formula.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormulaComponent);
    return FormulaComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/list-formula/list-formula.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/formula/list-formula/list-formula.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>List Formula</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card filter-card\">\r\n      <div class=\"card-header\">\r\n        Filter\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form class=\"form form-horizontal form-detail\">\r\n          <div class=\"form-body\">\r\n            <div class=\"form-group row\" *ngIf=\"listFormulas\">\r\n              <label class=\"col-md-3 label-control\">Select Color</label>\r\n              <div class=\"input-group input-group-sm col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedFormulaFilter\" name=\"selectedFormulaFilter\" [(ngModel)]=\"filter.formulaId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Color</option>\r\n                  <option *ngFor=\"let f of listFormulas\" [ngValue]=\"f.formulaId\">{{f.formulaName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"listCollections\">\r\n              <label class=\"col-md-3 label-control\">Select Collection</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedCollectionFilter\" name=\"selectedCollectionFilter\" [(ngModel)]=\"filter.collectionId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Collection</option>\r\n                  <option *ngFor=\"let c of listCollections\" [ngValue]=\"c.collectionId\">{{c.collectionName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"listProducts\">\r\n              <label class=\"col-md-3 label-control\">Select Product</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedProductFilter\" name=\"selectedProductFilter\" [(ngModel)]=\"filter.productId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Product</option>\r\n                  <option *ngFor=\"let c of listProducts\" [ngValue]=\"c.productId\">{{c.productCode}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"listBases\">\r\n              <label class=\"col-md-3 label-control\">Select Base</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedProductBaseFilter\" name=\"selectedProductFilter\" [(ngModel)]=\"filter.baseId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Base</option>\r\n                  <option *ngFor=\"let c of listBases\" [ngValue]=\"c.baseId\">{{c.baseName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"listCustomer\">\r\n              <label class=\"col-md-3 label-control\">Select Customer</label>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control form-control-sm select-sm select-color-field\" id=\"selectedCustomerFilter\" name=\"selectedProductFilter\" [(ngModel)]=\"filter.customerId\" (ngModelChange)=\"onFilterChange($event)\">\r\n                  <option [ngValue]=\"undefined\">Choose Customer</option>\r\n                  <option *ngFor=\"let c of listCustomer\" [ngValue]=\"c.customerId\">{{c.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-actions text-center\">\r\n            <button class=\"btn btn-primary mr-3\" (click)=\"refresh()\">Search</button>\r\n            <button class=\"btn btn-default\" (click)=\"reset()\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"pagenationMode\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Colorant\r\n\r\n        <button class=\"close\" (click)=\"addNewFormula()\" matTooltip=\"Add Formula\" aria-label=\"Add Formula\"><i class=\"fas fa-plus-square\"></i></button>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <!--matSort (matSortChange)=\"sortData($event)\"-->\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n            <tr>\r\n              <th mat-sort-header=\"formulaCode\">Formula Code</th>\r\n              <th mat-sort-header=\"formulaName\">Formula Name</th>\r\n              <th mat-sort-header=\"approximateColor\">Approximate<br />Color</th>\r\n              <th mat-sort-header=\"collection\">Collection\r\n              <th mat-sort-header=\"product\">Product</th>\r\n              <th mat-sort-header=\"createdDate\">Created Date</th>\r\n              <th mat-sort-header=\"createdBy\">Created By</th>\r\n              <th>Action</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of pagenationMode.listItems\">\r\n              <td>{{item.formula.formulaCode}}</td>\r\n              <td>{{item.formula.formulaName}}</td>\r\n              <td class=\"text-center\"><span [ngStyle]=\"{'background': item.formula.approximateColor, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span></td>\r\n              <td>{{item.formula.collection.collectionName}}</td>\r\n              <td>{{item.productBase.product.productName}}</td>\r\n              <td>{{item.formula.createdDate | date: 'dd/MM/yyyy'}}</td>\r\n              <td> {{item.formula.machine != null && item.formula.machine.machineId > 0 ? 'Me' : 'System'}}</td>\r\n              <td [ngStyle]=\"{'white-space': 'nowrap'}\">\r\n                <button mat-raised-button matTooltip=\"View Formula\" aria-label=\"View Formula\" (click)=\"viewFormula(item)\">\r\n                  <i class=\"fas fa-info-circle\"></i>\r\n                </button>\r\n\r\n                <ng-container *ngIf=\"item.formula.machine != null && item.formula.machine.machineId > 0\">\r\n                  <span class=\"vertical-separate-line\">&nbsp;</span>\r\n\r\n                  <button mat-raised-button matTooltip=\"Edit Formula\" aria-label=\"Edit Formula\" (click)=\"editTheFormula(item.formulaProductBaseId)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </ng-container>\r\n            </tr>\r\n\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"100%\">\r\n                Show {{pagenationMode.listItems.length}} of  {{pagenationMode.totalItem}} items.\r\n\r\n                <span class=\"pagenation-footer\" style=\"float: right\">\r\n                  <span *ngIf=\"pagenationMode.pageIndex > 0\" (click)=\"goToPage(pagenationMode.pageIndex - 1)\" class=\"btn-action\"><</span>\r\n                  <span>{{pagenationMode.pageIndex + 1}}</span>\r\n                  <span *ngIf=\"pagenationMode.pageIndex * pagenationMode.maxPageItem + pagenationMode.maxPageItem < pagenationMode.totalItem\"  (click)=\"goToPage(pagenationMode.pageIndex + 1)\" class=\"btn-action\">></span>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/formula/list-formula/list-formula.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/formula/list-formula/list-formula.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-color-field {\n  width: 100%; }\n\n.select2.select2-container {\n  min-width: 300px;\n  width: 100%; }\n\n.pagenation-footer {\n  float: right; }\n\n.pagenation-footer span {\n    display: inline-block;\n    min-width: 50px;\n    text-align: center;\n    padding: 5px 10px; }\n\n.pagenation-footer span.btn-action {\n      border: 1px solid #ccc;\n      cursor: pointer; }\n\n.vertical-separate-line {\n  margin-left: 0.25em;\n  margin-right: 0.25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2xpc3QtZm9ybXVsYS9HOlxcV29ya3NwYWNlXFxjbGllbnR2aWV0cG93ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm11bGFcXGxpc3QtZm9ybXVsYVxcbGlzdC1mb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDWjs7QUFHRDtFQUNFLGFBQVksRUFhYjs7QUFkRDtJQUdJLHNCQUFxQjtJQUVyQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFNbEI7O0FBYkg7TUFVTSx1QkFBc0I7TUFDdEIsZ0JBQWUsRUFDaEI7O0FBS0w7RUFDRSxvQkFBbUI7RUFDbkIscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL2xpc3QtZm9ybXVsYS9saXN0LWZvcm11bGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNvbG9yLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VsZWN0Mi5zZWxlY3QyLWNvbnRhaW5lcntcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnBhZ2VuYXRpb24tZm9vdGVye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICAgICYuYnRuLWFjdGlvbntcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi52ZXJ0aWNhbC1zZXBhcmF0ZS1saW5le1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/formula/list-formula/list-formula.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/list-formula/list-formula.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListFormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFormulaComponent", function() { return ListFormulaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/formula/formula.service */ "./src/app/services/formula/formula.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/customer/customer.service */ "./src/app/services/customer/customer.service.ts");
/* harmony import */ var _models_pagination_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/pagination.model */ "./src/app/models/pagination.model.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../file.service */ "./src/app/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListFormulaComponent = /** @class */ (function () {
    function ListFormulaComponent(storeService, formulaService, collectionService, productService, customerService, fileService, router) {
        this.storeService = storeService;
        this.formulaService = formulaService;
        this.collectionService = collectionService;
        this.productService = productService;
        this.customerService = customerService;
        this.fileService = fileService;
        this.router = router;
        this.selectedFormula = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentSort = null;
        this.listFormulas = [];
        this.listCollections = [];
        this.listProducts = [];
        this.listCustomer = [];
        this.listFormulaCustomer = [];
        this.pagenationMode = new _models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PagenationModel"]([], 0, 0, 15);
        this.sortData = function (sort) {
            this.currentSort = sort;
            this.refresh();
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
    ListFormulaComponent.prototype.ngOnInit = function () {
        this.listItems = [];
        this.listOriginal = [];
        this.sortedData = [];
        this.filter = {
            formulaId: undefined,
            collectionId: undefined,
            baseId: undefined,
            productId: undefined,
            customerId: undefined
        };
        if (this.storeService.getMachineData() != null && this.storeService.getMachineData().machineId > 0) {
            this.initMetadata();
        }
    };
    ListFormulaComponent.prototype.initMetadata = function () {
        var _this = this;
        // get list formula product base
        this.listItems = [];
        this.listOriginal = [];
        this.formulaService.getAllFormulaProductBase().subscribe(function (datas) {
            datas.map(function (fpb) {
                _this.listItems.push(fpb);
                _this.listOriginal.push(fpb);
            });
            _this.updateRelativeData();
            _this.updateCustomerForFormula();
            _this.updatePagenationMode();
        });
        this.listCustomer = [];
        this.customerService.findAll().subscribe(function (datas) {
            _this.listCustomer = datas;
        });
        this.listFormulaCustomer = [];
        this.formulaService.findAllByCustomer().subscribe(function (_datas) {
            _this.listFormulaCustomer = _datas;
            _this.updateCustomerForFormula();
        });
    };
    ListFormulaComponent.prototype.updateRelativeData = function () {
        this.listFormulas = [];
        this.listCollections = [];
        this.listProducts = [];
        this.listBases = [];
        var _loop_1 = function (item) {
            var exitsFormula = this_1.listFormulas.filter(function (_item) { return _item.formulaId === item.formula.formulaId; });
            if (exitsFormula == null || exitsFormula.length === 0) {
                this_1.listFormulas.push(item.formula);
            }
            var exitsCollection = this_1.listCollections.filter(function (_item) { return _item.collectionId === item.formula.collection.collectionId; });
            if (exitsCollection == null || exitsCollection.length === 0) {
                this_1.listCollections.push(item.formula.collection);
            }
            var exitsProduct = this_1.listProducts.filter(function (_item) { return _item.productId === item.productBase.product.productId; });
            if (exitsProduct == null || exitsProduct.length === 0) {
                this_1.listProducts.push(item.productBase.product);
            }
            var existBase = this_1.listBases.filter(function (_item) { return _item.baseId === item.productBase.base.baseId; });
            if (existBase == null || existBase.length === 0) {
                this_1.listBases.push(item.productBase.base);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    ListFormulaComponent.prototype.updateCustomerForFormula = function () {
        if (this.listFormulaCustomer != null && this.listFormulaCustomer.length > 0 && this.listItems != null && this.listItems.length > 0) {
            var _loop_2 = function (formulaCustomer) {
                var listFormulaBase = this_2.listItems.filter(function (item) {
                    return item.formula.formulaId === formulaCustomer.formula.formulaId;
                });
                if (listFormulaBase != null && listFormulaBase.length > 0) {
                    for (var _i = 0, listFormulaBase_1 = listFormulaBase; _i < listFormulaBase_1.length; _i++) {
                        var formulaBase = listFormulaBase_1[_i];
                        if (formulaBase.formula != null && (formulaBase.formula.listCustomer == null || formulaBase.formula.listCustomer === undefined)) {
                            formulaBase.formula.listCustomer = [];
                        }
                        formulaBase.formula.listCustomer.push(formulaCustomer.customer);
                    }
                }
            };
            var this_2 = this;
            for (var _i = 0, _a = this.listFormulaCustomer; _i < _a.length; _i++) {
                var formulaCustomer = _a[_i];
                _loop_2(formulaCustomer);
            }
        }
    };
    ListFormulaComponent.prototype.testElectron = function () {
        this.fileService.saveFile();
    };
    ListFormulaComponent.prototype.viewFormula = function (selectItem) {
        this.selectedFormula.emit(selectItem);
        // this.router.navigate([`../dashboard/view-formula/${formulaProductBaseId}`]);
    };
    ListFormulaComponent.prototype.onFilterChange = function (event) {
        this.refresh();
    };
    ListFormulaComponent.prototype.reset = function () {
    };
    ListFormulaComponent.prototype.refresh = function () {
        var _this = this;
        var resFilter = this.listOriginal;
        if (this.filter.formulaId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.formula.formulaId === _this.filter.formulaId;
            });
        }
        if (this.filter.collectionId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.formula.collection.collectionId === _this.filter.collectionId;
            });
        }
        if (this.filter.productId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.productBase.product.productId === _this.filter.productId;
            });
        }
        if (this.filter.baseId) {
            resFilter = resFilter.filter(function (fpb) {
                return fpb.productBase.base.baseId === _this.filter.baseId;
            });
        }
        if (this.filter.customerId) {
            resFilter = resFilter.filter(function (fpb) {
                var isExis = false;
                if (fpb.formula.listCustomer != null && fpb.formula.listCustomer.length > 0) {
                    var index = fpb.formula.listCustomer.findIndex(function (customer) {
                        return customer.customerId === _this.filter.customerId;
                    });
                    if (index != null && index > -1) {
                        isExis = true;
                    }
                }
                return isExis;
            });
        }
        this.listItems = resFilter;
        this.updateRelativeData();
        if (this.currentSort == null || !this.currentSort.active || this.currentSort.direction === '') {
            this.listItems = resFilter;
        }
        else {
            this.listItems = resFilter.sort(function (a, b) {
                var isAsc = _this.currentSort.direction === 'asc';
                switch (_this.currentSort.active) {
                    case 'formulaCode':
                        return compare(a.formula.formulaCode, b.formula.formulaCode, isAsc);
                    case 'formulaName':
                        return compare(a.formula.formulaName, b.formula.formulaName, isAsc);
                    case 'approximateColor':
                        return compare(a.formula.approximateColor, b.formula.approximateColor, isAsc);
                    case 'collection':
                        return compare(a.formula.collection.collectionName, b.formula.collection.collectionName, isAsc);
                    case 'product':
                        return compare(a.productBase.product.productName, b.productBase.product.productName, isAsc);
                    case 'createdDate':
                        return compare(a.formula.createdDate, b.formula.createdDate, isAsc);
                    case 'createdBy':
                        return compare(a.formula.machine != null ? 1 : 0, b.formula.machine != null ? 1 : 0, isAsc);
                    default:
                        return 0;
                }
            });
        }
        this.pagenationMode.pageIndex = 0;
        this.updatePagenationMode();
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    ListFormulaComponent.prototype.goToPage = function (pageIndex) {
        this.pagenationMode.pageIndex = pageIndex;
        this.updatePagenationMode();
    };
    ListFormulaComponent.prototype.addNewFormula = function () {
        this.router.navigate(["../dashboard/formula/add"]);
    };
    ListFormulaComponent.prototype.editTheFormula = function (formulaId) {
        this.router.navigate(["../dashboard/formula/edit/" + formulaId]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListFormulaComponent.prototype, "selectedFormula", void 0);
    ListFormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-formula',
            template: __webpack_require__(/*! ./list-formula.component.html */ "./src/app/components/formula/list-formula/list-formula.component.html"),
            styles: [__webpack_require__(/*! ./list-formula.component.scss */ "./src/app/components/formula/list-formula/list-formula.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"],
            _services_formula_formula_service__WEBPACK_IMPORTED_MODULE_3__["FormulaService"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"],
            _services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
            _file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListFormulaComponent);
    return ListFormulaComponent;
}());



/***/ }),

/***/ "./src/app/components/formula/maintenance/maintenance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/maintenance/maintenance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n  <h1>Maintenance</h1>\n</div>\n"

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

module.exports = "<div class=\"block-header\">\r\n  <h1>Standard Formula</h1>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"dbItem != null\">\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Information\r\n      </div>\r\n\r\n      <div class=\"card-body form-detail\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Color</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.formulaCode}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Collection</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.collection.collectionName}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Approximate Color</label>\r\n          <div class=\"col-md-8\">\r\n            <span [ngStyle]=\"{'background': dbItem.formula.approximateColor, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Product</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.productBase.product.productName}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Formula Date</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.createdDate | date : 'dd/MM/yyyy'}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Substrate</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.substrate}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Comment</label>\r\n          <div class=\"col-md-8\">\r\n            {{dbItem.formula.comment}}\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 label-control\">Barcode</label>\r\n          <div class=\"col-md-8\">\r\n            <span *ngIf=\"selectProductBase != null\">\r\n              {{selectProductBase.barCode}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Component colors\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" >\r\n            <tr>\r\n              <th style=\"width: 30%\">Component</th>\r\n              <th style=\"width: 20%\">ml</th>\r\n              <th style=\"width: 50%\">Color\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let colorantItem of listFormulaColorant\">\r\n              <td>{{colorantItem.colourant.colourantName}}</td>\r\n              <td>{{roundNumber((colorantItem.quantity / dbItem.formula.baseOnCan) * canSize)}}</td>\r\n              <td>\r\n                <span class=\"color-bar\" >\r\n                  <span class=\"color-select\" [ngStyle]=\"{'background': colorantItem.colourant.rbgHex, 'width': (colorantItem.quantity / maxColorQuantity) * 100 + '%'}\"></span>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"dbItem != null\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Mixed\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\"  *ngIf=\"errorMessage != null && errorMessage != ''\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"alert alert-danger\">\r\n              <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"clearErrorMessage()\">&times;</button>\r\n              {{errorMessage}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-16 col-xs-12 text-right\">\r\n\r\n             <span class=\"base-can-empty\" *ngIf=\"selectProductBase != null\">\r\n                <span class=\"base-can-background\">\r\n                  <span class=\"base-can-volume\" [ngStyle]=\"{'background-color': selectProductBase.productBase.rbgHex, 'height': selectProductBase.percentage + '%'}\">\r\n                    <span class=\"can-base-info\">\r\n                      <span class=\"base-type\">Base : {{selectProductBase.productBase.base.baseCode}}</span>\r\n                      <span class=\"base-volume\">{{canSize}} Liter</span>\r\n                      <span class=\"base-name\">{{selectProductBase.productBase.product.productName}}</span>\r\n                    </span>\r\n                  </span>\r\n                </span>\r\n              </span>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 col-md-6 col-sm-126 col-xs-12 form-detail\">\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Number of cans : </label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" [(ngModel)]=\"numberOfCan\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width': '200px'}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Can size:</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"number\" [(ngModel)]=\"canSize\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" [ngStyle]=\"{'width': '200px'}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\">Or select:</label>\r\n              <div class=\"col-md-8\">\r\n                <table class=\"table table-bordered table-product-base\" [ngStyle]=\"{'width' : '200px'}\">\r\n                  <tbody *ngFor=\"let cs of listProductBase\">\r\n                    <tr (click)=\"changedCanSize(cs.id)\">\r\n                      <td><span class=\"check-box\"><i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"cs.id == canSize\"></i></span> {{cs.text}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <!--<ng-select2 class=\"select-color-field\" [(ngModel)]=\"canSize\" [data]=\"listProductBase\" [value]=\"canSize\" [placeholder]=\"'Choose Can Size'\" [width]=\"200\" (valueChanged)=\"changedCanSize($event)\"></ng-select2>-->\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-group\">\r\n              <label class=\"col-md-4 label-control\"></label>\r\n\r\n              <div class=\"col-md-8\">\r\n                <button class=\"btn btn-primary\" (click)=\"beginDispense('view-dispense-task-modal')\">\r\n                  <i class=\"fas fa-fill-drip\"></i>\r\n                  <span *ngIf=\"inProgress\">In Progress</span>\r\n                  <span *ngIf=\"! inProgress\">Dispense</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"stateMachine != null && stateMachine == 'DISPENSE' && (errorMessage == null || errorMessage == '') && dbItem != null && currentTask != null && currentTask.taskId != null && currentTask.taskId > 0\">\r\n  <pp-modal id=\"view-dispense-task-modal\" class=\"modal dispense-job-status-modal\" [ngStyle]=\"{'display': 'none'}\">\r\n    <div class=\"modal-content\">\r\n      <ng-container *ngIf=\"errorMessage == null || errorMessage == ''\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Dispense Job Status</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-dispense-task-modal')\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"modal-body\">\r\n          <ng-container *ngIf=\"dbItem != null && currentTask != null && currentTask.taskId != null && currentTask.taskId > 0\">\r\n            <app-viewdispensetask [dispenseTask]=\"currentTask\" [dispenseStepTask]=\"currentTaskStep\" [listColorantUsed]=\"listColorant\" [maxColorQuantity]=\"maxColorQuantity\"></app-viewdispensetask>\r\n          </ng-container>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal('view-dispense-task-modal')\">Hide</button>\r\n      </div>\r\n    </div>\r\n  </pp-modal>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"stateMachine != null && stateMachine == 'PRINT' && dbItem != null\">\r\n  <pp-modal id=\"print-formula-modal\" class=\"modal print-formula-modal\" [ngStyle]=\"{'display': 'none'}\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Print</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('print-formula-modal')\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-md-12 formula-color-info\"><h3>{{dbItem.formula.formulaCode}}</h3></div>\r\n          <div class=\"col-md-12 collection-info\"><h4>{{dbItem.formula.collection.collectionName}}</h4></div>\r\n          <div class=\"col-md-12 collection-info\"><h5>{{canSize}} Liter</h5></div>\r\n          <div class=\"col-md-12 collection-info\"><h5>Created Date: {{currentTask.startTime | date: 'dd/MM/yyyy'}}</h5></div>\r\n          <div class=\"col-md-12 shop-info\"><h5>Company: {{userInfo.company.name}}</h5></div>\r\n          <div class=\"col-md-12 street-info\"><h5>Address: {{userInfo.company.address}}</h5></div>\r\n          <div class=\"col-md-12 ville-info\"><h5>City: {{userInfo.company.city}}</h5></div>\r\n          <div class=\"col-md-12 ville-info\"><h5>Website: {{userInfo.company.website}}</h5></div>\r\n          <div class=\"col-md-12 ville-info\"><h5>Phone: {{userInfo.company.phone}}</h5></div>\r\n          <div class=\"col-md-12 substrate-info\"><p>{{dbItem.formula.substrate}}</p></div>\r\n          <div class=\"col-md-12 bar-code-info\">\r\n             <span *ngIf=\"selectProductBase != null\">\r\n              <ngx-barcode [bc-value]=\"selectProductBase.barCode\" [bc-display-value]=\"true\"></ngx-barcode>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeDispenseModel()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printFormulaDispense()\">Print</button>\r\n      </div>\r\n    </div>\r\n  </pp-modal>\r\n</ng-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/formula/viewformula/viewformula.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/formula/viewformula/viewformula.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-bar {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  height: 1em; }\n  .color-bar .color-select {\n    display: inline-block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px; }\n  .text-error {\n  color: red; }\n  .table-product-base tr {\n  cursor: pointer; }\n  .table-product-base tr td {\n    padding: 5px 10px; }\n  .table-product-base tr .check-box {\n    display: inline-block;\n    min-width: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtdWxhL3ZpZXdmb3JtdWxhL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9ybXVsYVxcdmlld2Zvcm11bGFcXHZpZXdmb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsWUFBVyxFQVNaO0VBYkQ7SUFPSSxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixVQUFTO0lBQ1QsWUFBVyxFQUNaO0VBRUg7RUFDRSxXQUFVLEVBQ1g7RUFFRDtFQUVJLGdCQUFlLEVBU2hCO0VBWEg7SUFJTSxrQkFBaUIsRUFDbEI7RUFMTDtJQVFNLHNCQUFxQjtJQUNyQixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYS92aWV3Zm9ybXVsYS92aWV3Zm9ybXVsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1iYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDFlbTtcclxuXHJcbiAgLmNvbG9yLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcbi50ZXh0LWVycm9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50YWJsZS1wcm9kdWN0LWJhc2V7XHJcbiAgdHJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrLWJveHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/dispense.task.model */ "./src/app/models/dispense.task.model.ts");
/* harmony import */ var _services_dispensetask_dispensetask_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/dispensetask/dispensetask.service */ "./src/app/services/dispensetask/dispensetask.service.ts");
/* harmony import */ var _models_formula_product_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/formula_product_base */ "./src/app/models/formula_product_base.ts");
/* harmony import */ var _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/productbase/productbase.service */ "./src/app/services/productbase/productbase.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../file.service */ "./src/app/file.service.ts");
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
    function ViewFormulaComponent(formulaService, productBaseService, modalService, dispenseTaskService, machineService, storeService, fileService, router, route) {
        this.formulaService = formulaService;
        this.productBaseService = productBaseService;
        this.modalService = modalService;
        this.dispenseTaskService = dispenseTaskService;
        this.machineService = machineService;
        this.storeService = storeService;
        this.fileService = fileService;
        this.router = router;
        this.route = route;
        this.listFormulaColorant = null;
        this.listProductBaseCan = null;
        this.maxColorQuantity = 0;
        this.canSize = 1;
        this.selectProductBase = null;
        this.numberOfCan = 1;
        this.listProductBase = null;
        // step 2. dispense colourant
        this.inProgress = false;
        this.currentTask = null;
        this.currentTaskStep = null;
        this.listColorant = null;
        this.errorMessage = null;
        this.stateMachine = null;
    }
    ViewFormulaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listFormulaColorant = [];
        this.listProductBaseCan = [];
        this.route.params.subscribe(function (params) {
            var formulaProductBaseId = +params.id;
            if (formulaProductBaseId != null && formulaProductBaseId > 0) {
                _this.formulaProductBaseId = formulaProductBaseId;
                _this.formulaService.findFormulaProductBaseById(_this.formulaProductBaseId).subscribe(function (data) {
                    _this.dbItem = data;
                    _this.selectProductBase = null;
                    _this.getRelativeData();
                });
            }
            else {
                _this.selectProductBase = null;
                _this.fetchDBItem();
            }
        });
    };
    ViewFormulaComponent.prototype.fetchDBItem = function () {
        this.getRelativeData();
    };
    ViewFormulaComponent.prototype.roundNumber = function (num) {
        return Math.round(num * 100) / 100;
    };
    ViewFormulaComponent.prototype.getRelativeData = function () {
        var _this = this;
        if (this.dbItem != null) {
            this.userInfo = this.storeService.getLoginUserData();
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
                    _this.canSize = _this.dbItem.formula.baseOnCan;
                }
                else {
                    _this.canSize = _this.dbItem.formula.baseOnCan;
                }
            });
        }
    };
    ViewFormulaComponent.prototype.changedCanSize = function (canSize) {
        this.canSize = canSize;
    };
    ViewFormulaComponent.prototype.beginDispense = function (modalId) {
        var _this = this;
        this.stateMachine = null;
        this.machineService.validateQuantityColourant(this.canSize, this.listFormulaColorant, this.dbItem.formula).subscribe(function (res) {
            if (res.length === 0) {
                // create when not current task in process or task is done !!!!;
                if (_this.currentTask == null || _this.currentTask.status === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STATE"].DONE) {
                    var listPumpingTask = [];
                    for (var _i = 0, _a = _this.listColorant; _i < _a.length; _i++) {
                        var colorant = _a[_i];
                        var prepare_t = new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseTaskStepModel"](_models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STEP_TYPE"].PREPARE, null, function (newDispenseTask, newDispenseStepTask) {
                            _this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
                        });
                        var pumping_t = new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseTaskStepModel"](_models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STEP_TYPE"].PUMPING, new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseStepDataModel"](colorant.colorant, colorant.quantity * _this.canSize), function (newDispenseTask, newDispenseStepTask) {
                            _this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
                        });
                        listPumpingTask.push(prepare_t);
                        listPumpingTask.push(pumping_t);
                    }
                    var stop_t = new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseTaskStepModel"](_models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STEP_TYPE"].FINISHED, null, function (newDispenseTask, newDispenseStepTask) {
                        _this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
                        _this.numberOfCan -= 1;
                        if (_this.numberOfCan > 0) {
                            _this.beginDispense(modalId);
                        }
                        else {
                            _this.numberOfCan = 1;
                        }
                        _this.stateMachine = 'PRINT';
                        setTimeout(function () {
                            _this.openModal('print-formula-modal');
                        }, 500);
                    });
                    listPumpingTask.push(stop_t);
                    _this.currentTask = new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseTaskModel"]('Dispense', listPumpingTask, new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["DispenseDataModel"](_this.dbItem, _this.selectProductBase, _this.canSize, _this.numberOfCan), null);
                    _this.machineService.recordDispenseFormulaProductBase(_models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STATE"].IN_PROGRESS, _this.currentTask.taskId, _this.currentTask.taskData.formulaProductBase, _this.currentTask.taskData.canSize).subscribe(function (data) {
                        var item = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_8__["default"].convertToDispenseFormulaProductBaseModel(data);
                        _this.currentTask.taskId = item.machineFormulaProductBaseId;
                        _this.currentTask.status = item.status;
                        _this.currentTask.startTime = item.createdDate;
                        _this.dispenseTaskService.runDispenseTask(_this.currentTask);
                        _this.stateMachine = 'DISPENSE';
                        _this.fileService.saveDispenseTask(item.formulaProductBase.productBase.base.baseCode, item.formulaProductBase.formula.baseOnCan, item.canSize, _this.listFormulaColorant);
                        setTimeout(function () {
                            _this.openModal(modalId);
                        }, 200);
                    });
                }
            }
            else {
                _this.errorMessage = 'Not enough colorant quantity to dispense.';
                _this.currentTask = null;
            }
        });
    };
    ViewFormulaComponent.prototype.clearErrorMessage = function () {
        this.errorMessage = null;
    };
    ViewFormulaComponent.prototype.updateDispenseTaskData = function (newDispenseTask, newDispenseStepTask) {
        this.currentTask = newDispenseTask;
        this.currentTaskStep = newDispenseStepTask;
        if (this.currentTask.status === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_4__["MAP_DISPENSE_TASK_STATE"].IN_PROGRESS) {
            this.inProgress = true;
        }
    };
    ViewFormulaComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ViewFormulaComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ViewFormulaComponent.prototype.closeDispenseModel = function () {
        this.closeModal('print-formula-modal');
        this.stateMachine = null;
    };
    ViewFormulaComponent.prototype.printFormulaDispense = function () {
        var _this = this;
        document.body.classList.add('print-mode');
        window.print();
        setTimeout(function () {
            document.body.classList.remove('print-mode');
            _this.stateMachine = 'PRINT';
        }, 2000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_formula_product_base__WEBPACK_IMPORTED_MODULE_6__["FormulaProductBaseModel"])
    ], ViewFormulaComponent.prototype, "dbItem", void 0);
    ViewFormulaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewformula',
            template: __webpack_require__(/*! ./viewformula.component.html */ "./src/app/components/formula/viewformula/viewformula.component.html"),
            styles: [__webpack_require__(/*! ./viewformula.component.scss */ "./src/app/components/formula/viewformula/viewformula.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_formula_formula_service__WEBPACK_IMPORTED_MODULE_1__["FormulaService"],
            _services_productbase_productbase_service__WEBPACK_IMPORTED_MODULE_7__["ProductBaseService"],
            _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _services_dispensetask_dispensetask_service__WEBPACK_IMPORTED_MODULE_5__["DispenseTaskService"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_9__["MachineService"],
            _services_store_store_service__WEBPACK_IMPORTED_MODULE_10__["StoreService"],
            _file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<section class=\"container\">\n  <h2>Hướng dẫn setup git nếu commit ko được</h2>\n  <div class=\"content\">\n    <p>Khi gặp lỗi này: </p>\n    <blockquote>\n      Failed with error: unable to access 'https://github.com/buitahau/demoson.git/': The requested URL returned error: 403\n    </blockquote>\n\n    <p>Ta cần làm như sau: Vào folder .git/config, edit lại cái url như sau :</p>\n\n    <p>url = https://github.com/buitahau/demoson.git</p>\n\n    <p>url = https://bluesky020990:xxxxxxxxxxx@github.com/buitahau/demoson.git</p>\n\n    <p>Vẫn ko được :( Do ko đc share !!</p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <h2>Hướng dẫn cài đặt angular</h2>\n\n  <div class=\"content\">\n    <p>Để cài đặt angular, đầu tiên ta new 1 cái angular project</p>\n\n    <blockquote>\n      ng new frontend\n    </blockquote>\n\n    <p>Sau khi khởi tạo nó rồi, đơn giản là ta sẽ start nó thôi đúng ko</p>\n\n    <blockquote>\n      ng serve --open\n    </blockquote>\n\n    <p>--open khai báo tự open cái browser lên để show cái page.</p>\n\n\n    <p>Các npm cần install để làm việc trong project này bao gồm:</p>\n    <ol>\n      <li>material </li>\n      <li>boostrap</li>\n      <li>node sass (để generate scss files)</li>\n    </ol>\n\n    <p>Sau đó, ta add material cho cái project này</p>\n\n    <blockquote>\n      ng add @angular/material\n    </blockquote>\n\n\n    <p>Add luon cai boostrap</p>\n\n    <p>Install boostrap</p>\n\n    <blockquote>\n      npm install ngx-bootstrap --save\n    </blockquote>\n\n    <p>Add boostrap to project </p>\n\n    <blockquote>\n      ng add ngx-bootstrap\n    </blockquote>\n\n    <p>Xem hướng dẫn install bootstrap cho angular tai  : <a href=\"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b\">đây</a> </p>\n\n    <p>Install node sass để generate scss file. Nếu ko cài cái này thì style trong file scss sẽ ko được generate ra đâu</p>\n\n    <blockquote>\n      npm install -g node-sass\n    </blockquote>\n  </div>\n</section>\n\n<section class=\"container\">\n  <h2>Hướng dẫn tạo component và khai báo routers</h2>\n\n  <div class=\"content\">\n    <p>Để tạo một component tự động, ta làm như sau : ** Khuyến khích xài command line vì generate thủ công\n    rất dễ sai và đôi khi xảy ra những sai sót ko đáng có.</p>\n\n    <ol>\n      <li>cd vào folder cài đặt angular, folder chứa file package.json (ở đây là front-end)</li>\n      <li>Dùng command line sau để tạo component một cách tự động:\n        <blockquote>\n          ng g c components/help\n        </blockquote>\n\n        <p>Giải thích  thêm : g - generate, c - component, components/help : tạo component Help ở folder /components</p>\n      </li>\n    </ol>\n\n    <img src=\"../../../assets/help/add_components.JPG\" width=\"989\" height=\"837\" class=\"img-fluid\"/>\n\n    <p>Đối với component, luôn có 2 phần, 1 là annotation @component và 2 là export class. 2 Cái này luôn đi với nhau, như hình:</p>\n\n    <img src=\"../../../assets/help/component_note_1.JPG\" width=\"1492\" height=\"1235\" class=\"img-fluid\"/>\n  </div>\n\n  <div class=\"content\">\n    <p>Quan trọng nhất của angular là các router. Ta phải khai báo các router này để định tuyến các request tới\n    các Component tương ứng.</p>\n\n    <p>Trong file app.module.ts, ta khai báo routers như sau: Xem image</p>\n\n    <img src=\"../../../assets/help/config_routers.jpg\" width=\"1884\" height=\"1453\"/>\n  </div>\n</section>\n\n<section class=\"container\">\n  <h2>Những lưu ý khi sử dụng các components trong Angular.</h2>\n\n  <div class=\"content\">\n    <p>Nếu một tag chưa được khai báo, thì nó sẽ báo lỗi biên dịch. Ví dụ thêm vào < mat-toolbar>&lt;/> thì ngay lập tức nó báo lỗi.</p>\n    <p>Khi import một module vào, thì phải thêm nó ở trong imports</p>\n\n    <img src=\"../../../assets/help/add_module.JPG\" width=\"1432\" height=\"1467\" class=\"img-fluid\"/>\n\n  </div>\n</section>\n\n\n<section class=\"container\">\n  <h2>Tạo service trong Angular </h2>\n\n  <div class=\"content\">\n    <p>Việc tạo service cũng như tạo component, tốt nhất nên generate tự động.</p>\n\n    <blockquote>\n      ng g s issue\n    </blockquote>\n\n    <p>Khác với component, sau khi generate xong ta phải khao báo trong declarations của app.module, thì service phải được khai báo trong providers.</p>\n\n    <img src=\"../../../assets/help/add_service.JPG\" width=\"2134\" height=\"1700\" class=\"img-fluid\"/>\n\n    <p>Như vậy, trước mắt ta có các lưu ý sau:</p>\n\n    <ol>\n      <li>Component khai báo trong declarations</li>\n      <li>Service khai báo trong providers</li>\n      <li>Module khai báo trong imports</li>\n    </ol>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/components/help/help.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-help blockquote {\n  border: 1px solid #ccc;\n  padding: 5px; }\n\napp-help img {\n  max-width: 50% !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVscFxcaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2I7O0FBSkg7RUFPSSwwQkFBeUI7RUFDekIsd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVscHtcclxuICBibG9ja3F1b3Rle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGltZ3tcclxuICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

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

module.exports = "<div class=\"block-header\">\n  <h1>Angular language</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Làm việc với kiểu dữ liệu trong angular.\n      </div>\n\n      <div class=\"card-body\">\n        <p>Danh sách các vấn đề cần quan tâm bao gồm :</p>\n\n        <ul>\n          <li>Show 1 biến ra màn hình</li>\n          <li>Gán giá trị local trong template</li>\n          <li>Câu điều kiện if else</li>\n          <li>Vòng lặp</li>\n        </ul>\n      </div>\n\n      <div class=\"card-body\">\n        <h4>Overview</h4>\n\n        <p>Trong angular, để set các biến cho các component để sử dụng bên html page, thì ta phải khai báo nó trong method export component.</p>\n\n        <p>Mỗi languge có những vấn đề khác nhau, ở đây ta sẽ tìm hiểu về việc show cái giá trị biến, gán giá trị, so sánh\n          điều kiện if  else if, else, các vòng lặp for, while (nếu có), cũng như các hashtag khác.</p>\n      </div>\n\n      <div class=\"card-body\">\n        <h4>Show 1 biến ra màn hình</h4>\n\n        <p>Biến trong angular được export trong đoạn block code cuối cùng của component. Ví dụ ta có biến pageTitle.</p>\n\n        <p>Để show nó ra màn hình ta sử dụng cặp dấu \"{{'{'}}\" \"{{ '{' }}\" \"{{ '}' }}\" \"{{ '}' }}\" này nhé.</p>\n\n        <p>(Lưu ý là show nó, còn sử dụng thì ko cần cặp dấu  \"{{'{'}}\" \"{{ '}' }}\" này đâu nhé. Xem file colorant.component.html để biết thêm chi tiết)</p>\n\n        <blockquote>\n          Content này lấy từ pageTitle : {{ pageTitle | uppercase }}\n        </blockquote>\n\n        <p>Màu của biến nó sẽ khác với màu của mấy thằng còn lại nên sẽ rất dễ xem.</p>\n\n        <p>Để gán giá trị của biến, ta cần sử dụng ngInit</p>\n\n        <blockquote>\n          *ngInit\n        </blockquote>\n      </div>\n\n      <div class=\"card-body\">\n        <h4>Gán giá trị local trong template.</h4>\n\n        <p>để khai báo 1 biến, ta sử dụng từ khóa ngInit</p>\n\n        <p>Xem thêm ở đây <a href=\"https://www.guru99.com/angularjs-expressions.html\" target=\"_blank\">Click to view</a></p>\n\n      </div>\n\n      <div class=\"card-body\">\n        <h4>Câu điều kiện if else</h4>\n\n        <p>Đây là 1 ví dụ của câu điều kiện if</p>\n\n        <blockquote>\n          &lt;p *ngIf=\"heroes.length > 3\">There are many heroes!&lt;/p&gt;`\n        </blockquote>\n\n        <p *ngIf=\"test_if_value  == true\">There are many heroes!</p>\n\n        <p>Xem thêm ở đây <a href=\"https://angular.io/guide/template-syntax#ngIf\" target=\"_blank\">Click to view</a> </p>\n\n      </div>\n\n\n\n\n      <div class=\"card-body\">\n        <h4>Làm việc với biến.</h4>\n\n        <p>Biến trong angular được export trong đoạn block code cuối cùng của component. Ví dụ ta có biến pageTitle.</p>\n\n        <p>Để sử dụng nó, ta sử dụng cặp dấu \"{{'{'}}\" \"{{ '{' }}\" \"{{ '}' }}\" \"{{ '}' }}\" này nhé.</p>\n\n        <blockquote>\n          Content này lấy từ pageTitle : {{ pageTitle }}\n        </blockquote>\n\n        <p>Màu của biến nó sẽ khác với màu của mấy thằng còn lại nên sẽ rất dễ xem.</p>\n      </div>\n\n\n\n      *ngIf=\"heroes.length > 3\"\n\n\n      <div class=\"card-body\">\n        <h4>Làm việc với mảng.</h4>\n\n        <p>Duyệt các phần tử của mảng : sử dụng * ngFor=\"let item of listItem\" </p>\n\n        <blockquote>\n          <ul *ngFor=\"let item of listItems\">\n            <li>{{item}}</li>\n          </ul>\n        </blockquote>\n      </div>\n\n\n      <div class=\"card-body\">\n        <h4>Style trong angular</h4>\n\n        <p>Xem tai link sau : <a href=\"https://alligator.io/angular/style-binding-ngstyle-angular/\" target=\"_blank\">Click to view </a></p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<!---->\n"

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

module.exports = "<div class=\"block-header\">\n  <h1>Help</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Task process\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"detail-status\" style=\"float: right\">\n          <span class=\"not-start\">Not start</span> <span class=\"vertical-separate-line\"></span><br />\n          <span class=\"in-progress\">In progress</span> <span class=\"vertical-separate-line\"></span><br />\n          <span class=\"done\">Done</span><br />\n        </div>\n\n        <h3>Server</h3>\n        <ol>\n          <li class=\"done\">Upload cái structure database</li>\n\n          <li class=\"not-start\">validate dữ liệu trước khi import (Import == CLEAR)\n            <ul>\n              <li>Dữ liệu không được trùng, các field là duy nhất (cho cả 4 sheets)</li>\n\n              <li>Validate data không hợp lệ (ví dụ check colourant trong formula, product, base...)</li>\n\n              <li>Đảm bảo import dữ liệu. Hiện tại quy tắc là import vào 1 cái sheet mới thì delete toàn bộ data cũ có liên quan.</li>\n            </ul>\n          </li>\n\n          <li class=\"done\">Thêm phần quản lý machine</li>\n\n          <li class=\"not-start\">\n            Window App\n\n            <ul>\n              <li class=\"not-start\">Sau khi build App phải có phần communicate với app khác, và tiến hành ghi dữ liệu vào 1 folder được chia sẻ cùng.</li>\n              <li class=\"not-start\">Nếu đóng gói 2 app lại 1 thì tự config, còn ko thì lúc cài đặt cần chọn folder để copy file vào đó.</li>\n              <li class=\"not-start\">Ghi thử file theo cấu trúc</li>\n\n            </ul>\n          </li>\n        </ol>\n\n        <h3>Client</h3>\n\n        <ol>\n          <li class=\"done\">\n            Setting Machine Page\n            <ul>\n              <li class=\"done\">Chuyển phần config setting từ machine sang admin.</li>\n              <li class=\"done\">Chuyển từ alert sang warning bằng icon</li>\n              <li class=\"done\">Validate mức màu trước lúc dispense không cho phép dưới min. Nếu sau khi pha xong mà màu dưới min thì không cho nó pha.</li>\n            </ul>\n\n          </li>\n\n          <li class=\"in-progress\">\n            Adjust Canister Fill Page\n            <ul>\n              <li class=\"done\">Bỏ phần set 100%</li>\n              <li class=\"done\">Thêm vào số điều chỉnh, ví dụ bình tỉ lệ thực là 1000ml, số lượng thực chỉ có 95% (5% dính ở đáy bình chẳng hạn)</li>\n              <li class=\"in-progress\">Validate con so nay</li>\n            </ul>\n          </li>\n\n          <li class=\"done\">Formula Page\n            <ul>\n              <li class=\"done\">Thêm Base cho phần filter</li>\n              <li class=\"done\">Add back navigator</li>\n            </ul>\n          </li>\n\n          <li class=\"done\">\n            Print function\n            <ul>\n              <li class=\"done\">Show custom data</li>\n              <li class=\"done\">Show dung tích, ngày giờ</li>\n            </ul>\n          </li>\n\n          <li class=\"done\">\n            Dispense manual\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Structure database\n      </div>\n\n      <div class=\"card-body\">\n        <img src=\"./assets/images/data_model.png\" width=\"1492\" height=\"1235\" class=\"img-fluid\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        How to use this app...\n      </div>\n\n      <div class=\"card-body\">\n        Content .....\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        How to use this app...\n      </div>\n\n      <div class=\"card-body\">\n        Content .....\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        How to use this app...\n      </div>\n\n      <div class=\"card-body\">\n        Content .....\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/help/question/question.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/help/question/question.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-start {\n  color: grey; }\n\n.in-progress {\n  color: orange; }\n\n.done {\n  color: darkgreen; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL3F1ZXN0aW9uL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVscFxccXVlc3Rpb25cXHF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWxwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1zdGFydHtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmluLXByb2dyZXNze1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5kb25le1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuIl19 */"

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

module.exports = "<div class=\"block-header\">\n  <h1>Structure HTML & Boostrap</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Overview\n      </div>\n\n      <div class=\"card-body\">\n        <p>Cái nào cùng vậy, đã là web thì kiểu gì cũng phải xài boostrap. Boostrap không những giúp code nhanh hơn, mà hơn\n        hết, cái thư viện css và js của nó rất đẹp. Nên nếu biết sử dụng đúng cách thì ko cần biết về css cũng có thể làm được.</p>\n\n        <p>Bản chất của boostrap là quy định các template. Chỉ cần khai báo đúng template là đc. Riêng vấn đề này đòi hỏi ta phải làm\n        nhiều mới nhớ được.</p>\n\n        <p>Đối với bất cứ việc design một cái website nào cũng vậy, theo yêu cầu khách hàng, ta nên search trên mạng để tìm 1 cái layout cho hợp lý\n        sau đó mang về chỉnh sửa lại css custom theo ý ta muốn. Tất nhiên, để custom thì chắc chắn phải biết 1 chút về css và các layout của boostrap rồi, đúng ko?</p>\n\n        <p>Boostrap ra đời lâu rồi. Cái này xài boostrap 4. Ngày xưa boostrap chạy với js, thì giờ ta phải sửa lại để nó cũng chạy với angula.</p>\n\n        <p>Trong cái này, sẽ bỏ vào từ từ các template của angular và boostrap.</p>\n\n        <p>Đối với việc chuyển từ js sang angular, nó phức tạp hơn những gì ta tưởng. Tuy nhiên, may mắn thay là đã có những plugin (library) hỗ trợ\n          ta làm cái đó. Bài viết này chủ yếu list các trường hợp như vậy thôi</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Boostrap modal\n      </div>\n\n      <div class=\"card-body\">\n        <p>Boostrap modal là 1 component thường gặp nhất. Nó show các boostbox nhưu confirm, alert, và các modal để tương tác.</p>\n\n        <p>Hướng dãn thêm boostrap modal vào, ta xem ở đây <a href=\"http://eriktufvesson.github.io/ngbootbox/\" target=\"_blank\">Click to view</a> </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<p>\n  create works!\n</p>\n"

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

module.exports = "<p>\n  edit works!\n</p>\n"

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

module.exports = "<p>\n  list works!\n</p>\n"

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

module.exports = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a href=\"index.html\">Dashboard</a>\n  </li>\n  <li class=\"breadcrumb-item active\">Sample</li>\n</ol>\n"

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

module.exports = "<footer class=\"sticky-footer\">\n  <div class=\"container my-auto\">\n    <div class=\"copyright text-center my-auto\">\n      <span>Copyright © VietPower 2018</span>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<nav class=\"navbar navbar-expand static-top\">\r\n  <div class=\"container\">\r\n    <div class=\"page-logo background_logo\" style=\"width: 249px; height: 51px;\">\r\n      <a class=\"navbar-brand mr-1\" [routerLink]=\"['../dashboard']\">\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"page-menu\">\r\n      <app-navigation></app-navigation>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar.navbar-expand {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  transition: all 0.5s;\n  z-index: 997;\n  background: #fff;\n  box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);\n  display: flex;\n  justify-content: space-between !important;\n  margin-bottom: 10px; }\n  .navbar.navbar-expand .page-menu {\n    float: right; }\n  .background_logo {\n  background: url('/./assets/images/logo.png') center center/100% 100% no-repeat;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGF5b3V0XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsUUFBTztFQUNQLE9BQU07RUFDTixTQUFRO0VBQ1IscUJBQW9CO0VBQ3BCLGFBQVk7RUFDWixpQkFBZ0I7RUFFaEIsaUVBQWdFO0VBRWhFLGNBQWE7RUFDYiwwQ0FBeUM7RUFDekMsb0JBQW1CLEVBT3BCO0VBcEJEO0lBaUJJLGFBQVksRUFDYjtFQUlIO0VBQ0UsK0VBQTRFO0VBQzVFLHNCQUFvQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLm5hdmJhci1leHBhbmR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHotaW5kZXg6IDk5NztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgYm94LXNoYWRvdzogLTIxLjIxM3B4IDIxLjIxM3B4IDMwcHggMHB4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4zKTtcclxuICAvL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblxyXG4gIC5wYWdlLW1lbnV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJhY2tncm91bmRfbG9nbyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZycpIGNlbnRlciBjZW50ZXIvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"

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

module.exports = "<ul class=\"navbar-nav navigation-bar\">\r\n\r\n  <li class=\"nav-item\" *ngIf=\"lowColourants\" type=\"{{warningType}}\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/machine']\">\r\n      <i class=\"fas fa-exclamation-triangle\"></i>\r\n      <span class=\"menu-item\">Warning</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item dropdown\" *ngIf=\"currentUser != null && (currentUser.role.roleName == USER_ROLE.SHOP || currentUser.role.roleName == USER_ROLE.OPERATOR)\">\r\n    <a class=\"nav-link dropdown-toggle\" id=\"user-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(userMode)\" [attr.aria-expanded]=\"currentMode == userMode\" aria-controls=\"collapseExample\">\r\n      <i class=\"fas fa-users-cog\"></i>\r\n      <span class=\"menu-item\">User Setting</span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"setting-dropdown\" [ngbCollapse]=\"currentMode != userMode\" (click)=\"updateCurrentMode('hide')\">\r\n      <!--<a class=\"dropdown-item\" >User Manager</a>-->\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/company']\">Company Manager</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/customer']\">Customer Manager</a>\r\n    </div>\r\n  </li>\r\n\r\n  <li class=\"nav-item dropdown\" *ngIf=\"currentUser != null && (currentUser.role.roleName == USER_ROLE.SHOP || currentUser.role.roleName == USER_ROLE.OPERATOR)\">\r\n    <a class=\"nav-link dropdown-toggle\" id=\"setting-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(settingMode)\" [attr.aria-expanded]=\"currentMode == settingMode\" aria-controls=\"collapseExample\">\r\n      <i class=\"fas fa-cogs\"></i>\r\n      <span class=\"menu-item\">Setting</span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"setting-dropdown\" [ngbCollapse]=\"currentMode != settingMode\" (click)=\"updateCurrentMode('hide')\">\r\n      <h6 class=\"dropdown-header\">Metadata Setting:</h6>\r\n\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/colorant']\">Colorant</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/base']\">Base</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/product']\">Product</a>\r\n      <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/collection']\">Collection</a>\r\n\r\n      <!--<ng-container *ngIf=\"currentUser != null && currentUser.role.roleName == USER_ROLE.SHOP\">-->\r\n        <div class=\"dropdown-divider\"></div>\r\n\r\n        <h6 class=\"dropdown-header\">Machine Setting:</h6>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['../dashboard/machine']\">Machine</a>\r\n      <!--</ng-container>-->\r\n    </div>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('formula')\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/formula']\">\r\n      <i class=\"fas fa-palette\"></i>\r\n      <span class=\"menu-item\">Formula</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/job-status']\">\r\n      <i class=\"fas fa-file-contract\"></i>\r\n      <span class=\"menu-item\">Job status</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('maintenance')\" *ngIf=\"currentUser != null && (currentUser.role.roleName == USER_ROLE.ADMIN && currentUser.role.roleName == USER_ROLE.MAINTENANCE)\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/maintenance']\">\r\n      <i class=\"fas fa-hammer\"></i>\r\n      <span class=\"menu-item\">Maintenance</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"updateCurrentMode('question')\">\r\n    <a class=\"nav-link\" [routerLink]=\"['../dashboard/question']\">\r\n      <i class=\"fas fa-question-circle\"></i>\r\n      <span class=\"menu-item\">Help</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\" (click)=\"logOut()\">\r\n    <a class=\"nav-link\">\r\n      <i class=\"fas fa-sign-out-alt\"></i>\r\n      <span class=\"menu-item\">Logout</span></a>\r\n  </li>\r\n\r\n  <!--<li class=\"nav-item dropdown\">-->\r\n    <!--<a class=\"nav-link dropdown-toggle\" id=\"developer-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"updateCurrentMode(devMode)\" [attr.aria-expanded]=\"currentMode == devMode\" aria-controls=\"collapseExample\">-->\r\n      <!--<i class=\"fab fa-dev\"></i>-->\r\n      <!--<span class=\"menu-item\">Developer</span>-->\r\n    <!--</a>-->\r\n\r\n    <!--<div class=\"dropdown-menu\" aria-labelledby=\"developer-dropdown\" [ngbCollapse]=\"currentMode != devMode\" (click)=\"updateCurrentMode('hide')\">-->\r\n      <!--<h6 class=\"dropdown-header\">Document :</h6>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/overview']\">Overview</a>-->\r\n      <!--<div class=\"dropdown-divider\"></div>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/language']\">Language</a>-->\r\n      <!--<a class=\"dropdown-item\" [routerLink]=\"['../dashboard/help/boostrap']\">Boostrap Template</a>-->\r\n    <!--</div>-->\r\n  <!--</li>-->\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-bar .nav-item {\n  margin-left: 25px;\n  color: #00417b;\n  text-align: center; }\n  .navigation-bar .nav-item[type=\"danger\"] {\n    color: red; }\n  .navigation-bar .nav-item[type=\"danger\"] > .nav-link {\n      color: red; }\n  .navigation-bar .nav-item[type=\"danger\"] > .nav-link > i.fas {\n        color: red; }\n  .navigation-bar .nav-item[type=\"warning\"] {\n    color: darkorange; }\n  .navigation-bar .nav-item[type=\"warning\"] > .nav-link {\n      color: darkorange; }\n  .navigation-bar .nav-item[type=\"warning\"] > .nav-link > i.fas {\n        color: darkorange; }\n  .navigation-bar .nav-item > .nav-link {\n    color: #00417b; }\n  .navigation-bar .nav-item > .nav-link > i.fas {\n      font-size: 42px;\n      color: #00417b; }\n  .navigation-bar .nav-item.dropdown .dropdown-toggle::after {\n    display: none; }\n  .navigation-bar span.menu-item {\n  font-size: 14px !important;\n  white-space: nowrap;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9HOlxcV29ya3NwYWNlXFxjbGllbnR2aWV0cG93ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQWtCLEVBb0NuQjtFQXhDSDtJQU9NLFdBQVUsRUFPWDtFQWRMO01BU1EsV0FBVSxFQUlYO0VBYlA7UUFXVSxXQUFVLEVBQ1g7RUFaVDtJQWlCTSxrQkFBaUIsRUFPbEI7RUF4Qkw7TUFtQlEsa0JBQWlCLEVBSWxCO0VBdkJQO1FBcUJVLGtCQUFpQixFQUNsQjtFQXRCVDtJQTJCTSxlQUFlLEVBTWhCO0VBakNMO01BOEJRLGdCQUFlO01BQ2YsZUFBZSxFQUNoQjtFQWhDUDtJQXFDUSxjQUFhLEVBQ2Y7RUF0Q047RUEwQ0ksMkJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixlQUFjLEVBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbi1iYXJ7XHJcbiAgLm5hdi1pdGVte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjb2xvcjogICMwMDQxN2I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJlt0eXBlPVwiZGFuZ2VyXCJde1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICA+IC5uYXYtbGlua3tcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgID4gaS5mYXN7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZbdHlwZT1cIndhcm5pbmdcIl17XHJcbiAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICA+IC5uYXYtbGlua3tcclxuICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICA+IGkuZmFze1xyXG4gICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiAubmF2LWxpbmt7XHJcbiAgICAgIGNvbG9yOiAgIzAwNDE3YjtcclxuXHJcbiAgICAgID4gaS5mYXN7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIGNvbG9yOiAgIzAwNDE3YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZHJvcGRvd257XHJcbiAgICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNwYW4ubWVudS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/store/store.service */ "./src/app/services/store/store.service.ts");
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
    function NavigationComponent(userService, storeService, machineService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.machineService = machineService;
        this.router = router;
        this.USER_ROLE = _models_constant__WEBPACK_IMPORTED_MODULE_3__["USER_ROLE"];
        this.currentMode = '';
        this.userMode = 'user';
        this.settingMode = 'setting';
        this.devMode = 'dev';
        this.lowColourants = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userService.getLoginUser();
        if (this.currentUser == null) {
            this.router.navigate(["../login"]);
        }
        this.checkLowColourant();
    };
    NavigationComponent.prototype.checkLowColourant = function () {
        var _this = this;
        var machine = this.storeService.getMachineData();
        if (machine != null) {
            this.machineService.fetchDataFromServer().subscribe(function (data) {
                var isLowColourant = false;
                var listMachineColourants = data;
                if (listMachineColourants == null || listMachineColourants.length === 0) {
                    isLowColourant = true;
                }
                else {
                    for (var _i = 0, listMachineColourants_1 = listMachineColourants; _i < listMachineColourants_1.length; _i++) {
                        var colourantMachine = listMachineColourants_1[_i];
                        if (colourantMachine.quantity < machine.warningQuantity) {
                            isLowColourant = true;
                            _this.warningType = 'warning';
                        }
                        if (colourantMachine.quantity < machine.minQuantity) {
                            _this.warningType = 'danger';
                        }
                    }
                }
                _this.lowColourants = isLowColourant;
            });
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
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_4__["MachineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<div class=\"container\">\n  <div class=\"card card-login mx-auto mt-5\">\n    <div class=\"card-header\">Reset Password</div>\n    <div class=\"card-body\">\n      <div class=\"text-center mb-4\">\n        <h4>Forgot your password?</h4>\n        <p>Enter your email address and we will send you instructions on how to reset your password.</p>\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter email address\" required=\"required\" autofocus=\"autofocus\">\n            <label for=\"inputEmail\">Enter email address</label>\n          </div>\n        </div>\n        <a class=\"btn btn-primary btn-block\" [routerLink]=\"['../login']\">Reset Password</a>\n      </form>\n      <div class=\"text-center\">\n        <a class=\"d-block small mt-3\" [routerLink]=\"['../register']\">Register an Account</a>\n        <a class=\"d-block small\" [routerLink]=\"['../login']\">Login Page</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = ".login-component {\n  width: 800px;\n  margin: 80px auto;\n  font-size: 20px; }\n  .login-component .login-container {\n    display: flex;\n    flex-direction: column; }\n  .login-component .login-container > * {\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW4tcGFnZVxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixnQkFBZSxFQVVoQjtFQWJEO0lBTUksY0FBYTtJQUNiLHVCQUFzQixFQUt2QjtFQVpIO01BVU0sWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbXBvbmVudHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgID4gKntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
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
    function LoginComponent(userService, router, globalVarialble) {
        this.userService = userService;
        this.router = router;
        this.globalVarialble = globalVarialble;
        this.userName = null;
        this.password = null;
    }
    // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
    // @ViewChild(MatFormField) _matFormField: MatFormField;
    LoginComponent.prototype.ngOnInit = function () {
        debugger;
        var url = this.globalVarialble.getBaseApiUrl();
        this.userService.clearData();
    };
    LoginComponent.prototype.login = function () {
        this.userService.clearData();
        this.userService.login(this.userName, this.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login-page/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _global__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"]])
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

module.exports = "<div class=\"container\">\n  <div class=\"card card-register mx-auto mt-5\">\n    <div class=\"card-header\">Register an Account</div>\n    <div class=\"card-body\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-label-group\">\n                <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" required=\"required\" autofocus=\"autofocus\">\n                <label for=\"firstName\">First name</label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-label-group\">\n                <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" required=\"required\">\n                <label for=\"lastName\">Last name</label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-label-group\">\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\">\n            <label for=\"inputEmail\">Email address</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-label-group\">\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n                <label for=\"inputPassword\">Password</label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-label-group\">\n                <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm password\" required=\"required\">\n                <label for=\"confirmPassword\">Confirm password</label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a class=\"btn btn-primary btn-block\" [routerLink]=\"['../login']\">Register</a>\n      </form>\n\n      <div class=\"text-center\">\n        <a class=\"d-block small mt-3\" [routerLink]=\"['../login']\">Login Page</a>\n        <a class=\"d-block small\" [routerLink]=\"['../forgot-password']\">Forgot Password?</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"block-header\">\n  <h1>Machine Setting</h1>\n</div>\n\n<div class=\"row\" *ngIf=\"machine != null\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Colorant Machine {{ machine.name + '(' + machine.code + ')'}}\n\n        <ng-container *ngIf=\"! openSetting\">\n          <button class=\"close\" (click)=\"openSettingMachine()\"><i class=\"fas fa-sliders-h\"></i></button>\n        </ng-container>\n\n        <ng-container *ngIf=\"openSetting\">\n          <button class=\"close\" (click)=\"closeSettingMachine()\"><i class=\"fas fa-window-close\"></i></button>\n        </ng-container>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"machine-colourant-group\" [attr.actionType]=\"openSetting ? 'open-setting': ''\">\n          <div class=\"machine-background\">\n            <ng-container *ngIf=\"openSetting == true\">\n              <div class=\"machine-background-setting\">\n                <mat-slider class=\"machine-range-slider\" [tickInterval]=\"100 / 20\" [max]=\"maxQuantity\" [min]=\"0\" [step]=\"50\" [(ngModel)]=\"warningQuantity\" [vertical]=\"true\" [thumbLabel]=\"true\" (change)=\"updateMachineDataSlider('warning')\"></mat-slider>\n                <mat-slider class=\"machine-range-slider\" [tickInterval]=\"100 / 20\" [max]=\"maxQuantity\" [min]=\"0\" [step]=\"50\" [(ngModel)]=\"minQuantity\" [vertical]=\"true\" [thumbLabel]=\"true\" (change)=\"updateMachineDataSlider('min')\"></mat-slider>\n              </div>\n            </ng-container>\n\n            <span class=\"machine-colourant-max-range\" [ngStyle]=\"{'height': '100%'}\"><span class=\"step-label\">{{maxQuantity}}</span></span>\n            <span class=\"machine-colourant-warning-range\" [ngStyle]=\"{'height': (warningQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{warningQuantity}}</span></span>\n            <span class=\"machine-colourant-min-range\" [ngStyle]=\"{'height': (minQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{minQuantity}}</span></span>\n            <span class=\"machine-colourant-zero-range\" [ngStyle]=\"{'height': '0%'}\"><span class=\"step-label\">0</span></span>\n          </div>\n\n          <ng-container *ngFor=\"let machineColourant of listMachineColourant\">\n            <div class=\"machine-colourant-item\" (click)=\"selectMachineColourant(machineColourant.colourant.colourantId)\">\n              <span *ngIf=\"selectedMachineColourant != null && selectedMachineColourant.colourant.colourantId == machineColourant.colourant.colourantId\" class=\"selected-colourant-bgr\"></span>\n              <span class=\"machine-colourant-bgr\">\n                <span class=\"machine-colourant-current-range\" [ngStyle]=\"{'height': (machineColourant.quantity / maxQuantity) * 100 + '%', 'background-color': machineColourant.colourant.rbgHex, 'border': '1px solid #' + machineColourant.colourant.rbgHex}\"></span>\n              </span>\n              <span class=\"colourant-name\">{{machineColourant.colourant.colourantName}}</span>\n              <span class=\"colourant-code\">{{machineColourant.colourant.colourantCode}}</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"minQuantity != initMinQuantity || warningQuantity != initWarningQuantity\">\n        <div class=\"card-footer\">\n          <button class=\"btn btn-primary\" (click)=\"updateSettingMachine()\">Update</button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-container *ngIf=\"errorType != null\">\n  <pp-modal id=\"warning-colourants-machine-modal\" class=\"modal warning-colourants-machine-modal\">\n    <div class=\"modal-content\" [attr.type]=\"errorType\" >\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{errorType}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('warning-colourants-machine-modal')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        {{errorMessage}}\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal('warning-colourants-machine-modal')\">Close</button>\n      </div>\n    </div>\n  </pp-modal>\n</ng-container>\n\n\n\n<ng-container *ngIf=\"selectedMachineColourant != null\">\n  <pp-modal id=\"view-selected-colourant-machine-modal\" class=\"modal machine-colourant-single-item\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Canister Refill</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-selected-colourant-machine-modal')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n            <div class=\"machine-colorant-slider-group\">\n              <mat-slider class=\"machine-colourant-slider\" [tickInterval]=\"maxQuantity / 20\" [max]=\"maxQuantity\" [min]=\"0\" [step]=\"1\" [(ngModel)]=\"updateAmount\" [vertical]=\"true\" [thumbLabel]=\"true\" (change)=\"updateAmountBySlider()\"></mat-slider>\n            </div>\n          </div>\n\n          <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n            <div class=\"machine-colourant-group\">\n              <div class=\"machine-background\">\n                <span class=\"machine-colourant-max-range\" [ngStyle]=\"{'height': '100%'}\"><span class=\"step-label\">{{maxQuantity}}</span></span>\n                <span class=\"machine-colourant-warning-range\" [ngStyle]=\"{'height': (warningQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{warningQuantity}}</span></span>\n                <span class=\"machine-colourant-min-range\" [ngStyle]=\"{'height': (minQuantity / maxQuantity) * 100 + '%'}\"><span class=\"step-label\">{{minQuantity}}</span></span>\n                <span class=\"machine-colourant-zero-range\" [ngStyle]=\"{'height': '0%'}\"><span class=\"step-label\">0</span></span>\n              </div>\n              <div class=\"machine-colourant-item\">\n                <span class=\"machine-colourant-bgr\">\n                  <span class=\"machine-colourant-update-range\"  [ngStyle]=\"{'height': ((selectedMachineColourant.quantity + addedAmount) / maxQuantity) * 100 + '%', 'background-color': selectedMachineColourant.colourant.rbgHex, 'border': '1px solid #' + selectedMachineColourant.colourant.rbgHex}\"></span>\n                  <span class=\"machine-colourant-current-range\" [ngStyle]=\"{'height': (selectedMachineColourant.quantity / maxQuantity) * 100 + '%', 'background-color': selectedMachineColourant.colourant.rbgHex, 'border': '1px solid #' + selectedMachineColourant.colourant.rbgHex}\"></span>\n                </span>\n                <span class=\"colourant-name\">{{selectedMachineColourant.colourant.colourantName}}</span>\n                <span class=\"colourant-code\">{{selectedMachineColourant.colourant.colourantCode}}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-6\">\n            <div class=\"machine-colourant-info form-detail\">\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Amount:</label>\n                <div class=\"col-md-6\">\n                  <div class=\"input-group\">\n                    <input type=\"number\" [(ngModel)]=\"addedAmount\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" (change)=\"updateAddedAmount('amount')\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">ml</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Refill Factor:</label>\n                <div class=\"col-md-6\">\n                  <div class=\"input-group\">\n                    <input type=\"number\" [(ngModel)]=\"refillFactor\" class=\"form-control\" required=\"required\" [ngModelOptions]=\"{standalone: true}\" (change)=\"updateAddedAmount('refillFactor')\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <div class=\"col-md-12\">\n                  &nbsp;\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Canister</label>\n                <div class=\"col-md-8\">\n                  {{selectedMachineColourant.colourant.colourantId}}\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Component</label>\n                <div class=\"col-md-8\">\n                  {{selectedMachineColourant.colourant.colourantCode}}\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Current</label>\n                <div class=\"col-md-8\">\n                  {{selectedMachineColourant.quantity / 1000}} L\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Maximum</label>\n                <div class=\"col-md-8\">\n                  {{maxQuantity / 1000}} L\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Minimum</label>\n                <div class=\"col-md-8\">\n                  {{minQuantity / 1000}} L\n                </div>\n              </div>\n\n              <div class=\"row form-group\">\n                <label class=\"col-md-4 label-control\">Density</label>\n                <div class=\"col-md-8\">\n                  {{selectedMachineColourant.colourant.density}} kg/L\n                </div>\n              </div>\n\n              <!--<div class=\"row form-group\">-->\n                <!--View Usage >>-->\n              <!--</div>-->\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"updateAndSaving('view-selected-colourant-machine-modal')\">Update</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('view-selected-colourant-machine-modal')\">Cancel</button>\n      </div>\n    </div>\n  </pp-modal>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/machine/machinesetting/machinesetting.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/machine/machinesetting/machinesetting.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".machine-colourant-group {\n  margin: 30px 20px 50px 70px;\n  position: relative;\n  display: flex; }\n  .machine-colourant-group[actiontype=\"open-setting\"] .machine-background {\n    left: -25px; }\n  .machine-colourant-group[actiontype=\"open-setting\"] .machine-background-setting {\n    position: absolute;\n    top: 0px;\n    left: -10px;\n    bottom: 0px; }\n  .machine-colourant-group[actiontype=\"open-setting\"] .machine-background-setting .machine-range-slider {\n      top: -8px;\n      bottom: -8px;\n      position: absolute; }\n  .machine-colourant-group[actiontype=\"open-setting\"] .machine-colourant-min-range .step-label,\n  .machine-colourant-group[actiontype=\"open-setting\"] .machine-colourant-warning-range .step-label {\n    opacity: 0.8; }\n  .machine-colourant-single-item .machine-colourant-group {\n  margin: 0px; }\n  .machine-colourant-single-item .machine-colourant-item {\n  min-width: 60px; }\n  .machine-colourant-single-item .machine-colorant-slider-group {\n  padding-right: 20px;\n  padding-left: 0px; }\n  .machine-colourant-single-item .machine-colourant-zero-range .step-label,\n.machine-colourant-single-item .machine-colourant-min-range .step-label,\n.machine-colourant-single-item .machine-colourant-warning-range .step-label,\n.machine-colourant-single-item .machine-colourant-max-range .step-label {\n  font-size: 80%; }\n  .machine-background {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px; }\n  .machine-background .machine-colourant-zero-range,\n  .machine-background .machine-colourant-min-range,\n  .machine-background .machine-colourant-warning-range,\n  .machine-background .machine-colourant-max-range {\n    width: 100%;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    opacity: 0.5; }\n  .machine-background .machine-colourant-zero-range .step-label,\n    .machine-background .machine-colourant-min-range .step-label,\n    .machine-background .machine-colourant-warning-range .step-label,\n    .machine-background .machine-colourant-max-range .step-label {\n      position: absolute;\n      top: 0px;\n      left: -5px;\n      -webkit-transform: translate(-100%, -50%);\n      transform: translate(-100%, -50%); }\n  .machine-background .machine-colourant-zero-range {\n    border-top: 1px dashed #333333; }\n  .machine-background .machine-colourant-zero-range .step-label {\n      color: #333333; }\n  .machine-background .machine-colourant-warning-range {\n    border-top: 1px dashed darkorange; }\n  .machine-background .machine-colourant-warning-range .step-label {\n      color: darkorange; }\n  .machine-background .machine-colourant-min-range {\n    border-top: 1px dashed red; }\n  .machine-background .machine-colourant-min-range .step-label {\n      color: red; }\n  .machine-background .machine-colourant-max-range {\n    border-top: 1px dashed green; }\n  .machine-background .machine-colourant-max-range .step-label {\n      color: green; }\n  .machine-colorant-slider-group {\n  padding-left: 20px; }\n  .machine-colorant-slider-group .machine-colourant-slider {\n    height: 416px;\n    margin-top: -8px;\n    padding: 8px; }\n  .machine-colourant-item {\n  width: 6.25%;\n  display: inline-block;\n  height: 400px;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative; }\n  .machine-colourant-item .machine-colourant-bgr {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 15px;\n    right: 15px;\n    border: 1px solid #333333; }\n  .machine-colourant-item .machine-colourant-bgr .machine-colourant-update-range,\n    .machine-colourant-item .machine-colourant-bgr .machine-colourant-current-range {\n      position: absolute;\n      display: inline-block;\n      left: 0px;\n      right: 0px;\n      bottom: 0px;\n      border-top: 1px solid #000000; }\n  .machine-colourant-item .machine-colourant-bgr .machine-colourant-update-range {\n      opacity: 0.5; }\n  .machine-colourant-item .selected-colourant-bgr {\n    position: absolute;\n    outline: 2px solid #00417b;\n    top: -15px;\n    left: 0px;\n    right: 0px;\n    bottom: -15px; }\n  .machine-colourant-item .colourant-name {\n    position: absolute;\n    width: 100%;\n    display: inline-block;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: left center;\n            transform-origin: left center;\n    left: 50%;\n    bottom: 0px;\n    white-space: nowrap; }\n  .machine-colourant-item .colourant-code {\n    font-weight: bold;\n    font-size: 120%;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 45px);\n            transform: translate(-50%, 45px); }\n  .warning-colourants-machine-modal .modal-content[type=\"Warning\"] .modal-header,\n.warning-colourants-machine-modal .modal-content[type=\"Warning\"] .modal-body {\n  color: darkorange; }\n  .warning-colourants-machine-modal .modal-content[type=\"Danger\"] .modal-header,\n.warning-colourants-machine-modal .modal-content[type=\"Danger\"] .modal-body {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL21hY2hpbmVzZXR0aW5nL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFjaGluZVxcbWFjaGluZXNldHRpbmdcXG1hY2hpbmVzZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTJCO0VBQzNCLG1CQUFrQjtFQUNsQixjQUFhLEVBMkJkO0VBOUJEO0lBT00sWUFBVyxFQUNaO0VBUkw7SUFXTSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVc7SUFDWCxZQUFXLEVBT1o7RUFyQkw7TUFpQlEsVUFBUztNQUNULGFBQVk7TUFDWixtQkFBa0IsRUFDbkI7RUFwQlA7O0lBMEJRLGFBQVksRUFDYjtFQU1QO0VBRUksWUFBVyxFQUNaO0VBSEg7RUFNSSxnQkFBZSxFQUNoQjtFQVBIO0VBVUksb0JBQW1CO0VBQ25CLGtCQUFpQixFQUNsQjtFQVpIOzs7O0VBbUJNLGVBQWMsRUFDZjtFQUlMO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVztFQUNYLFdBQVUsRUFvRFg7RUF6REQ7Ozs7SUFXSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsWUFBVztJQUNYLGFBQVksRUFZYjtFQTVCSDs7OztNQW1CTSxtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLFdBQVU7TUFDViwwQ0FBeUM7TUFJekMsa0NBQWlDLEVBQ2xDO0VBM0JMO0lBK0JJLCtCQUE4QixFQUkvQjtFQW5DSDtNQWlDTSxlQUFjLEVBQ2Y7RUFsQ0w7SUFzQ0ksa0NBQWlDLEVBSWxDO0VBMUNIO01Bd0NNLGtCQUFpQixFQUNsQjtFQXpDTDtJQTZDSSwyQkFBMEIsRUFJM0I7RUFqREg7TUErQ00sV0FBVSxFQUNYO0VBaERMO0lBb0RJLDZCQUE0QixFQUk3QjtFQXhESDtNQXNETSxhQUFZLEVBQ2I7RUFJTDtFQUNFLG1CQUFrQixFQVFuQjtFQVREO0lBS0ksY0FBbUM7SUFDbkMsaUJBQWlDO0lBQ2pDLGFBSm1CLEVBS3BCO0VBR0g7RUFDRSxhQUF5QjtFQUN6QixzQkFBcUI7RUFDckIsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBZ0VuQjtFQXRFRDtJQVNJLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsWUFBVztJQUNYLFdBQVU7SUFDVixZQUFXO0lBQ1gsMEJBQXlCLEVBMEIxQjtFQXhDSDs7TUE2Qk0sbUJBQWtCO01BQ2xCLHNCQUFxQjtNQUNyQixVQUFTO01BQ1QsV0FBVTtNQUNWLFlBQVc7TUFDWCw4QkFBNkIsRUFDOUI7RUFuQ0w7TUFzQ00sYUFBWSxFQUNiO0VBdkNMO0lBMkNJLG1CQUFrQjtJQUNsQiwyQkFBMEI7SUFDMUIsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFVO0lBQ1YsY0FBYSxFQUNkO0VBakRIO0lBb0RJLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLGtDQUF5QjtZQUF6QiwwQkFBeUI7SUFDekIsc0NBQTZCO1lBQTdCLDhCQUE2QjtJQUM3QixVQUFTO0lBQ1QsWUFBVztJQUNYLG9CQUFtQixFQUNwQjtFQTVESDtJQStESSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFVBQVM7SUFDVCx5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQ2pDO0VBR0g7O0VBS1Esa0JBQWlCLEVBQ2xCO0VBTlA7O0VBWVEsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL21hY2hpbmVzZXR0aW5nL21hY2hpbmVzZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hY2hpbmUtY29sb3VyYW50LWdyb3Vwe1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDUwcHggNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJlthY3Rpb250eXBlPVwib3Blbi1zZXR0aW5nXCJde1xyXG4gICAgLm1hY2hpbmUtYmFja2dyb3VuZHtcclxuICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hY2hpbmUtYmFja2dyb3VuZC1zZXR0aW5ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAubWFjaGluZS1yYW5nZS1zbGlkZXJ7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIGJvdHRvbTogLThweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFjaGluZS1jb2xvdXJhbnQtbWluLXJhbmdlLFxyXG4gICAgLm1hY2hpbmUtY29sb3VyYW50LXdhcm5pbmctcmFuZ2V7XHJcbiAgICAgIC5zdGVwLWxhYmVse1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tYWNoaW5lLWNvbG91cmFudC1zaW5nbGUtaXRlbXtcclxuICAubWFjaGluZS1jb2xvdXJhbnQtZ3JvdXB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1pdGVte1xyXG4gICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3JhbnQtc2xpZGVyLWdyb3Vwe1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LXplcm8tcmFuZ2UsXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LW1pbi1yYW5nZSxcclxuICAubWFjaGluZS1jb2xvdXJhbnQtd2FybmluZy1yYW5nZSxcclxuICAubWFjaGluZS1jb2xvdXJhbnQtbWF4LXJhbmdle1xyXG4gICAgLnN0ZXAtbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hY2hpbmUtYmFja2dyb3VuZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcblxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC16ZXJvLXJhbmdlLFxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1taW4tcmFuZ2UsXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LXdhcm5pbmctcmFuZ2UsXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LW1heC1yYW5nZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgIC5zdGVwLWxhYmVse1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LXplcm8tcmFuZ2V7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMzMzMzMzM7XHJcbiAgICAuc3RlcC1sYWJlbHtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFjaGluZS1jb2xvdXJhbnQtd2FybmluZy1yYW5nZXtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgZGFya29yYW5nZTtcclxuICAgIC5zdGVwLWxhYmVse1xyXG4gICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1taW4tcmFuZ2V7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHJlZDtcclxuICAgIC5zdGVwLWxhYmVse1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LW1heC1yYW5nZXtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgZ3JlZW47XHJcbiAgICAuc3RlcC1sYWJlbHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hY2hpbmUtY29sb3JhbnQtc2xpZGVyLWdyb3Vwe1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgJHNsaWRlcl9wYWRkaW5nIDogOHB4O1xyXG4gIC5tYWNoaW5lLWNvbG91cmFudC1zbGlkZXJ7XHJcbiAgICBoZWlnaHQ6IDQwMHB4ICsgJHNsaWRlcl9wYWRkaW5nICogMjtcclxuICAgIG1hcmdpbi10b3A6IDBweCAtICRzbGlkZXJfcGFkZGluZztcclxuICAgIHBhZGRpbmc6ICRzbGlkZXJfcGFkZGluZztcclxuICB9XHJcbn1cclxuXHJcbi5tYWNoaW5lLWNvbG91cmFudC1pdGVte1xyXG4gIHdpZHRoOiBwZXJjZW50YWdlKDEgLyAxNik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLm1hY2hpbmUtY29sb3VyYW50LWJncntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xyXG5cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgIC8vY29udGVudDogXCJcIjtcclxuICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvL3RvcDogMHB4O1xyXG4gICAgICAvL2xlZnQ6IDBweDtcclxuICAgICAgLy9yaWdodDogMHB4O1xyXG4gICAgICAvL2JvdHRvbTogMHB4O1xyXG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApLCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMiksICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hY2hpbmUtY29sb3VyYW50LXVwZGF0ZS1yYW5nZSxcclxuICAgIC5tYWNoaW5lLWNvbG91cmFudC1jdXJyZW50LXJhbmdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWNoaW5lLWNvbG91cmFudC11cGRhdGUtcmFuZ2V7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZC1jb2xvdXJhbnQtYmdye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICMwMDQxN2I7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sb3VyYW50LW5hbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5jb2xvdXJhbnQtY29kZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNDVweCk7XHJcbiAgfVxyXG59XHJcblxyXG4ud2FybmluZy1jb2xvdXJhbnRzLW1hY2hpbmUtbW9kYWx7XHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAmW3R5cGU9XCJXYXJuaW5nXCJde1xyXG4gICAgICAubW9kYWwtaGVhZGVyLFxyXG4gICAgICAubW9kYWwtYm9keXtcclxuICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZbdHlwZT1cIkRhbmdlclwiXXtcclxuICAgICAgLm1vZGFsLWhlYWRlcixcclxuICAgICAgLm1vZGFsLWJvZHl7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/boostrap/modal.service */ "./src/app/services/boostrap/modal.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store/store.service */ "./src/app/services/store/store.service.ts");
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
    function MachineSettingComponent(modalService, machineService, storeService) {
        this.modalService = modalService;
        this.machineService = machineService;
        this.storeService = storeService;
        this.selectedMachineColourant = null;
    }
    MachineSettingComponent.prototype.ngOnInit = function () {
        this.openSetting = false;
        this.errorType = null;
        this.errorMessage = null;
        this.fetchData();
    };
    MachineSettingComponent.prototype.fetchData = function () {
        var _this = this;
        this.machine = this.storeService.getMachineData();
        if (this.machine != null) {
            this.minQuantity = this.machine.minQuantity;
            this.maxQuantity = this.machine.maxQuantity;
            this.warningQuantity = this.machine.warningQuantity;
            this.initMinQuantity = this.machine.minQuantity;
            this.initWarningQuantity = this.machine.warningQuantity;
            this.machineService.fetchDataFromServer().subscribe(function (datas) {
                _this.processListColourantData(datas, 'init');
            });
        }
    };
    MachineSettingComponent.prototype.processListColourantData = function (datas, type) {
        var _this = this;
        this.listMachineColourant = datas;
        this.selectedMachineColourant = null;
        this.addedAmount = 0;
        this.currentAmount = 0;
        if (type === 'init') {
            for (var _i = 0, _a = this.listMachineColourant; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.errorType == null && item.quantity < this.initWarningQuantity) {
                    this.errorType = 'Warning';
                    this.errorMessage = 'Some colorants are low. Please add more!';
                }
                if (item.quantity < this.initMinQuantity) {
                    this.errorType = 'Danger';
                    this.errorMessage = 'Some colorants are low. Please add more!';
                    break;
                }
            }
            if (this.errorType != null && this.errorMessage != null) {
                setTimeout(function () {
                    _this.openModal('warning-colourants-machine-modal');
                }, 0);
            }
        }
    };
    MachineSettingComponent.prototype.selectMachineColourant = function (colourantId) {
        var _this = this;
        if (this.openSetting === false) {
            var listFilter = this.listMachineColourant.filter(function (item) {
                return item.colourant.colourantId === colourantId;
            });
            this.selectedMachineColourant = listFilter.length > 0 ? listFilter[0] : null;
            this.currentAmount = this.selectedMachineColourant != null ? this.selectedMachineColourant.quantity : 0;
            this.refillFactor = this.selectedMachineColourant != null ? this.selectedMachineColourant.refillFactor : 100;
            this.addedAmount = 0;
            // this.addedAmountPercent = 0;
            this.updateAmount = this.currentAmount + this.addedAmount;
            setTimeout(function () {
                _this.openModal('view-selected-colourant-machine-modal');
            }, 0);
        }
    };
    MachineSettingComponent.prototype.updateAddedAmount = function (type) {
        var maxQuantity = this.maxQuantity;
        if (type === 'amount') {
        }
        else if (type === 'refillFactor') {
            maxQuantity = this.maxQuantity;
        }
        this.updateAmount = this.currentAmount + this.addedAmount;
        if (this.updateAmount > maxQuantity) {
            this.updateAmount = maxQuantity;
            this.addedAmount = maxQuantity - this.updateAmount;
        }
        else if (this.updateAmount < 0) {
            this.updateAmount = 0;
            this.addedAmount = this.updateAmount - this.currentAmount;
        }
    };
    MachineSettingComponent.prototype.updateAmountBySlider = function () {
        this.addedAmount = this.updateAmount - this.currentAmount;
    };
    MachineSettingComponent.prototype.openSettingMachine = function () {
        this.openSetting = true;
    };
    MachineSettingComponent.prototype.closeSettingMachine = function () {
        this.openSetting = false;
        this.minQuantity = this.initMinQuantity;
        this.warningQuantity = this.initWarningQuantity;
    };
    MachineSettingComponent.prototype.updateMachineDataSlider = function (type) {
        if ('warning' === type) {
            if (this.warningQuantity < this.minQuantity) {
                this.warningQuantity = this.minQuantity;
            }
        }
        else if ('min' === type) {
            if (this.minQuantity > this.warningQuantity) {
                this.minQuantity = this.warningQuantity;
            }
        }
    };
    MachineSettingComponent.prototype.updateSettingMachine = function () {
        var _this = this;
        this.machineService.updateSettingMachine(this.minQuantity, this.warningQuantity).subscribe(function (machineData) {
            _this.machine = machineData;
            _this.minQuantity = machineData.minQuantity;
            _this.maxQuantity = machineData.maxQuantity;
            _this.warningQuantity = machineData.warningQuantity;
            _this.initMinQuantity = machineData.minQuantity;
            _this.initWarningQuantity = machineData.warningQuantity;
            _this.machineService.updateMachineLocal(_this.machine);
        });
    };
    MachineSettingComponent.prototype.fillByPercent = function (percent) {
        var remainPercent = percent - (this.currentAmount / this.maxQuantity) * 100;
        this.addedAmount = remainPercent / 100 * this.maxQuantity;
        this.updateAmount = this.currentAmount + this.addedAmount;
    };
    MachineSettingComponent.prototype.updateAndSaving = function (id) {
        var _this = this;
        this.machineService.updateColourantMachineData(this.selectedMachineColourant.colourant, this.addedAmount, this.refillFactor)
            .subscribe(function (datas) {
            _this.processListColourantData(datas, 'update');
            _this.modalService.close(id);
        });
    };
    MachineSettingComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    MachineSettingComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
        this.errorType = null;
        this.errorMessage = null;
    };
    MachineSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machinesetting',
            template: __webpack_require__(/*! ./machinesetting.component.html */ "./src/app/components/machine/machinesetting/machinesetting.component.html"),
            styles: [__webpack_require__(/*! ./machinesetting.component.scss */ "./src/app/components/machine/machinesetting/machinesetting.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"],
            _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List Collection\n\n        <button class=\"close\" (click)=\"addCollection()\"><i class=\"fas fa-plus-square\"></i></button>\n      </div>\n\n      <div class=\"card-body\">\n        <ng-container *ngIf=\"responseMessage != null && responseMessage.type == 'success'\">\n          <div class=\"alert alert-success\">\n            <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"clearResponseMessage()\">&times;</button>\n            {{responseMessage.message}}\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"responseMessage != null && responseMessage.type == 'error'\">\n          <div class=\"alert alert-danger\">\n            <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"clearResponseMessage()\">&times;</button>\n            {{responseMessage.message}}\n          </div>\n        </ng-container>\n\n\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\n            <tr>\n              <th mat-sort-header=\"collectionName\">Collection Name</th>\n              <th mat-sort-header=\"description\">Description</th>\n              <th>Created Date</th>\n              <th>Created By</th>\n              <th class=\"text-center\">Action</th>\n            </tr>\n\n            <tr *ngFor=\"let item of sortedData\">\n              <td>{{item.collectionName}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.createdDate | date: 'dd/MM/yyyy'}}</td>\n              <td>\n                <p *ngIf=\"item.machine == null\">System</p>\n                <p *ngIf=\"item.machine != null\">Me</p>\n              </td>\n              <td class=\"text-center\">\n                <ng-container *ngIf=\"item.machine != null && item.machine.machineId != null && item.machine.machineId > 0\">\n                  <button mat-raised-button\n                          matTooltip=\"Edit Collection\"\n                          aria-label=\"Edit Collection\"\n                          (click)=\"viewCollection(item.collectionId)\">\n                          <i class=\"fas fa-edit\"></i>\n                  </button>\n\n                  <span class=\"vertical-separate-line\">&nbsp;</span>\n\n                  <button mat-raised-button\n                          matTooltip=\"Delete Collection\"\n                          aria-label=\"Delete Collection\"\n                          (click)=\"confirmDeleteCollection(item.collectionId)\">\n                    <i class=\"fas fa-trash-alt\"></i>\n                  </button>\n                </ng-container>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<ng-container *ngIf=\"dbItem != null\">\n  <pp-modal id=\"view-detail-collection\" class=\"modal view-detail-collection\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{dbItem.collectionId > 0 ? 'Edit Collection':  'Add Collection'}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-detail-collection')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <form class=\"form form-horizontal form-detail\">\n          <div class=\"form-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">Collection Name</label>\n              <div class=\"col-md-8\">\n                <input type=\"text\" [(ngModel)]=\"dbItem.collectionName\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n\n                <ng-container *ngIf=\"errorValidation != null && errorValidation['collectionName'] != null\">\n                  <span class=\"error-label\">{{errorValidation['collectionName']}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 label-control\">Description</label>\n              <div class=\"col-md-8\">\n                <textarea [(ngModel)]=\"dbItem.description\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n              </div>\n            </div>\n          </div>\n          <input type=\"hidden\" [(ngModel)]=\"dbItem.collectionId\" [ngModelOptions]=\"{standalone: true}\">\n        </form>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('view-detail-collection')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateOrSavingCollection()\">Save</button>\n      </div>\n    </div>\n  </pp-modal>\n</ng-container>\n\n\n\n<ng-container *ngIf=\"collectionId != null && collectionId > 0\">\n  <pp-modal id=\"confirm-remove-collection-model\" class=\"modal confirm-remove-collection-model\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('confirm-remove-collection-model')\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        Do you want to delete this collection ?\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('view-detail-collection')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteCollection(collectionId)\">Ok</button>\n      </div>\n    </div>\n  </pp-modal>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/setting/collection/collection.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/collection/collection.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-detail-collection .modal-dialog {\n  width: 800px !important;\n  max-width: 800px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nL2NvbGxlY3Rpb24vRzpcXFdvcmtzcGFjZVxcY2xpZW50dmlldHBvd2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZXR0aW5nXFxjb2xsZWN0aW9uXFxjb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0JBQXVCO0VBQ3ZCLDRCQUEyQixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1kZXRhaWwtY29sbGVjdGlvbntcclxuICAubW9kYWwtZGlhbG9ne1xyXG4gICAgd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/collection */ "./src/app/models/collection.ts");
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




var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(collectionService, modalService) {
        this.collectionService = collectionService;
        this.modalService = modalService;
        this.machine = null;
        this.collectionId = null;
        this.dbItem = null;
        this.collectionCode = null;
        this.collectionName = null;
        this.sortedData = null;
        this.responseMessage = null;
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    CollectionComponent.prototype.sortData = function (sort) {
        var data = this.listItems.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'collectionName': return compare(a.collectionName, b.collectionName, isAsc);
                case 'description': return compare(a.description, b.description, isAsc);
                case 'createdDate': return compare(a.createdDate, b.createdDate, isAsc);
                case 'createBy': return compare(a.createBy == null ? 0 : 1, b.createBy == null ? 0 : 1, isAsc);
                default: return 0;
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
            _this.sortedData = _this.listItems;
        });
    };
    CollectionComponent.prototype.addCollection = function () {
        var _this = this;
        this.dbItem = new _models_collection__WEBPACK_IMPORTED_MODULE_2__["CollectionModel"]();
        setTimeout(function () {
            _this.openModal('view-detail-collection');
        }, 100);
    };
    CollectionComponent.prototype.viewCollection = function (collectionId) {
        var _this = this;
        this.collectionService.findById(collectionId).subscribe(function (data) {
            _this.dbItem = data;
            setTimeout(function () {
                _this.openModal('view-detail-collection');
            }, 100);
        });
    };
    CollectionComponent.prototype.confirmDeleteCollection = function (collectionId) {
        var _this = this;
        this.collectionId = collectionId;
        setTimeout(function () {
            _this.openModal('confirm-remove-collection-model');
        }, 100);
    };
    CollectionComponent.prototype.deleteCollection = function (collectionId) {
        var _this = this;
        this.collectionService.deleteCollection(collectionId).subscribe(function (data) {
            _this.responseMessage = data;
            _this.collectionId = null;
            _this.closeModal('confirm-remove-collection-model');
            _this.fetchData();
        });
    };
    CollectionComponent.prototype.updateOrSavingCollection = function () {
        var _this = this;
        var errorData = this.validateDataBeforeSubmit();
        if (!errorData.hasError) {
            this.collectionService.updateOrSavingCollection(this.dbItem).subscribe(function (data) {
                _this.dbItem = data;
                _this.closeModal('view-detail-collection');
                _this.dbItem = null;
                _this.fetchData();
            });
        }
        else {
            this.errorValidation = errorData.mapErrors;
        }
    };
    CollectionComponent.prototype.validateDataBeforeSubmit = function () {
        var hasError = false;
        var mapErrors = {};
        if (this.dbItem.collectionName == null || this.dbItem.collectionName.trim() === '') {
            hasError = true;
            mapErrors['collectionName'] = 'Please enter the collection name!';
        }
        return {
            hasError: hasError, mapErrors: mapErrors
        };
    };
    CollectionComponent.prototype.clearResponseMessage = function () {
        this.responseMessage = null;
    };
    CollectionComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    CollectionComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/setting/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.scss */ "./src/app/components/setting/collection/collection.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_collection_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"], _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
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

module.exports = "<div class=\"block-header\">\n  <h1>Colorant Manager</h1>\n</div>\n\n<div class=\"row\" ng-init=\"testInput='value'\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List Colorant\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\n            <tr>\n              <th mat-sort-header=\"colourantCode\">Colourant Code</th>\n              <th mat-sort-header=\"colourantName\">Colourant Name</th>\n              <th mat-sort-header=\"density\">Density</th>\n              <th mat-sort-header=\"pricePerUnit\">Price Per Unit</th>\n              <th mat-sort-header=\"surcharge\">Surcharge</th>\n              <th>Color</th>\n              <th>Kind</th>\n            </tr>\n\n            <tr *ngFor=\"let colorant of sortedData\">\n              <td>{{colorant.colourantCode}}</td>\n              <td>{{colorant.colourantName}}</td>\n              <td>{{colorant.density}}</td>\n              <td>{{colorant.pricePerUnit}}</td>\n              <td>{{colorant.surcharge}}</td>\n              <td><span [ngStyle]=\"{'background': colorant.rbgHex, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span></td>\n              <td>{{colorant.kind}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/setting/colorant/colorant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/colorant/colorant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nL2NvbG9yYW50L0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ1xcY29sb3JhbnRcXGNvbG9yYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nL2NvbG9yYW50L2NvbG9yYW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

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
        this.code = null;
        this.name = null;
        this.filter();
    };
    ColorantComponent.prototype.filter = function () {
        var _this = this;
        this.colourantService.getListItems().subscribe(function (data) {
            _this.dbItems = data;
            _this.sortedData = _this.dbItems;
        });
    };
    ColorantComponent.prototype.resetFilter = function () {
        this.code = null;
        this.name = null;
    };
    ColorantComponent.prototype.sortData = function (sort) {
        if (!sort.active || sort.direction === '') {
            this.sortedData = this.dbItems;
            return;
        }
        this.sortedData = this.dbItems.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'colourantCode': return compare(a.colourantCode, b.colourantCode, isAsc);
                case 'colourantName': return compare(a.colourantName, b.colourantName, isAsc);
                case 'density': return compare(a.density, b.density, isAsc);
                case 'pricePerUnit': return compare(a.pricePerUnit, b.pricePerUnit, isAsc);
                case 'surcharge': return compare(a.surcharge, b.surcharge, isAsc);
                default: return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
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

/***/ "./src/app/components/setting/customer/customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/customer/customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n  <h1>Customer Manager</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        List Customers\r\n\r\n        <button class=\"close\" (click)=\"addCustomer()\"><i class=\"fas fa-plus-square\"></i></button>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <ng-container *ngIf=\"responseMessage != null && responseMessage.type == 'success'\">\r\n          <div class=\"alert alert-success\">\r\n            <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"clearResponseMessage()\">&times;</button>\r\n            {{responseMessage.message}}\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"responseMessage != null && responseMessage.type == 'error'\">\r\n          <div class=\"alert alert-danger\">\r\n            <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"clearResponseMessage()\">&times;</button>\r\n            {{responseMessage.message}}\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\r\n            <tr>\r\n              <th mat-sort-header=\"name\">Name</th>\r\n              <th mat-sort-header=\"phone\">Phone Number</th>\r\n              <th mat-sort-header=\"email\">Email</th>\r\n              <th mat-sort-header=\"address\">Address</th>\r\n              <th mat-sort-header=\"note\">Note</th>\r\n              <th>Action</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let customer of sortedData\">\r\n              <td>{{customer.name}}</td>\r\n              <td>{{customer.phone}}</td>\r\n              <td>{{customer.email}}</td>\r\n              <td>{{customer.address}}</td>\r\n              <td>{{customer.note}}</td>\r\n              <td>\r\n                <button mat-raised-button\r\n                        matTooltip=\"Edit Collection\"\r\n                        aria-label=\"Edit Collection\"\r\n                        (click)=\"viewCustomer(customer)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n\r\n                <button mat-raised-button\r\n                        matTooltip=\"Delete Collection\"\r\n                        aria-label=\"Delete Collection\"\r\n                        (click)=\"confirmDeleteCustomer(customer)\">\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"dbItem != null\">\r\n  <pp-modal id=\"view-detail-customer\" class=\"modal view-detail-customer\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{dbItem.customerId > 0 ? 'Edit Customer':  'Add Customer'}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('view-detail-customer')\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <form class=\"form form-horizontal form-detail\">\r\n          <div class=\"form-body\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Name</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"text\" [(ngModel)]=\"dbItem.name\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Phone Number</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"text\" [(ngModel)]=\"dbItem.phone\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Email</label>\r\n              <div class=\"col-md-8\">\r\n                <input type=\"text\" [(ngModel)]=\"dbItem.email\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Address</label>\r\n              <div class=\"col-md-8\">\r\n                <textarea [(ngModel)]=\"dbItem.address\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 label-control\">Note</label>\r\n              <div class=\"col-md-8\">\r\n                <textarea [(ngModel)]=\"dbItem.note\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('view-detail-customer')\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateOrSavingCustomer()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </pp-modal>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"selectedCustomerId != null && selectedCustomerId > 0\">\r\n  <pp-modal id=\"confirm-remove-customer-model\" class=\"modal confirm-remove-customer-model\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Confirm</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal('confirm-remove-customer-model')\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        Do you want to delete this customer?\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal('confirm-remove-customer-model')\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteCustomer()\">Ok</button>\r\n      </div>\r\n    </div>\r\n  </pp-modal>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/setting/customer/customer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/setting/customer/customer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/setting/customer/customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/customer/customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/customer/customer.service */ "./src/app/services/customer/customer.service.ts");
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




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customerService, modalService) {
        this.customerService = customerService;
        this.modalService = modalService;
        this.responseMessage = null;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.responseMessage = null;
        this.dbItem = null;
        this.selectedCustomerId = null;
        this.fetchData();
    };
    CustomerComponent.prototype.fetchData = function () {
        var _this = this;
        this.customerService.findAll().subscribe(function (data) {
            _this.dbItems = data;
            _this.sortedData = _this.dbItems;
        });
    };
    CustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        this.dbItem = new _models_customer__WEBPACK_IMPORTED_MODULE_1__["CustomerModel"]();
        setTimeout(function () {
            _this.openModal('view-detail-customer');
        }, 100);
    };
    CustomerComponent.prototype.viewCustomer = function (customer) {
        var _this = this;
        this.dbItem = customer;
        setTimeout(function () {
            _this.openModal('view-detail-customer');
        }, 100);
    };
    CustomerComponent.prototype.validateDataBeforeSubmit = function () {
        var hasError = false;
        var mapErrors = {};
        if (this.dbItem.name == null || this.dbItem.name.trim() === '') {
            hasError = true;
            mapErrors['name'] = 'Please enter the customer name!';
        }
        if (this.dbItem.phone == null || this.dbItem.phone.trim() === '') {
            hasError = true;
            mapErrors['phone'] = 'Please enter the customer phone number!';
        }
        if (this.dbItem.address == null || this.dbItem.address.trim() === '') {
            hasError = true;
            mapErrors['address'] = 'Please enter the customer address!';
        }
        if (this.dbItem.email == null || this.dbItem.email.trim() === '') {
            hasError = true;
            mapErrors['email'] = 'Please enter the customer email!';
        }
        return {
            hasError: hasError, mapErrors: mapErrors
        };
    };
    CustomerComponent.prototype.updateOrSavingCustomer = function () {
        var _this = this;
        var errorData = this.validateDataBeforeSubmit();
        if (!errorData.hasError) {
            this.customerService.saveOrUpdate(this.dbItem).subscribe(function (data) {
                _this.dbItem = data;
                _this.closeModal('view-detail-customer');
                _this.dbItem = null;
                _this.fetchData();
            });
        }
        else {
            this.mapErrors = errorData.mapErrors;
        }
    };
    CustomerComponent.prototype.confirmDeleteCustomer = function (customer) {
        var _this = this;
        this.selectedCustomerId = customer.customerId;
        setTimeout(function () {
            _this.openModal('confirm-remove-customer-model');
        }, 100);
    };
    CustomerComponent.prototype.deleteCustomer = function () {
        var _this = this;
        this.customerService.deleteCustomer(this.selectedCustomerId).subscribe(function (data) {
            _this.responseMessage = data;
            _this.selectedCustomerId = null;
            _this.closeModal('confirm-remove-customer-model');
            _this.fetchData();
        });
    };
    CustomerComponent.prototype.clearResponseMessage = function () {
        this.responseMessage = null;
    };
    CustomerComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    CustomerComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    CustomerComponent.prototype.sortData = function (sort) {
        if (!sort.active || sort.direction === '') {
            this.sortedData = this.dbItems;
            return;
        }
        this.sortedData = this.dbItems.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'phone': return compare(a.phone, b.phone, isAsc);
                case 'email': return compare(a.email, b.email, isAsc);
                case 'address': return compare(a.address, b.address, isAsc);
                case 'note': return compare(a.note, b.note, isAsc);
                default: return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/setting/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/components/setting/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _services_boostrap_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/product/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/setting/product/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n  <h1>Product Manager</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List Product\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\">\n            <tr>\n              <th>#</th>\n              <th mat-sort-header=\"productCode\">Product Code</th>\n              <th mat-sort-header=\"productName\">Product Name</th>\n              <th mat-sort-header=\"createdDate\">Created Date</th>\n              <th mat-sort-header=\"createBy\">Created By</th>\n            </tr>\n\n            <ng-container *ngFor=\"let item of sortedData let i=index\">\n              <tr>\n                <td>\n                  <span *ngIf=\"currentProductViewer == item.productId\" (click)=\"showProductDetail(-1)\"><i class=\"fas fa-minus\"></i></span>\n                  <span *ngIf=\"currentProductViewer != item.productId\" (click)=\"showProductDetail(item.productId)\"><i class=\"fas fa-plus\"></i></span>\n                </td>\n                <td>{{item.productCode}}</td>\n                <td>{{item.productName}}</td>\n                <td>{{item.createdDate | date : 'dd/MM/yyyy'}}</td>\n                <td>\n                  <span *ngIf=\"item.createBy == null\">\n                    System\n                  </span>\n\n                  <span *ngIf=\"item.createBy != null\">\n                    Me\n                  </span>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"currentProductViewer == item.productId\" selected class=\"product-detail-row\">\n                <td></td>\n                <td colspan=\"4\">\n                  <app-viewdetail [productId]=\"item.productId\"></app-viewdetail>\n                </td>\n              </tr>\n            </ng-container>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        var data = this.listItems.slice();
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'productCode': return compare(a.productCode, b.productCode, isAsc);
                case 'productName': return compare(a.productName, b.productName, isAsc);
                case 'createdDate': return compare(a.createdDate, b.createdDate, isAsc);
                case 'createBy': return compare(a.createBy == null ? 0 : 1, b.createBy == null ? 0 : 1, isAsc);
                default: return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    ProductComponent.prototype.fletchData = function () {
        var _this = this;
        this.productService.getListItems().subscribe(function (data) {
            _this.listItems = data;
            _this.sortedData = _this.listItems;
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

/***/ "./src/app/components/setting/productbase/productbase.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/productbase/productbase.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  productbase works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/setting/productbase/productbase.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/setting/productbase/productbase.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9wcm9kdWN0YmFzZS9wcm9kdWN0YmFzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/setting/productbase/productbase.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/setting/productbase/productbase.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductbaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductbaseComponent", function() { return ProductbaseComponent; });
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

var ProductbaseComponent = /** @class */ (function () {
    function ProductbaseComponent() {
    }
    ProductbaseComponent.prototype.ngOnInit = function () {
    };
    ProductbaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productbase',
            template: __webpack_require__(/*! ./productbase.component.html */ "./src/app/components/setting/productbase/productbase.component.html"),
            styles: [__webpack_require__(/*! ./productbase.component.scss */ "./src/app/components/setting/productbase/productbase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductbaseComponent);
    return ProductbaseComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/directions/boostrap/modal/modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/directions/boostrap/modal/modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-modal modal-dialog modal-dialog-centered\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"modal-backdrop fade show\"></div>\n"

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

/***/ "./src/app/directions/product/base-can/base-can.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/directions/product/base-can/base-can.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"productBase != null\">\n  <div class=\"base-can-information\">\n    <div class=\"base-can-empty\">\n    <span class=\"base-can-background\">\n      <span class=\"base-can-volume\" [ngStyle]=\"{'background-color': productBase.rbgHex, 'height': '100%'}\">\n        <span class=\"can-base-info\">\n          <span class=\"base-type\">Base : {{productBase.base.baseCode}}</span>\n          <span class=\"base-volume\">{{canSize + \" Liter\" }}</span>\n          <span class=\"base-name\">{{collection.collectionName}}</span>\n        </span>\n      </span>\n    </span>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/directions/product/base-can/base-can.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/directions/product/base-can/base-can.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base-can-information {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aW9ucy9wcm9kdWN0L2Jhc2UtY2FuL0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcZGlyZWN0aW9uc1xccHJvZHVjdFxcYmFzZS1jYW5cXGJhc2UtY2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0aW9ucy9wcm9kdWN0L2Jhc2UtY2FuL2Jhc2UtY2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2UtY2FuLWluZm9ybWF0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/directions/product/base-can/base-can.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/directions/product/base-can/base-can.component.ts ***!
  \*******************************************************************/
/*! exports provided: BaseCanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCanComponent", function() { return BaseCanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/product_base */ "./src/app/models/product_base.ts");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/collection */ "./src/app/models/collection.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseCanComponent = /** @class */ (function () {
    function BaseCanComponent() {
    }
    BaseCanComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_product_base__WEBPACK_IMPORTED_MODULE_1__["ProductBaseModel"])
    ], BaseCanComponent.prototype, "productBase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BaseCanComponent.prototype, "canSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_collection__WEBPACK_IMPORTED_MODULE_2__["CollectionModel"])
    ], BaseCanComponent.prototype, "collection", void 0);
    BaseCanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-can',
            template: __webpack_require__(/*! ./base-can.component.html */ "./src/app/directions/product/base-can/base-can.component.html"),
            styles: [__webpack_require__(/*! ./base-can.component.scss */ "./src/app/directions/product/base-can/base-can.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseCanComponent);
    return BaseCanComponent;
}());



/***/ }),

/***/ "./src/app/directions/product/tablecolourant/table-colourants.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/directions/product/tablecolourant/table-colourants.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"listFormulaColorant != null\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered\" >\n      <tr>\n        <th style=\"width: 30%\">Component</th>\n        <th style=\"width: 20%\">ml</th>\n        <th style=\"width: 50%\">Color\n      </tr>\n\n      <ng-container *ngFor=\"let colorantItem of listFormulaColorant\">\n        <tr *ngIf=\"colorantItem.quantity != null && colorantItem.quantity > 0\">\n          <td>{{colorantItem.colourant.colourantName}}</td>\n          <td>{{roundNumber((colorantItem.quantity / baseOnCan) * canSize)}}</td>\n          <td>\n          <span class=\"color-bar\" >\n            <span class=\"color-select\" [ngStyle]=\"{'background': colorantItem.colourant.rbgHex, 'width': (colorantItem.quantity / maxColorQuantity) * 100 + '%'}\"></span>\n          </span>\n          </td>\n        </tr>\n      </ng-container>\n    </table>\n  </div>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/directions/product/tablecolourant/table-colourants.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/directions/product/tablecolourant/table-colourants.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-bar {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  height: 1em; }\n  .color-bar .color-select {\n    display: inline-block;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aW9ucy9wcm9kdWN0L3RhYmxlY29sb3VyYW50L0c6XFxXb3Jrc3BhY2VcXGNsaWVudHZpZXRwb3dlci9zcmNcXGFwcFxcZGlyZWN0aW9uc1xccHJvZHVjdFxcdGFibGVjb2xvdXJhbnRcXHRhYmxlLWNvbG91cmFudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixZQUFXLEVBU1o7RUFiRDtJQU9JLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9kaXJlY3Rpb25zL3Byb2R1Y3QvdGFibGVjb2xvdXJhbnQvdGFibGUtY29sb3VyYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1iYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDFlbTtcclxuXHJcbiAgLmNvbG9yLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/directions/product/tablecolourant/table-colourants.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/directions/product/tablecolourant/table-colourants.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableColourantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColourantsComponent", function() { return TableColourantsComponent; });
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

var TableColourantsComponent = /** @class */ (function () {
    function TableColourantsComponent() {
    }
    TableColourantsComponent.prototype.ngOnInit = function () {
    };
    TableColourantsComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        var baseOnCanChange = changes.baseOnCan;
        if (baseOnCanChange != null) {
            this._baseOnCan = baseOnCanChange.currentValue;
        }
        var canSizeChange = changes.canSize;
        if (canSizeChange != null) {
            this._canSize = canSizeChange.currentValue;
        }
        var listFormulaColorantChange = changes.listFormulaColorant;
        if (listFormulaColorantChange != null) {
            this._listFormulaColorant = listFormulaColorantChange.currentValue;
        }
        var maxColorQuantityChange = changes.maxColorQuantity;
        if (maxColorQuantityChange != null) {
            this._maxColorQuantity = maxColorQuantityChange.currentValue;
        }
    };
    TableColourantsComponent.prototype.roundNumber = function (num) {
        return Math.round(num * 100) / 100;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TableColourantsComponent.prototype, "baseOnCan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TableColourantsComponent.prototype, "canSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableColourantsComponent.prototype, "listFormulaColorant", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TableColourantsComponent.prototype, "maxColorQuantity", void 0);
    TableColourantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-colourants',
            template: __webpack_require__(/*! ./table-colourants.component.html */ "./src/app/directions/product/tablecolourant/table-colourants.component.html"),
            styles: [__webpack_require__(/*! ./table-colourants.component.scss */ "./src/app/directions/product/tablecolourant/table-colourants.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableColourantsComponent);
    return TableColourantsComponent;
}());



/***/ }),

/***/ "./src/app/directions/product/viewdetail/viewdetail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/directions/product/viewdetail/viewdetail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-borderless\">\n    <thead>\n    <tr>\n      <th>Base</th>\n      <th>Density</th>\n      <th>Color</th>\n    </tr>\n    </thead>\n    <tr *ngFor=\"let item of listProductBaseCan let i=index\">\n      <td>{{item.base.baseName}}</td>\n      <td>{{item.density}}</td>\n      <td>\n        <span [ngStyle]=\"{'background': item.rbgHex, 'display': 'inline-block', 'width': '30px', 'height': '30px', 'border': '1px solid #333'}\"></span>\n      </td>\n    </tr>\n  </table>\n</div>\n"

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

/***/ "./src/app/file.service.ts":
/*!*********************************!*\
  !*** ./src/app/file.service.ts ***!
  \*********************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FileService = /** @class */ (function () {
    function FileService() {
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (error) {
                throw error;
            }
        }
        else {
            console.warn('Could not load electron ipc');
        }
    }
    FileService.prototype.saveFile = function () {
        // return new Promise<string[]>((resolve, reject) => {
        //   this.ipc.once("getFilesResponse", (event, arg) => {
        //     resolve(arg);
        //   });
        //   this.ipc.send("getFiles");
        // });
        this.ipc.send('saveFile', { data: 'test' });
    };
    FileService.prototype.getFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.ipc.once("getFilesResponse", function (event, arg) {
                            resolve(arg);
                        });
                        _this.ipc.send('readFile');
                    })];
            });
        });
    };
    FileService.prototype.saveDispenseTask = function (baseCode, baseOnCan, canSize, formulaColourants) {
        var dispenseTaskData = {
            baseCode: baseCode,
            canSize: canSize,
            formulaColourants: this.convertFormulaColourantData(formulaColourants, baseOnCan, canSize)
        };
        this.ipc.send('saveFile', dispenseTaskData);
    };
    FileService.prototype.convertFormulaColourantData = function (formulaColourants, baseOnCan, canSize) {
        var result = [];
        for (var _i = 0, formulaColourants_1 = formulaColourants; _i < formulaColourants_1.length; _i++) {
            var fcData = formulaColourants_1[_i];
            result.push({ colourantCode: fcData.colourant.colourantCode, quantity: fcData.quantity / baseOnCan * canSize });
        }
        return result;
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.service */ "./src/app/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// const fs = require('fs');


var GlobalVariable = /** @class */ (function () {
    function GlobalVariable(fileService) {
        this.fileService = fileService;
    }
    GlobalVariable.prototype.getBaseApiUrl = function () {
        var test = false;
        var res = '';
        if (test) {
            res = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].settings.serverendpoint;
        }
        else {
            if (this.BASE_API_URL) {
                res = this.BASE_API_URL;
            }
        }
        return res;
    };
    GlobalVariable.prototype.getEndpoint = function () {
        var me = this;
        this.fileService.getFiles().then(function (data) {
            var d = JSON.parse(data.toString());
            if (d.endPoint) {
                me.BASE_API_URL = d.endPoint;
            }
        });
    };
    GlobalVariable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], GlobalVariable);
    return GlobalVariable;
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
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                // MatSnackBarModule,
                // MatStepperModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                // MatTabsModule,
                // MatToolbarModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                // MatNativeDateModule,
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["ColorPickerModule"]
            ],
            exports: [
                // Material
                // MatAutocompleteModule,
                // MatButtonModule,
                // MatButtonToggleModule,
                // MatCardModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                // MatSnackBarModule,
                // MatStepperModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                // MatTabsModule,
                // MatToolbarModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                // MatNativeDateModule,
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["ColorPickerModule"]
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
    Object.defineProperty(CollectionModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
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

/***/ "./src/app/models/company.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/company.model.ts ***!
  \*****************************************/
/*! exports provided: CompanyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModel", function() { return CompanyModel; });
var CompanyModel = /** @class */ (function () {
    function CompanyModel() {
    }
    Object.defineProperty(CompanyModel.prototype, "companyId", {
        get: function () {
            return this._companyId;
        },
        set: function (value) {
            this._companyId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "website", {
        get: function () {
            return this._website;
        },
        set: function (value) {
            this._website = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompanyModel.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    return CompanyModel;
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

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: CustomerModel, CustomerSelectedModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSelectedModel", function() { return CustomerSelectedModel; });
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
    }
    Object.defineProperty(CustomerModel.prototype, "customerId", {
        get: function () {
            return this._customerId;
        },
        set: function (value) {
            this._customerId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerModel;
}());

var CustomerSelectedModel = /** @class */ (function () {
    function CustomerSelectedModel() {
    }
    Object.defineProperty(CustomerSelectedModel.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerSelectedModel.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerSelectedModel;
}());



/***/ }),

/***/ "./src/app/models/dispense.task.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/dispense.task.model.ts ***!
  \***********************************************/
/*! exports provided: MAP_DISPENSE_TASK_STATE, MAP_DISPENSE_TASK_STEP_TYPE, DispenseDataModel, DispenseStepDataModel, DispenseTaskStepModel, DispenseTaskModel, MachineFormulaProductBaseLogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_DISPENSE_TASK_STATE", function() { return MAP_DISPENSE_TASK_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_DISPENSE_TASK_STEP_TYPE", function() { return MAP_DISPENSE_TASK_STEP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseDataModel", function() { return DispenseDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseStepDataModel", function() { return DispenseStepDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseTaskStepModel", function() { return DispenseTaskStepModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseTaskModel", function() { return DispenseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineFormulaProductBaseLogModel", function() { return MachineFormulaProductBaseLogModel; });
var MAP_DISPENSE_TASK_STATE = {
    WAITING: 'WAITING',
    IN_PROGRESS: 'START',
    DONE: 'DONE',
};
var MAP_DISPENSE_TASK_STEP_TYPE = {
    PREPARE: 'prepare',
    PUMPING: 'pumping',
    FINISHED: 'finished'
};
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

var DispenseTaskStepModel = /** @class */ (function () {
    function DispenseTaskStepModel(type, taskData, callBackFunction) {
        this._type = type;
        this._taskData = taskData;
        this._callBackFunction = callBackFunction;
        this._status = MAP_DISPENSE_TASK_STATE.WAITING;
        this._totalProcess = 2000;
    }
    Object.defineProperty(DispenseTaskStepModel.prototype, "taskId", {
        get: function () {
            return this._taskId;
        },
        set: function (value) {
            this._taskId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "process", {
        get: function () {
            return this._process;
        },
        set: function (value) {
            this._process = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "totalProcess", {
        get: function () {
            return this._totalProcess;
        },
        set: function (value) {
            this._totalProcess = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "callBackFunction", {
        get: function () {
            return this._callBackFunction;
        },
        set: function (value) {
            this._callBackFunction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "parentTask", {
        get: function () {
            return this._parentTask;
        },
        set: function (value) {
            this._parentTask = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskStepModel.prototype, "taskData", {
        get: function () {
            return this._taskData;
        },
        set: function (value) {
            this._taskData = value;
        },
        enumerable: true,
        configurable: true
    });
    return DispenseTaskStepModel;
}());

var DispenseTaskModel = /** @class */ (function () {
    function DispenseTaskModel(type, childrenTask, taskData, callBackFunction) {
        this._type = type;
        this._childrenTask = childrenTask;
        this._taskData = taskData;
        this._callBackFunction = callBackFunction;
        this._status = MAP_DISPENSE_TASK_STATE.WAITING;
        this._totalProcess = 2000;
    }
    Object.defineProperty(DispenseTaskModel.prototype, "taskId", {
        get: function () {
            return this._taskId;
        },
        set: function (value) {
            this._taskId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "process", {
        get: function () {
            return this._process;
        },
        set: function (value) {
            this._process = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "totalProcess", {
        get: function () {
            return this._totalProcess;
        },
        set: function (value) {
            this._totalProcess = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "callBackFunction", {
        get: function () {
            return this._callBackFunction;
        },
        set: function (value) {
            this._callBackFunction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "taskData", {
        get: function () {
            return this._taskData;
        },
        set: function (value) {
            this._taskData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DispenseTaskModel.prototype, "childrenTask", {
        get: function () {
            return this._childrenTask;
        },
        set: function (value) {
            this._childrenTask = value;
        },
        enumerable: true,
        configurable: true
    });
    return DispenseTaskModel;
}());

var MachineFormulaProductBaseLogModel = /** @class */ (function () {
    function MachineFormulaProductBaseLogModel() {
    }
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "machineFormulaProductBaseId", {
        get: function () {
            return this._machineFormulaProductBaseId;
        },
        set: function (value) {
            this._machineFormulaProductBaseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "formulaProductBase", {
        get: function () {
            return this._formulaProductBase;
        },
        set: function (value) {
            this._formulaProductBase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "canSize", {
        get: function () {
            return this._canSize;
        },
        set: function (value) {
            this._canSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        set: function (value) {
            this._createdDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MachineFormulaProductBaseLogModel.prototype, "finishedDate", {
        get: function () {
            return this._finishedDate;
        },
        set: function (value) {
            this._finishedDate = value;
        },
        enumerable: true,
        configurable: true
    });
    return MachineFormulaProductBaseLogModel;
}());



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
    Object.defineProperty(FormulaModel.prototype, "baseOnCan", {
        get: function () {
            return this._baseOnCan;
        },
        set: function (value) {
            this._baseOnCan = value;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(FormulaModel.prototype, "machine", {
        get: function () {
            return this._machine;
        },
        set: function (value) {
            this._machine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "approximateColor", {
        get: function () {
            return this._approximateColor;
        },
        set: function (value) {
            this._approximateColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "substrate", {
        get: function () {
            return this._substrate;
        },
        set: function (value) {
            this._substrate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaModel.prototype, "listCustomer", {
        get: function () {
            return this._listCustomer;
        },
        set: function (value) {
            this._listCustomer = value;
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

/***/ "./src/app/models/formulacustomer.ts":
/*!*******************************************!*\
  !*** ./src/app/models/formulacustomer.ts ***!
  \*******************************************/
/*! exports provided: FormulaCustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaCustomerModel", function() { return FormulaCustomerModel; });
var FormulaCustomerModel = /** @class */ (function () {
    function FormulaCustomerModel() {
    }
    Object.defineProperty(FormulaCustomerModel.prototype, "formulaCustomerId", {
        get: function () {
            return this._formulaCustomerId;
        },
        set: function (value) {
            this._formulaCustomerId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaCustomerModel.prototype, "formula", {
        get: function () {
            return this._formula;
        },
        set: function (value) {
            this._formula = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaCustomerModel.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaCustomerModel;
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
/*! exports provided: MachineModel, RoleModel, UserModel, MachineColourantModel, ResponseMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineModel", function() { return MachineModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineColourantModel", function() { return MachineColourantModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseMessageModel", function() { return ResponseMessageModel; });
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
    Object.defineProperty(MachineModel.prototype, "warningQuantity", {
        get: function () {
            return this._warningQuantity;
        },
        set: function (value) {
            this._warningQuantity = value;
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
    Object.defineProperty(UserModel.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
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
    Object.defineProperty(MachineColourantModel.prototype, "refillFactor", {
        get: function () {
            return this._refillFactor;
        },
        set: function (value) {
            this._refillFactor = value;
        },
        enumerable: true,
        configurable: true
    });
    return MachineColourantModel;
}());

var ResponseMessageModel = /** @class */ (function () {
    function ResponseMessageModel() {
    }
    Object.defineProperty(ResponseMessageModel.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessageModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    return ResponseMessageModel;
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function BaseService(http, globalVariable) {
        this.http = http;
        this.globalVariable = globalVariable;
    }
    BaseService.prototype.getListBaseFromServer = function () {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'base/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listBases = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var base = data_1[_i];
                    listBases.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToBaseModel(base));
                }
            }
            return listBases;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]])
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function CollectionService(http, storeService, globalVariable) {
        this.http = http;
        this.storeService = storeService;
        this.globalVariable = globalVariable;
    }
    CollectionService.prototype.getListItems = function () {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var collection = data_1[_i];
                    listItems.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertCollectionModel(collection));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            return [];
        }));
    };
    CollectionService.prototype.findById = function (collectionId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/findById/' + collectionId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertCollectionModel(data);
        }));
    };
    CollectionService.prototype.updateOrSavingCollection = function (collection) {
        var machine = this.storeService.getMachineData();
        var dt = {
            collectionId: collection.collectionId,
            collectionName: collection.collectionName,
            description: collection.description,
            machine: { machineId: machine.machineId }
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'collection/save', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToMachineModel(data);
        }));
    };
    CollectionService.prototype.deleteCollection = function (collectionId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/delete/' + collectionId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToResponseMessageModel(data);
        }));
    };
    CollectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"], _global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"]])
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_colorant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/colorant */ "./src/app/models/colorant.ts");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function ColourantService(http, globalVariable) {
        this.http = http;
        this.globalVariable = globalVariable;
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
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'colourant/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var listColourant = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var colorant = data_1[_i];
                    listColourant.push(_this.convertColourantToDTO(colorant));
                }
            }
            return listColourant;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            return [];
        }));
    };
    ColourantService.prototype.convertColourantToDTO = function (object) {
        var colourantModel = new _models_colorant__WEBPACK_IMPORTED_MODULE_2__["ColorantModel"]();
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
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]])
    ], ColourantService);
    return ColourantService;
}());



/***/ }),

/***/ "./src/app/services/customer/customer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/customer/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerService = /** @class */ (function () {
    function CustomerService(http, storeService, globalVariable) {
        this.http = http;
        this.storeService = storeService;
        this.globalVariable = globalVariable;
    }
    CustomerService.prototype.findAll = function () {
        var machine = this.storeService.getMachineData();
        if (machine != null && machine.machineId > 0) {
            return this.http.get(this.globalVariable.getBaseApiUrl() + 'customer/findAll/' + machine.machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                var listCustomer = [];
                if (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var customer = data_1[_i];
                        listCustomer.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToCustomerModel(customer));
                    }
                }
                return listCustomer;
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
                return [];
            }));
        }
    };
    CustomerService.prototype.saveOrUpdate = function (dbItem) {
        var machine = this.storeService.getMachineData();
        var dt = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToCustomerDBItem(dbItem, machine);
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'customer/save', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToMachineModel(data);
        }));
    };
    CustomerService.prototype.deleteCustomer = function (customerId) {
        var machine = this.storeService.getMachineData();
        var dt = {
            customerId: customerId,
            machine: { machineId: machine.machineId }
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'customer/delete', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            console.log(data);
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_4__["default"].convertToResponseMessageModel(data);
        }));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/dashboard/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(router, storeService, machineService) {
        this.router = router;
        this.storeService = storeService;
        this.machineService = machineService;
    }
    DashboardService.prototype.validateMachineData = function () {
        var _this = this;
        var machine = this.storeService.getMachineData();
        if (machine != null) {
            this.machineService.fetchDataFromServer().subscribe(function (data) {
                var isLowColourant = false;
                var listMachineColourants = data;
                if (listMachineColourants == null || listMachineColourants.length === 0) {
                    isLowColourant = true;
                }
                else {
                    for (var _i = 0, listMachineColourants_1 = listMachineColourants; _i < listMachineColourants_1.length; _i++) {
                        var colourantMachine = listMachineColourants_1[_i];
                        if (colourantMachine.quantity < machine.warningQuantity) {
                            isLowColourant = true;
                        }
                    }
                }
                if (isLowColourant) {
                    _this.router.navigate(['/dashboard/machine']);
                }
                else {
                    _this.router.navigate(['/dashboard/formula']);
                }
            });
        }
    };
    DashboardService.prototype.validateDispenseTask = function (numberCan) {
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/dispensetask/dispensetask.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/dispensetask/dispensetask.service.ts ***!
  \***************************************************************/
/*! exports provided: DispenseTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenseTaskService", function() { return DispenseTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dispense.task.model */ "./src/app/models/dispense.task.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DispenseTaskService = /** @class */ (function () {
    function DispenseTaskService(machineService) {
        this.machineService = machineService;
        this.currentTask = null;
        this.currentTaskStep = null;
        this.listDispenseTask = [];
        this.currentTask = null;
        this.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].WAITING;
    }
    DispenseTaskService.prototype.runDispenseTask = function (_dispenseTask) {
        this.listDispenseTask.push(_dispenseTask);
        this.currentTask = _dispenseTask;
        this.processDispenseTask();
    };
    DispenseTaskService.prototype.processDispenseTask = function () {
        var _this = this;
        if (this.currentTask != null) {
            this.status = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["MAP_TASK_STATE"].IN_PROGRESS;
            this.currentTaskStep = getInProgressStepData(this.currentTask);
            this.currentTask.status = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["MAP_TASK_STATE"].IN_PROGRESS;
            this.currentTaskStep.status = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["MAP_TASK_STATE"].IN_PROGRESS;
            var waitTime = this.currentTaskStep.totalProcess;
            setTimeout(function () {
                _this.notifyInDoneDispenseStepAction();
            }, waitTime);
        }
        function getInProgressStepData(_dispenseTask) {
            for (var _i = 0, _a = _dispenseTask.childrenTask; _i < _a.length; _i++) {
                var step = _a[_i];
                if (step.status === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].WAITING) {
                    return step;
                }
            }
            return null;
        }
    };
    DispenseTaskService.prototype.notifyInDoneDispenseStepAction = function () {
        if (this.currentTaskStep != null) {
            if (this.currentTaskStep.type === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STEP_TYPE"].PREPARE) {
                // do nothing
                this.currentTaskStep.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].DONE;
                if (this.currentTaskStep.callBackFunction != null) {
                    this.currentTaskStep.callBackFunction(this.currentTask, this.currentTaskStep);
                }
                this.processDispenseTask();
            }
            else if (this.currentTaskStep.type === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STEP_TYPE"].PUMPING) {
                this.currentTaskStep.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].DONE;
                this.recordDispenseTaskLog(this.currentTaskStep.type, this.currentTaskStep, this.currentTask.taskId);
                if (this.currentTaskStep.callBackFunction != null) {
                    this.currentTaskStep.callBackFunction(this.currentTask, this.currentTaskStep);
                }
                this.processDispenseTask();
            }
            else if (this.currentTaskStep.type === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STEP_TYPE"].FINISHED) {
                this.updateDispenseTaskStatus(_models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].DONE, this.currentTask.taskId, this.currentTask.taskData.formulaProductBase, this.currentTask.taskData.canSize);
            }
        }
    };
    DispenseTaskService.prototype.recordDispenseTaskLog = function (type, data, taskId) {
        if (type === _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STEP_TYPE"].PUMPING) {
            this.machineService.subtractionColourantMachine(data.taskData.colorant, data.taskData.quantity, taskId);
        }
    };
    DispenseTaskService.prototype.updateDispenseTaskStatus = function (type, taskId, formulaProductBase, canSize) {
        var _this = this;
        this.machineService.recordDispenseFormulaProductBase(type, taskId, formulaProductBase, canSize).subscribe(function (datas) {
            // update current data
            _this.currentTaskStep.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].DONE;
            _this.currentTask.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].DONE;
            _this.status = _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_3__["MAP_DISPENSE_TASK_STATE"].WAITING;
            if (_this.currentTaskStep.callBackFunction != null) {
                _this.currentTaskStep.callBackFunction(_this.currentTask, _this.currentTaskStep);
            }
        });
    };
    DispenseTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"]])
    ], DispenseTaskService);
    return DispenseTaskService;
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function FormulaService(http, storeService, globalVariable) {
        this.http = http;
        this.storeService = storeService;
        this.globalVariable = globalVariable;
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
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'formula_product_base/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listFormulaProductBase = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var fpb = data_1[_i];
                    listFormulaProductBase.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertFormulaProductBaseModel(fpb));
                }
            }
            _this.listFormulaProductBase = listFormulaProductBase;
            return listFormulaProductBase;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.getALl = function () {
        var _this = this;
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'formula/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var formula = data_2[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToFormulaModel(formula));
                }
            }
            _this.listFormula = result;
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.findAllByCustomer = function () {
        var machine = this.storeService.getMachineData();
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'formula-customer/getAll/' + machine.machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var formula = data_3[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToFormulaCustomerModel(formula));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    // postData() {
    //   const dt = {
    //     username: "Haukute",
    //     password: "123456"
    //   };
    //   debugger;
    //   this.http.post(environment.settings.serverendpoint + 'login', dt).pipe(
    //     map(datas => {
    //       console.log(datas);
    //     }),
    //   ).subscribe();
    // }
    //
    // postData1() {
    //   const dt = {
    //     username: "Haukute",
    //     password: "123456"
    //   };
    //   debugger;
    //   this.http.post(environment.settings.serverendpoint + 'login_test', dt).pipe(
    //     map(datas => {
    //       console.log(datas);
    //     }),
    //   ).subscribe();
    // }
    FormulaService.prototype.findById = function (formulaId) {
        var result = this.listFormula.filter(filterById);
        return result != null && result.length > 0 ? Object.assign({}, result[0]) : null;
        function filterById(item, index, array) {
            return (item.formulaId === formulaId);
        }
    };
    FormulaService.prototype.getListColorantOfFormula = function (formulaId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'formula/getColourants/' + formulaId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToFormulaColourantModel(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.getListProductBaseCan = function (productBaseId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'product_base_can/findById/' + productBaseId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var result = [];
            if (data) {
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToProductBaseCanModel(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return [];
        }));
    };
    FormulaService.prototype.findFormulaProductBaseById = function (formulaProductBaseId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'formula_product_base/findById/' + formulaProductBaseId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToFormulaProductBaseModel(data);
        }));
    };
    FormulaService.prototype.saveOrUpdateFormulaData = function (formulaProductBaseId, formula, productBase, listColourants, listCustomerSelected) {
        var savingItem = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToSavingFormulaProductBaseDBItem(formulaProductBaseId, formula, productBase, this.storeService.getMachineData(), listColourants, listCustomerSelected);
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_formula/saveOrUpdate', savingItem).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data);
            return data;
        }));
    };
    FormulaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _store_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"], _global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"]])
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
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function MachineService(http, storeService, globalVariable, router) {
        this.http = http;
        this.storeService = storeService;
        this.globalVariable = globalVariable;
        this.router = router;
        this.machine = null;
        this.fetchData();
    }
    MachineService.prototype.fetchData = function () {
        var _this = this;
        this.machine = this.storeService.getMachineData();
        if (this.machine != null) {
            this.fetchDataFromServer().subscribe(function (data) {
                _this.listMachineColourants = data;
            });
        }
    };
    MachineService.prototype.fetchDataFromServer = function () {
        this.getCurrentMachine();
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine/getColourants/' + this.machine.machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var result = [];
            if (data && data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["default"].convertToMachineColourantModel(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    MachineService.prototype.getListColorantOfMachine = function () {
        return this.listMachineColourants;
    };
    MachineService.prototype.getCurrentMachine = function () {
        if (this.machine == null) {
            this.machine = this.storeService.getMachineData();
        }
        return this.machine;
    };
    MachineService.prototype.updateColourantMachineData = function (colourant, addedAmount, refillFactor) {
        var machine = this.getCurrentMachine();
        var dt = {
            machine: { machineId: machine.machineId },
            colourant: { colourantId: colourant.colourantId },
            quantity: addedAmount,
            refillFactor: refillFactor
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_colour/update', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var result = [];
            if (data && data.length > 0) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    result.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["default"].convertToMachineColourantModel(item));
                }
            }
            return result;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    MachineService.prototype.subtractionColourantMachine = function (colorant, quantity, taskId) {
        var machine = this.getCurrentMachine();
        var dt = {
            machine: { machineId: machine.machineId },
            colourant: { colourantId: colorant.colourantId },
            quantity: quantity,
            machineFormulaProductBaseId: taskId
        };
        this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_colour/subtraction', dt).pipe().subscribe();
    };
    MachineService.prototype.recordDispenseFormulaProductBase = function (status, taskId, formulaProductBase, quantity) {
        var machine = this.storeService.getMachineData();
        var user = this.storeService.getLoginUserData();
        var dt = {
            machineFormulaProductBaseId: taskId,
            formulaProductBase: { formulaProductBaseId: formulaProductBase.formulaProductBaseId },
            user: { userId: user.userId },
            machine: { machineId: machine.machineId },
            quantity: quantity,
            status: status
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_formula/record', dt);
    };
    MachineService.prototype.findAllDispenseTask = function () {
        this.getCurrentMachine();
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine_formula/findAll/' + this.machine.machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var listDispenseTaskLog = [];
            if (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    listDispenseTaskLog.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["default"].convertToDispenseFormulaProductBaseModel(item));
                }
            }
            return listDispenseTaskLog;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            return [];
        }));
    };
    MachineService.prototype.findDispenseTaskById = function (taskId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine_formula/findById/' + taskId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["default"].convertToFormulaProductBaseModel(data);
        }));
    };
    /**
     * Validate số lượng colourant của machine có còn đủ để pha màu với cansize này hay không
     * listFormulaColorant: là default colourant khi chọn formula, chưa nhân cansize
     * canSize: số lít
     */
    MachineService.prototype.validateQuantityColourant = function (canSize, listFormulaColorant, formula) {
        var _this = this;
        this.getCurrentMachine();
        var machineId = this.machine.machineId;
        var baseOnCan = formula.baseOnCan ? formula.baseOnCan : 1; // nếu undefined thì default là 1;
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine/getColourants/' + machineId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mColours) {
            // list colourant hiện có của machine
            var res = []; // kết quả trả về, danh sách màu không đủ
            var mapExistColours = {}; // tạo map colour với key là colourcode, value là số lượng còn lại
            mColours.map(function (c) {
                mapExistColours[c.colourant.colourantCode] = c.quantity * c.refillFactor / 100;
            });
            listFormulaColorant.map(function (lf) {
                var colourCode = lf.colourant.colourantCode;
                // số lượng mong đợi: lấy số ml cần có, chia cho baseOnCan của formula và nhân cho số lit cansize
                var expectQuantity = ((lf.quantity / baseOnCan) * canSize).toFixed(2);
                // nếu trong máy không còn màu này, hoặc còn nhưng nhỏ hơn số lượng mong đợi
                if (!mapExistColours[colourCode] || (+mapExistColours[colourCode] - +expectQuantity < _this.machine.minQuantity)) {
                    res.push(colourCode);
                }
            });
            return res;
        }));
    };
    MachineService.prototype.updateSettingMachine = function (minQuantity, warningQuantity) {
        this.getCurrentMachine();
        var dt = {
            machineId: this.machine.machineId,
            minQuantity: minQuantity,
            warningQuantity: warningQuantity,
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine/update', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_2__["default"].convertToMachineModel(data);
        }));
    };
    MachineService.prototype.updateMachineLocal = function (machine) {
        this.machine = machine;
        this.storeService.updateMachineData(this.machine);
    };
    MachineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _global__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function ProductService(http, globalVariable) {
        this.http = http;
        this.globalVariable = globalVariable;
        this.listItems = [];
        this.sortedData = null;
    }
    ProductService.prototype.getListItems = function () {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'product/getAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    listItems.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToProductModel(item));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            return [];
        }));
    };
    ProductService.prototype.viewProductDetail = function (productId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'product/view-detail/' + productId);
    };
    ProductService.prototype.sortData = function (sort) {
        var data = this.listItems.slice();
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'productCode': return compare(a.productCode, b.productCode, isAsc);
                case 'productName': return compare(a.productName, b.productName, isAsc);
                default: return 0;
            }
        });
        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    };
    ProductService.prototype.getListProductBase = function () {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'product-base/findAll').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    listItems.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToProductBaseModel(item));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            return [];
        }));
    };
    ProductService.prototype.getListProductBaseFromProduct = function (productId) {
        return this.http.get(this.globalVariable.getBaseApiUrl() + 'product-base/findByProduct/' + productId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var listItems = [];
            if (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    listItems.push(_utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_3__["default"].convertToProductBaseModel(item));
                }
            }
            return listItems;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            return [];
        }));
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _global__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"]])
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
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
    function ProductBaseService(http, globalVariable) {
        this.http = http;
        this.globalVariable = globalVariable;
    }
    ProductBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"]])
    ], ProductBaseService);
    return ProductBaseService;
}());



/***/ }),

/***/ "./src/app/services/store/store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
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

var StoreService = /** @class */ (function () {
    function StoreService() {
        this.loginUser = null;
        this.machine = null;
    }
    StoreService.prototype.updateLoginUserData = function (loginUser) {
        this.loginUser = loginUser;
        console.log(loginUser);
    };
    StoreService.prototype.updateMachineData = function (machine) {
        this.machine = machine;
    };
    StoreService.prototype.getLoginUserData = function () {
        return this.loginUser;
    };
    StoreService.prototype.getMachineData = function () {
        return this.machine;
    };
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
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
/* harmony import */ var _shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/http/services/http.service */ "./src/app/shared/http/services/http.service.ts");
/* harmony import */ var _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/convert-models-utils */ "./src/app/utils/convert-models-utils.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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
    function UserService(http, router, globalVariable, cookieService, storeService) {
        this.http = http;
        this.router = router;
        this.globalVariable = globalVariable;
        this.cookieService = cookieService;
        this.storeService = storeService;
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
        this.http.post(this.globalVariable.getBaseApiUrl() + 'login_test', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (datas) {
            if (datas != null) {
                _this.isLogin = true;
                _this.userDTO = _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertToUserModel(datas);
                _this.storeService.updateLoginUserData(_this.userDTO);
                _this.storeService.updateMachineData(_this.userDTO.machine);
                _this.cookieService.set_cookie('username', userName, 1);
                _this.cookieService.set_cookie('password', password, 1);
                _this.router.navigate(['/dashboard']);
                _this.errorMessage = null;
            }
            else {
                _this.userDTO = null;
                _this.isLogin = false;
                _this.errorMessage = 'Username or Password is incorrect! Please try again';
                alert('Username or Password is incorrect! Please try again');
            }
        })).subscribe();
    };
    UserService.prototype.updateCompanyInfo = function (dbItem) {
        var dt = {
            companyId: dbItem.companyId,
            code: dbItem.code,
            name: dbItem.name,
            phone: dbItem.phone,
            website: dbItem.website,
            email: dbItem.email,
            address: dbItem.address,
            city: dbItem.city,
        };
        return this.http.post(this.globalVariable.getBaseApiUrl() + 'company/save', dt).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return _utils_convert_models_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertToCompanyModel(data);
        }));
    };
    UserService.prototype.getLoginUser = function () {
        return this.userDTO;
    };
    UserService.prototype.logOut = function () {
        this.clearData();
        this.router.navigate(["../login"]);
    };
    UserService.prototype.clearData = function () {
        this.userDTO = null;
        this.isLogin = false;
        this.cookieService.delete_cookie('username');
        this.cookieService.delete_cookie('token');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _global__WEBPACK_IMPORTED_MODULE_7__["GlobalVariable"], ng_cookie__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _store_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]])
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
/*! exports provided: MAP_TASK_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_TASK_STATE", function() { return MAP_TASK_STATE; });
/* harmony import */ var _models_formula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/formula */ "./src/app/models/formula.ts");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/collection */ "./src/app/models/collection.ts");
/* harmony import */ var _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/formula_product_base */ "./src/app/models/formula_product_base.ts");
/* harmony import */ var _models_product_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product_base */ "./src/app/models/product_base.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _models_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/base */ "./src/app/models/base.ts");
/* harmony import */ var _models_colorant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/colorant */ "./src/app/models/colorant.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/dispense.task.model */ "./src/app/models/dispense.task.model.ts");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _models_formulacustomer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/formulacustomer */ "./src/app/models/formulacustomer.ts");
/* harmony import */ var _models_company_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/company.model */ "./src/app/models/company.model.ts");












var MAP_TASK_STATE = {
    SLEEP: 'SLEEP',
    IN_PROGRESS: 'IN-PROGRESS',
    FINISHED: 'FINISHED'
};
var ConvertModelUtils = /** @class */ (function () {
    function ConvertModelUtils() {
    }
    ConvertModelUtils.convertToFormulaModel = function (object) {
        var formula = new _models_formula__WEBPACK_IMPORTED_MODULE_0__["FormulaModel"]();
        formula.formulaId = object.formulaId;
        formula.formulaCode = object.formulaCode;
        formula.formulaName = object.formulaName;
        formula.collection = ConvertModelUtils.convertCollectionModel(object.collection);
        formula.createdDate = object.createdDate;
        formula.createBy = object.createBy;
        formula.baseOnCan = object.baseOnCan;
        formula.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
        formula.approximateColor = object.approximateColor;
        formula.comment = object.comment;
        formula.substrate = object.substrate;
        return formula;
    };
    ConvertModelUtils.convertToFormulaCustomerModel = function (object) {
        var formulaCustomer = new _models_formulacustomer__WEBPACK_IMPORTED_MODULE_10__["FormulaCustomerModel"]();
        formulaCustomer.formulaCustomerId = object.formulaCustomerId;
        formulaCustomer.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
        formulaCustomer.customer = ConvertModelUtils.convertToCustomerModel(object.customer);
        return formulaCustomer;
    };
    ConvertModelUtils.convertToProductModel = function (object) {
        var item = new _models_product__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
        item.productId = object.productId;
        item.productCode = object.productCode;
        item.productName = object.productName;
        item.createdDate = object.createdDate;
        item.createBy = object.createBy;
        return item;
    };
    ConvertModelUtils.convertToFormulaProductBaseModel = function (object) {
        var item = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"]();
        item.formulaProductBaseId = object.formulaProductBaseId;
        item.productBase = ConvertModelUtils.convertToProductBaseModel(object.productBase);
        item.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
        return item;
    };
    ConvertModelUtils.convertToFormulaColourantModel = function (object) {
        var item = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaColourantModel"]();
        item.formulaColourantId = object.formulaColourantId;
        item.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
        item.colourant = ConvertModelUtils.convertToColourantModel(object.colourant);
        item.quantity = object.quantity;
        return item;
    };
    ConvertModelUtils.convertToColourantModel = function (object) {
        var item = new _models_colorant__WEBPACK_IMPORTED_MODULE_6__["ColorantModel"]();
        item.colourantId = object.colourantId;
        item.colourantCode = object.colourantCode;
        item.colourantName = object.colourantName;
        item.density = object.density;
        item.pricePerUnit = object.pricePerUnit;
        item.surcharge = object.surcharge;
        item.rbgHex = object.rbgHex === '#00' ? '#000000' : object.rbgHex;
        item.kind = object.kind;
        return item;
    };
    ConvertModelUtils.convertToProductBaseCanModel = function (object) {
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
    ConvertModelUtils.convertCollectionModel = function (object) {
        var collection = new _models_collection__WEBPACK_IMPORTED_MODULE_1__["CollectionModel"]();
        collection.collectionId = object.collectionId;
        collection.collectionName = object.collectionName;
        collection.description = object.description;
        collection.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
        return collection;
    };
    ConvertModelUtils.convertFormulaProductBaseModel = function (object) {
        var formulaProductBase = new _models_formula_product_base__WEBPACK_IMPORTED_MODULE_2__["FormulaProductBaseModel"]();
        formulaProductBase.formulaProductBaseId = object.formulaProductBaseId;
        formulaProductBase.formula = ConvertModelUtils.convertToFormulaModel(object.formula);
        formulaProductBase.productBase = ConvertModelUtils.convertToProductBaseModel(object.productBase);
        return formulaProductBase;
    };
    ConvertModelUtils.convertToProductBaseModel = function (object) {
        var productBase = new _models_product_base__WEBPACK_IMPORTED_MODULE_3__["ProductBaseModel"]();
        productBase.productBaseId = object.productBaseId;
        productBase.product = ConvertModelUtils.convertToProductModel(object.product);
        productBase.base = ConvertModelUtils.convertToBaseModel(object.base);
        productBase.rbgHex = object.rbgHex;
        productBase.density = object.density;
        return productBase;
    };
    ConvertModelUtils.convertToBaseModel = function (object) {
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
        user.role = object.role != null ? ConvertModelUtils.convertToRoleModel(object.role) : null;
        user.machine = object.machine != null ? ConvertModelUtils.convertToMachineModel(object.machine) : null;
        user.company = object.company != null ? ConvertModelUtils.convertToCompanyModel(object.company) : null;
        return user;
    };
    ConvertModelUtils.convertToCompanyModel = function (object) {
        var company = new _models_company_model__WEBPACK_IMPORTED_MODULE_11__["CompanyModel"]();
        company.companyId = object.companyId;
        company.code = object.code;
        company.name = object.name;
        company.phone = object.phone;
        company.email = object.email;
        company.website = object.website;
        company.address = object.address;
        company.city = object.city;
        return company;
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
        machine.warningQuantity = object.warningQuantity;
        machine.maxQuantity = object.maxQuantity;
        return machine;
    };
    ConvertModelUtils.convertToMachineColourantModel = function (object) {
        var item = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["MachineColourantModel"]();
        item.machineColourantId = object.machineColourantId;
        item.colourant = ConvertModelUtils.convertToColourantModel(object.colourant);
        item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
        item.quantity = object.quantity;
        item.refillFactor = object.refillFactor != null && object.refillFactor > 0 ? object.refillFactor : 100;
        return item;
    };
    ConvertModelUtils.convertToDispenseFormulaProductBaseModel = function (object) {
        var item = new _models_dispense_task_model__WEBPACK_IMPORTED_MODULE_8__["MachineFormulaProductBaseLogModel"]();
        item.machineFormulaProductBaseId = object.machineFormulaProductBaseId;
        item.formulaProductBase = ConvertModelUtils.convertToFormulaProductBaseModel(object.formulaProductBase);
        item.machine = ConvertModelUtils.convertToMachineModel(object.machine);
        item.user = ConvertModelUtils.convertToUserModel(object.user);
        item.canSize = object.quantity;
        item.createdDate = object.createdDate;
        item.finishedDate = object.finishedDate;
        item.status = object.status;
        return item;
    };
    ConvertModelUtils.convertToCustomerModel = function (customer) {
        var item = new _models_customer__WEBPACK_IMPORTED_MODULE_9__["CustomerModel"]();
        item.customerId = customer.customerId;
        item.name = customer.name;
        item.phone = customer.phone;
        item.email = customer.email;
        item.address = customer.address;
        item.note = customer.note;
        item.machine = customer.machine != null ? ConvertModelUtils.convertToMachineModel(customer.machine) : null;
        return item;
    };
    ConvertModelUtils.convertToResponseMessageModel = function (object) {
        var item = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["ResponseMessageModel"]();
        item.type = object.type;
        item.message = object.message;
        return item;
    };
    ConvertModelUtils.convertToSavingFormulaProductBaseDBItem = function (formulaProductBaseId, formula, productBase, machine, formulaColourantList, listCustomerSelected) {
        var machineDbItem = {
            machineId: machine.machineId
        };
        var formulaProductBaseDBItem = {
            formulaProductBaseId: formulaProductBaseId,
            formula: ConvertModelUtils.convertToFormulaDBItem(formula),
            productBase: { productBaseId: productBase.productBaseId }
        };
        var formulaColourantListDBItem = [];
        for (var _i = 0, formulaColourantList_1 = formulaColourantList; _i < formulaColourantList_1.length; _i++) {
            var item = formulaColourantList_1[_i];
            if (item.quantity != null && item.quantity > 0) {
                formulaColourantListDBItem.push(ConvertModelUtils.convertToFormulaColourantDBItem(item));
            }
        }
        var _listCustomerSelected = [];
        for (var _a = 0, listCustomerSelected_1 = listCustomerSelected; _a < listCustomerSelected_1.length; _a++) {
            var customerSelect = listCustomerSelected_1[_a];
            if (customerSelect.checked) {
                _listCustomerSelected.push(customerSelect.customer.customerId);
            }
        }
        return {
            formulaProductBase: formulaProductBaseDBItem,
            machine: machineDbItem,
            formulaColourantList: formulaColourantListDBItem,
            listCustomer: _listCustomerSelected
        };
    };
    ConvertModelUtils.convertToFormulaDBItem = function (formula) {
        return {
            formulaId: formula.formulaId,
            formulaCode: formula.formulaCode,
            formulaName: formula.formulaName,
            collection: { collectionId: formula.collection.collectionId },
            baseOnCan: formula.baseOnCan,
            approximateColor: formula.approximateColor,
            substrate: formula.substrate,
            comment: formula.comment,
        };
    };
    ConvertModelUtils.convertToFormulaColourantDBItem = function (formulaColourant) {
        return {
            formulaColourantId: formulaColourant.formulaColourantId,
            colourant: { colourantId: formulaColourant.colourant.colourantId },
            formula: { formulaId: formulaColourant.formula.formulaId },
            quantity: formulaColourant.quantity,
        };
    };
    ConvertModelUtils.convertToCustomerDBItem = function (dbItem, machine) {
        return {
            customerId: dbItem.customerId,
            name: dbItem.name,
            phone: dbItem.phone,
            email: dbItem.email,
            address: dbItem.address,
            note: dbItem.note,
            machine: { machineId: machine.machineId },
        };
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
        serverendpoint: 'http://localhost:8080/server/api/',
        // serverendpoint: 'http://ec2-34-227-171-6.compute-1.amazonaws.com:8081/demoson/server/api/',
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

module.exports = __webpack_require__(/*! G:\Workspace\clientvietpower\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map