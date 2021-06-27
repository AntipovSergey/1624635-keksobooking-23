const advertisementForm = document.querySelector('.ad-form');
const advertisementFormElements = advertisementForm.children;
const advertisementMap = document.querySelector('.map__filters');
const advertisementMapElements = advertisementMap.children;

const formInactiveConditionHandler = () => {
  advertisementForm.classList.add('ad-form--disabled');
  for (let index = 0; index < advertisementFormElements.length; index++) {
    advertisementFormElements[index].setAttribute('disabled', 'disabled');
  }
  advertisementMap.classList.add('ad-form--disabled');
  for (let index = 0; index <  advertisementMapElements.length; index++) {
    advertisementMapElements[index].setAttribute('disabled', 'disabled');
  }
};

const formActiveConditionHandler = () => {
  advertisementForm.classList.remove('ad-form--disabled');
  for (let index = 0; index < advertisementFormElements.length; index++) {
    advertisementFormElements[index].removeAttribute('disabled', 'disabled');
  }
  advertisementMap.classList.remove('ad-form--disabled');
  for (let index = 0; index <  advertisementMapElements.length; index++) {
    advertisementMapElements[index].removeAttribute('disabled', 'disabled');
  }
};

export {formInactiveConditionHandler, formActiveConditionHandler};
