import './utils.js';
import './form.js';
import './form-condition.js';
import './create-map.js';
import './api.js';
import {setUserFormSubmit} from './form.js';
import {resetForm} from './form-condition.js';
import {getData} from './api.js';
import {SIMILAR_ADVERTISEMENTS, RERENDER_DELAY} from './data.js';
import {generateAdvertisements} from './create-map.js';
import {debounce} from './utils.js';
import {setFiltersFormChange} from './filter.js';

getData((similarAdvertisements) => {
  setFiltersFormChange(debounce(() => generateAdvertisements(similarAdvertisements.slice(0, SIMILAR_ADVERTISEMENTS)),RERENDER_DELAY));
});

setUserFormSubmit(resetForm);
