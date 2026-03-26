'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const lastUpdated = 'February 27, 2026';
const email = 'kara@studio925.design';
const company = 'Studio 925';
const location = 'Grayson County, Kentucky';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-3 text-brand-primary">{title}</h3>
      <div className="text-brand-primary/70 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-brand-primary/40 mb-8">Last Updated: {lastUpdated}</p>

      <Section title="1. Introduction">
        <p>{company} ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit studio925.design or interact with our services.</p>
        <p>By using this website, you agree to the terms of this Privacy Policy.</p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We collect information you voluntarily provide, including:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Business type</li>
          <li>Project details</li>
          <li>Any information submitted through contact forms or scheduling tools</li>
        </ul>
        <p>We may also collect limited technical information automatically, such as:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Referral source</li>
        </ul>
        <p>We do not collect sensitive personal information such as payment card numbers, Social Security numbers, or government-issued IDs through this website.</p>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use collected information to:</p>
        <ul>
          <li>Respond to inquiries and project requests</li>
          <li>Communicate about proposals, timelines, and deliverables</li>
          <li>Improve website performance and user experience</li>
          <li>Analyze traffic and usage trends</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell, trade, or rent your personal information to third parties.</p>
      </Section>

      <Section title="4. Cookies and Analytics">
        <p>We may use cookies and similar technologies to:</p>
        <ul>
          <li>Understand website traffic</li>
          <li>Measure engagement</li>
          <li>Improve site performance</li>
        </ul>
        <p>Analytics data is anonymized and aggregated where possible. You may disable cookies in your browser settings.</p>
      </Section>

      <Section title="5. Third-Party Services">
        <p>We may use trusted third-party providers, including:</p>
        <ul>
          <li>Calendly (for scheduling calls)</li>
          <li>Email service providers (to receive and respond to inquiries)</li>
          <li>Analytics providers</li>
          <li>Hosting and infrastructure providers (such as GitHub Pages and Cloudflare)</li>
        </ul>
        <p>These providers may process limited data necessary to deliver their services and are governed by their own privacy policies.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain personal information only as long as necessary to:</p>
        <ul>
          <li>Respond to inquiries</li>
          <li>Fulfill project obligations</li>
          <li>Maintain business records</li>
          <li>Comply with legal requirements</li>
        </ul>
        <p>You may request deletion of your data at any time by contacting us.</p>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent to marketing communications</li>
        </ul>
        <p>To exercise any of these rights, contact: <strong>{email}</strong></p>
      </Section>

      <Section title="8. Data Security">
        <p>We implement reasonable administrative, technical, and organizational safeguards to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section title="9. Intended Audience">
        <p>This website is intended for business owners and individuals over the age of 18. We do not knowingly collect personal information from children.</p>
      </Section>

      <Section title="10. International Visitors">
        <p>If you access this website from outside the United States, you understand that your information may be transferred to and processed in the United States.</p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date.</p>
      </Section>

      <Section title="12. Contact">
        <p>For questions regarding this Privacy Policy:</p>
        <p><strong>{email}</strong></p>
        <p>{company}<br />Kentucky, United States</p>
      </Section>
    </>
  );
}

