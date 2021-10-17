import Page from "./Page.js";
import Button from "./Button.js";

const container = document.querySelector(".app");
let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
let count = 0;

const web = new Page(
  container,
  "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
);

const buttonPrevious = new Button(
  "buttons-page",
  "change-page",
  "button",
  "Anterior",
  () => {
    if (count === 0) {
    } else {
      count -= 10;
      url = `http://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`;
      container.innerHTML = "";
      const pageNew = new Page(container, url);
    }
  }
);

const buttonNext = new Button(
  "buttons-page",
  "change-page",
  "button",
  "Siguiente",
  () => {
    count += 10;
    url = `http://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`;
    container.innerHTML = "";
    const pageNew = new Page(container, url);
  }
);
