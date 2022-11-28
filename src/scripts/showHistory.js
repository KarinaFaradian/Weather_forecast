export default function showHistory() {
  let cityList = [];
  // eslint-disable-next-line no-undef, eqeqeq
  if (localStorage.getItem('title') != undefined) {
    cityList = JSON.parse(localStorage.getItem('title'));
  }

  document.getElementById('submit-button').onclick = function () {
    const textInput = document.getElementById('text-input');
    const cityValue = textInput.value;
    const cityStorage = {};
    cityStorage.title = cityValue;
    const i = cityList.length;
    cityList[i] = cityStorage;
    showHistory();
    localStorage.setItem('title', JSON.stringify(cityList));
  };

  let history = '';
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in cityList) {
    history += `<ul>
                <li id='li'>${cityList[key].title}</li>
              </ul>`;
  }
  document.getElementById('city-list').innerHTML = history;
}
