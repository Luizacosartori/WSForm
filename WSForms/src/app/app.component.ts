import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { therapistData, clientData, treatmentData } from './formsData';
import { dataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WSForms';
  therapists: therapistData[] = new Array();
  clients: clientData[] = new Array();
  treatments: treatmentData[] = new Array();

  account_validation_messages = {
    'fullname': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'DOB': [
      { type: 'required', message: 'Date of Birt is required' },
      { type: 'pattern', message: 'Phone must be numbers only' }
    ],
    'adress': [
      { type: 'required', message: 'Address is required' },
    ],
    'City': [
      { type: 'required', message: 'City is required' }
    ],
  }


  massageForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    employer: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    emergencyPhone: new FormControl('', Validators.required),
    emergencyContact: new FormControl('', Validators.required),
    relationship: new FormControl('', Validators.required),
  });
  constructor(private dataService: dataService) { }

  getData() {
    this.dataService.getTeraphistData().subscribe(
      (d: any) => {
        this.therapists = d;
      },
      (err: any) => { }
    );
    this.dataService.getClientData().subscribe(
      (d: any) => {
        this.clients = d;
      },
      (err: any) => { }
    );
    this.dataService.getTreatmentData().subscribe(
      (d: any) => {
        this.treatments = d;
      },
      (err: any) => { }
    );
  }

  onSubmit() {
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
