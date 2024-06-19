
import { BASE_URL } from "./constants";


export function checkResponse(response: Response) {
  return response.ok ? response.json() : Promise.reject("Error!!!");
}

export function request(endpoint: RequestInfo | URL, options?: RequestInit | undefined) {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse)
}


export function setCookie(name: string, value: string, props?: { expires?: any, [propName: string]: any }
) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;Expires=${new Date(0).toUTCString()}`;
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
} 
