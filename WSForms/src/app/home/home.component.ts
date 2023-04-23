import { Component } from '@angular/core';
import { dataService } from '../dataService';
import { massageForm } from '../formsData'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  ngOnInit(): void {
    this.getData();
  }
}
