//Для написания данной функции воспользовался кодом с сайта MDN
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return 'Максимальное значение должно быть больше минимального!';
  }

  if (min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Диапазон может быть только положительный, включая ноль!';
}

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

//Код функции по получению уникальных значений, в которых отсутствуют повторы, взят с сайта https://habr.com/ru/company/ruvds/blog/534108/
const shuffle = (array) => {
  for(let foo, bar, qux = array.length; qux; foo = parseInt(Math.random() * qux, 10), bar = array[--qux], array[qux] = array[foo], array[foo] = bar){
    return array;}
};

//Функция, выбирающая случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция, заменяющая значения на английском на русский язык (тип жилья)
const getValueTypeOffer = (type) => {
  if (type === 'flat') {
    return 'Квартира';
  } else if (type === 'bungalow') {
    return 'Бунгало';
  } else if (type === 'palace') {
    return 'Дворец';
  } else {
    return 'Дом';
  }
};

export {getRandomInteger, getRandomFloat, shuffle, getRandomArrayElement, getValueTypeOffer};
