import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  templateUrl: './cta-button.component.html'
})
export class CtaButtonComponent {
  readonly label = input.required<string>();
  readonly href = input.required<string>();
  /** Botón relleno (primary) o contorno (outline). */
  readonly variant = input<'primary' | 'outline'>('primary');

  protected openInNewTab(): boolean {
    const h = this.href();
    return h.startsWith('http://') || h.startsWith('https://');
  }
}
