import {ALERT_SHOW_TIME} from './data.js';

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const map = document.querySelector('.map');

const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessageElement = successMessageTemplate.cloneNode(true);
  successMessageElement.children[0].textContent = `Ваше объявление
  успешно размещено!`;
  map.appendChild(successMessageElement);

  document.addEventListener('keydown', (evt) => {
    if(evt.keyCode === 27) {
      successMessageElement.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {

    successMessageElement.classList.add('hidden');

  });
};

const showErrorMessage = () => {
  const errorMessageTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageElement.children[0].textContent = 'Ошибка размещения объявления';
  errorMessageElement.children[1].addEventListener('click', () => {
    errorMessageElement.classList.add('hidden');
  });
  map.appendChild(errorMessageElement);

  document.addEventListener('keydown', (evt) => {
    if(evt.keyCode === 27) {
      errorMessageElement.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {

    errorMessageElement.classList.add('hidden');

  });
};

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {fn.apply(this, arguments);};
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

export {getRandomInteger, getRandomFloat, shuffle, getRandomArrayElement, getValueTypeOffer, showAlert, showSuccessMessage, showErrorMessage, debounce};
