export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  twitter: string;
  instagram: string;
}

export interface LearningItem {
  icon: string;
  text: string;
}