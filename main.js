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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border\" id=\"border\" #contentToPrint>\n  <div class=\"sidebar\" id=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"cv-content\" id=\"cv-content\">\n    <app-cv-content></app-cv-content>\n  </div>\n</div>\n\n<div class=\"fab\" (click)=\"generatePdf(contentToPrint)\">\n  <app-icon [iconType]=\"downloadIcon\" [isBackgroundDisplayed]=\"false\"></app-icon>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.border#border {\n  width: 100%;\n  min-height: 100%;\n  box-sizing: border-box;\n  background-color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  div.border#border > div.cv-content#cv-content {\n    flex: 0 0 70%;\n    position: relative;\n    order: 1; }\n  @media screen and (max-width: 1200px) {\n      div.border#border > div.cv-content#cv-content {\n        order: 2;\n        flex: 0 0 100%; } }\n  div.border#border > div.sidebar#sidebar {\n    flex: 0 0 20%;\n    position: relative;\n    order: 2; }\n  @media screen and (max-width: 1200px) {\n      div.border#border > div.sidebar#sidebar {\n        order: 1;\n        flex: 0 0 100%; } }\n  div.fab {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  z-index: 999;\n  cursor: pointer;\n  border-radius: 100%;\n  background-color: #2d7788; }\n  div.fab * {\n    position: absolute;\n    top: calc(50% - 15px);\n    left: calc(50% - 15px); }\n  @media print {\n  div.border#border > div.cv-content#cv-content {\n    flex: 0 0 55% !important; }\n  div.border#border > div.sidebar#sidebar {\n    flex: 0 0 10% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkNIb0I7RURJcEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTtFQVBsQztJQVVRLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0VBQ1I7TUFiUjtRQWNZLFFBQVE7UUFDUixjQUFjLEVBQUEsRUFFckI7RUFqQkw7SUFtQlEsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRLEVBQUE7RUFDUjtNQXRCUjtRQXVCWSxRQUFRO1FBQ1IsY0FBYyxFQUFBLEVBRXJCO0VBR0w7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQ3ZDc0IsRUFBQTtFRDhCMUI7SUFZUSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0k7SUFFUSx3QkFBd0IsRUFBQTtFQUZoQztJQU1RLHdCQUF3QixFQUFBLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5kaXYuYm9yZGVyI2JvcmRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJENWYmFja2dyb3VuZENvbG9yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmID4gZGl2LmN2LWNvbnRlbnQjY3YtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMCAwIDcwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGRpdi5zaWRlYmFyI3NpZGViYXIge1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZGl2LmZhYiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3JEYXJrO1xyXG5cclxuICAgICYgKiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNXB4KTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgZGl2LmJvcmRlciNib3JkZXIge1xyXG4gICAgICAgICYgPiBkaXYuY3YtY29udGVudCNjdi1jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleDogMCAwIDU1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdi5zaWRlYmFyI3NpZGViYXIge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _shared_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/enums */ "./src/app/shared/enums.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    Object.defineProperty(AppComponent.prototype, "downloadIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_4__["IconType"].Download;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.generatePdf = function (data) {
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data, { allowTaint: false }).then(function (canvas) {
            var HTML_Width = canvas.width;
            var HTML_Height = canvas.height;
            canvas.getContext('2d');
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'px', [HTML_Width, HTML_Width]);
            pdf.addImage(imgData, 'PNG', 0, 0, HTML_Width, HTML_Width);
            pdf.save("CV_Jorge-Branquinho.pdf");
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cv_content_cv_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cv-content/cv-content.component */ "./src/app/cv-content/cv-content.component.ts");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _sidebar_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/profile-picture/profile-picture.component */ "./src/app/sidebar/profile-picture/profile-picture.component.ts");
/* harmony import */ var _cv_content_section_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cv-content/section/section.component */ "./src/app/cv-content/section/section.component.ts");
/* harmony import */ var _cv_content_experience_story_experience_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cv-content/experience-story/experience-story.component */ "./src/app/cv-content/experience-story/experience-story.component.ts");
/* harmony import */ var _sidebar_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/education/education.component */ "./src/app/sidebar/education/education.component.ts");
/* harmony import */ var _sidebar_languages_languages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/languages/languages.component */ "./src/app/sidebar/languages/languages.component.ts");
/* harmony import */ var _cv_content_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cv-content/skill/skill.component */ "./src/app/cv-content/skill/skill.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _cv_content_cv_content_component__WEBPACK_IMPORTED_MODULE_5__["CvContentComponent"],
                _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
                _sidebar_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePictureComponent"],
                _cv_content_section_section_component__WEBPACK_IMPORTED_MODULE_9__["SectionComponent"],
                _cv_content_experience_story_experience_story_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceStoryComponent"],
                _sidebar_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
                _sidebar_languages_languages_component__WEBPACK_IMPORTED_MODULE_12__["LanguagesComponent"],
                _cv_content_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__["SkillComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cv-content/cv-content.component.html":
/*!******************************************************!*\
  !*** ./src/app/cv-content/cv-content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"cv-content\">\n  <app-section [iconType]=\"userIcon\" [title]=\"'About me'\">\n    <p class=\"bio\">\n      Committed and efficient full stack developer with {{currentYearsOfExperience}}+ years experience in\n      both Frontend and Backend technologies, specialized in Asp.Net and\n      Angular.\n    </p>\n    <p class=\"bio\">\n      I develop robust and creative solutions with focus on code readibility,\n      performance and unit testing. I'm a SOLID and DRY design patterns\n      advocate, focused in both learning and share knowledge.\n    </p>\n  </app-section>\n\n  <app-section [iconType]=\"experienceIcon\" [title]=\"'Experiences'\">\n    <app-experience-story\n      *ngFor=\"let story of experienceList\"\n      [jobRole]=\"story.jobRole\"\n      [jobDate]=\"story.jobDate\"\n      [company]=\"story.company\"\n      [description]=\"story.description\"\n    ></app-experience-story>\n  </app-section>\n\n  <app-section [iconType]=\"wrenchIcon\" [title]=\"'Skills'\">\n    <div class=\"skill-list\">\n      <app-skill *ngFor=\"let skill of mainSkillList\" [skill]=\"skill\" [totalYearsOfExperience]=\"currentYearsOfExperience\"></app-skill>\n    </div>\n    <p class=\"other-skills\">Other skills: {{getOtherSkills()}}</p>\n  </app-section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/cv-content/cv-content.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cv-content/cv-content.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container#cv-content {\n  width: 100%;\n  height: 100%;\n  margin: 3rem; }\n  @media screen and (max-width: 1200px) {\n    div.container#cv-content {\n      margin: auto; } }\n  @media screen and (max-width: 1200px) {\n    div.container#cv-content p.bio {\n      margin: auto 1rem; } }\n  div.container#cv-content div.skill-list {\n    position: relative;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-auto-rows: 1fr; }\n  @media screen and (max-width: 1200px) {\n    div.container#cv-content p.other-skills {\n      margin: auto 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtY29udGVudC9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcYXBwXFxjdi1jb250ZW50XFxjdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFWjtJQUxKO01BTVEsWUFBWSxFQUFBLEVBcUJuQjtFQWpCTztJQVZSO01BV1ksaUJBQWlCLEVBQUEsRUFFeEI7RUFiTDtJQWdCUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFDSixFQUFBO0VBR0k7SUF2QlI7TUF3QlksaUJBQWlCLEVBQUEsRUFFeEIiLCJmaWxlIjoic3JjL2FwcC9jdi1jb250ZW50L2N2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdi5jb250YWluZXIjY3YtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogM3JlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICYgcC5iaW8ge1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgZGl2LnNraWxsLWxpc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICBncmlkLWF1dG8tcm93czogMWZyXHJcbiAgICB9XHJcblxyXG4gICAgJiBwLm90aGVyLXNraWxscyB7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cv-content/cv-content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cv-content/cv-content.component.ts ***!
  \****************************************************/
/*! exports provided: CvContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvContentComponent", function() { return CvContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums */ "./src/app/shared/enums.ts");



