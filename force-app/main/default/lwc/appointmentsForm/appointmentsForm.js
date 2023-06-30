import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import APPOINTMENT__OBJECT from "@salesforce/schema/Appointment__c";
import NAME_FIELD from "@salesforce/schema/Appointment__c.Name";
import DATE_FIELD from "@salesforce/schema/Appointment__c.Date__c";
import CONTACT_FIELD from "@salesforce/schema/Appointment__c.Contact__c";
import DURATION_FIELD from "@salesforce/schema/Appointment__c.Duration__c";

export default class AppointmentsForm extends LightningElement {
  objApiName = APPOINTMENT__OBJECT;
  appointmentSubject = NAME_FIELD;
  date = DATE_FIELD;
  duration = DURATION_FIELD;
  contact = CONTACT_FIELD;

  handleSuccess(event) {
    const toastEv = new new ShowToastEvent({
      title: "Apptm created",
      message: "Apt created!! " + event.detail.id,
      variant: "success"
    })();
    this.dispatchEvent(toastEv);
  }
}
