import { Component, ViewChild } from '@angular/core';
import { dataService } from '../dataService';
import { massageForm } from '../formsData';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  formsData: massageForm[] = new Array();
  

  constructor(private dataService: dataService) {
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
}
