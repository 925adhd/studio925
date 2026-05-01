'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Check, ArrowRight, Mic, Lock, Phone, Monitor, Tablet, Smartphone as PhoneIcon } from 'lucide-react';

/* ─── Typewriter effect — types out text when in view, calls onDone when finished ─── */
function TypeWriter({
  text,
  speed = 65,
  className = '',
  onDone,
}: {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayed, setDisplayed] = useState('');
  const doneRef = useRef(false);

  useEffect(() => {
    if (!inView) return;
    setDisplayed('');
    doneRef.current = false;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      }
    }, speed);
    return () => clearInterval(timer);
  }, [inView, text, speed, onDone]);

  // Apply bold to "repair" and "leitchfield ky" within displayed text
  const formatted = displayed.replace(
    /(repair|leitchfield ky)/gi,
    '<strong>$1</strong>'
  );

  return (
    <span ref={ref} className={className}>
      <span dangerouslySetInnerHTML={{ __html: formatted }} />
      {inView && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-brand-primary/40 ml-0.5 align-middle animate-pulse" />
      )}
    </span>
  );
}

/* ─── Animated row — simple fade-up reveal ─── */
function DemoRow({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mb-14 md:mb-40 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── 1. Search Intent Demo — typewriter on left, right side fades independently ─── */
function SearchIntentDemo() {
  return (
    <DemoRow>
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_1fr] gap-6 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary/60 mb-4">
            Built for search intent
          </span>
          <div className="bg-white rounded-full shadow-lg shadow-brand-primary/8 border border-brand-primary/10 px-5 py-3.5 flex items-center gap-3">
            <Search size={18} className="text-brand-primary/40 shrink-0" />
            <TypeWriter
              text="roof repair leitchfield ky"
              speed={18}
              className="text-brand-primary/80 text-[15px]"
            />
            <Mic size={18} className="text-brand-primary/20 ml-auto shrink-0" />
          </div>
          <div className="mt-5 space-y-2.5 pl-2">
            <div className="h-2 bg-brand-accent/20 rounded-full w-[45%]" />
            <div className="h-2 bg-brand-primary/8 rounded-full w-[85%]" />
            <div className="h-2 bg-brand-primary/6 rounded-full w-[70%]" />
            <div className="h-2 bg-brand-primary/5 rounded-full w-[60%]" />
          </div>
        </div>

        {/* Arrow — fades in on scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          className="flex items-center justify-center px-2"
        >
          <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center">
            <ArrowRight size={22} className="text-brand-primary/60" />
          </div>
        </motion.div>

        {/* Result card — fades in on scroll */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-xl shadow-brand-primary/8 border border-brand-primary/8 p-6"
        >
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <h3 className="text-xl font-sans font-bold mb-1">Roof Repair in Leitchfield, KY</h3>
          <p className="text-brand-accent font-medium text-sm mb-4">Fast, Local Roofing Services</p>
          <div className="space-y-2.5 mb-5">
            {['Service area: Grayson County', 'Emergency repairs', 'Free estimates'].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Check size={16} className="text-brand-accent shrink-0" />
                <span className="text-sm text-brand-primary/70">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-dashed border-brand-primary/10 pt-4">
            <p className="text-xs text-brand-primary/50">
              Google understands:{' '}
              <span className="font-semibold italic text-brand-primary/70">roof repair</span>
              <span className="text-brand-primary/30"> | </span>
              <span className="italic text-brand-primary/70">leitchfield ky</span>
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 bg-brand-accent/15 rounded-full w-[40%]" />
            <div className="h-2 bg-brand-primary/6 rounded-full w-[90%]" />
            <div className="h-2 bg-brand-primary/5 rounded-full w-[75%]" />
            <div className="h-2 bg-brand-primary/4 rounded-full w-[60%]" />
          </div>
          <div className="flex items-center gap-2 mt-5 text-xs text-brand-primary/50">
            <Check size={14} className="text-brand-accent" />
            <span>Structured so Google understands</span>
          </div>
        </motion.div>

        {/* Text — fades in on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="md:col-span-3 md:pt-6 md:px-2 lg:col-span-1 lg:pl-4 lg:pt-0 lg:px-0"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">Stop being invisible when customers search.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            When someone searches for what you do, your business has a real chance to show up. Your site is structured so Google, ChatGPT, and other AI search tools understand what you offer and where.
          </p>
        </motion.div>
      </div>

      {/* Mobile — condensed: headline + 1 line + Learn more */}
      <div className="md:hidden">
        <div className="bg-white rounded-full shadow-sm border border-brand-primary/10 px-3 py-2 flex items-center gap-2 mb-3">
          <Search size={14} className="text-brand-primary/40 shrink-0" />
          <span className="text-xs text-brand-primary/70">roof repair leitchfield ky</span>
          <Mic size={12} className="text-brand-primary/20 ml-auto shrink-0" />
        </div>
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-primary/60 mb-2">
          Built for search intent
        </span>
        <h3 className="text-2xl mb-1.5">Stop being invisible when customers search.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          When someone searches for what you do, your business has a real chance to show up. Your site is structured so Google, ChatGPT, and other AI search tools understand what you offer and where.
        </p>
      </div>
    </DemoRow>
  );
}

/* ─── Template block — drops in like Tetris, lands slightly crooked ─── */
function TemplateBlock({ delay, className, children, rotate = 0 }: { delay: number; className: string; children?: React.ReactNode; rotate?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.35,
        type: 'spring',
        stiffness: 400,
        damping: 12,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Custom block — writes in from left like code being typed ─── */
function CustomBlock({ delay, className, children }: { delay: number; className: string; children?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={{ transformOrigin: 'left' }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 2. Custom-Built Demo ─── */
function CustomBuiltDemo() {
  return (
    <DemoRow>
      {/* Desktop — text left, visual right */}
      <div className="hidden md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-[1fr_auto_1.2fr] lg:gap-8 items-center">
        <div className="pr-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary/60 mb-4">
            Custom-built for you
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">Look like the real business you are.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            No templates. No drag-and-drop builders. Your site is coded from scratch, page by page, to say the right things and work the way your business needs it&nbsp;to.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center px-2">
          <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center">
            <ArrowRight size={22} className="text-brand-primary/60" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Template side — messy, generic, broken-looking */}
          <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-5 overflow-hidden relative">
            {/* Misaligned nav bar */}
            <TemplateBlock delay={0.15} rotate={-0.5} className="flex gap-2 mb-3">
              <div className="h-2 bg-gray-300/60 rounded w-[20%]" />
              <div className="h-2 bg-gray-300/60 rounded w-[15%] ml-auto" />
              <div className="h-2 bg-gray-300/60 rounded w-[15%]" />
              <div className="h-2 bg-gray-300/60 rounded w-[12%]" />
            </TemplateBlock>
            {/* Broken image placeholder */}
            <TemplateBlock delay={0.4} rotate={0.3} className="h-20 bg-gray-200/80 rounded-lg mb-3 border-2 border-dashed border-gray-300/60 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </TemplateBlock>
            {/* Badly spaced text blocks */}
            <TemplateBlock delay={0.65} rotate={-0.4} className="h-2.5 bg-gray-300/50 rounded w-[90%] mb-4" />
            <TemplateBlock delay={0.8} rotate={0.6} className="h-2 bg-gray-200/60 rounded w-[70%] mb-1.5" />
            <TemplateBlock delay={0.9} rotate={-0.2} className="h-2 bg-gray-200/50 rounded w-[55%] mb-3" />
            {/* Ugly CTA */}
            <TemplateBlock delay={1.05} rotate={0.4} className="h-7 bg-gray-300/40 rounded-md w-[50%] mx-auto" />
            <p className="text-[10px] text-gray-400 mt-4 text-center font-medium uppercase tracking-wider">Generic template</p>
          </div>

          {/* Custom side — polished, branded, clean */}
          <div className="bg-white rounded-2xl shadow-xl shadow-brand-accent/5 border-2 border-brand-accent/20 p-5 relative overflow-hidden">
            <div className="absolute top-3 right-4 bg-brand-accent text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Yours</div>
            {/* Clean nav */}
            <CustomBlock delay={0.2} className="flex gap-2 mb-3 items-center">
              <div className="h-2.5 bg-brand-accent/25 rounded w-[22%]" />
              <div className="h-2 bg-brand-primary/8 rounded w-[12%] ml-auto" />
              <div className="h-2 bg-brand-primary/8 rounded w-[12%]" />
              <div className="h-6 bg-brand-accent/20 rounded-full w-[18%]" />
            </CustomBlock>
            {/* Hero section */}
            <CustomBlock delay={0.45} className="bg-brand-accent/[0.04] rounded-lg p-3 mb-3">
              <div className="h-3 bg-brand-accent/20 rounded w-[80%] mb-2" />
              <div className="h-2 bg-brand-primary/8 rounded w-[60%] mb-1.5" />
              <div className="h-5 bg-brand-accent/15 rounded-full w-[35%] mt-2" />
            </CustomBlock>
            {/* Content lines */}
            <CustomBlock delay={0.7} className="space-y-1.5 mb-3">
              <div className="h-2 bg-brand-primary/10 rounded-full w-full" />
              <div className="h-2 bg-brand-primary/8 rounded-full w-[90%]" />
              <div className="h-2 bg-brand-primary/6 rounded-full w-[75%]" />
            </CustomBlock>
            {/* Feature cards */}
            <CustomBlock delay={0.95} className="grid grid-cols-3 gap-1.5">
              <div className="h-8 bg-brand-accent/8 rounded-lg" />
              <div className="h-8 bg-brand-accent/8 rounded-lg" />
              <div className="h-8 bg-brand-accent/8 rounded-lg" />
            </CustomBlock>
            <CustomBlock delay={1.15} className="flex items-center gap-1.5 mt-3 justify-center">
              <Check size={12} className="text-brand-accent" />
              <p className="text-[10px] text-brand-primary/50 font-medium uppercase tracking-wider">Built for your business</p>
            </CustomBlock>
          </div>
        </div>
      </div>

      {/* Mobile — condensed */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-gray-100 rounded-lg border border-gray-200 p-2 flex flex-col gap-1 justify-center h-14">
            <div className="h-1 bg-gray-300 rounded w-[60%]" />
            <div className="h-1 bg-gray-200 rounded w-[80%]" />
            <div className="h-1 bg-gray-200 rounded w-[45%]" />
          </div>
          <div className="bg-white rounded-lg border-2 border-brand-accent/25 p-2 flex flex-col gap-1 justify-center h-14 relative">
            <span className="absolute top-1 right-1 bg-brand-accent text-white text-[8px] font-bold px-1.5 py-px rounded-full uppercase tracking-wider">Yours</span>
            <div className="h-1 bg-brand-accent/35 rounded w-[60%]" />
            <div className="h-1 bg-brand-accent/20 rounded w-[80%]" />
            <div className="h-1 bg-brand-accent/15 rounded w-[45%]" />
          </div>
        </div>
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-primary/60 mb-2">
          Custom-built for you
        </span>
        <h3 className="text-2xl mb-1.5">Look like the real business you are.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          No templates. No drag-and-drop builders. Your site is coded from scratch to say the right things and work the way your business needs it to.
        </p>
      </div>
    </DemoRow>
  );
}

/* ─── 3. Responsive Demo — slides from left ─── */
function ResponsiveDemo() {
  return (
    <DemoRow>
      {/* Desktop — visual left, text right */}
      <div className="hidden md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary/60 mb-6">
            Responsive on every device
          </span>
          <div className="flex items-end gap-5 justify-center">
            {/* Desktop mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-56 bg-white rounded-xl shadow-xl shadow-brand-primary/10 border border-brand-primary/15 p-3 pb-1">
                <div className="bg-brand-accent/10 rounded-lg p-3 mb-2">
                  <div className="h-2 bg-brand-accent/35 rounded w-[70%] mb-2" />
                  <div className="h-1.5 bg-brand-primary/15 rounded w-full mb-1.5" />
                  <div className="h-1.5 bg-brand-primary/12 rounded w-[85%]" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  <div className="h-8 bg-brand-primary/10 rounded" />
                  <div className="h-8 bg-brand-primary/10 rounded" />
                  <div className="h-8 bg-brand-primary/10 rounded" />
                </div>
              </div>
              <div className="w-20 h-2 bg-brand-primary/15 rounded-b-lg mx-auto" />
              <div className="flex items-center gap-1 justify-center mt-1.5">
                <Monitor size={12} className="text-brand-primary/45" />
                <span className="text-[10px] text-brand-primary/45 font-medium">Desktop</span>
              </div>
            </motion.div>
            {/* Tablet mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-32 bg-white rounded-xl shadow-lg shadow-brand-primary/10 border border-brand-primary/15 p-2.5 pb-1">
                <div className="bg-brand-accent/10 rounded-lg p-2 mb-1.5">
                  <div className="h-1.5 bg-brand-accent/35 rounded w-[70%] mb-1.5" />
                  <div className="h-1 bg-brand-primary/15 rounded w-full mb-1" />
                  <div className="h-1 bg-brand-primary/12 rounded w-[85%]" />
                </div>
                <div className="grid grid-cols-2 gap-1 mb-1.5">
                  <div className="h-6 bg-brand-primary/10 rounded" />
                  <div className="h-6 bg-brand-primary/10 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-1 justify-center mt-1.5">
                <Tablet size={12} className="text-brand-primary/45" />
                <span className="text-[10px] text-brand-primary/45 font-medium">Tablet</span>
              </div>
            </motion.div>
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-20 bg-white rounded-xl shadow-2xl shadow-brand-accent/25 border-2 border-brand-accent/50 p-2 pb-1 ring-4 ring-brand-accent/10">
                <div className="w-8 h-1 bg-brand-primary/20 rounded-full mx-auto mb-1.5" />
                <div className="bg-brand-accent/15 rounded-lg p-1.5 mb-1.5">
                  <div className="h-1.5 bg-brand-accent/60 rounded w-[70%] mb-1" />
                  <div className="h-1 bg-brand-primary/20 rounded w-full mb-0.5" />
                  <div className="h-1 bg-brand-primary/15 rounded w-[85%]" />
                </div>
                <div className="space-y-1 mb-1">
                  <div className="h-4 bg-brand-primary/12 rounded" />
                  <div className="h-4 bg-brand-primary/12 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-1 justify-center mt-1.5">
                <PhoneIcon size={12} className="text-brand-accent" />
                <span className="text-[10px] text-brand-accent font-bold">Mobile</span>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center gap-2 justify-center mt-5 text-xs text-brand-primary/50">
            <Check size={14} className="text-brand-accent" />
            <span>Same content, perfect layout on every screen</span>
          </div>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl mb-4">Win the customers who decide on their phone.</h3>
          <p className="text-brand-primary/60 leading-relaxed mb-4">
            Your site will load fast and look right the moment they tap. No waiting, no pinching, no broken layouts.
          </p>
          <div className="space-y-2.5">
            {['Mobile-first design approach', 'Touch-friendly buttons & navigation', 'Images optimized per device'].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Check size={16} className="text-brand-accent shrink-0" />
                <span className="text-sm text-brand-primary/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — condensed */}
      <div className="md:hidden">
        <div className="flex items-end gap-2 mb-3">
          <div className="w-14 h-9 bg-white rounded border border-brand-primary/15 shadow-sm p-1 flex flex-col gap-1">
            <div className="h-0.5 bg-brand-accent/30 rounded w-[60%]" />
            <div className="h-0.5 bg-brand-primary/15 rounded w-[85%]" />
            <div className="h-0.5 bg-brand-primary/10 rounded w-[70%]" />
          </div>
          <div className="w-9 h-8 bg-white rounded border border-brand-primary/15 shadow-sm p-1 flex flex-col gap-1">
            <div className="h-0.5 bg-brand-accent/30 rounded w-[60%]" />
            <div className="h-0.5 bg-brand-primary/15 rounded w-[85%]" />
          </div>
          <div className="w-5 h-9 bg-white rounded-md border-2 border-brand-accent/50 shadow-md ring-2 ring-brand-accent/10 p-0.5 flex flex-col gap-0.5">
            <div className="h-0.5 bg-brand-accent/60 rounded w-[70%]" />
            <div className="h-0.5 bg-brand-primary/15 rounded w-full" />
          </div>
        </div>
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-primary/60 mb-2">
          Responsive on every device
        </span>
        <h3 className="text-2xl mb-1.5">Win the customers who decide on their phone.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Your site will load fast and look right the moment they tap. No waiting, no pinching, no broken layouts.
        </p>
      </div>
    </DemoRow>
  );
}

/* ─── Animated progress ring with count-up ─── */
function ProgressRing({
  value,
  label,
  suffix = '',
  icon,
  size = 80,
  strokeWidth = 4,
  delay = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}) {
  const ringRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ringRef, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Stagger start
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // All rings fill to 100% visually
  const offset = started ? 0 : circumference;

  useEffect(() => {
    if (!started || icon) return;
    const duration = 1400;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value, icon]);

  // Smaller text for values with suffix (like 99.9%)
  const textSize = suffix
    ? (size >= 70 ? 'text-lg' : 'text-sm')
    : (size >= 70 ? 'text-2xl' : 'text-lg');

  return (
    <div ref={ringRef} className="text-center">
      <div className="relative mx-auto mb-2" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-brand-accent/10"
          />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="text-brand-accent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {icon || (
            <span className={`font-sans font-bold text-brand-accent ${textSize}`}>
              {Number.isInteger(count) ? count : count.toFixed(1)}{suffix}
            </span>
          )}
        </div>
      </div>
      <span className={`text-brand-primary/50 font-medium ${size >= 70 ? 'text-xs' : 'text-[10px]'}`}>{label}</span>
    </div>
  );
}

/* ─── 4. Performance & Security Demo — slides from right ─── */
function PerformanceDemo() {
  return (
    <DemoRow>
      {/* Desktop — text left, visual right */}
      <div className="hidden md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary/60 mb-4">
            Built for speed &amp; security
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">A slow site loses customers. Yours won't.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            Yours loads fast, stays secure, and doesn't go down.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-brand-primary/8 border border-brand-primary/8 p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-semibold text-brand-primary/40 uppercase tracking-wider">Performance report</span>
            <span className="text-[10px] text-brand-accent font-medium bg-brand-accent/8 px-2 py-0.5 rounded-full">Live</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-5">
            <ProgressRing value={94} label="Speed" size={80} strokeWidth={4} delay={0} />
            <ProgressRing value={100} label="SSL Secured" size={80} strokeWidth={4} delay={400} icon={<Lock size={24} className="text-brand-accent" />} />
            <ProgressRing value={99.9} label="Uptime" suffix="%" size={80} strokeWidth={4} delay={800} />
          </div>
          <div className="border-t border-brand-primary/8 pt-4">
            <div className="grid grid-cols-2 gap-3">
              {['Load time: <3s', 'CDN-delivered globally', 'Auto SSL certificates', 'Daily backups'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-brand-accent shrink-0" />
                  <span className="text-xs text-brand-primary/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — condensed */}
      <div className="md:hidden">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="relative w-9 h-9 shrink-0">
            <svg width="36" height="36" className="-rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-accent/15" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-brand-accent" strokeDasharray="94.2" strokeDashoffset="5.7" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-brand-accent">94</span>
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-brand-accent/10 rounded-full shrink-0">
            <Lock size={14} className="text-brand-accent" />
          </div>
          <div className="relative w-9 h-9 shrink-0">
            <svg width="36" height="36" className="-rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-accent/15" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-brand-accent" strokeDasharray="94.2" strokeDashoffset="0.09" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-brand-accent">99%</span>
          </div>
        </div>
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-primary/60 mb-2">
          Built for speed &amp; security
        </span>
        <h3 className="text-2xl mb-1.5">A slow site loses customers. Yours won't.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed mb-3">
          Yours loads fast, stays secure, and doesn't go down.
        </p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          {['Load time: <3s', 'CDN-delivered globally', 'Auto SSL certificates', 'Daily backups'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={12} className="text-brand-accent shrink-0" />
              <span className="text-[11px] text-brand-primary/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </DemoRow>
  );
}

/* ─── Chat messages data ─── */
const chatMessages = [
  { from: 'client', text: 'Hey, can we add our new phone number to the site?', time: '10:32 AM' },
  { from: 'kara', text: 'Done! Already updated it across all pages. Anything else?', time: '10:34 AM' },
  { from: 'client', text: 'That was fast. Thanks!', time: '10:35 AM' },
  { from: 'kara', text: "That's what I'm here for 😊", time: '10:35 AM' },
] as const;


/* ─── Typing dots indicator ─── */
function TypingDots({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="flex items-end justify-start">
      <div className="bg-brand-accent/8 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1 items-center">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary/20 animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary/20 animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary/20 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

/* ─── Animated chat — messages appear one by one ─── */
function AnimatedChat({
  messages,
  compact = false,
}: {
  messages: readonly { from: string; text: string; time: string }[];
  compact?: boolean;
}) {
  const chatRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chatRef, { once: true, margin: '-40px' });
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;

    // Delays: first message appears after 400ms, then each subsequent with typing indicator
    const delays = [400, 1200, 800, 1000]; // ms before each message appears
    const typingDuration = 600; // how long typing dots show
    let timeout: ReturnType<typeof setTimeout>;
    let current = 0;

    function showNext() {
      if (current >= messages.length) return;
      const delay = delays[current] ?? 800;

      // If next message is from Kara, show typing dots first
      const msg = messages[current];
      if (msg.from === 'kara' && current > 0) {
        timeout = setTimeout(() => {
          setShowTyping(true);
          timeout = setTimeout(() => {
            setShowTyping(false);
            current++;
            setVisibleCount(current);
            showNext();
          }, typingDuration);
        }, delay - typingDuration);
      } else {
        timeout = setTimeout(() => {
          current++;
          setVisibleCount(current);
          showNext();
        }, delay);
      }
    }

    showNext();
    return () => clearTimeout(timeout);
  }, [inView, messages]);

  return (
    <div ref={chatRef} className={`relative ${compact ? 'space-y-2' : 'space-y-3'}`}>
      {messages.map((msg, i) => {
        const isClient = msg.from === 'client';
        const visible = i < visibleCount;

        return (
          <div
            key={i}
            className={`flex items-end gap-2 ${isClient ? 'justify-end' : 'justify-start'} transition-opacity duration-300 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Kara's avatar — left side of her messages */}
            {!isClient && (
              <img
                src="/kara-gibson-small.webp"
                alt=""
                className={`rounded-full object-cover shrink-0 ${compact ? 'w-5 h-5' : 'w-7 h-7'}`}
              />
            )}
            <div className={
              compact
                ? `${isClient ? 'bg-brand-primary/5 rounded-xl rounded-br-sm' : 'bg-brand-accent/8 rounded-xl rounded-bl-sm'} px-3 py-2 max-w-[80%]`
                : `${isClient ? 'bg-brand-primary/5 rounded-2xl rounded-br-md' : 'bg-brand-accent/8 rounded-2xl rounded-bl-md'} px-4 py-2.5 max-w-[75%]`
            }>
              <p className={compact ? 'text-xs text-brand-primary/70' : 'text-sm text-brand-primary/70'}>{msg.text}</p>
              {msg.time && (
                <span className={`text-[10px] text-brand-primary/30 mt-1 block ${isClient ? 'text-right' : ''}`}>{msg.time}</span>
              )}
            </div>
          </div>
        );
      })}
      {/* Typing dots overlay — positioned absolutely so it doesn't shift layout */}
      {showTyping && (
        <div className="absolute bottom-0 left-0">
          <TypingDots visible />
        </div>
      )}
    </div>
  );
}

/* ─── 5. Someone In Your Corner Demo ─── */
function SupportDemo() {
  return (
    <DemoRow className="!mb-4 md:!mb-20">
      {/* Desktop — chat left, text right */}
      <div className="hidden md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10 items-start">
        <div className="bg-white rounded-2xl shadow-xl shadow-brand-primary/8 border border-brand-primary/8 p-6 h-[420px] flex flex-col">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-brand-primary/8 shrink-0">
            <img src="/kara-gibson-small.webp" alt="Kara Gibson" className="w-9 h-9 rounded-full object-cover shrink-0" />
            <div>
              <span className="text-sm font-sans font-bold text-brand-primary/80">Kara Gibson</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span className="text-[10px] text-brand-primary/40">Studio 925</span>
              </div>
            </div>
            <Phone size={16} className="text-brand-accent ml-auto" />
          </div>

          <div className="flex-1 overflow-hidden">
            <AnimatedChat messages={chatMessages} />
          </div>
        </div>

        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary/60 mb-4">
            Ongoing support
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">Never get stuck on your own again.</h3>
          <p className="text-brand-primary/60 leading-relaxed mb-4">
            You won't be handed a login and left to figure it out. After launch, I'm still here. Updates, fixes, or just someone to call.
          </p>
          <div className="space-y-2.5">
            {['Direct line for calls or texts anytime', 'Updates & changes handled for you', 'No support tickets or chatbots'].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Check size={16} className="text-brand-accent shrink-0" />
                <span className="text-sm text-brand-primary/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — condensed */}
      <div className="md:hidden">
        <div className="flex items-end gap-2 mb-3">
          <img src="/kara-gibson-small.webp" alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
          <div className="bg-brand-accent/8 rounded-2xl rounded-bl-sm px-3 py-2">
            <p className="text-xs text-brand-primary/70">Done! Already updated it across all pages.</p>
          </div>
        </div>
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-primary/60 mb-2">
          Ongoing support
        </span>
        <h3 className="text-2xl mb-1.5">Never get stuck on your own again.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed mb-3">
          You won't be handed a login and left to figure it out. After launch, I'm still here. Updates, fixes, or just someone to call.
        </p>
        <div className="space-y-2">
          {['Direct line for calls or texts anytime', 'Updates & changes handled for you', 'No support tickets or chatbots'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={14} className="text-brand-accent shrink-0" />
              <span className="text-xs text-brand-primary/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </DemoRow>
  );
}

/* ─── Main Services Section ─── */
export default function Services() {
  return (
    <section id="services" className="py-10 md:py-36 px-6 bg-white scroll-mt-16 md:scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16 max-w-3xl"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4">
            Every Studio 925 site includes <span className="text-brand-accent italic">all&nbsp;five.</span>
          </h2>
          <p className="text-sm sm:text-lg text-brand-primary/60">
            Built in by default. No upsells.
          </p>
        </motion.div>

        <SearchIntentDemo />
        <CustomBuiltDemo />
        <ResponsiveDemo />
        <PerformanceDemo />
        <SupportDemo />
      </div>
    </section>
  );
}
