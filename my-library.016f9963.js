!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("j5MaG",(function(t,n){var r,o,c,u;r=t.exports,o="filmAPI",c=function(){return v},Object.defineProperty(r,o,{get:c,set:u,enumerable:!0,configurable:!0});var s=a("bpxeT"),i=a("8MBJY"),l=a("a2hTj"),p=a("2TvXO"),g=a("dIxxU"),d="https://api.themoviedb.org/3",f="468c2ebbcd20d786d16a982ad3dded4a",v=function(){"use strict";function t(){e(i)(this,t),this.page=1,this.total_pages=0,this.total_results=0}return e(l)(t,[{key:"getCategories",value:function(){var t=this;return e(s)(e(p).mark((function n(){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/all/week",e.next=3,g.default.get("".concat(d,"/").concat("trending/all/week","?api_key=").concat(f,"&page=").concat(t.page,"&language=en-US"));case 3:return r=e.sent.data,e.prev=4,t.total_pages=r.total_pages,t.total_results=r.total_results,e.abrupt("return",r.results);case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),n,null,[[4,10]])})))()}},{key:"getCategoriesGenres",value:function(){var t=this;return e(s)(e(p).mark((function n(){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"genre/movie/list",e.next=3,g.default.get("".concat(d,"/").concat("genre/movie/list","?api_key=").concat(f,"&page=").concat(t.page,"&language=en-US"));case 3:return r=e.sent.data,e.prev=4,e.abrupt("return",r.genres);case 8:e.prev=8,e.t0=e.catch(4),console.log(e.t0);case 11:case"end":return e.stop()}}),n,null,[[4,8]])})))()}},{key:"getCategoriesQuery",value:function(t){var n=this;return e(s)(e(p).mark((function r(){var a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"search/movie",e.next=3,g.default.get("".concat(d,"/").concat("search/movie","?api_key=").concat(f,"&query=").concat(t,"&page=").concat(n.page,"&language=en-US"));case 3:return a=e.sent.data,e.prev=4,e.abrupt("return",a.results);case 8:e.prev=8,e.t0=e.catch(4),console.log(e.t0);case 11:case"end":return e.stop()}}),r,null,[[4,8]])})))()}}]),t}()})),a("j5MaG")}();
//# sourceMappingURL=my-library.016f9963.js.map