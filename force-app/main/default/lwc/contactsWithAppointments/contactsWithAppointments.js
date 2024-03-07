import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import findContactsWithAppointment from "@salesforce/apex/SearchContacts.findContactsWithAppointment";

const COLUMNS = [
  {
    label: "Name",
    fieldName: "Name",
    editable: true,
    type: "button",
    typeAttributes: {
      label: { fieldName: "Name" },
      name: "urlredirect",
      variant: "base"
    }
  }
];

export default class ContactsWithAppointments extends NavigationMixin(
  LightningElement
) {
  @wire(findContactsWithAppointment)
  contacts;

  columns = COLUMNS;

  handleRowAction(ev) {
    const contactId = ev.detail.row.Id;
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: contactId,
        objectApiName: "Contact",
        actionName: "view"
      }
    });
  }
}
