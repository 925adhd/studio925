'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

type Answers = Record<string, string | string[]>;

type ShowIf = (a: Answers) => boolean;

type WelcomeQ = { type: 'welcome'; title: string; body: string };
type ThankYouQ = { type: 'thankyou' };
type InputType = 'text' | 'email' | 'tel' | 'url';
type TextQ = { id: string; type: InputType; label: string; help?: string; required?: boolean; showIf?: ShowIf };
type TextareaQ = { id: string; type: 'textarea'; label: string; help?: string; required?: boolean; showIf?: ShowIf };
type ChoiceQ = { id: string; type: 'choice'; label: string; help?: string; required?: boolean; options: string[]; showIf?: ShowIf };
type MultiQ = { id: string; type: 'multi'; label: string; help?: string; required?: boolean; max: number; options: string[]; showIf?: ShowIf };
type WithFullWidth<T> = T & { fullWidth?: boolean };
type GroupField = WithFullWidth<TextQ> | WithFullWidth<TextareaQ> | WithFullWidth<ChoiceQ> | WithFullWidth<MultiQ>;
type GroupQ = { id: string; type: 'group'; label: string; help?: string; fields: GroupField[]; showIf?: ShowIf };

type Question = WelcomeQ | ThankYouQ | TextQ | TextareaQ | ChoiceQ | MultiQ | GroupQ;

const hasOnline = (a: Answers) => {
  const v = a.has_presence;
  return typeof v === 'string' && v !== 'Neither' && v !== '';
};

