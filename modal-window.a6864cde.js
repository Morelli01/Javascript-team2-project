function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("1jMOh",(function(e,n){var o=t("2shzp"),r=t("9Wu9X");"loading"!==document.readyState?console.log("11"):console.log("21"),document.addEventListener("click",(function(e){(e.target.classList.contains("weekly_trends_list_item")||e.target.closest(".weekly_trends_list_item"))&&function(){const e=document.getElementById("modal");console.log(2,document.querySelectorAll("li")),e.style.display="none";const t=document.querySelector(".modal-title-movie"),n=document.querySelector(".movie-details table tbody"),l=document.querySelector(".about-text"),d=document.querySelector(".modal-poster"),i=i=>{const a=`${"https://api.themoviedb.org/3"}/movie/${i}?api_key=${"97fe01addf81f73693338979426ece1e"}`;o.default.get(a).then((o=>{const i=o.data,a=i.title,s=i.vote_count,c=i.vote_average,u=i.popularity,f=i.genres[0].name,m=i.overview,g="https://image.tmdb.org/t/p/w500"+i.poster_path;t.textContent=a,n.innerHTML=`\n            <tr>\n              <td>Vote / Votes</td>\n              <td class='value-number'>${(0,r.round)(c,10)}</td>\n              <td class='value-separator'>/</td>\n              <td class='value-number'>${s}</td>\n            </tr>\n            <tr>\n              <td>Popularity</td>\n              <td>${(0,r.round)(u,10)}</td>\n            </tr>\n            <tr>\n              <td>Genre</td>\n              <td>${f}</td>\n            </tr>\n          `,l.textContent=m,d.setAttribute("src",g),e.style.display="flex"})).catch((e=>{console.error("Error getting movie information:",e)}))},a=()=>{e.style.display="none"};e.querySelector(".modal-close-btn").addEventListener("click",a),window.addEventListener("click",(t=>{t.target===e&&a()}));const s=document.querySelectorAll("[data-film-id]");console.log(1,s),s.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.filmId;console.log(e.dataset),i(t)}))}))}()}))})),t.register("9Wu9X",(function(t,n){function o(e,t){return Math.round(e*t)/t}e(t.exports,"round",(function(){return o})),e(t.exports,"getRandomNumber",(function(){return r})),e(t.exports,"renderStars",(function(){return l}));const r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;function l(e,t){return e.innerHTML=`\n    <div class="film_rating" style="--rating:${t/2};" aria-label="Rating of this film is ${Math.round(t/2)} out of 5."></div>\n`}}));
//# sourceMappingURL=modal-window.a6864cde.js.map
