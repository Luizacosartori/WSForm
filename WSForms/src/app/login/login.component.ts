import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataService } from '../dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private dataService: dataService, private router: Router) {}
  hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  login_fail = false;
  loading = false;

  login() {
    this.login_fail = false;
    
    if (this.loginForm.valid) {
      this.loading = true;
      this.dataService.getUserToken(this.loginForm.value).subscribe(
        (d: any) => {
          localStorage.setItem('user', d.username);
          this.dataService.getClientTreatment({ username: localStorage.getItem('user') }).subscribe((err: any) => {
            console.log(err);
          });
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1850);
        },
        (err: any) => {
          console.log('Error retrieving the data.', err);
          this.loading = false;
          this.login_fail = true;
        }
      );
    } else {
      alert('All red fields must be filled out!');
    }
  }
}
