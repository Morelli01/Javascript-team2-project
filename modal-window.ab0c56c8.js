!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("9Vnll",(function(e,n){var o=t("dIxxU"),a=t("3RRSf"),i=t("cLNaR"),r=document.querySelector(".js_add_collection"),l=document.getElementById("modal"),c=document.querySelector(".modal-title-movie"),s=document.querySelector(".movie-details table tbody"),d=document.querySelector(".about-text"),u=document.querySelector(".modal-poster"),m=document.querySelector(".more-details");document.addEventListener("click",(function(e){(e.target.classList.contains("list_item")||e.target.closest(".list_item"))&&function(e){var t=e.dataset.filmId,n=function(e){var t="97fe01addf81f73693338979426ece1e",n="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat(t);o.default.get(n).then((function(e){var t=e.data.id,n=e.data,o=n.title,f=n.vote_count,y=n.vote_average,g=n.popularity,b=n.genres[0].name,h=n.overview,_="https://image.tmdb.org/t/p/w500"+n.poster_path,L=i.favoriteArr.some((function(e){return e.id===t}));r.textContent=L?"Remove from my library":"Add to my library",c.textContent=o,m.dataset.id="".concat(t),s.innerHTML="\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Vote/Votes</span>\n            <span class='film-month_info-value'>\n              <span class='value-number'>".concat((0,a.round)(y,10),"</span>\n              <span class='value-separator'>/</span>\n              <span class='value-number'>").concat(f,"</span>\n            </span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Popularity</span>\n            <span class='film-month_info-value span-value'>").concat((0,a.round)(g,10),"</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Genre</span>\n            <span class='film-month_info-value span-value'>").concat(b,"</span>\n          </div>\n        "),d.textContent=h,u.setAttribute("src",_),l.style.display="flex",document.body.classList.add("noScroll"),document.addEventListener("click",v),document.addEventListener("keydown",p)})).catch((function(e){console.error("Error getting movie information:",e)}))},f=function(){l.style.display="none",document.body.classList.remove("noScroll"),l.removeEventListener("click",v),document.removeEventListener("keydown",p)};l.querySelector(".modal-close-btn").addEventListener("click",f),l.querySelector(".modal-overlay").addEventListener("click",f);var v=function(e){e.target===l&&f()},p=function(e){"Escape"===e.key&&f()};e.addEventListener("click",(function(){n(t)}))}(e.target.classList.contains("list_item")?e.target:e.target.closest(".list_item"))})),r.addEventListener("click",i.onClickFilm)})),t.register("3RRSf",(function(t,n){function o(e,t){return Math.round(e*t)/t}e(t.exports,"round",(function(){return o})),e(t.exports,"getRandomNumber",(function(){return a})),e(t.exports,"renderStars",(function(){return i}));var a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function i(e,t){return e.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(t/2,';" aria-label="Rating of this film is ').concat(Math.round(t/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=modal-window.ab0c56c8.js.map
