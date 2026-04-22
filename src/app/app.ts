import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
