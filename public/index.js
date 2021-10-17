import Page from "./Page.js";

const container = document.querySelector(".app");

const Web = new Page(
  container,
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
);
