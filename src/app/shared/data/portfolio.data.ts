import { Project, SkillGroup, SocialLink } from '../models/portfolio.models';

export const profile = {
  name: 'Hector Vargas',
  role: 'Full-Stack Developer',
  headline: 'Desarrollo aplicaciones fullstack con NestJS y Angular v21, creando interfaces rápidas y automatizando.',
  about:
    'Me especializo en el desarrollo fullstack con Angular v21, TypeScript y NestJS. Disfruto convertir ideas en productos escalables que resuelven problemas reales, combinando interfaces modernas con automatización de procesos.'
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
    items: [
      'Angular v21 (Standalone + Signals)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind'
    ]
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'Swagger'
    ]
  },
  {
    title: 'Automatización & Data',
    items: [
      'N8N',
      'Power Automate',
      'Power BI',
      'Integración de APIs'
    ]
  },
  {
    title: 'DevOps & Herramientas',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'Bash',
      'Linux',
      'Vite',
      'Postman',
      'Figma'
    ]
  },
  {
    title: 'Arquitectura & Buenas prácticas',
    items: [
      'Arquitectura escalable',
      'Clean Code',
      'Manejo de estado',
      'Asincronía',
      'Diseño de sistemas'
    ]
  }
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:daniel@example.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com' },
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'CV', url: '#' }
];
