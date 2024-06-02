import { useAppDispatch } from "../hooks/hooks";
import { BASE_URL } from "../utils/constants";
import { MODAL_CLOSE } from "../services/actions/ingredient-order-details-action";

export function checkResponse(response) {
    return response.ok ? response.json() : Promise.reject("Error!!!");
}

export function request(endpoint, options) {
    return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)
}

export function closeModal(){
    return { type: MODAL_CLOSE };
}