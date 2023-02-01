import { LightningElement, track } from 'lwc';

export default class MyLWCComponent extends LightningElement {
  @track array = [];

  handleNumberChange(event) {
    this.array = Array.from({ length: event.target.value }, (_, i) => i + 1);
  }
}
