import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../shared/data/portfolio.data';
import { AboutSection } from "../../shared/components/about-section/about-section";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, AboutSection],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomePageComponent {
  protected readonly profile = profile;
}
