import { Component, input } from '@angular/core';
import { Project } from '../models/portfolio.models';
import { CtaButtonComponent } from './cta-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
