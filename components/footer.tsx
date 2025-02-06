import Link from 'next/link';
import { Sofa } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Sofa className="h-6 w-6" style={{ color: '#CC5500' }} />
              <span className="font-bold">KHomes</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find and buy furniture and decor items featured in your favorite TV shows and movies.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link href="/shipping">Shipping Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://instagram.com">Instagram</Link></li>
              <li><Link href="https://pinterest.com">Pinterest</Link></li>
              <li><Link href="https://facebook.com">Facebook</Link></li>
              <li><Link href="https://twitter.com">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}