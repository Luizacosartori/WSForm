import { Component, ViewChild } from '@angular/core';
import { dataService } from '../dataService';
import { massageForm } from '../formsData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {
  formsData: massageForm[] = new Array();

  constructor(private dataService: dataService, private router: Router) {}

  getData() {
    this.dataService.getMassageFormData().subscribe(
      (d: any) => {
        this.formsData = d;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.getData();
  }
  Logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
