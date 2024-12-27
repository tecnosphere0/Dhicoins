import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss'],
})
export class RegisterComponent {
  // Default values
  inputType: string = 'password';
  inputType2: string = 'password';
  eyeIcon: string = '/assets/auth/eye.svg';
  eyeIcon2: string = '/assets/auth/eye.svg';

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

  togglePassword2(): void {
    if (this.inputType2 === 'password') {
      this.inputType2 = 'text'; // Show password
      this.eyeIcon2 = '/assets/auth/eye_off.svg'; // Update to eye-off icon
    } else {
      this.inputType2 = 'password'; // Hide password
      this.eyeIcon2 = '/assets/auth/eye.svg'; // Default eye icon
    }
  }
}
