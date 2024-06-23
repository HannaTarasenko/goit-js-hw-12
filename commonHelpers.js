import{a as b,S,i as m}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function w(t,s=1,i=15){const o="https://pixabay.com",e="/api/",r=new URLSearchParams({key:"44531461-2364a69dbdf6d0d630a4dab14",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:i}),a=`${o}${e}?${r}`;console.log(a);try{return(await b.get(a)).data}catch(p){throw console.error("Error fetching images:",p),new Error(`HTTP error! Status: ${p.response.status}`)}}const L=document.querySelector(".image-gallery");function C(t){if(!t||!t.length){console.error("No images to render");return}const s=t.map(o=>`
        <li class="images-list-item">
            <a class="img-link" href="${o.largeImageURL}">
                <img class="img" src="${o.webformatURL}" alt="${o.tags}">
            </a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${o.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${o.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${o.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${o.downloads}</p>
                </li>
            </ul>
        </li>`).join("");L.innerHTML+=s,new S(".image-gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}const q=document.querySelector(".image-search-form"),$=document.querySelector(".image-search-input"),f=document.querySelector(".image-gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more-button"),d=document.querySelector(".new-loader");c.style.display="none";n.style.display="none";d.style.display="none";let g,l=1;const y=15;let u=0;q.addEventListener("submit",t=>{if(t.preventDefault(),g=$.value.trim(),P(),!g){m.error({title:"Error",message:"Please enter a search term",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"});return}l=1,n.style.display="none",h()});n.addEventListener("click",()=>{l+=1,d.style.display="block",h()});function h(){c.style.display="block",d.style.display="none",w(g,l,y).then(t=>{if(c.style.display="none",t.hits.length===0&&l===1)m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"blue",messageColor:"white"});else{if(C(t.hits),t.hits.length>0){const o=f.querySelector(".images-list-item");o&&(u=o.getBoundingClientRect().height)}const s=t.totalHits,i=Math.ceil(s/y);if(t.hits.length>0?n.style.display="block":n.style.display="none",u>0&&window.scrollBy({top:u*2,behavior:"smooth"}),l>i)return m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white"})}}).catch(t=>{console.error(t),c.style.display="none",d.style.display="none"})}function P(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
