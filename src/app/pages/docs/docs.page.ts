import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="container section-padding">
        <h1>Documentation & Getting Started</h1>
        <p>Documentation page content coming soon...</p>
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
export class DocsPage {}
