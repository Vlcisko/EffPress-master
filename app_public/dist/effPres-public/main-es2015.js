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

/***/ "./node_modules/raw-loader/index.js!./src/app/framework/framework.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/framework/framework.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-light\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"\" class=\"navbar-brand\">EffPress</a>\n    <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\" class=\"navbar-toggler\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div id=\"navbarMain\" class=\"navbar-collapse collapse\">\n      <!--<ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"about\"  class=\"nav-link\">Info</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Viac\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" href=\"#\">Akcia 1</a>\n              <a class=\"dropdown-item\" href=\"#\">Akcia 2</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Ďalšia akcia</a>\n            </div>\n          </li>\n      </ul>-->\n      <!--<ul class=\"navbar-nav justify-content-end\">\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a routerLink=\"login\" class=\"nav-link\" *ngIf=\"!isLoggedIn()\">Prihláste sa</a>\n          </li>\n          <li class=\"nav-item dropdown\" routerLinkActive=\"active\"\n          *ngIf=\"isLoggedIn()\">\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\n              {{ getUsername() }}\n            </a>\n            <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" (click)=\"doLogout()\">Logout</a>\n            </div>\n          </li>\n        </ul>-->\n      <!--<ul class=\"navbar-nav navbar-right\">\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n              Sign Up\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">\n              <span class=\"glyphicon glyphicon-log-in\"></span>\n              Login\n            </a>\n          </li>\n        </ul>-->\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row framework-content\">\n  <div class=\"col-12 col-md-8\">\n    <p class=\"lead\">Nemáte ešte účet? <a routerLink=\"/register\">Regsitrujte</a> sa</p>\n    <form (ngSubmit)=\"onLoginSubmit(evt)\">\n      <div role=\"alert\" *ngIf=\"formError\" class=\"alert alert-danger\">\n        {{ formError }}\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">E-mail adresa</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"\n        placeholder=\"Vložte e-mail adresu\" [(ngModel)]=\n        \"credentials.email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Heslo</label>\n        <input type=\"pasword\" class=\"form-control\" id=\"password\"\n         name=\"password\" placeholder=\"Vložte heslo\"\n        [(ngModel)]=\"credentials.password\">\n      </div>\n      <button type=\"submit\" role=\"button\" class=\"btn btn-primary\">Prihlásiť sa</button>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-panel/comment/comment.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-panel/comment/comment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row bg-custom\">\n  <div class=\"p-2\">\n      <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" alt=\"\" />\n  </div>\n  <div class=\"p-2\">\n      <div class=\"d-flex flex-column flex-wrap name\">\n          <h6 class=\"m-0\" style=\"color: black;font-weight: bold;\">\n              {{comment.userID}}\n          </h6>\n          <span class=\"details\" style=\"color: black;\">\n              {{comment.commentText}}\n          </span>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-panel/comments/comments.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-panel/comments/comments.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"form-group shadow-textarea row\" style=\"text-align:center\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n    <label for=\"exampleFormControlTextarea6\">Napíšte komentár</label>\n    <textarea class=\"form-control z-depth-1\"\n        id=\"exampleFormControlTextarea6\"\n        rows=\"2\"\n        placeholder=\"Text komentára...\"></textarea>\n    <button type=\"button\" class=\"btn btn-primary\">Vložiť komentár</button>\n  </div>\n  <div class=\"col-lg-1\"></div>\n</div>\n\n<div class=\"row\" style=\"text-align:center\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\" style=\"background-color: chartreuse;\">\n    <label for=\"exampleFormControlTextarea6\">Mohol by niekto napísať čo sa nachádza v server.xml</label>\n  </div>\n  <div class=\"col-lg-1\"></div>\n</div>\n<div class=\"row\" style=\"text-align:center\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-9\" style=\"background-color: chartreuse;\">\n    <label for=\"exampleFormControlTextarea6\">V súbure je len konfigurácia servera</label>\n  </div>\n  <div class=\"col-lg-1\"></div>\n</div>-->\n\n<div class=\"container-fluid customList overflow-auto\">\n  <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"shadow-textarea row\" style=\"text-align:center;border-top: 2px solid rgb(168, 166, 163)\">\n              <div class=\"col-lg-1\"></div>\n              <div class=\"col-lg-10\">\n                <label style=\"margin-top:5px; color:black ;\">Komentáre:</label>\n                <textarea class=\"form-control z-depth-1\"\n                    id=\"exampleFormControlTextarea6\"\n                    rows=\"2\"\n                    placeholder=\"Text komentára...\" [(ngModel)] = \"userComment\"></textarea>\n                <button (click)=\"saveComment()\" type=\"button\" class=\"btn\" style=\"margin:5px; color:white ;background-color: rgb(83, 83, 87);\">Vložiť komentár</button>\n              </div>\n              <div class=\"col-lg-1\"></div>\n            </div>\n\n          <div >\n              <ul  id=\"comments-list\">\n                  <app-comment *ngFor=\"let comment of commentsList\" [comment]=\"comment\">\n                  </app-comment>\n              </ul>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-panel/overview/overview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-panel/overview/overview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div class=\"row\">\n  <div class=\"col-10\">\n    <h4>\n      Slajd: {{pagePosition}}\n    </h4>\n  </div>\n  <!--<div class=\"ml-auto\">\n      <button class=\"btn\" style=\"color: white;\">\n        <i class=\"fa fa-arrow-circle-right fa-lg\"></i></button>\n  </div>-->\n</div>\n\n<div class=\"row\">\n  <div class=\"col-3\"></div>\n  <div class=\"col-8\">\n    <app-rating-likes [description]=\"'Náročnosť slajdu'\" [ratingType]=\"page.ratingDifficulty\" [size]=\"'lg'\"></app-rating-likes>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-3\"></div>\n  <div class=\"col-8\">\n      <app-rating-likes [description]=\"'Kvalita slajdu'\" [ratingType]=\"page.ratingQualtiy\" [size]=\"'lg'\"></app-rating-likes>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-3\"></div>\n  <div class=\"col-8\">\n      <app-rating-likes [description]=\"'Prehľadnosť slajdu' \" [ratingType]=\"page.ratingLook\" [size]=\"'lg'\"></app-rating-likes>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-panel/page-panel.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-panel/page-panel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card-block\" [ngSwitch]=\"isLoggedIn()\">\n          <button (click)=\"formVisible=true\" class=\"btn float-right\" style=\"margin-bottom: 10px;color:white ;background-color: rgb(83, 83, 87);\"\n            *ngSwitchCase=\"true\">Vložiť</button>\n          <a routerLink=\"/login\" class=\"btn float-right\" style=\"margin-bottom: 10px; color:white ;background-color: rgb(83, 83, 87);\"\n          *ngSwitchDefault>Vložiť hodnotenie </a>\n          </div>\n    </div>\n</div>-->\n\n<!--\n<div *ngIf=\"formVisible\">\n  <form (ngSubmit)=\"onRateSubmit()\">\n    <h4>Pridaj hodnotenia</h4>\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-3 col-form-label\">Náročnosť</label>\n      <div class=\"col-sm-9 col-md-3\">\n          <select [(ngModel)]=\"newRating.rating\" id=\"rating\" name=\"rating\" class=\"form-control\">\n            <option [ngValue]=\"5\">5</option>\n            <option [ngValue]=\"4\">4</option>\n            <option [ngValue]=\"3\">3</option>\n            <option [ngValue]=\"2\">2</option>\n            <option [ngValue]=\"1\">1</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-3 col-form-label\">Kvalita</label>\n      <div class=\"col-sm-9 col-md-3\">\n          <select [(ngModel)]=\"newRating.ratingQ\" id=\"ratingQ\" name=\"rating\" class=\"form-control\">\n            <option [ngValue]=\"5\">5</option>\n            <option [ngValue]=\"4\">4</option>\n            <option [ngValue]=\"3\">3</option>\n            <option [ngValue]=\"2\">2</option>\n            <option [ngValue]=\"1\">1</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"rating\" class=\"col-sm-3 col-form-label\">Vzhľad</label>\n      <div class=\"col-sm-9 col-md-3\">\n          <select [(ngModel)]=\"newRating.ratingL\" id=\"ratingL\" name=\"rating\" class=\"form-control\">\n            <option [ngValue]=\"5\">5</option>\n            <option [ngValue]=\"4\">4</option>\n            <option [ngValue]=\"3\">3</option>\n            <option [ngValue]=\"2\">2</option>\n            <option [ngValue]=\"1\">1</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-12\">\n          <button type=\"submit\" class=\"btn btn-primary float-right\"\n          style=\"margin-left:15px\">Vložiť hodnotenie</button>\n          <button (click)=\"formVisible=false\" type=\"button\" class=\"btn btn-default float-\n          right\">Zrušiť</button>\n        </div>\n      </div>\n  </form>\n</div>\n-->\n<div>\n  <app-overview></app-overview>\n</div>\n\n<!--<div style=\"background-color:blueviolet; height: 30%;\">\n  <app-comments></app-comments>\n</div>-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-3 d-none d-lg-block col-offset-5  coloverlay bg-custom\">\n          <app-comments></app-comments>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pdf-page-view/pdf-page-view.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pdf-page-view/pdf-page-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row banner\">\n    <div class=\"col-12\">\n    <h1>EffPress\n    <small>PDF sentiment</small>\n    </h1>\n    </div>\n</div>-->\n<div class=\"row framework-content\" style=\"height: 95vh;\">\n  <div class=\"col-9\" style=\"background-color:rgb(194, 192, 190);border-right: 2px solid rgb(168, 166, 163)\">\n    <app-pdf-viewer-hhangular\n      (changedPage)=\"onPageChange($event)\" [pdfControls] = \"pdfControls\"></app-pdf-viewer-hhangular>\n  </div>\n\n  <div class=\"col-3\" style=\"background-color:rgb(184, 182, 179)\">\n    <app-page-panel *ngIf=\"page\" [page]=\"page\"></app-page-panel>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--https://www.codeply.com/go/w1AMD1EY3c-->\n<div class=\"row\" style=\"height: 95vh\">\n    <div class=\"col-2 customList overflow-auto\" style=\"background-color:  #5f6266\">\n      <div class=\"row\">\n        <!--<div class=\"ml-auto\">\n          <button class=\"btn\" style=\"color: white;\">\n            <i class=\"fa fa-arrow-circle-left fa-lg\"></i></button>\n        </div>-->\n      </div>\n      <pdfjs-thumbnails\n                        [pdfjsControl]=\"pdfjsControl\" [pdfjsGroupControl]=\"pdfjsGroupControl\"\n                        [quality]=\"1\"\n                        [fitSize]=\"150\"\n                        [previewDelay]=\"300\"\n                        [previewHeight]=\"300\"\n                        [allowDrop]=\"false\"\n                        [allowRemove]=\"false\"\n                        [dragMode]=\"ThumbnailDragMode.NONE\"\n                        [layout]=\"ThumbnailLayout.VERTICAL\" (render)=\"renderHandler($event)\">\n      </pdfjs-thumbnails>\n    </div>\n    <div class=\"col-10 customList overflow-auto\" style=\"background-color:   #bdc6d1\">\n      <div class=\"row\" style=\"margin-bottom: 20px;\">\n        <div class=\"col-5\">\n            <button [disabled]=\"!pdfjsGroupControl.previousIsSelectable()\"\n              (click)=\"pdfjsGroupControl.selectPrevious()\" class=\"btn\">\n              <i class=\"fa fa-arrow-left fa-2x\"></i></button>\n        </div>\n        <div class=\"col-4\">\n          <input class=\"btn\" style = \"width:55px; margin-right:-6px; border-bottom: 2px solid black;\"\n                [disabled]=\"isNaN(pdfjsGroupControl.getSelectedPageIndex())\" type=\"number\" min=\"1\"\n                [max]=\"pdfjsGroupControl.getPageNumber()\"\n                [value]=\"pdfjsGroupControl.getSelectedPageIndex()\"\n                (change)=\"changePageHandler($event)\"/>\n          <button style = \"margin-left:-10px;margin-top:8px;\" class=\"btn\" [disabled]=\"true\">\n              <h6>/{{pdfjsGroupControl.getPageNumber()}}</h6></button>\n          <button [disabled]=\"pdfjsGroupControl.disabled\"\n                  (click)=\"scalePlus()\" class=\"btn\">\n                  <i class=\"fa fa-plus\"></i></button>\n          <i style=\"color: black\">{{scalePercentage}}%</i>\n          <button [disabled]=\"pdfjsGroupControl.disabled\"\n                  (click)=\"scaleMinus()\" class=\"btn\">\n                  <i class=\"fa fa-minus\"></i></button>\n        </div>\n        <div class=\"col-2\"></div>\n        <div class=\"ml-auto\">\n          <button [disabled]=\"!pdfjsGroupControl.nextIsSelectable()\"\n                  (click)=\"pdfjsGroupControl.selectNext()\" class=\"btn\">\n                  <i class=\"fa fa-arrow-right fa-2x\"></i>\n          </button>\n        </div>\n      </div>\n      <pdfjs-view [control]=\"pdfjsControl\"\n                  [textLayer]=\"textEnable\"\n                  [fit]=\"fit\"\n                  [quality]=\"quality\"\n                  [scale]=\"scale\"\n                  [class.edit-mode]=\"editMode\">\n      </pdfjs-view>\n      <!--<div class=\"ml-auto\" style=\"background-color: rgb(184, 182, 179);\n              padding: 0;\n              position: fixed;\n              z-index: 100;\n              bottom: 0;\n              right: 52vh;\n              margin: 0;\n              border: 2px solid rgb(168, 166, 163);\n              border-top-right-radius: 25px;\n              border-top-left-radius: 25px;\n            \">\n         <app-rating-likes [description]=\"'Prehľadnosť slajdu'\"  [likes]=\"6\" [dislikes]=\"2\" [size]=\"'2x'\"></app-rating-likes>\n      </div>-->\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pdf-viewer/pdf-viewer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pdf-viewer/pdf-viewer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n    <h1>ng-pdfjs</h1>\n    <div>\n      <button (click)=\"changePagePrevious()\">Previous </button>\n      <button (click)=\"changePageNext()\">Next </button>\n      <h3>{{pageNumber +' / '+ totalPages}}</h3>\n    </div>\n    <canvas id=\"main-canvas\"></canvas>\n    <span *ngIf=\"errorMessage\" class=\"error-message\">{{ errorMessage }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rating-likes/rating-likes.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rating-likes/rating-likes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 12px; \">\n    <h6 class=\"m-0\" style=\"color: black;font-weight: bold;\">\n        {{description}}\n    </h6>\n  <button [disabled]=\"!ratingType.canDislike(userId)\" (click)=\"likeClicked()\" class=\"btn\" style=\"color: rgb(85, 82, 82);\">\n      <i style=\"font-weight: bold;\" class=\"fa fa-{{size}}\">{{actionLike}}&nbsp;</i><i class=\"fa fa-thumbs-up fa-{{size}}\" >\n        &nbsp;{{ratingType.numLikes}}</i></button>\n  <button [disabled]=\"!ratingType.canLike(userId)\" (click)=\"disLikeClicked()\" class=\"btn\" style=\"color: rgb(85, 82, 82);\">\n      <i style=\"font-weight: bold;\" class=\"fa fa-{{size}}\">{{actionDislike}}&nbsp;</i><i class=\"fa fa-thumbs-down fa-{{size}}\">\n      &nbsp;{{ratingType.numDislikes}}</i></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rating-stars/rating-stars.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rating-stars/rating-stars.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small>\n    &nbsp;\n    <i class=\"fa{{ rating < 1 ? 'r' : 's' }} fa-star\"></i>\n    <i class=\"fa{{ rating < 2 ? 'r' : 's' }} fa-star\"></i>\n    <i class=\"fa{{ rating < 3 ? 'r' : 's' }} fa-star\"></i>\n    <i class=\"fa{{ rating < 4 ? 'r' : 's' }} fa-star\"></i>\n    <i class=\"fa{{ rating < 5 ? 'r' : 's' }} fa-star\"></i>\n  </small>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row framework-content\">\n  <div class=\"col-12 col-md-12\">\n    <p class=\"lead\">Už máte účet? <a routerLink=\"/login\">Prihláste</a> sa</p>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div role=\"alert\" *ngIf=\"formError\" class=\"alert alert-danger\">\n      {{ formError }}</div>\n      <div class=\"form-group\">\n        <label for=\"name\">Meno</label>\n        <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\n        \"Používateľské meno\" [(ngModel)]=\"credentials.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">E-mail adresa</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"\n        placeholder=\"Vložte e-mail adresu\" [(ngModel)]=\"credentials.email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Heslo</label>\n        <input type=\"pasword\" class=\"form-control\" id=\"password\"\n        name=\"password\" placeholder=\"Vložte heslo\"\n        [(ngModel)]=\"credentials.password\">\n      </div>\n      <button type=\"submit\" role=\"button\" class=\"btn btn-primary\">Registrovať</button>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./pdfs.json":
/*!*******************!*\
  !*** ./pdfs.json ***!
  \*******************/
