var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("6Tu2y",(function(i,t){var a=n("dK6vY");(async()=>{const n=await(0,a.getRandomFilmOfMonth)();console.log("filmMonth",n);const i=await(0,a.getGenres)(),t=document.querySelector(".film-month_wrapper");if(t){const a=s(n,i);t.innerHTML=a}})();const s=(n,i)=>{const t="https://image.tmdb.org/t/p/w1066_and_h600_bestv2"+n.poster_path,a=n.overview,s=new Date(n.release_date);return`\n    <div class='film-month_image'>\n      <img class='film-month_img' src='${t}'>\n    </div>\n    <div class='film-month_content'>\n      <div>\n        <h3 class='film-month_info-title'>The lost city</h3>\n      </div>\n      <div class='film-month_info'>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Release date</span>\n          <span class='film-month_info-value film-month_info-year'>${`${s.getDate().toString().padStart(2,"0")} ${(s.getMonth()+1).toString().padStart(2,"0")} ${s.getFullYear()}`}</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Vote/Votes</span>\n          <span class='film-month_info-value'>\n            <span class='value-number'>${n.vote_average}</span>\n            <span class='value-number'>${n.vote_count}</span>\n          </span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Popularity</span>\n          <span class='film-month_info-value span-value'>${n.popularity}</span>\n        </div>\n        <div class='film-month_info-item'>\n          <span class='film-month_info-label'>Genre</span>\n          <span class='film-month_info-value span-value'>${i.filter((i=>n.genre_ids.slice(0,2).includes(i.id))).map((({name:n})=>n)).join(", ")}</span>\n        </div>\n      </div>\n      <div class='film-month_about'>\n        <h4 class='film-month_about-title'>About</h4>\n        <p class='film-month_about-description'>${a}</p>\n      </div>\n      <div class='film-month_button'>\n        <button class='film-month_button-add'>Add to my library</button>\n      </div>\n    </div>\n  `}}));
//# sourceMappingURL=film-month.ff81bcb8.js.map