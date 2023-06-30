import { LightningElement, api } from "lwc";

export default class Numerator extends LightningElement {
  // @api counter = 0;
  _currentCount = 0;
  priorCount = 0;
  @api
  get counter() {
    return this._currentCount;
  }

  set counter(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }

  handleMultiply(ev) {
    const factor = ev.detail;
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.counter *= factor;
  }

  @api
  maximizeCounter() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.counter += 1000000;
  }
}
