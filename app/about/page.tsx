import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'About | Krishna Nexus',
  description: 'Learn about Krishna Nexus and our mission to provide enterprise cloud infrastructure solutions.',
}

export default function About() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      expertise: 'Cloud Infrastructure',
    },
    {
      name: 'Priya Sharma',
      role: 'VP Engineering',
      expertise: 'Platform Architecture',
    },
    {
      name: 'Amit Patel',
      role: 'VP Operations',
      expertise: 'Infrastructure Management',
    },
    {
      name: 'Sarah Johnson',
      role: 'VP Customer Success',
      expertise: 'Enterprise Solutions',
    },
  ]

  const milestones = [
    { year: '2009', event: 'Krishna Nexus Founded' },
    { year: '2012', event: 'Multi-region expansion' },
    { year: '2015', event: 'Kubernetes adoption' },
    { year: '2018', event: '500+ enterprise clients' },
    { year: '2020', event: 'AI Infrastructure launch' },
    { year: '2023', event: 'Global leader in cloud infrastructure' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-accent">Krishna Nexus</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re on a mission to provide world-class cloud infrastructure solutions that empower enterprises to innovate fearlessly.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Founded in 2009, Krishna Nexus began with a simple vision: to revolutionize how enterprises manage their cloud infrastructure. What started as a small team of passionate engineers has grown into a global leader trusted by Fortune 500 companies.
            </p>
            <p>
              Over the years, we&apos;ve witnessed the explosion of cloud adoption and the growing complexity of infrastructure management. We realized that enterprises needed more than just cloud providers—they needed true partners who understood their challenges and could provide customized solutions.
            </p>
            <p>
              Today, Krishna Nexus stands as a beacon of innovation in the cloud infrastructure space, helping thousands of organizations navigate their digital transformation journey with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of what&apos;s possible in cloud infrastructure.',
              },
              {
                title: 'Reliability',
                description: 'Our systems are built to be dependable, secure, and always available.',
              },
              {
                title: 'Partnership',
                description: 'We work closely with our clients as true partners in their success.',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do.',
              },
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-card rounded-lg border border-border text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-8 pb-6 border-b border-border last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-24 font-bold text-accent text-lg">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <p className="text-foreground font-semibold">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-8 bg-card rounded-lg border border-border text-center hover:border-accent transition">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '99.99%', label: 'Uptime SLA' },
              { number: '15+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the difference that true cloud infrastructure expertise can make.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
