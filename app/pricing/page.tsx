import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing | Krishna Nexus',
  description: 'Transparent pricing for enterprise cloud infrastructure solutions.',
}

const plans = [
  {
    name: 'Starter',
    price: '$2,499',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 cloud resources',
      'Basic monitoring',
      'Email support',
      'Standard SLA (99.5%)',
      'Weekly reports',
      'Community access',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: '/month',
    description: 'For growing enterprises',
    features: [
      'Up to 50 cloud resources',
      'Advanced monitoring & analytics',
      'Priority phone support',
      'Enterprise SLA (99.99%)',
      'Daily reports',
      'Dedicated account manager',
      'Quarterly reviews',
      'DevOps automation included',
    ],
    cta: 'Start Now',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale deployments',
    features: [
      'Unlimited cloud resources',
      'Custom monitoring setup',
      '24/7 dedicated support',
      'Enterprise SLA (99.99%+)',
      'Real-time dashboards',
      'Dedicated infrastructure team',
      'Custom integrations',
      'Disaster recovery setup',
      'Kubernetes management',
    ],
    cta: 'Contact Sales',
  },
]

const addOns = [
  {
    name: 'Advanced Security',
    price: '$500',
    description: 'Enhanced security measures and compliance',
  },
  {
    name: 'GPU Hosting',
    price: '$1,000',
    description: 'High-performance GPU instances',
  },
  {
    name: 'Disaster Recovery',
    price: '$1,500',
    description: 'Multi-region failover setup',
  },
  {
    name: 'Premium Support',
    price: '$2,000',
    description: 'On-call engineers available 24/7',
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your cloud infrastructure needs. Scale up as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg overflow-hidden transition ${
                  plan.highlight
                    ? 'border-2 border-accent shadow-lg scale-105'
                    : 'border border-border'
                } bg-background`}
              >
                {/* Header */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded font-semibold text-center transition ${
                      plan.highlight
                        ? 'hover:opacity-90'
                        : 'border border-accent text-accent hover:bg-accent/10'
                    }`}
                    style={plan.highlight ? { backgroundColor: '#ff6b35', color: '#0f1419' } : {}}
                  >
                    {plan.cta}
                  </Link>
                </div>

                {/* Features */}
                <div className="px-8 pb-8 border-t border-border">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Add-ons & Extras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, idx) => (
              <div key={idx} className="p-6 bg-card rounded-lg border border-border hover:border-accent transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                  <p className="text-2xl font-bold text-accent whitespace-nowrap ml-4">{addon.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit cards, bank transfers, and offer custom payment arrangements for enterprise customers.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees. Professional and Enterprise plans include a complimentary onboarding session.',
              },
              {
                q: 'Do you offer discounts for long-term commitments?',
                a: 'Yes, we offer 10-20% discounts for annual commitments on our Professional and Enterprise plans.',
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Talk to our sales team to find the perfect plan for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition"
            style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}
          >
            Schedule a Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
