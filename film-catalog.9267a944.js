!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("7OEV3",(function(t,i){var r=n("bpxeT"),a=n("2TvXO"),o=n("8LhE9"),s=n("krKMH"),l=n("3RRSf"),c={ulEl:document.querySelector(".search_film_list"),inputEl:document.querySelector(".search_film_input"),divPagination:document.getElementById("pagination"),form:document.getElementById("form"),btnReset:document.querySelector(".btn_reset"),toTop:document.querySelector(".to_top"),falseResultMessage:document.querySelector(".cards__message")},u={},d=1,f="";function m(e){var t=e.map((function(e){var t=e.id,n=e.poster_path,i=e.original_title,r=e.genre_ids,a=e.release_date,o=e.vote_average,s=e.first_air_date,c=e.original_name,d=n?"https://image.tmdb.org/t/p/original".concat(n):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg",f=function(e,t){return void 0!==e?e.split("-")[0]:void 0!==t?t.split("-")[0]:""}(a,s),m=function(e){var t=[];void 0!==e&&(t=e.filter((function(e){return void 0!==e})).map((function(e){return u[e]?u[e]:"Film"})));t.length>2&&(t=t.slice(0,2));return 0===t.length?"Film":t.join(", ")}(r);return'<li class="search_film_img_wrap movie-image list_item" data-film-id=\''.concat(t,'\'>\n        <img loading="lazy" src="').concat(d,'" alt="').concat(c||i,'" width="395" height="574" class="search_film_img"/>\n        <div class="wrap">\n          <div class="search_film_wrap">\n            <p class="search_film_title">').concat(c||i,'</p>\n            <p class="search_film_genre">').concat(m," | ").concat(f,"</p> \n            <div class=\"stars\">\n            <div class='film_rating-wrapper'>\n              <div class='film_rating' style='--rating: ").concat(o/2,";' aria-label='Rating of this film is ").concat((0,l.round)(o/2,10)," out of 5.'></div>\n            </div>\n         </div>\n          </div>\n        </div>\n      </li>")})).join("");c.ulEl.innerHTML=t}function g(){return(g=e(r)(e(a).mark((function t(n){var i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),d=1,f=n.currentTarget.elements.film_name.value.trim(),c.divPagination.classList.add("display-hidden"),c.falseResultMessage.classList.add("display-hidden"),f.length>=1&&c.btnReset.classList.remove("is-hidden"),e.next=8,(0,o.getCategoriesQuery)(f,d);case 8:i=e.sent,c.ulEl.innerHTML="",m(i.results),p(i),h(i);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(e){e.total_results>20&&(c.divPagination.classList.remove("display-hidden"),(0,s.createPagination)(e.total_results,e.total_pages).on("afterMove",(function(e){d=e.page,(0,o.getCategoriesQuery)(f,d).then((function(e){m(e.results),window.scrollTo({top:450,behavior:"smooth"})})).catch((function(e){console.error("Error:",e)}))})))}function h(e){0===e.total_results&&c.falseResultMessage.classList.remove("display-hidden")}(0,o.getGenres)().then((function(e){return e.forEach((function(e){var t=e.id,n=e.name;u[t]=n})),(0,o.getFilms)(d)})).then((function(e){m(e.results),function(e){if(e.total_results>20){c.divPagination.classList.remove("display-hidden"),(0,s.createPagination)(e.total_results,e.total_pages).on("afterMove",(function(e){d=e.page,(0,o.getFilms)(d).then((function(e){m(e.results),window.scrollTo({top:450,behavior:"smooth"})})).catch((function(e){console.error("Error:",e)}))}))}}(e)})).catch((function(e){console.log(e)})),c.form.addEventListener("submit",(function(e){return g.apply(this,arguments)})),c.btnReset.addEventListener("click",(function(){c.btnReset.classList.add("is-hidden"),c.form.reset()}))})),n.register("3RRSf",(function(e,n){function i(e,t){return Math.round(e*t)/t}t(e.exports,"round",(function(){return i})),t(e.exports,"getRandomNumber",(function(){return r})),t(e.exports,"renderStars",(function(){return a}));var r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function a(e,t){return e.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(t/2,';" aria-label="Rating of this film is ').concat(Math.round(t/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=film-catalog.9267a944.js.map