'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const lastUpdated = 'March 31, 2026';
const email = 'kara@studio925.design';
const company = 'Studio 925';
const llc = '925 ADHD LLC';
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
        <p>{company} is a service operated by {llc}. References to "we," "us," or "our" in this policy refer to {llc}, doing business as {company}.</p>
        <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit studio925.design or interact with our services.</p>
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
          <li>Request a copy of your data in a portable format</li>
          <li>Withdraw consent to marketing communications</li>
          <li>Opt out of the sale or sharing of your personal information (we do not sell your data, but you may still make this request)</li>
        </ul>
        <p>To exercise any of these rights, contact: <strong>{email}</strong>. We will respond to your request within 30 days.</p>
      </Section>

      <Section title="8. For Visitors in the European Economic Area (GDPR)">
        <p>If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the following applies:</p>
        <ul>
          <li>We process your personal data based on your consent (e.g., when you submit a contact form) or where necessary to fulfill a contract or legitimate business interest.</li>
          <li>You have the right to access, correct, delete, restrict processing, or port your personal data.</li>
          <li>You have the right to withdraw consent at any time without affecting the lawfulness of processing before withdrawal.</li>
          <li>You have the right to lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>We do not have a physical presence in the EEA. If you are located in the EEA and wish to exercise your rights, contact: <strong>{email}</strong></p>
      </Section>

      <Section title="9. For Visitors in California (CCPA)">
        <p>If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights:</p>
        <ul>
          <li><strong>Right to Know:</strong> You can request what personal information we collect, use, and disclose.</li>
          <li><strong>Right to Delete:</strong> You can request deletion of the personal information we hold about you.</li>
          <li><strong>Right to Opt Out:</strong> You can opt out of the sale of personal information. We do not sell your personal information.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
        </ul>
        <p>To submit a request, contact: <strong>{email}</strong>. We will verify your identity before processing your request and respond within 45 days.</p>
      </Section>

      <Section title="10. Data Security">
        <p>We implement reasonable administrative, technical, and organizational safeguards to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section title="11. Intended Audience">
        <p>This website is intended for business owners and individuals over the age of 18. We do not knowingly collect personal information from children under 16. If we become aware that we have collected information from a child under 16, we will take steps to delete it promptly.</p>
      </Section>

      <Section title="12. International Visitors">
        <p>If you access this website from outside the United States, you understand that your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using this website, you consent to this transfer.</p>
      </Section>

      <Section title="13. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date. If we make significant changes, we will make reasonable efforts to notify you.</p>
      </Section>

      <Section title="14. Contact">
        <p>For questions regarding this Privacy Policy:</p>
        <p><strong>{email}</strong></p>
        <p>{company} ({llc})<br />Kentucky, United States</p>
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
        <p>{company} is a service operated by {llc}. By accessing this website or engaging {company} for web design and development services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
        <p>By purchasing a package through our checkout process, you agree to these Terms of Service. The specific scope, timeline, and deliverables for each project are defined by the package selected at checkout.</p>
      </Section>

      <Section title="2. Services">
        <p>{company} provides custom website design, development, and related digital services. The exact scope of services, deliverables, timelines, and pricing are defined by the package selected at checkout.</p>
        <p>No services begin until the client has completed checkout and the required deposit or payment is received.</p>
      </Section>

      <Section title="3. Project Agreements and Payment">
        <ul>
          <li>Completing checkout and agreeing to these Terms is required before work begins.</li>
          <li>A non-refundable 50% deposit is required to reserve a project start date.</li>
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
        <p>Each package includes revisions before launch to make sure you are happy with your website. Revisions apply to the agreed scope of the selected package.</p>
        <p>Requests beyond the original package scope may:</p>
        <ul>
          <li>Require a separate agreement and additional cost</li>
          <li>Adjust the project timeline</li>
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
        <p>{company} offers optional monthly hosting and website care plans. Hosting and ongoing maintenance are not included in website build packages unless a separate hosting or care plan is purchased.</p>
        <ul>
          <li>Hosting and support plans are billed monthly and can be cancelled at any time.</li>
          <li>Details of each plan are listed on our <Link href="/hosting-support" className="text-brand-accent hover:underline">Hosting & Support</Link> page.</li>
        </ul>
        <p>{company} is not responsible for outages, performance issues, or security breaches caused by third-party hosting providers, plugins, or integrations.</p>
      </Section>

      <Section title="8. Hosting, Website Files, and Non-Payment">
        <p>{company} may host and maintain websites as part of a separate monthly hosting or website care plan. Hosting and maintenance services are provided only while the hosting or care plan subscription remains active and paid.</p>
        <p>Clients may request a copy of their website files at any time after full payment for the website build has been received. {company} will provide a reasonable export or copy of the website files upon request.</p>
        <p>If a hosting or website care subscription is cancelled, the website will be removed from {company} hosting at the end of the current billing period. A copy of the website files will be provided so the client may host the website elsewhere.</p>
        <p>If a hosting or website care subscription payment fails, {company} may attempt to retry payment automatically. If payment remains unpaid, the website may be temporarily suspended until payment is resolved.</p>
        <p>If payment remains unpaid for more than 7 days, the website may be suspended. If payment remains unpaid for more than 30 days, hosting services may be terminated and the website removed from {company} hosting. After termination, a copy of the website files will be provided upon request.</p>
        <p>{company} may retain backups of hosted websites for a limited period of time after hosting termination. {company} reserves the right to delete backups and hosted files after a reasonable period of time.</p>
        <p>{company} is not responsible for website downtime resulting from non-payment, cancelled hosting services, third-party hosting providers, or third-party software, plugins, or integrations.</p>
      </Section>

      <Section title="9. Refunds and Cancellations">
        <p>Project deposits are non-refundable. Deposits cover the time and resources reserved for your project start date.</p>
        <p>If you cancel a project after work has begun:</p>
        <ul>
          <li>You will be billed for all work completed up to the cancellation date.</li>
          <li>Any unused portion of payment beyond completed work may be refunded at {company}'s discretion.</li>
          <li>Completed deliverables will only be transferred after all outstanding balances are paid.</li>
        </ul>
        <p>If {company} cancels a project, any payments beyond the value of completed work will be refunded.</p>
        <p>Monthly care plan subscriptions can be cancelled at any time. Cancellation takes effect at the end of the current billing period. No partial-month refunds are provided.</p>
      </Section>

      <Section title="10. Use of AI Tools">
        <p>{company} may use artificial intelligence tools as part of the design and development process. These tools may assist with tasks such as code generation, content drafting, image optimization, or layout suggestions.</p>
        <p>All AI-assisted work is reviewed, refined, and approved by {company} before delivery. The final product is always shaped by human judgment and tailored to your specific project needs.</p>
        <p>If you have questions or preferences about the use of AI in your project, let us know and we will accommodate where possible.</p>
      </Section>

      <Section title="11. Content Accuracy and Client Approval">
        <p>The client is responsible for reviewing and approving all website content before launch, including text, images, pricing, service descriptions, business information, and contact information.</p>
        <p>{company} is not responsible for errors, omissions, or inaccurate information after the website has been approved or launched.</p>
        <p>Any content generated using AI tools, client-provided content, or third-party materials must be reviewed and approved by the client before publication.</p>
      </Section>

      <Section title="12. Accessibility">
        <p>{company} is committed to building websites that are accessible and usable for as many people as possible. We follow widely accepted web accessibility guidelines (WCAG) as a reference during development and aim to meet Level AA standards where practical.</p>
        <p>Accessibility considerations include:</p>
        <ul>
          <li>Readable text with sufficient color contrast</li>
          <li>Keyboard-navigable layouts</li>
          <li>Descriptive alt text for images</li>
          <li>Semantic HTML structure</li>
          <li>Mobile-responsive design</li>
        </ul>
        <p>While we strive to follow best practices, we cannot guarantee full compliance with all accessibility standards across every browser, device, or assistive technology. If you encounter an accessibility issue on our website, please contact us at <strong>{email}</strong> and we will work to address it.</p>
      </Section>

      <Section title="13. Disclaimer of Warranties">
        <p className="uppercase font-semibold text-brand-primary/80">OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. {company.toUpperCase()} MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.</p>
        <p>In plain terms: we stand behind the quality of our work and will always do our best to deliver a great website. But we cannot promise that every aspect of a website will work perfectly in every scenario, on every device, or with every third-party service at all times.</p>
      </Section>

      <Section title="14. Limitation of Liability">
        <p className="uppercase font-semibold text-brand-primary/80">TO THE FULLEST EXTENT PERMITTED BY LAW, {company.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM THE USE OF OUR SERVICES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR DAMAGES RESULTING FROM THIRD-PARTY SERVICES.</p>
        <p>Our total liability for any claim related to a project shall not exceed the total amount paid by you for that project.</p>
        <p>{company} does not guarantee specific business outcomes, search rankings, traffic levels, or revenue results.</p>
      </Section>

      <Section title="15. Indemnification">
        <p>You agree to indemnify and hold harmless {company} from any claims, damages, or liabilities arising from:</p>
        <ul>
          <li>Content you provide</li>
          <li>Unauthorized use of third-party materials</li>
          <li>Misrepresentation of business information</li>
          <li>Your use of the delivered website in ways not contemplated by the original project scope</li>
        </ul>
      </Section>

      <Section title="16. Termination">
        <p>Either party may terminate a project with written notice.</p>
        <ul>
          <li>Work completed up to the termination date will be billed accordingly.</li>
          <li>Deposits are non-refundable.</li>
          <li>Any unpaid balances remain due.</li>
        </ul>
      </Section>

      <Section title="17. Governing Law">
        <p>These Terms are governed by the laws of the Commonwealth of Kentucky.</p>
        <p>Any disputes shall be resolved in the courts located in {location}.</p>
      </Section>

      <Section title="18. Disclaimer">
        <p>{company} builds websites designed to improve online visibility and help businesses attract customers. However, search rankings, website traffic, leads, and sales depend on many factors outside our control, including market conditions, competition, and marketing efforts.</p>
        <p>{company} does not guarantee specific rankings, traffic, leads, customers, or revenue. Our services are designed to give your business the best possible foundation online, but results will vary based on your industry, location, audience, and ongoing efforts.</p>
        <p>Any examples, case studies, or testimonials shared on our website reflect individual results and should not be interpreted as a promise of similar outcomes.</p>
      </Section>

      <Section title="19. Waiver and Severability">
        <p>If {company} does not enforce any right or provision of these Terms at any time, that does not mean we are waiving that right or any other right. We can still enforce it later.</p>
        <p>If any part of these Terms is found to be invalid or unenforceable by a court, that part will be limited or removed to the minimum extent necessary, and the rest of these Terms will remain in full effect.</p>
      </Section>

      <Section title="20. Entire Agreement">
        <p>These Terms of Service, together with our <Link href="/privacy-policy" className="text-brand-accent hover:underline">Privacy Policy</Link>, <Link href="/cookie-policy" className="text-brand-accent hover:underline">Cookie Policy</Link>, and <Link href="/disclaimer" className="text-brand-accent hover:underline">Disclaimer</Link>, make up the full agreement between you and {company} regarding the use of this website.</p>
        <p>For client projects, the selected package and these Terms together govern the scope, deliverables, and payment terms. By completing checkout, the client agrees to these Terms in full.</p>
      </Section>

      <Section title="21. Changes to These Terms">
        <p>We may update these Terms at any time. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.</p>
      </Section>

      <Section title="22. Contact">
        <p>Questions about these Terms?</p>
        <p><strong>{email}</strong></p>
        <p>{company} ({llc})<br />Kentucky, United States</p>
      </Section>
    </>
  );
}

