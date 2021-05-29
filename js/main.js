//Для написания данной функции воспользовался кодом с сайта MDN
const getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return console.log('Максимальное значение должно быть больше минимального!');
  }

  if (min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    console.log('Диапазон может быть только положительный, включая ноль!');
}

getRandomInteger (0, 6);

//Для написания данной функции воспользовался кодом с сайта MDN
const getRandomInteger = function (min, max, float) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return console.log('Максимальное значение должно быть больше минимального!');
  }

  if (min >= 0) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(float));
  }
    console.log('Диапазон может быть только положительный, включая ноль!');
}

getRandomInteger (0, 6);
