import { Component, input } from '@angular/core';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { Project } from '../../models/portfolio.models';
;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
