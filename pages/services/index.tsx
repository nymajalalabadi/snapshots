import Link from "next/link";
import Layout from "../../components/Layout";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
            From web development to mobile apps, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="card fade-in">
                <div className="card-body">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Whats Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.price && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-600">Starting at</span>
                          <div className="text-2xl font-bold text-primary">
                            ${service.price.starting}
                          </div>
                        </div>
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="btn btn-primary"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md-grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We understand your requirements, goals, and vision for the project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed roadmap and technical specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Our team builds your solution with regular updates and feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Launch</h3>
              <p className="text-gray-600 text-sm">
                We deploy your project and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks,
                  while complex applications can take 3-6 months. We'll provide a detailed timeline during planning.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes! We offer comprehensive maintenance packages to keep your application running smoothly,
                  including bug fixes, security updates, and feature enhancements.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold mb-2">What's your payment structure?</h3>
                <p className="text-gray-600">
                  We typically work with a 50% upfront payment and 50% upon completion for fixed-price projects.
                  For hourly projects, we bill monthly with detailed time tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Lets discuss your project and find the perfect solution for your needs.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}
