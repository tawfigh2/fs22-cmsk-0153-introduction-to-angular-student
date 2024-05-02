import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  firstName: string = 'Hammad';
  lastName: string = 'Tawfig';

  constructor() { }

}