function TermsOfService() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-brand-primary/40 mb-8">Last Updated: {lastUpdated}</p>

      <Section title="1. Agreement to Terms">
        <p>By accessing this website or engaging {company} for web design and development services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
        <p>A separate written proposal or project agreement will govern the specific scope, timeline, and deliverables for each client project.</p>
      </Section>

      <Section title="2. Services">
        <p>{company} provides custom website design, development, and related digital services. The exact scope of services, deliverables, timelines, and pricing are defined in a separate written proposal or agreement signed by both parties.</p>
        <p>No services begin until a signed agreement and required deposit are received.</p>
      </Section>

      <Section title="3. Project Agreements and Payment">
        <ul>
          <li>A signed proposal or contract is required before work begins.</li>
          <li>A non-refundable deposit (typically 50%) is required to reserve a project start date.</li>
          <li>The remaining balance is due prior to final website launch or transfer of deliverables.</li>
          <li>Late payments may result in work being paused until outstanding balances are settled.</li>
          <li>{company} reserves the right to withhold final files, credentials, or launch access until payment is received in full.</li>
        </ul>
        <p>Failure to complete payment does not transfer ownership of deliverables.</p>
      </Section>

      <Section title="4. Client Responsibilities">
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate, complete, and timely project materials (content, logos, images, credentials).</li>
          <li>Ensure you have legal rights to all materials provided.</li>
          <li>Review and provide feedback within agreed timelines.</li>
        </ul>
        <p>Delays in providing content, approvals, or feedback may result in timeline adjustments.</p>
        <p>{company} is not responsible for project delays caused by client inaction.</p>
      </Section>

      <Section title="5. Revisions and Scope Changes">
        <p>Each package includes a defined number of revision rounds as outlined in your project agreement.</p>
        <p>Requests beyond the agreed scope may:</p>
        <ul>
          <li>Require a written change order</li>
          <li>Adjust the project timeline</li>
          <li>Be billed at our standard hourly rate</li>
        </ul>
        <p>Additional functionality not included in the original scope is not automatically included.</p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>Upon receipt of full payment:</p>
        <ul>
          <li>You own the final approved website design and custom code developed specifically for your project.</li>
        </ul>
        <p>{company} retains:</p>
        <ul>
          <li>The right to display completed work in our portfolio unless otherwise agreed in writing.</li>
          <li>Ownership of proprietary tools, frameworks, processes, and pre-existing materials used in development.</li>
        </ul>
        <p>Third-party assets (fonts, stock photos, plugins, integrations) remain subject to their respective licensing terms.</p>
      </Section>

      <Section title="7. Hosting, Maintenance, and Third-Party Platforms">
        <p>Unless explicitly stated in your project agreement:</p>
        <ul>
          <li>{company} does not provide ongoing hosting.</li>
          <li>We assist with setup and handoff to your selected hosting provider.</li>
          <li>Ongoing maintenance, support, or updates are not included unless contracted separately.</li>
        </ul>
        <p>{company} is not responsible for outages, performance issues, or security breaches caused by third-party hosting providers, plugins, or integrations.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the fullest extent permitted by law:</p>
        <p>{company} shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our services.</p>
        <p>Our total liability for any claim related to a project shall not exceed the total amount paid by you for that project.</p>
        <p>{company} does not guarantee specific business outcomes, search rankings, traffic levels, or revenue results.</p>
      </Section>

      <Section title="9. Indemnification">
        <p>You agree to indemnify and hold harmless {company} from any claims, damages, or liabilities arising from:</p>
        <ul>
          <li>Content you provide</li>
          <li>Unauthorized use of third-party materials</li>
          <li>Misrepresentation of business information</li>
        </ul>
      </Section>

      <Section title="10. Termination">
        <p>Either party may terminate a project agreement with written notice.</p>
        <ul>
          <li>Work completed up to the termination date will be billed accordingly.</li>
          <li>Deposits are non-refundable.</li>
          <li>Any unpaid balances remain due.</li>
        </ul>
      </Section>

      <Section title="11. Governing Law">
        <p>These Terms are governed by the laws of the Commonwealth of Kentucky.</p>
        <p>Any disputes shall be resolved in the courts located in {location}.</p>
      </Section>

      <Section title="12. Changes to These Terms">
        <p>We may update these Terms at any time. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.</p>
      </Section>

      <Section title="13. Contact">
        <p>Questions about these Terms?</p>
        <p><strong>{email}</strong></p>
        <p>{company}<br />Kentucky, United States</p>
      </Section>
    </>
  );
}

function CookiePolicy() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Cookie Policy</h1>
      <p className="text-sm text-brand-primary/40 mb-8">Last Updated: {lastUpdated}</p>

      <Section title="1. What Are Cookies?">
        <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience by remembering certain information about your visit.</p>
      </Section>

      <Section title="2. How We Use Cookies">
        <p>{company} may use cookies for the following purposes:</p>
        <p><strong>Essential Cookies</strong><br />These are necessary for the website to function correctly. Without them, certain features may not work.</p>
        <p><strong>Analytics Cookies</strong><br />We may use analytics tools to understand how visitors use our website, such as which pages are visited and how long users stay. This information is aggregated and does not personally identify you.</p>
        <p>We do not use cookies for behavioral advertising or cross-site tracking.</p>
      </Section>

      <Section title="3. Third-Party Services">
        <p>Our website may use third-party services that set their own cookies, including:</p>
        <ul>
          <li>Calendly (for scheduling calls)</li>
          <li>Analytics providers</li>
          <li>Hosting and infrastructure providers (such as GitHub Pages and Cloudflare)</li>
        </ul>
        <p>These services are governed by their own privacy and cookie policies. {company} does not control third-party cookies.</p>
      </Section>

      <Section title="4. Managing Cookies">
        <p>You can control or delete cookies through your browser settings. Most browsers allow you to:</p>
        <ul>
          <li>View stored cookies</li>
          <li>Block specific cookies</li>
          <li>Block all cookies</li>
          <li>Delete cookies</li>
        </ul>
        <p>Please note that disabling certain cookies may affect website functionality.</p>
      </Section>

      <Section title="5. Do Not Track">
        <p>Some browsers offer a "Do Not Track" (DNT) setting. Our website does not currently respond to DNT signals. However, we do not engage in cross-site tracking or advertising profiling.</p>
      </Section>

      <Section title="6. Updates to This Policy">
        <p>We may update this Cookie Policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top of this page.</p>
      </Section>

      <Section title="7. Contact">
        <p>For questions about this Cookie Policy:</p>
        <p><strong>{email}</strong></p>
        <p>{company}<br />Kentucky, United States</p>
      </Section>
    </>
  );
}

const pages = {
  'privacy-policy': { component: PrivacyPolicy, title: 'Privacy Policy' },
  'terms-of-service': { component: TermsOfService, title: 'Terms of Service' },
  'cookie-policy': { component: CookiePolicy, title: 'Cookie Policy' },
} as const;

export default function LegalContent({ type }: { type: keyof typeof pages }) {
  const { component: Content } = pages[type];

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-primary/50 hover:text-brand-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Content />
        </div>
      </main>
      <Footer />
    </div>
  );
}
