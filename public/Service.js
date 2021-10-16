class PokeService {
  urlAPI;

  constructor(urlAPI) {
    this.urlAPI = urlAPI;
  }

  async getPokeApi() {
    const response = await fetch(this.urlAPI);
    const pokemon = await pokemon.json();
    return pokemon;
  }
}

export default PokeService;
