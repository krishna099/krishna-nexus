import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Krishna Nexus',
  description: 'Latest insights and articles on cloud infrastructure and enterprise technology.',
}

const articles = [
  {
    id: 1,
    title: 'The Future of Cloud Infrastructure: Trends for 2024',
    excerpt: 'Explore the emerging technologies and trends that will shape cloud infrastructure in 2024.',
    author: 'Rajesh Kumar',
    date: 'December 15, 2023',
    category: 'Cloud Trends',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Kubernetes Best Practices for Enterprise Deployments',
    excerpt: 'Learn proven strategies for managing Kubernetes in production environments at scale.',
    author: 'Priya Sharma',
    date: 'December 10, 2023',
    category: 'Kubernetes',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Cost Optimization Strategies for Cloud Infrastructure',
    excerpt: 'Discover how to reduce your cloud costs by up to 40% without sacrificing performance.',
    author: 'Amit Patel',
    date: 'December 5, 2023',
    category: 'Cost Optimization',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Disaster Recovery Planning: A Complete Guide',
    excerpt: 'Ensure business continuity with comprehensive disaster recovery strategies.',
    author: 'Sarah Johnson',
    date: 'November 28, 2023',
    category: 'Disaster Recovery',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'DevOps Automation: Accelerating Your Deployment Pipeline',
    excerpt: 'Transform your deployment process with advanced DevOps automation techniques.',
    author: 'Rajesh Kumar',
    date: 'November 20, 2023',
    category: 'DevOps',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Enterprise Security in the Cloud: Compliance Made Easy',
    excerpt: 'Navigate compliance requirements and implement robust security measures.',
    author: 'Priya Sharma',
    date: 'November 15, 2023',
    category: 'Security',
    readTime: '9 min read',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Krishna Nexus <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry insights, best practices, and expert advice on cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition">
                  {article.title}
                </h2>

                <p className="text-muted-foreground mb-6">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-accent" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition font-semibold"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button className="px-4 py-2 border border-border text-muted-foreground rounded hover:border-accent hover:text-accent transition disabled:opacity-50">
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}>1</button>
              <button className="w-10 h-10 border border-border text-muted-foreground rounded hover:border-accent transition">2</button>
              <button className="w-10 h-10 border border-border text-muted-foreground rounded hover:border-accent transition">3</button>
            </div>
            <button className="px-4 py-2 border border-border text-muted-foreground rounded hover:border-accent hover:text-accent transition">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-12 border border-accent/30">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest insights on cloud infrastructure and enterprise technology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-3 rounded bg-foreground/5 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold rounded hover:opacity-90 transition whitespace-nowrap"
              style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Migration Checklist',
                type: 'Whitepaper',
                description: 'Essential steps for a successful cloud migration',
              },
              {
                title: 'Infrastructure Benchmarking Guide',
                type: 'Guide',
                description: 'Measure and optimize your infrastructure performance',
              },
              {
                title: 'Cost Analysis Calculator',
                type: 'Tool',
                description: 'Calculate your potential infrastructure savings',
              },
            ].map((resource, idx) => (
              <Link
                key={idx}
                href="#"
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition group"
              >
                <p className="text-xs font-semibold text-accent mb-3">{resource.type}</p>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
