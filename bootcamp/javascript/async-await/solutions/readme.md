### Exercise 1

````html
<button class="btn btn-default">Fetch User</button>
<hr>
<div class="text-placeholder"></div>
````

````javascript
const button = document.querySelector("button");
const textPlaceholder = document.querySelector(".text-placeholder");

const setText = (text) => {
    textPlaceholder.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...')
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000)
  })
}

button.addEventListener("click", async () => {
  const isAuth = await checkAuth()
  let user = null;
  if (isAuth) {
    user = await fetchUser()
  }
  setText(user.name)
});

````

### Exercise 2

````javascript
async function fetchPokemon(randomNumber) {
    let rsp = await fetch( `https://pokeapi.co/api/v2/pokemon/${ randomNumber }` );
    let data = await rsp.json();

    return data.name;
}

async function findPokemon()
{
    try {
        let result = await fetchPokemon(Math.floor(Math.random() * 151));
        document.writeln( `Pokemon: ${ result }` );
    } catch( err ) {
        console.error( err );
    }
}
findPokemon();
````

Extra assignments:
````html
<div class="pokemon">
  <div class="title">
    <h1></h1>
  </div>
  <div class="id"><p></p></div>
  <div class="image"><img /></div>
  <div class="info">
    <h2></h2>
  </div>
</div>

<div class="button">
  <button type="button" class="myButton" onclick="generatePokemon()">Generate Pokemon</button>
</div>
````

````js

function generatePokemon() {
  
  const apiData = {
  url: 'https://pokeapi.co/api/v2',
  type: 'pokemon',
  id: Math.floor(Math.random() * 898) + 1
  }

  const {url, type, id} = apiData;
  const apiUrl = `${url}/${type}/${id}/`;

  fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (pokemon) => generateHtml(pokemon))
    .catch(error => console.log('Request failed ', error))

  const generateHtml = (data) => {
    let pokemonType = data.types[0].type.name;
  
    document.querySelector('.title>h1').innerHTML = `<span style="text-transform: capitalize">${data.name}</span>`;
    document.querySelector('.id>p').innerHTML = `#${data.id}`;
    document.querySelector('.image>img').src = data.sprites.front_default;
    document.querySelector('.image>img').alt = data.name;
    document.querySelector('.info>h2').innerHTML = `Type: ${pokemonType}`;
  }
}
````

### Exercise 3

`````html
<body>
  <div id="main-container">
    <div id="flag-container">
      <img src="" alt="">
    </div>
    <div id="info-container">
      <select id="countries"></select>
      <p>Capital: <span id="capital"></span></p>
      <p>Dialing Code: <span id="dialing-code"></span></p>
      <p>Population: <span id="population"></span></p>
      <p>Currencies: <span id="currencies"></span></p>
      <p>Region: <span id="region"></span></p>
    </div>
  </div>
</body>
`````

```css
#main-container {
    width: 502px;
    margin: 30px auto;
    padding: 0;
}
#flag-container {
    height: 252px;
    background-color: #fff;
    border: 1px solid #333;
    margin-bottom: 20px;
}
#flag-container img {
    display: block;
    width: 100%;
    height: 100%;
}
```

````js
const countriesList = document.getElementById("countries");
let countries;

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";

  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesList.innerHTML = options;

  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
}
````
