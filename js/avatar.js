import {FILE_TYPES, PHOTO_OPTIONS} from './data.js';

const fileChooserUser = document.querySelector('.ad-form__field input[type=file]');
const previewUser = document.querySelector('.ad-form-header__preview img');
const preview = document.querySelector('.ad-form-header__preview');

fileChooserUser.addEventListener('change', () => {
  const file = fileChooserUser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewUser.src = reader.result;
      previewUser.width = PHOTO_OPTIONS.width;
      previewUser.height = PHOTO_OPTIONS.height;
      previewUser.style.borderRadius = `${PHOTO_OPTIONS.borderRadius}px`;
      preview.style.paddingLeft = `${PHOTO_OPTIONS.paddingLeft}px`;
    });

    reader.readAsDataURL(file);
  }
});

const fileChooserApartament = document.querySelector('.ad-form__upload input[type=file]');
const previewApartament = document.querySelector('.ad-form__photo');

fileChooserApartament.addEventListener('change', () => {
  const file = fileChooserApartament.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const newPhoto = document.createElement('img');
      newPhoto.src = reader.result;
      newPhoto.width = PHOTO_OPTIONS.width;
      newPhoto.height = PHOTO_OPTIONS.height;
      newPhoto.style.borderRadius = `${PHOTO_OPTIONS.borderRadius}px`;
      previewApartament.appendChild(newPhoto);
    });

    reader.readAsDataURL(file);
  }
});
