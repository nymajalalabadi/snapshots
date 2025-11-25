import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getProjectById } from '../../data/projects';

export default function PortfolioProjectPage() {
  const router = useRouter();
  const { projectid } = router.query;

  const project = projectid && typeof projectid === 'string' ? getProjectById(projectid) : null;

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
            <p className="text-gray-600 mb-4">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/portfolio" className="btn btn-primary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>

      {/* Project Header */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/portfolio" className="text-white/70 hover:text-white">
              Portfolio
            </Link>
            <span className="text-white/70">/</span>
            <span>{project.title}</span>
          </div>

          <div className="grid lg-grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{project.icon || '🚀'}</div>
                {project.featured && (
                  <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm rounded-full font-medium">
                    Featured Project
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/90 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="font-semibold">Category:</span> {project.category}
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {new Date(project.date).toLocaleDateString()}
                </div>
                {project.client && (
                  <div>
                    <span className="font-semibold">Client:</span> {project.client}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium text-green-300">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">3-6 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Size:</span>
                  <span className="font-medium">2-4 developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies Used</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
            {project.technologies?.map((tech) => (
              <div key={tech} className="card text-center">
                <div className="card-body">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-semibold">{tech}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                  <p className="text-gray-600">
                    {project.client
                      ? `${project.client} needed a modern ${project.category.toLowerCase()} solution to improve their digital presence and user experience.`
                      : `We were challenged to create a cutting-edge ${project.category.toLowerCase()} solution that meets modern standards and user expectations.`
                    }
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Solution</h3>
                  <p className="text-gray-600">
                    We developed a comprehensive solution using {project.technologies.slice(0, 3).join(', ')}
                    {project.technologies.length > 3 ? ` and ${project.technologies.length - 3} other technologies` : ''}.
                    The result is a robust, scalable application that delivers exceptional performance and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Results</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Improved user engagement by 150%
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Reduced load times by 60%
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Increased conversion rates by 85%
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Mobile-responsive design for all devices
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>

              <div className="space-y-4">
                {[
                  'Modern, responsive design',
                  'High performance and scalability',
                  'Intuitive user interface',
                  'Cross-platform compatibility',
                  'Comprehensive testing and quality assurance',
                  'Ongoing maintenance and support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Projects</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {/* This would be populated with related projects based on category or technologies */}
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">More Coming Soon</h3>
              <p className="text-gray-600">Check back for more amazing projects!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}