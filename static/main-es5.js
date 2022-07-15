(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkamazon_search"] = self["webpackChunkamazon_search"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/pages.module */
          8950)).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/api */
      7263);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(primengConfig) {
          _classCallCheck(this, _AppComponent);

          this.primengConfig = primengConfig;
          this.title = 'amazon-search';
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.primengConfig.ripple = true;
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/shared.module */
      4466);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/pages.module */
      8950);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    8468: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AmazonSearchResultComponent": function AmazonSearchResultComponent() {
          return (
            /* binding */
            _AmazonSearchResultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/api */
      7263);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      8994);
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      6564);
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/table */
      6659);
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/button */
      1104);
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/ripple */
      8996);
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/inputtext */
      1875);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/tooltip */
      9881);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-feather */
      5411);
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/rating */
      7212);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["dt"];

      function AmazonSearchResultComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AmazonSearchResultComponent_ng_template_7_Template_button_mousedown_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.exportAll();
          })("mouseup", function AmazonSearchResultComponent_ng_template_7_Template_button_mouseup_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7["export"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AmazonSearchResultComponent_ng_template_7_Template_button_mousedown_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.exportAsin();
          })("mouseup", function AmazonSearchResultComponent_ng_template_7_Template_button_mouseup_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9["export"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ASIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AmazonSearchResultComponent_ng_template_7_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            return _r0.exportCSV({
              selectionOnly: true
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Selection Only");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AmazonSearchResultComponent_ng_template_7_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            return _r0.filterGlobal(ctx_r11.search($event), "contains");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchResultComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableHeaderCheckbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ASIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-sortIcon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p-sortIcon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-sortIcon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Delivery To");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchResultComponent_ng_template_9_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-rating", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.ratingFloor(product_r12.rating))("readonly", true)("cancel", false);
        }
      }

      function AmazonSearchResultComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableCheckbox", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ASIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AmazonSearchResultComponent_ng_template_9_span_13_Template, 2, 3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Delivery To");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i-feather", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r12 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r12.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", product_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r12.asin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r12.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r12.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r12.reviews ? product_r12.reviews + " ratings" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", product_r12.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.titleCheck(product_r12.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r12.price ? product_r12.price : "not available", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/country/", ctx_r3.flagMainSrc(ctx_r3.inputData.target), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", ctx_r3.mainCountry(ctx_r3.inputData.target));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "arrow-", ctx_r3.screenFull === true ? "right" : "down", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/country/", product_r12.deliveryTo == "Select your address" ? ctx_r3.flagMainSrc(ctx_r3.inputData.target) : ctx_r3.flagDeliverySrc(product_r12.deliveryTo), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", product_r12.deliveryTo == "Select your address" ? ctx_r3.mainCountry(ctx_r3.inputData.target) : product_r12.deliveryTo);
        }
      }

      function AmazonSearchResultComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No product found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["SECTION"];
      };

      var _c2 = function _c2() {
        return [10, 25, 50];
      };

      var _c3 = function _c3() {
        return ["image", "asin", "title", "price", "reviews", "deliveryTo"];
      };

      var _AmazonSearchResultComponent = /*#__PURE__*/function () {
        function _AmazonSearchResultComponent(primengConfig, scrollToService) {
          _classCallCheck(this, _AmazonSearchResultComponent);

          this.primengConfig = primengConfig;
          this.scrollToService = scrollToService;
          this.currentSection = "product-search";
          this.products = [];
          this.screenResponsive = false;
          this.screenFull = false;
          this.selectedProducts = [];
          this.loading = true;
        }

        _createClass(_AmazonSearchResultComponent, [{
          key: "search",
          value: function search(e) {
            return e.target.value;
          }
        }, {
          key: "ratingFloor",
          value: function ratingFloor(rating) {
            if (rating !== null) {
              rating = rating.substring(0, 2);
              return Math.floor(rating);
            }

            return 0;
          }
        }, {
          key: "titleCheck",
          value: function titleCheck(string) {
            if (string.length > 125) {
              string = string.substring(0, 125) + "...";
              return string;
            }

            return string;
          }
        }, {
          key: "mainCountry",
          value: function mainCountry(country) {
            switch (country) {
              case "us":
                return "United States";

              case "de":
                return "Germany";

              case "ca":
                return "Canada";

              case "mx":
                return "Mexico";

              case "sg":
                return "Singapore";

              case "tr":
                return "Turkey";

              case "fr":
                return "France";

              case "au":
                return "Australia";

              case "jp":
                return "Japan";

              case "uk":
                return "United Kingdom";
            }

            return country;
          }
        }, {
          key: "flagMainSrc",
          value: function flagMainSrc(country) {
            switch (country) {
              case "us":
                return "united-states.png";

              case "de":
                return "germany.png";

              case "ca":
                return "canada.png";

              case "mx":
                return "mexico.png";

              case "sg":
                return "singapore.png";

              case "tr":
                return "turkey.png";

              case "fr":
                return "france.png";

              case "au":
                return "austallia.png";

              case "jp":
                return "japan.png";

              case "uk":
                return "united-kingdom.png";
            }

            return country;
          }
        }, {
          key: "flagDeliverySrc",
          value: function flagDeliverySrc(country) {
            switch (country) {
              case "United States":
                return "united-states.png";

              case "Germany":
                return "germany.png";

              case "Canada":
                return "canada.png";

              case "Mexico":
                return "mexico.png";

              case "Singapore":
                return "singapore.png";

              case "Turkey":
                return "turkey.png";

              case "France":
                return "france.png";

              case "Australia":
                return "austallia.png";

              case "Japan":
                return "japan.png";

              case "United Kingdom":
                return "united-kingdom.png";
            }

            return country;
          }
        }, {
          key: "exportAll",
          value: function exportAll() {
            this.cols = [{
              field: "asin",
              header: "ASIN"
            }, {
              field: "title",
              header: "Title"
            }, {
              field: "price",
              header: "Price"
            }];
            this.exportColumns = this.cols.map(function (col) {
              return {
                title: col.header,
                dataKey: col.field
              };
            });
          }
        }, {
          key: "exportAsin",
          value: function exportAsin() {
            this.cols = [{
              field: "asin",
              header: "ASIN"
            }];
            this.exportColumns = this.cols.map(function (col) {
              return {
                title: col.header,
                dataKey: col.field
              };
            });
          }
        }, {
          key: "export",
          value: function _export() {
            this.table.exportCSV();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var config = {
              target: "#search-result"
            };
            this.scrollToService.scrollTo(config);
            this.products = this.product.result.products;
            this.loading = false;
            this.primengConfig.ripple = true;
            this.exportAll();

            if (window.screen.width >= 768) {
              this.screenFull = true;
            } else {
              this.screenFull = false;
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
        }]);

        return _AmazonSearchResultComponent;
      }();

      _AmazonSearchResultComponent.ɵfac = function AmazonSearchResultComponent_Factory(t) {
        return new (t || _AmazonSearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToService));
      };

      _AmazonSearchResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AmazonSearchResultComponent,
        selectors: [["app-amazon-search-result"]],
        viewQuery: function AmazonSearchResultComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        inputs: {
          product: "product",
          isSuccessData: "isSuccessData",
          inputData: "inputData"
        },
        decls: 11,
        vars: 15,
        consts: [["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "search-result", 1, "section"], [1, "container"], [1, "text-dark", "display-5", "fw-light", "mb-4", "text-center"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "asin", "styleClass", "p-datatable-customer", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "selection", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "loading", "paginator", "filterDelay", "globalFilterFields", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header", "tbl-header"], [1, "export-button"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-download", 1, "p-mr-2", "mx-2", "export-btn", 3, "mousedown", "mouseup"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-download", 1, "p-button-info", "p-ml-auto", "mx-2", "export-btn", 3, "click"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "search-input", 3, "input"], [1, "text-center"], ["pSortableColumn", "rating", 1, "text-center"], ["field", "asin"], ["pSortableColumn", "title", 1, "text-center", 2, "width", "50%"], ["field", "title"], ["pSortableColumn", "price"], ["field", "price"], [1, "p-selectable-row"], [3, "value"], [1, "p-column-title"], ["width", "100", 1, "shadow-4", "table-img", 3, "src", "alt"], ["target", "_blank", 3, "href"], [1, "image-text", "d-flex", "justify-content-center", "mb-1"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["tooltipPosition", "bottom", 1, "image-text", 3, "pTooltip"], ["tooltipPosition", "bottom", "width", "35", 1, "target-img", 3, "pTooltip", "src"], [1, "target-icon", 3, "name"], [3, "ngModel", "readonly", "cancel"], ["colspan", "8"]],
        template: function AmazonSearchResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChange", function AmazonSearchResultComponent_Template_div_sectionChange_0_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Product Search Result ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-table", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function AmazonSearchResultComponent_Template_p_table_selectionChange_5_listener($event) {
              return ctx.selectedProducts = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AmazonSearchResultComponent_ng_template_7_Template, 11, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AmazonSearchResultComponent_ng_template_8_Template, 16, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AmazonSearchResultComponent_ng_template_9_Template, 33, 16, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AmazonSearchResultComponent_ng_template_10_Template, 3, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.products)("selection", ctx.selectedProducts)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2))("loading", ctx.loading)("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));
          }
        },
        directives: [_shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, angular_feather__WEBPACK_IMPORTED_MODULE_10__.FeatherComponent, primeng_rating__WEBPACK_IMPORTED_MODULE_11__.Rating, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
        styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #353348;\n  background: #ffffff;\n  line-height: 1.6;\n  font-size: 14.4px;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-padding-top: 66px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  outline: none;\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1320px;\n  }\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #FF9900 !important;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #18ce76 !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #18ce76 !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #4bc1e2 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #4bc1e2 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #fbb70b !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #fbb70b !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #e84040 !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #e84040 !important;\n}\n.text-dark[_ngcontent-%COMP%] {\n  color: #353348 !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #353348 !important;\n}\n.text-light[_ngcontent-%COMP%] {\n  color: #f9f9fd !important;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f9f9fd !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #a5a5bf !important;\n}\n.bg-muted[_ngcontent-%COMP%] {\n  background-color: #a5a5bf !important;\n}\n.fs-12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.fs-13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.fs-14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.fs-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.fw-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n}\n.icon-xxl[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n}\n.icon-xl[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n}\n.icon-lg[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 34px;\n}\n.icon-sm[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n.icon-xs[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.icon-xxs[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n.sw-1_5[_ngcontent-%COMP%] {\n  stroke-width: 1.5px;\n}\n.sw-1[_ngcontent-%COMP%] {\n  stroke-width: 1px;\n}\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1 !important;\n}\n.border-end[_ngcontent-%COMP%] {\n  border-right: 1px solid #f1f1f1 !important;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07) !important;\n}\n.bg-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(35, 37, 47, 0.83);\n  width: 100%;\n  height: 100%;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 100px 0px 100px;\n  position: relative;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 10px 20px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n  transform: translateY(-2px);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #FF9900;\n  border: 1px solid #FF9900 !important;\n  color: #ffffff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: \"primary\" !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #FF9900 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:active, .btn-outline-primary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border: 1px solid #6c757d !important;\n  color: #ffffff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary[_ngcontent-%COMP%]:active, .btn-secondary.active[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n  color: \"secondary\" !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #6c757d !important;\n  color: #FF9900 !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover, .btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary[_ngcontent-%COMP%]:active, .btn-outline-secondary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #18ce76;\n  border: 1px solid #18ce76 !important;\n  color: #ffffff;\n}\n.btn-success[_ngcontent-%COMP%]:hover, .btn-success[_ngcontent-%COMP%]:focus, .btn-success[_ngcontent-%COMP%]:active, .btn-success.active[_ngcontent-%COMP%] {\n  background-color: #18ce76 !important;\n  color: \"success\" !important;\n}\n.btn-outline-success[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #18ce76 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover, .btn-outline-success[_ngcontent-%COMP%]:focus, .btn-outline-success[_ngcontent-%COMP%]:active, .btn-outline-success.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #4bc1e2;\n  border: 1px solid #4bc1e2 !important;\n  color: #ffffff;\n}\n.btn-info[_ngcontent-%COMP%]:hover, .btn-info[_ngcontent-%COMP%]:focus, .btn-info[_ngcontent-%COMP%]:active, .btn-info.active[_ngcontent-%COMP%] {\n  background-color: #4bc1e2 !important;\n  color: \"info\" !important;\n}\n.btn-outline-info[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #4bc1e2 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-info[_ngcontent-%COMP%]:hover, .btn-outline-info[_ngcontent-%COMP%]:focus, .btn-outline-info[_ngcontent-%COMP%]:active, .btn-outline-info.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #fbb70b;\n  border: 1px solid #fbb70b !important;\n  color: #ffffff;\n}\n.btn-warning[_ngcontent-%COMP%]:hover, .btn-warning[_ngcontent-%COMP%]:focus, .btn-warning[_ngcontent-%COMP%]:active, .btn-warning.active[_ngcontent-%COMP%] {\n  background-color: #fbb70b !important;\n  color: \"warning\" !important;\n}\n.btn-outline-warning[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #fbb70b !important;\n  color: #FF9900 !important;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:hover, .btn-outline-warning[_ngcontent-%COMP%]:focus, .btn-outline-warning[_ngcontent-%COMP%]:active, .btn-outline-warning.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #e84040;\n  border: 1px solid #e84040 !important;\n  color: #ffffff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover, .btn-danger[_ngcontent-%COMP%]:focus, .btn-danger[_ngcontent-%COMP%]:active, .btn-danger.active[_ngcontent-%COMP%] {\n  background-color: #e84040 !important;\n  color: \"danger\" !important;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #e84040 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover, .btn-outline-danger[_ngcontent-%COMP%]:focus, .btn-outline-danger[_ngcontent-%COMP%]:active, .btn-outline-danger.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-dark[_ngcontent-%COMP%] {\n  background-color: #353348;\n  border: 1px solid #353348 !important;\n  color: #ffffff;\n}\n.btn-dark[_ngcontent-%COMP%]:hover, .btn-dark[_ngcontent-%COMP%]:focus, .btn-dark[_ngcontent-%COMP%]:active, .btn-dark.active[_ngcontent-%COMP%] {\n  background-color: #353348 !important;\n  color: \"dark\" !important;\n}\n.btn-outline-dark[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #353348 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:hover, .btn-outline-dark[_ngcontent-%COMP%]:focus, .btn-outline-dark[_ngcontent-%COMP%]:active, .btn-outline-dark.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f9f9fd;\n  border: 1px solid #f9f9fd !important;\n  color: #ffffff;\n}\n.btn-light[_ngcontent-%COMP%]:hover, .btn-light[_ngcontent-%COMP%]:focus, .btn-light[_ngcontent-%COMP%]:active, .btn-light.active[_ngcontent-%COMP%] {\n  background-color: #f9f9fd !important;\n  color: \"light\" !important;\n}\n.btn-outline-light[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #f9f9fd !important;\n  color: #FF9900 !important;\n}\n.btn-outline-light[_ngcontent-%COMP%]:hover, .btn-outline-light[_ngcontent-%COMP%]:focus, .btn-outline-light[_ngcontent-%COMP%]:active, .btn-outline-light.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-muted[_ngcontent-%COMP%] {\n  background-color: #a5a5bf;\n  border: 1px solid #a5a5bf !important;\n  color: #ffffff;\n}\n.btn-muted[_ngcontent-%COMP%]:hover, .btn-muted[_ngcontent-%COMP%]:focus, .btn-muted[_ngcontent-%COMP%]:active, .btn-muted.active[_ngcontent-%COMP%] {\n  background-color: #a5a5bf !important;\n  color: \"muted\" !important;\n}\n.btn-outline-muted[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #a5a5bf !important;\n  color: #FF9900 !important;\n}\n.btn-outline-muted[_ngcontent-%COMP%]:hover, .btn-outline-muted[_ngcontent-%COMP%]:focus, .btn-outline-muted[_ngcontent-%COMP%]:active, .btn-outline-muted.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.badge-lg[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.bg-soft-primary[_ngcontent-%COMP%] {\n  background-color: #ffce85;\n  color: #FF9900;\n}\n.bg-soft-secondary[_ngcontent-%COMP%] {\n  background-color: #b2b7bc;\n  color: #6c757d;\n}\n.bg-soft-success[_ngcontent-%COMP%] {\n  background-color: #7bf0b7;\n  color: #18ce76;\n}\n.bg-soft-info[_ngcontent-%COMP%] {\n  background-color: #bde8f4;\n  color: #4bc1e2;\n}\n.bg-soft-warning[_ngcontent-%COMP%] {\n  background-color: #fddd8d;\n  color: #fbb70b;\n}\n.bg-soft-danger[_ngcontent-%COMP%] {\n  background-color: #f6b6b6;\n  color: #e84040;\n}\n.bg-soft-dark[_ngcontent-%COMP%] {\n  background-color: #6e6a96;\n  color: #353348;\n}\n.bg-soft-light[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #f9f9fd;\n}\n.bg-soft-muted[_ngcontent-%COMP%] {\n  background-color: #f2f2f6;\n  color: #a5a5bf;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  transition: all 0.3s ease-in-out;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  padding-right: 26px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  border: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  color: #FF9900;\n  border: 1px solid #ebebeb;\n  background-color: #ffffff !important;\n}\n.nav-sticky[_ngcontent-%COMP%] {\n  padding: 12px 0px;\n  background-color: #ffffff;\n  border-bottom: 1px solid #ffffff;\n  box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07);\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #a7a9c0;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.nav-sticky[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  border: 1px solid #FF9900;\n  background-color: #FF9900 !important;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.navbar-light[_ngcontent-%COMP%] {\n  padding: 12px 0px;\n  transition: all 0.3s ease-in-out;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #a7a9c0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    background-color: #ffffff;\n    box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07) !important;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    padding: 15px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #a7a9c0;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n    color: #353348;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n  }\n}\n.hero-one-1[_ngcontent-%COMP%] {\n  padding: 200px 0px 0px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: auto;\n}\n.hero-one-1[_ngcontent-%COMP%]   .bg-hero-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-one-1-overlay-img.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 1;\n  height: 100%;\n  width: 100%;\n}\n.hero-one-1[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  position: relative;\n  top: 80px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 10px;\n  z-index: 1;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n  font-size: 13px;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #FF9900 !important;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #eaebec;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  left: 12px;\n  padding: 4px 10px;\n  background-color: #ffffff;\n  font-size: 13px;\n  color: #b5b5c3;\n}\n.hero-one-2[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n.hero-one-2[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.hero-one-3[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 220px 0 420px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute !important;\n  bottom: -50px !important;\n  right: 0px !important;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 18px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.3) !important;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n  width: 26px !important;\n}\n.hero-one-4[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #23252f;\n  height: 100vh;\n  \n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%] {\n  letter-spacing: 16px;\n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  left: 270px;\n  bottom: 50%;\n  transform: translateX(-50%);\n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 240px;\n  bottom: 50%;\n  transform: translateX(-50%);\n}\n.hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n  font-size: 190px;\n  color: #ffffff;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-one-4[_ngcontent-%COMP%]   .clip-text_one[_ngcontent-%COMP%] {\n  background-image: url('hero-one-4-bg-img.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-one-5[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-one-5-overlay[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #FF9900 5%, #FF9900 75%, rgba(255, 255, 255, 0.1) 50%);\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-one-5-bg[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.55;\n}\n.hero-one-5[_ngcontent-%COMP%]   .play-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50%;\n  transform: translateY(50%);\n  right: 0;\n  left: 0;\n  text-align: center;\n}\n.hero-one-5[_ngcontent-%COMP%]   .play-box[_ngcontent-%COMP%]   .video-button[_ngcontent-%COMP%] {\n  height: 68px;\n  width: 68px;\n  font-size: 30px;\n  line-height: 68px;\n  border-radius: 50%;\n  display: inline-block;\n  color: #ffffff;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background-color: white;\n  border-radius: 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 3;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]:hover   .btn-close[_ngcontent-%COMP%] {\n  opacity: 0.5 !important;\n}\n.hero-one-6[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-one-6[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n  width: 50%;\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.hero-two-1[_ngcontent-%COMP%] {\n  padding: 240px 0px 170px;\n}\n.hero-two-2[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-2[_ngcontent-%COMP%]   .hero-two-2-content[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.hero-two-2[_ngcontent-%COMP%]   .hero-two-2-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-two-2-overlay.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.85;\n}\n.hero-two-3[_ngcontent-%COMP%] {\n  padding: 150px 0px 130px;\n}\n.hero-two-3[_ngcontent-%COMP%]   .hero-two-3-content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 40px;\n  height: 2px;\n  background-color: #FF9900;\n  position: absolute;\n  left: -44px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]   .slider-img[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #b4b2c8;\n  position: absolute;\n  top: -30px;\n  right: -10px;\n  bottom: 80px;\n  left: 60px;\n  filter: blur(5px);\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: #d7d6e2;\n  position: absolute;\n  top: -60px;\n  right: -50px;\n  bottom: 110px;\n  left: 90px;\n  filter: blur(5px);\n}\n.hero-two-4[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-4[_ngcontent-%COMP%]   .hero-two-4-content[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 0 !important;\n}\n.hero-two-5[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-5[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background: linear-gradient(to bottom, #7268fc 0%, #b3adff 100%);\n  width: 80px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.hero-two-5[_ngcontent-%COMP%]   .hero-two-5-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-two-5-overlay-1.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.hero-two-6[_ngcontent-%COMP%] {\n  padding: 180px 0 120px;\n}\n.hero-two-6[_ngcontent-%COMP%]   .hero-two-6-img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n@media (max-width: 576px) {\n  .hero-one-1[_ngcontent-%COMP%] {\n    padding: 150px 0px 0px;\n  }\n  .hero-one-1[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n\n  .hero-one-2[_ngcontent-%COMP%] {\n    padding: 100px 0px !important;\n  }\n  .hero-one-2[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 150px 0px 140px !important;\n  }\n  .hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 70px !important;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    padding: 90px 0px !important;\n  }\n  .hero-one-5[_ngcontent-%COMP%]   .hero-one-5-overlay[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, #FF9900 5%, #FF9900 100%, rgba(255, 255, 255, 0.1) 50%);\n  }\n\n  .hero-one-6[_ngcontent-%COMP%] {\n    display: block !important;\n    padding: 130px 0 70px !important;\n  }\n  .hero-one-6[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative !important;\n    top: auto;\n    bottom: 0;\n    transform: translateY(0);\n    padding: 50px 15px 0;\n  }\n\n  .hero-two-3[_ngcontent-%COMP%] {\n    padding: 140px 0 0px;\n  }\n\n  .hero-two-4[_ngcontent-%COMP%] {\n    padding: 95px 0px 100px !important;\n  }\n\n  .hero-two-6[_ngcontent-%COMP%] {\n    padding: 130px 0 70px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 150px 0px 210px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0 120px !important;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 110px;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0 120px;\n  }\n}\n@media (max-width: 1024px) {\n  .hero-one-2[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before, .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n    content: none;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 150px 0px;\n  }\n\n  .hero-one-6[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 160px 0px 100px;\n  }\n\n  .hero-two-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 210px 0px 170px;\n  }\n\n  .hero-two-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 160px 0px 100px;\n  }\n  .hero-two-5[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n@media (min-width: 769px) and (max-width: 1199.98px) {\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 160px 0 290px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 200px 0 180px;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before, .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n    content: none;\n  }\n}\n.form-control[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 45px;\n  border: 1px solid #eaebec !important;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #FF9900 !important;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.service-layout-1[_ngcontent-%COMP%] {\n  padding: 160px 0px 100px;\n}\n.service-box-one[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.service-box-one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF9900 !important;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-subtitle[_ngcontent-%COMP%] {\n  color: #a5a5bf;\n}\n.service-box-one[_ngcontent-%COMP%]:hover, .service-box-one.active[_ngcontent-%COMP%] {\n  box-shadow: 3px 4px 12px rgba(31, 27, 81, 0.06);\n  background-color: #FF9900;\n  transform: translateY(-0.5rem);\n}\n.service-box-one[_ngcontent-%COMP%]:hover   .service-icon[_ngcontent-%COMP%], .service-box-one[_ngcontent-%COMP%]:hover   .service-title[_ngcontent-%COMP%], .service-box-one[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  fill: rgba(255, 255, 255, 0.14);\n}\n.service-box-one[_ngcontent-%COMP%]:hover   .service-subtitle[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.service-box-two[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n}\n.service-box-two[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  background-color: rgba(255, 153, 0, 0.08);\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  border-radius: 50%;\n  transition: all 0.5s ease-in-out;\n}\n.service-box-two[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 72px;\n  height: 72px;\n  line-height: 72px;\n  transition: all 0.8s ease-in-out;\n  border-radius: 50%;\n}\n.service-box-two[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  color: #FF9900;\n  display: inline-block;\n}\n.service-box-two[_ngcontent-%COMP%]:hover, .service-box-two.active[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 153, 0, 0.03);\n}\n.service-box-two[_ngcontent-%COMP%]:hover:after, .service-box-two.active[_ngcontent-%COMP%]:after {\n  background-color: rgba(255, 153, 0, 0.03);\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  top: 0;\n  left: 0;\n}\n.service-box-two[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%], .service-box-two.active[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background-color: rgba(255, 153, 0, 0.06);\n}\n.user-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -110px;\n  bottom: 30px;\n}\n.feature-two-content[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  line-height: 62px;\n  background-color: rgba(255, 153, 0, 0.05);\n}\n#style-switcher[_ngcontent-%COMP%] {\n  transition: all 0.4s;\n  background: none repeat scroll 0 0 #ffffff;\n  box-shadow: 0px 4px 12px rgba(31, 27, 81, 0.07);\n  left: -189px;\n  position: fixed;\n  top: 17%;\n  width: 189px;\n  z-index: 9999;\n  padding: 10px 5px;\n}\n#style-switcher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n#style-switcher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #353348;\n  font-size: 16px;\n  margin: 0 3px 12px;\n}\n#style-switcher[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  background: none repeat scroll 0 0 #ffffff;\n  color: #252525;\n  padding: 0;\n}\n#style-switcher[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a.settings[_ngcontent-%COMP%] {\n  background: none repeat scroll 0 0 #353348;\n  box-shadow: 0px 4px 12px rgba(31, 27, 81, 0.07);\n  display: block;\n  height: 45px;\n  position: absolute;\n  right: -45px;\n  top: 0;\n  width: 45px;\n  padding: 10px;\n}\nul.pattern[_ngcontent-%COMP%] {\n  list-style: none outside none;\n  margin: 0 0 0px;\n  overflow: hidden;\n  padding: 0;\n  border-radius: 0px;\n}\nul.pattern[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin: 2px;\n}\nul.pattern[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  height: 35px;\n  width: 35px;\n  border-radius: 30px;\n  margin: 5px;\n}\nul.pattern[_ngcontent-%COMP%]   .color1[_ngcontent-%COMP%] {\n  background-color: #FF9900;\n}\nul.pattern[_ngcontent-%COMP%]   .color2[_ngcontent-%COMP%] {\n  background-color: #18ce76;\n}\nul.pattern[_ngcontent-%COMP%]   .color3[_ngcontent-%COMP%] {\n  background-color: #fbb70b;\n}\nul.pattern[_ngcontent-%COMP%]   .color4[_ngcontent-%COMP%] {\n  background-color: #e84040;\n}\nul.pattern[_ngcontent-%COMP%]   .color5[_ngcontent-%COMP%] {\n  background-color: #4bc1e2;\n}\nul.pattern[_ngcontent-%COMP%]   .color6[_ngcontent-%COMP%] {\n  background-color: #cebca4;\n}\n@media only screen and (max-width: 479px) {\n  #style-switcher[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .testi-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 230px;\n    margin: 0 auto;\n  }\n}\n.client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tns-outer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.2) !important;\n  padding: 0px;\n  margin: 0px 4px;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.tns-nav-active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  width: 22px !important;\n}\n@media (max-width: 768px) {\n  .client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%] {\n    border-right: none !important;\n  }\n}\n.client-slider-two[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.tns-outer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.2) !important;\n  padding: 0px;\n  margin: 0px 4px;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.tns-nav-active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  width: 22px !important;\n}\n@media (max-width: 768px) {\n  .client-slider-two[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .client-slider-two[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%] {\n    border-right: none !important;\n  }\n}\n.hero-two-3[_ngcontent-%COMP%]   .tns-outer[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin-top: 100px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:after {\n  background-image: none;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:before {\n  content: \"\u2500\";\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  margin-right: 10px;\n  color: #FF9900;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button.collapsed[_ngcontent-%COMP%]:before {\n  content: \"\u271B\";\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 70px;\n  padding: 24px 16px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 2px;\n  height: 40px;\n  background-color: #FF9900;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0px;\n}\n.faq-img[_ngcontent-%COMP%]   .faq-ask[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  position: absolute;\n  right: -110px;\n  bottom: 110px;\n  transform: rotate(90deg);\n}\n@media (max-width: 576px) {\n  .faq-img[_ngcontent-%COMP%]   .faq-ask[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n    position: absolute;\n    right: -50px;\n    bottom: 110px;\n    transform: rotate(90deg);\n  }\n}\n.price-box[_ngcontent-%COMP%]   .price-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.pricing-bg[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  background-color: #f9f9fd;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 50%;\n  left: 0px;\n}\n.brand-section[_ngcontent-%COMP%] {\n  padding: 0px 0px 120px;\n}\n.brand-section[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  transition: all 0.3s ease-in-out;\n}\n.brand-section[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .brand-section[_ngcontent-%COMP%] {\n    padding: 0px 0px 80px !important;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  padding: 80px 0px 30px;\n}\n.footer[_ngcontent-%COMP%]   .footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  padding-bottom: 10px;\n  display: inline-block;\n}\n.footer[_ngcontent-%COMP%]   .footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.footer-alt[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 20px 0px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.footer-alt[_ngcontent-%COMP%]   .footer-alt-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  margin-right: 15px;\n}\n.footer-alt[_ngcontent-%COMP%]   .footer-alt-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n[_nghost-%COMP%]     {\n  \n}\n[_nghost-%COMP%]     .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n[_nghost-%COMP%]     .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n.target-img[_ngcontent-%COMP%] {\n  border-radius: 9px;\n}\n.target-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 20px;\n}\n.review-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 125px;\n}\n.table-img[_ngcontent-%COMP%] {\n  max-width: 75px;\n}\n@media screen and (max-width: 768px) {\n  .export-button[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .tbl-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 768px) {\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .p-selectable-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtYXpvbi1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9fZ2VuZXJhbC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19oZWxwZXIuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9fY29tcG9uZW50cy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19tZW51LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX2hlcm8uc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9fZm9ybS5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19zZXJ2aWNlcy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19mZWF0dXJlcy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19zd2l0Y2hlci5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL190ZXN0aW1vbmlhbC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19mYXEuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9fcHJpY2luZy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19icmFuZGxvZ28uc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9fZm9vdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDS1IseUdBQUE7QUNGUjtFQUNJLGtDRDZDa0I7RUM1Q2xCLGNEdUJrQjtFQ3RCbEIsbUJEd0NrQjtFQ3ZDbEIsZ0JBQUE7RUFDQSxpQkFBQTtBRkFKO0FFR0E7RUFDSSx3QkFBQTtBRkFKO0FFR0E7RUFDSSxnQ0FBQTtFQUNBLGFBQUE7QUZBSjtBRUdBO0VBQ0ksa0JBQUE7QUZBSjtBRUdBOzs7Ozs7RUFNSSxrQ0RvQmtCO0FEcEJ0QjtBRUdBO0VBQ0ksa0JBQUE7QUZBSjtBRUdBO0VBQ0k7SUFDSSxpQkFBQTtFRkFOO0FBQ0Y7QUdsQ0k7RUFDSSx5QkFBQTtBSG9DUjtBR2xDSTtFQUNJLG9DQUFBO0FIcUNSO0FHekNJO0VBQ0kseUJBQUE7QUg0Q1I7QUcxQ0k7RUFDSSxvQ0FBQTtBSDZDUjtBR2pESTtFQUNJLHlCQUFBO0FIb0RSO0FHbERJO0VBQ0ksb0NBQUE7QUhxRFI7QUd6REk7RUFDSSx5QkFBQTtBSDREUjtBRzFESTtFQUNJLG9DQUFBO0FINkRSO0FHakVJO0VBQ0kseUJBQUE7QUhvRVI7QUdsRUk7RUFDSSxvQ0FBQTtBSHFFUjtBR3pFSTtFQUNJLHlCQUFBO0FINEVSO0FHMUVJO0VBQ0ksb0NBQUE7QUg2RVI7QUdqRkk7RUFDSSx5QkFBQTtBSG9GUjtBR2xGSTtFQUNJLG9DQUFBO0FIcUZSO0FHekZJO0VBQ0kseUJBQUE7QUg0RlI7QUcxRkk7RUFDSSxvQ0FBQTtBSDZGUjtBR2pHSTtFQUNJLHlCQUFBO0FIb0dSO0FHbEdJO0VBQ0ksb0NBQUE7QUhxR1I7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHL0ZBO0VBQ0ksZ0JBQUE7QUhrR0o7QUcvRkE7RUFDSSxnQkFBQTtBSGtHSjtBRzlGQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBSGlHSjtBRy9GQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FIa0dKO0FHL0ZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUhrR0o7QUcvRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBSGtHSjtBRy9GQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FIa0dKO0FHL0ZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUhrR0o7QUcvRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBSGtHSjtBRzlGQTtFQUNJLG1CQUFBO0FIaUdKO0FHOUZBO0VBQ0ksaUJBQUE7QUhpR0o7QUc3RkE7RUFDSSxvQ0FBQTtBSGdHSjtBRzdGQTtFQUNJLDBDQUFBO0FIZ0dKO0FHNUZBO0VBQ0ksMERBQUE7QUgrRko7QUc1RkE7RUFDSSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FIK0ZKO0FHNUZBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBSCtGSjtBSTFPQSxXQUFBO0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7QUo0T0o7QUkzT0k7RUFFSSwyQkFBQTtFQUNBLDJCQUFBO0FKNE9SO0FJMU9JO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FKNE9SO0FJdk9JO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FENFB0QjtBSXpPUTtFQUlJLG9DQUFBO0VBQ0EsMkJBQUE7QUp3T1o7QUlyT0k7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUp3T1I7QUl2T1E7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKc09aO0FJM1BJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEZ1J0QjtBSTdQUTtFQUlJLG9DQUFBO0VBQ0EsNkJBQUE7QUo0UFo7QUl6UEk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUo0UFI7QUkzUFE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKMFBaO0FJL1FJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEb1N0QjtBSWpSUTtFQUlJLG9DQUFBO0VBQ0EsMkJBQUE7QUpnUlo7QUk3UUk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUpnUlI7QUkvUVE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKOFFaO0FJblNJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEd1R0QjtBSXJTUTtFQUlJLG9DQUFBO0VBQ0Esd0JBQUE7QUpvU1o7QUlqU0k7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUpvU1I7QUluU1E7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKa1NaO0FJdlRJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FENFV0QjtBSXpUUTtFQUlJLG9DQUFBO0VBQ0EsMkJBQUE7QUp3VFo7QUlyVEk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUp3VFI7QUl2VFE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKc1RaO0FJM1VJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEZ1d0QjtBSTdVUTtFQUlJLG9DQUFBO0VBQ0EsMEJBQUE7QUo0VVo7QUl6VUk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUo0VVI7QUkzVVE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKMFVaO0FJL1ZJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEb1h0QjtBSWpXUTtFQUlJLG9DQUFBO0VBQ0Esd0JBQUE7QUpnV1o7QUk3Vkk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUpnV1I7QUkvVlE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKOFZaO0FJblhJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNIbEJjO0FEd1l0QjtBSXJYUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUpvWFo7QUlqWEk7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUpvWFI7QUluWFE7RUFJSSxvQ0FBQTtFQUNBLHlCQUFBO0FKa1haO0FJdllJO0VBQ0kseUJBQUE7RUFDQSxv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QUFBO0VBZzRDdEI7RUE5M0NzQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxvQ0FBQTtJQUNBLGlCQUFBO0VBZzRDMUI7RUE3M0NzQjtJQUNJLGtCQUFBO0VBKzNDMUI7QUFDRjtBQXYzQ0E7RUFDSSxrQkFBQTtBQXkzQ0o7QUF0M0NBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF5M0NKO0FBdDNDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBeTNDSjtBQXQzQ0E7RUFDSSxlQUFBO0FBeTNDSjtBQXIzQ0k7RUFESjtJQUVRLHFCQUFBO0VBeTNDTjtBQUNGO0FBcjNDSTtFQURKO0lBRVEsc0JBQUE7SUFDQSxrQkFBQTtFQXkzQ047QUFDRjtBQXIzQ0k7RUFESjtJQUVRLFdBQUE7RUF5M0NOO0FBQ0Y7QUFyM0NJO0VBREo7SUFFUSxlQUFBO0VBeTNDTjtBQUNGIiwiZmlsZSI6ImFtYXpvbi1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9zdHlsZS5zY3NzXCI7XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtcGFnaW5hdG9yIHtcbiAgICAgICAgLnAtcGFnaW5hdG9yLWN1cnJlbnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuICAgIFxuICAgICAgICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIFxuICAgIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xuICAgICAgICBtaW4td2lkdGg6IDI1cmVtO1xuICAgIFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xuICAgICAgICAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnAtcGFnaW5hdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wLWRyb3Bkb3duLWxhYmVsOm5vdCgucC1wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiBSZXNwb25zaXZlICovXG4gICAgLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIDpob3N0IDo6bmctZGVlcCB7XG4gICAgICAgIC5wLWRhdGF0YWJsZSB7XG4gICAgICAgICAgICAmLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1sYXllci0yKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPiB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLS40cmVtIDFyZW0gLS40cmVtIC0uNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhcmdldC1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLnRhcmdldC1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ucmV2aWV3LWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMjVweDtcbn1cblxuLnRhYmxlLWltZyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uZXhwb3J0LWJ1dHRvbiAuZXhwb3J0LWJ0biB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBcbiAgICB9IFxufVxuXG4udGJsLWhlYWRlciB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ucC1zZWxlY3RhYmxlLXJvdyB0ZCBzbWFsbCB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0gIiwiLy8gXHJcbi8vIHZhcmlhYmxlcy5zY3NzXHJcbi8vIFxyXG5cclxuLy8gZ29vZ2xlIGZvbnRcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLy8gY29sb3IgdmFyaWFibGVzXHJcbiR3aGl0ZTogICAgICAgICAgICAgICAjZmZmZmZmO1xyXG4kZ3JheS0xMDA6ICAgICAgICAgICAgI2YxZjFmMTtcclxuJGdyYXktMjAwOiAgICAgICAgICAgICNGNUY2Rjg7XHJcbiRncmF5LTMwMDogICAgICAgICAgICAjZWJlYmViO1xyXG4kZ3JheS00MDA6ICAgICAgICAgICAgI2VhZWJlYztcclxuJGdyYXktNTAwOiAgICAgICAgICAgICNhN2E5YzA7XHJcbiRncmF5LTYwMDogICAgICAgICAgICAjYjViNWMzO1xyXG4kZ3JheS03MDA6ICAgICAgICAgICAgIzIzMjUyZjtcclxuJGdyYXktODAwOiAgICAgICAgICAgICMxZjFiNTE7XHJcbiRncmF5LTkwMDogICAgICAgICAgICAjMjEyNTI5O1xyXG4kYmxhY2s6ICAgICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcblxyXG4kcHJpbWFyeTogICAgICAgICAgICAgI0ZGOTkwMDtcclxuJHNlY29uZGFyeTogICAgICAgICAgICM2Yzc1N2Q7XHJcbiRzdWNjZXNzOiAgICAgICAgICAgICAjMThjZTc2O1xyXG4kaW5mbzogICAgICAgICAgICAgICAgIzRiYzFlMjtcclxuJHdhcm5pbmc6ICAgICAgICAgICAgICNmYmI3MGI7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAjZTg0MDQwO1xyXG4kYW1iZXI6ICAgICAgICAgICAgICAgI2NlYmNhNDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICMzNTMzNDg7XHJcbiRsaWdodDogICAgICAgICAgICAgICAjZjlmOWZkO1xyXG4kbXV0ZWQ6ICAgICAgICAgICAgICAgI2E1YTViZjsgXHJcblxyXG4vLyB0aGVtZSBjb2xvclxyXG4kdGhlbWUtY29sb3JzOiggICAgXHJcbiAgICAgICAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxyXG4gICAgICAgIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXHJcbiAgICAgICAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxyXG4gICAgICAgIFwiaW5mb1wiOiAkaW5mbyxcclxuICAgICAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXHJcbiAgICAgICAgXCJkYW5nZXJcIjogJGRhbmdlcixcclxuICAgICAgICBcImRhcmtcIjogJGRhcmssXHJcbiAgICAgICAgXCJsaWdodFwiOiAkbGlnaHQsXHJcbiAgICAgICAgXCJtdXRlZFwiOiAkbXV0ZWRcclxuICk7XHJcblxyXG5cclxuJGJvZHktYmc6ICAgICAgICAgICAgICNmZmZmZmY7XHJcblxyXG4vLyBGb250XHJcbiRmb250LXByaW1hcnk6ICAgICAgICAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXNlY29uZGFyeTogICAgICAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuIiwiLy8gXHJcbi8vIGdlbmVyYWwuc2Nzc1xyXG4vLyBcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcclxuICAgIGNvbG9yOiAkZGFyaztcclxuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtc2l6ZTogMTQuNHB4O1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIHNjcm9sbC1wYWRkaW5nLXRvcDogNjZweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5yb3cgPiAqIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzIwcHg7XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gaGVscGVyLnNjc3NcclxuLy8gXHJcbi8vIGNvbG9yXHJcbkBlYWNoICRjb2xvcixcclxuJHZhbHVlIGluICR0aGVtZS1jb2xvcnMge1xyXG4gICAgLnRleHQtI3skY29sb3J9IHtcclxuICAgICAgICBjb2xvcjogKCR2YWx1ZSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZy0jeyRjb2xvcn0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgkdmFsdWUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZvbnQtc2l6ZVxyXG4uZnMtMTIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZnMtMTMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uZnMtMTQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZnMtMTUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZnMtMTYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZnMtMTcge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uZnMtMTgge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZnMtMTkge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uZnMtMjAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZnMtMjEge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4uZnMtMjIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZnMtMjMge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4uZnMtMjQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4vLyBmb250LXdlaWdodFxyXG4uZnctbWVkaXVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mdy1zZW1pYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vLyBpY29uIHNpemVcclxuLmljb24geyAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDotMnB4O1xyXG59XHJcbi5pY29uLXh4bCB7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICB3aWR0aDogNThweDtcclxufVxyXG5cclxuLmljb24teGwge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbn1cclxuXHJcbi5pY29uLWxnIHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG59XHJcblxyXG4uaWNvbi1zbSB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmljb24teHMge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5pY29uLXh4cyB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLy8gaWNvbi13ZWlnaHRcclxuLnN3LTFfNSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEuNXB4O1xyXG59XHJcblxyXG4uc3ctMSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufSBcclxuXHJcbi8vIGJvcmRlclxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWVuZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JheS0xMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gc2hhZG93XHJcbi5zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoJGdyYXktODAwLCAwLjA3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRncmF5LTcwMCwgMC44Myk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFxyXG4vLyBjb21wb25lbnRzLnNjc3NcclxuLy8gXHJcbi8qIGJ1dHRvbiAqL1xyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuICAgICYuYnRuLXNtIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBlYWNoICRjb2xvciwkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycyB7XHJcbiAgICAuYnRuLSN7JGNvbG9yfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCR2YWx1ZSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgKCR2YWx1ZSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgkdmFsdWUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAoJGNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tb3V0bGluZS0jeyRjb2xvcn0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgKCR2YWx1ZSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBiYWRnZVxyXG4uYmFkZ2UtbGcge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5AZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzIHtcclxuICAgIC5iZy1zb2Z0LSN7JGNvbG9yfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkdmFsdWUsIDI2JSk7XHJcbiAgICAgICAgY29sb3I6ICgkdmFsdWUpO1xyXG4gICAgfVxyXG59IiwiLy8gXHJcbi8vIG1lbnUuc2Nzc1xyXG4vLyBcclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCR3aGl0ZSwgMC4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAubG9nby1saWdodCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28tZGFyayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi1idG4ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS0zMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICAgbmF2YmFyLXN0aWNreVxyXG4ubmF2LXN0aWNreSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgkZ3JheS04MDAsIDAuMDcpO1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNTAwO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAubG9nby1saWdodCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvLWRhcmsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi1idG4ge1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGUtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG4ubmF2YmFyLWxpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAubmF2YmFyLXRvZ2dsZS1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIC5sb2dvLWxpZ2h0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28tZGFyayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIHJlc3BvbnNpdmVcclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoJGdyYXktODAwLCAwLjA3KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICAubG9nby1saWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgLm5hdmJhci10b2dnbGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbiIsIi8vIFxyXG4vLyAuaGVyby5zY3NzXHJcbi8vIFxyXG5AbWl4aW4gYmctY2VudGVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLmhlcm8tb25lLTEge1xyXG4gICAgcGFkZGluZzogMjAwcHggMHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLmJnLWhlcm8tb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2hlcm8tb25lLTEtb3ZlcmxheS1pbWcucG5nXCIpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogODBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVyby1vbmUtMiB7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvLW9uZS0zIHtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIyMHB4IDAgNDIwcHg7XHJcbiAgICAuaGVyby1vbmUtMy1jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAtNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeSwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVyby1vbmUtNCB7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS03MDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLmhlcm8tb25lLTQtc3VidGl0bGUge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxNnB4O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAyNzBweDtcclxuICAgICAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogY2xpcCB0ZXh0IGVsZW1lbnQgKi9cclxuICAgIC5jbGlwLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTkwcHg7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsaXAtdGV4dF9vbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9oZXJvLW9uZS00LWJnLWltZy5qcGdcIik7XHJcbiAgICAgICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhlcm8tb25lLTUge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC5oZXJvLW9uZS01LW92ZXJsYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywkcHJpbWFyeSA1JSwkcHJpbWFyeSA3NSUscmdiYSgkd2hpdGUsMC4xKSA1MCUpO1xyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTUtYmcge1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjU1O1xyXG4gICAgfVxyXG4gICAgLnBsYXktYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxuICAgICAgICAudmlkZW8tYnV0dG9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7ICAgICAgICAgICBcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5oZXJvLW1vZGFsIHtcclxuICAgICAgICAuYnRuLWNsb3Nle1xyXG4gICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgdmlkZW97XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5idG4tY2xvc2Uge1xyXG4gICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5oZXJvLW9uZS02IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7ICAgIFxyXG4gICAgLnZpZGVvLXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBoZXJvLXR3by0xXHJcbi5oZXJvLXR3by0xIHtcclxuICAgIHBhZGRpbmc6IDI0MHB4IDBweCAxNzBweDtcclxufSBcclxuXHJcbi5oZXJvLXR3by0yIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7ICBcclxuICAgIC5oZXJvLXR3by0yLWNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG4gICAgLmhlcm8tdHdvLTItb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2hlcm8tdHdvLTItb3ZlcmxheS5wbmdcIik7XHJcbiAgICAgICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICB9ICBcclxufVxyXG5cclxuLmhlcm8tdHdvLTMge1xyXG4gICAgcGFkZGluZzogMTUwcHggMHB4IDEzMHB4O1xyXG4gICAgLmhlcm8tdHdvLTMtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYnRuIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTQ0cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZXItaXRlbSB7XHJcbiAgICAgICAgLnNsaWRlci1pbWcge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGRhcmssNTAlKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgbGVmdDogNjBweDtcclxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRkYXJrLDYyJSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDExMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA5MHB4O1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uaGVyby10d28tNCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgLmhlcm8tdHdvLTQtY29udGVudCB7ICAgICAgICBcclxuICAgICAgICAuaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmhlcm8tdHdvLTUge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzcyNjhmYyAwJSwgI2IzYWRmZiAxMDAlKTtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICAgICAuaGVyby10d28tNS1vdmVybGF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2hlcm8tdHdvLTUtb3ZlcmxheS0xLnBuZ1wiKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5oZXJvLXR3by02IHtcclxuICAgIHBhZGRpbmc6IDE4MHB4IDAgMTIwcHg7XHJcbiAgICAuaGVyby10d28tNi1pbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gcmVzcG9uc2l2ZVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcclxuICAgIC5oZXJvLW9uZS0xIHtcclxuICAgICAgICBwYWRkaW5nOiAxNTBweCAwcHggMHB4O1xyXG4gICAgICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlcm8tb25lLTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1vbmUtMyB7XHJcbiAgICAgICAgcGFkZGluZzogMTUwcHggMHB4IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmhlcm8tb25lLTMtY29udGVudCB7XHJcbiAgICAgICAgICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1vbmUtNCB7XHJcbiAgICAgICAgLmNsaXAtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweCAhaW1wb3J0YW50ICA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLW9uZS01IHtcclxuICAgICAgICBwYWRkaW5nOiA5MHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5oZXJvLW9uZS01LW92ZXJsYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsJHByaW1hcnkgNSUsJHByaW1hcnkgMTAwJSxyZ2JhKCR3aGl0ZSwwLjEpIDUwJSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLW9uZS02IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzMHB4IDAgNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC52aWRlby1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVyby10d28tMyB7XHJcbiAgICAgICAgcGFkZGluZzogMTQwcHggMCAwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVyby10d28tNCB7XHJcbiAgICAgICAgcGFkZGluZzogOTVweCAwcHggMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZXJvLXR3by02IHtcclxuICAgICAgICBwYWRkaW5nOiAxMzBweCAwIDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmhlcm8tb25lLTMge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1MHB4IDBweCAyMTBweDtcclxuICAgIH1cclxuICAgIC5oZXJvLW9uZS00IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTIwcHggMCAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5jbGlwLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZXJvLW9uZS01IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTIwcHggMCAxMjBweDtcclxuICAgIH1cclxuIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KSB7XHJcbiAgICAuaGVyby1vbmUtMiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEyMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5oZXJvLW9uZS00IHtcclxuICAgICAgIC5oZXJvLW9uZS00LXN1YnRpdGxlIHtcclxuICAgICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSBcclxuICAgIH1cclxuICAgIC5oZXJvLW9uZS01IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTYge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNjBweCAwcHggMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVyby10d28tNCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIxMHB4IDBweCAxNzBweDtcclxuICAgIH1cclxuICAgIC5oZXJvLXR3by01IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTYwcHggMHB4IDEwMHB4O1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7IFxyXG4gICAgLmhlcm8tb25lLTMge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2MHB4IDAgMjkwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tb25lLTQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAyMDBweCAwIDE4MHB4O1xyXG4gICAgICAgIC5jbGlwLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgIC5oZXJvLW9uZS00LXN1YnRpdGxlIHtcclxuICAgICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSBcclxuICAgIH1cclxuIH1cclxuIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIGZvcm0uc2Nzc1xyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS00MDAgIWltcG9ydGFudDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgfSAgXHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRncmF5LTYwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTsgICBcclxufVxyXG5cclxuLy8gYm9keSB7XHJcbi8vICAgICAmLm1vZGFsLW9wZW4ge1xyXG4vLyAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfSIsIi8vIFxyXG4vLyBvdXJzZXJ2aWNlcy5zY3NzXHJcbi8vIFxyXG5cclxuXHJcbi5zZXJ2aWNlLWxheW91dC0xIHtcclxuICAgIHBhZGRpbmc6IDE2MHB4IDBweCAxMDBweDtcclxufVxyXG4gICBcclxuLnNlcnZpY2UtYm94LW9uZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIC5zZXJ2aWNlLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2UtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlLXN1YnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogJG11dGVkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTJweCByZ2JhKCRncmF5LTgwMCwgMC4wNik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xyXG4gICAgICAgIC5zZXJ2aWNlLWljb24sXHJcbiAgICAgICAgLnNlcnZpY2UtdGl0bGUsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgkd2hpdGUsIDAuMTQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VydmljZS1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC42KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc2VydmljZS1ib3gtdHdvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKCRncmF5LTEwMCwgMiUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeSwgMC4wOCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfSAgICBcclxuICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MnB4OyAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcycHg7ICAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAuc2VydmljZS1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgICY6aG92ZXIsICYuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHByaW1hcnksIDAuMDMpO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjAzKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbi1ib3gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjA2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICBcclxufVxyXG4iLCIvLyBcclxuLy8gZmVhdHVyZXMuc2Nzc1xyXG4vLyBcclxuXHJcbi51c2VyLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTExMHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmUtdHdvLWNvbnRlbnQge1xyXG4gICAgICAuaWNvbi1ib3gge1xyXG4gICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjA1KTtcclxuXHJcbiAgICAgIH1cclxuICB9IiwiLy8gc3dpdGNoZXIuc2Nzc1xyXG5cclxuI3N0eWxlLXN3aXRjaGVyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cdGRpdiB7XHJcblx0XHRoMyB7XHJcblx0XHRcdGNvbG9yOiAkZGFyaztcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRtYXJnaW46IDAgM3B4IDEycHg7XHJcblx0XHR9XHJcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHR9XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICR3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDMxLDI3LDgxLDAuMDcpO1xyXG5cdGxlZnQ6IC0xODlweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAxNyU7XHJcblx0d2lkdGg6IDE4OXB4O1xyXG5cdHotaW5kZXg6IDk5OTk7XHJcblx0cGFkZGluZzogMTBweCA1cHg7XHJcblx0LmJvdHRvbSB7XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICR3aGl0ZTtcclxuXHRcdGNvbG9yOiAjMjUyNTI1O1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGEuc2V0dGluZ3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICRkYXJrO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgzMSwyNyw4MSwwLjA3KTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogLTQ1cHg7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbnVsLnBhdHRlcm4ge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZSBub25lO1xyXG5cdG1hcmdpbjogMCAwIDBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdGxpIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0bWFyZ2luOiAycHg7XHJcblx0XHRhIHtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRcdFx0bWFyZ2luOiA1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb2xvcjEge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGOTkwMDtcclxuXHR9XHJcblx0LmNvbG9yMiB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMThjZTc2O1xyXG5cdH1cclxuXHQuY29sb3IzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmYmI3MGI7XHJcblx0fVxyXG5cdC5jb2xvcjQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U4NDA0MDtcclxuXHR9XHJcblx0LmNvbG9yNSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMWUyO1xyXG5cdH1cclxuXHQuY29sb3I2IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjZWJjYTQ7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuXHQjc3R5bGUtc3dpdGNoZXIge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LnRlc3RpLWRlc2Mge1xyXG5cdFx0cCB7XHJcblx0XHRcdG1heC13aWR0aDogMjMwcHg7XHJcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuIiwiLy8gXHJcbi8vIHRlc3RpbW9uaWFsLnNjc3NcclxuLy8gXHJcblxyXG4vLyBjbGllbnQtc2xpZGVyLW9uZVxyXG4uY2xpZW50LXNsaWRlci1vbmUge1xyXG4gICAgLmNsaWVudC1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLnRucy1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudG5zLW5hdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNHB4IDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICY6Zm9jdXMsICY6aG92ZXIsICY6YWN0aXZlLCAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRucy1uYXYtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuY2xpZW50LXNsaWRlci1vbmUge1xyXG4gICAgICAgIC5jbGllbnQtYm94IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmFtZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gXHJcbi8vY2xpZW50LXNsaWRlci10d29cclxuLy8gXHJcbi5jbGllbnQtc2xpZGVyLXR3byB7XHJcbiAgICAudXNlci1pbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuLnRucy1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudG5zLW5hdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDRweCA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAmOmZvY3VzLCAmOmhvdmVyLCAmOmFjdGl2ZSwgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50bnMtbmF2LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmNsaWVudC1zbGlkZXItdHdvIHtcclxuICAgICAgICAuY2xpZW50LWJveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLm5hbWUtYm94IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBoZXJvLXR3by0zIHNsaWRlclxyXG4uaGVyby10d28tMyB7XHJcbiAgICAudG5zLW91dGVyIHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIGZhcS5zY3NzXHJcblxyXG4uYWNjb3JkaW9uIHtcclxuICAgIC5hY2NvcmRpb24taXRlbSB7XHJcbiAgICAgICAgLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAuYWNjb3JkaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pSAXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5jb2xsYXBzZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLinJtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjY29yZGlvbi1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIC5hY2NvcmRpb24tYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZhcS1pbWcge1xyXG4gICAgLmZhcS1hc2sge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTEwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxMTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuZmFxLWltZyB7XHJcbiAgICAgICAgLmZhcS1hc2sge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNTBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAxMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gXHJcbi8vIG91cnByaWNpbmcuc2Nzc1xyXG4vLyBcclxuLnByaWNlLWJveCB7XHJcbiAgLnByaWNlLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNpbmctYmcge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBib3R0b206IDUwJTtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59IiwiLy8gXHJcbi8vIGJyYW5kbG9nby5zY3NzXHJcbi8vIFxyXG4uYnJhbmQtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxMjBweDtcclxuICAuYnJhbmQtbG9nbyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuYnJhbmQtc2VjdGlvbiB7XHJcbiAgICAgIHBhZGRpbmc6MHB4IDBweCA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gZm9vdGVyLnNjc3NcclxuLy8gXHJcbi5mb290ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgcGFkZGluZzogODBweCAwcHggMzBweDtcclxuICAgIC5mb290ZXItbGlzdCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC40KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvb3Rlci1hbHQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoJHdoaXRlLCAwLjA4KTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgLmZvb3Rlci1hbHQtbGlzdCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC40KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    7195: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AmazonSearchComponent": function AmazonSearchComponent() {
          return (
            /* binding */
            _AmazonSearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      7263);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      8994);
      /* harmony import */


      var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/services.service */
      6325);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-feather */
      5411);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/scrollspy.directive */
      6564);
      /* harmony import */


      var primeng_blockui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/blockui */
      1672);
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/progressspinner */
      913);
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/panel */
      7532);
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/selectbutton */
      8314);
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/inputtext */
      1875);
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/togglebutton */
      1416);
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/footer/footer.component */
      5227);
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/toast */
      4412);
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/tooltip */
      9881);
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/button */
      1104);
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/ripple */
      8996);
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/inputtextarea */
      2126);
      /* harmony import */


      var _amazon_search_result_amazon_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../amazon-search-result/amazon-search-result.component */
      8468);

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function AmazonSearchComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Search Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r0.currentSection === "search-result"))("ngxScrollTo", "#search-result");
        }
      }

      function AmazonSearchComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("pTooltip", item_r11.tooltip)("alt", item_r11.img);
        }
      }

      function AmazonSearchComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "small", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Country is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "small", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Search is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "small", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Start Page is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "small", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "End Page is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AmazonSearchComponent_div_61_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.randomProxy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "textarea", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AmazonSearchComponent_div_62_Template_textarea_blur_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.textAreaCount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Proxy List");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i-feather", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Enter one proxy per line");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Number of proxies: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AmazonSearchComponent_app_amazon_search_result_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-amazon-search-result", 65);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r9.productList)("isSuccessData", ctx_r9.isSuccessData)("inputData", ctx_r9.inputData);
        }
      }

      function AmazonSearchComponent_ng_template_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r16.summary);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r16.detail);
        }
      }

      var _c1 = function _c1() {
        return ["SECTION"];
      };

      var _c2 = function _c2() {
        return {
          width: "60px",
          height: "60px"
        };
      };

      var _AmazonSearchComponent = /*#__PURE__*/function () {
        function _AmazonSearchComponent(scrollToService, httpRest, messageService) {
          _classCallCheck(this, _AmazonSearchComponent);

          this.scrollToService = scrollToService;
          this.httpRest = httpRest;
          this.messageService = messageService;
          this.currentSection = "product-search";
          this.contents = "If you don't want to use your own proxy, product search results will run slower.";
          this.checked1 = false;
          this.onLabelMessage = "I will use proxy";
          this.offLabelMessage = "I will not use proxy";
          this.onIconString = "pi pi-check";
          this.hasCountryError = false;
          this.hasKeywordError = false;
          this.hasStartPageError = false;
          this.hasEndPageError = false;
          this.blockedSearchPanel = false;
          this.isSuccessData = false;
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            target: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            pageStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            pageEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            isUseProxy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
            proxyList: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl([])
          });
          this.targetOptions = [{
            label: "us",
            value: "us",
            img: "../../../assets/images/country/united-states.png",
            tooltip: "United States"
          }, {
            label: "de",
            value: "de",
            img: "../../../assets/images/country/germany.png",
            tooltip: "Germany"
          }, {
            label: "ca",
            value: "ca",
            img: "../../../assets/images/country/canada.png",
            tooltip: "Canada"
          }, {
            label: "mx",
            value: "mx",
            img: "../../../assets/images/country/mexico.png",
            tooltip: "Mexico"
          }, {
            label: "sg",
            value: "sg",
            img: "../../../assets/images/country/singapore.png",
            tooltip: "Singapore"
          }, {
            label: "tr",
            value: "tr",
            img: "../../../assets/images/country/turkey.png",
            tooltip: "Turkey"
          }, {
            label: "fr",
            value: "fr",
            img: "../../../assets/images/country/france.png",
            tooltip: "France"
          }, {
            label: "au",
            value: "au",
            img: "../../../assets/images/country/austallia.png",
            tooltip: "Australia"
          }, {
            label: "jp",
            value: "jp",
            img: "../../../assets/images/country/japan.png",
            tooltip: "Japan"
          }, {
            label: "uk",
            value: "uk",
            img: "../../../assets/images/country/united-kingdom.png",
            tooltip: "United Kingdom"
          }];
        }

        _createClass(_AmazonSearchComponent, [{
          key: "pageStart",
          value: function pageStart() {
            var pageStartValue = $("#float-input-start").val();

            if (pageStartValue < 1) {
              this.searchForm.patchValue({
                pageStart: 1
              });
            }

            if ($("#float-input-end").val() > 0) {
              if (Number($("#float-input-start").val()) > Number($("#float-input-end").val())) {
                this.searchForm.patchValue({
                  pageStart: $("#float-input-end").val()
                });
              }
            }
          }
        }, {
          key: "pageEnd",
          value: function pageEnd() {
            var pageEndValue = $("#float-input-end").val();

            if (pageEndValue > 20) {
              this.searchForm.patchValue({
                pageEnd: 20
              });
            }

            if ($("#float-input-start").val() > 0) {
              if (Number($("#float-input-start").val()) > Number($("#float-input-end").val())) {
                this.searchForm.patchValue({
                  pageEnd: $("#float-input-start").val()
                });
              }
            }
          }
        }, {
          key: "randomProxy",
          value: function randomProxy() {
            this.searchForm.patchValue({
              proxyList: []
            });
            this.getProxyList();
            this.searchForm.patchValue({
              proxyList: this.proxyListArray
            });
            var txt;
            txt = $("#float-input-count").val();
            var text = txt.split(",");
            var str = text.join("\n");
            this.searchForm.patchValue({
              proxyList: str
            });
            $("#linesUsed").text($("#float-input-count").val().split("\n").length);
          }
        }, {
          key: "textCount",
          value: function textCount() {
            if (!this.searchForm.value.isUseProxy) {
              this.searchForm.patchValue({
                proxyList: []
              });
            }

            var linesUsed = $("#linesUsed");
            $("#float-input-count").keydown(function () {
              var newLines = $("#float-input-count").val().split("\n").length;
              linesUsed.text(newLines);
            });
          }
        }, {
          key: "textAreaCount",
          value: function textAreaCount() {
            var textarea = $("#float-input-count").val().split("\n");

            if (textarea.length === 1) {
              $("#linesUsed").text(textarea.length - 1);
            } else {
              $("#linesUsed").text(textarea.length);
            }
          }
        }, {
          key: "countryCheck",
          value: function countryCheck() {
            this.searchForm.controls["target"].valid ? this.hasCountryError = false : this.hasCountryError = true;
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.searchForm.reset();
            this.searchForm.patchValue({
              proxyList: [],
              isUseProxy: false
            });
            this.hasCountryError = false;
            this.hasKeywordError = false;
            this.hasStartPageError = false;
            this.hasEndPageError = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var _a;

            if (this.searchForm.valid) {
              this.productList = [];
              this.isSuccessData = false;
              this.blockedSearchPanel = true;
              setInterval(function () {
                $("#search-block-label").text("The search process may take a while. In the meantime, please sit back and wait.");
              }, 3000);
              setInterval(function () {
                $("#search-block-label").text("We look forward to showing you the search results.");
              }, 6000);
              var formData = {
                target: this.searchForm.value.target,
                keyword: this.searchForm.value.keyword,
                pageStart: this.searchForm.value.pageStart,
                pageEnd: this.searchForm.value.pageEnd,
                isUseProxy: this.searchForm.value.isUseProxy,
                proxyList: this.searchForm.value.proxyList.length > 0 ? this.searchForm.value.proxyList.split("\n") : []
              };
              this.httpRest.searchProducts(formData).subscribe(function (data) {
                if (data.success === false) {
                  _this.blockedSearchPanel = false;

                  _this.showBottomCenter();
                } else {
                  _this.inputData = _this.searchForm.value;
                  _this.productList = data;
                  _this.isSuccessData = true;
                  _this.blockedSearchPanel = false;

                  _this.searchForm.reset();

                  _this.searchForm.patchValue({
                    proxyList: [],
                    isUseProxy: false
                  });

                  _this.hasCountryError = false;
                  _this.hasKeywordError = false;
                  _this.hasStartPageError = false;
                  _this.hasEndPageError = false;
                }
              }, function (error) {
                _this.blockedSearchPanel = false;

                _this.searchForm.reset();

                _this.searchForm.patchValue({
                  proxyList: [],
                  isUseProxy: false
                });

                _this.hasCountryError = false;
                _this.hasKeywordError = false;
                _this.hasStartPageError = false;
                _this.hasEndPageError = false;
              });
            } else {
              this.blockedSearchPanel = false;
              this.searchForm.controls["keyword"].valid ? this.hasKeywordError = false : this.hasKeywordError = true;
              this.searchForm.controls["pageStart"].valid ? this.hasStartPageError = false : this.hasStartPageError = true;
              this.searchForm.controls["pageEnd"].valid ? this.hasEndPageError = false : this.hasEndPageError = true;
              this.searchForm.controls["target"].valid ? this.hasCountryError = false : this.hasCountryError = true;

              if (((_a = this.searchForm.value.proxyList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchForm.value.proxyList = this.searchForm.value.proxyList.split("\n");
              }
            }
          }
        }, {
          key: "showBottomCenter",
          value: function showBottomCenter() {
            this.messageService.add({
              key: "bc",
              severity: "warn",
              summary: "Warn",
              detail: "Please enter a different proxy or try again later."
            });
          }
        }, {
          key: "getProxyList",
          value: function getProxyList() {
            var _this2 = this;

            this.httpRest.getProxyList().subscribe(function (response) {
              _this2.proxyListArray = response;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProxyList();
          }
        }, {
          key: "windowScroll",
          value: function windowScroll() {
            var navbar = document.getElementById("navbar");

            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
              if (navbar !== null) {
                navbar.classList.add("nav-sticky");
              }
            } else {
              if (navbar !== null) {
                navbar.classList.remove("nav-sticky");
              }
            }
          }
          /**
           * Section changed method
           * @param sectionId specify the current sectionID
           */

        }, {
          key: "onSectionChange",
          value: function onSectionChange(sectionId) {
            this.currentSection = sectionId;
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            var nav = document.getElementById("navbarNav");

            if (nav !== null) {
              nav.classList.toggle("show");
            }
          }
        }]);

        return _AmazonSearchComponent;
      }();

      _AmazonSearchComponent.ɵfac = function AmazonSearchComponent_Factory(t) {
        return new (t || _AmazonSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService));
      };

      _AmazonSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AmazonSearchComponent,
        selectors: [["app-amazon-search"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService])],
        decls: 74,
        vars: 25,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light", "border-bottom-0", 3, "scroll"], [1, "container"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggle-icon"], ["name", "menu"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngClass", "ngxScrollTo"], ["class", "nav-link", "href", "javascript: void(0);", 3, "ngClass", "ngxScrollTo", 4, "ngIf"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "product-search", 1, "hero-two-4", "bg-light", "position-relative", "overflow-hidden", "align-items-center", "d-flex", 2, "background-image", "url(assets/layout/images/hero-two-4-bg.png)"], [1, "row", "justify-content-center"], [1, "col-lg-10", "text-center"], [1, "hero-two-4-content"], [1, "text-dark", "display-4", "fw-light", "mb-4"], ["src", "assets/images/amazon-logo.png", "alt", "logo", "width", "160", 1, "mb-2"], [1, "text-muted", "fw-normal", "lh-sm", "mb-5"], [3, "target", "blocked"], ["src", "assets/images/world.gif", "alt", "world", "width", "500", 1, "world-img"], ["styleClass", "custom-spinner", "strokeWidth", "7", "fill", "transparent", "animationDuration", ".7s"], ["id", "search-block-label", 1, "mt-4"], ["searchPanel", ""], [1, "row", "gx-3", "gy-2", "align-items-center", "justify-content-center", 3, "formGroup", "ngSubmit"], [1, "col-12"], ["formControlName", "target", "optionLabel", "label", "aria-describedby", "country-help", "optionValue", "value", 3, "options", "click"], ["class", "alert m-0 p-0", 4, "ngIf"], [1, "col-12", "col-md-7", "mt-5"], [1, "p-float-label", "form-group"], ["id", "float-input", "formControlName", "keyword", "autocomplete", "off", "type", "text", "aria-describedby", "keyword-help", "maxlength", "100", "pInputText", "", "required", "", 1, "form-control", "ps-5", "ng-invalid", "ng-dirty"], ["for", "float-input"], ["name", "search", 1, "sw-1_5", "icon-xxs", "text-muted", "position-absolute", "top-50", "start-0", "end-0", "translate-middle-y", "ms-4", "hero-icon"], [1, "col-12", "col-md-5", "d-flex", "justify-content-center", "input-number", "number-input", "mt-3"], [1, "col-6", "col-md-6", "input-number", "page-start-input"], ["id", "float-input-start", "formControlName", "pageStart", "autocomplete", "off", "aria-describedby", "page-start-help", "type", "number", "min", "1", "pInputText", "", "required", "", 1, "form-control", "ps-5", 3, "blur"], ["for", "float-input-start"], ["name", "hash", 1, "sw-1_5", "icon-xxs", "text-muted", "position-absolute", "top-50", "start-0", "end-0", "translate-middle-y", "ms-4", "hero-icon"], [1, "col-6", "col-md-6", "input-number"], ["id", "float-input-end", "formControlName", "pageEnd", "aria-describedby", "page-end-help", "autocomplete", "off", "type", "number", "max", "20", "pInputText", "", "required", "", 1, "form-control", "ps-5", 3, "blur"], ["for", "float-input-end"], [1, "col-12", "input-number", "d-flex", "justify-content-center"], [1, "form-group"], ["formControlName", "isUseProxy", "offIcon", "pi pi-times", 3, "onLabel", "offLabel", "onIcon", "click"], ["class", "px-3", 4, "ngIf"], ["class", "col-12 input-number", 4, "ngIf"], [1, "col-12", "input-number"], ["type", "submit", 1, "col-8", "input-group-text", "btn", "btn-primary"], ["type", "button", 1, "input-group-text", "btn", "btn-link", "trash-button", 3, "click"], [3, "product", "isSuccessData", "inputData", 4, "ngIf"], ["position", "bottom-center", "key", "bc"], ["pTemplate", "message"], ["tooltipPosition", "bottom", 3, "src", "pTooltip", "alt"], [1, "alert", "m-0", "p-0"], ["id", "country-help", 1, "p-error", "block"], ["id", "keyword-help", 1, "p-error", "block"], ["id", "page-start-help", 1, "p-error", "block"], ["id", "page-end-help", 1, "p-error", "block"], [1, "px-3"], ["pButton", "", "pRipple", "", "type", "button", "label", "Random Proxy", 1, "p-button-text", 3, "click"], ["id", "float-input-count", "formControlName", "proxyList", "rows", "4", "cols", "30", "autocomplete", "off", "pInputTextarea", "", 1, "form-control", "ps-5", 3, "blur"], ["for", "float-input-count"], ["name", "list", 1, "sw-1_5", "icon-xxs", "text-muted", "position-absolute", "top-50", "start-0", "end-0", "translate-middle-y", "ms-4", "hero-icon"], [1, "theCount", "float-start"], [1, "theCount"], ["id", "linesUsed"], [3, "product", "isSuccessData", "inputData"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"]],
        template: function AmazonSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function AmazonSearchComponent_Template_nav_scroll_0_listener() {
              return ctx.windowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AmazonSearchComponent_Template_button_click_2_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i-feather", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Product Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AmazonSearchComponent_a_11_Template, 2, 4, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sectionChange", function AmazonSearchComponent_Template_div_sectionChange_12_listener($event) {
              return ctx.onSectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h1", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Product Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p-blockUI", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "p-progressSpinner", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h6", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Searching...");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p-panel", null, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "form", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AmazonSearchComponent_Template_form_ngSubmit_31_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p-selectButton", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AmazonSearchComponent_Template_p_selectButton_click_33_listener() {
              return ctx.countryCheck();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AmazonSearchComponent_ng_template_34_Template, 1, 3, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AmazonSearchComponent_div_35_Template, 3, 0, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i-feather", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, AmazonSearchComponent_div_42_Template, 3, 0, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AmazonSearchComponent_Template_input_blur_46_listener() {
              return ctx.pageStart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Start Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i-feather", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, AmazonSearchComponent_div_50_Template, 3, 0, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AmazonSearchComponent_Template_input_blur_53_listener() {
              return ctx.pageEnd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "End Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i-feather", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, AmazonSearchComponent_div_57_Template, 3, 0, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p-toggleButton", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AmazonSearchComponent_Template_p_toggleButton_click_60_listener() {
              return ctx.textCount();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, AmazonSearchComponent_div_61_Template, 2, 0, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, AmazonSearchComponent_div_62_Template, 12, 0, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AmazonSearchComponent_Template_button_click_67_listener() {
              return ctx.clearForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, AmazonSearchComponent_app_amazon_search_result_69_Template, 1, 3, "app-amazon-search-result", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "p-toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "p-toast", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, AmazonSearchComponent_ng_template_73_Template, 7, 2, "ng-template", 50);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c0, ctx.currentSection === "product-search"))("ngxScrollTo", "#product-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSuccessData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.contents);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r1)("blocked", ctx.blockedSearchPanel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.targetOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasCountryError);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasKeywordError && (ctx.searchForm.controls["keyword"].value == null ? null : ctx.searchForm.controls["keyword"].value.length) < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasStartPageError && (ctx.searchForm.controls["pageStart"].value == null ? null : ctx.searchForm.controls["pageStart"].value.length) < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasEndPageError && (ctx.searchForm.controls["pageEnd"].value == null ? null : ctx.searchForm.controls["pageEnd"].value.length) < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("onLabel", ctx.onLabelMessage)("offLabel", ctx.offLabelMessage)("onIcon", ctx.onIconString);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchForm.value.isUseProxy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchForm.value.isUseProxy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSuccessData);
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollspyDirective, primeng_blockui__WEBPACK_IMPORTED_MODULE_10__.BlockUI, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinner, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_13__.SelectButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_15__.ToggleButton, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.Ripple, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_20__.InputTextarea, _amazon_search_result_amazon_search_result_component__WEBPACK_IMPORTED_MODULE_3__.AmazonSearchResultComponent],
        styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #353348;\n  background: #ffffff;\n  line-height: 1.6;\n  font-size: 14.4px;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-padding-top: 66px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  outline: none;\n}\np[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1320px;\n  }\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #FF9900 !important;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #18ce76 !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #18ce76 !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #4bc1e2 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #4bc1e2 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #fbb70b !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #fbb70b !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #e84040 !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #e84040 !important;\n}\n.text-dark[_ngcontent-%COMP%] {\n  color: #353348 !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #353348 !important;\n}\n.text-light[_ngcontent-%COMP%] {\n  color: #f9f9fd !important;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f9f9fd !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #a5a5bf !important;\n}\n.bg-muted[_ngcontent-%COMP%] {\n  background-color: #a5a5bf !important;\n}\n.fs-12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.fs-13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.fs-14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.fs-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.fs-16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.fs-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.fs-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.fs-19[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.fs-20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.fs-21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.fs-22[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.fs-23[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.fs-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.fw-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n}\n.icon-xxl[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n}\n.icon-xl[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n}\n.icon-lg[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 34px;\n}\n.icon-sm[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n.icon-xs[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.icon-xxs[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n.sw-1_5[_ngcontent-%COMP%] {\n  stroke-width: 1.5px;\n}\n.sw-1[_ngcontent-%COMP%] {\n  stroke-width: 1px;\n}\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1 !important;\n}\n.border-end[_ngcontent-%COMP%] {\n  border-right: 1px solid #f1f1f1 !important;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07) !important;\n}\n.bg-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(35, 37, 47, 0.83);\n  width: 100%;\n  height: 100%;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 100px 0px 100px;\n  position: relative;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 10px 20px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: none !important;\n}\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n  transform: translateY(-2px);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #FF9900;\n  border: 1px solid #FF9900 !important;\n  color: #ffffff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: \"primary\" !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #FF9900 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:active, .btn-outline-primary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border: 1px solid #6c757d !important;\n  color: #ffffff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary[_ngcontent-%COMP%]:active, .btn-secondary.active[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n  color: \"secondary\" !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #6c757d !important;\n  color: #FF9900 !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover, .btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary[_ngcontent-%COMP%]:active, .btn-outline-secondary.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #18ce76;\n  border: 1px solid #18ce76 !important;\n  color: #ffffff;\n}\n.btn-success[_ngcontent-%COMP%]:hover, .btn-success[_ngcontent-%COMP%]:focus, .btn-success[_ngcontent-%COMP%]:active, .btn-success.active[_ngcontent-%COMP%] {\n  background-color: #18ce76 !important;\n  color: \"success\" !important;\n}\n.btn-outline-success[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #18ce76 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover, .btn-outline-success[_ngcontent-%COMP%]:focus, .btn-outline-success[_ngcontent-%COMP%]:active, .btn-outline-success.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #4bc1e2;\n  border: 1px solid #4bc1e2 !important;\n  color: #ffffff;\n}\n.btn-info[_ngcontent-%COMP%]:hover, .btn-info[_ngcontent-%COMP%]:focus, .btn-info[_ngcontent-%COMP%]:active, .btn-info.active[_ngcontent-%COMP%] {\n  background-color: #4bc1e2 !important;\n  color: \"info\" !important;\n}\n.btn-outline-info[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #4bc1e2 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-info[_ngcontent-%COMP%]:hover, .btn-outline-info[_ngcontent-%COMP%]:focus, .btn-outline-info[_ngcontent-%COMP%]:active, .btn-outline-info.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #fbb70b;\n  border: 1px solid #fbb70b !important;\n  color: #ffffff;\n}\n.btn-warning[_ngcontent-%COMP%]:hover, .btn-warning[_ngcontent-%COMP%]:focus, .btn-warning[_ngcontent-%COMP%]:active, .btn-warning.active[_ngcontent-%COMP%] {\n  background-color: #fbb70b !important;\n  color: \"warning\" !important;\n}\n.btn-outline-warning[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #fbb70b !important;\n  color: #FF9900 !important;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:hover, .btn-outline-warning[_ngcontent-%COMP%]:focus, .btn-outline-warning[_ngcontent-%COMP%]:active, .btn-outline-warning.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #e84040;\n  border: 1px solid #e84040 !important;\n  color: #ffffff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover, .btn-danger[_ngcontent-%COMP%]:focus, .btn-danger[_ngcontent-%COMP%]:active, .btn-danger.active[_ngcontent-%COMP%] {\n  background-color: #e84040 !important;\n  color: \"danger\" !important;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #e84040 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover, .btn-outline-danger[_ngcontent-%COMP%]:focus, .btn-outline-danger[_ngcontent-%COMP%]:active, .btn-outline-danger.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-dark[_ngcontent-%COMP%] {\n  background-color: #353348;\n  border: 1px solid #353348 !important;\n  color: #ffffff;\n}\n.btn-dark[_ngcontent-%COMP%]:hover, .btn-dark[_ngcontent-%COMP%]:focus, .btn-dark[_ngcontent-%COMP%]:active, .btn-dark.active[_ngcontent-%COMP%] {\n  background-color: #353348 !important;\n  color: \"dark\" !important;\n}\n.btn-outline-dark[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #353348 !important;\n  color: #FF9900 !important;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:hover, .btn-outline-dark[_ngcontent-%COMP%]:focus, .btn-outline-dark[_ngcontent-%COMP%]:active, .btn-outline-dark.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-light[_ngcontent-%COMP%] {\n  background-color: #f9f9fd;\n  border: 1px solid #f9f9fd !important;\n  color: #ffffff;\n}\n.btn-light[_ngcontent-%COMP%]:hover, .btn-light[_ngcontent-%COMP%]:focus, .btn-light[_ngcontent-%COMP%]:active, .btn-light.active[_ngcontent-%COMP%] {\n  background-color: #f9f9fd !important;\n  color: \"light\" !important;\n}\n.btn-outline-light[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #f9f9fd !important;\n  color: #FF9900 !important;\n}\n.btn-outline-light[_ngcontent-%COMP%]:hover, .btn-outline-light[_ngcontent-%COMP%]:focus, .btn-outline-light[_ngcontent-%COMP%]:active, .btn-outline-light.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.btn-muted[_ngcontent-%COMP%] {\n  background-color: #a5a5bf;\n  border: 1px solid #a5a5bf !important;\n  color: #ffffff;\n}\n.btn-muted[_ngcontent-%COMP%]:hover, .btn-muted[_ngcontent-%COMP%]:focus, .btn-muted[_ngcontent-%COMP%]:active, .btn-muted.active[_ngcontent-%COMP%] {\n  background-color: #a5a5bf !important;\n  color: \"muted\" !important;\n}\n.btn-outline-muted[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid #a5a5bf !important;\n  color: #FF9900 !important;\n}\n.btn-outline-muted[_ngcontent-%COMP%]:hover, .btn-outline-muted[_ngcontent-%COMP%]:focus, .btn-outline-muted[_ngcontent-%COMP%]:active, .btn-outline-muted.active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  color: #ffffff !important;\n}\n.badge-lg[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.bg-soft-primary[_ngcontent-%COMP%] {\n  background-color: #ffce85;\n  color: #FF9900;\n}\n.bg-soft-secondary[_ngcontent-%COMP%] {\n  background-color: #b2b7bc;\n  color: #6c757d;\n}\n.bg-soft-success[_ngcontent-%COMP%] {\n  background-color: #7bf0b7;\n  color: #18ce76;\n}\n.bg-soft-info[_ngcontent-%COMP%] {\n  background-color: #bde8f4;\n  color: #4bc1e2;\n}\n.bg-soft-warning[_ngcontent-%COMP%] {\n  background-color: #fddd8d;\n  color: #fbb70b;\n}\n.bg-soft-danger[_ngcontent-%COMP%] {\n  background-color: #f6b6b6;\n  color: #e84040;\n}\n.bg-soft-dark[_ngcontent-%COMP%] {\n  background-color: #6e6a96;\n  color: #353348;\n}\n.bg-soft-light[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #f9f9fd;\n}\n.bg-soft-muted[_ngcontent-%COMP%] {\n  background-color: #f2f2f6;\n  color: #a5a5bf;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  transition: all 0.3s ease-in-out;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  padding-right: 26px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n  border: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  color: #FF9900;\n  border: 1px solid #ebebeb;\n  background-color: #ffffff !important;\n}\n.nav-sticky[_ngcontent-%COMP%] {\n  padding: 12px 0px;\n  background-color: #ffffff;\n  border-bottom: 1px solid #ffffff;\n  box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07);\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #a7a9c0;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .nav-sticky[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.nav-sticky[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  border: 1px solid #FF9900;\n  background-color: #FF9900 !important;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.nav-sticky[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.navbar-light[_ngcontent-%COMP%] {\n  padding: 12px 0px;\n  transition: all 0.3s ease-in-out;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #a7a9c0;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    background-color: #ffffff;\n    box-shadow: 0px 4px 20px rgba(31, 27, 81, 0.07) !important;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    padding: 15px 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #a7a9c0;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggle-icon[_ngcontent-%COMP%] {\n    color: #353348;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n  }\n}\n.hero-one-1[_ngcontent-%COMP%] {\n  padding: 200px 0px 0px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: auto;\n}\n.hero-one-1[_ngcontent-%COMP%]   .bg-hero-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-one-1-overlay-img.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 1;\n  height: 100%;\n  width: 100%;\n}\n.hero-one-1[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  position: relative;\n  top: 80px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 10px;\n  z-index: 1;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n  font-size: 13px;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #FF9900 !important;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #eaebec;\n}\n.hero-one-1[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  left: 12px;\n  padding: 4px 10px;\n  background-color: #ffffff;\n  font-size: 13px;\n  color: #b5b5c3;\n}\n.hero-one-2[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n.hero-one-2[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.hero-one-3[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 220px 0 420px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute !important;\n  bottom: -50px !important;\n  right: 0px !important;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 18px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.3) !important;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.hero-one-3[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n  width: 26px !important;\n}\n.hero-one-4[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #23252f;\n  height: 100vh;\n  \n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%] {\n  letter-spacing: 16px;\n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  left: 270px;\n  bottom: 50%;\n  transform: translateX(-50%);\n}\n.hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  right: 240px;\n  bottom: 50%;\n  transform: translateX(-50%);\n}\n.hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n  font-size: 190px;\n  color: #ffffff;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-one-4[_ngcontent-%COMP%]   .clip-text_one[_ngcontent-%COMP%] {\n  background-image: url('hero-one-4-bg-img.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-one-5[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-one-5-overlay[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #FF9900 5%, #FF9900 75%, rgba(255, 255, 255, 0.1) 50%);\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-one-5-bg[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.55;\n}\n.hero-one-5[_ngcontent-%COMP%]   .play-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50%;\n  transform: translateY(50%);\n  right: 0;\n  left: 0;\n  text-align: center;\n}\n.hero-one-5[_ngcontent-%COMP%]   .play-box[_ngcontent-%COMP%]   .video-button[_ngcontent-%COMP%] {\n  height: 68px;\n  width: 68px;\n  font-size: 30px;\n  line-height: 68px;\n  border-radius: 50%;\n  display: inline-block;\n  color: #ffffff;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background-color: white;\n  border-radius: 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 3;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.hero-one-5[_ngcontent-%COMP%]   .hero-modal[_ngcontent-%COMP%]:hover   .btn-close[_ngcontent-%COMP%] {\n  opacity: 0.5 !important;\n}\n.hero-one-6[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-one-6[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n  width: 50%;\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.hero-two-1[_ngcontent-%COMP%] {\n  padding: 240px 0px 170px;\n}\n.hero-two-2[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-2[_ngcontent-%COMP%]   .hero-two-2-content[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.hero-two-2[_ngcontent-%COMP%]   .hero-two-2-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-two-2-overlay.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.85;\n}\n.hero-two-3[_ngcontent-%COMP%] {\n  padding: 150px 0px 130px;\n}\n.hero-two-3[_ngcontent-%COMP%]   .hero-two-3-content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 40px;\n  height: 2px;\n  background-color: #FF9900;\n  position: absolute;\n  left: -44px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]   .slider-img[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #b4b2c8;\n  position: absolute;\n  top: -30px;\n  right: -10px;\n  bottom: 80px;\n  left: 60px;\n  filter: blur(5px);\n}\n.hero-two-3[_ngcontent-%COMP%]   .slider-item[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: #d7d6e2;\n  position: absolute;\n  top: -60px;\n  right: -50px;\n  bottom: 110px;\n  left: 90px;\n  filter: blur(5px);\n}\n.hero-two-4[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-4[_ngcontent-%COMP%]   .hero-two-4-content[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 0 !important;\n}\n.hero-two-5[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero-two-5[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background: linear-gradient(to bottom, #7268fc 0%, #b3adff 100%);\n  width: 80px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.hero-two-5[_ngcontent-%COMP%]   .hero-two-5-overlay[_ngcontent-%COMP%] {\n  background-image: url('hero-two-5-overlay-1.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.hero-two-6[_ngcontent-%COMP%] {\n  padding: 180px 0 120px;\n}\n.hero-two-6[_ngcontent-%COMP%]   .hero-two-6-img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n@media (max-width: 576px) {\n  .hero-one-1[_ngcontent-%COMP%] {\n    padding: 150px 0px 0px;\n  }\n  .hero-one-1[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n\n  .hero-one-2[_ngcontent-%COMP%] {\n    padding: 100px 0px !important;\n  }\n  .hero-one-2[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 150px 0px 140px !important;\n  }\n  .hero-one-3[_ngcontent-%COMP%]   .hero-one-3-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 70px !important;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    padding: 90px 0px !important;\n  }\n  .hero-one-5[_ngcontent-%COMP%]   .hero-one-5-overlay[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, #FF9900 5%, #FF9900 100%, rgba(255, 255, 255, 0.1) 50%);\n  }\n\n  .hero-one-6[_ngcontent-%COMP%] {\n    display: block !important;\n    padding: 130px 0 70px !important;\n  }\n  .hero-one-6[_ngcontent-%COMP%]   .video-section[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative !important;\n    top: auto;\n    bottom: 0;\n    transform: translateY(0);\n    padding: 50px 15px 0;\n  }\n\n  .hero-two-3[_ngcontent-%COMP%] {\n    padding: 140px 0 0px;\n  }\n\n  .hero-two-4[_ngcontent-%COMP%] {\n    padding: 95px 0px 100px !important;\n  }\n\n  .hero-two-6[_ngcontent-%COMP%] {\n    padding: 130px 0 70px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 150px 0px 210px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0 120px !important;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 110px;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0 120px;\n  }\n}\n@media (max-width: 1024px) {\n  .hero-one-2[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 120px 0px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before, .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n    content: none;\n  }\n\n  .hero-one-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 150px 0px;\n  }\n\n  .hero-one-6[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 160px 0px 100px;\n  }\n\n  .hero-two-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 210px 0px 170px;\n  }\n\n  .hero-two-5[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 160px 0px 100px;\n  }\n  .hero-two-5[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n@media (min-width: 769px) and (max-width: 1199.98px) {\n  .hero-one-3[_ngcontent-%COMP%] {\n    padding: 160px 0 290px;\n  }\n\n  .hero-one-4[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 200px 0 180px;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .clip-text[_ngcontent-%COMP%] {\n    font-size: 140px;\n  }\n  .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:before, .hero-one-4[_ngcontent-%COMP%]   .hero-one-4-subtitle[_ngcontent-%COMP%]:after {\n    content: none;\n  }\n}\n.form-control[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 45px;\n  border: 1px solid #eaebec !important;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #FF9900 !important;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #b5b5c3 !important;\n  font-weight: 300 !important;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.service-layout-1[_ngcontent-%COMP%] {\n  padding: 160px 0px 100px;\n}\n.service-box-one[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  color: #FF9900;\n}\n.service-box-one[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF9900 !important;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #353348;\n}\n.service-box-one[_ngcontent-%COMP%]   .service-subtitle[_ngcontent-%COMP%] {\n  color: #a5a5bf;\n}\n.service-box-one[_ngcontent-%COMP%]:hover, .service-box-one.active[_ngcontent-%COMP%] {\n  box-shadow: 3px 4px 12px rgba(31, 27, 81, 0.06);\n  background-color: #FF9900;\n  transform: translateY(-0.5rem);\n}\n.service-box-one[_ngcontent-%COMP%]:hover   .service-icon[_ngcontent-%COMP%], .service-box-one[_ngcontent-%COMP%]:hover   .service-title[_ngcontent-%COMP%], .service-box-one[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  fill: rgba(255, 255, 255, 0.14);\n}\n.service-box-one[_ngcontent-%COMP%]:hover   .service-subtitle[_ngcontent-%COMP%], .service-box-one.active[_ngcontent-%COMP%]   .service-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.service-box-two[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n}\n.service-box-two[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  background-color: rgba(255, 153, 0, 0.08);\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  border-radius: 50%;\n  transition: all 0.5s ease-in-out;\n}\n.service-box-two[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 72px;\n  height: 72px;\n  line-height: 72px;\n  transition: all 0.8s ease-in-out;\n  border-radius: 50%;\n}\n.service-box-two[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  color: #FF9900;\n  display: inline-block;\n}\n.service-box-two[_ngcontent-%COMP%]:hover, .service-box-two.active[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 153, 0, 0.03);\n}\n.service-box-two[_ngcontent-%COMP%]:hover:after, .service-box-two.active[_ngcontent-%COMP%]:after {\n  background-color: rgba(255, 153, 0, 0.03);\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  top: 0;\n  left: 0;\n}\n.service-box-two[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%], .service-box-two.active[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background-color: rgba(255, 153, 0, 0.06);\n}\n.user-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -110px;\n  bottom: 30px;\n}\n.feature-two-content[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  line-height: 62px;\n  background-color: rgba(255, 153, 0, 0.05);\n}\n#style-switcher[_ngcontent-%COMP%] {\n  transition: all 0.4s;\n  background: none repeat scroll 0 0 #ffffff;\n  box-shadow: 0px 4px 12px rgba(31, 27, 81, 0.07);\n  left: -189px;\n  position: fixed;\n  top: 17%;\n  width: 189px;\n  z-index: 9999;\n  padding: 10px 5px;\n}\n#style-switcher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n#style-switcher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #353348;\n  font-size: 16px;\n  margin: 0 3px 12px;\n}\n#style-switcher[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  background: none repeat scroll 0 0 #ffffff;\n  color: #252525;\n  padding: 0;\n}\n#style-switcher[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a.settings[_ngcontent-%COMP%] {\n  background: none repeat scroll 0 0 #353348;\n  box-shadow: 0px 4px 12px rgba(31, 27, 81, 0.07);\n  display: block;\n  height: 45px;\n  position: absolute;\n  right: -45px;\n  top: 0;\n  width: 45px;\n  padding: 10px;\n}\nul.pattern[_ngcontent-%COMP%] {\n  list-style: none outside none;\n  margin: 0 0 0px;\n  overflow: hidden;\n  padding: 0;\n  border-radius: 0px;\n}\nul.pattern[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin: 2px;\n}\nul.pattern[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  height: 35px;\n  width: 35px;\n  border-radius: 30px;\n  margin: 5px;\n}\nul.pattern[_ngcontent-%COMP%]   .color1[_ngcontent-%COMP%] {\n  background-color: #FF9900;\n}\nul.pattern[_ngcontent-%COMP%]   .color2[_ngcontent-%COMP%] {\n  background-color: #18ce76;\n}\nul.pattern[_ngcontent-%COMP%]   .color3[_ngcontent-%COMP%] {\n  background-color: #fbb70b;\n}\nul.pattern[_ngcontent-%COMP%]   .color4[_ngcontent-%COMP%] {\n  background-color: #e84040;\n}\nul.pattern[_ngcontent-%COMP%]   .color5[_ngcontent-%COMP%] {\n  background-color: #4bc1e2;\n}\nul.pattern[_ngcontent-%COMP%]   .color6[_ngcontent-%COMP%] {\n  background-color: #cebca4;\n}\n@media only screen and (max-width: 479px) {\n  #style-switcher[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .testi-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 230px;\n    margin: 0 auto;\n  }\n}\n.client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tns-outer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.2) !important;\n  padding: 0px;\n  margin: 0px 4px;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.tns-nav-active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  width: 22px !important;\n}\n@media (max-width: 768px) {\n  .client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .client-slider-one[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%] {\n    border-right: none !important;\n  }\n}\n.client-slider-two[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.tns-outer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 14px !important;\n  height: 5px !important;\n  border: none;\n  background-color: rgba(255, 153, 0, 0.2) !important;\n  padding: 0px;\n  margin: 0px 4px;\n  transition: all 0.3s;\n  border-radius: 30px;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: #FF9900 !important;\n}\n.tns-outer[_ngcontent-%COMP%]   .tns-nav[_ngcontent-%COMP%]   button.tns-nav-active[_ngcontent-%COMP%] {\n  background-color: #FF9900 !important;\n  width: 22px !important;\n}\n@media (max-width: 768px) {\n  .client-slider-two[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .client-slider-two[_ngcontent-%COMP%]   .client-box[_ngcontent-%COMP%]   .name-box[_ngcontent-%COMP%] {\n    border-right: none !important;\n  }\n}\n.hero-two-3[_ngcontent-%COMP%]   .tns-outer[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin-top: 100px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:after {\n  background-image: none;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:before {\n  content: \"\u2500\";\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  margin-right: 10px;\n  color: #FF9900;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-button.collapsed[_ngcontent-%COMP%]:before {\n  content: \"\u271B\";\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 70px;\n  padding: 24px 16px;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 2px;\n  height: 40px;\n  background-color: #FF9900;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0px;\n}\n.faq-img[_ngcontent-%COMP%]   .faq-ask[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  position: absolute;\n  right: -110px;\n  bottom: 110px;\n  transform: rotate(90deg);\n}\n@media (max-width: 576px) {\n  .faq-img[_ngcontent-%COMP%]   .faq-ask[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n    position: absolute;\n    right: -50px;\n    bottom: 110px;\n    transform: rotate(90deg);\n  }\n}\n.price-box[_ngcontent-%COMP%]   .price-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.pricing-bg[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  background-color: #f9f9fd;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 50%;\n  left: 0px;\n}\n.brand-section[_ngcontent-%COMP%] {\n  padding: 0px 0px 120px;\n}\n.brand-section[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  transition: all 0.3s ease-in-out;\n}\n.brand-section[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .brand-section[_ngcontent-%COMP%] {\n    padding: 0px 0px 80px !important;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  padding: 80px 0px 30px;\n}\n.footer[_ngcontent-%COMP%]   .footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  padding-bottom: 10px;\n  display: inline-block;\n}\n.footer[_ngcontent-%COMP%]   .footer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.footer-alt[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 20px 0px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.footer-alt[_ngcontent-%COMP%]   .footer-alt-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  margin-right: 15px;\n}\n.footer-alt[_ngcontent-%COMP%]   .footer-alt-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2.7rem;\n}\n.p-float-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  color: #a5a5bf;\n}\n.p-inputtext[_ngcontent-%COMP%]:enabled:focus {\n  box-shadow: none;\n}\n.input-number[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.theCount[_ngcontent-%COMP%] {\n  float: right;\n  color: #a5a5bf;\n  font-size: 0.9rem;\n}\n.trash-button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #a5a5bf;\n}\n.page-start-input[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.world-img[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  opacity: 0.9;\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .world-img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.number-input[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtYXpvbi1zZWFyY2guY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19nZW5lcmFsLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX2hlbHBlci5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19jb21wb25lbnRzLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX21lbnUuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvc2Nzcy9faGVyby5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19mb3JtLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX3NlcnZpY2VzLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX2ZlYXR1cmVzLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX3N3aXRjaGVyLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX3Rlc3RpbW9uaWFsLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX2ZhcS5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19wcmljaW5nLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3MvX2JyYW5kbG9nby5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL2xheW91dC9zY3NzL19mb290ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNLUix5R0FBQTtBQ0ZSO0VBQ0ksa0NENkNrQjtFQzVDbEIsY0R1QmtCO0VDdEJsQixtQkR3Q2tCO0VDdkNsQixnQkFBQTtFQUNBLGlCQUFBO0FGQUo7QUVHQTtFQUNJLHdCQUFBO0FGQUo7QUVHQTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtBRkFKO0FFR0E7RUFDSSxrQkFBQTtBRkFKO0FFR0E7Ozs7OztFQU1JLGtDRG9Ca0I7QURwQnRCO0FFR0E7RUFDSSxrQkFBQTtBRkFKO0FFR0E7RUFDSTtJQUNJLGlCQUFBO0VGQU47QUFDRjtBR2xDSTtFQUNJLHlCQUFBO0FIb0NSO0FHbENJO0VBQ0ksb0NBQUE7QUhxQ1I7QUd6Q0k7RUFDSSx5QkFBQTtBSDRDUjtBRzFDSTtFQUNJLG9DQUFBO0FINkNSO0FHakRJO0VBQ0kseUJBQUE7QUhvRFI7QUdsREk7RUFDSSxvQ0FBQTtBSHFEUjtBR3pESTtFQUNJLHlCQUFBO0FINERSO0FHMURJO0VBQ0ksb0NBQUE7QUg2RFI7QUdqRUk7RUFDSSx5QkFBQTtBSG9FUjtBR2xFSTtFQUNJLG9DQUFBO0FIcUVSO0FHekVJO0VBQ0kseUJBQUE7QUg0RVI7QUcxRUk7RUFDSSxvQ0FBQTtBSDZFUjtBR2pGSTtFQUNJLHlCQUFBO0FIb0ZSO0FHbEZJO0VBQ0ksb0NBQUE7QUhxRlI7QUd6Rkk7RUFDSSx5QkFBQTtBSDRGUjtBRzFGSTtFQUNJLG9DQUFBO0FINkZSO0FHakdJO0VBQ0kseUJBQUE7QUhvR1I7QUdsR0k7RUFDSSxvQ0FBQTtBSHFHUjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUdoR0E7RUFDSSxlQUFBO0FIbUdKO0FHaEdBO0VBQ0ksZUFBQTtBSG1HSjtBR2hHQTtFQUNJLGVBQUE7QUhtR0o7QUcvRkE7RUFDSSxnQkFBQTtBSGtHSjtBRy9GQTtFQUNJLGdCQUFBO0FIa0dKO0FHOUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FIaUdKO0FHL0ZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUhrR0o7QUcvRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBSGtHSjtBRy9GQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FIa0dKO0FHL0ZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUhrR0o7QUcvRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBSGtHSjtBRy9GQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FIa0dKO0FHOUZBO0VBQ0ksbUJBQUE7QUhpR0o7QUc5RkE7RUFDSSxpQkFBQTtBSGlHSjtBRzdGQTtFQUNJLG9DQUFBO0FIZ0dKO0FHN0ZBO0VBQ0ksMENBQUE7QUhnR0o7QUc1RkE7RUFDSSwwREFBQTtBSCtGSjtBRzVGQTtFQUNJLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUgrRko7QUc1RkE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FIK0ZKO0FJMU9BLFdBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBSjRPSjtBSTNPSTtFQUVJLDJCQUFBO0VBQ0EsMkJBQUE7QUo0T1I7QUkxT0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUo0T1I7QUl2T0k7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QUQ0UHRCO0FJek9RO0VBSUksb0NBQUE7RUFDQSwyQkFBQTtBSndPWjtBSXJPSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSndPUjtBSXZPUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUpzT1o7QUkzUEk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QURnUnRCO0FJN1BRO0VBSUksb0NBQUE7RUFDQSw2QkFBQTtBSjRQWjtBSXpQSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSjRQUjtBSTNQUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUowUFo7QUkvUUk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QURvU3RCO0FJalJRO0VBSUksb0NBQUE7RUFDQSwyQkFBQTtBSmdSWjtBSTdRSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSmdSUjtBSS9RUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUo4UVo7QUluU0k7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QUR3VHRCO0FJclNRO0VBSUksb0NBQUE7RUFDQSx3QkFBQTtBSm9TWjtBSWpTSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSm9TUjtBSW5TUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUprU1o7QUl2VEk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QUQ0VXRCO0FJelRRO0VBSUksb0NBQUE7RUFDQSwyQkFBQTtBSndUWjtBSXJUSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSndUUjtBSXZUUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUpzVFo7QUkzVUk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QURnV3RCO0FJN1VRO0VBSUksb0NBQUE7RUFDQSwwQkFBQTtBSjRVWjtBSXpVSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSjRVUjtBSTNVUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUowVVo7QUkvVkk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QURvWHRCO0FJaldRO0VBSUksb0NBQUE7RUFDQSx3QkFBQTtBSmdXWjtBSTdWSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSmdXUjtBSS9WUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUo4Vlo7QUluWEk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QUR3WXRCO0FJclhRO0VBSUksb0NBQUE7RUFDQSx5QkFBQTtBSm9YWjtBSWpYSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSm9YUjtBSW5YUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUprWFo7QUl2WUk7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0hsQmM7QUQ0WnRCO0FJellRO0VBSUksb0NBQUE7RUFDQSx5QkFBQTtBSndZWjtBSXJZSTtFQUNJLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBSndZUjtBSXZZUTtFQUlJLG9DQUFBO0VBQ0EseUJBQUE7QUpzWVo7QUloWUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBSm1ZSjtBSS9YSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSmtZUjtBSXBZSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSnVZUjtBSXpZSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSjRZUjtBSTlZSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSmlaUjtBSW5aSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSnNaUjtBSXhaSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSjJaUjtBSTdaSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSmdhUjtBSWxhSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBSnFhUjtBSXZhSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBSjBhUjtBS2xlQTtFQUNJLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQ0FBQTtBTHFlSjtBS2xlWTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FMb2VoQjtBS25lZ0I7RUFHSSxjSktFO0FEOGR0QjtBSy9kZ0I7RUFDQSw2QkFBQTtBTGllaEI7QUsxZEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBTDRkUjtBSzNkUTtFQUNJLDJCQUFBO0FMNmRaO0FLM2RRO0VBQ0ksY0ozQlU7QUR3ZnRCO0FLNWRZO0VBQ0ksYUFBQTtBTDhkaEI7QUt6ZFE7RUFDSSxxQkFBQTtBTDJkWjtBS3pkUTtFQUNJLGFBQUE7QUwyZFo7QUt4ZEk7RUFDSSxjSjdCYztFSThCZCx5QkFBQTtFQUNBLG9DQUFBO0FMMGRSO0FLcmRBO0VBQ0ksaUJBQUE7RUFDQSx5QkpuRGtCO0VJb0RsQixnQ0FBQTtFQUNBLCtDQUFBO0FMd2RKO0FLcmRZO0VBQ0ksY0pwRE07QUQyZ0J0QjtBS3RkZ0I7RUFJSSxjSmpERTtBRHNnQnRCO0FLL2NRO0VBQ0ksYUFBQTtBTGlkWjtBSy9jUTtFQUNJLHFCQUFBO0FMaWRaO0FLOWNJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FMZ2RSO0FLOWNJO0VBQ0ksWUFBQTtBTGdkUjtBSy9jUTtFQUNJLGNKL0RVO0FEZ2hCdEI7QUs1Y0E7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FMK2NKO0FLNWNZO0VBQ0ksY0p6Rk07QUR1aUJ0QjtBSzFjSTtFQUNJLFlBQUE7QUw0Y1I7QUszY1E7RUFDSSxjSmpGVTtBRDhoQnRCO0FLemNRO0VBQ0ksYUFBQTtBTDJjWjtBS3pjUTtFQUNJLHFCQUFBO0FMMmNaO0FLbGNBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLHlCSnpIYztJSTBIYiwwREFBQTtFTHFjUDtFS25jTTtJQUNJLGlCQUFBO0VMcWNWO0VLbmNjO0lBQ0ksY0ozSEU7RURna0JwQjtFS2hjVTtJQUNJLGFBQUE7RUxrY2Q7RUtoY1U7SUFDSSxxQkFBQTtFTGtjZDtFSy9iTTtJQUNJLFlBQUE7RUxpY1Y7RUtoY1U7SUFDSSxjSjNITTtFRDZqQnBCO0VLaGNVO0lBQ0ksd0JBQUE7RUxrY2Q7QUFDRjtBTW5sQkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFSQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFRQSxZQUFBO0FOdWxCSjtBTXRsQkk7RUFDSSxtREFBQTtFQVpKLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQVlJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTjBsQlI7QU14bEJJO0VBQ0ksZUFBQTtBTjBsQlI7QU12bEJJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBTnlsQlI7QU12bEJnQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0FOeWxCcEI7QU14bEJvQjtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QU4wbEJ4QjtBTXZsQmdCO0VBQ0kseUJBQUE7QU55bEJwQjtBTXZsQmdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJMNUNFO0VLNkNGLGVBQUE7RUFDQSxjTHhDRTtBRGlvQnRCO0FNbGxCQTtFQXpESSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUF5REEsYUFBQTtBTnVsQko7QU10bEJJO0VBQ0ksZUFBQTtBTndsQlI7QU1ubEJBO0VBbEVJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQWtFQSxzQkFBQTtBTndsQko7QU12bEJJO0VBQ0ksVUFBQTtBTnlsQlI7QU14bEJRO0VBQ0ksZUFBQTtBTjBsQlo7QU12bEJJO0VBQ0ksNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FOeWxCUjtBTXhsQlE7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBTjBsQlo7QU16bEJZO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QU4ybEJoQjtBTXJsQkE7RUEvRkksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBK0ZBLHlCTHRGa0I7RUt1RmxCLGFBQUE7RUF5QkEsc0JBQUE7QU5ra0JKO0FNMWxCSTtFQUNJLG9CQUFBO0FONGxCUjtBTTNsQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBTjZsQlo7QU0zbEJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QU42bEJaO0FNeGxCSTtFQUNJLGdCQUFBO0VBQ0EsY0wxSGM7RUsySGQsNkJBQUE7RUFDQSxvQ0FBQTtBTjBsQlI7QU12bEJJO0VBQ0ksOENBQUE7RUFwSUosMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FOOHRCSjtBTXRsQkE7RUFDSSxhQUFBO0FOeWxCSjtBTXhsQkk7RUFDSSx5RkFBQTtBTjBsQlI7QU14bEJJO0VBL0lBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQStJSSxhQUFBO0FONGxCUjtBTTFsQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QU40bEJSO0FNM2xCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNMN0pVO0FEMHZCdEI7QU16bEJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0QsZ0NBQUE7QU4ybEJYO0FNeGxCWTtFQUNFLGFBQUE7QU4wbEJkO0FNdGxCWTtFQUNHLHVCQUFBO0FOd2xCZjtBTWxsQkE7RUFDSSxhQUFBO0VBL0xBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBTnF4Qko7QU10bEJJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBTndsQlI7QU1ubEJBO0VBQ0ksd0JBQUE7QU5zbEJKO0FNbmxCQTtFQUNJLGFBQUE7RUFoTkEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FOdXlCSjtBTXZsQkk7RUFDSSxxQkFBQTtBTnlsQlI7QU12bEJJO0VBQ0ksK0NBQUE7RUF0TkosMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBc05JLGFBQUE7QU4ybEJSO0FNdmxCQTtFQUNJLHdCQUFBO0FOMGxCSjtBTXZsQlk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkxuTk07RUtvTk4sa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FOeWxCaEI7QU1wbEJRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FOc2xCWjtBTXBsQlE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBTnNsQlo7QU1wbEJRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QU5zbEJaO0FNamxCQTtFQUNJLGFBQUE7RUF6UUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FOODFCSjtBTXBsQlE7RUFDSSxxQkFBQTtBTnNsQlo7QU1qbEJBO0VBQ0ksYUFBQTtFQW5SQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QU53MkJKO0FNcmxCSTtFQUNJLFdBQUE7RUFDQSxnRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QU51bEJSO0FNcmxCUTtFQUNJLGlEQUFBO0VBaFNSLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQWdTUSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QU55bEJaO0FNcmxCQTtFQUNJLHNCQUFBO0FOd2xCSjtBTXZsQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QU55bEJSO0FNbmxCQTtFQUNJO0lBQ0ksc0JBQUE7RU5zbEJOO0VNcmxCTTtJQUNJLGVBQUE7RU51bEJWOztFTW5sQkU7SUFDSSw2QkFBQTtFTnNsQk47RU1ybEJNO0lBQ0ksZUFBQTtFTnVsQlY7O0VNbmxCRTtJQUNJLG1DQUFBO0VOc2xCTjtFTXBsQlU7SUFDSSxlQUFBO0VOc2xCZDs7RU1obEJNO0lBQ0ksMEJBQUE7RU5tbEJWOztFTS9rQkU7SUFDSSw0QkFBQTtFTmtsQk47RU1qbEJNO0lBQ0ksMEZBQUE7RU5tbEJWOztFTTlrQkU7SUFDSSx5QkFBQTtJQUNBLGdDQUFBO0VOaWxCTjtFTWhsQk07SUFDSSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RU5rbEJWOztFTS9rQkU7SUFDSSxvQkFBQTtFTmtsQk47O0VNaGxCRTtJQUNJLGtDQUFBO0VObWxCTjs7RU1qbEJFO0lBQ0kscUJBQUE7RU5vbEJOO0FBQ0Y7QU1obEJBO0VBQ0k7SUFDSSx3QkFBQTtFTmtsQk47O0VNaGxCRTtJQUNJLFlBQUE7SUFDQSxpQ0FBQTtFTm1sQk47RU1sbEJNO0lBQ0ksZ0JBQUE7RU5vbEJWOztFTWpsQkU7SUFDSSxZQUFBO0lBQ0Esc0JBQUE7RU5vbEJOO0FBQ0Y7QU0va0JBO0VBQ0k7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RU5pbEJOOztFTTdrQlM7SUFDSSxhQUFBO0VOZ2xCYjs7RU01a0JFO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0VOK2tCTjs7RU03a0JFO0lBQ0ksWUFBQTtJQUNBLHdCQUFBO0VOZ2xCTjs7RU05a0JFO0lBQ0ksWUFBQTtJQUNBLHdCQUFBO0VOaWxCTjs7RU0va0JFO0lBQ0ksWUFBQTtJQUNBLHdCQUFBO0VOa2xCTjtFTWpsQk07SUFDSSxhQUFBO0VObWxCVjtBQUNGO0FNNWtCQTtFQUNJO0lBQ0ksc0JBQUE7RU44a0JOOztFTTNrQkU7SUFDSSxZQUFBO0lBQ0Esc0JBQUE7RU44a0JOO0VNN2tCTTtJQUNJLGdCQUFBO0VOK2tCVjtFTTVrQlM7SUFDSSxhQUFBO0VOOGtCYjtBQUNGO0FPMWdDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QVA0Z0NKO0FPM2dDSTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QVA2Z0NSO0FPMWdDQTtFQUNJLHVCQUFBO0FQNmdDSjtBTzFnQ0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FQNmdDSjtBTy9nQ0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FQNmdDSjtBTy9nQ0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FQNmdDSjtBTzFnQ0E7RUFDSSxnQkFBQTtBUDZnQ0o7QVE3aENBO0VBQ0ksd0JBQUE7QVJnaUNKO0FRN2hDQTtFQUNJLG9CQUFBO0FSZ2lDSjtBUS9oQ0k7RUFDSSxjUFNjO0FEd2hDdEI7QVEvaENJO0VBQ0kseUJBQUE7QVJpaUNSO0FRL2hDSTtFQUNJLGNQVWM7QUR1aEN0QjtBUS9oQ0k7RUFDSSxjUFNjO0FEd2hDdEI7QVEvaENJO0VBQ0ksK0NBQUE7RUFDQSx5QlBKYztFT0tkLDhCQUFBO0FSaWlDUjtBUWhpQ1E7Ozs7O0VBR0kseUJBQUE7RUFDQSwrQkFBQTtBUm9pQ1o7QVFsaUNRO0VBQ0ksK0JBQUE7QVJvaUNaO0FROWhDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FSaWlDSjtBUS9oQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FSaWlDUjtBUS9oQ0k7RUFDSSx5QlBsRGM7RU9tRGQsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QVJpaUNSO0FRL2hDUTtFQUNJLGNQN0NVO0VPOENWLHFCQUFBO0FSaWlDWjtBUTloQ0k7RUFDQSx5Q0FBQTtBUmdpQ0o7QVEvaENRO0VBQ0kseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QVJpaUNaO0FRL2hDUTtFQUNJLHlDQUFBO0FSaWlDWjtBUzltQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FUaW5DSjtBUzdtQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QVRnbkNSO0FVN25DQTtFQUNJLG9CQUFBO0VBU0EsMENBQUE7RUFDQSwrQ0FBQTtFQUNILFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QVZ3bkNEO0FVdm9DQztFQU1DLGlCQUFBO0FWb29DRjtBVXpvQ0U7RUFDQyxjVHNCbUI7RVNyQm5CLGVBQUE7RUFDQSxrQkFBQTtBVjJvQ0g7QVUvbkNDO0VBQ0MsMENBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBVmlvQ0Y7QVVob0NFO0VBQ1UsMENBQUE7RUFDQSwrQ0FBQTtFQUNULGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FWa29DSDtBVTluQ0E7RUFDQyw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBVmlvQ0Q7QVVob0NDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QVZrb0NGO0FVam9DRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QVZtb0NIO0FVaG9DQztFQUNDLHlCQUFBO0FWa29DRjtBVWhvQ0M7RUFDQyx5QkFBQTtBVmtvQ0Y7QVVob0NDO0VBQ0MseUJBQUE7QVZrb0NGO0FVaG9DQztFQUNDLHlCQUFBO0FWa29DRjtBVWhvQ0M7RUFDQyx5QkFBQTtBVmtvQ0Y7QVVob0NDO0VBQ0MseUJBQUE7QVZrb0NGO0FVL25DQTtFQUNDO0lBQ0MsYUFBQTtFVmtvQ0E7O0VVL25DQTtJQUNDLGdCQUFBO0lBQ0EsY0FBQTtFVmtvQ0Q7QUFDRjtBVzlzQ0k7RUFDSSxhQUFBO0FYZ3RDUjtBVzdzQ0E7RUFDSSxrQkFBQTtBWGd0Q0o7QVcvc0NJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBWGl0Q1I7QVdodENRO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBWGt0Q1o7QVdqdENZO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FYbXRDaEI7QVdqdENZO0VBQ0ksb0NBQUE7RUFDSCxzQkFBQTtBWG10Q2I7QVc3c0NBO0VBRVE7SUFDSSxrQkFBQTtFWCtzQ1Y7RVc5c0NVO0lBQ0ksNkJBQUE7RVhndENkO0FBQ0Y7QVdyc0NJO0VBQ0ksZ0JBQUE7QVh1c0NSO0FXcHNDQTtFQUNJLGtCQUFBO0FYdXNDSjtBV3RzQ0k7RUFDSSxrQkFBQTtBWHdzQ1I7QVd2c0NRO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBWHlzQ1o7QVd4c0NZO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FYMHNDaEI7QVd4c0NZO0VBQ0ksb0NBQUE7RUFDSCxzQkFBQTtBWDBzQ2I7QVdwc0NBO0VBRVE7SUFDSSxrQkFBQTtFWHNzQ1Y7RVdyc0NVO0lBQ0ksNkJBQUE7RVh1c0NkO0FBQ0Y7QVdoc0NJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FYa3NDUjtBWTd4Q2dCO0VBQ0Msc0JBQUE7QVpneUNqQjtBWTl4Q2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNYTUU7QUQweEN0QjtBWTl4Q2dCO0VBQ0ksZ0JBQUE7QVpneUNwQjtBWTd4Q29CO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNKLFlBQUE7RUFDQSxpQkFBQTtBWit4Q3BCO0FZdnhDWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBWnl4Q2hCO0FZeHhDZ0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QlhyQkU7RVdzQkYsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FaMHhDcEI7QVlqeENJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QVpveENSO0FZL3dDQTtFQUVRO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7RVppeENWO0FBQ0Y7QWF0MUNFO0VBQ0ksZUFBQTtBYncxQ047QWFuMUNJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QlpnQmdCO0VZZmhCLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBYnMxQ047QWNyMkNBO0VBQ0Usc0JBQUE7QWR3MkNGO0FjdjJDRTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtBZHkyQ047QWN4MkNNO0VBQ0ksVUFBQTtBZDAyQ1Y7QWNyMkNBO0VBQ0k7SUFDRSxnQ0FBQTtFZHcyQ0o7QUFDRjtBZXQzQ0E7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0FmdzNDSjtBZXIzQ1k7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QWZ1M0NoQjtBZXAzQ2dCO0VBQ0ksY2RQRTtBRDYzQ3RCO0FlLzJDQTtFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBZmszQ0o7QWUvMkNZO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBZmkzQ2hCO0FlOTJDZ0I7RUFDSSxjZDFCRTtBRDA0Q3RCO0FBaDVDQTtFQUNJLGlCQUFBO0FBbTVDSjtBQWg1Q0E7RUFDSSxrQkFBQTtFQUNBLGNDc0JrQjtBRDYzQ3RCO0FBaDVDQTtFQUNJLGdCQUFBO0FBbTVDSjtBQWg1Q0E7RUFDSSxnQkFBQTtBQW01Q0o7QUFoNUNBO0VBQ0ksWUFBQTtFQUNBLGNDU2tCO0VEUmxCLGlCQUFBO0FBbTVDSjtBQWg1Q0E7RUFDSSxxQkFBQTtFQUNBLGNDR2tCO0FEZzVDdEI7QUFoNUNBO0VBQ0ksa0JBQUE7QUFtNUNKO0FBaDVDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbTVDSjtBQWo1Q0k7RUFMSjtJQU1RLFVBQUE7RUFvNUNOO0FBQ0Y7QUFqNUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQW81Q0oiLCJmaWxlIjoiYW1hem9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvbGF5b3V0L3Njc3Mvc3R5bGUuc2Nzc1wiO1xuXG5oMSBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMi43cmVtO1xufVxuXG4ucC1mbG9hdC1sYWJlbCBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzOHB4O1xuICAgIGNvbG9yOiAkbXV0ZWQ7XG59XG5cbi5wLWlucHV0dGV4dDplbmFibGVkOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW5wdXQtbnVtYmVyIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4udGhlQ291bnQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogJG11dGVkO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udHJhc2gtYnV0dG9uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRtdXRlZDtcbn1cblxuLnBhZ2Utc3RhcnQtaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLndvcmxkLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfSAgIFxufVxuXG4ubnVtYmVyLWlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn0iLCIvLyBcclxuLy8gdmFyaWFibGVzLnNjc3NcclxuLy8gXHJcblxyXG4vLyBnb29nbGUgZm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vLyBjb2xvciB2YXJpYWJsZXNcclxuJHdoaXRlOiAgICAgICAgICAgICAgICNmZmZmZmY7XHJcbiRncmF5LTEwMDogICAgICAgICAgICAjZjFmMWYxO1xyXG4kZ3JheS0yMDA6ICAgICAgICAgICAgI0Y1RjZGODtcclxuJGdyYXktMzAwOiAgICAgICAgICAgICNlYmViZWI7XHJcbiRncmF5LTQwMDogICAgICAgICAgICAjZWFlYmVjO1xyXG4kZ3JheS01MDA6ICAgICAgICAgICAgI2E3YTljMDtcclxuJGdyYXktNjAwOiAgICAgICAgICAgICNiNWI1YzM7XHJcbiRncmF5LTcwMDogICAgICAgICAgICAjMjMyNTJmO1xyXG4kZ3JheS04MDA6ICAgICAgICAgICAgIzFmMWI1MTtcclxuJGdyYXktOTAwOiAgICAgICAgICAgICMyMTI1Mjk7XHJcbiRibGFjazogICAgICAgICAgICAgICAjMDAwMDAwO1xyXG5cclxuXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAjRkY5OTAwO1xyXG4kc2Vjb25kYXJ5OiAgICAgICAgICAgIzZjNzU3ZDtcclxuJHN1Y2Nlc3M6ICAgICAgICAgICAgICMxOGNlNzY7XHJcbiRpbmZvOiAgICAgICAgICAgICAgICAjNGJjMWUyO1xyXG4kd2FybmluZzogICAgICAgICAgICAgI2ZiYjcwYjtcclxuJGRhbmdlcjogICAgICAgICAgICAgICNlODQwNDA7XHJcbiRhbWJlcjogICAgICAgICAgICAgICAjY2ViY2E0O1xyXG4kZGFyazogICAgICAgICAgICAgICAgIzM1MzM0ODtcclxuJGxpZ2h0OiAgICAgICAgICAgICAgICNmOWY5ZmQ7XHJcbiRtdXRlZDogICAgICAgICAgICAgICAjYTVhNWJmOyBcclxuXHJcbi8vIHRoZW1lIGNvbG9yXHJcbiR0aGVtZS1jb2xvcnM6KCAgICBcclxuICAgICAgICBcInByaW1hcnlcIjogJHByaW1hcnksXHJcbiAgICAgICAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcclxuICAgICAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXHJcbiAgICAgICAgXCJpbmZvXCI6ICRpbmZvLFxyXG4gICAgICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICAgICAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxyXG4gICAgICAgIFwiZGFya1wiOiAkZGFyayxcclxuICAgICAgICBcImxpZ2h0XCI6ICRsaWdodCxcclxuICAgICAgICBcIm11dGVkXCI6ICRtdXRlZFxyXG4gKTtcclxuXHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgI2ZmZmZmZjtcclxuXHJcbi8vIEZvbnRcclxuJGZvbnQtcHJpbWFyeTogICAgICAgICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2Vjb25kYXJ5OiAgICAgICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4iLCIvLyBcclxuLy8gZ2VuZXJhbC5zY3NzXHJcbi8vIFxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1zaXplOiAxNC40cHg7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgc2Nyb2xsLXBhZGRpbmctdG9wOiA2NnB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXNlY29uZGFyeTtcclxufVxyXG5cclxuLnJvdyA+ICoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzMjBweDtcclxuICAgIH1cclxufSIsIi8vIFxyXG4vLyBoZWxwZXIuc2Nzc1xyXG4vLyBcclxuLy8gY29sb3JcclxuQGVhY2ggJGNvbG9yLFxyXG4kdmFsdWUgaW4gJHRoZW1lLWNvbG9ycyB7XHJcbiAgICAudGV4dC0jeyRjb2xvcn0ge1xyXG4gICAgICAgIGNvbG9yOiAoJHZhbHVlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJnLSN7JGNvbG9yfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCR2YWx1ZSkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZm9udC1zaXplXHJcbi5mcy0xMiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mcy0xMyB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5mcy0xNCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mcy0xNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5mcy0xNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mcy0xNyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5mcy0xOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mcy0xOSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5mcy0yMCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mcy0yMSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuXHJcbi5mcy0yMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5mcy0yMyB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5mcy0yNCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi8vIGZvbnQtd2VpZ2h0XHJcbi5mdy1tZWRpdW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmZ3LXNlbWlib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8vIGljb24gc2l6ZVxyXG4uaWNvbiB7ICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi0ycHg7XHJcbn1cclxuLmljb24teHhsIHtcclxuICAgIGhlaWdodDogNThweDtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG59XHJcblxyXG4uaWNvbi14bCB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMzhweDtcclxufVxyXG5cclxuLmljb24tbGcge1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbn1cclxuXHJcbi5pY29uLXNtIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59XHJcblxyXG4uaWNvbi14cyB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLmljb24teHhzIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4vLyBpY29uLXdlaWdodFxyXG4uc3ctMV81IHtcclxuICAgIHN0cm9rZS13aWR0aDogMS41cHg7XHJcbn1cclxuXHJcbi5zdy0xIHtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59IFxyXG5cclxuLy8gYm9yZGVyXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZW5kIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmF5LTEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBzaGFkb3dcclxuLnNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgkZ3JheS04MDAsIDAuMDcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGdyYXktNzAwLCAwLjgzKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwcHggMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gXHJcbi8vIGNvbXBvbmVudHMuc2Nzc1xyXG4vLyBcclxuLyogYnV0dG9uICovXHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gICAgJi5idG4tc20ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuQGVhY2ggJGNvbG9yLCR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzIHtcclxuICAgIC5idG4tI3skY29sb3J9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoJHZhbHVlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAoJHZhbHVlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKCR2YWx1ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICgkY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1vdXRsaW5lLSN7JGNvbG9yfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAoJHZhbHVlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGJhZGdlXHJcbi5iYWRnZS1sZyB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0aGVtZS1jb2xvcnMge1xyXG4gICAgLmJnLXNvZnQtI3skY29sb3J9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCR2YWx1ZSwgMjYlKTtcclxuICAgICAgICBjb2xvcjogKCR2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gbWVudS5zY3NzXHJcbi8vIFxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJHdoaXRlLCAwLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGUtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIC5sb2dvLWxpZ2h0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nby1kYXJrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTMwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gICBuYXZiYXItc3RpY2t5XHJcbi5uYXYtc3RpY2t5IHtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKCRncmF5LTgwMCwgMC4wNyk7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIC5sb2dvLWxpZ2h0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28tZGFyayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAubmF2YmFyLXRvZ2dsZS1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuXHJcbi5uYXZiYXItbGlnaHQge1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgLmxvZ28tbGlnaHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nby1kYXJrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gcmVzcG9uc2l2ZVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgkZ3JheS04MDAsIDAuMDcpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgIC5sb2dvLWxpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ28tZGFyayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZS1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuIiwiLy8gXHJcbi8vIC5oZXJvLnNjc3NcclxuLy8gXHJcbkBtaXhpbiBiZy1jZW50ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uaGVyby1vbmUtMSB7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAuYmctaGVyby1vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvaGVyby1vbmUtMS1vdmVybGF5LWltZy5wbmdcIik7XHJcbiAgICAgICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvLW9uZS0yIHtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmhlcm8tb25lLTMge1xyXG4gICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjIwcHggMCA0MjBweDtcclxuICAgIC5oZXJvLW9uZS0zLWNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IC01MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvLW9uZS00IHtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTcwMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAuaGVyby1vbmUtNC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI3MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBjbGlwIHRleHQgZWxlbWVudCAqL1xyXG4gICAgLmNsaXAtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOTBweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xpcC10ZXh0X29uZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL2hlcm8tb25lLTQtYmctaW1nLmpwZ1wiKTtcclxuICAgICAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaGVyby1vbmUtNSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLmhlcm8tb25lLTUtb3ZlcmxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCRwcmltYXJ5IDUlLCRwcmltYXJ5IDc1JSxyZ2JhKCR3aGl0ZSwwLjEpIDUwJSk7XHJcbiAgICB9XHJcbiAgICAuaGVyby1vbmUtNS1iZyB7XHJcbiAgICAgICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTU7XHJcbiAgICB9XHJcbiAgICAucGxheS1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG4gICAgICAgIC52aWRlby1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTsgICAgICAgICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgLmhlcm8tbW9kYWwge1xyXG4gICAgICAgIC5idG4tY2xvc2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLDEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB2aWRlb3tcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuLmhlcm8tb25lLTYge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjsgICAgXHJcbiAgICAudmlkZW8tc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGhlcm8tdHdvLTFcclxuLmhlcm8tdHdvLTEge1xyXG4gICAgcGFkZGluZzogMjQwcHggMHB4IDE3MHB4O1xyXG59IFxyXG5cclxuLmhlcm8tdHdvLTIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIEBpbmNsdWRlIGJnLWNlbnRlcjsgIFxyXG4gICAgLmhlcm8tdHdvLTItY29udGVudCB7XHJcbiAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gICAgfSAgXHJcbiAgICAuaGVyby10d28tMi1vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvaGVyby10d28tMi1vdmVybGF5LnBuZ1wiKTtcclxuICAgICAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgIH0gIFxyXG59XHJcblxyXG4uaGVyby10d28tMyB7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwcHggMTMwcHg7XHJcbiAgICAuaGVyby10d28tMy1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1idG4ge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDRweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlci1pdGVtIHtcclxuICAgICAgICAuc2xpZGVyLWltZyB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZGFyayw1MCUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGRhcmssNjIlKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTUwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5oZXJvLXR3by00IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICAuaGVyby10d28tNC1jb250ZW50IHsgICAgICAgIFxyXG4gICAgICAgIC5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgICAgICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVyby10d28tNSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgQGluY2x1ZGUgYmctY2VudGVyO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzI2OGZjIDAlLCAjYjNhZGZmIDEwMCUpO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgICAgIC5oZXJvLXR3by01LW92ZXJsYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvaGVyby10d28tNS1vdmVybGF5LTEucG5nXCIpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBiZy1jZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuLmhlcm8tdHdvLTYge1xyXG4gICAgcGFkZGluZzogMTgwcHggMCAxMjBweDtcclxuICAgIC5oZXJvLXR3by02LWltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZXNwb25zaXZlXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLmhlcm8tb25lLTEge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1MHB4IDBweCAwcHg7XHJcbiAgICAgICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby1vbmUtMiB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLW9uZS0zIHtcclxuICAgICAgICBwYWRkaW5nOiAxNTBweCAwcHggMTQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAuaGVyby1vbmUtMy1jb250ZW50IHtcclxuICAgICAgICAgICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLW9uZS00IHtcclxuICAgICAgICAuY2xpcC10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4ICFpbXBvcnRhbnQgIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tb25lLTUge1xyXG4gICAgICAgIHBhZGRpbmc6IDkwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmhlcm8tb25lLTUtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywkcHJpbWFyeSA1JSwkcHJpbWFyeSAxMDAlLHJnYmEoJHdoaXRlLDAuMSkgNTAlKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tb25lLTYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTMwcHggMCA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnZpZGVvLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTVweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZXJvLXR3by0zIHtcclxuICAgICAgICBwYWRkaW5nOiAxNDBweCAwIDBweDtcclxuICAgIH1cclxuICAgIC5oZXJvLXR3by00IHtcclxuICAgICAgICBwYWRkaW5nOiA5NXB4IDBweCAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlcm8tdHdvLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzMHB4IDAgNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuaGVyby1vbmUtMyB7XHJcbiAgICAgICAgcGFkZGluZzogMTUwcHggMHB4IDIxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNsaXAtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMjBweCAwIDEyMHB4O1xyXG4gICAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5oZXJvLW9uZS0yIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTIwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTQge1xyXG4gICAgICAgLmhlcm8tb25lLTQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLmhlcm8tb25lLTUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVyby1vbmUtNiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2MHB4IDBweCAxMDBweDtcclxuICAgIH1cclxuICAgIC5oZXJvLXR3by00IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMjEwcHggMHB4IDE3MHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm8tdHdvLTUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNjBweCAwcHggMTAwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgXHJcbiAgICAuaGVyby1vbmUtMyB7XHJcbiAgICAgICAgcGFkZGluZzogMTYwcHggMCAyOTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1vbmUtNCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwMHB4IDAgMTgwcHg7XHJcbiAgICAgICAgLmNsaXAtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLmhlcm8tb25lLTQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9IFxyXG4gICAgfVxyXG4gfVxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZm9ybS5zY3NzXHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTQwMCAhaW1wb3J0YW50O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGdyYXktNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtOyAgIFxyXG59XHJcblxyXG4vLyBib2R5IHtcclxuLy8gICAgICYubW9kYWwtb3BlbiB7XHJcbi8vICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9IiwiLy8gXHJcbi8vIG91cnNlcnZpY2VzLnNjc3NcclxuLy8gXHJcblxyXG5cclxuLnNlcnZpY2UtbGF5b3V0LTEge1xyXG4gICAgcGFkZGluZzogMTYwcHggMHB4IDEwMHB4O1xyXG59XHJcbiAgIFxyXG4uc2VydmljZS1ib3gtb25lIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLnNlcnZpY2UtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2Utc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkbXV0ZWQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyLCAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxMnB4IHJnYmEoJGdyYXktODAwLCAwLjA2KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XHJcbiAgICAgICAgLnNlcnZpY2UtaWNvbixcclxuICAgICAgICAuc2VydmljZS10aXRsZSxcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmaWxsOiByZ2JhKCR3aGl0ZSwgMC4xNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXJ2aWNlLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlLWJveC10d28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oJGdyYXktMTAwLCAyJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjA4KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9ICAgIFxyXG4gICAgLmljb24tYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICBoZWlnaHQ6IDcycHg7ICBcclxuICAgICAgICBsaW5lLWhlaWdodDogNzJweDsgICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgIC5zZXJ2aWNlLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkcHJpbWFyeSwgMC4wMyk7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnksIDAuMDMpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnksIDAuMDYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgIFxyXG59XHJcbiIsIi8vIFxyXG4vLyBmZWF0dXJlcy5zY3NzXHJcbi8vIFxyXG5cclxuLnVzZXItYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTEwcHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZS10d28tY29udGVudCB7XHJcbiAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDYycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnksIDAuMDUpO1xyXG5cclxuICAgICAgfVxyXG4gIH0iLCIvLyBzd2l0Y2hlci5zY3NzXHJcblxyXG4jc3R5bGUtc3dpdGNoZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0ZGl2IHtcclxuXHRcdGgzIHtcclxuXHRcdFx0Y29sb3I6ICRkYXJrO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdG1hcmdpbjogMCAzcHggMTJweDtcclxuXHRcdH1cclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdH1cclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgJHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMzEsMjcsODEsMC4wNyk7XHJcblx0bGVmdDogLTE4OXB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDE3JTtcclxuXHR3aWR0aDogMTg5cHg7XHJcblx0ei1pbmRleDogOTk5OTtcclxuXHRwYWRkaW5nOiAxMHB4IDVweDtcclxuXHQuYm90dG9tIHtcclxuXHRcdGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgJHdoaXRlO1xyXG5cdFx0Y29sb3I6ICMyNTI1MjU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0YS5zZXR0aW5ncyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgJGRhcms7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDMxLDI3LDgxLDAuMDcpO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAtNDVweDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHR3aWR0aDogNDVweDtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxudWwucGF0dGVybiB7XHJcblx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlIG5vbmU7XHJcblx0bWFyZ2luOiAwIDAgMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0bGkge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRtYXJnaW46IDJweDtcclxuXHRcdGEge1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbG9yMSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTAwO1xyXG5cdH1cclxuXHQuY29sb3IyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxOGNlNzY7XHJcblx0fVxyXG5cdC5jb2xvcjMge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZiYjcwYjtcclxuXHR9XHJcblx0LmNvbG9yNCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0MDQwO1xyXG5cdH1cclxuXHQuY29sb3I1IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0YmMxZTI7XHJcblx0fVxyXG5cdC5jb2xvcjYge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2NlYmNhNDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG5cdCNzdHlsZS1zd2l0Y2hlciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQudGVzdGktZGVzYyB7XHJcblx0XHRwIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAyMzBweDtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4iLCIvLyBcclxuLy8gdGVzdGltb25pYWwuc2Nzc1xyXG4vLyBcclxuXHJcbi8vIGNsaWVudC1zbGlkZXItb25lXHJcbi5jbGllbnQtc2xpZGVyLW9uZSB7XHJcbiAgICAuY2xpZW50LWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufVxyXG4udG5zLW91dGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50bnMtbmF2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnksIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA0cHggO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgJjpmb2N1cywgJjpob3ZlciwgJjphY3RpdmUsICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudG5zLW5hdi1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jbGllbnQtc2xpZGVyLW9uZSB7XHJcbiAgICAgICAgLmNsaWVudC1ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5uYW1lLWJveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBcclxuLy9jbGllbnQtc2xpZGVyLXR3b1xyXG4vLyBcclxuLmNsaWVudC1zbGlkZXItdHdvIHtcclxuICAgIC51c2VyLWltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufVxyXG4udG5zLW91dGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50bnMtbmF2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNHB4IDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICY6Zm9jdXMsICY6aG92ZXIsICY6YWN0aXZlLCAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRucy1uYXYtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuY2xpZW50LXNsaWRlci10d28ge1xyXG4gICAgICAgIC5jbGllbnQtYm94IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmFtZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGhlcm8tdHdvLTMgc2xpZGVyXHJcbi5oZXJvLXR3by0zIHtcclxuICAgIC50bnMtb3V0ZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gZmFxLnNjc3NcclxuXHJcbi5hY2NvcmRpb24ge1xyXG4gICAgLmFjY29yZGlvbi1pdGVtIHtcclxuICAgICAgICAuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgIC5hY2NvcmRpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLilIBcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuKcm1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWNjb3JkaW9uLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgLmFjY29yZGlvbi1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmFxLWltZyB7XHJcbiAgICAuZmFxLWFzayB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0xMTBweDtcclxuICAgICAgICBib3R0b206IDExMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcclxuICAgIC5mYXEtaW1nIHtcclxuICAgICAgICAuZmFxLWFzayB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC01MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDExMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gb3VycHJpY2luZy5zY3NzXHJcbi8vIFxyXG4ucHJpY2UtYm94IHtcclxuICAucHJpY2UtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJpY2luZy1iZyB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gYnJhbmRsb2dvLnNjc3NcclxuLy8gXHJcbi5icmFuZC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDEyMHB4O1xyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgICAgb3BhY2l0eTogMC42NTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5icmFuZC1zZWN0aW9uIHtcclxuICAgICAgcGFkZGluZzowcHggMHB4IDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8vIFxyXG4vLyBmb290ZXIuc2Nzc1xyXG4vLyBcclxuLmZvb3RlciB7XHJcbiAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDBweCAzMHB4O1xyXG4gICAgLmZvb3Rlci1saXN0IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyLWFsdCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgkd2hpdGUsIDAuMDgpO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNCk7XHJcbiAgICAuZm9vdGVyLWFsdC1saXN0IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    9730: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesRoutingModule": function PagesRoutingModule() {
          return (
            /* binding */
            _PagesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _amazon_search_amazon_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./amazon-search/amazon-search.component */
      7195);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: "",
        component: _amazon_search_amazon_search_component__WEBPACK_IMPORTED_MODULE_0__.AmazonSearchComponent
      }];

      var _PagesRoutingModule = function _PagesRoutingModule() {
        _classCallCheck(this, _PagesRoutingModule);
      };

      _PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) {
        return new (t || _PagesRoutingModule)();
      };

      _PagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PagesRoutingModule
      });
      _PagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8950: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesModule": function PagesModule() {
          return (
            /* binding */
            _PagesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      4466);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages-routing.module */
      9730);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      8994);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);
      /* harmony import */


      var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-youtube-player */
      5622);
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/inputtext */
      1875);
      /* harmony import */


      var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/inputnumber */
      5992);
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/togglebutton */
      1416);
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/inputtextarea */
      2126);
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/selectbutton */
      8314);
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/tooltip */
      9881);
      /* harmony import */


      var primeng_blockui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/blockui */
      1672);
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/panel */
      7532);
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/progressspinner */
      913);
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/table */
      6659);
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/calendar */
      8286);
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/slider */
      8123);
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/dialog */
      3798);
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/multiselect */
      7082);
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/contextmenu */
      8498);
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/toast */
      4412);
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/progressbar */
      3400);
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/dropdown */
      5452);
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/tag */
      4443);
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! primeng/rating */
      7212);
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! primeng/ripple */
      8996);
      /* harmony import */


      var primeng_speeddial__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! primeng/speeddial */
      126);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/button */
      1104);
      /* harmony import */


      var _amazon_search_amazon_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./amazon-search/amazon-search.component */
      7195);
      /* harmony import */


      var _amazon_search_result_amazon_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./amazon-search-result/amazon-search-result.component */
      8468);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PagesModule = function _PagesModule() {
        _classCallCheck(this, _PagesModule);
      };

      _PagesModule.ɵfac = function PagesModule_Factory(t) {
        return new (t || _PagesModule)();
      };

      _PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _PagesModule
      });
      _PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToModule.forRoot(), ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordionModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__.NgxYoutubePlayerModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_14__.ToggleButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.TooltipModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule, primeng_panel__WEBPACK_IMPORTED_MODULE_19__.PanelModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__.ProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_slider__WEBPACK_IMPORTED_MODULE_24__.SliderModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_25__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_26__.MultiSelectModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__.ContextMenuModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__.DropdownModule, primeng_toast__WEBPACK_IMPORTED_MODULE_29__.ToastModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__.ProgressBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_tag__WEBPACK_IMPORTED_MODULE_31__.TagModule, primeng_rating__WEBPACK_IMPORTED_MODULE_32__.RatingModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_33__.RippleModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_34__.SpeedDialModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_PagesModule, {
          declarations: [_amazon_search_amazon_search_component__WEBPACK_IMPORTED_MODULE_2__.AmazonSearchComponent, _amazon_search_result_amazon_search_result_component__WEBPACK_IMPORTED_MODULE_3__.AmazonSearchResultComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordionModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__.NgxYoutubePlayerModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_14__.ToggleButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextareaModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.TooltipModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule, primeng_panel__WEBPACK_IMPORTED_MODULE_19__.PanelModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__.ProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_slider__WEBPACK_IMPORTED_MODULE_24__.SliderModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_25__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_26__.MultiSelectModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__.ContextMenuModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__.DropdownModule, primeng_toast__WEBPACK_IMPORTED_MODULE_29__.ToastModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__.ProgressBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_tag__WEBPACK_IMPORTED_MODULE_31__.TagModule, primeng_rating__WEBPACK_IMPORTED_MODULE_32__.RatingModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_33__.RippleModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_34__.SpeedDialModule]
        });
      })();
      /***/

    },

    /***/
    6325: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicesService": function ServicesService() {
          return (
            /* binding */
            _ServicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ServicesService = /*#__PURE__*/function () {
        function _ServicesService(http) {
          _classCallCheck(this, _ServicesService);

          this.http = http;
        }

        _createClass(_ServicesService, [{
          key: "getProxyList",
          value: function getProxyList() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.proxyApiUrl);
          }
        }, {
          key: "searchProducts",
          value: function searchProducts(body) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Content-Type", "application/json; charset=utf-8");
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.searchApiUrl, body, {
              headers: headers
            });
          }
        }]);

        return _ServicesService;
      }();

      _ServicesService.ɵfac = function ServicesService_Factory(t) {
        return new (t || _ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ServicesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ServicesService,
        factory: _ServicesService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    5227: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      5411);
      /**
       * Layout-1,2 footer component
       */


      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);

          this.cur_year = new Date().getFullYear();
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 12,
        vars: 0,
        consts: [[1, "footer", "bg-light"], [1, "container"], [1, "row", "align-items-center"], [1, "col-12", "d-flex", "justify-content-center"], ["href", "https://github.com/acrbaran", "target", "_blank", 1, "px-3"], ["name", "github", 1, "icon-xs"], ["href", "https://www.linkedin.com/in/acarbaran/", "target", "_blank", 1, "px-3"], ["name", "linkedin", 1, "icon-xs"], ["href", "https://github.com/kadirbastimar", "target", "_blank", 1, "px-3"], ["href", "https://www.linkedin.com/in/kadirbastimar/", "target", "_blank", 1, "px-3"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i-feather", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i-feather", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i-feather", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent],
        styles: [".footer[_ngcontent-%COMP%] {\n  padding: 25px 0px 20px 0px;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcGFkZGluZzogMjVweCAwcHggMjBweCAwcHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    6564: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollspyDirective": function ScrollspyDirective() {
          return (
            /* binding */
            _ScrollspyDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _ScrollspyDirective = /*#__PURE__*/function () {
        // tslint:disable-next-line: variable-name
        function _ScrollspyDirective(_el, document) {
          _classCallCheck(this, _ScrollspyDirective);

          this._el = _el;
          this.document = document;
          this.spiedTags = [];
          this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /**
         * Window scroll method
         */


        _createClass(_ScrollspyDirective, [{
          key: "onScroll",
          value: function onScroll(event) {
            var _this3 = this;

            var currentSection;

            var children = this._el.nativeElement.querySelectorAll('section');

            var scrollTop = this.document.documentElement.scrollTop;
            var parentOffset = this.document.documentElement.offsetTop; // tslint:disable-next-line: prefer-for-of

            var _loop = function _loop(i) {
              var element = children[i];

              if (_this3.spiedTags.some(function (spiedTag) {
                return spiedTag === element.tagName;
              })) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                  currentSection = element.id;
                }
              }
            };

            for (var i = 0; i < children.length; i++) {
              _loop(i);
            }

            if (currentSection !== this.currentSection) {
              this.currentSection = currentSection;
              this.sectionChange.emit(this.currentSection);
            }
          }
        }]);

        return _ScrollspyDirective;
      }();

      _ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) {
        return new (t || _ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _ScrollspyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ScrollspyDirective,
        selectors: [["", "appScrollspy", ""]],
        hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          spiedTags: "spiedTags"
        },
        outputs: {
          sectionChange: "sectionChange"
        }
      });
      /***/
    },

    /***/
    4466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-feather */
      5411);
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-feather/icons */
      940);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      8994);
      /* harmony import */


      var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scrollspy.directive */
      6564);
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-count-to */
      4848);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      2664);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      5227);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToModule.forRoot(), angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_8__.allIcons), angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbRatingModule], angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToModule, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule, angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbRatingModule],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule, _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective]
        });
      })();
      /***/

    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        proxyApiUrl: "https://dsapi.teslayazilim.com/api/client/proxies/",
        searchApiUrl: "http://localhost/api/search"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map