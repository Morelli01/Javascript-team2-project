!function(){function n(n){return n&&n.__esModule?n.default:n}function t(n,t,e,a){Object.defineProperty(n,t,{get:e,set:a,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("9mtRG",(function(t,a){var i=e("bpxeT"),o=e("2TvXO"),s=e("8LhE9"),l=e("dBKQr"),r=e("3RRSf");n(i)(n(o).mark((function t(){var e,a,i;return n(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,l.spinnerStart)(),e=document.querySelector(".film-month_wrapper")){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,(0,s.getRandomFilmOfMonth)();case 6:return a=n.sent,console.log("filmMonth",a),n.next=10,(0,s.getGenres)();case 10:i=n.sent,e&&(e.innerHTML=c(a,i));case 12:case"end":return n.stop()}}),t)})))(),(0,l.spinnerStop)();var c=function(n,t){var e=(window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2")+n.poster_path,a=n.overview,i=n.original_title,o=new Date(n.release_date),s=o.getDate().toString().padStart(2,"0"),l=(o.getMonth()+1).toString().padStart(2,"0"),c=o.getFullYear(),f="".concat(s," ").concat(l," ").concat(c),m=n.vote_average,u=n.vote_count,d=n.popularity,p=t.filter((function(t){return n.genre_ids.slice(0,2).includes(t.id)})).map((function(n){return n.name})).join(", ");return"\n    <div class='film-month_image'>\n      <img class='film-month_img' src='".concat(e,"' alt=''>\n    </div>\n    <div class='film-month_content'>\n      <div>\n        <h3 class='film-month_info-title'>").concat(i,"</h3>\n      </div>\n      <div class='film-month_info'>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Release date</span>\n          <span class='film-month_info-value film-month_info-year'>").concat(f,"</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Vote/Votes</span>\n          <span class='film-month_info-value'>\n            <span class='value-number'>").concat(m,"</span>\n             <span class='value-separator'>/</span>\n            <span class='value-number'>").concat(u,"</span>\n          </span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Popularity</span>\n          <span class='film-month_info-value span-value'>").concat((0,r.round)(d,10),"</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Genre</span>\n          <span class='film-month_info-value span-value'>").concat(p,"</span>\n        </div>\n      </div>\n      <div class='film-month_about'>\n        <h4 class='film-month_about-title'>About</h4>\n        <p class='film-month_about-description'>").concat(a,"</p>\n      </div>\n      <div class='film-month_button'>\n        <button class='button film-month_button-add'>Add to my library</button>\n      </div>\n    </div>\n  ")}})),e.register("3RRSf",(function(n,e){function a(n,t){return Math.round(n*t)/t}t(n.exports,"round",(function(){return a})),t(n.exports,"getRandomNumber",(function(){return i})),t(n.exports,"renderStars",(function(){return o}));var i=function(n,t){return Math.floor(Math.random()*(t-n+1))+n};function o(n,t){return n.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(t/2,';" aria-label="Rating of this film is ').concat(Math.round(t/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=film-month.f3961202.js.map
