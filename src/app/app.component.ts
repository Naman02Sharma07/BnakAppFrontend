import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bankappclient';

  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) {}

  get isLoginPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
