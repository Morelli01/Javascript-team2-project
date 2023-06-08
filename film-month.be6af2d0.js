function n(n,t,i,a){Object.defineProperty(n,t,{get:i,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("6Tu2y",(function(n,i){var a=t("dK6vY"),e=t("dpMC2"),o=t("9Wu9X"),r=t("h3giK");let s=null;(async()=>{const n=document.querySelector(".film-month_wrapper");if(!n)return;(0,e.spinnerStart)();const t=await(0,a.getRandomFilmOfMonth)();s=t;const i=await(0,a.getCategoriesId)(t.id),o=await(0,a.getGenres)();n&&(n.innerHTML=l(t,o));document.querySelector(".film-month_button-add").addEventListener("click",(async n=>{const t=new(0,r.MovieLibrary),a=t.isFilmInLibrary(n.target.dataset.id),e=document.querySelector(".film-month_button-add");a?(console.log("removing"),t.removeFilmFromLibrary(i)):(console.log("adding"),t.addFilmToLibrary(i)),e.textContent=a?"Add film to library":"Remove film from library"})),(0,e.spinnerStop)()})();const l=(n,t)=>{const i=(window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2")+n.poster_path,a=n.overview,e=n.original_title,s=new Date(n.release_date),l=`${s.getDate().toString().padStart(2,"0")}.${(s.getMonth()+1).toString().padStart(2,"0")}.${s.getFullYear()}`,m=(new(0,r.MovieLibrary)).isFilmInLibrary(n.id),d=n.vote_average,f=n.vote_count,c=n.popularity,u=t.filter((t=>n.genre_ids.slice(0,2).includes(t.id))).map((({name:n})=>n)).join(", ");return`\n      <div class='film-month_image'>\n        <img class='film-month_img' src='${i}' alt=''>\n      </div>\n      <div class='film-month_content'>\n        <div>\n          <h3 class='film-month_info-title'>${e}</h3>\n        </div>\n        <div class='film-month_info'>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Release date</span>\n            <span class='film-month_info-value film-month_info-year'>${l}</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Vote/Votes</span>\n            <span class='film-month_info-value'>\n              <span class='value-number'>${d}</span>\n               <span class='value-separator'>/</span>\n              <span class='value-number'>${f}</span>\n            </span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Popularity</span>\n            <span class='film-month_info-value span-value'>${(0,o.round)(c,10)}</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Genre</span>\n            <span class='film-month_info-value span-value'>${u}</span>\n          </div>\n        </div>\n        <div class='film-month_about'>\n          <h4 class='film-month_about-title'>About</h4>\n          <p class='film-month_about-description'>${a}</p>\n        </div>\n        <div class='film-month_button'>\n          <button class='button film-month_button-add' data-id='${n.id}'>\n          ${m?"Remove from library":"Add to my library"}\n          </button>\n        </div>\n      </div>\n  `}})),t.register("9Wu9X",(function(t,i){function a(n,t){return Math.round(n*t)/t}n(t.exports,"round",(function(){return a})),n(t.exports,"getRandomNumber",(function(){return e})),n(t.exports,"renderStars",(function(){return o}));const e=(n,t)=>Math.floor(Math.random()*(t-n+1))+n;function o(n,t){return n.innerHTML=`\n    <div class="film_rating" style="--rating:${t/2};" aria-label="Rating of this film is ${Math.round(t/2)} out of 5."></div>\n`}})),t.register("h3giK",(function(t,i){n(t.exports,"MovieLibrary",(function(){return a}));class a{constructor(){this.library=[],this.loadLibraryFromLocalStorage()}loadLibraryFromLocalStorage(){const n=localStorage.getItem("favorite");this.library=n?JSON.parse(n):[]}saveLibraryToLocalStorage(){localStorage.setItem("favorite",JSON.stringify(this.library))}isFilmInLibrary(n){return this.library.some((t=>t.id==n))}addFilmToLibrary(n){this.library.push(n),this.saveLibraryToLocalStorage()}removeFilmFromLibrary(n){const t=this.library.findIndex((t=>t.id===n.id));-1!==t&&(this.library.splice(t,1),this.saveLibraryToLocalStorage())}}}));
//# sourceMappingURL=film-month.be6af2d0.js.map