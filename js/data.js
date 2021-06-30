const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const USERS = ['user01', 'user02', 'user03', 'user04', 'user05', 'user06', 'user07', 'user08', 'user09', 'user10', 'user11'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const SIMILAR_ADVERTISEMENTS = 10;

const PHOTO_WIDTH = 45;

const PHOTO_HEIGHT = 40;

const MIN_NAME_LENGTH = 30;

const MAX_NAME_LENGTH = 100;

const MAX_PRICE_LENGTH = 1000000;

const PRICE_VALUES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const NUMBER_OF_ROOMS = {
  oneRoom: '1',
  twoRooms: '2',
  threeRooms: '3',
  hundredRooms: '100',
};

const LAT_LANG_DEFAULT = {
  lat:35.680929,
  lng:139.768601,
};

const ALERT_SHOW_TIME = 5;

//const NUM_POOL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Пока не использую для создания аватара (использую USERS) const randomResult = shuffle(data.NUM_POOL);

export {TYPE, TIMES, FEATURES, PHOTOS, SIMILAR_ADVERTISEMENTS, USERS, PHOTO_WIDTH, PHOTO_HEIGHT, MIN_NAME_LENGTH, MAX_NAME_LENGTH, MAX_PRICE_LENGTH, PRICE_VALUES, NUMBER_OF_ROOMS, LAT_LANG_DEFAULT, ALERT_SHOW_TIME};
