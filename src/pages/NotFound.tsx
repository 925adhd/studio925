import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page Not Found | Studio 925"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-md">
          <p className="text-7xl font-bold text-brand-accent/20 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Page not found</h1>
          <p className="text-brand-primary/60 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-7 py-3 rounded-2xl font-semibold hover:brightness-110 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
