function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("1jMOh",(function(e,n){var o=t("2shzp"),a=t("9Wu9X"),i=t("g7c2E");const l=document.querySelector(".js_add_collection");document.addEventListener("click",(function(e){(e.target.classList.contains("list_item")||e.target.closest(".list_item"))&&function(){document.querySelectorAll("[data-film-id]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.filmId;c(t)}))}));const e=document.getElementById("modal"),t=document.querySelector(".modal-title-movie"),n=document.querySelector(".movie-details table tbody"),s=document.querySelector(".about-text"),r=document.querySelector(".modal-poster"),d=document.querySelector(".more-details"),c=c=>{const m=`${"https://api.themoviedb.org/3"}/movie/${c}?api_key=${"97fe01addf81f73693338979426ece1e"}`;o.default.get(m).then((o=>{const c=o.data.id,m=o.data,p=m.title,v=m.vote_count,y=m.vote_average,b=m.popularity,g=m.genres[0].name,h=m.overview,_="https://image.tmdb.org/t/p/w500"+m.poster_path,E=i.favoriteArr.some((e=>e.id===c));l.textContent=E?"Remove from my library":"Add to my library",t.textContent=p,d.dataset.id=`${c}`,n.innerHTML=`\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Vote/Votes</span>\n            <span class='film-month_info-value'>\n              <span class='value-number'>${(0,a.round)(y,10)}</span>\n              <span class='value-separator'>/</span>\n              <span class='value-number'>${v}</span>\n            </span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Popularity</span>\n            <span class='film-month_info-value span-value'>${(0,a.round)(b,10)}</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Genre</span>\n            <span class='film-month_info-value span-value'>${g}</span>\n          </div>\n        `,s.textContent=h,r.setAttribute("src",_),e.style.display="flex",document.body.classList.add("noScroll"),document.addEventListener("click",u),document.addEventListener("keydown",f)})).catch((e=>{console.error("Error getting movie information:",e)}))},m=()=>{e.style.display="none",document.body.classList.remove("noScroll"),e.removeEventListener("click",u),document.removeEventListener("keydown",f)};e.querySelector(".modal-close-btn").addEventListener("click",m);e.querySelector(".modal-overlay").addEventListener("click",m);const u=t=>{t.target===e&&m()},f=e=>{"Escape"===e.key&&m()}}()})),l.addEventListener("click",i.onClickFilm)})),t.register("9Wu9X",(function(t,n){function o(e,t){return Math.round(e*t)/t}e(t.exports,"round",(function(){return o})),e(t.exports,"getRandomNumber",(function(){return a})),e(t.exports,"renderStars",(function(){return i}));const a=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;function i(e,t){return e.innerHTML=`\n    <div class="film_rating" style="--rating:${t/2};" aria-label="Rating of this film is ${Math.round(t/2)} out of 5."></div>\n`}}));
//# sourceMappingURL=modal-window.c6ec170c.js.map
