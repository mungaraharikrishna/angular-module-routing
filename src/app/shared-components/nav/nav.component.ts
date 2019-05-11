import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public currentUser;
  constructor(private authservice: AuthService, private router: Router) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
