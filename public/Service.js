class PokeService {
  urlAPI;

  constructor(urlAPI) {
    this.urlAPI = urlAPI;
  }

  async getPokeApi() {
    const response = await fetch(this.urlAPI);
    const pokemon = await response.json();
    return pokemon;
  }
}

export default PokeService;
