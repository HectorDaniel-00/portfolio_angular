import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  templateUrl: './skill-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SkillBadgeComponent {
  readonly label = input.required<string>();
}
