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

  massageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    suburb: new FormControl('', Validators.required),
    postal_code: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    medications: new FormControl('', Validators.required),
    employer: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    emergencycontactphone: new FormControl('', Validators.required),
    emergency_contact_name: new FormControl('', Validators.required),
    emergency_contact_relationship: new FormControl('', Validators.required),
    hasHealth_insurance: new FormControl('', Validators.required),
    health_insurance: new FormControl('')
    
  
  });

  constructor(private dataService: dataService) {
    console.log(this.massageForm.value)

  }

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
    console.log(this.massageForm.value)

  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  
}
