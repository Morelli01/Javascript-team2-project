var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("4xSxD",(function(i,t){var n=e("dK6vY");e("dpMC2"),(async()=>{if("/"!==window.location.pathname&&"/index.html"!==window.location.pathname)return;const e=(await(0,n.getFilms)(1)).results.slice(0,3),i=await(0,n.getGenres)();let t="";if(window.innerWidth<=768){const n=e[0];t=await a(n,i)}else for(const n of e)t+=await a(n,i);document.querySelector(".weekly_trends_list").innerHTML=t})();const a=async(e,i)=>{const t="https://image.tmdb.org/t/p/w600_and_h900_bestv2"+e.backdrop_path,n=e.original_title,a=e.release_date.split("-")[0],l=e.vote_average,s=i.filter((i=>e.genre_ids.slice(0,2).includes(i.id))).map((({name:e})=>e)).join(", ");return`<li class='weekly_trends_list_item' data-film-id='${e.id}'>\n        <img class='movie-image' src='${t}' alt=''>\n        <div class='weekly-trends_description'>\n          <div class='flex-wrap'>\n            <h4 class='film_title'>${n}</h4>\n            <div class='flex-wrap-rating'>\n            <h5 class='film_description'>${s}<span class='separator'>|</span>${a}</h5>\n            <div class='film_rating-wrapper'>\n              <div class="film_rating" style="--rating: ${l/2};" aria-label="Rating of this product is 2.3 out of 5."></div>\n            </div></div>\n\n          </div>\n        </div>\n      </li>`},l=document.querySelector(".link_to_catalog");l&&l.addEventListener("click",(()=>{window.location.href="https://www.themoviedb.org/movie/603692-john-wick-chapter-4"}))}));
//# sourceMappingURL=trends.0f8241fa.js.map