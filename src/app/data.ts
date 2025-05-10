import { Skill, Experience, Competition, Certification } from './types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Bash', category: 'Languages' },

  // Web Dev
  { name: 'Next.js', category: 'Web Dev' },
  { name: 'React', category: 'Web Dev' },
  { name: 'Tailwind', category: 'Web Dev' },
  { name: 'MongoDB', category: 'Web Dev' },
  
  // Data
  { name: 'Power BI', category: 'Data' },
  { name: 'Streamlit', category: 'Data' },
  { name: 'SQL', category: 'Data' },
  
  // Embedded
  { name: 'ESP32', category: 'Embedded' },
  { name: 'MQTT', category: 'Embedded' },
  { name: 'OTA', category: 'Embedded' },
  { name: 'Cortex-A53', category: 'Embedded' },
  
  // ML
  { name: 'PyTorch', category: 'ML' },
  { name: 'LSTM', category: 'ML' },
  { name: 'TensorFlow', category: 'ML' },
  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
];

export const experiences: Experience[] = [
  {
    company: 'LS2N',
    role: 'Research Intern',
    period: '2024 - Present',
    technologies: ['PyTorch', 'LSTM', 'Cortex-A53'],
    impact: 'AI predictability on multicore architectures using quantile regression and Cortex-A53'
  },
  {
    company: 'Atlantic Dunes',
    role: 'Full-Stack Engineer',
    period: '2023 - 2024',
    technologies: ['Next.js', 'MongoDB', 'Node.js'],
    impact: 'Developed scalable web applications with focus on real-time data processing'
  },
  {
    company: 'Nokia',
    role: 'IoT Solutions Engineer',
    period: '2023',
    technologies: ['ESP32', 'MQTT', 'AWS'],
    impact: 'Designed and implemented IoT solutions for industrial applications'
  },
  {
    company: 'Welyne',
    role: 'Data Engineering Intern',
    period: '2022',
    technologies: ['Python', 'Power BI', 'SQL'],
    impact: 'Built data pipelines and analytics dashboards for business intelligence'
  }
];

export const competitions: Competition[] = [
  {
    name: 'AUROBAT Robotics',
    year: '2021',
    achievement: '1st Place'
  },
  {
    name: 'Nokia PrivacyGuard Hackathon',
    year: '2024',
    achievement: 'Top 3'
  },
  {
    name: 'CNS Top Coders Challenge',
    year: '2024',
    achievement: 'Top 4'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Power BI Data Analyst',
    issuer: 'Microsoft',
    year: '2024'
  },
  {
    name: 'MongoDB Developer',
    issuer: 'MongoDB University',
    year: '2023'
  },
  {
    name: 'Azure ML Engineer',
    issuer: 'Microsoft',
    year: '2024'
  },
  {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon',
    year: '2023'
  }
];
