import{a as d,S as u,i as s}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){return d.get("https://pixabay.com/api/",{params:{key:"53349109-bd5e9ac2d632572f7cfde5587",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let m=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(r){const a=L(r);l.insertAdjacentHTML("beforeend",a),m.refresh()}function h(){l.innerHTML=""}function g(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}function b({webformatURL:r,largeImageURL:a,tags:i,likes:o,views:e,comments:t,downloads:n}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img 
          class="gallery-image" 
          src="${r}" 
          alt="${i}"
        />
      </a>

      <div class="card-container">
        <p class="card-item"><b>Likes</b> ${o}</p>
        <p class="card-item"><b>Views</b> ${e}</p>
        <p class="card-item"><b>Comments</b> ${t}</p>
        <p class="card-item"><b>Downloads</b> ${n}</p>
      </div>
    </li>
  `}function L(r){return r.map(b).join("")}const O=document.querySelector(".form");O.addEventListener("submit",r=>{r.preventDefault(),h();const a=r.target.elements["search-text"],i=a.value;if(i.trim()===""){s.error({message:"The search field cannot be empty!",position:"topRight",maxWidth:"432px",color:"#ef4040",close:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut"}),a.value="";return}g(),f(i).then(o=>{const e=o.hits;if(e.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",color:"#ef4040",close:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}else p(e)}).catch(o=>{s.error({message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:"432px",color:"#ef4040",close:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut"})}).finally(()=>{y(),r.target.reset()})});
//# sourceMappingURL=index.js.map