/*! exports provided: pdfs, default */
/***/ (function(module) {

module.exports = {"pdfs":[{"pages":[{"comments":[{"userID":"userIDasd","commentText":"comment text..."},{"userID":"userIDyxcyxc","commentText":"comment 11111 text..."}],"_id":"page0","ratingDifficulty":{"numLikes":1,"numDislikes":1,"usersRatedList":[{"userID":"Tomas","ratedAs":"like"},{"userID":"Tomas2","ratedAs":"dislike"}]},"ratingQualtiy":{"numLikes":0,"numDislikes":1,"usersRatedList":[{"userID":"Tomas","ratedAs":"dislike"}]},"ratingLook":{"numLikes":1,"numDislikes":0,"usersRatedList":[{"userID":"Tomas2","ratedAs":"like"}]},"pagePdfPosition":0},{"comments":[{"userID":"userIDsdgdfg","commentText":"commentc vbcv  text..."},{"userID":"userIDcvxbcxvbxcvbxc","commentText":"comment 123 text..."}],"_id":"page1","ratingDifficulty":{"numLikes":2,"numDislikes":2,"usersRatedList":[{"userID":"Tomas","ratedAs":"like"},{"userID":"Tomas2","ratedAs":"dislike"},{"userID":"Tomas3","ratedAs":"like"},{"userID":"Tomas4","ratedAs":"dislike"}]},"ratingQualtiy":{"numLikes":0,"numDislikes":2,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":1},{"comments":[],"_id":"page2","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":2},{"comments":[],"_id":"page3","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":3},{"comments":[],"_id":"page4","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":4},{"comments":[],"_id":"page5","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":5},{"comments":[],"_id":"page6","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":6},{"comments":[],"_id":"page7","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":7},{"comments":[],"_id":"page8","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":8},{"comments":[],"_id":"page9","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":9},{"comments":[],"_id":"page10","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":10},{"comments":[],"_id":"page11","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":11},{"comments":[],"_id":"page12","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":12},{"comments":[],"_id":"page13","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":13},{"comments":[],"_id":"page14","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":14},{"comments":[],"_id":"page15","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":15},{"comments":[],"_id":"page16","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":16},{"comments":[],"_id":"page17","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":17},{"comments":[],"_id":"page18","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":18},{"comments":[],"_id":"page19","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":19},{"comments":[],"_id":"page20","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":20},{"comments":[],"_id":"page21","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":21},{"comments":[],"_id":"page22","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":22},{"comments":[],"_id":"page23","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":23},{"comments":[],"_id":"page24","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":24},{"comments":[],"_id":"page25","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":25},{"comments":[],"_id":"page26","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":26},{"comments":[],"_id":"page27","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":27},{"comments":[],"_id":"page28","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":28},{"comments":[],"_id":"page29","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":29},{"comments":[],"_id":"page30","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":30},{"comments":[],"_id":"page31","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":31},{"comments":[],"_id":"page32","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":32},{"comments":[],"_id":"page33","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":33},{"comments":[],"_id":"page34","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":34},{"comments":[],"_id":"page35","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":35},{"comments":[],"_id":"page36","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":36},{"comments":[],"_id":"page37","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":37},{"comments":[],"_id":"page38","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":38},{"comments":[],"_id":"page39","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":39},{"comments":[],"_id":"page40","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":40},{"comments":[],"_id":"page41","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":41},{"comments":[],"_id":"page42","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":42},{"comments":[],"_id":"page43","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":43},{"comments":[],"_id":"page44","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":44},{"comments":[],"_id":"page45","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":45},{"comments":[],"_id":"page46","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":46},{"comments":[],"_id":"page47","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":47},{"comments":[],"_id":"page48","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":48},{"comments":[],"_id":"page49","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":49},{"comments":[],"_id":"page50","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":50},{"comments":[],"_id":"page51","ratingDifficulty":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingQualtiy":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"ratingLook":{"numLikes":0,"numDislikes":0,"usersRatedList":[]},"pagePdfPosition":51}],"_id":"psi_03_manazment-poziadaviek.pdf"}]};

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pdf_page_view_pdf_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pdf-page-view/pdf-page-view.component */ "./src/app/pdf-page-view/pdf-page-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







const routes = [
    {
        path: '',
        component: _pdf_page_view_pdf_page_view_component__WEBPACK_IMPORTED_MODULE_2__["PdfPageViewComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _pdf_viewer_hhangular_pdf_viewer_hhangular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pdf-viewer-hhangular/pdf-viewer-hhangular.component */ "./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.ts");
/* harmony import */ var _pdf_page_view_pdf_page_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pdf-page-view/pdf-page-view.component */ "./src/app/pdf-page-view/pdf-page-view.component.ts");
/* harmony import */ var _page_panel_overview_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-panel/overview/overview.component */ "./src/app/page-panel/overview/overview.component.ts");
/* harmony import */ var _page_panel_comments_comments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-panel/comments/comments.component */ "./src/app/page-panel/comments/comments.component.ts");
/* harmony import */ var _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rating-stars/rating-stars.component */ "./src/app/rating-stars/rating-stars.component.ts");
/* harmony import */ var _page_panel_page_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-panel/page-panel.component */ "./src/app/page-panel/page-panel.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pdf-viewer/pdf-viewer.component */ "./src/app/pdf-viewer/pdf-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _rating_likes_rating_likes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rating-likes/rating-likes.component */ "./src/app/rating-likes/rating-likes.component.ts");
/* harmony import */ var _page_panel_comment_comment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-panel/comment/comment.component */ "./src/app/page-panel/comment/comment.component.ts");




















