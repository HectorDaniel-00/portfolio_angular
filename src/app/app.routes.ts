import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePageComponent),
    title: 'Inicio | Daniel - Portafolio'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.page').then((m) => m.ProjectsPageComponent),
    title: 'Proyectos | Daniel - Portafolio'
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skills/skills.page').then((m) => m.SkillsPageComponent),
    title: 'Skills | Daniel - Portafolio'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.page').then((m) => m.ContactPageComponent),
    title: 'Contacto | Daniel - Portafolio'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.page').then((m) => m.NotFoundPageComponent),
    title: '404 | Daniel - Portafolio'
  }
];
