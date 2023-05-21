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
  massages: massageForm[] = new Array();
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
        this.massages = d;
        console.log("d: ",d);
      },
      (err: any) => {
        console.log(err)
      });

  }
  @ViewChild('showInfo')content!: ElementRef;

  SavePDF() {
  }

}
