import Component from "./Component";

class Page extends Component {
  listPokemon;

  urlAPI;

  constructor(parentElement, className, tag, urlAPI) {
    super(parentElement, className, tag);
    this.parentElement = parentElement;
    this.urlAPI = urlAPI;
    this.element = document.createElement(tag);
    this.element.className = className;

    (async () => {
      const callPokeAPI = new Service(this.urlAPI);
      const comingPokemon = await callPokeAPI.getPokeAPI();
      this.listPokemon = comingPokemon.results;

      this.listPokemon.map((pokemon) => new Card(document.querySelector()));
    })();
  }
}
