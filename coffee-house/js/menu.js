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

/***/ 677:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/favicon-32x32.png";

/***/ }),

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.svg";

/***/ }),

/***/ 532:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-1.jpg";

/***/ }),

/***/ 755:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-2.jpg";

/***/ }),

/***/ 348:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-3.jpg";

/***/ }),

/***/ 263:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-4.jpg";

/***/ }),

/***/ 338:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-5.jpg";

/***/ }),

/***/ 863:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-6.jpg";

/***/ }),

/***/ 917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-7.jpg";

/***/ }),

/***/ 505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-8.jpg";

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
/******/ 			860: 0
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

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/menu.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(677), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>menu</title> <link href=\"https://fonts.cdnfonts.com/css/inter\" rel=\"stylesheet\"> <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> </head> <body> </body> </html>";
// Exports
/* harmony default export */ var menu = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/modules/utils/HtmlToElement.js
function toElement(HTMLString) {
  const template = document.createElement('template');
  template.innerHTML = HTMLString;
  return template.content.firstChild;
}
;// CONCATENATED MODULE: ./src/modules/header/header.html
// Imports

var header_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(958), __webpack_require__.b);
// Module
var header_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(header_HTML_LOADER_IMPORT_0_);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var header_code = "<header class=\"header\"> <div class=\"container\"> <div class=\"header_wrapper\"> <a class=\"header_main_page\" href=\"./index.html\"> <img class=\"header_logo\" src=\"" + header_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"logo\"> </a> <div class=\"nav_wrapper\"> <nav class=\"nav\"> <ul class=\"nav_list\"> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#favoritesCoffe\">Favorite coffee</a></li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#about\">About</a> </li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#mobile\">Mobile app</a> </li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#footer\">Contact us</a> </li> </ul> </nav> <div class=\"header_btn_wrapper\"> <a class=\"header_btn hover_border\" href=\"./menu.html\"> Menu <img class=\"header_btn_logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee-cup\"> </a> </div> </div> <div class=\"burger_btn\"> <span class=\"burger_btn_icon\"></span> </div> </div> </div> </header>";
// Exports
/* harmony default export */ var header = (header_code);
;// CONCATENATED MODULE: ./src/modules/header/header.js



const header_header = toElement(header);
/* harmony default export */ var modules_header_header = ({
  header: header_header
});
const mainPageBtn = document.querySelector('.header_main_page');
const menuBtn = document.querySelector('.header_btn');
console.log(menuBtn);

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.add('active');
// });
;// CONCATENATED MODULE: ./src/modules/menu/menu.html
// Imports

var menu_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(532), __webpack_require__.b);
var menu_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(755), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(348), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(263), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(338), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(863), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(917), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(505), __webpack_require__.b);
// Module
var menu_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(menu_HTML_LOADER_IMPORT_0_);
var menu_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(menu_HTML_LOADER_IMPORT_1_);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var menu_code = "<section id=\"menu\" class=\"menu\"> <div class=\"container\"> <div class=\"menu_wrapper\"> <h2 class=\"menu_title\">Behind each of our cups hides an <span class=\"menu_word\">amazing surprise</span> </h2> <div class=\"menu_pagination\"> <div class=\"menu_btn btn_active\"> <svg class=\"menu_btn_icon\" width=\"31\" height=\"30\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <rect x=\"0.5\" width=\"30\" height=\"30\" rx=\"15\" fill=\"#E1D4C9\"/> <path d=\"M7.5 23.12H23.5V7.12H7.5V23.12Z\" fill=\"url(#patternCoffe)\"/> <defs> <pattern id=\"patternCoffe\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_1_2394\" transform=\"scale(0.015625)\"/> </pattern> <image id=\"image0_1_2394\" width=\"64\" height=\"64\" xlink:href=\"data:image/png;base64,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\"/> </defs> </svg> <span class=\"menu_btn_text\">Coffee</span> </div> <div class=\"menu_btn\"> <svg class=\"menu_btn_icon\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <rect width=\"30\" height=\"30\" rx=\"15\" fill=\"#C1B6AD\"/> <path d=\"M7 23.12H23V7.12H7V23.12Z\" fill=\"url(#patternTea)\"/> <defs> <pattern id=\"patternTea\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_118_1084\" transform=\"scale(0.015625)\"/> </pattern> <image id=\"image0_118_1084\" width=\"64\" height=\"64\" xlink:href=\"data:image/png;base64,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\"/> </defs> </svg> <span class=\"menu_btn_text\">Tea</span> </div> <div class=\"menu_btn\"> <svg class=\"menu_btn_icon\" width=\"31\" height=\"30\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <rect x=\"0.5\" width=\"30\" height=\"30\" rx=\"15\" fill=\"#C1B6AD\"/> <path d=\"M7.5 23.12H23.5V7.12H7.5V23.12Z\" fill=\"url(#patternDesert)\"/> <defs> <pattern id=\"patternDesert\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_1_2384\" transform=\"scale(0.015625)\"/> </pattern> <image id=\"image0_1_2384\" width=\"64\" height=\"64\" xlink:href=\"data:image/png;base64,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\"/> </defs> </svg> <span class=\"menu_btn_text\">Dessert</span> </div> </div> <div class=\"menu_content\"> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + menu_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Irish coffee</div> <div class=\"menu_item_desription\">Fragrant black coffee with Jameson Irish whiskey and whipped milk</div> <div class=\"menu_item_price\">$7.00</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + menu_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Kahlua coffee</div> <div class=\"menu_item_desription\">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</div> <div class=\"menu_item_price\">$7.00</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Honey raf</div> <div class=\"menu_item_desription\">Espresso with frothed milk, cream and aromatic honey</div> <div class=\"menu_item_price\">$5.50</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Ice cappuccino</div> <div class=\"menu_item_desription\">Cappuccino with soft thick foam in summer version with ice </div> <div class=\"menu_item_price\">$5.00</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Espresso</div> <div class=\"menu_item_desription\">Classic black coffee</div> <div class=\"menu_item_price\">$4.50</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Latte</div> <div class=\"menu_item_desription\">Espresso coffee with the addition of steamed milk and dense milk foam</div> <div class=\"menu_item_price\">$5.50</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Latte macchiato</div> <div class=\"menu_item_desription\">Espresso with frothed milk and chocolate</div> <div class=\"menu_item_price\">$5.50</div> </div> </div> <div class=\"menu_item\"> <div class=\"menu_item_img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"coffe\"> </div> <div class=\"menu_item_content\"> <div class=\"menu_item_title\">Coffee with cognac</div> <div class=\"menu_item_desription\">Fragrant black coffee with cognac and whipped cream </div> <div class=\"menu_item_price\">$6.50</div> </div> </div> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var menu_menu = (menu_code);
;// CONCATENATED MODULE: ./src/modules/menu/menu.js



