import { Component, Renderer2, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  imports: [NgbDropdownModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isDarkMode: boolean = false; // Track dark mode status

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Get the stored theme from session storage (if any)
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      // Default to light mode
      this.isDarkMode = false;
    }

    // Set the theme based on the stored or default value
    this.setTheme(this.isDarkMode ? 'dark' : 'light');
  }

  // Handle the theme toggle event
  onThemeToggle(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isDarkMode = checkbox.checked; // Set dark mode based on checkbox state
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.setTheme(theme);

    // Store the theme in session storage
    sessionStorage.setItem('theme', theme); // If using session storage
  }

  // Apply the theme to the body element
  private setTheme(theme: string): void {
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }
}
