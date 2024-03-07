import { LightningElement } from "lwc";
// import { NavigationMixin } from "lightning/navigation";

export default class createRecordLwc extends LightningElement {
  createContact() {
    this.dispatchEvent(new CustomEvent("contactcreated"));
  }
}
