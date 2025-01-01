import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { BuyComponentComponent } from './components/user/buy-component/buy-component.component';
import { EmailVerificationComponent } from './components/auth/email-verification/email-verification.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { SellComponentComponent } from './components/user/sell-component/sell-component.component';
import { ProfileComponentComponent } from './components/user/profile-component/profile-component.component';
import { FaqComponentComponent } from './components/user/faq-component/faq-component.component';
import { HistoryComponentComponent } from './components/user/history-component/history-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buy', component: BuyComponentComponent },
  { path: 'sell', component: SellComponentComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'faqs', component: FaqComponentComponent },
  { path: 'history', component: HistoryComponentComponent },

  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
