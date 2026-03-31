import Link from 'next/link';
const logo = '/logo.webp';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="mb-6">
              <img src={logo} alt="Studio 925 — custom websites for small businesses in Kentucky" width={162} height={56} loading="lazy" className="h-10 w-auto" />
            </div>
            <p className="text-brand-primary/60 max-w-sm mb-4">
              Custom websites built right.<br />Solo developer based in Kentucky.
            </p>
            <a
              href="https://www.facebook.com/studio925design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary/65 hover:text-brand-accent transition-colors text-sm"
              aria-label="Studio 925 on Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
          
          <div>
            <h3 className="font-sans font-bold mb-6 text-base">Quick Links</h3>
            <ul className="space-y-4 text-brand-primary/60">
              <li><a href="/#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="/#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><Link href="/website-cost" className="hover:text-brand-accent transition-colors">Website Cost Guide</Link></li>
              <li><a href="/#process" className="hover:text-brand-accent transition-colors">Process</a></li>
              <li><a href="/#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold mb-6 text-base">Web Design Services</h3>
            <ul className="space-y-4 text-brand-primary/60">
              <li>
                <Link href="/web-design-grayson-county-ky" className="hover:text-brand-accent transition-colors">
                  Web Design in Grayson County
                </Link>
              </li>
              <li>
                <Link href="/website-design-leitchfield-ky" className="hover:text-brand-accent transition-colors">
                  Website Design in Leitchfield, KY
                </Link>
              </li>
              <li>
                <Link href="/small-business-website-design-kentucky" className="hover:text-brand-accent transition-colors">
                  Small Business Websites in Kentucky
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-sans font-bold mb-6 text-base">Legal</h3>
            <ul className="space-y-4 text-brand-primary/60">
              <li><Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-brand-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-primary/5 text-sm text-brand-primary/65">
          <p className="mb-4 max-w-3xl text-xs leading-relaxed">
            Studio 925 builds websites designed to improve online visibility and help businesses attract customers. Results such as search rankings, traffic, leads, and revenue are not guaranteed.{' '}
            <Link href="/disclaimer" className="underline hover:text-brand-accent transition-colors">Read our full disclaimer</Link>.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Studio 925. A service operated by 925 ADHD LLC. All rights reserved.</p>
          <a
            href="https://billing.stripe.com/p/login/14A5kFeEHgCceEQcOIcIE00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            Manage My Subscription
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
