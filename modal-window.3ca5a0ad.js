("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("9Vnll",function(e,t){document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("modal"),t=document.querySelector(".modal-title-movie"),o=document.querySelector(".movie-details table tbody"),d=document.querySelector(".about-text"),n=document.querySelector(".modal-poster"),l=l=>{let r=`https://api.themoviedb.org/3/movie/${l}?api_key=97fe01addf81f73693338979426ece1e`;fetch(r).then(e=>e.json()).then(l=>{let r=l.title,i=l.vote_count,a=l.popularity,c=l.genres[0].name,s=l.overview,u=l.poster_path;t.textContent=r,o.innerHTML=`
          <tr>
            <td>Vote / Votes</td>
            <td>${i}</td>
          </tr>
          <tr>
            <td>Popularity</td>
            <td>${a}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>${c}</td>
          </tr>
        `,d.textContent=s,n.setAttribute("src","https://image.tmdb.org/t/p/w500"+u),e.style.display="block"}).catch(e=>{console.error("Error getting movie information:",e)})},r=()=>{e.style.display="none"},i=document.getElementById("openModalButton");i.addEventListener("click",l);let a=e.querySelector(".modal-close-btn");a.addEventListener("click",r),window.addEventListener("click",t=>{t.target===e&&r()});let c=document.querySelectorAll(".movie-image");c.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.movieId;l(t)})})})});
//# sourceMappingURL=modal-window.3ca5a0ad.js.map
