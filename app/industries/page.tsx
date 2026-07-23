import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Building2, Stethoscope, Landmark, TrendingUp, ShoppingCart, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Industries | Krishna Nexus',
  description: 'Industry-specific cloud infrastructure solutions for enterprises.',
}

const industries = [
  {
    icon: Building2,
    name: 'Enterprise',
    description: 'Scalable solutions for large-scale operations',
    challenges: [
      'Managing complex multi-cloud environments',
      'Ensuring security and compliance',
      'Optimizing infrastructure costs',
    ],
    solution: 'Our enterprise solutions provide unified management, advanced security, and cost optimization.',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'HIPAA-compliant cloud infrastructure',
    challenges: [
      'Maintaining strict compliance requirements',
      'Protecting sensitive patient data',
      'Ensuring 24/7 availability',
    ],
    solution: 'HIPAA-compliant infrastructure with encryption, audit trails, and redundancy.',
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    description: 'Secure and compliant infrastructure for fintech',
    challenges: [
      'Meeting regulatory requirements',
      'Ensuring transaction security',
      'Preventing data breaches',
    ],
    solution: 'SOC 2 certified infrastructure with advanced encryption and security controls.',
  },
  {
    icon: TrendingUp,
    name: 'E-Commerce',
    description: 'High-performance infrastructure for online retail',
    challenges: [
      'Handling peak traffic spikes',
      'Ensuring fast loading times',
      'Maintaining uptime during sales',
    ],
    solution: 'Auto-scaling infrastructure with global CDN and predictive analytics.',
  },
  {
    icon: ShoppingCart,
    name: 'Retail',
    description: 'Omnichannel retail infrastructure',
    challenges: [
      'Integrating online and offline operations',
      'Managing inventory in real-time',
      'Personalizing customer experiences',
    ],
    solution: 'Unified platform connecting all retail channels with real-time data.',
  },
  {
    icon: Zap,
    name: 'Technology',
    description: 'Cutting-edge infrastructure for tech companies',
    challenges: [
      'Rapid scaling requirements',
      'Complex deployments',
      'Innovation at scale',
    ],
    solution: 'DevOps-ready infrastructure with Kubernetes and advanced automation.',
  },
]

export default function Industries() {
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
            Tailored cloud infrastructure for every industry. We understand your unique challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent transition group"
                >
                  <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>

                  <div className="mb-6 pt-6 border-t border-border">
                    <p className="text-xs font-semibold text-accent mb-3">KEY CHALLENGES</p>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, cidx) => (
                        <li key={cidx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 rounded">
                    <p className="text-sm text-muted-foreground">{industry.solution}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Compliance & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'HIPAA',
              'SOC 2',
              'ISO 27001',
              'PCI-DSS',
              'GDPR',
              'CCPA',
            ].map((cert, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border text-center hover:border-accent transition">
                <p className="font-semibold text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Success By Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                industry: 'Healthcare Provider',
                result: 'Reduced infrastructure costs by 45% while improving patient data security',
              },
              {
                industry: 'FinTech Startup',
                result: 'Scaled from 1M to 100M transactions/month without downtime',
              },
              {
                industry: 'E-Commerce Platform',
                result: 'Achieved 99.99% uptime during peak shopping seasons',
              },
              {
                industry: 'Enterprise SaaS',
                result: 'Cut deployment time from weeks to hours with DevOps automation',
              },
            ].map((study, idx) => (
              <div key={idx} className="p-8 bg-background rounded-lg border border-border hover:border-accent transition">
                <p className="font-semibold text-accent mb-3">{study.industry}</p>
                <p className="text-foreground font-bold">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Find Your Industry Solution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our industry experts design a solution tailored to your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition"
          >
            Schedule Industry Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
