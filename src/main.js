'use strict';
import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.image-search-form');
const searchInput = document.querySelector('.image-search-input');
const gallery = document.querySelector('.image-gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none'; 

let request;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    request = searchInput.value.trim(); 

    clearGallery();

    if (!request) {
        gallery.innerHTML = '';
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term',
            position: 'topRight',
            titleColor: '#fff',
            titleSize: '16px',
            backgroundColor: 'red',
            messageColor: 'white',
            
        });
        return;
    }

    loader.style.display = 'block'; 

    getImages(request)
    .then(images => {
        loader.style.display = 'none'; 
        if (images.hits.length === 0) {
            gallery.innerHTML = '';
            return iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                titleColor: '#fff',
                titleSize: '16px',
                backgroundColor: 'red',
                messageColor: 'white',
                
            });
        } else {
            renderImages(images);
            const lightbox = new SimpleLightbox('.image-gallery a', {
                captions: true,
                captionSelector: 'img',
                captionType: 'attr',
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 250,
                animationSpeed: 300,
                widthRatio: 1,
                heightRatio: 0.95,
                disableRightClick: true,
              });
              lightbox.refresh();
        }
    })
    .catch(error => {
        console.log(error);
        loader.style.display = 'none'; 
    })
    .finally(() => {
        event.target.reset(); 
    });
});

function clearGallery() {
    gallery.innerHTML = '';
}
