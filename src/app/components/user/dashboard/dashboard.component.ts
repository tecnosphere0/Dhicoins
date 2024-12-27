import { Component } from '@angular/core';
import { CurrencyCardsComponent } from '../currency-cards/currency-cards.component'; // Ensure the path is correct

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyCardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
