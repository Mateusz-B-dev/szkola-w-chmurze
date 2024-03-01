import { Component } from '@angular/core';
import { MockAuthService } from '../auth/mock-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  error: boolean = false;

  constructor(private authService: MockAuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.router.navigate(['/cat-facts']); // Przekieruj do CatFactsComponent po zalogowaniu
      } else {
        this.error = true;
      }
    });
  }


}
