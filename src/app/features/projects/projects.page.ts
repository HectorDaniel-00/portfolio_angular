import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { projects } from '../../shared/data/portfolio.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { Project } from '../../shared/models/portfolio.models';
import { ProjectModal } from "../../shared/components/project-modal/project-modal";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent, ProjectModal],
  templateUrl: './projects.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectsPageComponent {
  protected readonly projects = projects;

  selectedProject = signal<Project | null>(null);

  openProject(project: Project) {
    this.selectedProject.set(project);
  }

  closeProject() {
    this.selectedProject.set(null);
  }

}
