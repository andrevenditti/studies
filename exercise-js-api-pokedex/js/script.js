const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonName = document.querySelector(".pokemon__name");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonHealth = document.querySelector(".pokemon__health-item");
const pokemonAttack = document.querySelector(".pokemon__attack-item");
const pokemonDefense = document.querySelector(".pokemon__defense-item");
const pokemonSpeed = document.querySelector(".pokemon__speed-item");
const pokemonExperience = document.querySelector(".pokemon__experience-item");
const pokemonWheight = document.querySelector(".pokemon__wheight");
const pokemonHeight = document.querySelector(".pokemon__height");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");

const buttonPrev = document.querySelector(".btn__prev");
const buttonNext = document.querySelector(".btn__next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
	const APIResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon}`
	);
	if (APIResponse.status === 200) {
		const data = await APIResponse.json();
		return data;
	}
};

const renderPokemon = async (pokemon) => {
	pokemonName.innerHTML = "Loading...";

	input.value = "";
	const data = await fetchPokemon(pokemon);

	if (!data) {
		pokemonName.innerHTML = "Not Found";
		pokemonNumber.innerHTML = "";
		pokemonImage.src = "#";
		pokemonHealth.value = 0;
		pokemonAttack.value = 0;
		pokemonDefense.value = 0;
		pokemonSpeed.value = 0;
		pokemonExperience.value = 0;
		pokemonWheight.firstElementChild.innerHTML = "";
		pokemonHeight.firstElementChild.innerHTML = "";
	} else {
		searchPokemon = data.id;
		pokemonName.innerHTML = data.name.toUpperCase();
		pokemonNumber.innerHTML = `#${data.id}`;
		pokemonImage.src =
			data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
				"front_default"
			];
		pokemonHealth.value = data["stats"]["0"]["base_stat"];
		pokemonHealth.previousElementSibling.innerHTML =
			data["stats"]["0"]["base_stat"];
		pokemonAttack.value = data["stats"]["1"]["base_stat"];
		pokemonAttack.previousElementSibling.innerHTML =
			data["stats"]["1"]["base_stat"];
		pokemonDefense.value = data["stats"]["2"]["base_stat"];
		pokemonDefense.previousElementSibling.innerHTML =
			data["stats"]["2"]["base_stat"];
		pokemonSpeed.value = data["stats"]["5"]["base_stat"];
		pokemonSpeed.previousElementSibling.innerHTML =
			data["stats"]["5"]["base_stat"];
		pokemonExperience.value = data.base_experience;
		pokemonExperience.previousElementSibling.innerHTML = data.base_experience;
		pokemonWheight.firstElementChild.innerHTML = `${data.weight / 10}kg`;
		pokemonHeight.firstElementChild.innerHTML = `${data.height / 10}m`;
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	renderPokemon(input.value.toLowerCase());
});

buttonNext.addEventListener("click", () => {
	searchPokemon += 1;
	renderPokemon(searchPokemon);
});

buttonPrev.addEventListener("click", () => {
	if (searchPokemon > 1) {
		searchPokemon -= 1;
		renderPokemon(searchPokemon);
	}
});

renderPokemon(searchPokemon);
