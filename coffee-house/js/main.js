/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 934:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-1.jpg";

/***/ }),

/***/ 696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-2.jpg";

/***/ }),

/***/ 310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-3.jpg";

/***/ }),

/***/ 764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-4.jpg";

/***/ }),

/***/ 958:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-cup.svg";

/***/ }),

/***/ 796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-1.png";

/***/ }),

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.svg";

/***/ }),

/***/ 619:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mobile-screensLow.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

;// CONCATENATED MODULE: ./src/modules/utils/HtmlToElement.js
function toElement(HTMLString) {
  const template = document.createElement('template');
  template.innerHTML = HTMLString;
  return template.content.firstChild;
}
// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/modules/header/header.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(958), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var code = "<header class=\"header\"> <div class=\"container\"> <div class=\"header_wrapper\"> <img class=\"header_logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"> <nav class=\"nav\"> <ul class=\"nav_list\"> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#\">Favorite coffee</a></li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#\">About</a></li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#\">Mobile app</a></li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#\">Contact us</a></li> </ul> </nav> <div class=\"header_btn_wrapper\"> <a class=\"header_btn hover_border\" href=\"#\"> Menu <img class=\"header_btn_logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee-cup\"> </a> </div> </div> </div> </header>";
// Exports
/* harmony default export */ var header = (code);
;// CONCATENATED MODULE: ./src/modules/header/header.js



const header_header = toElement(header);
/* harmony default export */ var modules_header_header = ({
  header: header_header
});
;// CONCATENATED MODULE: ./src/modules/main/enjoy/enjoy.html
// Imports

var enjoy_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(958), __webpack_require__.b);
// Module
var enjoy_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(enjoy_HTML_LOADER_IMPORT_0_);
var enjoy_code = "<section id=\"enjoy\" class=\"enjoy\"> <div class=\"container\"> <div class=\"enjoy_wrapper\"> <div class=\"enjoy_inner\"> <h1 class=\"enjoy_title\"><span class=\"enjoy_word\">Enjoy</span> premium coffee at our charming cafe</h1> <span class=\"enjoy_description\">With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.</span> <a href=\"#\" class=\"enjoy_btn\"> <span class=\"enjoy_btn_text\">Menu</span> <img class=\"enjoy_btn_logo\" src=\"" + enjoy_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"coffee-cup\"> </a> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var enjoy = (enjoy_code);
;// CONCATENATED MODULE: ./src/modules/main/enjoy/enjoy.js



const enjoy_enjoy = toElement(enjoy);
/* harmony default export */ var main_enjoy_enjoy = ({
  enjoy: enjoy_enjoy
});
;// CONCATENATED MODULE: ./src/modules/main/Favourites_Coffee/favorites.html
// Imports

var favorites_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(796), __webpack_require__.b);
// Module
var favorites_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(favorites_HTML_LOADER_IMPORT_0_);
var favorites_code = "<section id=\"favoritesCoffe\" class=\"favorites\"> <div class=\"container\"> <div class=\"favorites_wrapper\"> <h2 class=\"favorites_title\">Choose your <span class=\"favorites_word\">favorite</span> coffee</h2> <div class=\"favorites_slider_inner\"> <div class=\"favorites_slider_wrapper\"> <div class=\"fav_clider_arrow\"> <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"transparent\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/> <path class=\"svg_arrow\" d=\"M36.5 30H24M24 30L30 24M24 30L30 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> <div class=\"fav_slider\"> <div class=\"fav_slider_content\"> <img src=\"" + favorites_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"coffe1\" class=\"fav_slider_img\"> <div class=\"fav_slider_cont_description\"> <h4 class=\"fav_slider_description_title\">S’mores Frappuccino</h4> <span class=\"fav_slider_description_text\">This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.</span> <span class=\"fav_slider_description_price\">$5.50</span> </div> </div> </div> <div class=\"fav_clider_arrow\"> <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"transparent\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/> <path class=\"svg_arrow\" d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> </div> <div class=\"favorites_slider_pagination_wrapper\"> <div class=\"fav_pag_inner\"> <div class=\"fav_pag_element fav_pag_active\"></div> <div class=\"fav_pag_element\"></div> <div class=\"fav_pag_element\"></div> </div> </div> </div> </div> </div></section>";
// Exports
/* harmony default export */ var favorites = (favorites_code);
;// CONCATENATED MODULE: ./src/modules/main/Favourites_Coffee/favorites.js



