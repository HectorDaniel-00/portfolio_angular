export interface Project {
  name: string;
  summary: string;
  stack: string[];
  image: string
  liveUrl: string;
  repositoryUrl: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}
