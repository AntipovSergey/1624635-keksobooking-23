import {formActiveConditionHandler} from './form-condition.js';
import {LAT_LANG_DEFAULT} from './data.js';
import {similarAdvertisements} from './generate-similar-elements.js';

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

similarAdvertisements.forEach(({location: {lat, lng}}) => {
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

  marker.addTo(myMap);
});
