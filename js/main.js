import './utils.js';
import './create-advertisement.js';
import './generate-similar-elements.js';
import './form.js';
import './form-condition.js';
import './create-map.js';
import './api.js';
import {setUserFormSubmit} from './form.js';
import {resetForm} from './form-condition.js';
import {getData} from './api.js';
import {SIMILAR_ADVERTISEMENTS} from './data.js';
import {generateAdvertisements} from './create-map.js';

getData((similarAdvertisements) => {
  generateAdvertisements(similarAdvertisements.slice(0, SIMILAR_ADVERTISEMENTS));
});


setUserFormSubmit(resetForm);

