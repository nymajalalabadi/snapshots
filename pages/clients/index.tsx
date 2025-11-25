import Link from "next/link";
import { clients, getActiveClients } from "../../data/clients";

export default function ClientsPage() {
  const activeClients = getActiveClients();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <Link href="/" className="text-2xl font-bold text-primary">Snapshots</Link>
          <div className="nav-links">
            <Link href="/" className="btn btn-ghost">Home</Link>
            <Link href="/portfolio" className="btn btn-ghost">Portfolio</Link>
            <Link href="/services" className="btn btn-ghost">Services</Link>
            <Link href="/about" className="btn btn-ghost">About</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Our Clients</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We&apos;ve had the privilege of working with amazing companies across various industries.
            Here are some of our valued partners and their success stories.
          </p>
        </div>
      </section>

      {/* Active Clients */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Active Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Companies we&apos;re currently collaborating with to build amazing digital solutions.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {activeClients.map((client) => (
              <div key={client.id} className="card fade-in">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">🏢</div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      client.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {client.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{client.company}</h3>
                  <p className="text-primary font-medium mb-2">{client.industry}</p>
                  <p className="text-gray-600 mb-4">{client.description}</p>

                  <div className="text-sm text-gray-500 mb-4">
                    Partner since {new Date(client.startedWorking).getFullYear()}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/clients/${client.id}`} className="btn btn-primary flex-1">
                      View Details
                    </Link>
                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary px-3"
                      >
                        🌐
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across various industries, bringing specialized knowledge to each sector.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
            {['Technology', 'Finance', 'Consulting', 'Data & Analytics', 'IoT', 'Education'].map((industry) => {
              const industryClients = clients.filter(c => c.industry === industry);
              return (
                <div key={industry} className="card text-center">
                  <div className="card-body">
                    <div className="text-3xl mb-3">
                      {industry === 'Technology' && '💻'}
                      {industry === 'Finance' && '💰'}
                      {industry === 'Consulting' && '🤝'}
                      {industry === 'Data & Analytics' && '📊'}
                      {industry === 'IoT' && '🔧'}
                      {industry === 'Education' && '📚'}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{industry}</h3>
                    <p className="text-gray-600 text-sm">
                      {industryClients.length} client{industryClients.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {clients.filter(c => c.testimonial).slice(0, 3).map((client) => (
              <div key={client.id} className="card">
                <div className="card-body">
                  <div className="text-4xl mb-4">&ldquo;</div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    &ldquo;{client.testimonial?.text}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{client.testimonial?.author}</div>
                    <div className="text-primary text-sm">{client.testimonial?.role}</div>
                    <div className="text-gray-500 text-sm">{client.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="grid md-grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{clients.length}</div>
              <div className="opacity-90">Total Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{activeClients.length}</div>
              <div className="opacity-90">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {clients.reduce((sum, client) => sum + client.projects.length, 0)}
              </div>
              <div className="opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {new Set(clients.map(c => c.industry)).size}
              </div>
              <div className="opacity-90">Industries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}