const questions: Question[] = [
  { type: 'welcome', title: "Let's get your project rolling.",
    body: "If you have a website or Facebook page, drop the links when I ask and I will pull what I can from them after you submit. That is why this form only asks about the gaps I cannot grab on my own. No online presence yet? Totally fine, just a few extra questions about the business." },

  { id: 'package', type: 'choice', label: 'Which package did you purchase?', required: true,
    help: 'Pick the one you paid the deposit for.',
    options: [
      'Foundation | $900 | Up to 5 pages',
      'Growth | $1,800 | Up to 10 core pages',
      'Online Store | $2,600 | Up to 15 core pages',
    ] },
  { id: 'full_name', type: 'text', label: 'Your first and last name', required: true },
  { id: 'email', type: 'email', label: 'Best email to reach you', required: true },
  { id: 'phone', type: 'tel', label: 'Best phone number', required: true },
  { id: 'has_presence', type: 'choice', label: 'What do you have online right now?', required: true,
    help: 'Anything I can pull copy, hours, photos, or reviews from saves you typing.',
    options: ['A website', 'A Facebook page', 'Both a website and Facebook page', 'Neither'] },
  { id: 'current_url', type: 'url', label: 'Website URL', required: true,
    showIf: (a) => a.has_presence === 'A website' || a.has_presence === 'Both a website and Facebook page' },
  { id: 'facebook_page', type: 'text', label: 'Facebook page URL', required: true,
    showIf: (a) => a.has_presence === 'A Facebook page' || a.has_presence === 'Both a website and Facebook page' },
  { id: 'has_gbp', type: 'choice', label: 'Do you have a Google Business Profile?', required: true,
    help: 'A Google Business Profile is non-negotiable for local businesses. It powers your Google Maps listing, the local 3-pack (the map box with three listings at the top of local searches), and the sidebar on Google search, and is where most of your local traffic starts. Google requires the business owner to create and verify the profile, so you will set it up and then add me as a manager. I handle the optimization from there. Every Studio 925 build assumes an active GBP is part of your online footprint.',
    options: ['Yes, I have one and will add you as manager', 'Not sure, I will check', 'No, I will create one and add you'] },

  { id: 'business_name', type: 'text', label: 'What is the name of your business?', required: true },
  { id: 'location', type: 'text', label: 'What city and state is your business based in?', help: 'This helps with local SEO.', required: true },
  { id: 'one_line', type: 'textarea', label: 'In one sentence, what does your business do?', help: 'Pretend you are telling a neighbor. Plain language is best.', required: true },
  { id: 'services', type: 'textarea', label: 'List the services or products you offer', help: 'One per line is fine. Do not worry about formatting.', required: true, showIf: (a) => !hasOnline(a) },

  { id: 'ideal_customer', type: 'textarea', label: 'Who is your ideal customer?', help: 'Example: Homeowners in their 40s and 50s in the Lexington area who need repairs but do not want a big contractor.' },
  { id: 'differentiator', type: 'textarea', label: 'What makes you different from your competitors?', help: 'If nothing obvious comes to mind, tell me what your customers compliment you on most.' },
  { id: 'main_goal', type: 'choice', label: 'What is the single most important thing this website needs to do?', required: true,
    options: [
      'Bring in new customers through Google',
      'Look professional so referrals actually book',
      'Sell products online',
      'Show off my work or portfolio',
      'Collect leads or inquiries',
      'Something else',
    ] },
  { id: 'goal_detail', type: 'textarea', label: 'Anything to add on that?', showIf: (a) => a.main_goal === 'Something else' },

  { id: 'branding', type: 'group', label: 'Branding',
    help: 'Tell me everything about your visual style in one go. I will email a Google Drive link for logo files, photos, and any other assets.',
    fields: [
      { id: 'has_logo', type: 'choice', label: 'Do you have a logo?', required: true,
        options: ['Yes', 'I have one but it needs work', 'No, I need one'] },
      { id: 'colors_detail', type: 'textarea', label: 'Brand colors', help: 'Hex codes or color names. Leave blank if you want me to pick.' },
      { id: 'fonts', type: 'textarea', label: 'Any font preferences?', help: 'Fonts you currently use or like. Leave blank if you want me to pick.' },
      { id: 'vibe', type: 'multi', label: 'Pick the words that describe the vibe you want', help: 'Up to 3.', max: 3, fullWidth: true,
        options: [
          'Clean and modern', 'Warm and friendly', 'Bold and punchy', 'Classic and trustworthy',
          'Playful and casual', 'Premium and polished', 'Rugged and hands-on', 'Minimal and quiet',
        ] },
      { id: 'anti_vibe', type: 'textarea', label: 'Any design styles you do NOT want?', help: 'Example: Nothing that looks like a 2005 lawyer website.', fullWidth: true },
    ] },

  { id: 'inspiration', type: 'textarea', label: 'Link 1 to 3 websites you like and say why', help: 'Does not have to be in your industry.', required: true },
  { id: 'competitors', type: 'textarea', label: 'Link 2 or 3 direct competitors', help: 'What do they do well? What do they do poorly?' },

  { id: 'owns_domain', type: 'choice', label: 'What is your domain situation?', required: true,
    options: [
      'I own the domain I want to use, and I know the login',
      'I own the domain I want to use, but the login is with someone else (old developer, assistant, etc.)',
      'I own a domain, but I want to register a new one for this site',
      'I need to register a new domain',
    ] },
  { id: 'domain_registrar', type: 'text', label: 'Where is it registered? (GoDaddy, Namecheap, etc.)',
    showIf: (a) => a.owns_domain === 'I own the domain I want to use, and I know the login' || a.owns_domain === 'I own the domain I want to use, but the login is with someone else (old developer, assistant, etc.)' },
  { id: 'domain_picks', type: 'group', label: 'What domain name do you want?',
    help: 'Top pick plus 2 backups in case the first is already taken. Any extension works (.com, .net, .co, .io, etc.). Heads up: .ai domains are not included in the package because of the heavy registry markup. I will still register it for you if you want one, but you cover the cost.',
    showIf: (a) => a.owns_domain === 'I own a domain, but I want to register a new one for this site' || a.owns_domain === 'I need to register a new domain',
    fields: [
      { id: 'domain_pick_1', type: 'text', label: 'First choice', help: 'Example: studio925.design', required: true, fullWidth: true },
      { id: 'domain_pick_2', type: 'text', label: 'Backup 1', help: 'Example: studio925-ky.com' },
      { id: 'domain_pick_3', type: 'text', label: 'Backup 2', help: 'Example: karastudio925.com' },
    ] },
  { id: 'invoice_name', type: 'text', label: 'Name for the final invoice', help: 'After the build I will send a final invoice for the remaining balance. Use your personal name, or your business name if you want to deduct the build as a business expense.', required: true },
  { id: 'billing', type: 'group', label: 'Billing address',
    help: 'For the final invoice after the build. Your browser can autofill this in one tap.',
    fields: [
      { id: 'billing_street', type: 'text', label: 'Street address', required: true },
      { id: 'billing_city', type: 'text', label: 'City', required: true },
      { id: 'billing_state', type: 'text', label: 'State', required: true },
      { id: 'billing_zip', type: 'text', label: 'ZIP', required: true },
    ] },

  { id: 'deadline', type: 'textarea', label: 'Is there a hard deadline I should know about?', help: 'Event, seasonal launch, anything date-sensitive.' },
  { id: 'page_list', type: 'textarea', label: 'Any specific pages you want?', help: 'Home, About, Services, Contact are standard. Foundation includes up to 5 pages, Growth 10, Online Store 15. Additional pages are $200 each — list anything extra here and I will flag if it bumps your package. On Full Support hosting, I also add new SEO-driven pages over time at no extra cost.' },
  { id: 'anything_else', type: 'textarea', label: 'Anything else you want me to know?', help: 'Stories, concerns, past bad experiences with developers, big ideas. Nothing is off limits.' },

  { type: 'thankyou' },
];

