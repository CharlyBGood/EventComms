import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";


export default class createRecordLwc extends NavigationMixin(LightningElement) {
 
  contactId;
  name = "";

  handleContactCreate(ev) {
    this.contactId = undefined;
    this.name = ev.target.value;
    this.createContact();
  }


  
  createContact() {
    this[NavigationMixin.Navigate]({
          type: "standard__objectPage",
          attributes: {
            objectApiName: "Contact",
            actionName: "new",
            recordId: this.contactId
          }
        });
  }
}
