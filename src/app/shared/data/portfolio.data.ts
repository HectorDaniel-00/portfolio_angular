import { Project, SkillGroup, SocialLink } from '../models/portfolio.models';

export const profile = {
  name: 'Hector Vargas',
  role: 'Full-Stack Developer',
  headline: 'Construyo interfaces modernas enfocadas en rendimiento y experiencia de usuario.',
  about:
    'Me especializo en Angular, TypeScript y arquitectura frontend escalable. Disfruto convertir ideas en productos que resuelven problemas reales.'
};

export const projects: Project[] = [
  {
    name: 'Portafolio Personal',
    summary: 'Sitio para presentar experiencia, proyectos y contacto con foco en performance.',
    stack: ['Angular', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    repositoryUrl: '#'
  },
  {
    name: 'Dashboard de Ventas',
    summary: 'Panel con filtros, gráficos y exportación para seguimiento comercial.',
    stack: ['Angular', 'RxJS', 'Chart.js'],
    liveUrl: '#',
    repositoryUrl: '#'
  },
  {
    name: 'Sistema de Reservas',
    summary: 'Aplicación para gestionar reservas con validaciones y calendario interactivo.',
    stack: ['Angular', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repositoryUrl: '#'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Vite', 'Figma', 'Postman']
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:daniel@example.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com' },
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'CV', url: '#' }
];
