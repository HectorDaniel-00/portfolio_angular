import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { Project } from '../../models/portfolio.models';
;

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectCardComponent {
  project = input.required<Project>();
  viewDetails = output<Project>()

  onViewDetails() {
    this.viewDetails.emit(this.project())
  }
}
