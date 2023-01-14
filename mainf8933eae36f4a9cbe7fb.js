/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/enterBtn.js":
/*!************************************!*\
  !*** ./src/Components/enterBtn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enterSite": () => (/* binding */ enterSite)
/* harmony export */ });

function enterSite(){
    const layerHouse = document.querySelector(".layer-house");
    const layerClouds = document.querySelector(".layer-clouds");
    const layerForest = document.querySelector(".layer-forest");
    const layerNoHouse = document.querySelector(".layer-nohouse");
    const menuItems = document.querySelectorAll(".nav-options p");
    const nav = document.querySelector("nav");
    const navOptions = document.querySelector(".nav-options");

    document.querySelector(".enter-btn").style.opacity="0";
    setTimeout(()=>{
        nav.classList.add("nav-enter");
    },300);
    setTimeout(()=>{
        navOptions.style.display="flex";
        document.querySelector(".enter-btn").remove();
    }, 660);
    setTimeout(()=>{
        for(let i=0;i<3;i++){
            itemAppear(i);
        }
    }, 600);
    setTimeout(()=>{
        layerHouse.style.opacity="1";
    }, 1800);
    setTimeout(()=>{
        layerClouds.style.opacity="1";
        layerForest.style.opacity="1";
        layerNoHouse.style.opacity="0";
    },1850);
    function itemAppear(i){
        setTimeout(()=>{
            menuItems[i].style.opacity="1";
        },200 + (200*i));
    }
}

/***/ }),

/***/ "./src/Components/renderElements/renderBG.js":
/*!***************************************************!*\
  !*** ./src/Components/renderElements/renderBG.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBackground": () => (/* binding */ renderBackground)
/* harmony export */ });
const background = document.createElement("div");
background.classList.add("background");
function renderBackground(){  
    for(let i=0;i<4;i++){
        const layerContainer = document.createElement("div");
        layerContainer.classList.add("layer-container");
        const layer = document.createElement("img");
        layer.classList.add("layer");
        switch(i){
            case 0: 
            layer.classList.add("layer-nohouse");
            layer.src='/src/Assets/images/layer-nohouse.png';
            break;

            case 1:
            layer.classList.add("layer-house");
            layer.src='/src/Assets/images/layer-house.png';
            break;

            case 2:
            layer.classList.add("layer-clouds");
            layer.src='/src/Assets/images/layer-clouds.png';
            break;

            case 3:
            layer.classList.add("layer-forest");
            layer.src='/src/Assets/images/layer-forest.png';
        }
        layerContainer.appendChild(layer);
        background.appendChild(layerContainer);
    }
    
    document.body.prepend(background);
    
}

/***/ }),

/***/ "./src/Components/renderElements/renderNav.js":
/*!****************************************************!*\
  !*** ./src/Components/renderElements/renderNav.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
function renderNav(){
    const nav = document.createElement("nav");
    const title = document.createElement("div");
    const navOptions = document.createElement("div");
    title.classList.add("title")
    navOptions.classList.add("nav-options");
    for(let i=0;i<3;i++){
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        switch(i){
            case 0: 
            p.innerText="The Hunter's Inn"; 
            p2.innerText="Home";
            break;
            case 1: 
            p.innerText="ex natura ad laminam";
            p2.innerText="Menu";
            break;
            case 2:
            p2.innerText="Contacts";
        }
        if(i<2)title.appendChild(p);
        navOptions.appendChild(p2);

    }
    nav.appendChild(title);
    nav.appendChild(navOptions);
    document.body.appendChild(nav);

};



/***/ }),

/***/ "./src/Components/startPage.js":
/*!*************************************!*\
  !*** ./src/Components/startPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startPage": () => (/* binding */ startPage)
/* harmony export */ });
/* harmony import */ var _enterBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enterBtn */ "./src/Components/enterBtn.js");


function startPage(){
    const nav = document.querySelector("nav");
    const navOptions = document.querySelector(".nav-options");
    const enterBtn = document.createElement("button");

    navOptions.style.display="none";
    document.body.classList.add("body-enter")
    nav.appendChild(enterBtn);
    enterBtn.innerText="Enter Inn";
    enterBtn.classList.add("enter-btn")
    enterBtn.addEventListener("click", _enterBtn__WEBPACK_IMPORTED_MODULE_0__.enterSite)
}


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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_startPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/startPage */ "./src/Components/startPage.js");
/* harmony import */ var _Components_renderElements_renderBG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/renderElements/renderBG */ "./src/Components/renderElements/renderBG.js");
/* harmony import */ var _Components_renderElements_renderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/renderElements/renderNav */ "./src/Components/renderElements/renderNav.js");




