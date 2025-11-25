import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="nav">
        <div className="container nav-container">
          <Link href="/" className="text-2xl font-bold text-primary">Snapshots</Link>
          <div className="nav-links">
            <Link href="/" className="btn btn-ghost">Home</Link>
            <Link href="/portfolio" className="btn btn-ghost">Portfolio</Link>
            <Link href="/services" className="btn btn-ghost">Services</Link>
            <Link href="/about" className="btn btn-ghost">About</Link>
            <Link href="/clients" className="btn btn-ghost">Clients</Link>
            <Link href="/blog" className="btn btn-ghost">Blog</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md-grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Snapshots</h3>
              <p className="text-gray-400">
                Creating digital experiences that matter.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services#web-development" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/services#mobile-development" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services#ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link href="/services#consulting" className="hover:text-white transition-colors">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Work</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/clients" className="hover:text-white transition-colors">Clients</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@snapshots.dev</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Get In Touch</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Snapshots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
