import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html'
})
export class HomePageComponent {
  protected readonly profile = profile;
}
