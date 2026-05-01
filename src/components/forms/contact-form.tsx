"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const inputClass =
  "mt-2 h-11 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-kyptonix-cyan";

const textareaClass =
  "mt-2 min-h-36 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-kyptonix-cyan";

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Add a subject.";
    if (values.message.trim().length < 20) nextErrors.message = "Message should be at least 20 characters.";

    return nextErrors;
  }, [values]);

  function updateValue(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);

    if (Object.keys(errors).length > 0) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GlassCard className="p-6">
        <div className="rounded-md border border-kyptonix-green/30 bg-kyptonix-green/10 p-5">
          <CheckCircle2 className="h-7 w-7 text-kyptonix-green" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-white">Message received.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Thanks for reaching out. The live delivery version can route this request to email, CRM,
            CAPTCHA, and analytics events.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
            onClick={() => {
              setValues(initialValues);
              setSubmitted(false);
              setAttemptedSubmit(false);
            }}
          >
            Send another message
          </button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6">
      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldError label="Name" error={attemptedSubmit ? errors.name : undefined}>
            <input
              aria-invalid={Boolean(attemptedSubmit && errors.name)}
              className={cn(inputClass, attemptedSubmit && errors.name && "border-red-400")}
              placeholder="Your name"
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
            />
          </FieldError>
          <FieldError label="Email" error={attemptedSubmit ? errors.email : undefined}>
            <input
              aria-invalid={Boolean(attemptedSubmit && errors.email)}
              className={cn(inputClass, attemptedSubmit && errors.email && "border-red-400")}
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
            />
          </FieldError>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FieldError label="Phone">
            <input
              className={inputClass}
              placeholder="+254..."
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
            />
          </FieldError>
          <FieldError label="Company">
            <input
              className={inputClass}
              placeholder="Company name"
              value={values.company}
              onChange={(event) => updateValue("company", event.target.value)}
            />
          </FieldError>
        </div>

        <FieldError label="Subject" error={attemptedSubmit ? errors.subject : undefined}>
          <input
            aria-invalid={Boolean(attemptedSubmit && errors.subject)}
            className={cn(inputClass, attemptedSubmit && errors.subject && "border-red-400")}
            placeholder="How can we help?"
            value={values.subject}
            onChange={(event) => updateValue("subject", event.target.value)}
          />
        </FieldError>

        <FieldError label="Message" error={attemptedSubmit ? errors.message : undefined}>
          <textarea
            aria-invalid={Boolean(attemptedSubmit && errors.message)}
            className={cn(textareaClass, attemptedSubmit && errors.message && "border-red-400")}
            placeholder="Tell us about your project or support need."
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
          />
        </FieldError>

        <button
          type="submit"
          className="mt-2 inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-ink-950 shadow-glow-blue transition hover:bg-slate-200"
        >
          Submit Request
          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </GlassCard>
  );
}

function FieldError({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="text-sm font-medium text-slate-300">
      {label}
      {children}
      {error ? <span className="mt-2 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