const favoritesCoffe = toElement(favorites);
/* harmony default export */ var Favourites_Coffee_favorites = ({
  favoritesCoffe
});
;// CONCATENATED MODULE: ./src/modules/main/About/about.html
// Imports

var about_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(934), __webpack_require__.b);
var about_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(696), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(310), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(764), __webpack_require__.b);
// Module
var about_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(about_HTML_LOADER_IMPORT_0_);
var about_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(about_HTML_LOADER_IMPORT_1_);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var about_code = "<section id=\"about\" class=\"about\"> <div class=\"container\"> <div class=\"about_wrapper\"> <h2 class=\"abou_title\">Resource is <span class=\"about_word\">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h2> <div class=\"about_imgs\"> <div class=\"about_left\"> <div class=\"about_elem\"> <img class=\"about_img\" src=\"" + about_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"about-1\"> </div> <div class=\"about_elem about_elem_min\"> <img class=\"about_img\" src=\"" + about_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"about-2\"> </div> </div> <div class=\"about_right\"> <div class=\"about_elem about_elem_min\"> <img class=\"about_img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"about-3\"> </div> <div class=\"about_elem\"> <img class=\"about_img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"about-4\"> </div> </div> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var about = (about_code);
;// CONCATENATED MODULE: ./src/modules/main/About/about.js



const about_about = toElement(about);
/* harmony default export */ var About_about = ({
  about: about_about
});
;// CONCATENATED MODULE: ./src/modules/main/Mobile App/mobile.html
// Imports

var mobile_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(619), __webpack_require__.b);
// Module
var mobile_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(mobile_HTML_LOADER_IMPORT_0_);
var mobile_code = "<section id=\"mobile\" class=\"mobile\"> <div class=\"container\"> <div class=\"mobile_wrapper\"> <div class=\"mobile_left_part\"> <div class=\"mobile_content\"> <h2 class=\"mobile_title\"><span class=\"mobile_word\">Download</span> our apps to start ordering</h2> <span class=\"mobile_desription\">Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</span> <div class=\"mobile_buttons\"> <a href=\"#\" class=\"mobile_btn\"> <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"icon\"> <g id=\"Icon\"> <g id=\"Vector\" class=\"svg_path\"> <path d=\"M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z\" fill=\"#403F3D\"/> <path d=\"M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z\" fill=\"#403F3D\"/> </g> </g> </g> </svg> <div class=\"mobile_btn_content\"> <span class=\"mobile_btn_title\">Available on the</span> <span class=\"mobile_btn_text\">App Store</span> </div> </a> <a href=\"#\" class=\"mobile_btn\"> <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"icon\"> <g id=\"Icon\" class=\"svg_path\"> <path id=\"Vector\" d=\"M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z\" fill=\"#403F3D\"/> <path id=\"Vector_2\" d=\"M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z\" fill=\"#403F3D\"/> <path id=\"Vector_3\" d=\"M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z\" fill=\"#403F3D\"/> <path id=\"Vector_4\" d=\"M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z\" fill=\"#403F3D\"/> </g> </g> </svg> <div class=\"mobile_btn_content\"> <span class=\"mobile_btn_title\">Available on the</span> <span class=\"mobile_btn_text\">Google Play</span> </div> </a> </div> </div> </div> <div class=\"mobile_right_part\"> <img class=\"mobile_img\" src=\"" + mobile_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"mobiles\"> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var mobile = (mobile_code);
;// CONCATENATED MODULE: ./src/modules/main/Mobile App/mobile.js



const mobile_mobile = toElement(mobile);
/* harmony default export */ var Mobile_App_mobile = ({
  mobile: mobile_mobile
});
;// CONCATENATED MODULE: ./src/modules/main/main.js




const main = document.createElement('main');
main.append(main_enjoy_enjoy.enjoy, Favourites_Coffee_favorites.favoritesCoffe, About_about.about, Mobile_App_mobile.mobile);
/* harmony default export */ var main_main = (main);
;// CONCATENATED MODULE: ./src/index.js



// components


const body = document.querySelector('body');
body.append(modules_header_header.header, main_main);
}();
/******/ })()
;
//# sourceMappingURL=main.js.map