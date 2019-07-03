import Config from '../config/Config.json';

const hasActiveCookie = (name) => {
  const value = getCookie(name);

  return (value !== '') ? value : false;
}

const removeCookie = (name) => {
  document.cookie = name + '=NULL; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const setCookie = (name, value, age) => {
  const date = new Date();
  const time = (typeof age !== 'undefined') ? age : Config.cookie.dafaultTime;
  date.setTime(date.getTime()+(time));

  document.cookie = name + "=" + value + "; expires=" + date.toGMTString() + ";path=/";
}

const getCookie = (name) => {
  const decoded = decodeURIComponent(document.cookie);
  const ca = decoded.split(';');
  name = name + "=";
  
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

export {
  setCookie,
  getCookie,
  removeCookie,
  hasActiveCookie
};

export default getCookie;