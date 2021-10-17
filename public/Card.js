import Component from "./Component.js";
import PokeService from "./Service.js";

class Card extends Component {
  pokemon = {};

  name;

  id;

  type1;

  type2;

  image;

  url;

  constructor(parentElement, className, tag, url) {
    super(parentElement, className, "li");
    this.element = document.createElement(tag);
    this.url = url;
    this.element.className = className;
    this.getData();
  }

  async getData() {
    const getOnePokemon = new PokeService(this.url);
    const showOnePokemon = await getOnePokemon.getPokeApi(this.url);
    this.pokemon = showOnePokemon;
    this.name = showOnePokemon.name.toUpperCase();
    this.id = showOnePokemon.id;
    this.type1 = showOnePokemon.types[0].type.name;
    if (showOnePokemon.types[1]) {
      this.type2 = showOnePokemon.types[1].type.name;
    }
    if (this.type2 === undefined) {
      this.type2 = "";
    }
    this.image = showOnePokemon.sprites.other.dream_world.front_default;

    this.createHTML();
  }

  createHTML() {
    this.element.innerHTML = ` <div class="title">
    <div class="number">${this.id}</div>
    <h2 class="h2">${this.name}</h2>
  </div>
  <img class="img" src="${this.image}" />
  <div class="type">
    <div class="type1">${this.type1}</div>
    <div class="type2">${this.type2}</div>
  </div>`;
    this.parentElement.append(this.element);
  }
}

export default Card;
