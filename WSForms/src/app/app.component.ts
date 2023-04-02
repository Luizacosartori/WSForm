import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { formsData } from './formsData';
import { dataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WSForms';
  therapists: formsData[] = new Array();

  constructor(private dataService: dataService) {

  }
  getData() {
    this.dataService.getPacientData().subscribe(
      (d: any) => {
          this.therapists=d;
      },
      (err: any) => {

      });
  }
}
