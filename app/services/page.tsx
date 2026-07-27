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
                <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings over 10+ years of industry experience in cloud technologies, automation, DevOps, and enterprise software engineering, delivering practical and scalable solutions for modern businesses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Customer-Centric Approach</h3>
                <p className="text-muted-foreground">
                  We take the time to understand your business objectives and design cloud solutions tailored to your operational, security, and growth requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Secure by Design</h3>
                <p className="text-muted-foreground">
                  Security is built into every solution we deliver. We follow industry best practices to help protect your infrastructure, applications, and business-critical data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Scalable Cloud Solutions</h3>
                <p className="text-muted-foreground">
                  From startups to growing enterprises, our cloud infrastructure is designed to scale with your business, ensuring flexibility, performance, and long-term value.
                </p>
              </div>
               </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Cost Optimisation</h3>
                <p className="text-muted-foreground">
                  We help organisations optimise cloud resources, improve operational efficiency, and reduce unnecessary infrastructure costs through right-sized architectures and automation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Cloud & Modern Technologies</h3>
                <p className="text-muted-foreground">
                  We support solutions across leading cloud platforms, including AWS, Microsoft Azure, and Google Cloud, helping businesses choose the right platform for their needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Responsive Technical Support</h3>
                <p className="text-muted-foreground">
                  Our team is committed to providing timely technical assistance, proactive guidance, and dependable managed services to keep your cloud environment running smoothly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Long-Term Partnership</h3>
                <p className="text-muted-foreground">
                  At Krishna Nexus, we aim to build lasting relationships by delivering reliable technology solutions, transparent communication, and continuous support as your business grows.
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
            className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition"
            style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
