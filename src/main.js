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
const loadMoreBtn = document.querySelector('.load-more-button');
const loadMoreLoader = document.querySelector('.new-loader'); // Змінено селектор на .new-loader

loader.style.display = 'none'; 
loadMoreBtn.style.display = 'none'; // Приховати кнопку при завантаженні сторінки
loadMoreLoader.style.display = 'none'; // Приховати лоадер "Load more" при завантаженні сторінки

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
        return;
    }

    page = 1; // Скидання сторінки до початкового значення
    loadMoreBtn.style.display = 'none'; // Приховати кнопку перед новим пошуком

    fetchImages();
});

loadMoreBtn.addEventListener('click', () => {
    page += 1;
    loadMoreLoader.style.display = 'block'; // Показати лоадер "Load more" при кліку на кнопку
    fetchImages();
});

function fetchImages() {
    loader.style.display = 'block';
    loadMoreLoader.style.display = 'none'; // Приховати лоадер "Load more" під час завантаження зображень

    getImages(request, page, per_page)
    .then(data => {
        loader.style.display = 'none'; 
        if (data.hits.length === 0 && page === 1) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                titleColor: '#fff',
                titleSize: '16px',
                backgroundColor: 'blue',
                messageColor: 'white',
            });
        } else {
            renderImages(data.hits);

            // Отримання висоти однієї карточки галереї
            if (data.hits.length > 0) {
                const firstCard = gallery.querySelector('.images-list-item');
                if (firstCard) {
                    cardHeight = firstCard.getBoundingClientRect().height;
                }
            }

            const totalHits = data.totalHits;
            const totalPages = Math.ceil(totalHits / per_page);

            if (data.hits.length > 0) {
                loadMoreBtn.style.display = 'block'; // Показати кнопку, якщо є зображення
            } else {
                loadMoreBtn.style.display = 'none'; // Приховати кнопку, якщо зображення закінчилися
            }
            
            // Прокручування сторінки на висоту карточки галереї
            if (cardHeight > 0) {
                window.scrollBy({
                    top: cardHeight * 2, // Прокрутка на дві висоти карточки
                    behavior: 'smooth' // Плавна анімація прокрутки
                });
            }

            if (page > totalPages) {
                return iziToast.error({
                    position: "topRight",
                    message: "We're sorry, but you've reached the end of search results.",
                    titleColor: '#fff',
                    titleSize: '16px',
                    backgroundColor: 'red',
                    messageColor: 'white',
                });
            }
        }
        
    })
    .catch(error => {
        console.error(error);
        loader.style.display = 'none';
        loadMoreLoader.style.display = 'none'; // Приховати лоадер "Load more" в разі помилки
    });
}

function clearGallery() {
    gallery.innerHTML = '';
}
