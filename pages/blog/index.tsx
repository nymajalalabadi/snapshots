import Link from "next/link";
import { useState } from "react";
import { blogPosts, getFeaturedPosts, getAllTags } from "../../data/blog";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const allTags = getAllTags();

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  const featuredPosts = getFeaturedPosts();

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
          <h1>Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts.
            Stay updated with the latest in web development, design, and technology.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="card fade-in">
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-xs">
                        👤
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">⏱️ {post.readTime} min read</span>
                    <Link href={`/blog/${post.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Posts */}
      <section className="py-16">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md-flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Filter by Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Filter by Tag</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              {selectedTag !== 'all' && ` tagged with "${selectedTag}"`}
            </p>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="card fade-in">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>⏱️ {post.readTime}m</span>
                    </div>

                    <Link href={`/blog/${post.id}`} className="btn btn-primary w-full">
                      Read Article
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
            {['Technology', 'Development', 'Design', 'DevOps'].map((category) => {
              const categoryPosts = blogPosts.filter(p => p.category === category);
              return (
                <div key={category} className="card text-center">
                  <div className="card-body">
                    <div className="text-3xl mb-3">
                      {category === 'Technology' && '💻'}
                      {category === 'Development' && '🚀'}
                      {category === 'Design' && '🎨'}
                      {category === 'DevOps' && '⚙️'}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                    </p>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="btn btn-primary w-full"
                    >
                      View Articles
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="btn btn-secondary px-6">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