/* pouzitie mozilla pdf.js- s komponentom pdf-viewer
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
*/
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"],
            _pdf_viewer_hhangular_pdf_viewer_hhangular_component__WEBPACK_IMPORTED_MODULE_9__["PdfViewerHhangularComponent"],
            _pdf_page_view_pdf_page_view_component__WEBPACK_IMPORTED_MODULE_10__["PdfPageViewComponent"],
            _pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_16__["PdfViewerComponent"],
            _page_panel_overview_overview_component__WEBPACK_IMPORTED_MODULE_11__["OverviewComponent"],
            _page_panel_comments_comments_component__WEBPACK_IMPORTED_MODULE_12__["CommentsComponent"],
            _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_13__["RatingStarsComponent"],
            _page_panel_page_panel_component__WEBPACK_IMPORTED_MODULE_14__["PagePanelComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _rating_likes_rating_likes_component__WEBPACK_IMPORTED_MODULE_18__["RatingLikesComponent"],
            _page_panel_comment_comment_component__WEBPACK_IMPORTED_MODULE_19__["CommentComponent"],
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-data.service */ "./src/app/pages-data.service.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AuthenticationService = class AuthenticationService {
    constructor(storage, pagesDataService) {
        this.storage = storage;
        this.pagesDataService = pagesDataService;
    }
    getToken() {
        return this.storage.getItem('effpress-token');
    }
    saveToken(token) {
        this.storage.setItem('effpress-token', token);
    }
    login(user) {
        return this.pagesDataService.login(user)
            .then((authResp) => this.saveToken(authResp.token));
    }
    logout() {
        this.storage.removeItem('effpress-token');
    }
    register(user) {
        return this.pagesDataService.register(user)
            .then((authResp) => this.saveToken(authResp.token));
    }
    isLoggedIn() {
        const token = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    }
    getCurrentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { email, name } = JSON.parse(atob(token.split('.')[1]));
            return { email, name };
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: Storage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"],] }] },
    { type: _pages_data_service__WEBPACK_IMPORTED_MODULE_1__["PagesDataService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Storage,
        _pages_data_service__WEBPACK_IMPORTED_MODULE_1__["PagesDataService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/framework/framework.component.scss":
/*!****************************************************!*\
  !*** ./src/app/framework/framework.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//fonts.googleapis.com/css?family=Lobster|Cabin:400,700\");\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Lobster\", cursive;\n}\nlegend {\n  font-family: \"Lobster\", cursive;\n}\n.navbar {\n  height: 5vh;\n  background-color: #363535;\n  border-color: #911821;\n  opacity: 0.8;\n}\n.navbar-light .navbar-brand {\n  font-family: \"Lobster\", cursive;\n  color: #fff;\n}\n.navbar-light .navbar-toggler {\n  color: #fff;\n  border-color: #fff;\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n.navbar-light .nav-item {\n  padding: 2px;\n  margin-left: 7px;\n}\n.navbar-light .nav-link {\n  color: #fff;\n}\n/*\n.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: $black-color;\n}\n\n.card {\n  background-color: #469ea8;\n  padding: 1rem;\n}\n\n.card-primary {\n  border-color: #a2ced3;\n  margin-bottom: 0.5rem;\n}\n\n\n.badge-default, .btn-primary {\n  background-color: #ad1d28;\n  border-color: #911821;\n}\n\nh4 a, h4 a:hover {\n  color: #fff;\n}\n\nh4 small {\n  font-size: 60%;\n  line-height: 200%;\n  color: #aaa;\n}\n\nh1 small {\n  color: #aaa;\n}\n\n.address {\n  margin-bottom: 0.5rem;\n}\n\n.facilities span.badge {\n  margin-right: 2px;\n}\n\np {\n  margin-bottom: 0.65rem;\n}\n\na {\n  color: rgba(255, 255, 255, 0.8)\n}\n\n  a:hover {\n      color: #fff\n  }\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL0Q6XFxzdHVcXERQXFxFZmZQcmVzcy1tYXN0ZXJcXGFwcF9wdWJsaWMvc3JjXFxhcHBcXGZyYW1ld29ya1xcZnJhbWV3b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mcmFtZXdvcmsvZnJhbWV3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNFQUFBO0FBS1I7RUFDRSwrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNIRjtBRE9FO0VBQ0UsK0JBQUE7RUFDQSxXQXBCVTtBQ2dCZDtBRE9FO0VBQ0UsV0F4QlU7RUF5QlYsa0JBekJVO0FDb0JkO0FEUUU7RUFDRSxpUUFBQTtBQ05KO0FEU0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFNFO0VBQ0UsV0FyQ1U7QUM4QmQ7QURZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvZnJhbWV3b3JrL2ZyYW1ld29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXJ8Q2FiaW46NDAwLDcwMFwiKTtcclxuXHJcbiRibGFjay1jb2xvcjogIzAwMDtcclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDUzLCA1Myk7O1xyXG4gIGJvcmRlci1jb2xvcjogIzkxMTgyMTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQge1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgY29sb3I6ICAkd2hpdGUtY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDAsMCwwLCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW17XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgfVxyXG4gIC5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLypcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmssIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICRibGFjay1jb2xvcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjllYTg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYTJjZWQzO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuXHJcbi5iYWRnZS1kZWZhdWx0LCAuYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDFkMjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTExODIxO1xyXG59XHJcblxyXG5oNCBhLCBoNCBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaDQgc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogNjAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5oMSBzbWFsbCB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mYWNpbGl0aWVzIHNwYW4uYmFkZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjY1cmVtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXHJcbn1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmXHJcbiAgfVxyXG5cclxuKi9cclxuIiwiQGltcG9ydCB1cmwoXCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlcnxDYWJpbjo0MDAsNzAwXCIpO1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbn1cblxubGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xufVxuXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM1MzU7XG4gIGJvcmRlci1jb2xvcjogIzkxMTgyMTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDAsMCwwLCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5uYXZiYXItbGlnaHQgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluaywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICRibGFjay1jb2xvcjtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY5ZWE4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2FyZC1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjYTJjZWQzO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuLmJhZGdlLWRlZmF1bHQsIC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDFkMjg7XG4gIGJvcmRlci1jb2xvcjogIzkxMTgyMTtcbn1cblxuaDQgYSwgaDQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oNCBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBsaW5lLWhlaWdodDogMjAwJTtcbiAgY29sb3I6ICNhYWE7XG59XG5cbmgxIHNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5hZGRyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZmFjaWxpdGllcyBzcGFuLmJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwLjY1cmVtO1xufVxuXG5hIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVxufVxuXG4gIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmZcbiAgfVxuXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let FrameworkComponent = class FrameworkComponent {
    constructor(authenticationService, historyService) {
        this.authenticationService = authenticationService;
        this.historyService = historyService;
    }
    ngOnInit() {
    }
    doLogout() {
        this.authenticationService.logout();
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    getUsername() {
        const user = this.authenticationService.getCurrentUser();
        return user ? user.name : 'Guest';
    }
};
FrameworkComponent.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"] }
];
FrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-framework',
        template: __webpack_require__(/*! raw-loader!./framework.component.html */ "./node_modules/raw-loader/index.js!./src/app/framework/framework.component.html"),
        styles: [__webpack_require__(/*! ./framework.component.scss */ "./src/app/framework/framework.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
], FrameworkComponent);



/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let HistoryService = class HistoryService {
    constructor(router) {
        this.router = router;
        this.urls = [];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(routerEvent => routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe((routerEvent) => {
            const url = routerEvent.urlAfterRedirects;
            this.urls = [...this.urls, url];
        });
    }
    getLastNonLoginUrl() {
        const exclude = ['/register', '/login'];
        const filtered = this.urls.filter(url => !exclude.includes(url));
        const length = filtered.length;
        return length > 1 ? filtered[length - 1] : '/';
    }
};
HistoryService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HistoryService);



/***/ }),

/***/ "./src/app/iterator/pageIterator.ts":
/*!******************************************!*\
  !*** ./src/app/iterator/pageIterator.ts ***!
  \******************************************/
/*! exports provided: PageIterator, PagesCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIterator", function() { return PageIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesCollection", function() { return PagesCollection; });
class PageIterator {
    constructor(pages) {
        this.position = 0;
        this.pages = pages;
    }
    current() {
        return this.pages.getItems()[this.position];
    }
    selectedPageIndex() {
        return this.position;
    }
    next() {
        const item = this.pages.getItems()[this.position];
        this.position += 1;
        return item;
    }
    //vrati vyzadovanu stranu
    getPage(page) {
        const item = this.pages.getItems()[page];
        this.position = page;
        return item;
    }
    valid() {
        return this.position < this.pages.getCount();
    }
    getNumberPages() {
        return this.pages.getCount();
    }
}
PageIterator.ctorParameters = () => [
    { type: PagesCollection }
];
class PagesCollection {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    getCount() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    getIterator() {
        return new PageIterator(this);
    }
}


/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(router, authenticationService, historyService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.historyService = historyService;
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: '',
            details: '',
            imagePath: ''
        };
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        this.formError = '';
        if (!this.credentials.email || !this.credentials.password) {
            this.formError = 'All fields are required, please try again';
        }
        else {
            this.doLogin();
        }
    }
    doLogin() {
        this.authenticationService.login(this.credentials)
            .then(() => {
            this.router.navigateByUrl(this.historyService.getLastNonLoginUrl());
        })
            .catch((message) => {
            this.formError = message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/page-panel/comment/comment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/page-panel/comment/comment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 35px;\n  height: 35px;\n  border-radius: 40px;\n  padding: 3px;\n  float: left;\n  cursor: pointer;\n}\n\n.bg-custom {\n  background: #a5b3c0;\n  border-bottom: 1px solid #7a8692;\n  margin-bottom: 8px;\n  border-radius: 10px;\n  margin-left: -20px;\n}\n\n.item:hover {\n  border-bottom: 5px solid #32465a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1wYW5lbC9jb21tZW50L0Q6XFxzdHVcXERQXFxFZmZQcmVzcy1tYXN0ZXJcXGFwcF9wdWJsaWMvc3JjXFxhcHBcXHBhZ2UtcGFuZWxcXGNvbW1lbnRcXGNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UtcGFuZWwvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtcGFuZWwvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmctY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kOiAjYTViM2MwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2E4NjkyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzMyNDY1YTtcclxufVxyXG4iLCJpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iZy1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiAjYTViM2MwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdhODY5MjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMzMjQ2NWE7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-panel/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-panel/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page */ "./src/app/page.ts");



