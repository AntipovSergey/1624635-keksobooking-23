import {MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_PRICE_LENGTH} from './data.js';
import {PRICE_VALUES, NUMBER_OF_ROOMS} from './data.js';

//Валидация поля с вводом заголовка объявления
const advertisementTitle = document.querySelector('#title');

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
const typeOfAppartments = document.querySelector('#type');
const advertisementPricePerNight = document.querySelector('#price');
let minPrice;

typeOfAppartments.addEventListener('change', () => {
  if (typeOfAppartments.value === 'bungalow') {
    minPrice = PRICE_VALUES.bungalow;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfAppartments.value === 'flat') {
    minPrice = PRICE_VALUES.flat;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfAppartments.value === 'hotel') {
    minPrice = PRICE_VALUES.hotel;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfAppartments.value === 'house') {
    minPrice = PRICE_VALUES.house;
    advertisementPricePerNight.placeholder = minPrice;
  } else if (typeOfAppartments.value === 'palace') {
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
const advertisementRoomNumber = document.querySelector('#room_number');
const advertisementCapacity = document.querySelector('#capacity');

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

//Валидация поля с выбором адреса
const advertisementAddressField = document.querySelector('#address');

advertisementAddressField.addEventListener('input', (evt) => {
  const advertisementAddress = advertisementAddressField.value;
  if (advertisementAddress.length === 0) {
    evt.preventDefault();
  }
});
