const mapAPI = "https://api.tomtom.com/map/1/staticimage?key=qZdBoTXiUh0klHvOzvSbZZ8vviAbBJE9&zoom=5&width=350&height=250";

const root = document.getElementById("root");
const popup = document.getElementById("popup");
const textInput = document.getElementById("text-input");
const form = document.getElementById("form");
const closing = document.getElementById("close");

let store = {
  city: "London",
  temperature: 0,
  description: "",
  lat: 51.517,
  lon: -0.106,
  properties: {
    cloudcover: {},
    humidity: {},
    pressure: {},
    visibility: {},
    wind: {}
  }
};

const renderProperty = (properties) => {
  return Object.values(properties)
    .map(({ title, value, icon }) => {
      return `<div class="property">
              <div class="property-icon">
                <img src="./img/icons/${icon}" alt="">
              </div>
              <div class="property-info">
                <div class="property-info__value">${value}</div>
                <div class="property-info__description">${title}</div>
              </div>
            </div>`;
    })
    .join("");
};

const fetchData = async () => {
  try {
    const city = localStorage.getItem("city") || store.city;
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=411ca8d96f45514a3505bcc663681805&units=metric`);
    const data = await result.json();
    const {
      coord:
        {
          lon,
          lat
        },
      weather: [{
        main: description
      }],
      main: {
        temp: temperature,
        humidity,
        pressure
      },
      visibility,
      name,
      wind
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
          title: "humidity",
          value: `${humidity} %`,
          icon: "humidity.png"
        },
        pressure: {
          title: "pressure",
          value: `${pressure} mmHg`,
          icon: "gauge.png"
        },
        wind: {
          title: "wind speed",
          value: `${wind.speed} km/h`,
          icon: "wind.png"
        },
        visibility: {
          title: "visibility",
          value: `${visibility}`,
          icon: "visibility.png"
        }
      }
    };
    renderComponent();
  } catch (err) {
    console.log(err);
  }
};
fetchData();

const getImage = (description) => {
  switch (description) {
    case "Rain":
      return "partly.png";
    case "Clouds":
      return "cloudy.png";
    case "Haze":
      return "fog.png";
    case "Sunny":
      return "sunny.png";
    case "Clear":
      return "clear.png";
    default:
      return "temp.png";
  }
};

const markup = () => {
  const {
    city, description, temperature, isDay, properties
  } = store;

  let containerClass = isDay === "yes" ? "is-day" : "";

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
                <img class="icon" src="./img/${getImage(description)}" alt="" />
                <div class="description">${description}</div>
            </div>
            <div>
              <div id="properties">${renderProperty(properties)}</div>
            </div>
          </div>`;
};

const togglePopupClass = () => {
  popup.classList.toggle("active");
};

const renderComponent = () => {
  root.innerHTML = markup();

  const city = document.getElementById("city");
  city.addEventListener("click", togglePopupClass);
};

const handleInput = (e) => {
  store = {
    ...store,
    city: e.target.value
  };
};

const handleSubmit = (e) => {
  e.preventDefault();
  let value = store.city;

  if (!value) return null;

  localStorage.setItem("query", value);
  fetchData().then(fetchMap);
  togglePopupClass();
};

async function fetchMap() {
  try {
    const {
      lat, lon
    } = store;
    const url = `${mapAPI}&center=${lon},${lat}&format=jpg`;
    const response = await fetch(url);
    const blob = await response.blob();
    let map = document.getElementById("map");
    map.style = "position:absolute;top:30px;right:50px;";
    map.src = URL.createObjectURL(blob);
    fetchData();
  } catch (error) {
    console.log(error);
  }
}
fetchMap();

closing.addEventListener("click", handleSubmit);
form.addEventListener("submit", handleSubmit);
textInput.addEventListener("input", handleInput);
