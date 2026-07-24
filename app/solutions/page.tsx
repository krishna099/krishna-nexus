import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, TrendingUp, Users, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Solutions | Krishna Nexus',
  description: 'Industry-specific cloud infrastructure solutions tailored to your business needs.',
}

const solutions = [
  {
    title: 'Hybrid Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to a hybrid cloud environment',
    icon: TrendingUp,
    benefits: [
      'Zero-downtime migration',
      'Cost optimization',
      'Reduced complexity',
      'Improved scalability',
    ],
  },
  {
    title: 'Cloud-Native Development',
    description: 'Build and deploy cloud-native applications with confidence',
    icon: Zap,
    benefits: [
      'Containerized deployments',
      'Microservices architecture',
      'Auto-scaling capabilities',
      'DevOps integration',
    ],
  },
  {
    title: 'Enterprise Data Centers',
    description: 'Secure, reliable data center solutions for enterprise needs',
    icon: Lock,
    benefits: [
      'Multi-region redundancy',
      'Compliance certifications',
      ' Premium support',
      'Customizable infrastructure',
    ],
  },
  {
    title: 'Team Collaboration',
    description: 'Infrastructure that enables your teams to collaborate effectively',
    icon: Users,
    benefits: [
      'Unified management dashboards',
      'Real-time collaboration',
      'Advanced analytics',
      'Integrated tools',
    ],
  },
]

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Industry <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored cloud infrastructure solutions designed specifically for your industry challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent transition group"
                >
                  <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent/80 transition font-semibold"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Real-time Analytics',
                description: 'Process massive datasets in real-time with our high-performance infrastructure.',
              },
              {
                title: 'AI & Machine Learning',
                description: 'GPU-accelerated computing for training and deploying AI models at scale.',
              },
              {
                title: 'High-Traffic Applications',
                description: 'Handle millions of requests with auto-scaling and load balancing.',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Meet HIPAA, SOC 2, ISO 27001, and other compliance requirements.',
              },
              {
                title: 'Disaster Recovery',
                description: 'Multi-region failover with guaranteed RTO and RPO.',
              },
              {
                title: 'Legacy System Migration',
                description: 'Modernize your infrastructure without disrupting operations.',
              },
            ].map((useCase, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Success Stories</h2>
          <div className="space-y-8">
            {[
              {
                company: 'TechCorp Inc.',
                challenge: 'Legacy infrastructure unable to handle growing demand',
                solution: 'Migrated to cloud-native architecture with Kubernetes',
                result: '60% cost reduction, 10x performance improvement',
              },
              {
                company: 'DataFlow Analytics',
                challenge: 'Complex multi-cloud management across three providers',
                solution: 'Unified infrastructure platform with single pane of glass',
                result: '40% faster deployments, improved team productivity',
              },
            ].map((story, idx) => (
              <div key={idx} className="p-8 bg-background rounded-lg border border-border hover:border-accent transition">
                <h3 className="text-lg font-bold text-foreground mb-4">{story.company}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Challenge</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Solution</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Result</p>
                    <p className="text-foreground font-semibold">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Find Your Perfect Solution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts will help you design an infrastructure that drives your business forward.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition"
            style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
