import { TestWatcher } from "@jest/core";
import Component from "./Component";

describe("Given a Component function", () => {
  describe("When it receives a parentElement 'div', a class named 'class' and a 'p' element", () => {
    test("Then it should render a 'p' element with a class named 'class'", () => {
      // Arrange
      const parentElement = document.createElement("div");
      const className = "class";
      const element = "p";

      // Act
      new Component(parentElement, className, element);

      // Assert
      const result = parentElement.querySelector("p.class");
      expect(result).not.toBeNull();
    });
  });
});
