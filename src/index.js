import './css/styles.css';
import debounce from  'lodash.debounce'
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
}

refs.input.addEventListener('input', debounce(inputHandler, 300));

function inputHandler(e) {
    const {  value: countryName } = e.target; 
    if (countryName) {
        fetchCountries(countryName.trim());
    }
    else {}
}


// console.log(fetchCountries('ukraine'));


// const url = 'https://restcountries.com/v3.1/name/peru'

// fetch(url).then(response => response.json()).
//     then(data => console.log(data[0].name.official));




// const href = location.href;
// const url1 = new URL(href);
// console.log(url1);