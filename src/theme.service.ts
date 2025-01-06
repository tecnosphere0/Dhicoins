// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false); // Default to light mode
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    // Get stored theme from sessionStorage (if any)
    const storedTheme = sessionStorage.getItem('theme');
    this.isDarkModeSubject.next(storedTheme === 'dark');
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newTheme);
    const theme = newTheme ? 'dark' : 'light';
    this.setTheme(theme);
    sessionStorage.setItem('theme', theme);
  }

  private setTheme(theme: string): void {
    document.body.setAttribute('data-theme', theme);
  }
}
