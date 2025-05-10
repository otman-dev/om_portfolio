export interface Skill {
  name: string;
  category: 'Languages' | 'Web Dev' | 'Data' | 'Embedded' | 'ML' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  technologies: string[];
  impact: string;
}

export interface Competition {
  name: string;
  year: string;
  achievement: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
