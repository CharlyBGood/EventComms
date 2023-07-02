import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
import APPOINTMENT__OBJECT from "@salesforce/schema/Appointment__c";
import NAME_FIELD from "@salesforce/schema/Appointment__c.Name";
import DATE_FIELD from "@salesforce/schema/Appointment__c.Date__c";
import CONTACT_FIELD from "@salesforce/schema/Appointment__c.Contact__c";
import DURATION_FIELD from "@salesforce/schema/Appointment__c.Duration__c";

export default class AppointmentsForm extends NavigationMixin(
  LightningElement
) {
  objApiName = APPOINTMENT__OBJECT;
  appointmentSubject = NAME_FIELD;
  date = DATE_FIELD;
  duration = DURATION_FIELD;
  contact = CONTACT_FIELD;
  appointmentId;

  handleContactCreated() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      }
    });
  }

  handleSuccess(event) {
    this.appointmentId = event.detail.id;
    const toastEv = new new ShowToastEvent({
      title: "Appointment created",
      message: "Appointment record name: " + this.appointmentSubject,
      variant: "success"
    })();
    this.dispatchEvent(toastEv);
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        objectApiName: "Appointment__c",
        actionName: "view",
        recordId: this.appointmentId
      }
    })
  }
}
