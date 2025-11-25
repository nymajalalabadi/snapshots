import Link from "next/link";
import Layout from "../../components/Layout";
import { teamMembers } from "../../data/team";

export default function AboutPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>About Snapshots</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital strategists
            dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative digital solutions that not only meet their current needs
                but also position them for future success in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-600">
                We believe in the power of technology to transform businesses and create meaningful
                connections between companies and their customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together expertise from various fields to deliver
              comprehensive digital solutions.
            </p>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card text-center">
                <div className="card-body">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience} years experience</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 justify-center">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary">
                        LinkedIn
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-primary">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md-grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, ensuring the highest quality
                standards and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, understanding their needs
                and building long-term relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends and continuously explore new ways
                to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  );
}