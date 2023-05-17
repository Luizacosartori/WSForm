import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataService } from '../dataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataService: dataService) {}
  hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  login() {
    this.dataService.getUserToken(this.loginForm.value).subscribe(
      (d: any) => {
        localStorage.setItem('user', d.username);
      },
      (err: any) => {
        console.log("Error retrieving the data.",err);
      }
    );
  }
}