const DRAFT_KEY = 'studio925_intake_draft_v1';
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
const SUBJECT_LINE = 'New Studio 925 Project Intake';

export const PACKAGE_VALUES = {
  foundation: 'Foundation | $900 | Up to 5 pages',
  growth: 'Growth | $1,800 | Up to 10 core pages',
  store: 'Online Store | $2,600 | Up to 15 core pages',
} as const;

export type LockedPackage = keyof typeof PACKAGE_VALUES;

const isAnswerable = (q: Question): q is TextQ | TextareaQ | ChoiceQ | MultiQ | GroupQ =>
  'id' in q && typeof (q as { id?: string }).id === 'string';

const isField = (q: Question | GroupField): q is TextQ | TextareaQ | ChoiceQ | MultiQ =>
  'type' in q && q.type !== 'group' && q.type !== 'welcome' && q.type !== 'thankyou';

const isGroup = (q: Question): q is GroupQ => 'type' in q && q.type === 'group';

function visibleGroupFields(group: GroupQ, answers: Answers): GroupField[] {
  return group.fields.filter((f) => !f.showIf || f.showIf(answers));
}

function validateField(f: GroupField, answers: Answers): string | null {
  const val = answers[f.id];
  if (f.required) {
    const empty = val === undefined || val === '' || (Array.isArray(val) && val.length === 0);
    if (empty) return `Please answer: ${f.label}`;
  }
  if (f.type === 'email' && typeof val === 'string' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    return `That does not look like a valid email.`;
  }
  if (f.type === 'tel' && typeof val === 'string' && val) {
    const digits = val.replace(/\D/g, '');
    if (digits.length !== 10) return `Please enter a 10-digit phone number.`;
  }
  return null;
}

