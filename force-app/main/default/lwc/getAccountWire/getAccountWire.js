import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccClass.getAccounts'
export default class GetAccountWire extends LightningElement {
filterWord = '';

@wire(getAccounts, {filter:'$filterWord'}) 
accounts;//wire decorator'ı property'ye baglanabilir. 
//

handleChange(event){
this.filterWord = event.target.value;
}
}