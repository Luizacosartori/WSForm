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
  static storeData: any;

  constructor(private dataService: dataService, public dialog: MatDialog) {
  }

  openClientInfo(data: any) {
    HomeComponent.storeData = data
    const dialogRef = this.dialog.open(MassageFormInfo);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    return data;
  }

  openNotesInfo() {
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
    return day + "  " +hours+ ':'+ minutes
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
  clickedClientId = HomeComponent.storeData;
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
  notesForm = new FormGroup({
    otherNotes: new FormControl('', Validators.required),
    pressure: new FormControl('', Validators.required),
    back_of_body: new FormControl('', Validators.required),
    front_of_body: new FormControl('', Validators.required),

  })


  onSubmit() {
    // if(this.massageForm.valid){
    // this.dataService.setClientMassageForm(this.massageForm.value).subscribe((res) => {
    //   this.massageForm.reset();
    //   alert("The Client Form has been added.");
    // });
    // }else{
    //   alert("fix it");
    // }
  }



}

