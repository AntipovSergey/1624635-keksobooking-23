import {createAdvertisements} from './create-advertisement.js';
import {getValueTypeOffer} from './utils.js';
import {PHOTO_WIDTH, PHOTO_HEIGHT} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarAdvertisementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdvertisements = createAdvertisements();
const similarAdvertisementsFragment = document.createDocumentFragment();

similarAdvertisements.forEach(({offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}}) => {
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  // Фоточки
  const offerPhotos = advertisementElement.querySelector('.popup__photos');
  const createPopupImage = (photo, offerPhoto) => {

    while (offerPhotos.firstChild) {
      offerPhotos.removeChild(offerPhotos.firstChild);
    }

    if (photo) {
      photos.forEach((photoSrc) => {
        const newPhoto = document.createElement('img');
        newPhoto.classList.add('popup__photo');
        newPhoto.src = photoSrc;
        newPhoto.width = PHOTO_WIDTH;
        newPhoto.height = PHOTO_HEIGHT;
        newPhoto.alt = 'Фотография жилья';
        offerPhoto.appendChild(newPhoto);
      });
    }
  };
  advertisementElement.querySelector('.popup__title').textContent = title;
  advertisementElement.querySelector('.popup__text--address').textContent = address;
  advertisementElement.querySelector('.popup__text--price').textContent = `${price}₽/ночь`;
  advertisementElement.querySelector('.popup__type').textContent = getValueTypeOffer(type);
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${  guests  } гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  advertisementElement.querySelector('.popup__features').textContent = features.join();
  advertisementElement.querySelector('.popup__description').textContent = description;
  createPopupImage(photos, offerPhotos);
  advertisementElement.querySelector('.popup__avatar').src = avatar;

  if (title.length === 0) {
    advertisementElement.querySelector('.popup__title').classList.add('hidden');
  }
  if (address.length === 0) {
    advertisementElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  if (price.length === 0) {
    advertisementElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  if (type.length === 0) {
    advertisementElement.querySelector('.popup__type').classList.add('hidden');
  }
  if (rooms.length === 0 || guests.length === 0) {
    advertisementElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  if (checkin.length === 0 || checkout.length === 0) {
    advertisementElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  if (features.length === 0) {
    advertisementElement.querySelector('.popup__features').classList.add('hidden');
  }
  if (description.length === 0) {
    advertisementElement.querySelector('.popup__description').classList.add('hidden');
  }
  if (photos.length === 0) {
    offerPhotos.classList.add('hidden');
  }
  if (avatar.length === 0) {
    advertisementElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  similarAdvertisementsFragment.appendChild(advertisementElement);
});

mapCanvas.appendChild(similarAdvertisementsFragment.firstChild);
