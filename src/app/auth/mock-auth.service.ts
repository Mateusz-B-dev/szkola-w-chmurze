import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
    
  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'admin') {
        this.loggedIn = true;
        return of(true);
      } else {
        return of(false);
      }
  }

  logout(): Observable<boolean> {
    // Tutaj można dodać logikę wylogowywania, jeśli jest potrzebna
    // W tym przykładzie zwracamy zawsze true dla uproszczenia
    return of(true);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}