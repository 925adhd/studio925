'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Answers = Record<string, string | string[]>;

type ShowIf = (a: Answers) => boolean;

type WelcomeQ = { type: 'welcome'; title: string; body: string };
type SectionQ = { section: string; showIf?: ShowIf };
type ThankYouQ = { type: 'thankyou' };
type InputType = 'text' | 'email' | 'tel' | 'url';
type TextQ = { id: string; type: InputType; label: string; help?: string; required?: boolean; showIf?: ShowIf };
type TextareaQ = { id: string; type: 'textarea'; label: string; help?: string; required?: boolean; showIf?: ShowIf };
type ChoiceQ = { id: string; type: 'choice'; label: string; help?: string; required?: boolean; options: string[]; showIf?: ShowIf };
type MultiQ = { id: string; type: 'multi'; label: string; help?: string; required?: boolean; max: number; options: string[]; showIf?: ShowIf };

type Question = WelcomeQ | SectionQ | ThankYouQ | TextQ | TextareaQ | ChoiceQ | MultiQ;

const hasOnline = (a: Answers) => {
  const v = a.has_presence;
  return typeof v === 'string' && v !== 'Neither' && v !== 'I have a site but want fresh copy' && v !== '';
};

const questions: Question[] = [
  { type: 'welcome', title: "Let's get your project rolling.",
    body: "If you already have a website or Facebook page, I pull what I can from there before you open this form, so this only asks about the gaps I cannot grab on my own. No online presence yet? Totally fine, I will just ask a few extra questions about the business." },

  { section: 'The basics' },
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
    options: ['A website', 'A Facebook page', 'Both a website and Facebook page', 'I have a site but want fresh copy', 'Neither'] },
  { id: 'current_url', type: 'url', label: 'Website URL', required: true,
    showIf: (a) => a.has_presence === 'A website' || a.has_presence === 'Both a website and Facebook page' || a.has_presence === 'I have a site but want fresh copy' },
  { id: 'facebook_page', type: 'text', label: 'Facebook page URL', required: true,
    showIf: (a) => a.has_presence === 'A Facebook page' || a.has_presence === 'Both a website and Facebook page' },

  { section: 'About your business', showIf: (a) => !hasOnline(a) },
  { id: 'business_name', type: 'text', label: 'What is the name of your business?', required: true, showIf: (a) => !hasOnline(a) },
  { id: 'location', type: 'text', label: 'What city and state is your business based in?', help: 'This helps with local SEO.', required: true, showIf: (a) => !hasOnline(a) },
  { id: 'one_line', type: 'textarea', label: 'In one sentence, what does your business do?', help: 'Pretend you are telling a neighbor. Plain language is best.', required: true, showIf: (a) => !hasOnline(a) },
  { id: 'services', type: 'textarea', label: 'List the services or products you offer', help: 'One per line is fine. Do not worry about formatting.', required: true, showIf: (a) => !hasOnline(a) },

  { section: 'Strategy' },
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

  { section: 'Branding' },
  { id: 'has_logo', type: 'choice', label: 'Do you have a logo?', required: true,
    options: ['Yes', 'I have one but it needs work', 'No, I need one'] },
  { id: 'has_colors', type: 'choice', label: 'Do you have brand colors?',
    options: ['Yes', 'I have a rough idea', 'No, pick for me'] },
  { id: 'colors_detail', type: 'textarea', label: 'List colors, hex codes, or color names',
    showIf: (a) => a.has_colors === 'Yes' || a.has_colors === 'I have a rough idea' },
  { id: 'vibe', type: 'multi', label: 'Pick the words that describe the vibe you want', help: 'Select up to 3.', max: 3,
    options: [
      'Clean and modern', 'Warm and friendly', 'Bold and punchy', 'Classic and trustworthy',
      'Playful and casual', 'Premium and polished', 'Rugged and hands-on', 'Minimal and quiet',
    ] },
  { id: 'anti_vibe', type: 'textarea', label: 'Any design styles you do NOT want?', help: 'Example: Nothing that looks like a 2005 lawyer website.' },

  { section: 'Inspiration and competitors' },
  { id: 'inspiration', type: 'textarea', label: 'Link 1 to 3 websites you like and say why', help: 'Does not have to be in your industry.', required: true },
  { id: 'competitors', type: 'textarea', label: 'Link 2 or 3 direct competitors', help: 'What do they do well? What do they do poorly?' },

  { section: 'Domain and hosting' },
  { id: 'owns_domain', type: 'choice', label: 'Do you already own your domain name?', required: true,
    options: ['Yes, and I know the login', 'Yes, but I need help finding the login', 'No, I need one registered'] },
  { id: 'domain_registrar', type: 'text', label: 'Where is it registered? (GoDaddy, Namecheap, etc.)',
    showIf: (a) => typeof a.owns_domain === 'string' && a.owns_domain.startsWith('Yes') },
  { id: 'domain_name', type: 'text', label: 'What domain do you want for the site?', help: 'Example: studio925.design', required: true },
  { id: 'existing_hosting', type: 'textarea', label: 'Any existing hosting you want to keep?', help: 'If yes, tell me where it is hosted. If no, leave blank and I will set up fresh hosting.' },
  { id: 'has_email', type: 'choice', label: 'Do you have a business email like you@yourbusiness.com?',
    options: ['Yes', 'No, I want one', 'No, and I do not need one'] },

  { section: 'Billing' },
  { id: 'invoice_name', type: 'text', label: 'Name on the invoice', help: 'Your name or business name.', required: true },
  { id: 'billing_address', type: 'textarea', label: 'Billing address', required: true },
  { id: 'tax_notes', type: 'textarea', label: 'Any tax or invoicing notes?', help: 'Optional. Tell me if you need a W-9, if the business is an LLC or nonprofit, or anything else about invoicing.' },

  { section: 'Last few things' },
  { id: 'deadline', type: 'textarea', label: 'Is there a hard deadline I should know about?', help: 'Event, seasonal launch, anything date-sensitive.' },
  { id: 'approvers', type: 'textarea', label: 'Who else is involved in approving this website?', help: 'Tell me upfront so we do not get to Week 3 and have a new person weighing in.' },
  { id: 'page_list', type: 'textarea', label: 'Any specific pages you want?', help: 'Optional. Home, About, Services, Contact are standard. Add anything else you need.' },
  { id: 'anything_else', type: 'textarea', label: 'Anything else you want me to know?', help: 'Stories, concerns, past bad experiences with developers, big ideas. Nothing is off limits.' },

  { type: 'thankyou' },
];

