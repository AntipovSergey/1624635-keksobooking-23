import {createAdvertisements} from './create-advertisement.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarAdvertisementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdvertisements = createAdvertisements();

const similarAdvertisementsFragment = document.createDocumentFragment();

similarAdvertisements.forEach(({offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}}) => {
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  advertisementElement.querySelector('.popup__title').textContent = title;
  advertisementElement.querySelector('.popup__text--address').textContent = address;
  advertisementElement.querySelector('.popup__text--price').textContent = price + '₽/ночь';
  advertisementElement.querySelector('.popup__type').textContent = type; //Еще не сделал. Не пойму как сопоставлять значения
  advertisementElement.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты для ' + guests + ' гостей';
  advertisementElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin +', выезд до ' + checkout;
  advertisementElement.querySelector('.popup__features').textContent = features.join();
  advertisementElement.querySelector('.popup__description').textContent = description;
  advertisementElement.querySelector('.popup__photos').src = photos.join();
  advertisementElement.querySelector('.popup__avatar').src = avatar;

  if (advertisementElement) {  //Исходя из моего кода, как правильно сделать проверку?

  }

  similarAdvertisementsFragment.appendChild(advertisementElement);
});

mapCanvas.appendChild(similarAdvertisementsFragment);
