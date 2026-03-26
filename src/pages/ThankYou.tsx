import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Thank You | Studio 925"
        description="Thanks for reaching out to Studio 925. We'll be in touch soon."
        path="/thank-you"
        noindex
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="bg-white border border-brand-primary/5 rounded-[2rem] shadow-xl p-10 md:p-14 max-w-md w-full text-center">
          <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={26} className="text-brand-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">You're all set!</h1>
          <p className="text-brand-primary/60 text-lg leading-relaxed mb-8">
            I'll review your details and be in touch shortly.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-7 py-3 rounded-2xl font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
