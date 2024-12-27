import { Component,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})
export class LoginComponent {
  // Default values
  inputType: string = 'password';
  eyeIcon: string = '/assets/auth/eye.svg';

  // Toggle Password Visibility
  togglePassword(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text'; // Show password
      this.eyeIcon = '/assets/auth/eye_off.svg'; // Update to eye-off icon
    } else {
      this.inputType = 'password'; // Hide password
      this.eyeIcon = '/assets/auth/eye.svg'; // Default eye icon
    }
  }
}
