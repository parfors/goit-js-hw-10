import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  ul: document.querySelector('.country-list'),
  div: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  const { value: countryName } = e.target;
  if (countryName) {
    const countriesPromise = fetchCountries(countryName.trim());
    countriesPromise
      .then(data => {
        if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length <= 10 && data.length >= 2) {
          refs.div.innerHTML = '';
          renderCountries(data);
        } else if (data.length === 1) {
          refs.ul.innerHTML = '';
          renderCountry(data);
        }
      })
      .catch(error =>
        Notify.failure('Oops, there is no country with that name')
      );
  } else {
    refs.ul.innerHTML = '';
    refs.div.innerHTML = '';
  }
}

function renderCountries(array) {
  const murkap = array
    .map(el => {
      return `<li class="country-item">
        <img src=${el.flags.png} alt="" class="country-img" width =40px >
        <p class="country-text">${el.name.official}</p>`;
    })
    .join('');
  refs.ul.innerHTML = murkap;
}

function renderCountry(array) {
  const countryObj = array[0];
  const markup = `<img src=${countryObj.flags.png} alt="" class="country-img" width =100px >
        <p class="country-capytal">Capital: <span class="country-span">${countryObj.capital[0]}</span></p>
        <p class="country-population">Population: <span class="country-span">${countryObj.population}</span></p>
        <p class="country-languages">Languages: <span class="country-span">${countryObj.languages.ukr}</span></p>`;
  refs.div.innerHTML = markup;
}
