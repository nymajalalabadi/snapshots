export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    starting: number;
    currency: string;
  };
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '💻',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Friendly',
      'Cross-browser Compatibility',
      'API Integration',
      'Database Design'
    ],
    price: {
      starting: 5000,
      currency: 'USD'
    }
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Support'
    ],
    price: {
      starting: 8000,
      currency: 'USD'
    }
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: '🎨',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems'
    ],
    price: {
      starting: 3000,
      currency: 'USD'
    }
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance on technology decisions and project architecture.',
    icon: '🤝',
    features: [
      'Technology Assessment',
      'Architecture Design',
      'Code Review',
      'Performance Auditing',
      'Security Analysis',
      'Team Training'
    ],
    price: {
      starting: 200,
      currency: 'USD'
    }
  },
  {
    id: 'cloud-services',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: '☁️',
    features: [
      'AWS/Azure/GCP Setup',
      'Serverless Architecture',
      'CI/CD Pipelines',
      'Monitoring & Logging',
      'Auto Scaling',
      'Backup & Recovery'
    ],
    price: {
      starting: 4000,
      currency: 'USD'
    }
  },
  {
    id: 'maintenance',
    title: 'Application Maintenance',
    description: 'Ongoing support and maintenance for your applications.',
    icon: '🔧',
    features: [
      'Bug Fixes',
      'Security Updates',
      'Performance Monitoring',
      'Feature Updates',
      '24/7 Support',
      'Regular Backups'
    ],
    price: {
      starting: 1000,
      currency: 'USD'
    }
  }
];

export const getServiceById = (id: string) => services.find(service => service.id === id);
