!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("2ufDr",(function(t,o){var r,s=n("bpxeT"),i=n("2TvXO"),c=n("dIxxU"),a=n("3RRSf");n("gK76q");var d=document.querySelector(".hero"),l=document.querySelector(".hero-title"),u=document.querySelector(".hero-text"),m=document.querySelector(".hero-getstarted-btn"),h=document.querySelector(".hero-moredetails-btn"),p=document.querySelector(".rating-box"),v=document.querySelector(".trailer-modal"),f=document.querySelector(".trailer-svg-close"),b=document.querySelector(".hero-more-deteils"),g=document.querySelector(".hero-moredetails-btn"),y=document.querySelector(".modal-overlay"),L=document.documentElement.clientWidth;function k(){console.log("СПЕЦИАЛЬНО ДЛЯ ЯРИКА")}function I(e){"Escape"===e.key&&(v.classList.add("ishidden"),m.classList.remove("blocked-element"),b.classList.add("ishidden"),g.classList.remove("blocked-element"),y.classList.add("ishidden"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),f.classList.contains("inother-position")&&r.pauseVideo())}function x(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-getstarted-btn")||v.contains(e.target)||(v.classList.add("ishidden"),m.classList.remove("blocked-element"),g.classList.remove("blocked-element"),document.removeEventListener("click",x),document.removeEventListener("keydown",I))}function w(){b.classList.remove("ishidden"),y.classList.remove("ishidden"),g.classList.add("blocked-element"),m.classList.add("blocked-element"),document.body.classList.add("noScroll"),document.addEventListener("keydown",I),document.addEventListener("click",E)}function E(e){e.target.classList.contains("hero-wrapper-btn")||e.target.classList.contains("hero-moredetails-btn")||e.target===y&&(b.classList.add("ishidden"),y.classList.add("ishidden"),g.classList.remove("blocked-element"),m.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),document.removeEventListener("click",E))}function N(){b.classList.add("ishidden"),y.classList.add("ishidden"),g.classList.remove("blocked-element"),m.classList.remove("blocked-element"),document.body.classList.remove("noScroll"),document.removeEventListener("keydown",I),document.removeEventListener("click",E)}function S(e){e.preventDefault(),g.classList.add("blocked-element"),m.classList.add("blocked-element"),v.classList.remove("ishidden"),document.addEventListener("keydown",I),document.addEventListener("click",x)}function J(){v.classList.add("ishidden"),g.classList.remove("blocked-element"),m.classList.remove("blocked-element"),document.removeEventListener("keydown",I),f.classList.contains("inother-position")&&r.pauseVideo()}function T(){return(T=e(s)(e(i).mark((function t(n){var o,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/videos"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(o);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=e(s)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(n);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function z(){return(z=e(s)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}},e.next=3,c.default.request(n);case 3:return o=e.sent,e.abrupt("return",o.data.genres);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}L<768&&(u.textContent=u.textContent.slice(0,120)),L>=768&&(u.textContent=u.textContent.slice(0)),function(){return j.apply(this,arguments)}().then((function(e){var t=e.results[(0,a.getRandomNumber)(0,20)],n=t.title,o=void 0===n?"":n,s=t.name,i=void 0===s?"":s,c=t.overview,v=void 0===c?"":c,y=t.backdrop_path,I=void 0===y?"":y,x=t.id,E=t.vote_average,j=t.popularity,O=t.poster_path,Y=t.vote_count,q=t.genre_ids;(function(){return z.apply(this,arguments)})().then((function(e){var t=[];e.map((function(e){q.map((function(n){n===e.id&&t.push(e.name)}))})),function(e,t,n,o,r,s,i){b.innerHTML='\n    <p  class="hero-more-svg">X</p>\n  <div class="hero-more-poster"  style="background:url(\'https://image.tmdb.org/t/p/w300'.concat(e,'\');  \n  background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n\n  ">\n  </div>\n   </div>\n\n   <div class="hero-more-deteils-info">\n  <h2 class="hero-more-title">').concat(t,'</h2>\n  <div class="hero-more-container">\n    <div class="hero-more-wrapper">\n      <p class="hero-more-specification">Vote / Votes</p>\n      <p class="hero-more-specification">Popularity</p>\n      <p class="hero-more-specification">Genre</p>\n    </div>\n    <div class="hero-more-box">\n      <p class="hero-more-stats"> <span class="hero-more-accent">').concat(n.toFixed(1),'</span>\n        <span class="hero-more-slash">/</span> <span class="hero-more-accent">').concat(Math.round(s),'</span>\n      </p>\n      <p class="hero-more-stats">').concat(o,'</p>\n      <p class="hero-more-stats">').concat(i,'</p>\n    </div>\n  </div>\n\n  <p class="hero-more-about">About</p>\n\n  <p class="hero-more-descriptions">').concat(r,'</p>\n      <button class="hero-more_deteils-add_btn">Add to my library</button>\n\n  </div>\n\n  ')}(O,o,E,j,v,Y,t.join(" ")),document.querySelector(".hero-more-svg").addEventListener("click",N),document.querySelector(".hero-more_deteils-add_btn").addEventListener("click",k)})),function(e){return T.apply(this,arguments)}(x).then((function(e){0!==e.length&&(!function(e){r=new YT.Player("trailer-video",{height:"240",width:"320",videoId:"".concat(e)})}(e[(0,a.getRandomNumber)(0,e.length)].key),f.classList.add("inother-position"))})).catch((function(e){f.classList.remove("inother-position")})),d.style="\n    max-width: 1280px;\n    margin: 0 auto;\n   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original".concat(I,"');\n   background-repeat: no-repeat;\n   background-position: center;\n   background-size: cover;\n    "),(0,a.renderStars)(p,E),l.innerHTML="".concat(o||i),u.innerHTML="".concat(v.slice(0,90),"..."),L>=768&&L<1280&&(p.style.padding="17px 0 ",l.style.paddingTop="96px",u.innerHTML="".concat(v.slice(0,200),"...")),L>=1280&&(p.style.padding="17px 0 ",l.style.paddingTop="178px",u.innerHTML="".concat(v.slice(0,250),"...")),m.textContent="Watch trailer",h.classList.remove("ishidden"),m.classList.remove("is-hidden"),"Watch trailer"===m.textContent&&m.addEventListener("click",S),f.addEventListener("click",J),g.addEventListener("click",w)})).catch((function(e){m.textContent="Get Started",h.classList.add("ishidden"),p.classList.add("ishidden")}))})),n.register("3RRSf",(function(e,n){function o(e,t){return Math.round(e*t)/t}t(e.exports,"round",(function(){return o})),t(e.exports,"getRandomNumber",(function(){return r})),t(e.exports,"renderStars",(function(){return s}));var r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function s(e,t){return e.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(t/2,';" aria-label="Rating of this film is ').concat(Math.round(t/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=hero.6be0fbb9.js.map
