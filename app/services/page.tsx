import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Cloud, Zap, Cpu, Shield, BarChart3, Lock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Services | Krishna Nexus',
  description: 'Explore our comprehensive cloud infrastructure and managed services solutions.',
}

const services = [
  {
    icon: Cloud,
    title: 'Managed Cloud Services',
    description: 'Full-stack cloud infrastructure management and optimization',
    features: [
      'Multi-cloud deployment and management',
      'Auto-scaling and load balancing',
      'Cost optimization and rightsizing',
      'Enterprise SLA guarantees',
    ],
  },
  {
    icon: Zap,
    title: 'DevOps Automation',
    description: 'Streamline your deployment pipeline and infrastructure automation',
    features: [
      'CI/CD pipeline setup and management',
      'Infrastructure as Code implementation',
      'Automated testing and deployment',
      'Performance optimization',
    ],
  },
  {
    icon: Cpu,
    title: 'Kubernetes Services',
    description: 'Enterprise-grade container orchestration',
    features: [
      'Kubernetes cluster management',
      'Container registry and management',
      'Helm chart deployment',
      'Service mesh implementation',
    ],
  },
  {
    icon: Shield,
    title: 'Disaster Recovery',
    description: 'Business continuity and disaster recovery solutions',
    features: [
      'Multi-region failover',
      'Automated backup systems',
      'RTO < 1 hour',
      'RPO < 15 minutes',
    ],
  },
  {
    icon: BarChart3,
    title: 'Infrastructure Monitoring',
    description: 'Real-time monitoring and analytics',
    features: [
      '24/7 system monitoring',
      'Real-time alerting',
      'Performance analytics',
      'Custom dashboards',
    ],
  },
  {
    icon: Lock,
    title: '24x7 Premium Support',
    description: 'Expert support whenever you need it',
    features: [
      'Dedicated support team',
      'On-call engineers',
      'SLA guarantees',
      'Proactive monitoring',
    ],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud infrastructure solutions designed for enterprises that demand reliability and scalability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition"
                >
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Krishna Nexus?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise Expertise</h3>
                <p className="text-muted-foreground">
                  15+ years of experience managing infrastructure for Fortune 500 companies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">99.99% Uptime SLA</h3>
                <p className="text-muted-foreground">
                  Industry-leading reliability backed by our commitment to excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Save up to 40% on infrastructure costs with our optimization strategies.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  24/7 expert engineers available for immediate support and issue resolution.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Security First</h3>
                <p className="text-muted-foreground">
                  SOC 2, ISO 27001, and HIPAA compliant infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Cloud Expertise</h3>
                <p className="text-muted-foreground">
                  Seamless integration across AWS, Azure, GCP, and private clouds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our expert team help you find the perfect solution for your infrastructure needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