let CommentComponent = class CommentComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _page__WEBPACK_IMPORTED_MODULE_2__["Comment"])
], CommentComponent.prototype, "comment", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-panel/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/page-panel/comment/comment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommentComponent);



/***/ }),

/***/ "./src/app/page-panel/comments/comments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page-panel/comments/comments.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow-auto {\n  height: 95%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.customList {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1wYW5lbC9jb21tZW50cy9EOlxcc3R1XFxEUFxcRWZmUHJlc3MtbWFzdGVyXFxhcHBfcHVibGljL3NyY1xcYXBwXFxwYWdlLXBhbmVsXFxjb21tZW50c1xcY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UtcGFuZWwvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1wYW5lbC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVyZmxvdy1hdXRvIHtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmN1c3RvbUxpc3Qge1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4iLCIub3ZlcmZsb3ctYXV0byB7XG4gIGhlaWdodDogOTUlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5jdXN0b21MaXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-panel/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page-panel/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page */ "./src/app/page.ts");
/* harmony import */ var _page_panel_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-panel-data.service */ "./src/app/page-panel/page-panel-data.service.ts");




let CommentsComponent = class CommentsComponent {
    constructor(pagePanelDataService) {
        this.pagePanelDataService = pagePanelDataService;
        this.userComment = '';
        this.pagePanelDataService.pageChanged$.subscribe(page => {
            this.page = page;
            this.userComment = '';
            this.commentsList = this.page.getComments();
        });
    }
    ngOnInit() {
    }
    saveComment() {
        if (this.userComment) {
            console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + window.turingUserId + ", created comment: " + this.userComment);
            const newComment = new _page__WEBPACK_IMPORTED_MODULE_2__["Comment"](window.turingUserId, this.userComment);
            this.page.addComment(newComment);
            this.userComment = '';
        }
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _page_panel_data_service__WEBPACK_IMPORTED_MODULE_3__["PagePanelDataService"] }
];
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-panel/comments/comments.component.html"),
        styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/page-panel/comments/comments.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_page_panel_data_service__WEBPACK_IMPORTED_MODULE_3__["PagePanelDataService"]])
], CommentsComponent);



