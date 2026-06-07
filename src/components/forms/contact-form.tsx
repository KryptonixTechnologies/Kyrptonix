"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { submitToWeb3Forms } from "@/lib/web3forms";

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
  "mt-2 h-11 w-full rounded-md border border-ink-950/10 bg-white px-3 text-sm text-ink-950 outline-none transition placeholder:text-slate-500 focus:border-kryptonix-cyan";

const textareaClass =
  "mt-2 min-h-36 w-full rounded-md border border-ink-950/10 bg-white px-3 py-3 text-sm text-ink-950 outline-none transition placeholder:text-slate-500 focus:border-kryptonix-cyan";

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitError("");

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      await submitToWeb3Forms({
        subject: `Website contact: ${values.subject}`,
        from_name: values.name,
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        inquiry_subject: values.subject,
        message: values.message,
        form_name: "Kryptonix contact form",
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Your message could not be sent right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <GlassCard className="p-6">
        <div className="rounded-md border border-kryptonix-green/30 bg-kryptonix-green/10 p-5">
          <CheckCircle2 className="h-7 w-7 text-kryptonix-green" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-white">Message sent successfully.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Thanks for reaching out. Your message has been sent to Kryptonix Technologies, and we will respond as soon as possible.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-ink-950/15 bg-white px-4 text-sm font-semibold text-ink-950 transition hover:bg-kryptonix-gold/10"
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

        {submitError ? (
          <div className="rounded-md border border-red-300/40 bg-red-500/10 p-3 text-sm leading-6 text-red-200" role="alert">
            We could not send your message. Please try again, or contact us directly on WhatsApp.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex h-11 w-fit items-center justify-center rounded-md bg-kryptonix-green px-4 text-sm font-semibold text-ink-950 shadow-glow-blue transition hover:bg-kryptonix-green/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
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
