import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { formsData } from './formsData';
import { dataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WSForms';
  therapists: formsData[] = new Array();
  massageForm = new FormGroup({
    fullName: new FormControl(''),
    state: new FormControl(''),
    postCode: new FormControl(''),
    occupation: new FormControl(''),
    employer: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    emergencyPhone: new FormControl(''),
    emergencyContact: new FormControl(''),
    relationship: new FormControl(''),
  })
  constructor(private dataService: dataService) {

  }
  getData() {
    this.dataService.getPacientData().subscribe(
      (d: any) => {
        this.therapists = d;
      },
      (err: any) => {

      });
  }

  onSubmit(){

  }
}
