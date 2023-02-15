import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    number1 = 0;
    number2 = 0;
    result = 0;
    @track previousResult =[]; 
    showPreviousResult = false;
    number1Handler(event){
       this.number1 = event.target.value;
    } 
    number2Handler(event){
        this.number2 = event.target.value;
     } 

     handleChange(event){
        const field = event.target.name;
        if(field === "topla"){
            this.previousResult.push(this.result);
            this.result = parseInt(this.number1)+ parseInt(this.number2);
        }
        if(field === "cikar"){
            this.previousResult.push(this.result);
            this.result = parseInt(this.number1) - parseInt(this.number2);
        }
        if(field === "carp"){
            this.previousResult.push(this.result);
            this.result = parseInt(this.number1) * parseInt(this.number2);
        }
        if(field === "bol"){
            this.previousResult.push(this.result);
            this.result = parseInt(this.number1) / parseInt(this.number2);
        }
        if(field === "reset"){
         this.result = 0;
        // valueOf.number1 = null;
        // valueOf.number2 = null;
         this.previousResult = []; 
        }
     }
     previousResultHandler(event){
        this.showPreviousResult = event.target.checked;
     }

}