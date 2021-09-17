const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
		electric: '#FCF7DE',
		water: '#DEF3FD',
		ground: '#f4e7da',
		rock: '#d5d5d4',
		fairy: '#fceaff',
		poison: '#98d7a5',
		bug: '#f8d5a3',
		dragon: '#97b3e6',
		psychic: '#eaeda1',
		flying: '#F5F5F5',
		fighting: '#E6E0D4',
		normal: '#F5F5F5'
}

const main_types = Object.keys(colors)
// console.log(main_types)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    let divCard = document.createElement('div');
		divCard.classList.add('pokemon');
		const type = pokemon.types[0].type.name
		divCard.style.background = colors[type]
		let pokeId =  pokemon.id.toString().padStart(3, 0)

		divCard.innerHTML = `
			<div class="img-container">
				<img src="${pokemon.sprites.front_default}" />
			</div>
			<div class=""info>
				<span class=""number>${pokeId}</span>
				<h3 class="type">${pokemon.name}</h3>
				<small class="type">Type: <span>${type}</span></small>
			</div>
		`
		poke_container.appendChild(divCard)
}

fetchPokemons()