const menu_menu_menu = toElement(menu_menu);
/* harmony default export */ var modules_menu_menu = ({
  menu: menu_menu_menu
});
;// CONCATENATED MODULE: ./src/modules/footer/footer.html
// Module
var footer_code = "<footer id=\"footer\" class=\"footer\"> <div class=\"container\"> <div class=\"footer_wrapper\"> <div class=\"footer_left\"> <h2 class=\"footer_title\">Sip, Savor, Smile. <span class=\"footer_word\">It’s coffee time!</span></h2> <div class=\"footer_social\"> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\" stroke=\"#E1D4C9\"/> <path d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> </div> <div class=\"footer_right\"> <h3 class=\"footer_contacts\">Contact us</h3> <ul class=\"footer_contact_list\"> <li class=\"footer_contact_item\"><a class=\"footer_link footer_border\" href=\"https://maps.app.goo.gl/wnpKrwLwXwXnsNwj8\" target=\"_blank\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"pin-alt\"> <path id=\"Ellipse\" d=\"M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\"/> <path id=\"Vector\" d=\"M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z\" fill=\"#E1D4C9\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> </svg> <span class=\"footer_link_text\">8558 Green Rd., LA</span> </a></li> <li class=\"footer_contact_item\"><a class=\"footer_link footer_border\" href=\"tel:+1 (603) 555-0123\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"phone\"> <path id=\"Path\" d=\"M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> </svg> <span class=\"footer_link_text\">+1 (603) 555-0123</span> </a></li> <li class=\"footer_contact_item\"><span class=\"footer_link_date\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"clock\" clip-path=\"url(#clip0_217_1736)\"> <path id=\"Vector\" d=\"M10 5L10 10L15 10\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path id=\"Vector_2\" d=\"M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> <defs> <clipPath id=\"clip0_217_1736\"> <rect width=\"20\" height=\"20\" fill=\"white\"/> </clipPath> </defs> </svg> <span class=\"footer_link_text\">Mon-Sat: 9:00 AM – 23:00 PM</span> </span></li> </ul> </div> </div> </div> </footer>";
// Exports
/* harmony default export */ var footer = (footer_code);
;// CONCATENATED MODULE: ./src/modules/footer/footer.js



const footer_footer = toElement(footer);
/* harmony default export */ var modules_footer_footer = ({
  footer: footer_footer
});
;// CONCATENATED MODULE: ./src/menu.js





const bodyMenu = document.querySelector('body');
bodyMenu.append(modules_header_header.header, modules_menu_menu.menu, modules_footer_footer.footer);
const menu_menuBtn = document.querySelector('.header_btn');
menu_menuBtn.classList.add('menu_active');
}();
/******/ })()
;
//# sourceMappingURL=menu.js.map