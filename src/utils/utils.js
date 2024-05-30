export function checkResponse(response) {
    return response.ok ? response.json() : Promise.reject("Error!!!");
}

export function request(url, options) {
    return fetch(url, options).then(checkResponse)
}