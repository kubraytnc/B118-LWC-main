public with sharing class AccClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String filter) {
        String keyName = '%' + filter + '%';
        return [SELECT Id, Phone,Name FROM Account WHERE Name LIKE : keyName];
    }
}