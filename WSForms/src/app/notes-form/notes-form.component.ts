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
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css'],
})
export class NotesFormComponent {
  fullReportInfo: any;
  test: any;
  search_input = new FormControl('', Validators.required);
  @ViewChild('showInfo') content!: ElementRef;
  @ViewChild('content') toPDF!: ElementRef;

  constructor(private dataService: dataService, private router: Router) {}

  formatDate(date: Date): string {
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth() + 1;
    let year = new Date(date).getFullYear();

    return day + '/' + month + '/' + year;
  }

  onSubmit() {
    this.dataService
      .healthInsuranceReportNotesAndTreatments(String(this.search_input.value))
      .subscribe(
        (d: any) => {
          this.fullReportInfo = d;
          console.log(this.fullReportInfo);
        },

        (err: any) => {}
      );
    this.dataService
      .getMassageFormByName(String(this.search_input.value))
      .subscribe(
        (d: any) => {
          this.test = d;
        },
        (err: any) => {}
      );
  }

  updateNotes() {
    alert('Open Massage Form to Edit');
  }

  Logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  public async savePDF(): Promise<void> {
    let content = this.toPDF.nativeElement;
    let doc = new jspdf.jsPDF();
    await doc.html(content, {
      margin: [10, 0, 20, 0], //Add top and bottom margin on the doc
      x: 15,
      y: 15,
      width: 170, //target width in the PDF document
      windowWidth: 650, //window width in CSS pixels
    });
    //Make the file name the client name
    doc.save('client ID ' + this.search_input.value + '.pdf');
  }
}
