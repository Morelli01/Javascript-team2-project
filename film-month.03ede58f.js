var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("6Tu2y",(function(t,a){var i=n("dK6vY");(async()=>{if(spinnerStart(),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname)return;const n=await(0,i.getRandomFilmOfMonth)();console.log("filmMonth",n);const t=await(0,i.getGenres)();spinnerStop();const a=document.querySelector(".film-month_wrapper");if(a){const i=s(n,t);a.innerHTML=i}})();const s=(n,t)=>{const a=(window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2")+n.poster_path,i=n.overview,s=n.original_title,e=new Date(n.release_date);return`\n    <div class='film-month_image'>\n      <img class='film-month_img movie-image' src='${a}' alt=''>\n    </div>\n    <div class='film-month_content'>\n      <div>\n        <h3 class='film-month_info-title'>${s}</h3>\n      </div>\n      <div class='film-month_info'>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Release date</span>\n          <span class='film-month_info-value film-month_info-year'>${`${e.getDate().toString().padStart(2,"0")} ${(e.getMonth()+1).toString().padStart(2,"0")} ${e.getFullYear()}`}</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Vote/Votes</span>\n          <span class='film-month_info-value'>\n            <span class='value-number'>${n.vote_average}</span>\n             <span class='value-separator'>/</span>\n            <span class='value-number'>${n.vote_count}</span>\n          </span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Popularity</span>\n          <span class='film-month_info-value span-value'>${n.popularity}</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Genre</span>\n          <span class='film-month_info-value span-value'>${t.filter((t=>n.genre_ids.slice(0,2).includes(t.id))).map((({name:n})=>n)).join(", ")}</span>\n        </div>\n      </div>\n      <div class='film-month_about'>\n        <h4 class='film-month_about-title'>About</h4>\n        <p class='film-month_about-description'>${i}</p>\n      </div>\n      <div class='film-month_button'>\n        <button class='film-month_button-add'>Add to my library</button>\n      </div>\n    </div>\n  `}}));
//# sourceMappingURL=film-month.03ede58f.js.map
