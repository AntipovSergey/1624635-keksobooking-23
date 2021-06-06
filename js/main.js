//Для написания данной функции воспользовался кодом с сайта MDN
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return 'Максимальное значение должно быть больше минимального!';
  }

  if (min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Диапазон может быть только положительный, включая ноль!';
};

getRandomInteger (0, 6);

//Для написания данной функции воспользовался кодом с сайта MDN
const getRandomFloat = (min, max, float) => {
  if (max <= min) {
    return 'Максимальное значение должно быть больше минимального!';
  }

  if (min >= 0) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(float));
  }
  return 'Диапазон может быть только положительный, включая ноль!';
};

getRandomFloat (0, 6, 2);

//Задание 4-го раздела

const NUM_POOL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECK_IN = ['12:00', '13:00', '14:00'];

const CHECK_OUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const SIMILAR_ADVIRTISMENTS = 10;

//Код функции по получению уникальных значений, в которых отсутствуют повторы, взят с сайта https://habr.com/ru/company/ruvds/blog/534108/
const shuffle = (array) => {
  for(let j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
};
const randomResult = shuffle(NUM_POOL);

//Функция, выбирающая случайный элемент из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

//Код функции по созданию нового массива с рандомными значениями из предложенного массива взят с сайта https://qna.habr.com/q/844269
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

//Функция, возвращающая объявления
const createAdvertisment = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + 0 +  randomResult.pop() + '.png',
    },
    offer: {
      title: 'Объявление о сдаче помещения',
      address: getRandomFloat(10, 60, 5) + ', ' + getRandomFloat(10, 60, 5),
      price: getRandomInteger (500, 30000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 4),
      guests: getRandomInteger(1, 6),
      checkin: getRandomArrayElement(CHECK_IN),
      checkout: getRandomArrayElement(CHECK_OUT),
      features: createArr(FEATURES, getRandomInteger(0, 6)),
      description: 'Описание помещения',
      photos: createArr(PHOTOS, getRandomInteger(0, 3)),
    },
    location: {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000,139.80000, 5),
    },
  };
};
createAdvertisment();

//Создаем 10 объявлений
const similarAdvertisments = new Array(SIMILAR_ADVIRTISMENTS).fill(null).map(() => createAdvertisment());

console.log(similarAdvertisments);
