function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("dK6vY",(function(r,n){e(r.exports,"getFilms",(function(){return i})),e(r.exports,"getRandomFilmOfMonth",(function(){return s})),e(r.exports,"getGenres",(function(){return c})),e(r.exports,"getCategoriesQuery",(function(){return l}));var o=t("2shzp");const a="97fe01addf81f73693338979426ece1e",i=async e=>{const t=`https://api.themoviedb.org/3/trending/movie/week?api_key=${a}&page=${e}`;try{const e=await fetch(t);return console.log(e),e.json()}catch(e){return console.log("error",e),[]}},s=async()=>{const e=new Date,t=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-01`,r=`https://api.themoviedb.org/3/discover/movie?api_key=${a}&language=en-US&sort_by=popularity.desc&primary_release_date.gte=${t}`;try{const e=await fetch(r),t=(await e.json()).results,n=Math.floor(Math.random()*t.length);return t[n]}catch(e){return console.error("Произошла ошибка:",e),null}},c=async()=>{const e=`https://api.themoviedb.org/3/genre/movie/list?api_key=${a}`;try{const t=await fetch(e),r=await t.json();return r.genres}catch(e){return console.error("error",e),[]}},l=async(e,t)=>{const{data:r}=await o.default.get(`https://api.themoviedb.org/3/search/movie?api_key=${a}&query=${e}&page=${t}&language=en-US`);try{return r}catch(e){console.log(e)}}}));
//# sourceMappingURL=api.e448d6f3.js.map