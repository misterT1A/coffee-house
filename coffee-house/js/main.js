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
;// CONCATENATED MODULE: ./src/modules/main/main.js


const main = document.createElement('main');
main.append(main_enjoy_enjoy.enjoy, Favourites_Coffee_favorites.favoritesCoffe);
/* harmony default export */ var main_main = (main);
;// CONCATENATED MODULE: ./src/index.js



// components


const body = document.querySelector('body');
body.append(modules_header_header.header, main_main);
}();
/******/ })()
;
//# sourceMappingURL=main.js.map