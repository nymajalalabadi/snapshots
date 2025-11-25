import { useRouter } from 'next/router';
import Link from 'next/link';
import { getClientById } from '../../../data/clients';

export default function SelectedClientProjectPage() {
  const router = useRouter();
  const { id, clientprojectid } = router.query;

  const client = id && typeof id === 'string' ? getClientById(id) : null;
  const project = client?.projects.find(p => p.id === clientprojectid);

  if (!client || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-gray-600 mb-4">
            The client project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="space-x-4">
            <Link href={`/clients/${id}`} className="btn btn-primary">
              Back to Client
            </Link>
            <Link href="/clients" className="btn btn-secondary">
              View All Clients
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🚧';
      case 'planning': return '📋';
      default: return '📁';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <Link href="/" className="text-2xl font-bold text-primary">Snapshots</Link>
          <div className="nav-links">
            <Link href="/" className="btn btn-ghost">Home</Link>
            <Link href="/portfolio" className="btn btn-ghost">Portfolio</Link>
            <Link href="/clients" className="btn btn-ghost">Clients</Link>
            <Link href="/services" className="btn btn-ghost">Services</Link>
            <Link href="/about" className="btn btn-ghost">About</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/clients" className="hover:text-primary">Clients</Link>
            <span>/</span>
            <Link href={`/clients/${client.id}`} className="hover:text-primary">{client.company}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{getStatusIcon(project.status)}</div>
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(project.status)}`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/90 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="font-semibold">Client:</span> {client.company}
                </div>
                <div>
                  <span className="font-semibold">Start Date:</span> {new Date(project.startDate).toLocaleDateString()}
                </div>
                <div>
                  <span className="font-semibold">End Date:</span> {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Ongoing'}
                </div>
                {project.budget && (
                  <div>
                    <span className="font-semibold">Budget:</span> ${project.budget.toLocaleString()}
                  </div>
                )}
              </div>

              {client.website && (
                <div className="mt-6">
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Visit {client.company} 🌐
                  </a>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium capitalize">{project.status.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">
                    {project.endDate
                      ? `${Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24))} days`
                      : 'Ongoing'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies:</span>
                  <span className="font-medium">{project.technologies.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Deliverables:</span>
                  <span className="font-medium">{project.deliverables.length}</span>
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
            {project.technologies.map((tech) => (
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
              <h2 className="text-3xl font-bold mb-6">Project Scope & Objectives</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Goals</h3>
                  <p className="text-gray-600">
                    {client.company} required a comprehensive solution to {project.description.toLowerCase()}.
                    The project aimed to deliver a robust, scalable application that meets their business needs
                    and provides excellent user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Approach</h3>
                  <p className="text-gray-600">
                    We utilized modern development practices and cutting-edge technologies including
                    {project.technologies.slice(0, 3).join(', ')}{project.technologies.length > 3 ? ` and ${project.technologies.length - 3} other technologies` : ''}.
                    The solution was built with scalability, maintainability, and performance in mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Challenges</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Integration with existing systems and workflows
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Ensuring data security and compliance requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Optimizing performance for large-scale usage
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Creating intuitive user interfaces and experiences
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Deliverables & Results</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Deliverables</h3>
                  <div className="space-y-3">
                    {project.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Outcomes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {project.status === 'completed' ? '100%' : '95%'}
                      </div>
                      <div className="text-sm text-green-700">Completion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {project.status === 'completed' ? 'On Time' : 'On Track'}
                      </div>
                      <div className="text-sm text-blue-700">Delivery Status</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {project.technologies.length}
                      </div>
                      <div className="text-sm text-purple-700">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        {project.deliverables.length}
                      </div>
                      <div className="text-sm text-orange-700">Deliverables</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Project Timeline</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold mb-2">Planning & Requirements</h3>
                  <p className="text-gray-600 mb-2">
                    Initial project planning, requirements gathering, and technical specification.
                  </p>
                  <div className="text-sm text-gray-500">
                    {new Date(project.startDate).toLocaleDateString()} - Week 1-2
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold mb-2">Development & Implementation</h3>
                  <p className="text-gray-600 mb-2">
                    Core development work, feature implementation, and iterative testing.
                  </p>
                  <div className="text-sm text-gray-500">
                    Week 3 - {project.endDate ? `Week ${Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24 * 7))}` : 'Ongoing'}
                  </div>
                </div>
              </div>

              {project.status === 'completed' && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-2">Testing & Deployment</h3>
                    <p className="text-gray-600 mb-2">
                      Final testing, quality assurance, and successful deployment.
                    </p>
                    <div className="text-sm text-gray-500">
                      {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Final Phase'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Other Projects by {client.company}</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {client.projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <div key={otherProject.id} className="card fade-in">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        otherProject.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : otherProject.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {otherProject.status.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{otherProject.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{otherProject.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{otherProject.technologies.length} tech</span>
                      <span>{new Date(otherProject.startDate).getFullYear()}</span>
                    </div>

                    <Link href={`/clients/${client.id}/${otherProject.id}`} className="btn btn-primary w-full">
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {client.projects.length <= 1 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">More projects coming soon!</h3>
              <p className="text-gray-600">Stay tuned for more exciting projects from {client.company}.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
            <Link href={`/clients/${client.id}`} className="btn btn-ghost border-white text-white hover:bg-white hover:text-primary-600">
              Back to {client.company}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}