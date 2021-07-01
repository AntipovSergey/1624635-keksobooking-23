import {formActiveConditionHandler} from './form-condition.js';
import {LAT_LANG_DEFAULT} from './data.js';
import {PHOTO_WIDTH, PHOTO_HEIGHT} from './data.js';
import {getValueTypeOffer} from './utils.js';

const myMap = L.map('map-canvas')
  .on('load', () => {
    formActiveConditionHandler();
  })
  .setView ({
    lat:LAT_LANG_DEFAULT.lat,
    lng:LAT_LANG_DEFAULT.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(myMap);

const mapPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26 ,41],
});

const advertisementAddress = document.querySelector('#address');
const setDefaultAddressLatLng = () => {
  const advertisementAddressLat = LAT_LANG_DEFAULT.lat.toFixed(5);
  const advertisementAddressLng = LAT_LANG_DEFAULT.lng.toFixed(5);
  advertisementAddress.value = `${advertisementAddressLat} ${advertisementAddressLng}`;
};

setDefaultAddressLatLng();

const mapPinMarker = L.marker(
  {
    lat:LAT_LANG_DEFAULT.lat,
    lng:LAT_LANG_DEFAULT.lng,
  },
  {
    draggable: true,
    icon: mapPinIcon,
  },
);

mapPinMarker.addTo(myMap);

mapPinMarker.on('moveend', (evt) => {
  const latLang = evt.target.getLatLng();
  const latPinMarker = latLang.lat.toFixed(5);
  const lngPinMarker = latLang.lng.toFixed(5);
  advertisementAddress.value = `${latPinMarker} ${lngPinMarker}`;
});

const setDefaultPinMarker = () => {
  mapPinMarker.setLatLng({
    lat: LAT_LANG_DEFAULT.lat,
    lng: LAT_LANG_DEFAULT.lng,
  });
};

const generateAdvertisements = (similarAdvertisements) => {
  similarAdvertisements.forEach(({offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}, author: {avatar}, location: {lat, lng}}) => {
    const similarAdvertisementTemplate = document.querySelector('#card')
      .content
      .querySelector('.popup');
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
    advertisementElement.querySelector('.popup__text--address').textContent = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
    advertisementElement.querySelector('.popup__text--price').textContent = `${price}₽/ночь`;
    advertisementElement.querySelector('.popup__type').textContent = getValueTypeOffer(type);
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${  guests  } гостей`;
    advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
    advertisementElement.querySelector('.popup__features').textContent = features;
    advertisementElement.querySelector('.popup__description').textContent = description;
    createPopupImage(photos, offerPhotos);
    advertisementElement.querySelector('.popup__avatar').src = avatar;

    if (typeof title === 'undefined') {
      advertisementElement.querySelector('.popup__title').classList.add('hidden');
    }
    if (typeof address === 'undefined') {
      advertisementElement.querySelector('.popup__text--address').classList.add('hidden');
    }
    if (typeof price === 'undefined') {
      advertisementElement.querySelector('.popup__text--price').classList.add('hidden');
    }
    if (typeof type === 'undefined') {
      advertisementElement.querySelector('.popup__type').classList.add('hidden');
    }
    if (typeof rooms === 'undefined' || typeof guests === 'undefined') {
      advertisementElement.querySelector('.popup__text--capacity').classList.add('hidden');
    }
    if (typeof checkin === 'undefined' || typeof checkout === 'undefined') {
      advertisementElement.querySelector('.popup__text--time').classList.add('hidden');
    }
    if (typeof features === 'undefined') {
      advertisementElement.querySelector('.popup__features').classList.add('hidden');
    }
    if (typeof description === 'undefined') {
      advertisementElement.querySelector('.popup__description').classList.add('hidden');
    }
    if (typeof photos === 'undefined') {
      offerPhotos.classList.add('hidden');
    }
    if (typeof avatar === 'undefined') {
      advertisementElement.querySelector('.popup__avatar').classList.add('hidden');
    }

    const icon = L.icon ({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20 ,40],
    });
    const marker = L.marker (
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(myMap)
      .bindPopup(advertisementElement);
  });
};

export {generateAdvertisements, setDefaultAddressLatLng, setDefaultPinMarker};
