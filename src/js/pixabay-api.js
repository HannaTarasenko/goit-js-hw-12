'use strict';
import axios from "axios";

export async function getImages(request, page = 1, per_page = 15) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44531461-2364a69dbdf6d0d630a4dab14',
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: per_page,
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;
    console.log(url);

    try {
        const res = await axios.get(url);
        return res.data; 
    } catch (error) {
        console.error('Error fetching images:', error);
        throw new Error(`HTTP error! Status: ${error.response.status}`);
    }
}