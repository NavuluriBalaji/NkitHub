import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeadingComponent, ParagraphComponent, TextComponent } from './typography/typography.component';

const COMPONENTS = [
  ButtonComponent,
  CardComponent,
  HeadingComponent,
  ParagraphComponent,
  TextComponent
];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: [...COMPONENTS]
})
export class DesignSystemModule { }

// For standalone usage
export { ButtonComponent } from './button/button.component';
export { CardComponent } from './card/card.component';
export { HeadingComponent, ParagraphComponent, TextComponent } from './typography/typography.component';
