import { LightningElement } from "lwc";

export default class Augmentor extends LightningElement {
  startCounter = 0;

  handleStartChange(event) {
    this.startCounter = event.target.value;
  }

  handleMaximizeCounter() {
    this.template.querySelector("c-numerator").maximizeCounter();
  }
}
