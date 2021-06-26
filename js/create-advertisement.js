import * as data from './data.js';
import {getRandomInteger, getRandomFloat, shuffle, getRandomArrayElement} from './utils.js';

//Получаем уникальные значения, в которых отсутствуют повторы
const randomResult = shuffle(data.USERS); //Пока не использую для создания аватара (использую USERS) const randomResult = shuffle(data.NUM_POOL);

//Код функции по созданию нового массива с рандомными значениями из предложенного массива взят с сайта https://qna.habr.com/q/844269
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

//Функция, возвращающая объявления
const createAdvertisement = () => ({
  author: {
    //avatar: `img/avatars/user${0}${randomResult.pop()}.png`, Пока не использую для создания аватара (использую USERS)
    avatar: `img/avatars/${randomResult.pop()}.png`,
  },
  offer: {
    title: 'Объявление о сдаче помещения',
    address: `${ getRandomFloat(35.65000, 35.70000, 5)}, ${  getRandomFloat(139.70000,139.80000, 5)}`,
    price: getRandomInteger (500, 30000),
    type: getRandomArrayElement(data.TYPE),
    rooms: getRandomInteger(1, 4),
    guests: getRandomInteger(1, 6),
    checkin: getRandomArrayElement(data.TIMES),
    checkout: getRandomArrayElement(data.TIMES),
    features: createArr(data.FEATURES, getRandomInteger(0, 6)),
    description: 'Описание помещения',
    photos: createArr(data.PHOTOS, getRandomInteger(0, 3)),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000,139.80000, 5),
  },
});

//Создаем 10 объявлений
const createAdvertisements = () => new Array(data.SIMILAR_ADVERTISEMENTS).fill(null).map(() => createAdvertisement());

export{createAdvertisements};
