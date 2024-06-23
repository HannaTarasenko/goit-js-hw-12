'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.image-gallery');

export function renderImages(images) {
    if (!images || !images.length) {
        console.error('No images to render');
        return;
    }

    const markup = images.map((image) => {
        return `
        <li class="images-list-item">
            <a class="img-link" href="${image.largeImageURL}">
                <img class="img" src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <ul class="img-dscr">
                <li class="img-data">
                    <p class="img-data-title">Likes</p>
                    <p class="img-data-numbers">${image.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Views</p>
                    <p class="img-data-numbers">${image.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Comments</p>
                    <p class="img-data-numbers">${image.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-data-title">Downloads</p>
                    <p class="img-data-numbers">${image.downloads}</p>
                </li>
            </ul>
        </li>`;
    }).join('');

    gallery.innerHTML += markup; // Додаємо нові зображення до існуючих

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
