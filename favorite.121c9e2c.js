!function(){function e(e,i,n,t){Object.defineProperty(e,i,{get:n,set:t,enumerable:!0,configurable:!0})}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;i.register("d5bOi",(function(e,n){var t,r,a=i("8LhE9"),o=i("3RRSf"),c=document.querySelector(".search_film_list"),s=document.querySelector(".library-section"),l=document.querySelector(".error-section"),d=null!==(t=JSON.parse(localStorage.getItem("favorite")))&&void 0!==t?t:[];(0,a.getGenres)().then((function(e){e.forEach((function(e){var i=e.id,n=e.name;categories[i]=n}))})).catch(Error),d.length>0?(s.classList.remove("display-hidden"),r=d.map((function(e){var i,n,t=e.poster_path,r=e.original_name,a=e.original_title,c=e.genre_ids,s=e.release_date,l=e.vote_average,d=e.first_air_date,f=e.id,u=t?"https://image.tmdb.org/t/p/original".concat(t):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg",g=function(e,i){return void 0!==e?e.split("-")[0]:void 0!==i?i.split("-")[0]:""}(s,d),m=(n=[],void 0!==(i=c)&&(n=i.filter((function(e){return void 0!==e})).map((function(e){return categories[e]?categories[e]:"Film"}))),n.length>2&&(n=n.slice(0,2)),0===n.length?"Film":n.join(", "));return'<li class="search_film_img_wrap movie-image list_item" data-film-id=\''.concat(f,'\'>\n        <img loading="lazy" src="').concat(u,'" alt="').concat(r||a,'" width="395" height="574" class="search_film_img"/>\n        <div class="wrap">\n          <div class="search_film_wrap">\n            <p class="search_film_title">').concat(r||a,'</p>\n            <p class="search_film_genre">').concat(m," | ").concat(g,"</p> \n            <div class=\"stars\">\n            <div class='film_rating-wrapper'>\n              <div class='film_rating' style='--rating: ").concat(l/2,";' aria-label='Rating of this film is ").concat((0,o.round)(l/2,10)," out of 5.'></div>\n            </div>\n         </div>\n          </div>\n        </div>\n      </li>")})).join(""),c.innerHTML=r):l.classList.remove("display-hidden")})),i.register("3RRSf",(function(i,n){function t(e,i){return Math.round(e*i)/i}e(i.exports,"round",(function(){return t})),e(i.exports,"getRandomNumber",(function(){return r})),e(i.exports,"renderStars",(function(){return a}));var r=function(e,i){return Math.floor(Math.random()*(i-e+1))+e};function a(e,i){return e.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(i/2,';" aria-label="Rating of this film is ').concat(Math.round(i/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=favorite.121c9e2c.js.map