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