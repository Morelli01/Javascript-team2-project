var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("4xSxD",function(i,t){var a=e("dK6vY"),l=e("dpMC2");(async()=>{if((0,l.spinnerStart)(),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname)return;let e=await (0,a.getFilms)(1),i=e.results.slice(0,3),t=await (0,a.getGenres)(),s="";if(window.innerWidth<=768){let e=i[0];s=await n(e,t)}else for(let e of i)s+=await n(e,t);(0,l.spinnerStop)(),document.querySelector(".weekly_trends_list").innerHTML=s})();let n=async(e,i)=>{let t="https://image.tmdb.org/t/p/w600_and_h900_bestv2"+e.backdrop_path,a=e.original_title,l=e.release_date.split("-")[0],n=e.vote_average,s=i.filter(i=>e.genre_ids.slice(0,2).includes(i.id)).map(({name:e})=>e).join(", ");return`<li class='weekly_trends_list_item' data-film-id='${e.id}'>
        <img class='movie-image' src='${t}' alt=''>
        <div class='weekly-trends_description'>
          <div class='flex-wrap'>
            <h4 class='film_title'>${a}</h4>
            <div class='flex-wrap-rating'>
            <h5 class='film_description'>${s}<span class='separator'> | </span>${l}</h5>
            <div class='film_rating-wrapper'>
              <div class="film_rating" style="--rating: ${n/2};" aria-label="Rating of this product is 2.3 out of 5."></div>
            </div></div>

          </div>
        </div>
      </li>`},s=document.querySelector(".link_to_catalog");s&&s.addEventListener("click",()=>{window.location.href="https://www.themoviedb.org/movie/603692-john-wick-chapter-4"})});
//# sourceMappingURL=trends.085a7161.js.map
