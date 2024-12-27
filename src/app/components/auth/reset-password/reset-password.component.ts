import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  imports: [],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss' , '../login/login.component.scss']
})
export class ResetPasswordComponent {

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