function Disclaimer() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Disclaimer</h1>
      <p className="text-sm text-brand-primary/40 mb-8">Last Updated: {lastUpdated}</p>

      <Section title="What We Do">
        <p>{company} is a service operated by {llc}. We build custom websites designed to improve your online visibility, present your business professionally, and help you attract customers. We take pride in creating fast, modern websites that give small businesses a strong foundation online.</p>
      </Section>

      <Section title="No Guaranteed Results">
        <p>While a well-built website is an important part of growing your business, we cannot guarantee specific outcomes. Search rankings, website traffic, leads, customers, and revenue depend on many factors outside our control, including:</p>
        <ul>
          <li>Market conditions and competition in your area</li>
          <li>Your industry and target audience</li>
          <li>Ongoing marketing and advertising efforts</li>
          <li>Content quality and frequency of updates</li>
          <li>Changes to search engine algorithms</li>
        </ul>
        <p>{company} does not guarantee specific rankings, traffic, leads, customers, or revenue.</p>
      </Section>

      <Section title="Third-Party Services">
        <p>Your website may rely on third-party platforms for hosting, analytics, scheduling, payment processing, or other functionality. {company} is not responsible for the performance, uptime, or policies of these third-party services.</p>
      </Section>

      <Section title="Examples and Testimonials">
        <p>Any examples, case studies, or testimonials shared on our website reflect individual results. Every business is different, and past results should not be interpreted as a promise of similar outcomes for your project.</p>
      </Section>

      <Section title="Contact">
        <p>If you have questions about this disclaimer, reach out at:</p>
        <p><strong>{email}</strong></p>
        <p>{company} ({llc})<br />Kentucky, United States</p>
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
        <p>{company} ({llc})<br />Kentucky, United States</p>
      </Section>
    </>
  );
}

const pages = {
  'privacy-policy': { component: PrivacyPolicy, title: 'Privacy Policy' },
  'terms-of-service': { component: TermsOfService, title: 'Terms of Service' },
  'cookie-policy': { component: CookiePolicy, title: 'Cookie Policy' },
  'disclaimer': { component: Disclaimer, title: 'Disclaimer' },
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
