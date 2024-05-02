import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  person = {
    id: 1,
    firstName: 'Allan',
    lastName: 'Levsen',
    address: '123 Jasper Avenue',
    city: 'Calgary',
    province: 'Alberta',
    phone: '7801231234',
    lastUpdated: new Date('December 12, 2021 10:13:11')
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
