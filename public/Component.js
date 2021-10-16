class Component {
  element;

  constructor(parentElement, className, tag) {
    this.element = document.createElement(tag);
    this.element.className = className;
    const container = document.querySelector(parentElement);
    container.prepend(this.element);
  }
}

export default Component;
