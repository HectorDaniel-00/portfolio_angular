import { Component } from '@angular/core';

import { projects } from '../../shared/data/portfolio.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.page.html'
})
export class ProjectsPageComponent {
  protected readonly projects = projects;
}
