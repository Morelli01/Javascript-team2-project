var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("4xSxD",function(i,t){var l=e("dK6vY");(async()=>{let e=await (0,l.getFilms)(1),i=e.results.slice(0,3),t=await (0,l.getGenres)(),s="";if(window.innerWidth<=768){let e=i[0];s=await a(e,t)}else for(let e of i)s+=await a(e,t);document.querySelector(".weekly_trends_list").innerHTML=s})();let a=async(e,i)=>{let t="https://image.tmdb.org/t/p/w600_and_h900_bestv2"+e.backdrop_path,l=e.original_title,a=e.release_date.split("-")[0],s=e.vote_average,n=i.filter(i=>e.genre_ids.slice(0,2).includes(i.id)).map(({name:e})=>e).join(", ");return`<li class='weekly_trends_list_item' data-film-id='${e.id}'>
        <img src='${t}'>
        <div class='weekly-trends_description'>
          <div>
            <h4 class='film_title'>${l}</h4>
            <h5 class='film_description'>${n}<span class='separator'> | </span>${a}</h5>
          </div>
          <div class='rating'>${s}</div>
        </div>
      </li>`},s=document.querySelector(".link_to_catalog");s&&s.addEventListener("click",()=>{window.location.href="https://www.themoviedb.org/movie/603692-john-wick-chapter-4"})});
//# sourceMappingURL=trends.b1604e8f.js.map
