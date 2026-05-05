import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="container section-padding">
        <h1>Pricing</h1>
        <p>Pricing page content coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 60vh;
      display: flex;
      align-items: center;
    }
    h1 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-4);
    }
  `]
})
export class PricingPage {}
