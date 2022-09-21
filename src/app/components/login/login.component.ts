import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  submitLogin(): void {
    this.authService
      .login(this.user)
      .then((data) => {
        this.authService.setSessionData('userName',data.user.email as string)
        this.authService.setSessionData('isLoggedIn','true')
        this.router.navigateByUrl('container/customers');
      })
      .catch((err) => {
        console.log(err);

        alert('wrong email or password');
        this.user = { email: '', password: '' };
      });
  }
  submitLoginWithGoogle() {
    this.authService
      .logInWithGoogle()
      .then((data) => {
        this.authService.setSessionData('userName',data.user.displayName as string)
        this.authService.setSessionData('isLoggedIn','true')
        this.router.navigateByUrl('container/customers');
      })
      .catch((err) => {
        console.log(err);

        alert('wrong email or password');
        this.user = { email: '', password: '' };
      });
  }
}
