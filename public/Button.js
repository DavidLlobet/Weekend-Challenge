import Component from "./Component.js";

class Button extends Component {
  actionOnClick;

  text;

  constructor(parentElement, className, tag, text, actionOnClick) {
    super(parentElement, className, tag);
    this.actionOnClick = actionOnClick;
    this.text = text;
    this.element.innerHTML = this.text;
    this.element.addEventListener("click", this.actionOnClick);
    this.parentElement.append(this.element);
  }
}

export default Button;
