import { useRouter } from "next/router";
import Link from "next/link";
import { getClientById } from "../../../data/clients";

export default function SelectedClientPage() {
  const router = useRouter();
  const { id } = router.query;

  const client = id && typeof id === 'string' ? getClientById(id) : null;

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👥</div>
          <h1 className="text-2xl font-bold mb-2">Client Not Found</h1>
          <p className="text-gray-600 mb-4">The client you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/clients" className="btn btn-primary">
            Back to Clients
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Client Header */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/clients" className="text-white/70 hover:text-white">
              Clients
            </Link>
            <span className="text-white/70">/</span>
            <span>{client.company}</span>
          </div>

          <div className="grid lg-grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🏢</div>
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                  client.status === 'active'
                    ? 'bg-green-400 text-green-900'
                    : client.status === 'completed'
                    ? 'bg-blue-400 text-blue-900'
                    : 'bg-purple-400 text-purple-900'
                }`}>
                  {client.status}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{client.company}</h1>
              <p className="text-xl text-white/90 mb-6">{client.description}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="font-semibold">Industry:</span> {client.industry}
                </div>
                <div>
                  <span className="font-semibold">Partner Since:</span> {new Date(client.startedWorking).getFullYear()}
                </div>
                <div>
                  <span className="font-semibold">Projects:</span> {client.projects.length}
                </div>
              </div>

              {client.website && (
                <div className="mt-6">
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Visit Website 🌐
                  </a>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Partnership Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium capitalize">{client.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Projects:</span>
                  <span className="font-medium">{client.projects.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Projects:</span>
                  <span className="font-medium">
                    {client.projects.filter(p => p.status === 'in-progress').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Completed:</span>
                  <span className="font-medium">
                    {client.projects.filter(p => p.status === 'completed').length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Projects with {client.company}</h2>

          <div className="space-y-8">
            {client.projects.map((project) => (
              <div key={project.id} className="card">
                <div className="card-body">
                  <div className="flex flex-col lg-flex-row lg-items-center lg-justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">START DATE</h4>
                      <p className="text-sm">{new Date(project.startDate).toLocaleDateString()}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-2">END DATE</h4>
                      <p className="text-sm">
                        {project.endDate
                          ? new Date(project.endDate).toLocaleDateString()
                          : 'Ongoing'
                        }
                      </p>
                    </div>

                    {project.budget && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 mb-2">BUDGET</h4>
                        <p className="text-sm font-medium">${project.budget.toLocaleString()}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-sm text-gray-500 mb-3">DELIVERABLES</h4>
                    <div className="grid md-grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {client.testimonial && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What They Say About Us</h2>

              <div className="card">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">&ldquo;</div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    &ldquo;{client.testimonial.text}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg">{client.testimonial.author}</div>
                    <div className="text-primary">{client.testimonial.role}</div>
                    <div className="text-gray-500">{client.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
    </div>
  );
}