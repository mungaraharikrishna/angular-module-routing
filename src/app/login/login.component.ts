import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/dashboard'])
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(data) {
    if (data) {
      this.authservice.loggedIn(data);
      this.router.navigate(['/dashboard']);
    }
  }

}
