'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Check, ArrowRight, Mic, Lock, Phone, Monitor, Tablet, Smartphone as PhoneIcon, ChevronDown } from 'lucide-react';

/* ─── Mobile-only "Learn more" collapsible ─── */
function MobileLearnMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent underline underline-offset-4 min-h-[44px] mt-1"
      >
        {open ? 'Show less' : 'See more'}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

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
      className={`mb-10 md:mb-56 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── 1. Search Intent Demo — type query, then reveal results ─── */
function SearchIntentDemo() {
  const [typingDone, setTypingDone] = useState(false);
  const handleDone = useRef(() => setTypingDone(true)).current;

  return (
    <DemoRow>
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_1fr] gap-6 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 px-3 py-1 bg-brand-accent/8 rounded-md">
            Built for search intent
          </span>
          <div className="bg-white rounded-full shadow-lg shadow-brand-primary/8 border border-brand-primary/10 px-5 py-3.5 flex items-center gap-3">
            <Search size={18} className="text-brand-primary/40 shrink-0" />
            <TypeWriter
              text="roof repair leitchfield ky"
              speed={30}
              className="text-brand-primary/80 text-[15px]"
              onDone={handleDone}
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

        {/* Arrow — fades in after typing */}
        <motion.div
          animate={typingDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center px-2"
        >
          <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <ArrowRight size={22} className="text-brand-accent" />
          </div>
        </motion.div>

        {/* Result card — slides in after typing */}
        <motion.div
          animate={typingDone ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.3, delay: 0.05 }}
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

        {/* Text — fades in after results */}
        <motion.div
          animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="pl-4"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">Stop being invisible when customers search.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            When someone searches for what you do, your business has a real chance to show up. Your site is structured so Google, ChatGPT, and other AI search tools understand what you offer and where.
          </p>
        </motion.div>
      </div>

      {/* Mobile — condensed: headline + 1 line + Learn more */}
      <div className="md:hidden">
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-accent mb-2 px-2.5 py-0.5 bg-brand-accent/8 rounded-md">
          Built for search intent
        </span>
        <h3 className="text-2xl mb-1.5">Stop being invisible when customers search.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Your site is built so Google can actually understand what you offer.
        </p>
        <MobileLearnMore>
          <div className="bg-white rounded-full shadow-md border border-brand-primary/10 px-4 py-3 flex items-center gap-2.5 mb-3">
            <Search size={16} className="text-brand-primary/40 shrink-0" />
            <TypeWriter
              text="roof repair leitchfield ky"
              speed={30}
              className="text-brand-primary/80 text-sm"
              onDone={handleDone}
            />
            <Mic size={16} className="text-brand-primary/20 ml-auto shrink-0" />
          </div>
          <motion.div
            animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-brand-primary/8 p-5 mb-4">
              <h4 className="text-lg font-sans font-bold mb-0.5">Roof Repair in Leitchfield, KY</h4>
              <p className="text-brand-accent font-medium text-xs mb-3">Fast, Local Roofing Services</p>
              <div className="space-y-2 mb-3">
                {['Service area: Grayson County', 'Emergency repairs', 'Free estimates'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-brand-accent shrink-0" />
                    <span className="text-xs text-brand-primary/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-dashed border-brand-primary/10 pt-3">
                <p className="text-[11px] text-brand-primary/50">
                  Google understands:{' '}
                  <span className="font-semibold italic text-brand-primary/70">roof repair</span>
                  <span className="text-brand-primary/30"> | </span>
                  <span className="italic text-brand-primary/70">leitchfield ky</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-brand-primary/60 leading-relaxed">
              When someone searches for what you do, your business has a real chance to show up. Your site is structured so Google, ChatGPT, and other AI search tools understand what you offer and where.
            </p>
          </motion.div>
        </MobileLearnMore>
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
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1.2fr] gap-8 items-center">
        <div className="pr-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 px-3 py-1 bg-brand-accent/8 rounded-md">
            Custom-built for you
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">Look like the real business you are.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            No templates. No drag-and-drop builders. Your site is coded from scratch, page by page, to say the right things and work the way your business needs it&nbsp;to.
          </p>
        </div>

        <div className="flex items-center justify-center px-2">
          <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
            <ArrowRight size={22} className="text-brand-accent" />
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
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-accent mb-2 px-2.5 py-0.5 bg-brand-accent/8 rounded-md">
          Custom-built for you
        </span>
        <h3 className="text-2xl mb-1.5">Look like the real business you are.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Coded from scratch — not a drag-and-drop template.
        </p>
        <MobileLearnMore>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Template — messy */}
          <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-3 overflow-hidden">
            <TemplateBlock delay={0.15} rotate={-0.5} className="flex gap-1 mb-2">
              <div className="h-1.5 bg-gray-300/60 rounded w-[25%]" />
              <div className="h-1.5 bg-gray-300/60 rounded w-[15%] ml-auto" />
              <div className="h-1.5 bg-gray-300/60 rounded w-[15%]" />
            </TemplateBlock>
            <TemplateBlock delay={0.4} rotate={0.3} className="h-12 bg-gray-200/80 rounded-lg mb-2 border-2 border-dashed border-gray-300/60 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </TemplateBlock>
            <TemplateBlock delay={0.65} rotate={-0.3} className="h-1.5 bg-gray-300/50 rounded w-[85%] mb-1.5" />
            <TemplateBlock delay={0.8} rotate={0.4} className="h-1.5 bg-gray-200/50 rounded w-[60%] mb-2" />
            <TemplateBlock delay={0.95} rotate={0.3} className="h-5 bg-gray-300/40 rounded w-[55%] mx-auto" />
            <p className="text-[8px] text-gray-400 mt-2 text-center font-medium uppercase tracking-wider">Template</p>
          </div>
          {/* Custom — polished */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-brand-accent/20 p-3 relative overflow-hidden">
            <div className="absolute top-2.5 right-2.5 bg-brand-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Yours</div>
            <CustomBlock delay={0.2} className="flex gap-1 mb-2 items-center">
              <div className="h-2 bg-brand-accent/25 rounded w-[25%]" />
              <div className="h-1.5 bg-brand-primary/8 rounded w-[12%] ml-auto" />
              <div className="h-4 bg-brand-accent/20 rounded-full w-[20%]" />
            </CustomBlock>
            <CustomBlock delay={0.45} className="bg-brand-accent/[0.04] rounded-lg p-2 mb-2">
              <div className="h-2 bg-brand-accent/20 rounded w-[75%] mb-1.5" />
              <div className="h-1.5 bg-brand-primary/8 rounded w-[55%] mb-1" />
              <div className="h-3.5 bg-brand-accent/15 rounded-full w-[35%] mt-1" />
            </CustomBlock>
            <CustomBlock delay={0.7} className="space-y-1 mb-2">
              <div className="h-1.5 bg-brand-primary/10 rounded-full w-full" />
              <div className="h-1.5 bg-brand-primary/7 rounded-full w-[85%]" />
            </CustomBlock>
            <CustomBlock delay={0.95} className="grid grid-cols-3 gap-1">
              <div className="h-5 bg-brand-accent/8 rounded" />
              <div className="h-5 bg-brand-accent/8 rounded" />
              <div className="h-5 bg-brand-accent/8 rounded" />
            </CustomBlock>
            <CustomBlock delay={1.1} className="flex items-center gap-1 mt-2 justify-center">
              <Check size={10} className="text-brand-accent" />
              <p className="text-[8px] text-brand-primary/50 font-medium">Built for you</p>
            </CustomBlock>
          </div>
        </div>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          No templates. No drag-and-drop builders. Your site is coded from scratch to say the right things and work the way your business needs it to.
        </p>
        </MobileLearnMore>
      </div>
    </DemoRow>
  );
}

/* ─── 3. Responsive Demo — slides from left ─── */
function ResponsiveDemo() {
  return (
    <DemoRow>
      {/* Desktop — visual left, text right */}
      <div className="hidden md:grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent mb-6 px-3 py-1 bg-brand-accent/8 rounded-md">
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
            Most customers decide on their phone. Your site will load fast and look right immediately — no waiting, no pinching, no broken layouts.
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
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-accent mb-2 px-2.5 py-0.5 bg-brand-accent/8 rounded-md">
          Responsive on every device
        </span>
        <h3 className="text-2xl mb-1.5">Win the customers who decide on their phone.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Fast, readable, and touch-friendly on every screen size.
        </p>
        <MobileLearnMore>
        <div className="flex items-end gap-3 justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.4 }}
            className="w-28 bg-white rounded-lg shadow-md border border-brand-primary/15 p-2"
          >
            <div className="bg-brand-accent/10 rounded p-1.5 mb-1">
              <div className="h-1 bg-brand-accent/35 rounded w-[70%] mb-1" />
              <div className="h-0.5 bg-brand-primary/15 rounded w-full" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="h-4 bg-brand-primary/10 rounded" />
              <div className="h-4 bg-brand-primary/10 rounded" />
              <div className="h-4 bg-brand-primary/10 rounded" />
            </div>
            <p className="text-[8px] text-brand-primary/45 text-center mt-1 font-medium">Desktop</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="w-16 bg-white rounded-lg shadow-md border border-brand-primary/15 p-1.5"
          >
            <div className="bg-brand-accent/10 rounded p-1 mb-1">
              <div className="h-1 bg-brand-accent/35 rounded w-[70%] mb-0.5" />
              <div className="h-0.5 bg-brand-primary/15 rounded w-full" />
            </div>
            <div className="grid grid-cols-2 gap-0.5">
              <div className="h-3 bg-brand-primary/10 rounded" />
              <div className="h-3 bg-brand-primary/10 rounded" />
            </div>
            <p className="text-[8px] text-brand-primary/45 text-center mt-0.5 font-medium">Tablet</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-11 bg-white rounded-lg shadow-xl shadow-brand-accent/25 border-2 border-brand-accent/50 p-1 ring-2 ring-brand-accent/10"
          >
            <div className="w-4 h-0.5 bg-brand-primary/20 rounded-full mx-auto mb-1" />
            <div className="bg-brand-accent/15 rounded p-1 mb-0.5">
              <div className="h-0.5 bg-brand-accent/60 rounded w-[70%]" />
            </div>
            <div className="h-2.5 bg-brand-primary/12 rounded mb-0.5" />
            <div className="h-2.5 bg-brand-primary/12 rounded" />
            <p className="text-[7px] text-brand-accent text-center mt-0.5 font-bold">Mobile</p>
          </motion.div>
        </div>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Most customers decide on their phone. Your site will load fast and look right immediately — no waiting, no pinching, no broken layouts.
        </p>
        </MobileLearnMore>
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
      <div className="hidden md:grid md:grid-cols-[1fr_1.3fr] gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 px-3 py-1 bg-brand-accent/8 rounded-md">
            Built for speed &amp; security
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">A slow site loses customers. Yours won't.</h3>
          <p className="text-brand-primary/60 leading-relaxed">
            A slow site loses customers before they read a word. Yours loads fast, stays secure, and doesn't go down.
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
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-accent mb-2 px-2.5 py-0.5 bg-brand-accent/8 rounded-md">
          Built for speed &amp; security
        </span>
        <h3 className="text-2xl mb-1.5">A slow site loses customers. Yours won't.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          Fast, secure, and reliable — every visitor, every time.
        </p>
        <MobileLearnMore>
        <div className="bg-white rounded-xl shadow-lg border border-brand-primary/8 p-5 mb-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <ProgressRing value={94} label="Speed" size={56} strokeWidth={3} delay={0} />
            <ProgressRing value={100} label="SSL" size={56} strokeWidth={3} delay={400} icon={<Lock size={18} className="text-brand-accent" />} />
            <ProgressRing value={99.9} label="Uptime" suffix="%" size={56} strokeWidth={3} delay={800} />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {['Load time: <3s', 'CDN-delivered globally', 'Auto SSL certificates', 'Daily backups'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={12} className="text-brand-accent shrink-0" />
                <span className="text-[11px] text-brand-primary/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          A slow site loses customers before they read a word. Yours loads fast, stays secure, and doesn't go down.
        </p>
        </MobileLearnMore>
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
      <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
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
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 px-3 py-1 bg-brand-accent/8 rounded-md">
            Ongoing support
          </span>
          <h3 className="text-3xl lg:text-4xl mb-4">Never get stuck on your own again.</h3>
          <p className="text-brand-primary/60 leading-relaxed mb-4">
            You won't be handed a login and left to figure it out. After launch, I'm still here — updates, fixes, or just someone to call.
          </p>
          <div className="space-y-2.5">
            {['Direct line — call or text anytime', 'Updates & changes handled for you', 'No support tickets or chatbots'].map((item) => (
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
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand-accent mb-2 px-2.5 py-0.5 bg-brand-accent/8 rounded-md">
          Ongoing support
        </span>
        <h3 className="text-2xl mb-1.5">Never get stuck on your own again.</h3>
        <p className="text-sm text-brand-primary/60 leading-relaxed">
          After launch, I'm still here — call, text, or message for changes.
        </p>
        <MobileLearnMore>
        <div className="bg-white rounded-xl shadow-lg border border-brand-primary/8 p-4 mb-4 h-[320px] flex flex-col">
          <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-brand-primary/8 shrink-0">
            <img src="/kara-gibson-small.webp" alt="Kara Gibson" className="w-7 h-7 rounded-full object-cover shrink-0" />
            <div>
              <span className="text-xs font-sans font-bold text-brand-primary/80">Kara Gibson</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-brand-accent" />
                <span className="text-[9px] text-brand-primary/40">Studio 925</span>
              </div>
            </div>
            <Phone size={14} className="text-brand-accent ml-auto" />
          </div>

          <div className="flex-1 overflow-hidden">
            <AnimatedChat messages={chatMessages} compact />
          </div>
        </div>
        <p className="text-sm text-brand-primary/60 leading-relaxed mb-3">
          You won't be handed a login and left to figure it out. After launch, I'm still here — updates, fixes, or just someone to call.
        </p>
        <div className="space-y-2">
          {['Direct line — call or text anytime', 'Updates & changes handled for you', 'No support tickets or chatbots'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={14} className="text-brand-accent shrink-0" />
              <span className="text-xs text-brand-primary/70">{item}</span>
            </div>
          ))}
        </div>
        </MobileLearnMore>
      </div>
    </DemoRow>
  );
}

/* ─── Main Services Section ─── */
export default function Services() {
  return (
    <section id="services" className="py-14 md:py-36 px-6 bg-white scroll-mt-16 md:scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16 max-w-3xl"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4">
            <span className="hidden sm:inline">A professional online presence<br /><span className="text-brand-accent italic">that works as hard as you&nbsp;do.</span></span>
            <span className="sm:hidden">Your website should work <span className="text-brand-accent italic">as hard as you&nbsp;do.</span></span>
          </h2>
          <p className="text-sm sm:text-lg text-brand-primary/60">
            Here's what you get when your website is built to perform.
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
