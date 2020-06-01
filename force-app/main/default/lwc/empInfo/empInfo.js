import { LightningElement,track } from 'lwc';

export default class EmpInfo extends LightningElement {
    @track name;

    nameHandler(event){
        this.name=event.target.value;
    }
}