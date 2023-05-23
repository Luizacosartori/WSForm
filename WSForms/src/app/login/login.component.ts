import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataService } from '../dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataService: dataService, private router: Router) { }
  hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  login_fail = false;

  login() {
    this.login_fail = false;
    if (this.loginForm.valid) {
      this.dataService.getUserToken(this.loginForm.value).subscribe(
        (d: any) => {
          localStorage.setItem('user', d.username);
          this.router.navigate(['/home']);
        },
        (err: any) => {
          console.log("Error retrieving the data.", err);
          this.login_fail =true;

        }
      );
    } else {
      alert("All red fields must be filled out!");
    }
  }
}
