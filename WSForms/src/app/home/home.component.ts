import { Component } from '@angular/core';
import { dataService } from '../dataService';
import { massageForm } from '../formsData'
import { therapistData, clientData, treatmentData } from '../formsData';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formsData: massageForm[] = new Array();
  therapists: therapistData[] = new Array();
  clients: clientData[] = new Array();
  treatment: treatmentData[] = new Array();
  public now: Date = new Date();
  popup = false
  static storeClientId: any;
  static storeTreatmentId: any;


  constructor(private dataService: dataService, public dialog: MatDialog) {
  }

  openClientInfo(data: any) {
    HomeComponent.storeClientId = data
    const dialogRef = this.dialog.open(MassageFormInfo);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    return data;
  }

  openNotesInfo(data: any) {
    HomeComponent.storeTreatmentId = data

    const dialogRef = this.dialog.open(NotesInfo);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getData() {
    this.dataService.getMassageFormData().subscribe(
      (d: any) => {
        this.formsData = d;
      },
      (err: any) => {
        console.log(err)
      });

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
    let day = new Date(date).toLocaleDateString()
    let hours = String(new Date(date).getHours())
    let minutes = new Date(date).getMinutes()
    return day + "  " + hours + ':' + minutes
    //Needs to add a 0 if does have 2
  }

  getTherapistName(therapist_id: number){
      return
  }

  ngOnInit(): void {
    this.getData();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'massage.form.info.html',
  styleUrls: ['./home.component.css']
})

export class MassageFormInfo {
  clickedClientId = HomeComponent.storeClientId;
  clientById: massageForm[] = new Array();
  public now: Date = new Date();

  constructor(private dataService: dataService) {
    this.getData();
  }
  getData() {
    this.dataService.getMassageFormById(this.clickedClientId).subscribe(
      (d: any) => {
        this.clientById = d;
      },
      (err: any) => {
        console.log(err)
      });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }


}

@Component({
  selector: 'notes-info',
  templateUrl: 'notes.form.info.html',
  styleUrls: ['./home.component.css']

})


export class NotesInfo {
  notChecked = false;
  clickedCTreatmentId = HomeComponent.storeTreatmentId;

  notesForm = new FormGroup({
    front_of_body: new FormControl('', Validators.required),
    back_of_body: new FormControl('', Validators.required),
    pressure: new FormControl('', Validators.required),
    treatment_notes: new FormControl('', Validators.required)
  });

  constructor(private dataService: dataService, public dialog: MatDialog) {
  }

  onSubmit() {
    if (this.notesForm.valid) {
      this.dataService.setMassageNotes(this.clickedCTreatmentId, this.notesForm.value).subscribe((res) => {
        this.notesForm.reset();
        alert("The  treatment note has been added.");
        const dialogRef = this.dialog.closeAll();
      });
    } else {
      alert("All red fields must be filled out!");
    }
  }



}

