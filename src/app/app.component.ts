import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component'; // Adjust path as needed

@Component({
  selector: 'app-root',
  standalone: true, // Use standalone components
  imports: [CommonModule, RouterOutlet, SidebarComponent], // Include CommonModule for *ngIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dhicoins';
  isAuth: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is login or register
        this.isAuth = this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/forgot-password';
      }
    });
  }
}
