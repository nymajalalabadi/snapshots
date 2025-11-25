export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  client?: string;
  date: string;
  featured: boolean;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and payment integration.',
    image: '/images/project1.jpg',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'TechCorp Inc.',
    date: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and transaction tracking.',
    image: '/images/project2.jpg',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    client: 'SecureBank',
    date: '2024-02-20',
    featured: true
  },
  {
    id: '3',
    title: 'Corporate Website Redesign',
    description: 'Complete redesign of a corporate website with improved UX and modern design principles.',
    image: '/images/project3.jpg',
    category: 'Web Design',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    client: 'GlobalTech Solutions',
    date: '2024-03-10',
    featured: false
  },
  {
    id: '4',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and business intelligence.',
    image: '/images/project4.jpg',
    category: 'Data Science',
    technologies: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    client: 'DataCorp',
    date: '2024-04-05',
    featured: true
  },
  {
    id: '5',
    title: 'IoT Smart Home System',
    description: 'Connected home automation system with voice control and energy monitoring.',
    image: '/images/project5.jpg',
    category: 'IoT',
    technologies: ['Arduino', 'Node.js', 'MQTT', 'React'],
    client: 'SmartHome Inc.',
    date: '2024-05-12',
    featured: false
  },
  {
    id: '6',
    title: 'Learning Management System',
    description: 'Comprehensive LMS with video streaming, quizzes, and progress tracking.',
    image: '/images/project6.jpg',
    category: 'Education',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    client: 'EduLearn Academy',
    date: '2024-06-18',
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
export const getProjectById = (id: string) => projects.find(project => project.id === id);
