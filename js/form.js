import {MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_PRICE_LENGTH} from './data.js';
import {PRICE_VALUES, NUMBER_OF_ROOMS} from './data.js';
import {sendData} from './api.js';
import {resetForm} from './form-condition.js';
import {setDefaultAddressLatLng, setDefaultPinMarker} from './create-map.js';

const advertisementTitle = document.querySelector('#title');
const typeOfApartments = document.querySelector('#type');
const advertisementPricePerNight = document.querySelector('#price');
let minPrice;
const advertisementRoomNumber = document.querySelector('#room_number');
const advertisementCapacity = document.querySelector('#capacity');
const checkInInputElement = document.querySelector('#timein');
const checkOutInputElement = document.querySelector('#timeout');
const advertisementAddressField = document.querySelector('#address');
const advertisementForm = document.querySelector('.ad-form');

//Валидация поля с вводом заголовка объявления
advertisementTitle.addEventListener('input', (evt) => {
  const valueLength = advertisementTitle.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    advertisementTitle.setCustomValidity(`Ещё ${ MIN_NAME_LENGTH - valueLength } симв.`);
    evt.preventDefault();
  } else if (valueLength > MAX_NAME_LENGTH) {
    advertisementTitle.setCustomValidity(`Удалите лишние ${ valueLength -  MAX_NAME_LENGTH } симв.`);
    evt.preventDefault();
  } else {
    advertisementTitle.setCustomValidity('');
  }
});

//Валидация поля с выбором типа жилья и вводом цены за ночь
typeOfApartments.addEventListener('change', () => {
  if (typeOfApartments.value === 'bungalow') {
    minPrice = PRICE_VALUES.bungalow;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfApartments.value === 'flat') {
    minPrice = PRICE_VALUES.flat;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfApartments.value === 'hotel') {
    minPrice = PRICE_VALUES.hotel;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfApartments.value === 'house') {
    minPrice = PRICE_VALUES.house;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfApartments.value === 'palace') {
    minPrice = PRICE_VALUES.palace;
    advertisementPricePerNight.placeholder = minPrice;
  }
});

advertisementPricePerNight.addEventListener('input', (evt) => {
  const valuePrice = advertisementPricePerNight.value;

  if (valuePrice > MAX_PRICE_LENGTH) {
    advertisementPricePerNight.setCustomValidity(`Стоимость выбранного жилья не может быть выше ${ MAX_PRICE_LENGTH } рублей за ночь`);
    evt.preventDefault();
  } else if (valuePrice < minPrice) {
    advertisementPricePerNight.setCustomValidity(`Стоимость выбранного жилья не может быть ниже ${ minPrice } рублей за ночь`);
    evt.preventDefault();
  } else {
    advertisementPricePerNight.setCustomValidity('');
  }
});

//Валидация поля с выбором количетва комнат
for (let index = 0; index < advertisementCapacity.options.length; index++) {
  advertisementCapacity.options[index].setAttribute('disabled', true);
}

advertisementRoomNumber.addEventListener('click', () => {
  if (advertisementRoomNumber.value === NUMBER_OF_ROOMS.oneRoom) {
    advertisementCapacity.options[2].removeAttribute('disabled', true);
    advertisementCapacity.options[3].setAttribute('disabled', true);
    advertisementCapacity.options[1].setAttribute('disabled', true);
    advertisementCapacity.options[0].setAttribute('disabled', true);
  } else if (advertisementRoomNumber.value === NUMBER_OF_ROOMS.twoRooms) {
    advertisementCapacity.options[2].removeAttribute('disabled', true);
    advertisementCapacity.options[1].removeAttribute('disabled', true);
    advertisementCapacity.options[3].setAttribute('disabled', true);
    advertisementCapacity.options[0].setAttribute('disabled', true);
  } else if (advertisementRoomNumber.value === NUMBER_OF_ROOMS.threeRooms) {
    advertisementCapacity.options[2].removeAttribute('disabled', true);
    advertisementCapacity.options[1].removeAttribute('disabled', true);
    advertisementCapacity.options[0].removeAttribute('disabled', true);
    advertisementCapacity.options[3].setAttribute('disabled', true);
  } else if (advertisementRoomNumber.value === NUMBER_OF_ROOMS.hundredRooms) {
    advertisementCapacity.options[2].setAttribute('disabled', true);
    advertisementCapacity.options[1].setAttribute('disabled', true);
    advertisementCapacity.options[0].setAttribute('disabled', true);
    advertisementCapacity.options[3].removeAttribute('disabled', true);
  }
});

//Валидация поля с выбором даты заезда/выезда
checkInInputElement.addEventListener('change',  () => {
  checkOutInputElement.selectedIndex = checkInInputElement.selectedIndex;
});
checkOutInputElement.addEventListener('change',  () => {
  checkInInputElement.selectedIndex = checkOutInputElement.selectedIndex;
});
//Валидация поля с выбором адреса
advertisementAddressField.addEventListener('input', (evt) => {
  const advertisementAddress = advertisementAddressField.value;
  if (advertisementAddress.length === 0) {
    evt.preventDefault();
  }
});

const setUserFormSubmit = (onSuccess, onFail) => {
  advertisementForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

const resetFormByResetButton = () => {
  const resetButton = document.querySelector('.ad-form__reset');
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    setDefaultAddressLatLng();
    setDefaultPinMarker();
  });
};

resetFormByResetButton();

export {setUserFormSubmit};
