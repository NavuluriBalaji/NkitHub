import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hoverable = true;
  @Input() interactive = false;
  @Input() shadow: 'sm' | 'md' | 'lg' = 'md';

  get cardClasses(): string {
    const classes = ['card', `card-shadow-${this.shadow}`];
    if (this.hoverable) classes.push('card-hoverable');
    if (this.interactive) classes.push('card-interactive');
    return classes.join(' ');
  }
}
