import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/GetContactList.getContacts';
export default class HelloWire extends LightningElement {
@track conList;

@wire(getContacts)
contactList({data,error}){
    if(data){
this.conList=data;
    }else if(error){
        console.log('hatalar'+error);

    }
}

}