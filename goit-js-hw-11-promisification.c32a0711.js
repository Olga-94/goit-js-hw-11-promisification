parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Voqb":[function(require,module,exports) {
var n=function(n){return console.log("Resolved after ".concat(n,"ms"))},e=function(n){return new Promise(function(e,t){setTimeout(function(){e(n)},n)})};e(2e3).then(n),e(1e3).then(n),e(1500).then(n);
},{}],"lxcc":[function(require,module,exports) {
function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?e(Object(c),!0).forEach(function(e){r(t,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(e,r){return new Promise(function(n){n(e.map(function(e){return e.name===r?t(t({},e),{},{active:!e.active}):e}))})},o=function(e){return console.table(e)};c(n,"Mango").then(o),c(n,"Lux").then(o);
},{}],"urHD":[function(require,module,exports) {
var n=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},t=function(t){return new Promise(function(a,o){var c=n(200,500);setTimeout(function(){Math.random()>.3?a({id:t.id,delay:c}):o(t.id)},c)})},a=function(n){console.log("Transaction ".concat(n.id," processed in ").concat(n.delay,"ms"))},o=function(n){console.warn("Error processing transaction ".concat(n,". Please try again later."))};t({id:70,amount:150}).then(a).catch(o),t({id:71,amount:230}).then(a).catch(o),t({id:72,amount:75}).then(a).catch(o),t({id:73,amount:100}).then(a).catch(o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./task-js/task-1"),require("./task-js/task-2"),require("./task-js/task-3");
},{"./task-js/task-1":"Voqb","./task-js/task-2":"lxcc","./task-js/task-3":"urHD"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/goit-js-hw-11-promisification.c32a0711.js.map