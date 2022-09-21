import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    this.authService
      .logout()
      .then(() => {
        this.authService.setSessionData('isLoggedIn', 'false');
        this.router.navigateByUrl('login');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  checkIfLogin(): boolean {
    return this.authService.getSessionData('isLoggedIn') == 'true';
  }
  getUserName(): string {
    return this.authService.getSessionData('userName');
  }
}
