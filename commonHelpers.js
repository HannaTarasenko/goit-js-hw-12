import{a as y,S as b,i as c}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function w(t,s=1,r=15){const a="https://pixabay.com",e="/api/",o=new URLSearchParams({key:"44531461-2364a69dbdf6d0d630a4dab14",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:r}),i=`${a}${e}?${o}`;console.log(i);try{return(await y.get(i)).data}catch(d){throw console.error("Error fetching images:",d),new Error(`HTTP error! Status: ${d.response.status}`)}}const S=document.querySelector(".image-gallery"),L=new b(".image-gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0});function C(t){if(!t||!t.length){console.error("No images to render");return}const s=t.map(r=>`
        <li class="images-list-item">
            <a class="img-link" href="${r.largeImageURL}">
                <img class="img" src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${r.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${r.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${r.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${r.downloads}</p>
                </li>
            </ul>
        </li>`).join("");S.insertAdjacentHTML("beforeend",s),L.refresh()}const P=document.querySelector(".image-search-form"),R=document.querySelector(".image-search-input"),p=document.querySelector(".image-gallery"),f=document.querySelector(".loader"),l=document.querySelector(".load-more-button");l.style.display="none";let u,n=1;const m=15;P.addEventListener("submit",t=>{if(t.preventDefault(),u=R.value.trim(),$(),!u){c.error({title:"Error",message:"Please enter a search term",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"}),l.style.display="none";return}n=1,l.style.display="none",h()});l.addEventListener("click",()=>{n+=1,q(),h()});async function h(){try{const t=await w(u,n,m);g();const s=t.totalHits,r=Math.ceil(s/m);if(n<r?l.style.display="block":(l.style.display="none",c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"})),t.hits.length>0){if(C(t.hits),n>1){const a=p.querySelector(".images-list-item");if(a){const e=a.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}}else c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"blue",messageColor:"white"})}catch(t){console.error(t),g(),c.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"})}}function $(){p.innerHTML=""}function q(){f.style.display="block"}function g(){f.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
