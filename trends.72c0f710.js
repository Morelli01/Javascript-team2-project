!function(){function e(e){return e&&e.__esModule?e.default:e}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("jB4uu",(function(t,r){var a=n("bpxeT"),s=n("2TvXO"),i=n("8LhE9");e(a)(e(s).mark((function n(){var t,r,a,c,o,u,d,f,p,v,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getFilms)(1);case 2:return t=e.sent,r=t.results.slice(0,3),e.next=6,(0,i.getGenres)();case 6:if(a=e.sent,c="",o=!0,u=!1,d=void 0,!(window.innerWidth<=768)){e.next=16;break}return f=r[0],e.next=13,l(f,a);case 13:c=e.sent,e.next=41;break;case 16:e.prev=16,p=r[Symbol.iterator]();case 18:if(o=(v=p.next()).done){e.next=27;break}return h=v.value,e.t0=c,e.next=23,l(h,a);case 23:c=e.t0+=e.sent;case 24:o=!0,e.next=18;break;case 27:e.next=33;break;case 29:e.prev=29,e.t1=e.catch(16),u=!0,d=e.t1;case 33:e.prev=33,e.prev=34,o||null==p.return||p.return();case 36:if(e.prev=36,!u){e.next=39;break}throw d;case 39:return e.finish(36);case 40:return e.finish(33);case 41:document.querySelector(".weekly_trends_list").innerHTML=c;case 42:case"end":return e.stop()}}),n,null,[[16,29,33,41],[34,,36,40]])})))();var c,l=(c=e(a)(e(s).mark((function n(t,r){var a,i,c,l,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://image.tmdb.org/t/p/w600_and_h900_bestv2"+t.backdrop_path,i=t.original_title,c=t.release_date.split("-")[0],l=t.vote_average,o=r.filter((function(e){return t.genre_ids.slice(0,2).includes(e.id)})).map((function(e){return e.name})).join(", "),e.abrupt("return","<li class='weekly_trends_list_item film-1'>\n        <img src='".concat(a,"'>\n        <div class='weekly-trends_description'>\n          <div>\n            <h4 class='film_title'>").concat(i,"</h4>\n            <h5 class='film_description'>").concat(o,"<span class='separator'> | </span>").concat(c,"</h5>\n          </div>\n          <div class='rating'>").concat(l,"</div>\n        </div>\n      </li>"));case 7:case"end":return e.stop()}}),n)}))),function(e,n){return c.apply(this,arguments)})}))}();
//# sourceMappingURL=trends.72c0f710.js.map
