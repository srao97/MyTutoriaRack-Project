import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts=[
        {
            Id:1,
            Name:'Amy',
            Title:'VP'
        },
        {
            Id:2,
            Name:'Rao',
            Title:'Manager'
        },
        {
            Id:3,
            Name:'Aneesh',
            Title:'Team Lead'
        }
    ]
}