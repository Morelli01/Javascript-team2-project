!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("cLNaR",(function(r,i){t(r.exports,"favoriteArr",(function(){return l})),t(r.exports,"onClickFilm",(function(){return f}));var o,a=n("bpxeT"),u=n("2TvXO"),s=n("8LhE9"),c="favorite",l=null!==(o=JSON.parse(localStorage.getItem(c)))&&void 0!==o?o:[];function f(e){return d.apply(this,arguments)}function d(){return(d=e(a)(e(u).mark((function t(n){var r,i,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,!(i=n.target.closest(".js_add_collection"))){e.next=19;break}return o=i.closest(".more-details").dataset.id,e.next=6,p(Number(o));case 6:if(!(r=e.sent)){e.next=19;break}if(!l.some((function(e){return e.id===r}))){e.next=13;break}l.splice(l.findIndex((function(e){return e.id===r})),1),localStorage.setItem(c,JSON.stringify(l)),i.textContent="Add to my library",e.next=19;break;case 13:return e.next=15,(0,s.getCategoriesId)(r);case 15:a=e.sent,l.push(a),localStorage.setItem(c,JSON.stringify(l)),i.textContent="Remove from my library";case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(e){return g.apply(this,arguments)}function g(){return(g=e(a)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getCategoriesId)(n);case 2:return r=e.sent,e.abrupt("return",r.id===n?r.id:null);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}}))}();
//# sourceMappingURL=modal-window.8c3cc8c5.js.map
