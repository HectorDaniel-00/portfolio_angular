import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card.component';
import { projects } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.page.html'
})
export class ProjectsPageComponent {
  protected readonly projects = projects;
}
