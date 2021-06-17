import {createAdvertisements} from './create-advertisement.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarAdvertisementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdvertisements = createAdvertisements();

//console.log(similarAdvertisements);

const similarAdvertisementsFragment = document.createDocumentFragment();

const getValueTypeOffer = function (type) {
  if (type === 'flat') {
    return 'Квартира';
  } else if (type === 'bungalo') {
    return 'Бунгало';
  } else if (type === 'palace') {
    return 'Дворец';
  } else {
    return 'Дом';
  }
};

similarAdvertisements.forEach(({offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}}) => {
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  // Фоточки
  const offerPhotos = advertisementElement.querySelector('.popup__photos');
  const createPopupImage = (photos, offerPhotos) => {
    if (photos) {
      photos.forEach((photo) => {
        const newPhoto = document.createElement('img');
        newPhoto.classList.add('popup__photo');
        newPhoto.src = photo;
        newPhoto.width = '45';
        newPhoto.height = '40';
        newPhoto.alt = 'Фотография жилья';
        offerPhotos.appendChild(newPhoto);
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
  createPopupImage();
  advertisementElement.querySelector('.popup__avatar').src = avatar;

  if (title.length === 0) {
    advertisementElement.querySelector('.popup__title').classList.add('hidden');
  }

  similarAdvertisementsFragment.appendChild(advertisementElement);
});

mapCanvas.appendChild(similarAdvertisementsFragment.firstChild);
