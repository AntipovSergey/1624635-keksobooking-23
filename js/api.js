const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((advertisements) => {
      onSuccess(advertisements);
    });
};

const sendData = (onSuccess, onFail, body) => {};

export {getData, sendData};
