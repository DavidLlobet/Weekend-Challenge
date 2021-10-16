class Component {
  element;

  constructor(parentElement, className, tag) {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.parentElement = parentElement;
  }
}

export default Component;
