public with sharing class SearchContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactsWithAppointment() {
        return [SELECT Id, Name FROM Contact WHERE Id IN (SELECT Contact__c FROM Appointment__c) WITH SECURITY_ENFORCED LIMIT 10];
    }
}