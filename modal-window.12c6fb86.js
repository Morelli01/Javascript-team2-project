!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("9Vnll",(function(t,n){var o=e("dIxxU"),a=e("3RRSf"),i=e("cLNaR"),l=document.querySelector(".js_add_collection"),s=document.getElementById("modal"),c=document.querySelector(".modal-title-movie"),r=document.querySelector(".movie-details table tbody"),d=document.querySelector(".about-text"),m=document.querySelector(".modal-poster"),u=document.querySelector(".more-details");document.addEventListener("click",(function(e){(e.target.classList.contains("list_item")||e.target.closest(".list_item"))&&function(e){var t=e.dataset.filmId,n=function(e){var t="97fe01addf81f73693338979426ece1e",n="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat(t);o.default.get(n).then((function(e){var t=e.data.id,n=e.data,o=n.title,f=n.vote_count,y=n.vote_average,b=n.popularity,g=n.genres[0].name,_=n.overview,h="https://image.tmdb.org/t/p/w500"+n.poster_path,L=i.favoriteArr.some((function(e){return e.id===t}));l.textContent=L?"Remove from my library":"Add to my library",c.textContent=o,u.dataset.id="".concat(t),r.innerHTML="\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Vote/Votes</span>\n            <span class='film-month_info-value'>\n              <span class='value-number'>".concat((0,a.round)(y,10),"</span>\n              <span class='value-separator'>/</span>\n              <span class='value-number'>").concat(f,"</span>\n            </span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Popularity</span>\n            <span class='film-month_info-value span-value'>").concat((0,a.round)(b,10),"</span>\n          </div>\n          <div class='film-month_info-item'>\n            <span class='film-month_info-label'>Genre</span>\n            <span class='film-month_info-value span-value'>").concat(g,"</span>\n          </div>\n        "),d.textContent=_,m.setAttribute("src",h),s.style.display="flex",document.body.classList.add("noScroll"),document.addEventListener("click",v),document.addEventListener("keydown",p)})).catch((function(e){console.error("Error getting movie information:",e)}))},f=function(){s.style.display="none",document.body.classList.remove("noScroll"),s.removeEventListener("click",v),document.removeEventListener("keydown",p)};s.querySelector(".modal-close-btn").addEventListener("click",f),s.querySelector(".modal-overlay").addEventListener("click",f);var v=function(e){e.target===s&&f()},p=function(e){"Escape"===e.key&&f()};e.addEventListener("click",(function(){n(t)}))}(e.target.classList.contains("list_item")?e.target:e.target.closest(".list_item"))})),l.addEventListener("click",i.onClickFilm)}))}();
//# sourceMappingURL=modal-window.12c6fb86.js.map