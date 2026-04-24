'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { trackEvent } from '../../src/lib/gtag';
import './audit.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function MapMockup() {
  return (
    <figure className="fl-mockup" aria-label="Sample local rank heatmap report for a Grayson County, Kentucky car dealership">
      <div className="fl-mockup-tag">SAMPLE REPORT · GRAYSON COUNTY</div>
      <img
        src="/audit-sample-heatmap.png"
        alt="Sample local rank heatmap showing a Leitchfield car dealership ranking #2 at its own location with surrounding points ranging from top 3 to not found, plus a top competitors breakdown"
        width={810}
        height={970}
        loading="lazy"
        className="fl-mockup-image"
      />
      <figcaption className="fl-mockup-caption">
        Sample from a real report. Your map will use your business and the keyword you choose.
      </figcaption>
    </figure>
  );
}

export default function AuditContent() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [keyword, setKeyword] = useState('');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // Dev-only preview: visit /audit?preview=success to see the thank-you state
  // without submitting. Only active in development; stripped from prod builds.
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'success') {
      setBusinessName(params.get('name') || 'Sample Auto Repair');
      setEmail(params.get('email') || 'owner@samplebusiness.com');
      setStatus('success');
    }
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    if (honeypot) {
      setStatus('success');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus('error');
      setError('Form is not configured yet. Email kara@studio925.design directly.');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New audit request | ${businessName}`,
          from_name: 'Local Geomap',
          replyto: email,
          business_name: businessName,
          email,
          phone: phone || '(not provided)',
          keyword: keyword || '(not specified)',
          notes: notes || '(none)',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      trackEvent('submit_audit_form', 'geomap_local');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  }

  return (
    <>
      <Navbar />
      <main className="fl">
        <article className="fl-doc">
          {status !== 'success' && (
            <>
              <section className="fl-hero">
                <div className="fl-hero-tag">LOCAL GEOMAP · FREE FOR GRAYSON COUNTY</div>
                <h1 className="fl-hero-title">
                  Find out <em>exactly</em> where you rank on Google.
                </h1>
                <p className="fl-hero-sub">
                  A free block-by-block map of how your business shows up when
                  nearby customers search. No subscription, no catch.
                </p>
              </section>

              <section className="fl-problem">
                <div className="fl-problem-ink">THE PROBLEM</div>
                <p>
                  When a customer Googles &ldquo;plumber near me,&rdquo; the top
                  results change based on where they&rsquo;re standing. Someone
                  three miles north of you sees a different list than someone
                  three miles south. You&rsquo;re losing calls in parts of town
                  you didn&rsquo;t even know you were losing.
                </p>
              </section>

              <section className="fl-what">
                <h2>
                  What you&rsquo;ll <em>get</em>
                </h2>
                <div className="fl-bullets">
                  <div className="fl-bullet">
                    <div className="fl-bullet-num">01</div>
                    <h3>A real map</h3>
                    <p>
                      49 scan points across a 15-mile radius around your
                      business, each showing your exact rank for the keyword
                      customers are typing.
                    </p>
                  </div>
                  <div className="fl-bullet">
                    <div className="fl-bullet-num">02</div>
                    <h3>A real number</h3>
                    <p>
                      Visibility score from 0 to 100, average rank, top-3
                      percentage. The same metrics paid rank trackers charge
                      $25/month for.
                    </p>
                  </div>
                  <div className="fl-bullet">
                    <div className="fl-bullet-num">03</div>
                    <h3>Real rivals</h3>
                    <p>
                      Names of the businesses taking the calls you should be
                      getting, neighborhood by neighborhood.
                    </p>
                  </div>
                </div>

                <MapMockup />
              </section>

              <section className="fl-why-free">
                <div className="fl-why-free-tag">WHY IT&rsquo;S FREE</div>
                <p>
                  The map shows you where you&rsquo;re losing calls. Studio 925
                  builds or rebuilds your site fast, mobile-first, and{' '}
                  <em>built to rank</em>. Flat $900 starting price, live in
                  about a week.
                </p>
                <p>
                  Stay on{' '}
                  <Link href="/hosting-support" className="fl-upsell">
                    Full Support hosting
                  </Link>{' '}
                  and you have me on your team as an ongoing SEO partner. New
                  service pages, blog posts, meta tags, and Google indexing
                  handled every month. Plus denser 63-point rescans with a
                  detailed competitor breakdown at every single point of your
                  map.
                </p>
                <p className="fl-why-free-cta">
                  Get the audit first. Decide after.
                </p>
              </section>

              <form className="au-form-inline" onSubmit={submit} noValidate>
                <div className="au-form-label">GET YOUR FREE AUDIT</div>
                <p className="au-form-sub">
                  Fill this out. I&rsquo;ll run the scan and email your map
                  within one business day.
                </p>

                <label>
                  Business name
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your business name"
                    autoComplete="organization"
                  />
                </label>

                <label>
                  Your email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    autoComplete="email"
                  />
                </label>

                <div className="au-row">
                  <label>
                    Phone <span className="au-opt">(optional)</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(270) 555-0000"
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    Keyword to track <span className="au-opt">(optional)</span>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="e.g., hvac near me"
                    />
                  </label>
                </div>

                <label>
                  Anything else? <span className="au-opt">(optional)</span>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Service area, specific competitors, goals…"
                  />
                </label>

                <label className="au-honey" aria-hidden>
                  Leave blank
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  className="au-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting'
                    ? 'Sending…'
                    : 'Send my free audit →'}
                </button>

                {error && <div className="au-error">{error}</div>}

                <p className="au-fine">
                  No credit card. No subscription. Emailed personally within one
                  business day.
                  <br />
                  <strong>
                    Your business must have a Google Business Profile
                  </strong>
                  , ideally with a handful of reviews. Brand-new or unlisted
                  businesses won&rsquo;t produce useful data yet.{' '}
                  <a
                    href="https://business.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Create one here
                  </a>
                  .
                </p>
              </form>
            </>
          )}

          {status === 'success' && (
            <section className="au-thanks">
              <div className="au-thanks-mark">
                <CheckCircle2 size={36} strokeWidth={2.25} />
              </div>
              <h1>Thanks. I got it.</h1>
              <p>
                I&rsquo;ll run the scan for{' '}
                <strong>{businessName || 'your business'}</strong> and email the
                map to <strong>{email}</strong> within one business day.
              </p>

              <div className="au-next">
                <div className="au-next-tag">WHAT TO EXPECT NEXT</div>
                <ol>
                  <li>
                    <strong>Today or tomorrow:</strong> you get the map plus one
                    concrete recommendation you can act on.
                  </li>
                  <li>
                    <strong>If you want the full fix:</strong> Studio 925 builds
                    custom websites from <strong>$900</strong>. Mobile-first,
                    Google-ready, live in about a week.
                  </li>
                  <li>
                    <strong>Decide after you see the map.</strong> No pressure,
                    no pitch call unless you want one.
                  </li>
                </ol>
                <Link className="au-next-cta" href="/#pricing">
                  See website packages →
                </Link>
              </div>

              <div className="au-upsell-blurb">
                <div className="au-upsell-badge">WANT ONGOING TRACKING?</div>
                <p>
                  Pair your website with{' '}
                  <Link href="/hosting-support" className="fl-upsell">
                    Full Support hosting
                  </Link>{' '}
                  and get a denser <strong>63-point rescan every month</strong>,
                  plus me on your team as an ongoing SEO partner handling new
                  pages, posts, and indexing.
                </p>
              </div>

              <p className="au-thanks-sub">
                Didn&rsquo;t hear back in 24 hours? Check spam, or text{' '}
                <span style={{ whiteSpace: 'nowrap' }}>(270) 551-2210</span>.
              </p>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
