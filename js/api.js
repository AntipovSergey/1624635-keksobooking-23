import {showAlert} from './utils.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((advertisements) => {
      onSuccess(advertisements);
    })
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка!');
    });
};

const sendData = (onSuccess, onFail, body) => {};

export {getData, sendData};
