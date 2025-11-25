'use client';

import { useRouter } from 'next/router';
import Link from "next/link";
import { useState, useMemo } from 'react';
import Layout from "../../components/Layout";
import { projects } from "../../data/projects";

export default function PortfolioListPage() {
  const router = useRouter();
  const { category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    const currentCategory = (category && typeof category === 'string') ? category : selectedCategory;
    return currentCategory === 'all' ? projects : projects.filter(p => p.category === currentCategory);
  }, [category, selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    router.push(cat === 'all' ? '/portfolio/list' : `/portfolio/list?category=${encodeURIComponent(cat)}`, undefined, { shallow: true });
  };

  return (
    <Layout>

      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our complete portfolio of successful projects.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
                <span className="ml-2 text-xs">
                  ({cat === 'all' ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="card fade-in">
                  <div className="card-body">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{project.icon || '🚀'}</div>
                      {project.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{project.category}</span>
                      <span>{new Date(project.date).getFullYear()}</span>
                    </div>

                    <Link href={`/portfolio/${project.id}`} className="btn btn-primary w-full">
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="py-8 bg-gray-50">
        <div className="container text-center">
          <Link href="/portfolio" className="btn btn-secondary">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </Layout>
  );
}