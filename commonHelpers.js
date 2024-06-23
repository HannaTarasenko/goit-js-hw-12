import{a as b,S as w,i as c}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function S(t,s=1,a=15){const r="https://pixabay.com",e="/api/",o=new URLSearchParams({key:"44531461-2364a69dbdf6d0d630a4dab14",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:a}),l=`${r}${e}?${o}`;console.log(l);try{return(await b.get(l)).data}catch(d){throw console.error("Error fetching images:",d),new Error(`HTTP error! Status: ${d.response.status}`)}}const L=document.querySelector(".image-gallery");function C(t){if(!t||!t.length){console.error("No images to render");return}const s=t.map(r=>`
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
        </li>`).join("");L.innerHTML+=s,new w(".image-gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}const P=document.querySelector(".image-search-form"),R=document.querySelector(".image-search-input"),f=document.querySelector(".image-gallery"),h=document.querySelector(".loader"),i=document.querySelector(".load-more-button");i.style.display="none";let u,n=1;const m=15;let g=0;P.addEventListener("submit",t=>{if(t.preventDefault(),u=R.value.trim(),$(),!u){c.error({title:"Error",message:"Please enter a search term",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"}),i.style.display="none";return}n=1,i.style.display="none",y()});i.addEventListener("click",()=>{n+=1,q(),y()});function y(){S(u,n,m).then(t=>{if(p(),t.hits.length===0&&n===1)c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"blue",messageColor:"white"}),i.style.display="none";else{if(C(t.hits),t.hits.length>0){const r=f.querySelector(".images-list-item");r&&(g=r.getBoundingClientRect().height)}const s=t.totalHits,a=Math.ceil(s/m);if(t.hits.length>0?i.style.display="block":i.style.display="none",g>0&&window.scrollBy({top:g*2,behavior:"smooth"}),n>a)return c.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"})}}).catch(t=>{console.error(t),p(),c.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"})})}function $(){f.innerHTML=""}function q(){h.style.display="block"}function p(){h.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
