
import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class AccountList extends LightningElement {
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getRecord, { objectApiName: ACCOUNT_OBJECT, fields: ['Name'] })
    accounts;

    handleCheckboxChange(event) {
        console.log(event.target.value);
    }
}


