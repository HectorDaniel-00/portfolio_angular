import { Component } from '@angular/core';
import { socialLinks } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact.page.html'
})
export class ContactPageComponent {
  protected readonly socialLinks = socialLinks;
}
