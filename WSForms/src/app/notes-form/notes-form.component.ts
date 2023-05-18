import { Component, ElementRef, ViewChild } from '@angular/core';
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


  }
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  onSubmit() {
    let myDiv = <HTMLElement>document.getElementById("showInfo");
    console.log(this.search_input.value)
    this.dataService.getMassageFormById(Number(this.search_input.value)).subscribe(
      (d: any) => {
        this.formsData = d;
        myDiv.innerHTML = `
          <mat-card-content>
          <div class="two-collum">
            <p>Full Name: ${d[0].full_name} </p>
            <p>Date Of Birth: ${this.formatDate(d[0].date_of_birth)}</p>
          </div>
          <div class="two-collum">
            <p>Address: ${d[0].address}</p>
            <p>Suburb: ${d[0].suburb}</p>
          </div>
          <div class="two-collum">
            <p>State: ${d[0].state}</p>
            <p>Postal Code: ${d[0].postal_code}</p>
          </div>
          <div class="two-collum">
            <p>Occupation: ${d[0].occupation}</p>
            <p>Email: ${d[0].email}</p>
          </div>
         <div class="two-collum">
          <p>Phone Number: ${d[0].phone}</p>
          <p>Health Insurance: ${d[0].health_insurance}</p>
         </div>
          <div class="two-collum">
            <p>Emergency Contact: ${d[0].emergency_contact_name}</p>
            <p>Emergency Contact relationship: ${d[0].emergency_contact_relationship}</p>
          </div>
         <div class="two-collum">
            <p>Emergency Contact Phone: ${d[0].emergency_contact_phone}</p>
            <p>Taking Medication?  ${d[0].taking_medication}</p>
         </div>
          <div class="two-collum">
            <p>Medication list:  ${d[0].taking_medication_list}</p>
            <p>Pregnant?  ${d[0].pregnant}</p>
          </div>
          <div class="two-collum">
            <p>How far?  ${d[0].pregnant_how_far}</p>
            <p>High Risk?  ${d[0].pregnant_high_risk}</p>
          </div>
          <div class="two-collum">
            <p>Suffer from Chronic Pain?  ${d[0].chronic_pain}</p>
            <p>Chronic Pain Explained: ${d[0].chronic_pain_explanation}</p>
          </div>
          <div class="two-collum">
              <p>Have you had any orthopedic Injuries? ${d[0].orthopedic_injuries}</p>
              <p>Orthopedic Injuries list: ${d[0].orthopedic_injuries_list}</p>
          </div>
         <div class="two-collum">
         <p>Emergency Contact Phone: ${d[0].emergency_contact_phone}</p>
          <p>Emergency Contact Phone: ${d[0].emergency_contact_phone}</p>
         </div>
          <div class="two-collum">
            <p>Emergency Contact Phone: ${d[0].emergency_contact_phone}</p>
            <p>Emergency Contact Phone: ${d[0].emergency_contact_phone}</p>
          </div>
          
          <button mat-button style="display: inline-block; background-color: lightpurple;"
          (click)="SavePDF()">Edit Massage Form</button>          
          </mat-card-content> `

      },
      (err: any) => {
        console.log(err)
      });

  }
  @ViewChild('showInfo')content!: ElementRef;

  SavePDF() {
  }

}