/***/ }),

/***/ "./src/app/page-panel/overview/overview.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/page-panel/overview/overview.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1wYW5lbC9vdmVydmlldy9EOlxcc3R1XFxEUFxcRWZmUHJlc3MtbWFzdGVyXFxhcHBfcHVibGljL3NyY1xcYXBwXFxwYWdlLXBhbmVsXFxvdmVydmlld1xcb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UtcGFuZWwvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLXBhbmVsL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4iLCIqIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-panel/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page-panel/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_panel_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-panel-data.service */ "./src/app/page-panel/page-panel-data.service.ts");



let OverviewComponent = class OverviewComponent {
    constructor(pagePanelDataService) {
        this.pagePanelDataService = pagePanelDataService;
        this.pagePosition = 1;
        this.pagePanelDataService.pageChanged$.subscribe(page => {
            this.page = page;
            this.pagePosition = page.pagePdfPosition + 1;
        });
    }
    ngOnInit() {
    }
};
OverviewComponent.ctorParameters = () => [
    { type: _page_panel_data_service__WEBPACK_IMPORTED_MODULE_2__["PagePanelDataService"] }
];
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: __webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-panel/overview/overview.component.html"),
        styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/page-panel/overview/overview.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_page_panel_data_service__WEBPACK_IMPORTED_MODULE_2__["PagePanelDataService"]])
], OverviewComponent);



/***/ }),

/***/ "./src/app/page-panel/page-panel-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-panel/page-panel-data.service.ts ***!
  \*******************************************************/
/*! exports provided: PagePanelDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePanelDataService", function() { return PagePanelDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let PagePanelDataService = class PagePanelDataService {
    constructor() { }
    setSubject(page) {
        this.pageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](page);
        this.pageChanged$ = this.pageSource.asObservable();
    }
    // Service message commands
    emitPage(changePage) {
        if (changePage) {
            window.turingSlideId = changePage._id;
            this.pageSource.next(changePage);
        }
    }
};
PagePanelDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagePanelDataService);



/***/ }),

/***/ "./src/app/page-panel/page-panel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/page-panel/page-panel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coloverlay {\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 35%;\n  z-index: 1;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n}\n\n.bg-custom {\n  background: #e4e2de;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1wYW5lbC9EOlxcc3R1XFxEUFxcRWZmUHJlc3MtbWFzdGVyXFxhcHBfcHVibGljL3NyY1xcYXBwXFxwYWdlLXBhbmVsXFxwYWdlLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlLXBhbmVsL3BhZ2UtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtcGFuZWwvcGFnZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvdmVybGF5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzNSU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYmctY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjYsIDIyMik7XHJcbn1cclxuIiwiLmNvbG92ZXJsYXkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzNSU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJnLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICNlNGUyZGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-panel/page-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page-panel/page-panel.component.ts ***!
  \****************************************************/
/*! exports provided: PagePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePanelComponent", function() { return PagePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page */ "./src/app/page.ts");

//import { AuthenticationService } from './../authentication.service';
//import { PagesDataService } from './../pages-data.service';


let PagePanelComponent = class PagePanelComponent {
    constructor(
    //private pagesDataService: PagesDataService,
    //private authenticationService: AuthenticationService
    ) {
        this.formVisible = false;
        this.newRating = {
            rating: 5,
            ratingQ: 5,
            ratingL: 5,
            author: ''
        };
    }
    ngOnInit() {
    }
    formIsValid() {
        if (this.newRating.rating) {
            return true;
        }
        else {
            return false;
        }
    }
    resetAndHideRatingForm() {
        this.formVisible = false;
        this.newRating.author = '';
        this.newRating.rating = 5;
        this.newRating.ratingQ = 5;
        this.newRating.ratingL = 5;
    }
    // public onRateSubmit(): void {
    //   this.formError = '';
    //   this.newRating.author = this.getUsername();
    //   if (this.formIsValid()) {
    //     console.log(this.newRating);
    //   } else {
    //     this.formError = 'Pre vloženie je potrebné vyplniť všetky polia';
    //   }
    // }
    isLoggedIn() {
        return !!window.turingUserId;
        //return this.authenticationService.isLoggedIn();
    }
    getUsername() {
        //const { name } = this.authenticationService.getCurrentUser();
        return name ? window.turingUserId : 'Guest';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _page__WEBPACK_IMPORTED_MODULE_2__["Page"])
], PagePanelComponent.prototype, "page", void 0);
PagePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-panel',
        template: __webpack_require__(/*! raw-loader!./page-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-panel/page-panel.component.html"),
        styles: [__webpack_require__(/*! ./page-panel.component.scss */ "./src/app/page-panel/page-panel.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagePanelComponent);



/***/ }),

/***/ "./src/app/page.ts":
/*!*************************!*\
  !*** ./src/app/page.ts ***!
  \*************************/
