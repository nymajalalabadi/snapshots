export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readTime: number; // in minutes
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-web-development-2024',
    title: 'Modern Web Development Trends in 2024',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to edge computing and modern frameworks.',
    content: `
# Modern Web Development Trends in 2024

Web development continues to evolve at a rapid pace. Here are the key trends shaping the industry this year.

## AI-Powered Development

Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent debugging, AI tools are becoming essential in modern development workflows.

## Edge Computing

Edge computing brings computation closer to users, reducing latency and improving performance. Modern frameworks are embracing edge-first architectures.

## Component-Driven Development

Reusable components and design systems are becoming the standard approach for building scalable web applications.

## Performance First

Web performance continues to be crucial. Modern tools and techniques help developers create lightning-fast applications.

## The Future

The future of web development looks exciting with continued innovation in AI, performance, and user experience.
    `,
    author: 'Sarah Johnson',
    publishedAt: '2024-11-15',
    tags: ['Web Development', 'Trends', 'AI', 'Performance'],
    category: 'Technology',
    readTime: 5,
    featured: true
  },
  {
    id: 'react-best-practices',
    title: 'React Best Practices for Large Applications',
    excerpt: 'Learn essential patterns and practices for building maintainable React applications at scale.',
    content: `
# React Best Practices for Large Applications

Building large-scale React applications requires careful planning and adherence to best practices.

## Component Architecture

Organize your components in a logical hierarchy. Use container and presentational component patterns.

## State Management

Choose the right state management solution based on your application needs. Consider Context API, Redux, or Zustand.

## Performance Optimization

Implement proper memoization, lazy loading, and code splitting to ensure optimal performance.

## Testing Strategy

Comprehensive testing ensures code reliability. Unit tests, integration tests, and E2E tests all play important roles.
    `,
    author: 'Michael Chen',
    publishedAt: '2024-11-10',
    tags: ['React', 'Best Practices', 'Performance', 'Architecture'],
    category: 'Development',
    readTime: 8,
    featured: true
  },
  {
    id: 'ux-design-principles',
    title: 'Essential UX Design Principles Every Developer Should Know',
    excerpt: 'Understanding UX principles helps developers create better user experiences in their applications.',
    content: `
# Essential UX Design Principles

Great user experience is the foundation of successful digital products.

## User-Centered Design

Always design with the user in mind. Understand their needs, behaviors, and pain points.

## Simplicity

Keep interfaces simple and intuitive. Remove unnecessary complexity.

## Consistency

Maintain consistency across your application for better user understanding.

## Accessibility

Ensure your applications are accessible to all users, regardless of abilities.
    `,
    author: 'Emma Rodriguez',
    publishedAt: '2024-11-05',
    tags: ['UX', 'Design', 'Accessibility', 'User Experience'],
    category: 'Design',
    readTime: 6,
    featured: false
  },
  {
    id: 'cloud-deployment-strategies',
    title: 'Cloud Deployment Strategies for Modern Applications',
    excerpt: 'Different deployment strategies and when to use them for optimal application delivery.',
    content: `
# Cloud Deployment Strategies

Choosing the right deployment strategy is crucial for application success.

## Blue-Green Deployment

Zero-downtime deployment strategy with instant rollback capability.

## Canary Releases

Gradual rollout to minimize risk and gather feedback.

## Rolling Updates

Update instances gradually to maintain availability.

## Feature Flags

Control feature rollout independently of code deployment.
    `,
    author: 'David Kim',
    publishedAt: '2024-10-28',
    tags: ['Cloud', 'DevOps', 'Deployment', 'AWS'],
    category: 'DevOps',
    readTime: 7,
    featured: true
  },
  {
    id: 'mobile-first-development',
    title: 'Mobile-First Development: Why It Matters',
    excerpt: 'Why mobile-first development approach leads to better user experiences across all devices.',
    content: `
# Mobile-First Development

The mobile-first approach is essential in today's mobile-dominated world.

## Mobile Usage Statistics

Mobile devices account for majority of internet usage. Designing for mobile first ensures optimal experience.

## Progressive Enhancement

Start with core functionality and enhance for larger screens.

## Performance Considerations

Mobile networks and devices have constraints that must be considered.

## Future-Proof Design

Mobile-first designs naturally work well on emerging technologies like foldable screens and wearables.
    `,
    author: 'Sarah Johnson',
    publishedAt: '2024-10-20',
    tags: ['Mobile', 'Responsive Design', 'Performance'],
    category: 'Development',
    readTime: 4,
    featured: false
  },
  {
    id: 'data-visualization-react',
    title: 'Building Interactive Data Visualizations with React',
    excerpt: 'Create compelling data visualizations using modern React libraries and best practices.',
    content: `
# Data Visualization with React

Data visualization brings numbers to life and helps users understand complex information.

## Popular Libraries

D3.js, Chart.js, and Recharts are powerful tools for creating interactive visualizations.

## Best Practices

Choose appropriate chart types, use consistent colors, and ensure accessibility.

## Performance

Optimize rendering performance for large datasets using virtualization techniques.

## Interactivity

Add meaningful interactions that help users explore and understand data better.
    `,
    author: 'Michael Chen',
    publishedAt: '2024-10-15',
    tags: ['Data Visualization', 'React', 'Charts', 'D3.js'],
    category: 'Development',
    readTime: 9,
    featured: false
  }
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);
export const getAllTags = () => [...new Set(blogPosts.flatMap(post => post.tags))];
