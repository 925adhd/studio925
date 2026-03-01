import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LegalModal, { LegalType } from './LegalModal';
import logo from '../../logo.png';

export default function Footer() {
  const [legal, setLegal] = useState<LegalType>(null);

  return (
    <footer className="py-20 px-6 bg-white border-t border-brand-primary/5">
      <LegalModal type={legal} onClose={() => setLegal(null)} />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="mb-6">
              <img src={logo} alt="Studio 925" className="h-10 w-auto" />
            </div>
            <p className="text-brand-primary/60 max-w-sm">
              Custom websites built right.<br />Solo developer based in Kentucky.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-primary/60">
              <li><a href="/#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="/#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="/#process" className="hover:text-brand-accent transition-colors">Process</a></li>
              <li><a href="/#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-6">Web Design Services</h4>
            <ul className="space-y-4 text-brand-primary/60">
              <li>
                <Link to="/web-design-grayson-county-ky" className="hover:text-brand-accent transition-colors">
                  Web Design in Grayson County
                </Link>
              </li>
              <li>
                <Link to="/small-business-website-design-kentucky" className="hover:text-brand-accent transition-colors">
                  Small Business Websites in Kentucky
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-brand-primary/60">
              <li><button onClick={() => setLegal('privacy')} className="hover:text-brand-accent transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setLegal('terms')} className="hover:text-brand-accent transition-colors">Terms of Service</button></li>
              <li><button onClick={() => setLegal('cookies')} className="hover:text-brand-accent transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-primary/40">
          <p>© {new Date().getFullYear()} Studio 925. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
