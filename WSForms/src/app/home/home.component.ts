import { Component } from '@angular/core';
import { dataService } from '../dataService';
import { massageForm } from '../formsData'

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formsData: massageForm[] = new Array();
  popup = false
  name = 'Angular';

  constructor(private dataService: dataService, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MassageFormInfo);

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
  }

  ngOnInit(): void {
    this.getData();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'massage.form.info.html',
})
export class MassageFormInfo {}

