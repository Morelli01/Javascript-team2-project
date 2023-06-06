!function(){var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("9mtRG",function(t,a){var i=n("8LhE9");(async()=>{let n=await (0,i.getRandomFilmOfMonth)();console.log("filmMonth",n);let t=await (0,i.getGenres)(),a=document.querySelector(".film-month_wrapper");if(a){let i=e(n,t);a.innerHTML=i}})();let e=(n,t)=>{let a=window.innerWidth<=600?"https://image.tmdb.org/t/p/w600_and_h900_bestv2":"https://image.tmdb.org/t/p/w1066_and_h600_bestv2",i=a+n.poster_path,e=n.overview,l=new Date(n.release_date),s=l.getDate().toString().padStart(2,"0"),o=(l.getMonth()+1).toString().padStart(2,"0"),m=l.getFullYear(),f=`${s} ${o} ${m}`,d=n.vote_average,p=n.vote_count,h=n.popularity,c=t.filter(t=>n.genre_ids.slice(0,2).includes(t.id)).map(({name:n})=>n).join(", ");return`
    <div class='film-month_image'>
      <img class='film-month_img' src='${i}'>
    </div>
    <div class='film-month_content'>
      <div>
        <h3 class='film-month_info-title'>The lost city</h3>
      </div>
      <div class='film-month_info'>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Release date</span>
          <span class='film-month_info-value film-month_info-year'>${f}</span>
        </div>
        <div class='film-month_info-item'>
          <span class='film-month_info-label'>Vote/Votes</span>
          <span class='film-month_info-value'>
            <span class='value-number'>${d}</span>
             <span class='value-separator'>/</span>
            <span class='value-number'>${p}</span>
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
  `}})}();
//# sourceMappingURL=film-month.6c3b1056.js.map
