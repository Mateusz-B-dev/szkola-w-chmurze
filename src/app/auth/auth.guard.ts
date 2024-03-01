import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MockAuthService } from './mock-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private mockApiService: MockAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.mockApiService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}