export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  experience: number; // years
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer with 8+ years of experience in modern web technologies. Passionate about creating scalable and maintainable solutions.',
    avatar: '/images/team/sarah.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Python'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahj',
      twitter: 'https://twitter.com/sarahj_dev'
    },
    experience: 8
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design principles. Expert in creating intuitive and beautiful user experiences.',
    avatar: '/images/team/michael.jpg',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michael_design'
    },
    experience: 6
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Mobile Developer',
    bio: 'Mobile development specialist with expertise in cross-platform solutions. Loves building apps that users love to use.',
    avatar: '/images/team/emma.jpg',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    social: {
      linkedin: 'https://linkedin.com/in/emmarodriguez',
      github: 'https://github.com/emmar'
    },
    experience: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    bio: 'Infrastructure and deployment specialist ensuring applications run smoothly at scale. Expert in cloud technologies and automation.',
    avatar: '/images/team/david.jpg',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidk'
    },
    experience: 7
  }
];

export const getTeamMemberById = (id: string) => teamMembers.find(member => member.id === id);
