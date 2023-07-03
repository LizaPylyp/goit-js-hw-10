import { onError } from "./index";

const refs = {
    MAIN_URL: 'https://api.thecatapi.com/v1/breeds',
    SEARCH_URL: 'https://api.thecatapi.com/v1/images/search',
    API_KEY: 'live_rqYgZnoF175bvLI7l3CZHWjUnr7S85yaDOKg4vcraGezDzNPC6wtEpfhI0UduDbY',
};

const options = {
    headers: {
        'x-api-key': refs.API_KEY
    }
};

export function fetchBreeds() { 
    return fetch(refs.MAIN_URL, options).then(response => {
        if (!response.ok) {
            onError();        
            }
        return response.json();
    }).catch(onError)
};

export function fetchCatByBreed(breedId) {
    return fetch(`${refs.SEARCH_URL}?breed_ids=${breedId}&has_breeds=1`, options).then(response => {
        if (!response.ok) {
            onError();        
        }
        return response.json();
    }).catch(onError)
    
}