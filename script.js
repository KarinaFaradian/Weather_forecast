import './style.css';

const mapAPI =
  'https://api.tomtom.com/map/1/staticimage?key=qZdBoTXiUh0klHvOzvSbZZ8vviAbBJE9&zoom=5&width=350&height=250';
const positionAPI = 'https://api.ipregistry.co/?key=unv4cf1lm9iwwnzv';

const root = document.getElementById('root');
const popup = document.getElementById('popup');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');
const closing = document.getElementById('close');

let store = {
  city: '',
  temperature: 0,
  description: '',
  lat: 0,
  lon: 0,
  properties: {
    cloudcover: {},
    humidity: {},
    pressure: {},
    visibility: {},
    wind: {},
  },
};

async function getCurrentPosition() {
  try {
    const response = await fetch(positionAPI);
    const currentPosition = await response.json();
    const {
      location: { city, latitude, longitude },
    } = currentPosition;
    store = {
      ...store,
      city,
      lat: latitude,
      lon: longitude,
    };
  } catch (error) {
    console.log(error);
  }
}
getCurrentPosition().then(fetchMap);

const renderProperty = (properties) =>
  Object.values(properties)
    .map(
      ({ title, value, icon }) => `<div class="property">
              <div class="property-icon">
                <img src="${icon}" alt="">
              </div>
              <div class="property-info">
                <div class="property-info__value">${value}</div>
                <div class="property-info__description">${title}</div>
              </div>
            </div>`
    )
    .join('');

const fetchData = async () => {
  try {
    const city = localStorage.getItem('city') || store.city;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=411ca8d96f45514a3505bcc663681805&units=metric`
    );
    const data = await result.json();
    const {
      coord: { lon, lat },
      weather: [{ main: description }],
      main: { temp: temperature, humidity, pressure },
      visibility,
      name,
      wind,
    } = data;

    store = {
      ...store,
      city: name,
      lat,
      lon,
      temperature,
      description,
      properties: {
        humidity: {
          title: 'humidity',
          value: `${humidity} %`,
          icon: './img/icons/humidity.png',
        },
        pressure: {
          title: 'pressure',
          value: `${pressure} mmHg`,
          icon: './img/icons/gauge.png',
        },
        wind: {
          title: 'wind speed',
          value: `${wind.speed} km/h`,
          icon: './img/icons/wind.png',
        },
        visibility: {
          title: 'visibility',
          value: `${visibility}`,
          icon: './img/icons/visibility.png',
        },
      },
    };
    renderComponent();
  } catch (err) {
    console.log(err);
  }
};
fetchData();

const getImage = (description) => {
  switch (description) {
    case 'Rain':
      return './img/partly.png';
    case 'Clouds':
      return './img/cloudy.png';
    case 'Haze':
      return './img/fog.png';
    case 'Sunny':
      return './img/sunny.png';
    case 'Clear':
      return './img/clear.png';
    default:
      return './img/temp.png';
  }
};

const markup = () => {
  const { city, description, temperature, isDay, properties } = store;

  const containerClass = isDay === 'yes' ? 'is-day' : '';

  return `<div class="container ${containerClass}">
            <div class="top">
              <div class="top-left">
                <div class="city">
                  <div class="city-subtitle">Weather today in</div>
                    <div class="city-title" id="city">
                    <span>${city}</span>
                    <div class="city-info__title">${temperature}°</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <img class="icon" src="${getImage(description)}" alt="hi" />
                <div class="description">${description}</div>
            </div>
            <div>
              <div id="properties">${renderProperty(properties)}</div>
            </div>
          </div>`;
};

const togglePopupClass = () => {
  popup.classList.toggle('active');
};

const renderComponent = () => {
  root.innerHTML = markup();

  const city = document.getElementById('city');
  city.addEventListener('click', togglePopupClass);
};

const handleInput = (e) => {
  store = {
    ...store,
    city: e.target.value,
  };
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = store.city;

  if (!value) return null;

  localStorage.setItem('query', value);
  fetchData().then(fetchMap);
  togglePopupClass();
};

async function fetchMap() {
  try {
    const { lat, lon } = store;
    const url = `${mapAPI}&center=${lon},${lat}&format=jpg`;
    const response = await fetch(url);
    const blob = await response.blob();
    const map = document.getElementById('map');
    map.style = 'position:absolute;top:30px;right:50px;';
    map.src = URL.createObjectURL(blob);
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
fetchMap();

closing.addEventListener('click', handleSubmit);
form.addEventListener('submit', handleSubmit);
textInput.addEventListener('input', handleInput);

let cityList = [];
// eslint-disable-next-line no-undef, eqeqeq
if (localStorage.getItem('title') != undefined) {
  cityList = JSON.parse(localStorage.getItem('title'));
  showHistory();
}

// eslint-disable-next-line func-names
document.getElementById('submit-button').onclick = function () {
  const cityValue = textInput.value;
  const cityStorage = {};
  cityStorage.title = cityValue;
  const i = cityList.length;
  cityList[i] = cityStorage;
  showHistory();
  localStorage.setItem('title', JSON.stringify(cityList));
};

function showHistory() {
  let history = '';
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in cityList) {
    history += `<ul>
                <li id='li'>${cityList[key].title}</li>
              </ul>`;
  }
  document.getElementById('city-list').innerHTML = history;
}
