import {DEFAULT_CONTROL_VALUE, LOW_PRICE, HIGH_PRICE, SIMILAR_ADVERTISEMENTS} from './data.js';

const mapFiltersForm = document.querySelector('.map__filters');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');

const checkType = ({offer}) => housingType.value === offer.type || housingType.value === DEFAULT_CONTROL_VALUE;

const checkRooms = ({offer}) => parseInt(housingRooms.value, 10) === offer.rooms || housingRooms.value === DEFAULT_CONTROL_VALUE;

const checkPrice = ({offer}) => {
  switch (housingPrice.value) {
    case DEFAULT_CONTROL_VALUE: return true;
    case 'middle': return offer.price >= LOW_PRICE && offer.price < HIGH_PRICE;
    case 'low': return offer.price < LOW_PRICE;
    case 'high': return offer.price >= HIGH_PRICE;
    default: return false;
  }
};

const checkFeatures = ({offer}) => {
  const checkedFeatures = Array.from(mapFiltersForm.querySelectorAll('.map__checkbox:checked'));
  return checkedFeatures.every((feature) => {
    if (offer.features === undefined) {
      offer.features = [];
    }
    return offer.features.includes(feature.value);
  });
};

const checkGuests = ({offer}) => parseInt(housingGuests.value, 10) === offer.guests || housingGuests.value === DEFAULT_CONTROL_VALUE;

const checkEveryFilter = (offer) => {
  const checks = [
    checkType,
    checkPrice,
    checkRooms,
    checkGuests,
    checkFeatures,
  ];

  return checks.every((check) => check(offer));
};

const setFiltersFormChange = (cb) => {
  mapFiltersForm.addEventListener('change', () => {
    cb();
  });
};

const getFilteredAdvertisements = (offers) => offers.filter(checkEveryFilter).slice(0, SIMILAR_ADVERTISEMENTS);


export {getFilteredAdvertisements, setFiltersFormChange};
