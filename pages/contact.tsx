'use client';

import { useState } from 'react';
import Link from "next/link";
import Layout from "../components/Layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your next project? We&apos;d love to hear from you.
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md-grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="cloud-services">Cloud Solutions</option>
                    <option value="maintenance">Application Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@snapshots.dev</p>
                    <p className="text-gray-600">support@snapshots.dev</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Answers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions and answers about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card">
              <div className="card-body">
                <h3 className="font-semibold mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="font-semibold mb-2">Do you work with international clients?</h3>
                <p className="text-gray-600">Yes! We work with clients worldwide and are comfortable with different time zones.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="font-semibold mb-2">Can you sign an NDA?</h3>
                <p className="text-gray-600">Absolutely. We take confidentiality seriously and are happy to sign NDAs for all projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
