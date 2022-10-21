const weatherAPI = "http://api.weatherstack.com/current?access_key=416f00627319577ff56a74a3c74fceca";
const mapAPI = "http://api.tomtom.com/map/1/staticimage?key=qZdBoTXiUh0klHvOzvSbZZ8vviAbBJE9&zoom=5&width=350&height=250";

const root = document.getElementById("root");
const popup = document.getElementById("popup");
const textInput = document.getElementById("text-input");
const form = document.getElementById("form");
const closing = document.getElementById("close");

let store = {
  city: "London",
  temperature: 0,
  observationTime: "00:00 AM",
  isDay: "yes",
  description: "",
  lat: 51.517,
  lon: -0.106,
  properties: {
    feelslike: {},
    cloudcover: {},
    humidity: {},
    pressure: {},
    uvIndex: {},
    visibility: {},
    windSpeed: {}
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
    const query = localStorage.getItem("query") || store.city;
    const result = await fetch(`${weatherAPI}&query=${query}`);
    const data = await result.json();
    const {
      current: {
        cloudcover,
        temperature,
        humidity,
        observation_time: observationTime,
        pressure,
        uv_index: uvIndex,
        visibility,
        is_day: isDay,
        weather_descriptions: description,
        wind_speed: windSpeed
      },
      location: {
        name,
        lat,
        lon
      }
    } = data;

    store = {
      ...store,
      isDay,
      city: name,
      lat,
      lon,
      temperature,
      observationTime,
      description: description[0],
      properties: {
        cloudcover: {
          title: "cloudcover",
          value: `${cloudcover} %`,
          icon: "cloud.png"
        },
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
        uvIndex: {
          title: "uv Index",
          value: `${uvIndex}`,
          icon: "uv-index.png"
        },
        visibility: {
          title: "visibility",
          value: `${visibility} km`,
          icon: "visibility.png"
        },
        windSpeed: {
          title: "wind speed",
          value: `${windSpeed} km/h`,
          icon: "wind.png"
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
  const value = description.toLowerCase();

  switch (value) {
    case "partly cloudy":
      return "partly.png";
    case "cloud":
      return "cloudy.png";
    case "haze":
      return "fog.png";
    case "sunny":
      return "sunny.png";
    default:
      return "temp.png";
  }
};

const markup = () => {
  const {
    city, description, observationTime, temperature, isDay, properties
  } = store;

  let containerClass = isDay === "yes" ? "is-day" : "";

  return `<div class="container ${containerClass}">
            <div class="top">
              <div class="top-left">
                <div class="city">
                  <div class="city-subtitle">Weather today in</div>
                    <div class="city-title" id="city">
                    <span>${city}</span>
                    <div class="city-info__subtitle">as of ${observationTime}</div>
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
