import{i as m,S as u}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",s="/api/",a=new URLSearchParams({key:"44531461-2364a69dbdf6d0d630a4dab14",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:30}),e=`${r}${s}?${a}`;return console.log(e),fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}const d=document.querySelector(".image-gallery");function g(o){const r=o.hits.map(s=>`
        <li class="images-list-item">
            <a class="img-link" href="${s.largeImageURL}">
                <img class="img" src="${s.webformatURL}" alt="${s.tags}">
            </a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${s.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${s.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${s.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${s.downloads}</p>
                </li>
            </ul>
        </li>`).join("");d.innerHTML=r}const f=document.querySelector(".image-search-form"),h=document.querySelector(".image-search-input"),c=document.querySelector(".image-gallery"),i=document.querySelector(".loader");i.style.display="none";let n;f.addEventListener("submit",o=>{if(o.preventDefault(),n=h.value.trim(),y(),!n){c.innerHTML="",m.error({title:"Error",message:"Please enter a search term",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"});return}i.style.display="block",p(n).then(r=>{if(i.style.display="none",r.hits.length===0)return c.innerHTML="",m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"});g(r),new u(".image-gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).catch(r=>{console.log(r),i.style.display="none"}).finally(()=>{o.target.reset()})});function y(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
