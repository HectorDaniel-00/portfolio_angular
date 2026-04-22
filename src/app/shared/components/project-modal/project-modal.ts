import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-modal',
  imports: [],
  templateUrl: './project-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModal {
  project = input<Project | null>(null)
  close = output<void>()


}