/*! exports provided: Rating, Page, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
// export class Page {
//     _id: string;
//     questionN: number;
//     testN: number;
//     commentsN: number;
//     ratingN: number;
//     rating: number;
//     ratingQ: number;
//     ratingL: number;
//     ratings: any;
//     pagePdfPosition: number;
// }
class Rating {
    constructor() {
        this.numLikes = 0;
        this.numDislikes = 0;
        this.usersRatedList = [];
    }
    addLike(userID) {
        //ak uz hodnotil
        if (this.getUserRating(userID)) {
            const user = this.getUserRating(userID);
            //ak hodnotil ako like odstrani hodnotenie
            if (user.ratedAs === "like") {
                this.usersRatedList = this.usersRatedList.filter(item => item !== this.getUserRating(userID));
                this.numLikes--;
                return false;
            }
        }
        else { // ak nehodnotil, prida hodnotu
            this.usersRatedList.push({ userID: userID, ratedAs: "like" });
            this.numLikes++;
            return true;
        }
    }
    addDislike(userID) {
        //ak uz hodnotil
        if (this.getUserRating(userID)) {
            const user = this.getUserRating(userID);
            //ak hodnotil ako like odstrani hodnotenie
            if (user.ratedAs === "dislike") {
                this.usersRatedList = this.usersRatedList.filter(item => item !== this.getUserRating(userID));
                this.numDislikes--;
                return false;
            }
        }
        else { // ak nehodnotil, prida hodnotu
            this.usersRatedList.push({ userID: userID, ratedAs: "dislike" });
            this.numDislikes++;
            return true;
        }
    }
    getUserRating(userID) {
        return this.usersRatedList.find(x => x.userID == userID);
    }
    canLike(userID) {
        let can = true;
        if (this.getUserRating(userID)) {
            can = !(this.getUserRating(userID).ratedAs === "like");
        }
        return can;
    }
    canDislike(userID) {
        let can = true;
        if (this.getUserRating(userID)) {
            can = !(this.getUserRating(userID).ratedAs === "dislike");
        }
        return can;
    }
}
class Page {
    constructor(postition) {
        this.comments = [];
        this._id = "page" + postition;
        this.ratingDifficulty = new Rating();
        this.ratingQualtiy = new Rating();
        this.ratingLook = new Rating();
        this.pagePdfPosition = postition;
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    getComments() {
        return this.comments;
    }
}
Page.ctorParameters = () => [
    { type: Number }
];
class Comment {
    constructor(userID, commentText) {
        this.userID = userID;
        this.commentText = commentText;
    }
}
Comment.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/pages-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/pages-data.service.ts ***!
  \***************************************/
/*! exports provided: PagesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDataService", function() { return PagesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let PagesDataService = class PagesDataService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
    }
    getPageById(pageId) {
        const url = `${this.apiBaseUrl}/pages/${pageId}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getPdfById(pdfId) {
        const url = `${this.apiBaseUrl}/pdfs/${pdfId}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    createPdf(pages) {
        const data = { numPages: pages };
        const url = `${this.apiBaseUrl}/pdfs`;
        return this.http
            .post(url, data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }
    addRatingByPdfPageId(pdfId, pageId, formData) {
        const url = `${this.apiBaseUrl}/pdfs/${pdfId}/pages/${pageId}`;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': `Bearer ${this.storage.getItem('effpress-token')}`
            })
        };
        return this.http
            .post(url, formData, httpOptions)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    login(user) {
        return this.makeAuthApiCall('login', user);
    }
    register(user) {
        return this.makeAuthApiCall('register', user);
    }
    makeAuthApiCall(urlPath, user) {
        const url = `${this.apiBaseUrl}/${urlPath}`;
        return this.http
            .post(url, user)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
};
PagesDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: Storage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_storage__WEBPACK_IMPORTED_MODULE_3__["BROWSER_STORAGE"],] }] }
];
PagesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_3__["BROWSER_STORAGE"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        Storage])
], PagesDataService);



/***/ }),

/***/ "./src/app/pdf-json-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/pdf-json-data.service.ts ***!
  \******************************************/
/*! exports provided: PdfJsonDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfJsonDataService", function() { return PdfJsonDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./src/app/pdf.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/app/page.ts");
/* harmony import */ var pdfs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfs.json */ "./pdfs.json");
var pdfs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! pdfs.json */ "./pdfs.json", 1);





let PdfJsonDataService = class PdfJsonDataService {
    constructor() {
        this.jsonFile = pdfs_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    findPdfInJson(filename) {
        let pdfs = JSON.stringify(this.jsonFile);
        let pdfsjson = JSON.parse(pdfs);
        let pdfFromFile = new _pdf__WEBPACK_IMPORTED_MODULE_2__["Pdf"];
        //najdenie pdf v Jsone
        pdfsjson.pdfs.forEach((pdf) => {
            if (pdf._id === filename) {
                pdfFromFile = this.loadPdfFromJson(pdf);
            }
        });
        return pdfFromFile;
    }
    loadPdfFromJson(jsonPdf) {
        let pdfFromJson = new _pdf__WEBPACK_IMPORTED_MODULE_2__["Pdf"]();
        pdfFromJson._id = jsonPdf._id;
        jsonPdf.pages.forEach((page, index) => {
            let tmpPage = new _page__WEBPACK_IMPORTED_MODULE_3__["Page"](index);
            tmpPage.pdfId = page.pdfId;
            let tmpRating = new _page__WEBPACK_IMPORTED_MODULE_3__["Rating"]();
            tmpRating.numLikes = page.ratingDifficulty.numLikes;
            tmpRating.numDislikes = page.ratingDifficulty.numDislikes;
            let tmpUsersRatedList = [];
            page.ratingDifficulty.usersRatedList.forEach((rating, index) => {
                tmpUsersRatedList.push({ userID: rating.userID, ratedAs: rating.ratedAs });
            });
            tmpRating.usersRatedList = tmpUsersRatedList;
            tmpPage.ratingDifficulty = tmpRating;
            let tmpRating2 = new _page__WEBPACK_IMPORTED_MODULE_3__["Rating"]();
            tmpRating2.numLikes = page.ratingQualtiy.numLikes;
            tmpRating2.numDislikes = page.ratingQualtiy.numDislikes;
            let tmpUsersRatedList2 = [];
            page.ratingQualtiy.usersRatedList.forEach((rating, index) => {
                tmpUsersRatedList2.push({ userID: rating.userID, ratedAs: rating.ratedAs });
            });
            tmpRating2.usersRatedList = tmpUsersRatedList2;
            tmpPage.ratingQualtiy = tmpRating2;
            let tmpRating3 = new _page__WEBPACK_IMPORTED_MODULE_3__["Rating"]();
            tmpRating3.numLikes = page.ratingLook.numLikes;
            tmpRating3.numDislikes = page.ratingLook.numDislikes;
            let tmpUsersRatedList3 = [];
            page.ratingLook.usersRatedList.forEach((rating, index) => {
                tmpUsersRatedList3.push({ userID: rating.userID, ratedAs: rating.ratedAs });
            });
            tmpRating3.usersRatedList = tmpUsersRatedList3;
            tmpPage.ratingLook = tmpRating3;
            page.comments.forEach((comment, index) => {
                let tmpComment = new _page__WEBPACK_IMPORTED_MODULE_3__["Comment"](comment.userID, comment.commentText);
                tmpPage.addComment(tmpComment);
            });
            pdfFromJson.addPage(tmpPage);
        });
        return pdfFromJson;
    }
    savePdfToJson(pdfJsonString) {
        //ulozenie noveho pdf do suboru
        console.log(JSON.stringify(pdfJsonString));
    }
};
PdfJsonDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PdfJsonDataService);



/***/ }),

/***/ "./src/app/pdf-page-view/pdf-page-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pdf-page-view/pdf-page-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BkZi1wYWdlLXZpZXcvcGRmLXBhZ2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pdf-page-view/pdf-page-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pdf-page-view/pdf-page-view.component.ts ***!
  \**********************************************************/
