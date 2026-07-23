import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-primary font-bold text-lg">
                KN
              </div>
              <span className="font-bold text-foreground">Krishna Nexus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading cloud infrastructure provider for enterprise solutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Cloud Services</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">DevOps</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Kubernetes</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">GPU Hosting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition">About</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-accent transition">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@krishnanexus.com" className="hover:text-accent transition">
                  info@krishnanexus.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-accent" />
                <a href="tel:+1-800-123-4567" className="hover:text-accent transition">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-accent" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Krishna Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="mailto:info@krishnanexus.com" className="text-muted-foreground hover:text-accent transition" aria-label="Email">
              <Mail size={20} />
            </Link>
            <Link href="tel:+1-800-123-4567" className="text-muted-foreground hover:text-accent transition" aria-label="Phone">
              <Phone size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
