import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Cloud, Zap, Shield, Cpu, BarChart3, Lock } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: Cloud,
      title: 'Managed Cloud Services',
      description: 'Comprehensive cloud management with enterprise-grade security and reliability.',
    },
    {
      icon: Zap,
      title: 'DevOps Automation',
      description: 'Streamline your deployment pipeline with advanced automation tools.',
    },
    {
      icon: Cpu,
      title: 'Kubernetes',
      description: 'Container orchestration at scale with expert management support.',
    },
    {
      icon: Shield,
      title: 'Disaster Recovery',
      description: 'Multi-region backup and recovery systems for business continuity.',
    },
    {
      icon: BarChart3,
      title: 'Infrastructure Monitoring',
      description: '24/7 monitoring with real-time alerts and analytics dashboards.',
    },
    {
      icon: Lock,
      title: '24x7 Support',
      description: 'Round-the-clock expert support for all your infrastructure needs.',
    },
  ]

  const testimonials = [
    {
      quote: 'Krishna Nexus transformed our infrastructure. We reduced costs by 40% while improving performance.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp',
    },
    {
      quote: 'The DevOps automation saved us countless hours. Their team is incredibly responsive.',
      author: 'Michael Chen',
      role: 'Engineering Lead, DataFlow',
    },
    {
      quote: 'Best infrastructure investment we&apos;ve made. Highly reliable and professional.',
      author: 'Emma Rodriguez',
      role: 'VP Operations, CloudFirst',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Enterprise Cloud <span className="text-accent">Infrastructure</span> Simplified
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Krishna Nexus provides cutting-edge cloud infrastructure and data center solutions designed for enterprises that demand reliability, scalability, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-96 bg-gradient-to-br from-accent/20 to-secondary rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Cloud size={80} className="text-accent mb-4 mx-auto" />
                  <p className="text-muted-foreground">Powerful Cloud Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your infrastructure needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent hover:bg-background/50 transition group"
                >
                  <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading enterprises worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-card rounded-lg border border-border">
                <p className="text-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What cloud platforms do you support?',
                a: 'We support AWS, Azure, Google Cloud Platform, and private cloud deployments tailored to your needs.',
              },
              {
                q: 'How does your disaster recovery work?',
                a: 'We provide multi-region redundancy with automated failover, RTO under 1 hour and RPO under 15 minutes.',
              },
              {
                q: 'What kind of support do you provide?',
                a: 'We offer 24x7 dedicated support with SLA guarantees, on-call engineers, and proactive monitoring.',
              },
              {
                q: 'Can you migrate existing infrastructure?',
                a: 'Yes, we provide zero-downtime migration services with comprehensive planning and validation.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6 hover:border-accent transition">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-12 border border-accent/30">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of enterprises that trust Krishna Nexus for their cloud infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
