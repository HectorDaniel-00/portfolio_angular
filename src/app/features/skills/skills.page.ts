import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { skillGroups } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillBadgeComponent],
  templateUrl: './skills.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SkillsPageComponent {
  protected readonly skillGroups = skillGroups;
}
