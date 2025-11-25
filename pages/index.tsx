import Link from "next/link";
import Layout from "../components/Layout";
import { getFeaturedProjects } from "../data/projects";
import { services } from "../data/services";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Capture Your Digital Moments</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional web development, mobile apps, and digital solutions that bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent work and see how we&apos;ve helped businesses grow digitally.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="card fade-in">
                <div className="card-body">
                  <div className="text-2xl mb-4">{project.icon || '🚀'}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${project.id}`} className="text-primary hover:underline">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="card fade-in">
                <div className="card-body">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-primary font-medium">
                    Starting at ${service.price?.starting}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your ideas to life.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </section>

    </Layout>
  );
}