(0,_Components_renderElements_renderBG__WEBPACK_IMPORTED_MODULE_1__.renderBackground)();
(0,_Components_renderElements_renderNav__WEBPACK_IMPORTED_MODULE_2__.renderNav)();
(0,_Components_startPage__WEBPACK_IMPORTED_MODULE_0__.startPage)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmY4OTMzZWFlMzZmNGE5Y2JlN2ZiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCdUM7O0FBRWhDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0RBQVM7QUFDaEQ7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDcUI7QUFDTjs7QUFFbEUscUZBQWdCO0FBQ2hCLCtFQUFTO0FBQ1QsZ0VBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQ29tcG9uZW50cy9lbnRlckJ0bi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQ29tcG9uZW50cy9yZW5kZXJFbGVtZW50cy9yZW5kZXJCRy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQ29tcG9uZW50cy9yZW5kZXJFbGVtZW50cy9yZW5kZXJOYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NvbXBvbmVudHMvc3RhcnRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBlbnRlclNpdGUoKXtcbiAgICBjb25zdCBsYXllckhvdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllci1ob3VzZVwiKTtcbiAgICBjb25zdCBsYXllckNsb3VkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItY2xvdWRzXCIpO1xuICAgIGNvbnN0IGxheWVyRm9yZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllci1mb3Jlc3RcIik7XG4gICAgY29uc3QgbGF5ZXJOb0hvdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllci1ub2hvdXNlXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LW9wdGlvbnMgcFwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1vcHRpb25zXCIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlci1idG5cIikuc3R5bGUub3BhY2l0eT1cIjBcIjtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWVudGVyXCIpO1xuICAgIH0sMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIG5hdk9wdGlvbnMuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlci1idG5cIikucmVtb3ZlKCk7XG4gICAgfSwgNjYwKTtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGZvcihsZXQgaT0wO2k8MztpKyspe1xuICAgICAgICAgICAgaXRlbUFwcGVhcihpKTtcbiAgICAgICAgfVxuICAgIH0sIDYwMCk7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBsYXllckhvdXNlLnN0eWxlLm9wYWNpdHk9XCIxXCI7XG4gICAgfSwgMTgwMCk7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBsYXllckNsb3Vkcy5zdHlsZS5vcGFjaXR5PVwiMVwiO1xuICAgICAgICBsYXllckZvcmVzdC5zdHlsZS5vcGFjaXR5PVwiMVwiO1xuICAgICAgICBsYXllck5vSG91c2Uuc3R5bGUub3BhY2l0eT1cIjBcIjtcbiAgICB9LDE4NTApO1xuICAgIGZ1bmN0aW9uIGl0ZW1BcHBlYXIoaSl7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIG1lbnVJdGVtc1tpXS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xuICAgICAgICB9LDIwMCArICgyMDAqaSkpO1xuICAgIH1cbn0iLCJjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZCgpeyAgXG4gICAgZm9yKGxldCBpPTA7aTw0O2krKyl7XG4gICAgICAgIGNvbnN0IGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGF5ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxheWVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFwibGF5ZXJcIik7XG4gICAgICAgIHN3aXRjaChpKXtcbiAgICAgICAgICAgIGNhc2UgMDogXG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFwibGF5ZXItbm9ob3VzZVwiKTtcbiAgICAgICAgICAgIGxheWVyLnNyYz0nL3NyYy9Bc3NldHMvaW1hZ2VzL2xheWVyLW5vaG91c2UucG5nJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFwibGF5ZXItaG91c2VcIik7XG4gICAgICAgICAgICBsYXllci5zcmM9Jy9zcmMvQXNzZXRzL2ltYWdlcy9sYXllci1ob3VzZS5wbmcnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoXCJsYXllci1jbG91ZHNcIik7XG4gICAgICAgICAgICBsYXllci5zcmM9Jy9zcmMvQXNzZXRzL2ltYWdlcy9sYXllci1jbG91ZHMucG5nJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKFwibGF5ZXItZm9yZXN0XCIpO1xuICAgICAgICAgICAgbGF5ZXIuc3JjPScvc3JjL0Fzc2V0cy9pbWFnZXMvbGF5ZXItZm9yZXN0LnBuZyc7XG4gICAgICAgIH1cbiAgICAgICAgbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGF5ZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGxheWVyQ29udGFpbmVyKTtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGJhY2tncm91bmQpO1xuICAgIFxufSIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcbiAgICBuYXZPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3B0aW9uc1wiKTtcbiAgICBmb3IobGV0IGk9MDtpPDM7aSsrKXtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBzd2l0Y2goaSl7XG4gICAgICAgICAgICBjYXNlIDA6IFxuICAgICAgICAgICAgcC5pbm5lclRleHQ9XCJUaGUgSHVudGVyJ3MgSW5uXCI7IFxuICAgICAgICAgICAgcDIuaW5uZXJUZXh0PVwiSG9tZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgcC5pbm5lclRleHQ9XCJleCBuYXR1cmEgYWQgbGFtaW5hbVwiO1xuICAgICAgICAgICAgcDIuaW5uZXJUZXh0PVwiTWVudVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBwMi5pbm5lclRleHQ9XCJDb250YWN0c1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmKGk8Mil0aXRsZS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgbmF2T3B0aW9ucy5hcHBlbmRDaGlsZChwMik7XG5cbiAgICB9XG4gICAgbmF2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2T3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuXG59O1xuXG4iLCJpbXBvcnQgeyBlbnRlclNpdGUgfSBmcm9tIFwiLi9lbnRlckJ0blwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQYWdlKCl7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtb3B0aW9uc1wiKTtcbiAgICBjb25zdCBlbnRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBuYXZPcHRpb25zLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1lbnRlclwiKVxuICAgIG5hdi5hcHBlbmRDaGlsZChlbnRlckJ0bik7XG4gICAgZW50ZXJCdG4uaW5uZXJUZXh0PVwiRW50ZXIgSW5uXCI7XG4gICAgZW50ZXJCdG4uY2xhc3NMaXN0LmFkZChcImVudGVyLWJ0blwiKVxuICAgIGVudGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnRlclNpdGUpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0YXJ0UGFnZSB9IGZyb20gXCIuL0NvbXBvbmVudHMvc3RhcnRQYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9yZW5kZXJFbGVtZW50cy9yZW5kZXJCR1wiO1xuaW1wb3J0IHsgcmVuZGVyTmF2IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9yZW5kZXJFbGVtZW50cy9yZW5kZXJOYXZcIjtcblxucmVuZGVyQmFja2dyb3VuZCgpO1xucmVuZGVyTmF2KCk7XG5zdGFydFBhZ2UoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=