var CvContentComponent = /** @class */ (function () {
    function CvContentComponent() {
        this.experienceList = [];
        this.mainSkillList = [];
        this.otherSkillsList = [];
        this.experienceList = [
            {
                jobRole: 'Senior Full Stack Developer',
                jobDate: '2020 - Present',
                company: 'Siemens',
                description: 'Development and maintenance of of an Angular and .NET internal self-service and form-generating application. Led and coordinated a small team.'
            },
            {
                jobRole: 'Junior Full Stack Developer',
                jobDate: '2018 - 2020',
                company: 'Hitachi Consulting',
                description: 'Development and maintenance of an Angular and .NET back-office application for an international fast food company.'
            },
            {
                jobRole: 'Computer Vision Research Fellow',
                jobDate: '2016 - 2018',
                company: 'Inov Inesc Inovacao',
                description: 'Development of Machine Learning solutions for UAV and boat detection using OpenCV, C++ and .NET.'
            },
            {
                jobRole: 'Trainee',
                jobDate: '2016 - 2016',
                company: 'SoftInsa',
                description: 'Installation and configuration of IBM BI and Big Data software. Application development to automate software configuration and data transfer.'
            },
        ];
        this.mainSkillList = [
            {
                name: 'C# / .Net',
                yearsOfExperience: this.getCurrentDotNetExperience()
            },
            {
                name: 'Angular',
                yearsOfExperience: 3
            },
            {
                name: 'Entity framework / Dapper',
                yearsOfExperience: 3
            },
            {
                name: 'Docker',
                yearsOfExperience: 1
            },
            {
                name: 'Azure',
                yearsOfExperience: 1
            },
        ];
        this.otherSkillsList = [
            'HTML 5',
            'Css',
            'Sass',
            'Bootstrap',
            'Typescript / Javascript',
            'Sql',
            'Git',
            'C++',
        ];
    }
    Object.defineProperty(CvContentComponent.prototype, "userIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].User;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvContentComponent.prototype, "experienceIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Briefcase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvContentComponent.prototype, "wrenchIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Wrench;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvContentComponent.prototype, "currentYearsOfExperience", {
        get: function () {
            return this.currentYear - this.startingYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvContentComponent.prototype, "currentYear", {
        get: function () {
            return (new Date()).getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvContentComponent.prototype, "startingYear", {
        get: function () {
            return 2016;
        },
        enumerable: true,
        configurable: true
    });
    CvContentComponent.prototype.getOtherSkills = function () {
        return this.otherSkillsList.join(', ');
    };
    CvContentComponent.prototype.getCurrentDotNetExperience = function () {
        return this.currentYearsOfExperience - 1;
    };
    CvContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv-content',
            template: __webpack_require__(/*! ./cv-content.component.html */ "./src/app/cv-content/cv-content.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./cv-content.component.scss */ "./src/app/cv-content/cv-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvContentComponent);
    return CvContentComponent;
}());



/***/ }),

/***/ "./src/app/cv-content/experience-story/experience-story.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cv-content/experience-story/experience-story.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <h3 class=\"sideBySide jobRole\">{{ jobRole }}</h3>\n  <h3 class=\"sideBySide jobDate\">{{ jobDate }}</h3>\n  <h3 class=\"company\">{{ company || \"-\" }}</h3>\n  <p class=\"description\">{{description}}</p>\n  <ul *ngIf=\"!!(keyPoints?.length > 0)\">\n    <li *ngFor=\"let keyPoint of keyPoints\"><p>{{keyPoint}}</p></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/cv-content/experience-story/experience-story.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cv-content/experience-story/experience-story.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.item {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1.2rem; }\n  @media screen and (max-width: 1200px) {\n    div.item {\n      margin: 0 1rem 1.2rem 1rem; } }\n  div.item:hover {\n    background: rgba(0, 0, 0, 0.2); }\n  div.item h3 {\n    font-weight: 500;\n    font-size: 1rem;\n    margin: 0.2rem; }\n  div.item h3.jobRole {\n      color: #3f4650;\n      flex: 0 45%; }\n  div.item h3.jobDate, div.item h3.company {\n      color: #97aac3; }\n  div.item h3.jobDate {\n      flex: 0 45%;\n      text-align: right;\n      margin-right: 1rem; }\n  div.item h3.company {\n      display: block;\n      flex: 0 0 100%; }\n  div.item p.description {\n    flex: 0 0 90%;\n    margin-bottom: 0; }\n  @media screen and (max-width: 1200px) {\n      div.item p.description {\n        flex: 0 0 100%; } }\n  div.item ul {\n    margin-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtY29udGVudC9leHBlcmllbmNlLXN0b3J5L0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFxhcHBcXGN2LWNvbnRlbnRcXGV4cGVyaWVuY2Utc3RvcnlcXGV4cGVyaWVuY2Utc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWNvbnRlbnQvZXhwZXJpZW5jZS1zdG9yeS9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQixFQUFBO0VBRXJCO0lBTEo7TUFNUSwwQkFBMEIsRUFBQSxFQThDakM7RUFwREQ7SUFVUSw4QkFBMEIsRUFBQTtFQVZsQztJQWNRLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBaEJ0QjtNQW1CWSxjQ2ZXO01EZ0JYLFdBQVcsRUFBQTtFQXBCdkI7TUF5QlksY0NwQlcsRUFBQTtFREx2QjtNQTZCWSxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBL0I5QjtNQW1DWSxjQUFjO01BQ2QsY0FBYyxFQUFBO0VBcEMxQjtJQXlDUSxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFFaEI7TUE1Q1I7UUE2Q1ksY0FBYyxFQUFBLEVBRXJCO0VBL0NMO0lBa0RRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N2LWNvbnRlbnQvZXhwZXJpZW5jZS1zdG9yeS9leHBlcmllbmNlLXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5kaXYuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbSAxLjJyZW0gMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJiBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjJyZW07XHJcblxyXG4gICAgICAgICYuam9iUm9sZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dENvbG9yRGFyaztcclxuICAgICAgICAgICAgZmxleDogMCA0NSU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJi5qb2JEYXRlLFxyXG4gICAgICAgICYuY29tcGFueSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dEhpZ2hsaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5qb2JEYXRlIHtcclxuICAgICAgICAgICAgZmxleDogMCA0NSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmNvbXBhbnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgcC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZmxleDogMCAwIDkwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmIHVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/cv-content/experience-story/experience-story.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cv-content/experience-story/experience-story.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExperienceStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceStoryComponent", function() { return ExperienceStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceStoryComponent = /** @class */ (function () {
    function ExperienceStoryComponent() {
    }
    ExperienceStoryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperienceStoryComponent.prototype, "jobRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperienceStoryComponent.prototype, "jobDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperienceStoryComponent.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperienceStoryComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExperienceStoryComponent.prototype, "keyPoints", void 0);
    ExperienceStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience-story',
            template: __webpack_require__(/*! ./experience-story.component.html */ "./src/app/cv-content/experience-story/experience-story.component.html"),
            styles: [__webpack_require__(/*! ./experience-story.component.scss */ "./src/app/cv-content/experience-story/experience-story.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceStoryComponent);
    return ExperienceStoryComponent;
}());



/***/ }),

/***/ "./src/app/cv-content/section/section.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cv-content/section/section.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h2 class=\"subtitle\">\n    <app-icon [iconType]=\"iconType\"></app-icon>\n      {{title}}\n  </h2>\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/cv-content/section/section.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cv-content/section/section.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.section {\n  padding-bottom: 0.75rem; }\n\nh2.subtitle {\n  text-transform: uppercase; }\n\n@media screen and (max-width: 1200px) {\n    h2.subtitle {\n      margin-left: 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtY29udGVudC9zZWN0aW9uL0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFxhcHBcXGN2LWNvbnRlbnRcXHNlY3Rpb25cXHNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFFekI7SUFISjtNQUlRLGlCQUFpQixFQUFBLEVBRXhCIiwiZmlsZSI6InNyYy9hcHAvY3YtY29udGVudC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdi5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG5oMi5zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cv-content/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cv-content/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums */ "./src/app/shared/enums.ts");



var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionComponent.prototype, "iconType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionComponent.prototype, "title", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/cv-content/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/cv-content/section/section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/cv-content/skill/skill.component.html":
/*!*******************************************************!*\
  !*** ./src/app/cv-content/skill/skill.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skill\">\n  <h5>{{skill.name}}</h5>\n  <div class=\"skillbar\">\n    <div class=\"myskill\" [ngStyle]=\"experience\">{{skill.yearsOfExperience}} years</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cv-content/skill/skill.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/cv-content/skill/skill.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.skill {\n  position: relative;\n  margin-bottom: 0.7rem;\n  width: 100%;\n  display: flex; }\n  @media screen and (max-width: 1200px) {\n    div.skill {\n      margin-left: 1rem; } }\n  div.skill > h5 {\n    font-weight: 700;\n    width: 40%;\n    display: inline;\n    margin: 0; }\n  div.skill .skillbar {\n    width: 50%;\n    background-color: #f5f5f5;\n    border-radius: 25px;\n    height: 1rem; }\n  div.skill .skillbar .myskill {\n      width: 10%;\n      height: inherit;\n      background-color: #7bc2d3;\n      text-align: center;\n      line-height: 1rem;\n      color: #fff;\n      border-radius: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtY29udGVudC9za2lsbC9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcYXBwXFxjdi1jb250ZW50XFxza2lsbFxcc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWNvbnRlbnQvc2tpbGwvRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBRWI7SUFORjtNQU9JLGlCQUFpQixFQUFBLEVBMEJwQjtFQWpDRDtJQVdJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVMsRUFBQTtFQWRiO0lBa0JJLFVBQVU7SUFDVix5QkNuQnlCO0lEb0J6QixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBckJoQjtNQXdCUSxVQUFVO01BQ1YsZUFBZTtNQUNmLHlCQ3BCYTtNRHFCYixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdDNUJnQjtNRDZCaEIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdi1jb250ZW50L3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5kaXYuc2tpbGwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07ICBcclxuICB9XHJcblxyXG4gICYgPiBoNSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICYgLnNraWxsYmFyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkUGFnZWJhY2tncm91bmRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcblxyXG4gICAgJiAubXlza2lsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNraWxsUG9pbnRzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgICBjb2xvcjogJENWYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICB9XHJcbn0iLCIkcHJpbWFyeUNvbG9yTGlnaHQ6ICM0MmE4YzA7XHJcbiRwcmltYXJ5Q29sb3JEYXJrOiAjMmQ3Nzg4O1xyXG4kUGFnZWJhY2tncm91bmRDb2xvcjogI2Y1ZjVmNTtcclxuJENWYmFja2dyb3VuZENvbG9yOiAjZmZmO1xyXG4kdGV4dENvbG9yOiAjNTQ1ZTZjO1xyXG4kdGV4dENvbG9yTGlnaHQ6ICNkM2QzZDM7XHJcbiR0ZXh0Q29sb3JEYXJrOiAjM2Y0NjUwO1xyXG4kdGV4dEhpZ2hsaWdodDogIzk3YWFjMztcclxuJHNraWxsUG9pbnRzOiAjN2JjMmQzO1xyXG5cclxuLy8gbWVkaWEgcXVlcnkgc2l6ZXNcclxuJHNtYWxsOiA3MDBweDtcclxuJG1lZGl1bTogMTIwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/cv-content/skill/skill.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/cv-content/skill/skill.component.ts ***!
  \*****************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    Object.defineProperty(SkillComponent.prototype, "experience", {
        get: function () {
            var skillExp = this.skill.yearsOfExperience || 0;
            var calculatedExpPercent = (skillExp / this.totalYearsOfExperience || 0) * 100;
            return { 'width': calculatedExpPercent + "%" };
        },
        enumerable: true,
        configurable: true
    });
    SkillComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SkillComponent.prototype, "skill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SkillComponent.prototype, "totalYearsOfExperience", void 0);
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/cv-content/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.scss */ "./src/app/cv-content/skill/skill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fa *ngIf=\"!!iconType\" [name]=\"iconType\" class=\"icon\" [ngClass]=\"isBackgroundDisplayed ? 'iconBackground' : ''\"></fa>"

/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fa.icon {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  border-radius: 30px;\n  color: white;\n  text-align: center;\n  font-size: 1.2rem; }\n\nfa.iconBackground {\n  background-color: #2d7788; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGljb25cXGljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb24vRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBRWpCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQ2RzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5mYS5pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmZhLmljb25CYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3JEYXJrO1xyXG59IiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums */ "./src/app/shared/enums.ts");



var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.isBackgroundDisplayed = true;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconComponent.prototype, "iconType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], IconComponent.prototype, "isBackgroundDisplayed", void 0);
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/shared/components/icon/icon.component.html"),
            styles: [__webpack_require__(/*! ./icon.component.scss */ "./src/app/shared/components/icon/icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/shared/enums.ts":
/*!*********************************!*\
  !*** ./src/app/shared/enums.ts ***!
  \*********************************/
/*! exports provided: IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return IconType; });
var IconType;
(function (IconType) {
    IconType["Spinner"] = "spinner";
    IconType["User"] = "user";
    IconType["Briefcase"] = "briefcase";
    IconType["Envelope"] = "envelope";
    IconType["Phone"] = "phone";
    IconType["Linkedin"] = "linkedin";
    IconType["Github"] = "github";
    IconType["Map"] = "map";
    IconType["Wrench"] = "wrench";
    IconType["Download"] = "download";
})(IconType || (IconType = {}));


/***/ }),

/***/ "./src/app/sidebar/education/education.component.html":
/*!************************************************************!*\
  !*** ./src/app/sidebar/education/education.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"education\" id=\"education\">\n  <h3>Education</h3>\n\n  <h5>MSc in Computer Science</h5>\n  <h6>ISCTE-IUL, Portugal</h6>\n  <h6>2015-2017</h6>\n\n  <h5>BSc in Computer Science</h5>\n  <h6>ISCTE-IUL, Portugal</h6>\n  <h6>2012-2015</h6>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sidebar/education/education.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.education#education {\n  flex: 0 0 30%;\n  padding: 0.5rem 1.8rem; }\n  div.education#education > h3, div.education#education h5 {\n    color: #fff;\n    font-weight: 700; }\n  div.education#education > h5 {\n    margin-bottom: 0; }\n  div.education#education > h6 {\n    margin: 0.5rem 0rem;\n    color: #fff;\n    opacity: 0.6;\n    font-size: 0.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9lZHVjYXRpb24vRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXGFwcFxcc2lkZWJhclxcZWR1Y2F0aW9uXFxlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvZWR1Y2F0aW9uL0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUYxQjtJQUtRLFdDSmdCO0lES2hCLGdCQUFnQixFQUFBO0VBTnhCO0lBVVEsZ0JBQWdCLEVBQUE7RUFWeEI7SUFjUSxtQkFBbUI7SUFDbkIsV0NkZ0I7SURlaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5kaXYuZWR1Y2F0aW9uI2VkdWNhdGlvbiB7XHJcbiAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuOHJlbTtcclxuXHJcbiAgICAmID4gaDMsaDUge1xyXG4gICAgICAgIGNvbG9yOiAkQ1ZiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gaDUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGg2IHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwcmVtO1xyXG4gICAgICAgIGNvbG9yOiAkQ1ZiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxufSIsIiRwcmltYXJ5Q29sb3JMaWdodDogIzQyYThjMDtcclxuJHByaW1hcnlDb2xvckRhcms6ICMyZDc3ODg7XHJcbiRQYWdlYmFja2dyb3VuZENvbG9yOiAjZjVmNWY1O1xyXG4kQ1ZiYWNrZ3JvdW5kQ29sb3I6ICNmZmY7XHJcbiR0ZXh0Q29sb3I6ICM1NDVlNmM7XHJcbiR0ZXh0Q29sb3JMaWdodDogI2QzZDNkMztcclxuJHRleHRDb2xvckRhcms6ICMzZjQ2NTA7XHJcbiR0ZXh0SGlnaGxpZ2h0OiAjOTdhYWMzO1xyXG4kc2tpbGxQb2ludHM6ICM3YmMyZDM7XHJcblxyXG4vLyBtZWRpYSBxdWVyeSBzaXplc1xyXG4kc21hbGw6IDcwMHB4O1xyXG4kbWVkaXVtOiAxMjAwcHg7Il19 */"

/***/ }),

