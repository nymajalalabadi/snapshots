# Snapshots - Modern Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC)

A modern, responsive portfolio website built with Next.js for showcasing development services, projects, and client work. Features a clean design with comprehensive project management and client relationship tracking.

## ✨ Features

### 🏠 **Homepage**
- Hero section with call-to-action
- Featured projects showcase
- Services overview with pricing
- Client testimonials
- Modern responsive design

### 📁 **Portfolio**
- **Project listings** with filtering by category
- **Detailed project pages** with technologies, timelines, and deliverables
- **Category-based organization** (Web Dev, Mobile, Data Science, IoT)
- **Project status tracking** (Completed, In Progress, Planning)

### 🤝 **Client Management**
- **Client directory** with company information
- **Individual client pages** showing project history
- **Project tracking per client** with detailed breakdowns
- **Client testimonials** and partnership information

### 📝 **Blog**
- **Article management** with categories and tags
- **Featured posts** highlighting
- **Search and filtering** capabilities
- **Rich content** with markdown support

### 🛠️ **Services**
- **Service catalog** with detailed descriptions
- **Pricing information** and feature lists
- **Service inquiries** and contact integration

### 📞 **Contact**
- **Interactive contact form** with validation
- **Company information** and business hours
- **Social media links** and location details
- **FAQ section** for common inquiries

### 🎨 **Design Features**
- **Fully responsive** design for all devices
- **Dark mode support** with system preference detection
- **Modern UI components** with smooth animations
- **Accessibility-focused** design patterns
- **Performance optimized** with Next.js best practices

## 🚀 Tech Stack

### Frontend
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Inter & Poppins** - Modern Google Fonts

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type definitions

### Key Libraries
- Custom CSS utilities for responsive design
- Component-based architecture
- Data-driven content management

## 📁 Project Structure

```
snapshots/
├── components/           # Reusable UI components
│   └── Layout.tsx       # Main layout with header/footer
├── data/                # Static data files
│   ├── projects.ts      # Project portfolio data
│   ├── services.ts      # Service offerings
│   ├── clients.ts       # Client information
│   └── blog.ts          # Blog posts and articles
├── pages/               # Next.js pages (File-based routing)
│   ├── index.tsx        # Homepage
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── portfolio/       # Portfolio section
│   │   ├── index.tsx    # Portfolio overview
│   │   ├── list.tsx     # Filtered project list
│   │   └── [projectid].tsx # Individual project pages
│   ├── clients/         # Client management
│   │   ├── index.tsx    # Client directory
│   │   └── [id]/        # Client-specific pages
│   │       ├── index.tsx # Client overview
│   │       └── [clientprojectid].tsx # Client project details
│   ├── blog/            # Blog section
│   │   ├── index.tsx    # Blog overview
│   │   └── [...slug].tsx # Individual blog posts
│   ├── contact.tsx      # Contact page
│   └── _app.tsx         # App configuration
├── styles/              # Global styles
│   └── globals.css      # Main stylesheet with utilities
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd snapshots
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Usage

### Adding New Content

#### Projects
Add new projects to `data/projects.ts`:
```typescript
{
  id: 'new-project',
  title: 'New Project Title',
  description: 'Project description...',
  category: 'Web Development',
  technologies: ['React', 'Node.js'],
  featured: true
}
```

#### Clients
Add new clients to `data/clients.ts`:
```typescript
{
  id: 'new-client',
  company: 'New Company',
  industry: 'Technology',
  projects: [...]
}
```

#### Blog Posts
Add new blog posts to `data/blog.ts`:
```typescript
{
  id: 'new-post',
  title: 'Blog Post Title',
  content: '# Markdown content...',
  category: 'Development'
}
```

### Customization

#### Styling
- Modify `styles/globals.css` for global styles
- Update Tailwind configuration in the CSS file
- Add custom CSS variables for theming

#### Content
- Update company information in relevant data files
- Modify navigation links in `components/Layout.tsx`
- Customize contact information and social links

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, please contact:
- Email: hello@snapshots.dev
- Website: [https://snapshots.dev](https://snapshots.dev)

---

Built with ❤️ using Next.js and modern web technologies.