/*! exports provided: PdfPageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewComponent", function() { return PdfPageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../page */ "./src/app/page.ts");
/* harmony import */ var _iterator_pageIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../iterator/pageIterator */ "./src/app/iterator/pageIterator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_panel_page_panel_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page-panel/page-panel-data.service */ "./src/app/page-panel/page-panel-data.service.ts");
/* harmony import */ var _pdf_json_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../pdf-json-data.service */ "./src/app/pdf-json-data.service.ts");
/* harmony import */ var _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hhangular/pdfjs */ "./node_modules/@hhangular/pdfjs/fesm2015/hhangular-pdfjs.js");





//import { PagesDataService } from '../pages-data.service';



let PdfPageViewComponent = class PdfPageViewComponent {
    constructor(route, 
    //private pagesDataService: PagesDataService,
    pdfJsonDataService, pagePanelDataService) {
        this.route = route;
        this.pdfJsonDataService = pdfJsonDataService;
        this.pagePanelDataService = pagePanelDataService;
        this.pdfjsGroupControl = new _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_7__["PdfjsGroupControl"]();
        this.pdfjsControl = new _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_7__["PdfjsControl"]();
        this.pdfControls = {
            pdfjsGroupControl: this.pdfjsGroupControl,
            pageIterator: this.pageIterator,
            pdfjsControl: this.pdfjsControl
        };
    }
    ngOnInit() {
        window.turingUserId = "Tomas";
        const pdfFileName = "psi_03_manazment-poziadaviek.pdf";
        const pathToPdfsFolder = "assets/lectures/";
        this.pdf = this.pdfJsonDataService.findPdfInJson(pdfFileName);
        this.collection = new _iterator_pageIterator__WEBPACK_IMPORTED_MODULE_2__["PagesCollection"]();
        this.pageIterator = this.collection.getIterator();
        this.pdfjsControl.load(pathToPdfsFolder + pdfFileName, true).then((numPages) => {
            //ak sa pdf naslo v jsone, nacita ho
            if (this.pdf.getPdfId()) {
                window.turingLectureId = this.pdf.getPdfId();
                for (let i = 0; i < this.pdf.pages.length; i++) {
                    let page = this.pdf.pages[i];
                    if (page) {
                        this.collection.addItem(page);
                    }
                }
                this.page = this.pageIterator.current();
                window.turingSlideId = this.page._id;
                this.pagePanelDataService.setSubject(this.page);
            }
            else {
                this.pdf.setPdfId(pdfFileName + "a");
                window.turingLectureId = this.pdf.getPdfId();
                // //inicializacia iteratora
                this.initialiseIterator(numPages, this.pdf, () => {
                    this.page = this.pageIterator.current();
                    window.turingSlideId = this.page._id;
                    this.pagePanelDataService.setSubject(this.page);
                    //console.table(this.page);
                });
                //*********************** ak sa v json subore s pdf nenachadza zvolene pdf (hlada sa podla nazvu pdf), vlozi nove pdf do jsonu*/
                this.pdfJsonDataService.savePdfToJson(JSON.stringify(this.pdf));
            }
        });
        this.pdfjsGroupControl.selectControl(this.pdfjsControl);
        this.pdfControls.pdfjsGroupControl = this.pdfjsGroupControl;
        this.pdfControls.pageIterator = this.pageIterator;
    }
    initialiseIterator(numPages, pdf, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i <= numPages; i++) {
                const page = new _page__WEBPACK_IMPORTED_MODULE_1__["Page"](i);
                if (page) {
                    this.collection.addItem(page);
                    pdf.addPage(page);
                }
            }
            callback();
        });
    }
    //event zmeny page z child componentu- pdf-viewer-hhanguler
    onPageChange(newPage) {
        this.page = this.pageIterator.getPage(newPage);
        this.pagePanelDataService.emitPage(this.page);
    }
    setPage(pageIndex) {
        this.page = this.pageIterator.getPage(pageIndex);
        this.pagePanelDataService.emitPage(this.page);
    }
};
PdfPageViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _pdf_json_data_service__WEBPACK_IMPORTED_MODULE_6__["PdfJsonDataService"] },
    { type: _page_panel_page_panel_data_service__WEBPACK_IMPORTED_MODULE_5__["PagePanelDataService"] }
];
PdfPageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pdf-page-view',
        template: __webpack_require__(/*! raw-loader!./pdf-page-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pdf-page-view/pdf-page-view.component.html"),
        styles: [__webpack_require__(/*! ./pdf-page-view.component.scss */ "./src/app/pdf-page-view/pdf-page-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _pdf_json_data_service__WEBPACK_IMPORTED_MODULE_6__["PdfJsonDataService"],
        _page_panel_page_panel_data_service__WEBPACK_IMPORTED_MODULE_5__["PagePanelDataService"]])
], PdfPageViewComponent);



/***/ }),

/***/ "./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow-auto {\n  height: 95%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.customList {\n  height: 100%;\n}\n\n:host ::ng-deep pdfjs-thumbnail {\n  background-color: white;\n  margin-bottom: 10px;\n  padding-left: 3px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRmLXZpZXdlci1oaGFuZ3VsYXIvRDpcXHN0dVxcRFBcXEVmZlByZXNzLW1hc3RlclxcYXBwX3B1YmxpYy9zcmNcXGFwcFxccGRmLXZpZXdlci1oaGFuZ3VsYXJcXHBkZi12aWV3ZXItaGhhbmd1bGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wZGYtdmlld2VyLWhoYW5ndWxhci9wZGYtdmlld2VyLWhoYW5ndWxhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGRmLXZpZXdlci1oaGFuZ3VsYXIvcGRmLXZpZXdlci1oaGFuZ3VsYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmZsb3ctYXV0byB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jdXN0b21MaXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBwZGZqcy10aHVtYm5haWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIi5vdmVyZmxvdy1hdXRvIHtcbiAgaGVpZ2h0OiA5NSU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmN1c3RvbUxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBwZGZqcy10aHVtYm5haWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.ts ***!
  \************************************************************************/
/*! exports provided: PdfViewerHhangularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerHhangularComponent", function() { return PdfViewerHhangularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hhangular/pdfjs */ "./node_modules/@hhangular/pdfjs/fesm2015/hhangular-pdfjs.js");



let PdfViewerHhangularComponent = class PdfViewerHhangularComponent {
    constructor() {
        this.ThumbnailDragMode = _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["ThumbnailDragMode"];
        this.ThumbnailLayout = _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["ThumbnailLayout"];
        this.isNaN = isNaN;
        this.ViewFit = _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["ViewFit"];
        this.fit = _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["ViewFit"].HORIZONTAL;
        this.progress = 0;
        this.timeStart = 0;
        this.scale = 0.8;
        this.editMode = false;
        this.scalePercentage = 100;
        this.quality = 2;
        this.textEnable = false;
        this.changedPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pdfjsGroupControl = new _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["PdfjsGroupControl"]();
        this.pdfjsControl = new _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["PdfjsControl"]();
    }
    ngOnInit() {
        this.pdfjsGroupControl = this.pdfControls.pdfjsGroupControl;
        this.pdfjsControl = this.pdfControls.pdfjsControl;
        this.pageIterator = this.pdfControls.pageIterator;
        this.pdfjsControl.selectedIndex$.subscribe((number) => {
            if (number !== undefined) {
                this.changedPage.emit(number);
                console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + window.turingUserId + ", changed, new page position: " + number);
            }
        });
    }
    scalePlus() {
        this.scalePercentage += 10;
        this.scale += 0.1;
    }
    scaleMinus() {
        this.scalePercentage -= 10;
        this.scale -= 0.1;
    }
    renderHandler($event) {
        this.progress = ($event.page / $event.pages) * 100;
        if ($event.type === _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["RenderEventType"].START) {
            this.timeStart = $event.time;
        }
        else if ($event.type === _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_2__["RenderEventType"].END) {
            const time = $event.time - this.timeStart;
            const s = Math.trunc(time / 1000);
            const ms = time - s * 1000;
            console.log(`Render ${$event.pages} pages in ${s}s ${ms}ms`);
        }
    }
    changePageHandler(event) {
        //console.log(this.pdfjsGroupControl.selectPageIndex(parseInt((event.target as HTMLInputElement).value, 10)))
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PdfViewerHhangularComponent.prototype, "pdfControls", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PdfViewerHhangularComponent.prototype, "changedPage", void 0);
PdfViewerHhangularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pdf-viewer-hhangular',
        template: __webpack_require__(/*! raw-loader!./pdf-viewer-hhangular.component.html */ "./node_modules/raw-loader/index.js!./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.html"),
        styles: [__webpack_require__(/*! ./pdf-viewer-hhangular.component.scss */ "./src/app/pdf-viewer-hhangular/pdf-viewer-hhangular.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PdfViewerHhangularComponent);



/***/ }),

