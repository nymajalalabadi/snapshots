import Link from "next/link";
import Layout from "../../components/Layout";
import { projects, getFeaturedProjects } from "../../data/projects";

export default function PortfolioPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our standout projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <Link href={`/portfolio/${project.id}`} className="text-primary hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio/list" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our work by technology and industry focus.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
            {['Web Development', 'Mobile Development', 'Data Science', 'IoT'].map((category) => {
              const categoryProjects = projects.filter(p => p.category === category);
              return (
                <div key={category} className="card text-center">
                  <div className="card-body">
                    <div className="text-3xl mb-3">
                      {category === 'Web Development' && '💻'}
                      {category === 'Mobile Development' && '📱'}
                      {category === 'Data Science' && '📊'}
                      {category === 'IoT' && '🔧'}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
                    </p>
                    <Link
                      href={`/portfolio/list?category=${encodeURIComponent(category)}`}
                      className="btn btn-primary"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid md-grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-600">Featured Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {new Set(projects.map(p => p.client).filter(Boolean)).size}
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}