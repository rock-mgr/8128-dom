const BASE_API_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemon(searchTerms) {
    try {
        const response = await axois.get(BASE_API_URL + `pokemon/${searchTerms}`);
        return response.data;
    } catch (e) {
        console.log("Caught error", e);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        const pokemon = await fetchPokemon(searchTerms);
        if (pokemon) {
            const imageUrl = pokemon.sprites.other["official-artwork"].front_shiny;
            document.querySelector("#result").innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${imageUrl}"/>
        `
        } else {
            document.querySelector("#result").innerHTML = "<p>Error finding pokemon</p>";
        }
        console.log(pokemon);
    })

});