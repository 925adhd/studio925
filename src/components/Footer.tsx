import Link from 'next/link';
const logo = '/logo.webp';

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
          <div>
            <div className="mb-4 md:mb-6">
              <img src={logo} alt="Studio 925 — custom websites for small businesses in Kentucky" width={162} height={56} loading="lazy" className="h-10 w-auto" />
            </div>
            <p className="font-serif text-base md:text-lg text-brand-primary mb-2 max-w-sm">
              Your website should work <span className="italic text-brand-accent">as hard as you&nbsp;do.</span>
            </p>
            <p className="text-sm text-brand-primary/60 max-w-sm mb-4">
              Custom websites built right.<br />Web designer in Leitchfield, KY.
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

            {/* Trust badges */}
            <div className="mt-5 md:mt-7 flex flex-wrap items-start gap-5 max-w-sm">
              <a
                href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fstudio925.design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Studio 925's Google PageSpeed score yourself in a new tab"
                className="group flex flex-col items-center hover:opacity-80 transition-opacity"
              >
                <img src="/badge-pagespeed-99.svg" alt="90+ Google PageSpeed Performance Score. Click to verify." width={120} height={140} loading="lazy" className="h-20 w-auto" />
                <span className="text-[10px] font-medium text-emerald-800 group-hover:text-emerald-900 underline underline-offset-2 -mt-1">
                  Test it yourself →
                </span>
              </a>
              <img src="/badge-stripe.svg" alt="Powered by Stripe" width={150} height={34} loading="lazy" className="h-7 w-auto mt-0 md:mt-6" />
            </div>
          </div>
          
          <div>
            <h3 className="font-sans font-bold mb-3 md:mb-4 text-base">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1 md:gap-y-2.5 text-brand-primary/60">
              <li><a href="/#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><Link href="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><a href="/#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><Link href="/website-cost" className="hover:text-brand-accent transition-colors">Website Cost Guide</Link></li>
              <li><Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link></li>
              <li><a href="/#process" className="hover:text-brand-accent transition-colors">Process</a></li>
              <li><a href="/#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold mb-3 md:mb-4 text-base">Web Design Services</h3>
            <ul className="space-y-2 md:space-y-2.5 text-brand-primary/60">
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
          
        </div>
        
        {/* Final CTA strip */}
        <div className="pb-6 text-center md:text-left">
          <a
            href="/#contact"
            className="inline-flex flex-wrap items-center gap-2 text-base md:text-lg font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
          >
            Ready to start?
            <span className="text-emerald-800 group-hover:translate-x-1 transition-transform">Get my free quote →</span>
          </a>
        </div>

        <div className="pt-6 border-t border-brand-primary/5 text-sm text-brand-primary/65">
          <p className="hidden md:block mb-4 max-w-3xl text-xs leading-relaxed">
            Studio 925 builds websites designed to improve online visibility and help businesses attract customers. Results such as search rankings, traffic, leads, and revenue are not guaranteed.{' '}
            <Link href="/disclaimer" className="underline hover:text-brand-accent transition-colors">Read our full disclaimer</Link>.
          </p>
          <p className="md:hidden mb-4 text-xs leading-relaxed">
            Results aren&rsquo;t guaranteed.{' '}
            <Link href="/disclaimer" className="underline hover:text-brand-accent transition-colors">Read our full disclaimer →</Link>
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 mb-4 text-xs">
            <li><Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-brand-accent transition-colors">Disclaimer</Link></li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Studio 925 Web Design. A service operated by 925 ADHD LLC. All rights reserved.</p>
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