const DRAFT_KEY = 'studio925_intake_draft_v1';
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
const SUBJECT_LINE = 'New Studio 925 Project Intake';

const isAnswerable = (q: Question): q is TextQ | TextareaQ | ChoiceQ | MultiQ =>
  'id' in q && typeof (q as { id?: string }).id === 'string';

const isSection = (q: Question): q is SectionQ => 'section' in q;

function formatRelativeTime(ts: number): string {
  const mins = Math.round((Date.now() - ts) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}

export default function IntakeForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [idx, setIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [resumedLabel, setResumedLabel] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleQuestions = questions.filter((q) => !('showIf' in q) || !q.showIf || q.showIf(answers));
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
      const parsed = JSON.parse(raw) as { answers?: Answers; idx?: number; savedAt?: number };
      if (parsed?.answers && Object.keys(parsed.answers).length > 0) {
        setAnswers(parsed.answers);
        setIdx(Math.min(parsed.idx ?? 0, questions.length - 1));
        if (parsed.savedAt) setResumedLabel(`Resumed · ${formatRelativeTime(parsed.savedAt)}`);
      }
    } catch {}
  }, []);

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
    if (isAnswerable(current)) {
      const id = current.id;
      const val = answers[id];
      if (current.required) {
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

    const clean: Record<string, string> = {};
    questions.forEach((q) => {
      if (!isAnswerable(q)) return;
      const v = answers[q.id];
      if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) return;
      clean[q.id] = Array.isArray(v) ? v.join(', ') : v;
    });
    formData.append('Pre-filled Strategy Doc (click to review)', buildStrategyUrl(clean));

    questions.forEach((q) => {
      if (!isAnswerable(q)) return;
      const v = answers[q.id];
      if (v === undefined || v === '' || (Array.isArray(v) && v.length === 0)) return;
      const label = q.label.replace(/\?$/, '');
      formData.append(label, Array.isArray(v) ? v.join(', ') : v);
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
      if (isAnswerable(current) && (current.type === 'choice' || current.type === 'multi') && /^[a-zA-Z]$/.test(e.key)) {
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
    <div className="fixed inset-0 bg-brand-warm text-brand-primary overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-primary/10 z-50">
        <div
          className="h-full bg-brand-accent transition-[width] duration-300"
          style={{ width: `${submitted ? 100 : progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="fixed top-3 left-4 md:top-4 md:left-6 z-40 flex items-center gap-2.5 text-sm font-semibold">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
        Studio 925
        {resumedLabel && !submitted && (
          <span className="hidden md:inline-block text-[11px] font-medium text-brand-accent px-2 py-0.5 bg-brand-accent/10 border border-brand-accent/25 rounded-full ml-1">
            {resumedLabel}
          </span>
        )}
      </div>

      {/* Counter */}
      <div className="fixed top-3.5 right-4 md:top-5 md:right-6 z-40 text-xs text-brand-primary/55 tabular-nums">
        {submitted ? 'Done' : counterLabel}
      </div>

      {/* Stage */}
      <div className="h-screen w-full flex items-center justify-center px-5 md:px-6 pt-20 pb-32">
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
              className="w-full max-w-2xl"
            >
              {current && renderQuestion(current, {
                answers,
                answeredCount,
                error,
                totalAnswerable,
                updateAnswer,
                selectChoice,
                toggleMulti,
                fieldRef,
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action bar */}
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
  if (isSection(q)) {
    return (
      <div>
        <span className="inline-block px-2.5 py-1 bg-brand-primary/5 rounded-full text-xs text-brand-primary/55 font-medium mb-4">Next section</span>
        <h1 className="font-serif font-bold text-4xl md:text-6xl leading-[1.05]">{q.section}</h1>
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
        <div className="bg-white border border-brand-primary/10 rounded-2xl p-6">
          <strong className="block mb-2 text-sm">While you wait</strong>
          <p className="text-sm text-brand-primary/60">
            Start uploading your logo, photos, and any drafts to your shared folder. Every asset saved in advance shaves time off the build.
          </p>
        </div>
      </div>
    );
  }
  return <NormalQuestion q={q} ctx={ctx} />;
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
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => ctx.updateAnswer(q.id, e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-3.5 text-[17px] bg-white border-[1.5px] border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10"
        />
      )}

      {ctx.error && <div className="text-sm text-red-600 mt-2">{ctx.error}</div>}
    </div>
  );
}

function ChoiceList({ options, selected, onSelect }: { options: string[]; selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt, i) => {
        const isSel = selected === opt;
        const keyLabel = i < 26 ? String.fromCharCode(65 + i) : '';
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`flex items-center gap-3 p-3.5 bg-white border-[1.5px] rounded-xl text-left text-[16px] transition-colors select-none ${
              isSel
                ? 'border-brand-accent bg-brand-accent/[0.06]'
                : 'border-brand-primary/15 hover:border-brand-primary'
            }`}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 border-[1.5px] rounded-md text-xs font-semibold shrink-0 ${
              isSel ? 'bg-brand-accent border-brand-accent text-white' : 'bg-brand-warm border-brand-primary/15 text-brand-primary/55'
            }`}>{keyLabel}</span>
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

function MultiList({ options, selected, max, onToggle }: { options: string[]; selected: string[]; max: number; onToggle: (v: string) => void }) {
  return (
    <>
      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => {
          const isSel = selected.includes(opt);
          const keyLabel = i < 26 ? String.fromCharCode(65 + i) : '';
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={`flex items-center gap-3 p-3.5 bg-white border-[1.5px] rounded-xl text-left text-[16px] transition-colors select-none ${
                isSel
                  ? 'border-brand-accent bg-brand-accent/[0.06]'
                  : 'border-brand-primary/15 hover:border-brand-primary'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-6 h-6 border-[1.5px] rounded-md text-xs font-semibold shrink-0 ${
                isSel ? 'bg-brand-accent border-brand-accent text-white' : 'bg-brand-warm border-brand-primary/15 text-brand-primary/55'
              }`}>{keyLabel}</span>
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
  const isSectionDivider = isSection(current);
  const nextLabel = isWelcome ? 'Start →' : (isAnswerable(current) && current.type === 'choice' ? 'Continue →' : isSectionDivider ? 'Continue →' : 'OK →');

  return (
    <div className="fixed bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center w-[calc(100%-2rem)] md:w-auto justify-between md:justify-center">
      {submitError && (
        <div className="absolute -top-10 left-0 right-0 text-center text-sm text-red-600">{submitError}</div>
      )}

      {!isFirst && !isThankYou && (
        <button type="button" onClick={onBack} className="text-sm font-semibold text-brand-primary/55 hover:text-brand-primary px-3 py-2.5">
          ← Back
        </button>
      )}

      {!isFirst && isThankYou && (
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

      <span className="hidden md:inline-flex items-center gap-1 text-xs text-brand-primary/55 ml-1">
        press <kbd className="inline-block px-1.5 py-0.5 bg-white border border-brand-primary/15 rounded text-[11px]">Enter</kbd>
      </span>
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
        <strong className="block mb-2 text-sm">Next step</strong>
        <p className="text-sm text-brand-primary/60">
          Start uploading your logo, photos, and any text drafts to your shared folder. Every asset saved in advance shaves time off the build.
        </p>
      </div>
    </motion.div>
  );
}