/***/ "./src/app/sidebar/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sidebar/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/sidebar/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/sidebar/education/education.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/languages/languages.component.html":
/*!************************************************************!*\
  !*** ./src/app/sidebar/languages/languages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"languages\" id=\"languages\">\n  <h3>Languages</h3>\n\n  <h5>Portuguese<span>(Native)</span></h5>\n\n  <h5>English<span>(Professional)</span></h5>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/languages/languages.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sidebar/languages/languages.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.languages#languages {\n  flex: 0 0 30%;\n  padding: 0.5rem 1.8rem;\n  margin-bottom: 1rem; }\n  @media screen and (max-width: 1200px) {\n    div.languages#languages {\n      margin-left: -1rem; } }\n  div.languages#languages > h3, div.languages#languages h5 {\n    color: #fff;\n    font-weight: 700; }\n  div.languages#languages > h5 {\n    margin: 0.5rem 0rem; }\n  div.languages#languages > h5 > span {\n      margin-left: 0.5rem;\n      color: #d3d3d3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9sYW5ndWFnZXMvRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXGFwcFxcc2lkZWJhclxcbGFuZ3VhZ2VzXFxsYW5ndWFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvbGFuZ3VhZ2VzL0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7RUFDbkI7SUFKSjtNQUtRLGtCQUFrQixFQUFBLEVBZ0J6QjtFQXJCRDtJQVNRLFdDUmdCO0lEU2hCLGdCQUFnQixFQUFBO0VBVnhCO0lBY1EsbUJBQW1CLEVBQUE7RUFkM0I7TUFpQlksbUJBQW1CO01BQ25CLGNDZlksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuZGl2Lmxhbmd1YWdlcyNsYW5ndWFnZXMge1xyXG4gICAgZmxleDogMCAwIDMwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gaDMsIGg1IHtcclxuICAgICAgICBjb2xvcjogJENWYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGg1IHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwcmVtO1xyXG5cclxuICAgICAgICAmID4gc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dENvbG9yTGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/sidebar/languages/languages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sidebar/languages/languages.component.ts ***!
  \**********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent() {
    }
    LanguagesComponent.prototype.ngOnInit = function () {
    };
    LanguagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/sidebar/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.scss */ "./src/app/sidebar/languages/languages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/profile-picture/profile-picture.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sidebar/profile-picture/profile-picture.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" id=\"background\">\n  <div class=\"img-container\" id=\"img-container\">\n    <img class=\"profile-photo\" id=\"profile-photo\" src=\"assets/profilePic.png\">\n  </div>\n  <h1 class=\"name\" id=\"name\">Jorge Miguel Branquinho</h1>\n  <h2 class=\"title\" id=\"title\">Full Stack Developer</h2>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/profile-picture/profile-picture.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/sidebar/profile-picture/profile-picture.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.background#background {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2); }\n\ndiv.img-container#img-container {\n  padding: 2rem 5rem 0.2rem 5rem;\n  display: block; }\n\ndiv.img-container#img-container > img.profile-photo#profile-photo {\n    margin: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    display: block;\n    height: 10rem;\n    width: auto;\n    object-fit: cover;\n    -o-object-position: top;\n       object-position: top;\n    border-radius: 30%;\n    border-radius: 0 1px 1px rgba(0, 0, 0, 0.1); }\n\nh1.name#name,\nh2.title#title {\n  text-align: center;\n  width: 100%;\n  margin: 1rem 0.1rem;\n  padding-bottom: 1rem;\n  display: block; }\n\nh1.name#name {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 900; }\n\nh2.title#title {\n  color: #d3d3d3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9wcm9maWxlLXBpY3R1cmUvRDpcXERFVlxccG9ydGZvbGlvMi9zcmNcXGFwcFxcc2lkZWJhclxccHJvZmlsZS1waWN0dXJlXFxwcm9maWxlLXBpY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvcHJvZmlsZS1waWN0dXJlL0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksOEJBQThCO0VBQzlCLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQW9CO09BQXBCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMkNBQXNDLEVBQUE7O0FBSTlDOztFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0NoQ29CO0VEaUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0NwQ29CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdi5iYWNrZ3JvdW5kI2JhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG5cclxuZGl2LmltZy1jb250YWluZXIjaW1nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDVyZW0gMC4ycmVtIDVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAmID4gaW1nLnByb2ZpbGUtcGhvdG8jcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMS5uYW1lI25hbWUsXHJcbmgyLnRpdGxlI3RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmgxLm5hbWUjbmFtZSB7XHJcbiAgICBjb2xvcjogJENWYmFja2dyb3VuZENvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwOyBcclxufVxyXG5cclxuaDIudGl0bGUjdGl0bGUge1xyXG4gICAgY29sb3I6ICR0ZXh0Q29sb3JMaWdodDsgXHJcbn1cclxuIiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/sidebar/profile-picture/profile-picture.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sidebar/profile-picture/profile-picture.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfilePictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePictureComponent", function() { return ProfilePictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePictureComponent = /** @class */ (function () {
    function ProfilePictureComponent() {
    }
    ProfilePictureComponent.prototype.ngOnInit = function () {
    };
    ProfilePictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-picture',
            template: __webpack_require__(/*! ./profile-picture.component.html */ "./src/app/sidebar/profile-picture/profile-picture.component.html"),
            styles: [__webpack_require__(/*! ./profile-picture.component.scss */ "./src/app/sidebar/profile-picture/profile-picture.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePictureComponent);
    return ProfilePictureComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" id=\"sidebar\">\n    <app-profile-picture></app-profile-picture>\n    <div class=\"details\" id=\"details\">\n        <ul>\n            <li>\n                <app-icon [iconType]=\"envelopeIcon\"></app-icon>\n                <a class=\"link\" href=\"mailto:jmabranquinho@gmail.com\">jmabranquinho@gmail.com</a>\n            </li>\n            <li>\n                <app-icon [iconType]=\"phoneIcon\"></app-icon>\n                <a class=\"link\" href=\"tel:+351936255694\">+351 936255694</a>\n            </li>\n            <li>\n                <app-icon [iconType]=\"linkedinIcon\"></app-icon>\n                <a class=\"link\" href=\"https://www.linkedin.com/in/jorgebranquinho\">jorgebranquinho</a>\n            </li>\n            <li>\n                <app-icon [iconType]=\"githubIcon\"></app-icon>\n                <a class=\"link\" href=\"https://github.com/jmaBranquinho\">jmaBranquinho</a>\n            </li>\n            <li>\n                <app-icon [iconType]=\"mapIcon\"></app-icon>\n                <a class=\"link\" href=\"https://goo.gl/maps/QC5iGKeVTDtiC53e8\">Corroios, Portugal</a>\n            </li>\n        </ul>\n    </div>\n    <app-education></app-education>\n    <app-languages></app-languages>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.sidebar#sidebar {\n  width: 100%;\n  background-color: #42a8c0;\n  display: flex;\n  flex-direction: column; }\n  div.sidebar#sidebar > app-profile-picture {\n    order: 1;\n    flex: 0 0 20%; }\n  div.sidebar#sidebar > div.details#details {\n    flex: 0 0 20%;\n    order: 2; }\n  @media screen and (max-width: 1200px) {\n      div.sidebar#sidebar > div.details#details {\n        margin: auto; } }\n  div.sidebar#sidebar > div.details#details ul {\n      padding-left: 1.6rem; }\n  div.sidebar#sidebar > div.details#details li {\n      display: block;\n      margin-bottom: 0.9rem;\n      text-decoration: none; }\n  div.sidebar#sidebar > div.details#details li a.link {\n        margin-left: 0.4rem;\n        text-decoration: none;\n        color: #fff;\n        font-weight: 500; }\n  div.sidebar#sidebar > div.details#details li a.link:hover {\n          text-decoration: underline; }\n  div.sidebar#sidebar > app-education {\n    order: 3;\n    flex: 0 0 10%; }\n  @media screen and (max-width: 1200px) {\n      div.sidebar#sidebar > app-education {\n        margin: auto; } }\n  div.sidebar#sidebar > app-languages {\n    order: 4;\n    flex: 0 0 10%; }\n  @media screen and (max-width: 1200px) {\n      div.sidebar#sidebar > app-languages {\n        margin: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOlxcREVWXFxwb3J0Zm9saW8yL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWRlYmFyL0Q6XFxERVZcXHBvcnRmb2xpbzIvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQVc7RUFDWCx5QkNKdUI7RURLdkIsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBSjFCO0lBT1EsUUFBUTtJQUNSLGFBQWEsRUFBQTtFQVJyQjtJQVlRLGFBQWE7SUFDYixRQUFRLEVBQUE7RUFFUjtNQWZSO1FBZ0JZLFlBQVksRUFBQSxFQXVCbkI7RUF2Q0w7TUFvQlksb0JBQW9CLEVBQUE7RUFwQmhDO01Bd0JZLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIscUJBQXFCLEVBQUE7RUExQmpDO1FBNkJnQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLFdDOUJRO1FEK0JSLGdCQUFnQixFQUFBO0VBaENoQztVQW1Db0IsMEJBQTBCLEVBQUE7RUFuQzlDO0lBMENRLFFBQVE7SUFDUixhQUFhLEVBQUE7RUFFYjtNQTdDUjtRQThDWSxZQUFZLEVBQUEsRUFFbkI7RUFoREw7SUFtRFEsUUFBUTtJQUNSLGFBQWEsRUFBQTtFQUViO01BdERSO1FBdURZLFlBQVksRUFBQSxFQUVuQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuZGl2LnNpZGViYXIjc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3JMaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYgPiBhcHAtcHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICBmbGV4OiAwIDAgMjAlO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBkaXYuZGV0YWlscyNkZXRhaWxzIHtcclxuICAgICAgICBmbGV4OiAwIDAgMjAlO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmIGEubGluayB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRDVmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGFwcC1lZHVjYXRpb24ge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMCU7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gYXBwLWxhbmd1YWdlcyB7XHJcbiAgICAgICAgb3JkZXI6IDQ7XHJcbiAgICAgICAgZmxleDogMCAwIDEwJTtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJHByaW1hcnlDb2xvckxpZ2h0OiAjNDJhOGMwO1xyXG4kcHJpbWFyeUNvbG9yRGFyazogIzJkNzc4ODtcclxuJFBhZ2ViYWNrZ3JvdW5kQ29sb3I6ICNmNWY1ZjU7XHJcbiRDVmJhY2tncm91bmRDb2xvcjogI2ZmZjtcclxuJHRleHRDb2xvcjogIzU0NWU2YztcclxuJHRleHRDb2xvckxpZ2h0OiAjZDNkM2QzO1xyXG4kdGV4dENvbG9yRGFyazogIzNmNDY1MDtcclxuJHRleHRIaWdobGlnaHQ6ICM5N2FhYzM7XHJcbiRza2lsbFBvaW50czogIzdiYzJkMztcclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IHNpemVzXHJcbiRzbWFsbDogNzAwcHg7XHJcbiRtZWRpdW06IDEyMDBweDsiXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums */ "./src/app/shared/enums.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    Object.defineProperty(SidebarComponent.prototype, "envelopeIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Envelope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "phoneIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "linkedinIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Linkedin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "githubIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Github;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "mapIcon", {
        get: function () {
            return _shared_enums__WEBPACK_IMPORTED_MODULE_2__["IconType"].Map;
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
var environment = {
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

module.exports = __webpack_require__(/*! D:\DEV\portfolio2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map