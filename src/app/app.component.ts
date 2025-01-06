import { Component, OnInit, Renderer2 } from '@angular/core';
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
  isDarkMode: boolean = false; // Track dark mode status
  isIndexPage: boolean = false; // Track if the current route is the index page

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Get the stored theme from session storage (if any)
    const storedTheme = sessionStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';

    // Set the theme based on the stored or default value
    this.setTheme(this.isDarkMode ? 'dark' : 'light');

    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is login, register, or other auth-related routes
        const authRoutes = [
          '/login',
          '/register',
          '/forgot-password',
          '/email-verification',
          '/reset-password'
        ];
        this.isAuth = authRoutes.includes(this.router.url);


        this.isIndexPage = this.router.url === '/index';
      }
    });
  }

  toggleTheme(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isDarkMode = checkbox.checked; // Set dark mode based on checkbox state
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.setTheme(theme);

    // Store the theme in session storage
    sessionStorage.setItem('theme', theme);
  }

  private setTheme(theme: string): void {
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }
}
