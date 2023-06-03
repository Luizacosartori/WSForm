import { Component, OnInit, ViewChild } from '@angular/core';
import { dataService } from '../dataService';
import {
  therapistData,
  clientData,
  treatmentData,
  massageForm,
} from '../formsData';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formsData: massageForm[] = new Array();
  therapists: therapistData[] = new Array();
  clients: clientData[] = new Array();
  treatment: treatmentData[] = new Array();
  public now: Date = new Date();
  popup = false;
  static storeClientId: any;
  static storeTreatmentId: any;
  @ViewChild('syncbutton') syncButton: any;
  loading: boolean = false;

  constructor(private dataService: dataService, public dialog: MatDialog) {}

  openClientInfo(data: any) {
    HomeComponent.storeClientId = data;
    const dialogRef = this.dialog.open(MassageFormInfo);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    return data;
  }

  openNotesInfo(data: any) {
    HomeComponent.storeTreatmentId = data;

    const dialogRef = this.dialog.open(NotesInfo);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getData() {
    this.dataService.getMassageFormData().subscribe(
      (d: any) => {
        this.formsData = d;
      },
      (err: any) => {
        console.log(err);
      }
    );

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
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth() + 1;
    let hours = String(new Date(date).getHours());
    let minutes = String(new Date(date).getMinutes()).padEnd(2, '0');
    return day + '/' + month + ' ' + hours + ':' + minutes;
  }

  enableDisableButton() {
    this.loading = true;
    this.syncButton.disabled = 'true';
    this.dataService
      .getClientTreatment({ username: localStorage.getItem('user') })
      .subscribe((err: any) => {
        console.log(err);
      });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  ngOnInit(): void {
    this.getData();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'massage.form.info.html',
  styleUrls: ['./home.component.css'],
})
export class MassageFormInfo {
  clickedClientId = HomeComponent.storeClientId;
  clientById: massageForm[] = new Array();
  clientNotesById: treatmentData[] = new Array();
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
        console.log(err);
      }
    );

    this.dataService.getTreatmentDataById(this.clickedClientId).subscribe(
      (d: any) => {
        this.clientNotesById = d;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  formatDate(date: Date): string {
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth() + 1;
    let hours = String(new Date(date).getHours());
    let year = new Date(date).getFullYear();
    let minutes = String(new Date(date).getMinutes()).padEnd(2, '0');
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  }
}

@Component({
  selector: 'notes-info',
  templateUrl: 'notes.form.info.html',
  styleUrls: ['./home.component.css'],
})
export class NotesInfo implements OnInit {
  notChecked = false;
  clickedCTreatmentId = HomeComponent.storeTreatmentId;

  notesForm = new FormGroup({
    front_of_body: new FormControl('', Validators.required),
    back_of_body: new FormControl('', Validators.required),
    pressure: new FormControl('', Validators.required),
    treatment_notes: new FormControl('', Validators.required),
    trapezius: new FormControl(''),
    rhomboids: new FormControl(''),
    elavator_scapulae: new FormControl(''),
    ect: new FormControl(''),
    lat_dorsi: new FormControl(''),
    erect_spinae: new FormControl(''),
    glut_mid: new FormControl(''),
    glut_max: new FormControl(''),
    serratus: new FormControl(''),
    triceps_brachii: new FormControl(''),
    biceps_brachii: new FormControl(''),
    pec_major: new FormControl(''),
    deltoids: new FormControl(''),
    teres_major_minor: new FormControl(''),
    adductor_magnus: new FormControl(''),
    tfl: new FormControl(''),
    iliopsoas: new FormControl(''),
    sartorius: new FormControl(''),
    gracialis: new FormControl(''),
    tibialis_anterior: new FormControl(''),
    quadriceps: new FormControl(''),
    soleus: new FormControl(''),
    gastrocnemius: new FormControl(''),
    biceps_femoris: new FormControl(''),
    supraspinatus: new FormControl(''),
    treatment_plan: new FormControl('', Validators.required),
  });

  constructor(private dataService: dataService, public dialog: MatDialog) {}

  onSubmit() {
    if (this.notesForm.valid) {
      this.dataService
        .setMassageNotes(this.clickedCTreatmentId, this.notesForm.value)
        .subscribe((res) => {
          this.notesForm.reset();
          alert('The treatment note has been added!');
          const dialogRef = this.dialog.closeAll();
          window.location.reload();
        });
    } else {
      alert('All red fields must be filled out!');
    }
  }

  ngOnInit() {}

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
