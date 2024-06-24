'use strict';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.image-search-form');
const searchInput = document.querySelector('.image-search-input');
const gallery = document.querySelector('.image-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-button');

loadMoreBtn.style.display = 'none'; 

let request;
let page = 1;
const per_page = 15;
let cardHeight = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    request = searchInput.value.trim(); 

    clearGallery();

    if (!request) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term',
            position: 'topRight',
            titleColor: '#fff',
            titleSize: '16px',
            backgroundColor: 'red',
            messageColor: 'white',
        });
        loadMoreBtn.style.display = 'none';
        return;
    }

    page = 1; 
    loadMoreBtn.style.display = 'none'; 

    fetchImages();
});

loadMoreBtn.addEventListener('click', () => {
    page += 1;
    showLoader();
    fetchImages();
});

async function fetchImages() {
    try {
        const data = await getImages(request, page, per_page);
        hideLoader();

        const totalHits = data.totalHits;
        const totalPages = Math.ceil(totalHits / per_page);

        if (page < totalPages) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';

            iziToast.info({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results.",
                titleColor: '#fff',
                titleSize: '16px',
                backgroundColor: 'red',
                messageColor: 'white',
            });
        }

        
        if (data.hits.length > 0) {
            renderImages(data.hits);

            if (page > 1) {
                const firstCard = gallery.querySelector('.images-list-item');
                if (firstCard) {
                    const cardHeight = firstCard.getBoundingClientRect().height;
                    window.scrollBy({
                        top: cardHeight * 2,
                        behavior: 'smooth'
                    });
                }
            }
        } else {
            
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                titleColor: '#fff',
                titleSize: '16px',
                backgroundColor: 'blue',
                messageColor: 'white',
            });
        }
    } catch (error) {
        console.error(error);
        hideLoader();

        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topRight',
            titleColor: '#fff',
            titleSize: '16px',
            backgroundColor: 'red',
            messageColor: 'white',
        });
    }
}

function clearGallery() {
    gallery.innerHTML = '';
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
