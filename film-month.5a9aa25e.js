!function(){function n(n){return n&&n.__esModule?n.default:n}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("9mtRG",(function(e,a){var i=t("bpxeT"),o=t("2TvXO"),s=t("8LhE9");t("dBKQr");var l=t("3RRSf");n(i)(n(o).mark((function t(){var e,a,i,l;return n(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("/"===window.location.pathname||"/index.html"===window.location.pathname){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,(0,s.getRandomFilmOfMonth)();case 4:return e=n.sent,console.log("filmMonth",e),n.next=8,(0,s.getGenres)();case 8:a=n.sent,(i=document.querySelector(".film-month_wrapper"))&&(l=r(e,a),i.innerHTML=l);case 11:case"end":return n.stop()}}),t)})))();var r=function(n,t){var e=(window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2")+n.poster_path,a=n.overview,i=n.original_title,o=new Date(n.release_date),s=o.getDate().toString().padStart(2,"0"),r=(o.getMonth()+1).toString().padStart(2,"0"),c=o.getFullYear(),m="".concat(s," ").concat(r," ").concat(c),f=n.vote_average,d=n.vote_count,u=n.popularity,p=t.filter((function(t){return n.genre_ids.slice(0,2).includes(t.id)})).map((function(n){return n.name})).join(", ");return"\n    <div class='film-month_image'>\n      <img class='film-month_img' src='".concat(e,"' alt=''>\n    </div>\n    <div class='film-month_content'>\n      <div>\n        <h3 class='film-month_info-title'>").concat(i,"</h3>\n      </div>\n      <div class='film-month_info'>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Release date</span>\n          <span class='film-month_info-value film-month_info-year'>").concat(m,"</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Vote/Votes</span>\n          <span class='film-month_info-value'>\n            <span class='value-number'>").concat(f,"</span>\n             <span class='value-separator'>/</span>\n            <span class='value-number'>").concat(d,"</span>\n          </span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Popularity</span>\n          <span class='film-month_info-value span-value'>").concat((0,l.round)(u,10),"</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Genre</span>\n          <span class='film-month_info-value span-value'>").concat(p,"</span>\n        </div>\n      </div>\n      <div class='film-month_about'>\n        <h4 class='film-month_about-title'>About</h4>\n        <p class='film-month_about-description'>").concat(a,"</p>\n      </div>\n      <div class='film-month_button'>\n        <button class='film-month_button-add'>Add to my library</button>\n      </div>\n    </div>\n  ")}})),t.register("3RRSf",(function(n,t){var e,a,i,o;function s(n,t){return Math.round(n*t)/t}e=n.exports,a="round",i=function(){return s},Object.defineProperty(e,a,{get:i,set:o,enumerable:!0,configurable:!0})}))}();
//# sourceMappingURL=film-month.5a9aa25e.js.map