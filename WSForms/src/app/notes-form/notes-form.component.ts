import { Component, ElementRef, ViewChild } from '@angular/core';
import { dataService } from '../dataService';
import {
  therapistData,
  clientData,
  treatmentData,
  massageForm,
} from '../formsData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css'],
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
      (err: any) => {}
    );

    this.dataService.getTreatmentData().subscribe(
      (d: any) => {
        this.treatment = d;
      },
      (err: any) => {}
    );
  }
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  onSubmit() {
    this.dataService
      .getMassageFormById(Number(this.search_input.value))
      .subscribe(
        (d: any) => {
          this.massages = d;
          console.log('d: ', d);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  @ViewChild('showInfo') content!: ElementRef;

  updateNotes() {
    alert('Open Massage Form to Edit');
  }

  @ViewChild('content')
  toPDF!: ElementRef;

  public async SavePDF(): Promise<void> {
    let content = this.toPDF.nativeElement;
    let doc = new jspdf.jsPDF();
    await doc.html(content, {
      margin: [0, 0, 20, 0], //Add top and bottom margin on the doc
      x: 15,
      y: 15,
      width: 170, //target width in the PDF document
      windowWidth: 650, //window width in CSS pixels
    });
    //Make the file name the client name
    doc.save('client ID ' + this.search_input.value + '.pdf');
  }
}
