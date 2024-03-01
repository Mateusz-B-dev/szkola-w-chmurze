import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockAuthService } from '../auth/mock-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  catFacts: string[] = [];
  loading = false;

  constructor(private http: HttpClient, private authService: MockAuthService, private router: Router) { }

  ngOnInit(): void {
    this.loadCatFacts();
  }

  loadCatFacts(): void {
    // Symulacja pobierania faktów o kotach z zewnętrznego API
    this.loading = true; // Oznaczamy, że trwa ładowanie nowych danych
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.catFacts.push('Cat fact ' + (this.catFacts.length + 1));
      }
      this.loading = false; // Zakończono ładowanie danych
    }, 1000); // Symulacja opóźnienia zapytania HTTP
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Jeśli użytkownik przewinął stronę do końca, załaduj więcej danych
      if (!this.loading) {
        this.loadCatFacts();
      }
    }
  }

  logout() {
    this.authService.logout().subscribe((success: boolean) => {
      if (success) {
        this.router.navigate(['/login']); 
        // Tutaj można dodać przekierowanie do strony logowania po wylogowaniu
      } else {
        // Obsługa błędnego wylogowania
      }
    });
  }
}