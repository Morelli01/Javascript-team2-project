var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("6q4Ta",(function(t,n){var o=e("2shzp");const i=document.querySelector(".hero"),r=document.querySelector(".hero-title"),a=document.querySelector(".hero-text"),c=document.querySelector(".hero-getstarted-btn"),l=document.querySelector(".hero-moredetails-btn"),d=(document.querySelector(".reiting"),document.querySelector(".trailer-modal")),s=document.querySelector(".trailer-svg-close");document.querySelector(".trailer-video");let u=document.documentElement.clientWidth;function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function m(e){e.preventDefault(),d.classList.remove("ishidden"),c.classList.add("blocked-element"),document.body.classList.add("noScroll")}function y(e){d.classList.add("ishidden"),c.classList.remove("blocked-element"),document.body.classList.remove("noScroll")}u<768&&(a.textContent=a.textContent.slice(0,120)),u>=768&&(a.textContent=a.textContent.slice(0)),async function(){const e=await o.default.request({method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}});return console.log(e.data),e.data}().then((e=>{const{title:t="",name:n="",overview:d="",backdrop_path:g="",id:p}=e.results[h(0,20)];(async function(e){const t={method:"GET",url:`https://api.themoviedb.org/3/movie/${e}/videos`,params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE1ZDU3ODY5YzBmYzQ2YWI2YjI3MDJhZDllNjZmZSIsInN1YiI6IjY0NzhjNTUwMGUyOWEyMDExNmFiOGIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ciIvtOhfPeTztNv-gkHSd2chqAc4xOBK5Ti6nPXDtE"}};return(await o.default.request(t)).data.results})(p).then((e=>{!function(e){new YT.Player("trailer-video",{height:"240",width:"320",videoId:`${e}`})}(e[h(0,e.length)].key),s.classList.add("inother-position"),console.log(e),console.log(`https://www.youtube.com/embed/${e[0].key}`)})).catch((e=>{s.classList.remove("inother-position"),console.log(e)})),i.style=`\n   background: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('https://image.tmdb.org/t/p/original${g}');\n   background-repeat: no-repeat;\n   background-size: cover;\n    `,r.innerHTML=`${t||n}`,a.innerHTML=`${d.slice(0,90)}...`,u>=768&&u<1280&&(r.style.paddingTop="96px",a.innerHTML=`${d.slice(0,200)}...`),u>=1280&&(r.style.paddingTop="178px",a.innerHTML=`${d.slice(0,250)}...`),c.textContent="Watch trailer",l.classList.remove("ishidden"),"Watch trailer"===c.textContent&&c.addEventListener("click",m),s.addEventListener("click",y)})).catch((e=>{c.textContent="Get Started",l.classList.add("ishidden"),console.log(e)}))}));
//# sourceMappingURL=hero.38075067.js.map