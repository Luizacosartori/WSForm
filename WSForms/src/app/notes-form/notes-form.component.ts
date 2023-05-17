import { Component, ViewChild } from '@angular/core';
import { dataService } from '../dataService';
import { therapistData, clientData, treatmentData, massageForm } from '../formsData';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent {
  formsData: massageForm[] = new Array();
  clients: clientData[] = new Array();
  treatment: treatmentData[] = new Array();


  search_input = new FormControl('', Validators.required);  

  constructor(private dataService: dataService) {
    this.getData();
  }


  getData() {
    this.dataService.getClientData().subscribe(
      (d: any) => {
        this.clients = d;
      },
      (err: any) => { }
    );

    this.dataService.getTreatmentData().subscribe(
      (d: any) => {
        this.treatment = d;
      },
      (err: any) => { }
    );

    this.dataService.getMassageFormData().subscribe(
      (d: any) => {
        this.formsData = d;
      },
      (err: any) => {
        console.log(err)
      });
  }

  onSubmit() {
    console.log(this.search_input.value)
  }
}
