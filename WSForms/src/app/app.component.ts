import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { formsData } from './formsData';
import { dataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WSForms';
  therapists: formsData[] = new Array();
  massageForm = new FormGroup({
    fullName: new FormControl(''), //must have space caracter
    dob: new FormControl(''), //date of birthday
    city: new FormControl(''),
    state: new FormControl(''), //Must have more than 2 caractrers
    postCode: new FormControl(''), //must be onlye number
    occupation: new FormControl(''), //Must have more than 2 caractrers
    employer: new FormControl(''), //Must have more than 2 caractrers
    email: new FormControl(''), //Must have @
    phone: new FormControl(''), //must only bu numbers
    emergencyPhone: new FormControl(''), //must only bu numbers
    emergencyContact: new FormControl(''), //Must have space
    relationship: new FormControl(''), //Must have more than 2 caractrers
  });
  constructor(private dataService: dataService) {}

  getData() {
    this.dataService.getPacientData().subscribe(
      (d: any) => {
        this.therapists = d;
      },
      (err: any) => {}
    );
  }

  onSubmit() {}
}
