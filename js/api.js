import {showAlert} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './utils.js';
import {setDefaultAddressLatLng, setDefaultPinMarker} from './create-map.js';

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

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
        showSuccessMessage();
        setDefaultAddressLatLng();
        setDefaultPinMarker();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      onFail();
      showErrorMessage();
    });
};

export {getData, sendData};