/***/ "./src/app/pdf-viewer/pdf-viewer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pdf-viewer/pdf-viewer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRmLXZpZXdlci9EOlxcc3R1XFxEUFxcRWZmUHJlc3MtbWFzdGVyXFxhcHBfcHVibGljL3NyY1xcYXBwXFxwZGYtdmlld2VyXFxwZGYtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wZGYtdmlld2VyL3BkZi12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wZGYtdmlld2VyL3BkZi12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pdf-viewer/pdf-viewer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pdf-viewer/pdf-viewer.component.ts ***!
  \****************************************************/
/*! exports provided: PdfViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerComponent", function() { return PdfViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*const PDFJS: PDFJSStatic = require('pdfjs-dist');

import * as pdfjsLib from 'pdfjs-dist/build/pdf';*/
const pdfjsLib = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
//pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.js'
pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.js';
let PdfViewerComponent = class PdfViewerComponent {
    constructor() {
        this.pageNumber = 1;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            pdfjsLib.disableWorker = true;
            try {
                yield this.loadPDFDocument();
            }
            catch (error) {
                this.errorMessage = error;
                console.log(error);
            }
        });
    }
    loadPDFDocument() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.canvas = this.getCanvasElementById('main-canvas');
            this.pdf = yield pdfjsLib.getDocument('./assets/test.pdf');
            this.totalPages = this.pdf.numPages;
            return yield this.generateView(this.pageNumber, this.canvas);
        });
    }
    getCanvasElementById(id) {
        const canvas = document.getElementById(id);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error(`"${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`);
        }
        return canvas;
    }
    generateView(pageNumber, canvas) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const page = yield this.pdf.getPage(pageNumber);
            const scale = 1;
            const viewport = page.getViewport({
                scale: scale
            });
            this.canvas.height = viewport.height;
            this.canvas.width = viewport.width;
            yield this.createRenderTask(page, canvas, viewport);
            this.setDisplayValues(this.canvas);
        });
    }
    createRenderTask(page, canvas, viewport) {
        const context = canvas.getContext('2d');
        const task = page.render({
            canvasContext: context,
            viewport: viewport,
        });
        return task;
    }
    setDisplayValues(canvas) {
        this.imgWidth = canvas.width;
        this.imgHeight = canvas.height;
        this.imgSrc = canvas.toDataURL();
    }
    changePagePrevious() {
        this.pageNumber = this.pageNumber - 1;
        if (this.pageNumber === 0) {
            alert('firstPage');
            this.pageNumber = 1;
        }
        else {
            this.generateView(this.pageNumber, this.canvas);
        }
    }
    changePageNext() {
        this.pageNumber = this.pageNumber + 1;
        if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
            alert('LastPage');
        }
        else {
            this.generateView(this.pageNumber, this.canvas);
        }
    }
};
PdfViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pdf-viewer',
        template: __webpack_require__(/*! raw-loader!./pdf-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pdf-viewer/pdf-viewer.component.html"),
        styles: [__webpack_require__(/*! ./pdf-viewer.component.scss */ "./src/app/pdf-viewer/pdf-viewer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PdfViewerComponent);



/***/ }),

/***/ "./src/app/pdf.ts":
/*!************************!*\
  !*** ./src/app/pdf.ts ***!
  \************************/
/*! exports provided: Pdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pdf", function() { return Pdf; });
class Pdf {
    constructor() {
        this.pages = [];
    }
    setPdfId(pdfId) {
        this._id = pdfId;
    }
    addPage(page) {
        this.pages.push(page);
    }
    getPdfId() {
        return this._id;
    }
}


/***/ }),

/***/ "./src/app/rating-likes/rating-likes.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/rating-likes/rating-likes.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1saWtlcy9yYXRpbmctbGlrZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rating-likes/rating-likes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rating-likes/rating-likes.component.ts ***!
  \********************************************************/
/*! exports provided: RatingLikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingLikesComponent", function() { return RatingLikesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../page */ "./src/app/page.ts");



let RatingLikesComponent = class RatingLikesComponent {
    constructor() {
        this.userId = window.turingUserId;
        this.actionLike = "+";
        this.actionDislike = "+";
    }
    ngOnInit() {
        console.log(this.ratingType.getUserRating(this.userId));
        if (!this.ratingType.canLike(window.turingUserId)) {
            this.actionDislike = "";
            this.actionLike = "-";
        }
        if (!this.ratingType.canDislike(window.turingUserId)) {
            this.actionDislike = "-";
            this.actionLike = "";
        }
    }
    likeClicked() {
        if (this.ratingType.addLike(this.userId)) {
            this.actionLike = "-";
            this.actionDislike = "";
            console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + this.userId + ", clicked Like, " + this.description);
        }
        else {
            this.actionLike = "+";
            this.actionDislike = "+";
            console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + this.userId + ", unclicked Like, " + this.description);
        }
    }
    disLikeClicked() {
        if (this.ratingType.addDislike(this.userId)) {
            this.actionLike = "";
            this.actionDislike = "-";
            console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + this.userId + ", clicked Dislike, " + this.description);
        }
        else {
            this.actionLike = "+";
            this.actionDislike = "+";
            console.log("pdf:" + window.turingLectureId + ", page: " + window.turingSlideId + ", user: " + this.userId + ", unclicked Dislike, " + this.description);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _page__WEBPACK_IMPORTED_MODULE_2__["Rating"])
], RatingLikesComponent.prototype, "ratingType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RatingLikesComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RatingLikesComponent.prototype, "size", void 0);
RatingLikesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating-likes',
        template: __webpack_require__(/*! raw-loader!./rating-likes.component.html */ "./node_modules/raw-loader/index.js!./src/app/rating-likes/rating-likes.component.html"),
        styles: [__webpack_require__(/*! ./rating-likes.component.scss */ "./src/app/rating-likes/rating-likes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingLikesComponent);



/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1zdGFycy9yYXRpbmctc3RhcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.ts ***!
  \********************************************************/
/*! exports provided: RatingStarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingStarsComponent", function() { return RatingStarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingStarsComponent = class RatingStarsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RatingStarsComponent.prototype, "rating", void 0);
RatingStarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating-stars',
        template: __webpack_require__(/*! raw-loader!./rating-stars.component.html */ "./node_modules/raw-loader/index.js!./src/app/rating-stars/rating-stars.component.html"),
        styles: [__webpack_require__(/*! ./rating-stars.component.scss */ "./src/app/rating-stars/rating-stars.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingStarsComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(router, authenticationService, historyService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.historyService = historyService;
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: '',
            details: '',
            imagePath: ''
        };
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        this.formError = '';
        if (!this.credentials.name ||
            !this.credentials.email ||
            !this.credentials.password) {
            this.formError = 'All fields are required, please try again';
        }
        else {
            this.doRegister();
        }
    }
    doRegister() {
        this.authenticationService.register(this.credentials)
            .then(() => {
            this.router.navigateByUrl(this.historyService.getLastNonLoginUrl());
        })
            .catch((message) => {
            this.formError = message;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hhangular/pdfjs */ "./node_modules/@hhangular/pdfjs/fesm2015/hhangular-pdfjs.js");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // =============== WORKER ===============
            _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_3__["PdfjsModule"].config({
                workerSrc: 'assets/pdf.worker.min.js',
                cMapUrl: 'assets/cmaps/',
                cMapPacked: true
            })
        ],
        exports: [
            _hhangular_pdfjs__WEBPACK_IMPORTED_MODULE_3__["PdfjsModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});


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
    apiBaseUrl: 'http://localhost:3000/api',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\stu\DP\EffPress-master\app_public\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map