function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("6q4Ta",(function(e,n){var o=t("2shzp"),s=t("9Wu9X"),i=t("g7c2E");let r;t("i5zXd");const a=document.querySelector(".hero"),d=document.querySelector(".hero-title"),c=document.querySelector(".hero-text"),l=document.querySelector(".hero-getstarted-btn"),m=document.querySelector(".hero-moredetails-btn"),u=document.querySelector(".rating-box"),h=document.querySelector(".trailer-modal"),p=document.querySelector(".trailer-svg-close"),v=document.querySelector(".hero-more-deteils"),g=document.querySelector(".hero-moredetails-btn"),y=document.querySelector(".modal-overlay");let L=document.documentElement.clientWidth;function b(e){"Escape"===e.key&&(h.classList.add("ishidden"),l.classList.remove("blocked-element"),v.classList.add("ishidden"),g.classList.remove("blocked-element"),y.classList.add("ishidden"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",b),p.classList.contains("inother-position")&&r.pauseVideo())}function f(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-getstarted-btn")||h.contains(e.target)||(h.classList.add("ishidden"),l.classList.remove("blocked-element"),g.classList.remove("blocked-element"),document.removeEventListener("click",f),document.removeEventListener("keydown",b))}function k(){v.classList.remove("ishidden"),y.classList.remove("ishidden"),g.classList.add("blocked-element"),l.classList.add("blocked-element"),document.body.classList.add("noScroll"),document.addEventListener("keydown",b),document.addEventListener("click",I)}function I(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-moredetails-btn")||e.target===y&&(v.classList.add("ishidden"),y.classList.add("ishidden"),g.classList.remove("blocked-element"),l.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",b),document.removeEventListener("click",I))}function E(){v.classList.add("ishidden"),y.classList.add("ishidden"),g.classList.remove("blocked-element"),l.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",b),document.removeEventListener("click",I)}function w(e){e.preventDefault(),g.classList.add("blocked-element"),l.classList.add("blocked-element"),h.classList.remove("ishidden"),document.addEventListener("keydown",b),document.addEventListener("click",f)}function N(){h.classList.add("ishidden"),g.classList.remove("blocked-element"),l.classList.remove("blocked-element"),document.removeEventListener("keydown",b),p.classList.contains("inother-position")&&r.pauseVideo()}L<768&&(c.textContent=c.textContent.slice(0,120)),L>=768&&(c.textContent=c.textContent.slice(0)),async function(){return(await o.default.request({method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}})).data}().then((e=>{const{title:t="",name:n="",overview:h="",backdrop_path:y="",id:b,vote_average:f,popularity:I,poster_path:x,vote_count:S,genre_ids:J}=e.results[(0,s.getRandomNumber)(0,20)];(async function(){return(await o.default.request({method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}})).data.genres})().then((e=>{const n=[];e.map((e=>{J.map((t=>{t===e.id&&n.push(e.name)}))})),function(e,t,n,o,s,r,a,d){const c=i.favoriteArr.some((t=>t.id===e))?"Remove from my library":"Add to my library";v.innerHTML=`\n    <p  class="hero-more-svg">X</p>\n  <div class="hero-more-poster"  style="background:url('https://image.tmdb.org/t/p/w300${t}');  \n  background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n\n  ">\n  </div>\n   </div>\n\n   <div class="hero-more-deteils-info js_add_id" data-id="${e}">\n  <h2 class="hero-more-title">${n}</h2>\n  <div class="hero-more-container">\n    <div class="hero-more-wrapper">\n      <p class="hero-more-specification">Vote / Votes</p>\n      <p class="hero-more-specification">Popularity</p>\n      <p class="hero-more-specification">Genre</p>\n    </div>\n    <div class="hero-more-box">\n      <p class="hero-more-stats"> <span class="hero-more-accent">${o.toFixed(1)}</span>\n        <span class="hero-more-slash">/</span> <span class="hero-more-accent">${Math.round(a)}</span>\n      </p>\n      <p class="hero-more-stats">${s}</p>\n      <p class="hero-more-stats">${d}</p>\n    </div>\n  </div>\n\n  <p class="hero-more-about">About</p>\n\n  <p class="hero-more-descriptions">${r}</p>\n      <button class="hero-more_deteils-add_btn js_add_collection">${c}</button>\n\n  </div>\n\n  `}(b,x,t,f,I,h,S,n.join(" "));document.querySelector(".hero-more-svg").addEventListener("click",E);document.querySelector(".js_add_collection").addEventListener("click",i.onClickFilm)})),async function(e){const t={method:"GET",url:`https://api.themoviedb.org/3/movie/${e}/videos`,params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}};return(await o.default.request(t)).data.results}(b).then((e=>{0!==e.length&&(!function(e){r=new YT.Player("trailer-video",{height:"240",width:"320",videoId:`${e}`})}(e[(0,s.getRandomNumber)(0,e.length)].key),p.classList.add("inother-position"))})).catch((e=>{p.classList.remove("inother-position")})),a.style=`\n    max-width: 1280px;\n    margin: 0 auto;\n   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original${y}');\n   background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n    `,(0,s.renderStars)(u,f),d.innerHTML=`${t||n}`,c.innerHTML=`${h.slice(0,90)}...`,L>=768&&L<1280&&(u.style.padding="17px 0 ",d.style.paddingTop="96px",c.innerHTML=`${h.slice(0,200)}...`),L>=1280&&(u.style.padding="17px 0 ",d.style.paddingTop="178px",c.innerHTML=`${h.slice(0,250)}...`),l.textContent="Watch trailer",m.classList.remove("ishidden"),l.classList.remove("is-hidden"),"Watch trailer"===l.textContent&&l.addEventListener("click",w),p.addEventListener("click",N),g.addEventListener("click",k)})).catch((e=>{l.textContent="Get Started",m.classList.add("ishidden"),u.classList.add("ishidden")}))})),t.register("9Wu9X",(function(t,n){function o(e,t){return Math.round(e*t)/t}e(t.exports,"round",(function(){return o})),e(t.exports,"getRandomNumber",(function(){return s})),e(t.exports,"renderStars",(function(){return i}));const s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;function i(e,t){return e.innerHTML=`\n    <div class="film_rating" style="--rating:${t/2};" aria-label="Rating of this film is ${Math.round(t/2)} out of 5."></div>\n`}}));
//# sourceMappingURL=hero.2faea867.js.map
