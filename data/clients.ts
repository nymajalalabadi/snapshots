export interface Client {
  id: string;
  name: string;
  company: string;
  industry: string;
  description: string;
  logo?: string;
  website?: string;
  projects: ClientProject[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  startedWorking: string;
  status: 'active' | 'completed' | 'maintenance';
}

export interface ClientProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planning';
  startDate: string;
  endDate?: string;
  budget?: number;
  deliverables: string[];
}

export const clients: Client[] = [
  {
    id: 'techcorp',
    name: 'TechCorp Solutions',
    company: 'TechCorp Inc.',
    industry: 'Technology',
    description: 'Leading technology solutions provider specializing in enterprise software.',
    website: 'https://techcorp.com',
    startedWorking: '2023-01-15',
    status: 'active',
    projects: [
      {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with inventory management and payment processing.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        status: 'completed',
        startDate: '2023-02-01',
        endDate: '2023-06-30',
        budget: 50000,
        deliverables: ['Web Application', 'API', 'Admin Dashboard', 'Documentation']
      },
      {
        id: 'mobile-app',
        title: 'Mobile Companion App',
        description: 'React Native mobile app for iOS and Android platforms.',
        technologies: ['React Native', 'Firebase', 'Redux'],
        status: 'completed',
        startDate: '2023-08-01',
        endDate: '2023-11-15',
        budget: 35000,
        deliverables: ['iOS App', 'Android App', 'Backend API']
      }
    ],
    testimonial: {
      text: 'Snapshots delivered exceptional results. Their expertise in modern web technologies helped us launch our platform ahead of schedule.',
      author: 'John Smith',
      role: 'CTO, TechCorp Inc.'
    }
  },
  {
    id: 'securebank',
    name: 'SecureBank',
    company: 'SecureBank Financial',
    industry: 'Finance',
    description: 'Digital banking solutions with focus on security and user experience.',
    website: 'https://securebank.com',
    startedWorking: '2023-03-20',
    status: 'active',
    projects: [
      {
        id: 'banking-app',
        title: 'Mobile Banking App',
        description: 'Secure mobile banking application with biometric authentication.',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
        status: 'completed',
        startDate: '2023-04-01',
        endDate: '2023-09-30',
        budget: 80000,
        deliverables: ['Mobile App', 'Backend Services', 'Security Audit', 'Compliance Documentation']
      },
      {
        id: 'web-portal',
        title: 'Customer Web Portal',
        description: 'Secure web portal for account management and transactions.',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'Auth0'],
        status: 'in-progress',
        startDate: '2024-01-15',
        budget: 45000,
        deliverables: ['Web Portal', 'API Integration', 'Testing Suite']
      }
    ],
    testimonial: {
      text: 'The team at Snapshots understands the importance of security in financial applications. Their attention to detail is outstanding.',
      author: 'Maria Garcia',
      role: 'Head of Digital Banking'
    }
  },
  {
    id: 'globaltech',
    name: 'GlobalTech Solutions',
    company: 'GlobalTech Solutions Ltd.',
    industry: 'Consulting',
    description: 'Global technology consulting firm serving Fortune 500 companies.',
    website: 'https://globaltech.solutions',
    startedWorking: '2022-11-10',
    status: 'active',
    projects: [
      {
        id: 'corporate-redesign',
        title: 'Corporate Website Redesign',
        description: 'Complete redesign of corporate website with improved UX and modern design.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Contentful'],
        status: 'completed',
        startDate: '2022-12-01',
        endDate: '2023-03-15',
        budget: 30000,
        deliverables: ['New Website', 'Content Migration', 'SEO Optimization']
      },
      {
        id: 'intranet-system',
        title: 'Employee Intranet System',
        description: 'Internal employee portal with document management and collaboration tools.',
        technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
        status: 'completed',
        startDate: '2023-05-01',
        endDate: '2023-08-30',
        budget: 55000,
        deliverables: ['Intranet Portal', 'Document Management', 'User Training']
      }
    ],
    testimonial: {
      text: 'Snapshots consistently delivers high-quality work on time and within budget. They are our go-to development partner.',
      author: 'Robert Chen',
      role: 'VP of Technology'
    }
  },
  {
    id: 'datacorp',
    name: 'DataCorp Analytics',
    company: 'DataCorp Analytics Inc.',
    industry: 'Data & Analytics',
    description: 'Data analytics and business intelligence solutions provider.',
    website: 'https://datacorp.analytics',
    startedWorking: '2023-07-01',
    status: 'active',
    projects: [
      {
        id: 'analytics-dashboard',
        title: 'Data Analytics Dashboard',
        description: 'Interactive dashboard for real-time data visualization and business intelligence.',
        technologies: ['Python', 'React', 'D3.js', 'PostgreSQL', 'FastAPI'],
        status: 'completed',
        startDate: '2023-08-01',
        endDate: '2023-12-20',
        budget: 60000,
        deliverables: ['Analytics Dashboard', 'Data Pipeline', 'API Documentation', 'User Manual']
      },
      {
        id: 'ml-platform',
        title: 'Machine Learning Platform',
        description: 'ML platform for automated model training and deployment.',
        technologies: ['Python', 'TensorFlow', 'React', 'Docker', 'Kubernetes'],
        status: 'in-progress',
        startDate: '2024-02-01',
        budget: 75000,
        deliverables: ['ML Platform', 'Model Registry', 'Deployment Pipeline', 'Monitoring Tools']
      }
    ],
    testimonial: {
      text: 'Their expertise in data visualization and machine learning helped us transform our data into actionable insights.',
      author: 'Lisa Wang',
      role: 'Chief Data Officer'
    }
  },
  {
    id: 'smartlife',
    name: 'SmartLife IoT',
    company: 'SmartLife IoT Solutions',
    industry: 'IoT',
    description: 'Internet of Things solutions for smart homes and industrial applications.',
    website: 'https://smartlife.iot',
    startedWorking: '2023-09-15',
    status: 'maintenance',
    projects: [
      {
        id: 'smart-home-system',
        title: 'IoT Smart Home System',
        description: 'Connected home automation system with voice control and energy monitoring.',
        technologies: ['Arduino', 'Node.js', 'MQTT', 'React', 'MongoDB'],
        status: 'completed',
        startDate: '2023-10-01',
        endDate: '2024-02-28',
        budget: 40000,
        deliverables: ['IoT Hardware Integration', 'Mobile App', 'Web Dashboard', 'API']
      }
    ],
    testimonial: {
      text: 'Snapshots helped us bring our IoT vision to life. The system works flawlessly and our customers love it.',
      author: 'Alex Thompson',
      role: 'Founder & CEO'
    }
  },
  {
    id: 'edulearn',
    name: 'EduLearn Academy',
    company: 'EduLearn Academy Ltd.',
    industry: 'Education',
    description: 'Online learning platform providing courses and certifications.',
    website: 'https://edulearn.academy',
    startedWorking: '2023-04-10',
    status: 'active',
    projects: [
      {
        id: 'lms-platform',
        title: 'Learning Management System',
        description: 'Comprehensive LMS with video streaming, quizzes, and progress tracking.',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS', 'Stripe'],
        status: 'completed',
        startDate: '2023-05-01',
        endDate: '2023-10-15',
        budget: 70000,
        deliverables: ['LMS Platform', 'Video Streaming', 'Payment Integration', 'Admin Panel']
      },
      {
        id: 'mobile-learning',
        title: 'Mobile Learning App',
        description: 'Mobile companion app for offline learning and progress synchronization.',
        technologies: ['React Native', 'GraphQL', 'SQLite', 'Firebase'],
        status: 'planning',
        startDate: '2024-03-01',
        budget: 25000,
        deliverables: ['Mobile App', 'Offline Sync', 'Push Notifications']
      }
    ],
    testimonial: {
      text: 'The LMS platform has transformed our ability to deliver quality education. Student engagement has increased significantly.',
      author: 'Dr. Sarah Mitchell',
      role: 'Academic Director'
    }
  }
];

export const getClientById = (id: string) => clients.find(client => client.id === id);
export const getActiveClients = () => clients.filter(client => client.status === 'active');
export const getClientsByIndustry = (industry: string) => clients.filter(client => client.industry === industry);
