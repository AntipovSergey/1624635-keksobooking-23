import {formActiveConditionHandler} from './form-condition.js';
import {LAT_LANG_DEFAULT} from './data.js';
import {similarAdvertisements} from './generate-similar-elements.js';
import {PHOTO_WIDTH, PHOTO_HEIGHT} from './data.js';

const myMap = L.map('map-canvas')
  .on('load', () => {
    formActiveConditionHandler();
  })
  .setView ({
    lat:35.680929,
    lng:139.768601,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(myMap);

const mapPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26 ,41],
});

const advertisementAddress = document.querySelector('#address');
const advertisementAddressLat = LAT_LANG_DEFAULT.lat.toFixed(5);
const advertisementAddressLng = LAT_LANG_DEFAULT.lng.toFixed(5);
advertisementAddress.value = `${advertisementAddressLat} ${advertisementAddressLng}`;

const mapPinMarker = L.marker(
  {
    lat:35.680929,
    lng:139.768601,
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

//
const createCustomPopup = (offer, author, location) => {
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
  advertisementElement.querySelector('.popup__title').textContent = offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = `${location.lat} ${location.lng}`;
  advertisementElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;
  advertisementElement.querySelector('.popup__type').textContent = getValueTypeOffer(offer.type);
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${  offer.guests  } гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertisementElement.querySelector('.popup__features').textContent = offer.features.join();
  advertisementElement.querySelector('.popup__description').textContent = offer.description;
  createPopupImage(offer.photos, offerPhotos);
  advertisementElement.querySelector('.popup__avatar').src = author.avatar;

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

  return advertisementElement;
};

similarAdvertisements.forEach((offer, author, location) => {

  //const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;
  //const {avatar} = author;
  const {lat, lng} = location;

  const icon = L.icon ({
    iconUrl: '../img/pin.svg',
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
    .bindPopup(
      createCustomPopup(offer, author, location),
      {
        keepInView: true,
      },
    );
});
