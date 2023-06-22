//practice project that adds each pokemon sprite (all 1010) to a webpage through JavaScript

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 1010; i++) {
    const pokemon = document.createElement('div'); //creates a new container containing the sprite and number
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');  //adds the pokemon number based on the iteration
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');  //adds the sprite off the url 
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}
