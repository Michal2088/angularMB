import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  submitRegister() {
    this.authService.register(this.user).then((data) => {
      this.authService.setSessionData('userName', data.user.email as string);
      this.authService.setSessionData('isLoggedIn', 'true');
      this.router.navigateByUrl('container/customers');
    }).catch((err) => {
      alert('Something went wrong...');
      this.user = { email: '', password: '' };
    })
  }

}