const AUTOCOMPLETE_MAP: Record<string, string> = {
  full_name: 'name',
  invoice_name: 'name',
  email: 'email',
  phone: 'tel-national',
  business_name: 'organization',
  billing_street: 'address-line1',
  billing_city: 'address-level2',
  billing_state: 'address-level1',
  billing_zip: 'postal-code',
};

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function IntakeForm({ lockedPackage }: { lockedPackage?: LockedPackage } = {}) {
  const lockedPackageValue = lockedPackage ? PACKAGE_VALUES[lockedPackage] : null;
  const [answers, setAnswers] = useState<Answers>(() => (lockedPackageValue ? { package: lockedPackageValue } : {}));
  const [idx, setIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleQuestions = questions.filter((q) => {
    if (lockedPackageValue && 'id' in q && (q as { id?: string }).id === 'package') return false;
    return !('showIf' in q) || !q.showIf || q.showIf(answers);
  });
  const safeIdx = Math.min(idx, visibleQuestions.length - 1);
  const current = visibleQuestions[safeIdx];
  const totalAnswerable = visibleQuestions.filter(isAnswerable).length;
  const answeredCount = visibleQuestions.slice(0, safeIdx).filter(isAnswerable).length;
  const progress = visibleQuestions.length > 1 ? (safeIdx / (visibleQuestions.length - 1)) * 100 : 0;

  const saveDraft = useCallback((nextAnswers: Answers, nextIdx: number) => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers: nextAnswers, idx: nextIdx, savedAt: Date.now() }));
    } catch {}
  }, []);

  const scheduleSave = useCallback((nextAnswers: Answers, nextIdx: number) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveDraft(nextAnswers, nextIdx), 400);
  }, [saveDraft]);

  const clearDraft = useCallback(() => {
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { answers?: Answers; idx?: number };
      if (parsed?.answers && Object.keys(parsed.answers).length > 0) {
        setAnswers(lockedPackageValue ? { ...parsed.answers, package: lockedPackageValue } : parsed.answers);
        setIdx(Math.min(parsed.idx ?? 0, questions.length - 1));
      }
    } catch {}
  }, [lockedPackageValue]);

  useEffect(() => {
    if (fieldRef.current) fieldRef.current.focus();
  }, [safeIdx]);

  const updateAnswer = useCallback((id: string, value: string | string[]) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      scheduleSave(next, idx);
      return next;
    });
    setError(null);
  }, [idx, scheduleSave]);

  const goNext = useCallback(() => {
    if (isGroup(current)) {
      const fields = visibleGroupFields(current, answers);
      for (const f of fields) {
        const err = validateField(f, answers);
        if (err) { setError(err); return; }
      }
    } else if (isAnswerable(current)) {
      const id = current.id;
      const val = answers[id];
      if ((current as TextQ | TextareaQ | ChoiceQ | MultiQ).required) {
        const empty = val === undefined || val === '' || (Array.isArray(val) && val.length === 0);
        if (empty) {
          setError('This question is required.');
          return;
        }
      }
      if (current.type === 'email' && typeof val === 'string' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setError('That does not look like a valid email.');
        return;
      }
      if (current.type === 'tel' && typeof val === 'string' && val) {
        const digits = val.replace(/\D/g, '');
        if (digits.length !== 10) {
          setError('Please enter a 10-digit phone number.');
          return;
        }
      }
    }
    setError(null);
    setIdx((i) => {
      const next = Math.min(i + 1, visibleQuestions.length - 1);
      saveDraft(answers, next);
      return next;
    });
  }, [current, answers, visibleQuestions.length, saveDraft]);

  const goBack = useCallback(() => {
    setError(null);
    setIdx((i) => {
      const next = Math.max(0, i - 1);
      saveDraft(answers, next);
      return next;
    });
  }, [answers, saveDraft]);

  const selectChoice = useCallback((value: string) => {
    if (!isAnswerable(current) || current.type !== 'choice') return;
    updateAnswer(current.id, value);
    setTimeout(() => {
      setIdx((i) => {
        const next = Math.min(i + 1, visibleQuestions.length - 1);
        saveDraft({ ...answers, [current.id]: value }, next);
        return next;
      });
    }, 180);
  }, [current, updateAnswer, answers, visibleQuestions.length, saveDraft]);

  const toggleMulti = useCallback((value: string) => {
    if (!isAnswerable(current) || current.type !== 'multi') return;
    const currentVal = (answers[current.id] as string[] | undefined) ?? [];
    let next: string[];
    if (currentVal.includes(value)) {
      next = currentVal.filter((v) => v !== value);
    } else if (currentVal.length < current.max) {
      next = [...currentVal, value];
    } else {
      return;
    }
    updateAnswer(current.id, next);
  }, [current, answers, updateAnswer]);

  const toggleMultiField = useCallback((fieldId: string, value: string, max: number) => {
    const cur = (answers[fieldId] as string[] | undefined) ?? [];
    let next: string[];
    if (cur.includes(value)) next = cur.filter((v) => v !== value);
    else if (cur.length < max) next = [...cur, value];
    else return;
    updateAnswer(fieldId, next);
  }, [answers, updateAnswer]);

  function buildStrategyUrl(clean: Record<string, string>): string {
    const json = JSON.stringify(clean);
    const b64 = typeof window !== 'undefined' ? btoa(unescape(encodeURIComponent(json))) : '';
    return typeof window !== 'undefined'
      ? new URL('/project-strategy.html', window.location.origin).toString() + '#data=' + b64
      : '';
  }

  const submitForm = useCallback(async () => {
    setSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', SUBJECT_LINE);
    formData.append('from_name', 'Studio 925 | New Intake');
    if (typeof answers.email === 'string') formData.append('replyto', answers.email);

    const appendClean = (id: string, v: string | string[] | undefined, target: Record<string, string>) => {
      if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) return;
      target[id] = Array.isArray(v) ? v.join(', ') : v;
    };
    const appendLabeled = (label: string, v: string | string[] | undefined) => {
      if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) return;
      formData.append(label.replace(/\?$/, ''), Array.isArray(v) ? v.join(', ') : v);
    };

    const clean: Record<string, string> = {};
    questions.forEach((q) => {
      if (isGroup(q)) {
        q.fields.forEach((f) => appendClean(f.id, answers[f.id], clean));
        return;
      }
      if (!isAnswerable(q)) return;
      appendClean(q.id, answers[q.id], clean);
    });
    formData.append('Pre-filled Strategy Doc (click to review)', buildStrategyUrl(clean));

    questions.forEach((q) => {
      if (isGroup(q)) {
        q.fields.forEach((f) => appendLabeled(f.label, answers[f.id]));
        return;
      }
      if (!isAnswerable(q)) return;
      appendLabeled(q.label, answers[q.id]);
    });

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        clearDraft();
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please try again, or email the info directly.');
      }
    } catch {
      setSubmitError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [answers, clearDraft]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (submitted) return;
      const active = document.activeElement as HTMLElement | null;
      const inTextarea = active?.tagName === 'TEXTAREA';

      if (e.key === 'Enter' && !inTextarea) {
        e.preventDefault();
        if (!current) return;
        if ('type' in current && current.type === 'thankyou') { submitForm(); return; }
        goNext();
        return;
      }
      if (e.key === 'Backspace' && active?.tagName !== 'INPUT' && active?.tagName !== 'TEXTAREA') {
        goBack();
        return;
      }
      if (isAnswerable(current) && !isGroup(current) && (current.type === 'choice' || current.type === 'multi') && /^[a-zA-Z]$/.test(e.key)) {
        const i = e.key.toUpperCase().charCodeAt(0) - 65;
        if (current.options[i]) {
          if (current.type === 'choice') selectChoice(current.options[i]);
          else toggleMulti(current.options[i]);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, goNext, goBack, selectChoice, toggleMulti, submitForm, submitted]);

  const counterLabel = isAnswerable(current) ? `${answeredCount + 1} / ${totalAnswerable}` : '';

  return (
    <div className="fixed inset-0 bg-brand-warm text-brand-primary overflow-y-auto">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-primary/10 z-50">
        <div
          className="h-full bg-brand-accent transition-[width] duration-300"
          style={{ width: `${submitted ? 100 : progress}%` }}
        />
      </div>

      {/* Top fade — hides content scrolling behind header */}
      <div
        className="fixed top-0 left-0 right-0 h-16 z-30 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--color-brand-warm, #f9f7f5) 70%, transparent)' }}
      />
      {/* Bottom fade — hides content scrolling behind the action bar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-brand-warm, #f9f7f5) 70%, transparent)' }}
      />

      {/* Header */}
      <div className="fixed top-3 left-4 md:top-4 md:left-6 z-40 flex items-center">
        <Link href="/" aria-label="Studio 925 home" className="inline-flex items-center">
          <img src="/logo.webp" alt="Studio 925" width={162} height={56} className="h-7 md:h-9 w-auto" />
        </Link>
      </div>

      {/* Counter */}
      <div className="fixed top-3.5 right-4 md:top-5 md:right-6 z-40 text-xs text-brand-primary/55 tabular-nums">
        {submitted ? 'Done' : counterLabel}
      </div>

      {/* Stage */}
      <div className="min-h-screen w-full flex items-center justify-center px-5 md:px-6 pt-20 pb-32">
        <div className={`w-full ${current && isGroup(current) ? 'max-w-4xl' : 'max-w-2xl'}`}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <FinalScreen key="final" />
            ) : (
              <motion.div
                key={safeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {current && renderQuestion(current, {
                  answers,
                  answeredCount,
                  error,
                  totalAnswerable,
                  updateAnswer,
                  selectChoice,
                  toggleMulti,
                  toggleMultiField,
                  fieldRef,
                })}
              </motion.div>
            )}
          </AnimatePresence>
          {!submitted && current && (
            <ActionBar
              current={current}
              isFirst={safeIdx === 0}
              submitting={submitting}
              submitError={submitError}
              onBack={goBack}
              onNext={goNext}
              onSubmit={submitForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type RenderCtx = {
  answers: Answers;
  answeredCount: number;
  error: string | null;
  totalAnswerable: number;
  updateAnswer: (id: string, value: string | string[]) => void;
  selectChoice: (value: string) => void;
  toggleMulti: (value: string) => void;
  toggleMultiField: (fieldId: string, value: string, max: number) => void;
  fieldRef: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
};

function renderQuestion(q: Question, ctx: RenderCtx) {
  if ('type' in q && q.type === 'welcome') {
    return (
      <div>
        <h1 className="font-serif font-bold text-4xl md:text-6xl leading-[1.05] mb-4">{q.title}</h1>
        <p className="text-[17px] text-brand-primary/60 leading-relaxed mb-6">{q.body}</p>
        <div className="flex gap-5 text-xs text-brand-primary/55">
          <span>{ctx.totalAnswerable} questions</span>
          <span>About 10 to 15 minutes</span>
        </div>
      </div>
    );
  }
  if ('type' in q && q.type === 'thankyou') {
    return (
      <div>
        <h1 className="font-serif font-bold text-4xl md:text-6xl leading-[1.05] mb-4">Ready to send.</h1>
        <p className="text-[17px] text-brand-primary/60 leading-relaxed mb-6">
          Click submit and everything lands in my inbox. I will review and send your Project Strategy Document within one business day. If anything raises a question, I will reach out.
        </p>
      </div>
    );
  }
  if ('type' in q && q.type === 'group') {
    return <GroupScreen q={q} ctx={ctx} />;
  }
  return <NormalQuestion q={q} ctx={ctx} />;
}

function GroupScreen({ q, ctx }: { q: GroupQ; ctx: RenderCtx }) {
  const qNum = ctx.answeredCount + 1;
  const visible = q.fields.filter((f) => !f.showIf || f.showIf(ctx.answers));
  const firstRef = ctx.fieldRef;

  return (
    <div>
      <div className="inline-flex items-center gap-1.5 text-[13px] text-brand-accent font-semibold mb-3">
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5"><circle cx="5" cy="5" r="4" fill="currentColor" /></svg>
        Question {qNum}
      </div>
      <div className="font-serif font-bold text-[clamp(22px,4vw,34px)] leading-tight mb-2.5">{q.label}</div>
      {q.help && <div className="text-[15px] text-brand-primary/55 leading-relaxed mb-6">{q.help}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {visible.map((f, idx) => (
          <div key={f.id} className={f.fullWidth ? 'md:col-span-2' : ''}>
            <GroupField
              field={f}
              value={ctx.answers[f.id]}
              onUpdate={(v) => ctx.updateAnswer(f.id, v)}
              onToggleMulti={(v) => f.type === 'multi' && ctx.toggleMultiField(f.id, v, f.max)}
              firstRef={idx === 0 ? firstRef : undefined}
            />
          </div>
        ))}
      </div>

      {ctx.error && <div className="text-sm text-red-600 mt-3">{ctx.error}</div>}
    </div>
  );
}

function GroupField({
  field, value, onUpdate, onToggleMulti, firstRef,
}: {
  field: GroupField;
  value: string | string[] | undefined;
  onUpdate: (v: string | string[]) => void;
  onToggleMulti: (v: string) => void;
  firstRef?: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}) {
  return (
    <div>
      <div className="text-[15px] font-semibold text-brand-primary mb-1.5">
        {field.label}
        {!field.required && <span className="text-brand-primary/55 font-normal ml-1.5 text-xs">(optional)</span>}
      </div>
      {field.help && <div className="text-[13px] text-brand-primary/55 leading-relaxed mb-3">{field.help}</div>}

      {field.type === 'textarea' ? (
        <textarea
          ref={firstRef as React.RefObject<HTMLTextAreaElement> | undefined}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Type here..."
          autoComplete={AUTOCOMPLETE_MAP[field.id] || 'off'}
          className="w-full min-h-[80px] p-3 text-[15px] bg-white border-[1.5px] border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10 resize-y"
        />
      ) : field.type === 'choice' ? (
        <ChoiceList options={field.options} selected={typeof value === 'string' ? value : ''} onSelect={(v) => onUpdate(v)} compact />
      ) : field.type === 'multi' ? (
        <MultiList options={field.options} selected={Array.isArray(value) ? value : []} max={field.max} onToggle={onToggleMulti} compact />
      ) : (
        <input
          ref={firstRef as React.RefObject<HTMLInputElement> | undefined}
          type={field.type}
          inputMode={field.type === 'tel' ? 'numeric' : undefined}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onUpdate(field.type === 'tel' ? formatPhone(e.target.value) : e.target.value)}
          placeholder={field.type === 'tel' ? '(270) 555-1234' : 'Type here...'}
          autoComplete={AUTOCOMPLETE_MAP[field.id] || 'off'}
          className="w-full p-3 text-[15px] bg-white border-[1.5px] border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10"
        />
      )}
    </div>
  );
}

function NormalQuestion({ q, ctx }: { q: TextQ | TextareaQ | ChoiceQ | MultiQ; ctx: RenderCtx }) {
  const qNum = ctx.answeredCount + 1;
  const value = ctx.answers[q.id];

  return (
    <div>
      <div className="inline-flex items-center gap-1.5 text-[13px] text-brand-accent font-semibold mb-3">
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5"><circle cx="5" cy="5" r="4" fill="currentColor" /></svg>
        Question {qNum}{!q.required && <span className="text-brand-primary/55 font-normal ml-1">(optional)</span>}
      </div>
      <div className="font-serif font-bold text-[clamp(22px,4vw,34px)] leading-tight mb-2.5">{q.label}</div>
      {q.help && <div className="text-[15px] text-brand-primary/55 leading-relaxed mb-7">{q.help}</div>}
      {!q.help && <div className="mb-4" />}

      {q.type === 'textarea' ? (
        <textarea
          ref={ctx.fieldRef as React.RefObject<HTMLTextAreaElement>}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => ctx.updateAnswer(q.id, e.target.value)}
          placeholder="Type your answer here..."
          autoComplete={AUTOCOMPLETE_MAP[q.id] || 'off'}
          className="w-full min-h-[120px] p-3.5 text-[17px] bg-white border-[1.5px] border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10 resize-y"
        />
      ) : q.type === 'choice' ? (
        <ChoiceList options={q.options} selected={typeof value === 'string' ? value : ''} onSelect={ctx.selectChoice} />
      ) : q.type === 'multi' ? (
        <MultiList options={q.options} selected={Array.isArray(value) ? value : []} max={q.max} onToggle={ctx.toggleMulti} />
      ) : (
        <input
          ref={ctx.fieldRef as React.RefObject<HTMLInputElement>}
          type={q.type}
          inputMode={q.type === 'tel' ? 'numeric' : undefined}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => ctx.updateAnswer(q.id, q.type === 'tel' ? formatPhone(e.target.value) : e.target.value)}
          placeholder={q.type === 'tel' ? '(270) 555-1234' : 'Type your answer here...'}
          autoComplete={AUTOCOMPLETE_MAP[q.id] || 'off'}
          className="w-full p-3.5 text-[17px] bg-white border-[1.5px] border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10"
        />
      )}

      {ctx.error && <div className="text-sm text-red-600 mt-2">{ctx.error}</div>}
    </div>
  );
}

function ChoiceList({ options, selected, onSelect, compact = false }: { options: string[]; selected: string; onSelect: (v: string) => void; compact?: boolean }) {
  const wrap = compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-2' : 'flex flex-col gap-2.5';
  const btnBase = compact ? 'p-2.5 text-[14px]' : 'p-3.5 text-[16px]';
  return (
    <div className={wrap}>
      {options.map((opt, i) => {
        const isSel = selected === opt;
        const keyLabel = i < 26 ? String.fromCharCode(65 + i) : '';
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`flex items-center gap-3 ${btnBase} bg-white border-[1.5px] rounded-xl text-left transition-colors select-none ${
              isSel
                ? 'border-brand-accent bg-brand-accent/[0.06]'
                : 'border-brand-primary/15 hover:border-brand-primary'
            }`}
          >
            {!compact && (
              <span className={`inline-flex items-center justify-center w-6 h-6 border-[1.5px] rounded-md text-xs font-semibold shrink-0 ${
                isSel ? 'bg-brand-accent border-brand-accent text-white' : 'bg-brand-warm border-brand-primary/15 text-brand-primary/55'
              }`}>{keyLabel}</span>
            )}
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

function MultiList({ options, selected, max, onToggle, compact = false }: { options: string[]; selected: string[]; max: number; onToggle: (v: string) => void; compact?: boolean }) {
  const wrap = compact ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2' : 'flex flex-col gap-2.5';
  const btnBase = compact ? 'p-2.5 text-[13px]' : 'p-3.5 text-[16px]';
  return (
    <>
      <div className={wrap}>
        {options.map((opt, i) => {
          const isSel = selected.includes(opt);
          const keyLabel = i < 26 ? String.fromCharCode(65 + i) : '';
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={`flex items-center gap-3 ${btnBase} bg-white border-[1.5px] rounded-xl text-left transition-colors select-none ${
                isSel
                  ? 'border-brand-accent bg-brand-accent/[0.06]'
                  : 'border-brand-primary/15 hover:border-brand-primary'
              }`}
            >
              {!compact && (
                <span className={`inline-flex items-center justify-center w-6 h-6 border-[1.5px] rounded-md text-xs font-semibold shrink-0 ${
                  isSel ? 'bg-brand-accent border-brand-accent text-white' : 'bg-brand-warm border-brand-primary/15 text-brand-primary/55'
                }`}>{keyLabel}</span>
              )}
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      <div className="text-[13px] text-brand-primary/55 mt-2.5">Pick up to {max}. Click again to deselect.</div>
    </>
  );
}

function ActionBar({
  current, isFirst, submitting, submitError, onBack, onNext, onSubmit,
}: {
  current: Question;
  isFirst: boolean;
  submitting: boolean;
  submitError: string | null;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  const isThankYou = 'type' in current && current.type === 'thankyou';
  const isWelcome = 'type' in current && current.type === 'welcome';
  const nextLabel = isWelcome ? 'Start →' : 'Continue →';

  return (
    <div className="fixed bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center w-[calc(100%-2rem)] md:w-auto justify-between md:justify-center">
      {submitError && (
        <div className="absolute -top-10 left-0 right-0 text-center text-sm text-red-600">{submitError}</div>
      )}

      {!isFirst && (
        <button type="button" onClick={onBack} className="text-sm font-semibold text-brand-primary/55 hover:text-brand-primary px-3 py-2.5">
          ← Back
        </button>
      )}

      {isThankYou ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-brand-accent text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? (
            <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
          ) : 'Submit intake'}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-brand-accent text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-accent/90 transition-colors"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}

function FinalScreen() {
  return (
    <motion.div
      key="final"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl text-center"
    >
      <h1 className="font-serif font-bold text-4xl md:text-6xl leading-[1.05] mb-4">That is it.</h1>
      <p className="text-[17px] text-brand-primary/60 leading-relaxed mb-8">
        Your intake is in. Check your inbox for a confirmation, and expect your Project Strategy Document within one business day.
      </p>
      <div className="bg-white border border-brand-primary/10 rounded-2xl p-6 text-left">
        <strong className="block mb-2 text-sm">What happens next</strong>
        <p className="text-sm text-brand-primary/60">
          Within one business day, you will get an email from me with your Project Strategy Document and a Google Drive link. Drop your logo, photos, and any drafts into the Drive folder when you get it. Every asset saved in advance shaves time off the build.
        </p>
      </div>
    </motion.div>
  );
}
