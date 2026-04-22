import { ChangeDetectionStrategy, Component } from '@angular/core';
import { aboutForMe } from '../../data/portfolio.data';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly aboutForMe = aboutForMe
}
