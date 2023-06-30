import { LightningElement } from "lwc";

export default class Controls extends LightningElement {
  factors = [0, 2, 3, 4, 5, 6];

  handleAdd() {
    this.dispatchEvent(new CustomEvent("add"));
  }

  handleSubtract() {
    this.dispatchEvent(new CustomEvent("subtract"));
  }

  handleMultiply(ev) {
    const factor = ev.target.dataset.factor;
    this.dispatchEvent(
      new CustomEvent("multiply", {
        detail: factor
      })
    );
  }

  handleDivide() {
    // toDo
  }
}
