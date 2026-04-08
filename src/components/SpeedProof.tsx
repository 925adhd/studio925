export default function SpeedProof() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-accent mb-3">
            Receipts
          </p>
          <h2 className="text-2xl md:text-4xl mb-3">
            Don&rsquo;t take my word for it. <span className="italic text-brand-accent block md:inline">Take Google&rsquo;s.</span>
          </h2>
          <p className="text-brand-primary/65 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Same test, same morning. Mine loads in 2 seconds. Theirs takes 12.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <figure className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-4 md:p-6 shadow-sm">
            <figcaption className="text-center mb-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Studio 925
              </span>
            </figcaption>
            <img
              src="/pagespeed-studio925.webp"
              alt="Google PageSpeed Insights mobile result for Studio 925: Performance 99, Accessibility 100, Best Practices 100, SEO 100. First Contentful Paint 1.0s, Largest Contentful Paint 2.2s, Total Blocking Time 10ms, Cumulative Layout Shift 0, Speed Index 1.0s."
              width={750}
              height={349}
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </figure>

          <figure className="rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02] p-4 md:p-6 shadow-sm">
            <figcaption className="text-center mb-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 bg-brand-primary/5 px-2.5 py-1 rounded-full">
                A Louisville Agency
              </span>
            </figcaption>
            <img
              src="/pagespeed-competitor.webp"
              alt="Google PageSpeed Insights mobile result for an unnamed Louisville web design agency: Performance 54, Accessibility 84, Best Practices 96, SEO 100. First Contentful Paint 7.4s, Largest Contentful Paint 12.1s, Total Blocking Time 240ms, Cumulative Layout Shift 0.001, Speed Index 7.4s."
              width={750}
              height={349}
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </figure>
        </div>

        <p className="text-center text-xs text-brand-primary/55 mt-8 max-w-2xl mx-auto leading-relaxed">
          Tested April 8, 2026 with <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-primary/80">Google PageSpeed Insights</a>{' '}on mobile. Google uses these scores as a real ranking signal (especially Largest Contentful Paint). A site that loads in 12 seconds doesn&rsquo;t just feel slow. It loses customers before they ever see it.
        </p>
      </div>
    </section>
  );
}
