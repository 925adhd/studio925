import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const logo = '/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-primary/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Studio 925" className="h-8 md:h-[50px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-accent transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium hover:text-brand-accent transition-colors">Process</a>
          <a href="#pricing" className="text-sm font-medium hover:text-brand-accent transition-colors">Pricing</a>
          <button className="bg-brand-primary text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-brand-primary/90 transition-all">
            Book a Call <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-warm border-b border-brand-primary/5 shadow-lg p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium">Process</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
            <button className="bg-brand-primary text-white w-full py-4 rounded-xl font-medium">
              Book a Call
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
