import { useRouter } from "next/router";
import Link from "next/link";
import { getPostById, blogPosts } from "../../data/blog";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Handle catch-all route: slug can be an array like ['post-id'] or ['category', 'post-id']
  const postId = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  const post = postId && typeof postId === 'string' ? getPostById(postId) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold mb-2">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-4">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
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
            <Link href="/services" className="btn btn-ghost">Services</Link>
            <Link href="/about" className="btn btn-ghost">About</Link>
            <Link href="/blog" className="btn btn-ghost">Blog</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-gray-500 hover:text-primary">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{post.category}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                  Featured Post
                </span>
              )}
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-medium">
                  👤
                </div>
                <span>{post.author}</span>
              </div>
              <div>
                📅 {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div>
                ⏱️ {post.readTime} min read
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  #{tag.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mb-4 mt-8">{paragraph.slice(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-semibold mb-3 mt-6">{paragraph.slice(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mb-2 mt-4">{paragraph.slice(4)}</h3>;
                } else if (paragraph.trim()) {
                  return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      {post.author === 'Sarah Johnson'
                        ? 'Full-stack developer with 8+ years of experience in modern web technologies. Passionate about creating scalable and maintainable solutions.'
                        : post.author === 'Michael Chen'
                        ? 'Creative designer focused on user-centered design principles. Expert in creating intuitive and beautiful user experiences.'
                        : post.author === 'Emma Rodriguez'
                        ? 'Mobile development specialist with expertise in cross-platform solutions. Loves building apps that users love to use.'
                        : post.author === 'David Kim'
                        ? 'Infrastructure and deployment specialist ensuring applications run smoothly at scale. Expert in cloud technologies and automation.'
                        : 'Tech enthusiast and writer passionate about sharing knowledge and insights.'
                      }
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-primary hover:underline">Follow on LinkedIn</a>
                      <a href="#" className="text-primary hover:underline">Follow on Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
              .slice(0, 3)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="card fade-in">
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-3">
                      {relatedPost.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{relatedPost.author}</span>
                      <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <Link href={`/blog/${relatedPost.id}`} className="btn btn-primary w-full">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {blogPosts.filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))).length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">More articles coming soon!</h3>
              <p className="text-gray-600">Stay tuned for more insights and tutorials.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tutorials, and industry news.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="btn btn-secondary px-6">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}