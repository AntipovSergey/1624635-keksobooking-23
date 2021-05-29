//Для написания данной функции воспользовался кодом с сайта MDN
const getRandomInteger = function (min, max) {
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
const getRandomFloat = function (min, max, float) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return 'Максимальное значение должно быть больше минимального!';
  }

  if (min >= 0) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(float));
  }
  return 'Диапазон может быть только положительный, включая ноль!';
};

getRandomFloat (0, 6, 2);
