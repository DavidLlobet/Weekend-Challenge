import Component from "./Component.js";
import PokeService from "./Service.js";
import Card from "./Card.js";
import Button from "./Button.js";

class Page extends Component {
  listPokemon;

  urlAPI;

  count = 0;

  constructor(parentElement, urlAPI) {
    super(parentElement, "container", "div");
    this.urlAPI = urlAPI;
    this.parentElement.append(this.element);

    this.generateHTML();
    this.generateButtons();
    this.updatePokemons();
  }

  updatePokemons() {
    (async () => {
      const callPokeAPI = new PokeService(this.urlAPI);
      const comingPokemon = await callPokeAPI.getPokeApi(this.urlAPI);
      this.listPokemon = comingPokemon.results;
      const pokemonGroup = document.querySelector(".list");
      pokemonGroup.innerHTML = "";

      this.listPokemon.map(
        (pokemon) => new Card(pokemonGroup, "ficha", "li", pokemon.url)
      );
    })();
  }

  generateButtons() {
    const buttonsContainer = document.querySelector(".buttons-page");
    const buttonPrevious = new Button(
      buttonsContainer,
      "change-page",
      "button",
      "Anterior",
      () => {
        if (this.count !== 0) {
          console.log("hola");
          this.count -= 10;
          this.urlAPI = `http://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.count}`;
          this.updatePokemons();
          // container.innerHTML = "";
          // const pageNew = new Page(container, url);
        }
      }
    );

    const buttonNext = new Button(
      buttonsContainer,
      "change-page",
      "button",
      "Siguiente",
      () => {
        console.log("hola");

        this.count += 10;
        this.urlAPI = `http://pokeapi.co/api/v2/pokemon?limit=10&offset=${this.count}`;
        this.updatePokemons();

        // container.innerHTML = "";
        // const pageNew = new Page(container, url);
      }
    );
  }

  generateHTML() {
    this.element.innerHTML = `<header class="header">
  <div class="logo"></div>
  <button class="button">Todos los Pokemon</button>
  <button class="button">Mis Pokemon</button>
  <button class="button">Detalles</button>
</header>
<main class="main">
 <div class="buttons-page">
  </div>
  <ul class="list"></ul>
</main>`;
  }
}

export default Page;
