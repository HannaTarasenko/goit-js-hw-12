
'use strict';
export function getImages(request) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44531461-2364a69dbdf6d0d630a4dab14',
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 1,
        per_page: 30,
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;
    console.log(url);

    return fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(res.status);
                  }
});
}
