!function(){function n(n){return n&&n.__esModule?n.default:n}function t(n,t,e,a){Object.defineProperty(n,t,{get:e,set:a,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("9mtRG",(function(t,a){var i=e("bpxeT"),o=e("2TvXO"),r=e("8LhE9"),s=e("dBKQr"),l=e("3RRSf"),c=e("cLNaR");n(i)(n(o).mark((function t(){var e,a,i;return n(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.spinnerStart)(),e=document.querySelector(".film-month_wrapper")){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,(0,r.getRandomFilmOfMonth)();case 6:return a=n.sent,console.log("filmMonth",a),n.next=10,(0,r.getGenres)();case 10:i=n.sent,e&&(e.innerHTML=m(a,i));case 12:case"end":return n.stop()}}),t)})))(),(0,s.spinnerStop)();var f=document.querySelector(".film-month_wrapper"),m=function(n,t){var e=(window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2")+n.poster_path,a=n.overview,i=n.original_title,o=new Date(n.release_date),r=o.getDate().toString().padStart(2,"0"),s=(o.getMonth()+1).toString().padStart(2,"0"),f=o.getFullYear(),m="".concat(r,".").concat(s,".").concat(f),u=n.vote_average,d=n.vote_count,p=n.popularity,v=n.id,h=c.favoriteArr.some((function(n){return n.id===v}))?"Remove from my library":"Add to my library",_=t.filter((function(t){return n.genre_ids.slice(0,2).includes(t.id)})).map((function(n){return n.name})).join(", ");return"\n    <li data-id='".concat(v,">\n      <div class='film-month_image'>\n        <img class='film-month_img' src='").concat(e,"' alt='' loading=\"lazy\">\n      </div>\n      <div class='film-month_content'>\n        <div>\n          <h3 class='film-month_info-title'>").concat(i,"</h3>\n        </div>\n        <div class='film-month_info'>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Release date</span>\n            <span class='film-month_info-value film-month_info-year'>").concat(m,"</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Vote/Votes</span>\n            <span class='film-month_info-value'>\n              <span class='value-number'>").concat(u,"</span>\n               <span class='value-separator'>/</span>\n              <span class='value-number'>").concat(d,"</span>\n            </span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Popularity</span>\n            <span class='film-month_info-value span-value'>").concat((0,l.round)(p,10),"</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Genre</span>\n            <span class='film-month_info-value span-value'>").concat(_,"</span>\n          </div>\n        </div>\n        <div class='film-month_about'>\n          <h4 class='film-month_about-title'>About</h4>\n          <p class='film-month_about-description'>").concat(a,"</p>\n        </div>\n        <div class='film-month_button'>\n          <button class='button film-month_button-add' data-id=\"").concat(v,'">').concat(h,"</button>\n        </div>\n      </div>\n    </li>\n  ")};f.addEventListener("click",c.onClickFilm)})),e.register("3RRSf",(function(n,e){function a(n,t){return Math.round(n*t)/t}t(n.exports,"round",(function(){return a})),t(n.exports,"getRandomNumber",(function(){return i})),t(n.exports,"renderStars",(function(){return o}));var i=function(n,t){return Math.floor(Math.random()*(t-n+1))+n};function o(n,t){return n.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(t/2,';" aria-label="Rating of this film is ').concat(Math.round(t/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=film-month.95b17c77.js.map
