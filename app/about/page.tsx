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
      name: 'Mr. Rohit Thakur',
      role: 'Co-Founder',
      expertise: 'Rohit co-founded Krishna Nexus with a focus on driving business growth, building strategic partnerships, and delivering exceptional customer experiences. He is committed to helping organizations leverage modern cloud technologies to achieve their business objectives.',
    },
    {
      name: 'Krishna Chauhan',
      role: 'Co-Founder',
      expertise: 'Krishna co-founded Krishna Nexus with the vision of building a trusted cloud infrastructure and managed services company. With expertise in cloud technologies, automation, DevOps, and enterprise software quality engineering, Krishna leads the company technology strategy, innovation, and service delivery.',
    },
  ];
  <h1>
    <p title="Growing Our Leadership Team">
      As Krishna Nexus continues to expand, we are building a team of experienced cloud architects, DevOps engineers, infrastructure specialists, security professionals, and customer success experts who share our commitment to innovation, technical excellence, and customer satisfaction.
      We believe that great companies are built by great people, and we are always looking for passionate professionals who want to help shape the future of cloud infrastructure and managed services.
    </p>
    </h1>
    // {
    //   name: 'Amit Patel',
    //   role: 'VP Operations',
    //   expertise: 'Infrastructure Management',
    // },
    // {
    //   name: 'Sarah Johnson',
    //   role: 'VP Customer Success',
    //   expertise: 'Enterprise Solutions',
    // },
  // ]

  const milestones = [
  { year: '2025', event: 'Krishna Nexus Founded' },
  { year: '2025', event: 'Company Website & Cloud Services Launched' },
  { year: '2026', event: 'Onboarded Our First Enterprise Customers' },
  { year: '2026', event: 'Expanded Managed Cloud & DevOps Solutions' },
  { year: '2027', event: 'Strengthened Strategic Cloud Partnerships' },
  { year: 'Vision', event: 'Building a Trusted Global Cloud Infrastructure Company' },
];


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
            {/* We&apos;re on a mission to provide world-class cloud infrastructure solutions that empower enterprises to innovate fearlessly. */}
            Our mission is to deliver secure, scalable, and innovative cloud infrastructure solutions that enable organizations to accelerate digital transformation, optimize operations, and achieve sustainable business growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              {/* Founded in 2009, Krishna Nexus began with a simple vision: to revolutionize how enterprises manage their cloud infrastructure. What started as a small team of passionate engineers has grown into a global leader trusted by Fortune 500 companies. */}
            Founded in 2025, Krishna Nexus is a cloud infrastructure and managed services company dedicated to helping businesses build, manage, and optimize secure, scalable, and cost-effective cloud environments.
            </p>
            {/* <p>
              {/* Krishna Nexus is a cloud infrastructure and managed services company dedicated to helping businesses build, manage, and optimize secure, scalable, and cost-effective cloud environments. */}
            {/* </p> */}
            <p>
              We understand that modern businesses need more than cloud infrastructure—they need a technology partner who can simplify complex cloud operations, improve reliability, strengthen security, and support long-term growth. Our mission is to deliver practical, tailored cloud solutions that enable organizations to focus on their core business while we manage their infrastructure.
            {/* </p>
            <p> */}
              Our expertise includes cloud consulting, infrastructure deployment, managed cloud services, DevOps, automation, cloud migration, backup and disaster recovery, monitoring, and infrastructure optimization. We leverage industry-leading cloud platforms and modern automation practices to deliver solutions that are reliable, efficient, and scalable.
            {/* </p>
            <p> */}
              As a growing technology company, Krishna Nexus is committed to building long-term partnerships based on technical excellence, transparency, and customer success. We continuously invest in emerging cloud technologies and best practices to help our clients confidently navigate their digital transformation journey.
            {/* </p>
            <p> */}
              Whether you&apos;re a startup launching your first cloud environment or an established business looking to modernize your infrastructure, Krishna Nexus is committed to delivering dependable cloud solutions that grow with your business.
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
                title: 'Customer Success',
                description: 'We put our customers at the centre of everything we do. We strive to understand their business goals and deliver reliable, scalable, and cost-effective solutions that create lasting value.',
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering high-quality cloud infrastructure and managed services through technical expertise, industry best practices, and continuous improvement.',
              },
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of what&apos;s possible in cloud infrastructure.',
              },
               {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and accountability, building trusted relationships with our customers, partners, and employees.',
              },
              {
                title: 'Security & Reliability',
                description: 'We prioritise security, resilience, and operational excellence to ensure our customers'+' infrastructure remains protected, available, and performant.',
              },
              {
                title: 'Collaboration',
                description: 'We believe the best outcomes come from strong partnerships. By working closely with our customers and technology partners, we deliver solutions tailored to unique business needs.',
              },
              {
                title: 'Commitment',
                description: 'We take ownership of every engagement, delivering responsive support, dependable service, and long-term value that helps our customers achieve their business objectives.',
              },
              {
                title: 'Continuous Learning',
                description: 'Technology evolves rapidly, and so do we. We invest in ongoing learning, certifications, and innovation to provide modern, future-ready cloud solutions.',
              }
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
              { number: '2025', label: 'Founded' },
              { number: 'Cloud-First', label: 'Infrastructure & Managed Services' },
              { number: '24×7', label: 'Support & Monitoring' },
              { number: '100%', label: 'Customer-Focused Approach' },
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
            Be part of Krishna Nexus as we build the future of cloud infrastructure. Connect with technology experts, businesses, and innovators working together to create secure, scalable, and smarter digital solutions.
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Partner with us. Grow with us. Innovate with us.</h3>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition"
            style={{ backgroundColor: '#ff6b35', color: '#0f1419' }}
          >
            Get In Touch
          </Link>
          <label>
            <p className="text-sm text-muted-foreground mt-4">
              Have a cloud challenge, infrastructure requirement, or technology idea? Our team is ready to understand your needs and help you find the right solution.
              Whether you are looking to migrate to the cloud, optimize your existing infrastructure, implement DevOps automation, improve reliability, or explore managed cloud services, Krishna Nexus is here to support your journey.
              Let's discuss how we can help your business build a secure, scalable, and future-ready technology foundation.
            </p>
          </label>
        </div>
      </section>

      <Footer />
    </div>
  )
}
