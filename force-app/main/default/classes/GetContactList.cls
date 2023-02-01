public with sharing class GetContactList {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts() {
        return [Select Id, LastName From Contact LIMIT 20 ];
    }
}