import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type TextAlign = 'left' | 'center' | 'right' | 'justify';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 *ngIf="level === 'h1'" [class]="textClasses"><ng-content></ng-content></h1>
    <h2 *ngIf="level === 'h2'" [class]="textClasses"><ng-content></ng-content></h2>
    <h3 *ngIf="level === 'h3'" [class]="textClasses"><ng-content></ng-content></h3>
    <h4 *ngIf="level === 'h4'" [class]="textClasses"><ng-content></ng-content></h4>
    <h5 *ngIf="level === 'h5'" [class]="textClasses"><ng-content></ng-content></h5>
    <h6 *ngIf="level === 'h6'" [class]="textClasses"><ng-content></ng-content></h6>
  `,
  styleUrls: ['./typography.component.scss']
})
export class HeadingComponent {
  @Input() level: HeadingLevel = 'h2';
  @Input() size: TextSize = 'base';
  @Input() weight: TextWeight = 'bold';
  @Input() align: TextAlign = 'left';
  @Input() color: string | null = null;

  get textClasses(): string {
    const classes = ['heading', `text-${this.size}`, `font-${this.weight}`, `text-${this.align}`];
    if (this.color) classes.push(`text-${this.color}`);
    return classes.join(' ');
  }
}

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class]="textClasses">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./typography.component.scss']
})
export class ParagraphComponent {
  @Input() size: TextSize = 'base';
  @Input() weight: TextWeight = 'regular';
  @Input() align: TextAlign = 'left';
  @Input() color: string | null = null;
  @Input() muted = false;

  get textClasses(): string {
    const classes = ['paragraph', `text-${this.size}`, `font-${this.weight}`, `text-${this.align}`];
    if (this.muted) classes.push('text-muted');
    if (this.color) classes.push(`text-${this.color}`);
    return classes.join(' ');
  }
}

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="textClasses">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./typography.component.scss']
})
export class TextComponent {
  @Input() size: TextSize = 'base';
  @Input() weight: TextWeight = 'regular';
  @Input() color: string | null = null;
  @Input() muted = false;
  @Input() uppercase = false;
  @Input() truncate = false;

  get textClasses(): string {
    const classes = ['text', `text-${this.size}`, `font-${this.weight}`];
    if (this.muted) classes.push('text-muted');
    if (this.color) classes.push(`text-${this.color}`);
    if (this.uppercase) classes.push('text-uppercase');
    if (this.truncate) classes.push('text-truncate');
    return classes.join(' ');
  }
}
