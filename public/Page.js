import Component from "./Component.js";
import PokeService from "./Service.js";
import Card from "./Card.js";

class Page extends Component {
  listPokemon;

  urlAPI;

  constructor(parentElement, urlAPI) {
    super(parentElement, "container", "div");
    this.urlAPI = urlAPI;
    this.parentElement.append(this.element);
    console.log("hola");

    this.generateHTML();
    (async () => {
      const callPokeAPI = new PokeService(this.urlAPI);
      const comingPokemon = await callPokeAPI.getPokeApi(this.urlAPI);
      this.listPokemon = comingPokemon.results;
      const pokemonGroup = document.querySelector(".list");

      this.listPokemon.map(
        (pokemon) => new Card(pokemonGroup, "ficha", "li", pokemon.url)
      );
    })();
  }

  generateHTML() {
    this.element.innerHTML = `<header class="header">
  <div class="logo"></div>
  <button class="button">Todos los Pokemon</button>
  <button class="button">Mis Pokemon</button>
  <button class="button">Detalles</button>
</header>
<main class="main">
 <div class="buttons-Page">
  </div>
  <ul class="list"></ul>
</main>`;
  }
}

export default Page;
