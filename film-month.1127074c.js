var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("6Tu2y",function(t,a){var i=n("dK6vY"),e=n("dpMC2");(async()=>{if((0,e.spinnerStart)(),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname)return;let n=await (0,i.getRandomFilmOfMonth)();console.log("filmMonth",n);let t=await (0,i.getGenres)();(0,e.spinnerStop)();let a=document.querySelector(".film-month_wrapper");if(a){let i=l(n,t);a.innerHTML=i}})();let l=(n,t)=>{let a=window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2",i=a+n.poster_path,e=n.overview,l=n.original_title,s=new Date(n.release_date),o=s.getDate().toString().padStart(2,"0"),m=(s.getMonth()+1).toString().padStart(2,"0"),d=s.getFullYear(),f=`${o} ${m} ${d}`,p=n.vote_average,r=n.vote_count,h=n.popularity,c=t.filter(t=>n.genre_ids.slice(0,2).includes(t.id)).map(({name:n})=>n).join(", ");return`
    <div class='film-month_image'>
      <img class='film-month_img movie-image' src='${i}' alt=''>
    </div>
    <div class='film-month_content'>
      <div>
        <h3 class='film-month_info-title'>${l}</h3>
      </div>
      <div class='film-month_info'>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Release date</span>
          <span class='film-month_info-value film-month_info-year'>${f}</span>
        </div>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Vote/Votes</span>
          <span class='film-month_info-value'>
            <span class='value-number'>${p}</span>
             <span class='value-separator'>/</span>
            <span class='value-number'>${r}</span>
          </span>
        </div>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Popularity</span>
          <span class='film-month_info-value span-value'>${h}</span>
        </div>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Genre</span>
          <span class='film-month_info-value span-value'>${c}</span>
        </div>
      </div>
      <div class='film-month_about'>
        <h4 class='film-month_about-title'>About</h4>
        <p class='film-month_about-description'>${e}</p>
      </div>
      <div class='film-month_button'>
        <button class='film-month_button-add'>Add to my library</button>
      </div>
    </div>
  `}});
//# sourceMappingURL=film-month.1127074c.js.map
