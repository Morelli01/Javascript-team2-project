!function(){function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("2ufDr",(function(n,o){var s,r=t("bpxeT"),i=t("2TvXO"),c=t("dIxxU"),a=t("3RRSf"),d=t("cLNaR");t("gK76q");var l=document.querySelector(".hero"),u=document.querySelector(".hero-title"),m=document.querySelector(".hero-text"),h=document.querySelector(".hero-getstarted-btn"),p=document.querySelector(".hero-moredetails-btn"),v=document.querySelector(".rating-box"),y=document.querySelector(".trailer-modal"),L=document.querySelector(".trailer-svg-close"),f=document.querySelector(".hero-more-deteils"),b=document.querySelector(".hero-moredetails-btn"),g=document.querySelector(".modal-overlay"),k=document.documentElement.clientWidth;function I(e){"Escape"===e.key&&(y.classList.add("ishidden"),h.classList.remove("blocked-element"),f.classList.add("ishidden"),b.classList.remove("blocked-element"),g.classList.add("ishidden"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),L.classList.contains("inother-position")&&s.pauseVideo())}function x(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-getstarted-btn")||y.contains(e.target)||(y.classList.add("ishidden"),h.classList.remove("blocked-element"),b.classList.remove("blocked-element"),document.removeEventListener("click",x),document.removeEventListener("keydown",I))}function w(){f.classList.remove("ishidden"),g.classList.remove("ishidden"),b.classList.add("blocked-element"),h.classList.add("blocked-element"),document.body.classList.add("noScroll"),document.addEventListener("keydown",I),document.addEventListener("click",E)}function E(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-moredetails-btn")||e.target===g&&(f.classList.add("ishidden"),g.classList.add("ishidden"),b.classList.remove("blocked-element"),h.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),document.removeEventListener("click",E))}function N(){f.classList.add("ishidden"),g.classList.add("ishidden"),b.classList.remove("blocked-element"),h.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),document.removeEventListener("click",E)}function S(e){e.preventDefault(),b.classList.add("blocked-element"),h.classList.add("blocked-element"),y.classList.remove("ishidden"),document.addEventListener("keydown",I),document.addEventListener("click",x)}function J(){y.classList.add("ishidden"),b.classList.remove("blocked-element"),h.classList.remove("blocked-element"),document.removeEventListener("keydown",I),L.classList.contains("inother-position")&&s.pauseVideo()}function j(){return(j=e(r)(e(i).mark((function t(n){var o,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/videos"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(o);case 3:return s=e.sent,e.abrupt("return",s.data.results);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=e(r)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(n);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function z(){return(z=e(r)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(n);case 3:return o=e.sent,e.abrupt("return",o.data.genres);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}k<768&&(m.textContent=m.textContent.slice(0,120)),k>=768&&(m.textContent=m.textContent.slice(0)),function(){return T.apply(this,arguments)}().then((function(e){var t=e.results[(0,a.getRandomNumber)(0,20)],n=t.title,o=void 0===n?"":n,r=t.name,i=void 0===r?"":r,c=t.overview,y=void 0===c?"":c,g=t.backdrop_path,I=void 0===g?"":g,x=t.id,E=t.vote_average,T=t.popularity,O=t.poster_path,Y=t.vote_count,q=t.genre_ids;(function(){return z.apply(this,arguments)})().then((function(e){var t=[];e.map((function(e){q.map((function(n){n===e.id&&t.push(e.name)}))})),function(e,t,n,o,s,r,i,c){var a=d.favoriteArr.some((function(t){return t.id===e}))?"Remove from my library":"Add to my library";f.innerHTML='\n    <p  class="hero-more-svg">X</p>\n  <div class="hero-more-poster"  style="background:url(\'https://image.tmdb.org/t/p/w300'.concat(t,'\');  \n  background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n\n  ">\n  </div>\n   </div>\n\n   <div class="hero-more-deteils-info js_add_id" data-id="').concat(e,'">\n  <h2 class="hero-more-title">').concat(n,'</h2>\n  <div class="hero-more-container">\n    <div class="hero-more-wrapper">\n      <p class="hero-more-specification">Vote / Votes</p>\n      <p class="hero-more-specification">Popularity</p>\n      <p class="hero-more-specification">Genre</p>\n    </div>\n    <div class="hero-more-box">\n      <p class="hero-more-stats"> <span class="hero-more-accent">').concat(o.toFixed(1),'</span>\n        <span class="hero-more-slash">/</span> <span class="hero-more-accent">').concat(Math.round(i),'</span>\n      </p>\n      <p class="hero-more-stats">').concat(s,'</p>\n      <p class="hero-more-stats">').concat(c,'</p>\n    </div>\n  </div>\n\n  <p class="hero-more-about">About</p>\n\n  <p class="hero-more-descriptions">').concat(r,'</p>\n      <button class="hero-more_deteils-add_btn js_add_collection">').concat(a,"</button>\n\n  </div>\n\n  ")}(x,O,o,E,T,y,Y,t.join(" ")),document.querySelector(".hero-more-svg").addEventListener("click",N),document.querySelector(".js_add_collection").addEventListener("click",d.onClickFilm)})),function(e){return j.apply(this,arguments)}(x).then((function(e){0!==e.length&&(!function(e){s=new YT.Player("trailer-video",{height:"240",width:"320",videoId:"".concat(e)})}(e[(0,a.getRandomNumber)(0,e.length)].key),L.classList.add("inother-position"))})).catch((function(e){L.classList.remove("inother-position")})),l.style="\n    max-width: 1280px;\n    margin: 0 auto;\n   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original".concat(I,"');\n   background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n    "),(0,a.renderStars)(v,E),u.innerHTML="".concat(o||i),m.innerHTML="".concat(y.slice(0,90),"..."),k>=768&&k<1280&&(v.style.padding="17px 0 ",u.style.paddingTop="96px",m.innerHTML="".concat(y.slice(0,200),"...")),k>=1280&&(v.style.padding="17px 0 ",u.style.paddingTop="178px",m.innerHTML="".concat(y.slice(0,250),"...")),h.textContent="Watch trailer",p.classList.remove("ishidden"),h.classList.remove("is-hidden"),"Watch trailer"===h.textContent&&h.addEventListener("click",S),L.addEventListener("click",J),b.addEventListener("click",w)})).catch((function(e){h.textContent="Get Started",p.classList.add("ishidden"),v.classList.add("ishidden")}))}))}();
//# sourceMappingURL=hero.c62de424.js.map