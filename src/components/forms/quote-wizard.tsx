"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { submitToWeb3Forms } from "@/lib/web3forms";

type QuoteValues = {
  services: string[];
  brief: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  contactMethod: string;
};

const initialValues: QuoteValues = {
  services: [],
  brief: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  contactMethod: "Email",
};

const steps = ["Select services", "Project brief", "Budget & timeline", "Contact details"];

const inputClass =
  "h-11 rounded-md border border-ink-950/10 bg-white px-3 text-sm text-ink-950 outline-none placeholder:text-slate-500 focus:border-kryptonix-cyan";

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<QuoteValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const stepError = useMemo(() => {
    if (step === 0 && values.services.length === 0) return "Select at least one service.";
    if (step === 1 && values.brief.trim().length < 30) return "Brief should be at least 30 characters.";
    if (step === 2 && (!values.budget || !values.timeline)) return "Choose a budget and timeline.";
    if (step === 3) {
      if (!values.name.trim()) return "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return "Enter a valid email.";
    }
    return "";
  }, [step, values]);

  function toggleService(slug: string) {
    setValues((current) => ({
      ...current,
      services: current.services.includes(slug)
        ? current.services.filter((item) => item !== slug)
        : [...current.services, slug],
    }));
  }

  function goNext() {
    setAttemptedSubmit(true);
    if (stepError) return;
    setAttemptedSubmit(false);
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitError("");
    if (stepError) return;

    setIsSubmitting(true);

    try {
      const selectedServices = serviceCategories
        .filter((service) => values.services.includes(service.slug))
        .map((service) => service.title);

      await submitToWeb3Forms({
        subject: `Quote request from ${values.name}`,
        from_name: values.name,
        name: values.name,
        email: values.email,
        preferred_contact_method: values.contactMethod,
        services: selectedServices,
        project_brief: values.brief,
        budget: values.budget,
        timeline: values.timeline,
        message: [
          `Services: ${selectedServices.join(", ")}`,
          `Budget: ${values.budget}`,
          `Timeline: ${values.timeline}`,
          `Preferred contact method: ${values.contactMethod}`,
          "",
          values.brief,
        ].join("\n"),
        form_name: "Kryptonix quote request form",
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Your quote request could not be sent right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <GlassCard className="p-6">
        <div className="rounded-md border border-kryptonix-green/30 bg-kryptonix-green/10 p-5">
          <CheckCircle2 className="h-7 w-7 text-kryptonix-green" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-white">Quote request sent successfully.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Thanks. Your project details have been sent to Kryptonix Technologies, and we will follow up with the next steps.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center rounded-md border border-white/15 bg-white/[0.05] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
            onClick={() => {
              setValues(initialValues);
              setStep(0);
              setSubmitted(false);
              setAttemptedSubmit(false);
            }}
          >
            Start a new quote
          </button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6">
      <div className="grid gap-4 lg:grid-cols-4">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            className={cn(
              "rounded-md border p-4 text-left transition",
              index === step
                ? "border-kryptonix-cyan/60 bg-kryptonix-cyan/10"
                : "border-white/10 bg-white/[0.035] hover:bg-white/[0.06]",
            )}
            onClick={() => setStep(index)}
          >
            <p className="text-sm text-kryptonix-cyan">Step {index + 1}</p>
            <h2 className="mt-2 text-base font-semibold text-white">{label}</h2>
          </button>
        ))}
      </div>

      <form className="mt-8" onSubmit={handleSubmit} noValidate>
        {step === 0 ? (
          <div>
            <h2 className="text-xl font-semibold text-white">Services needed</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCategories.map((service) => (
                <label
                  key={service.slug}
                  className={cn(
                    "flex items-center gap-3 rounded-md border p-3 text-sm text-slate-300 transition",
                    values.services.includes(service.slug)
                      ? "border-kryptonix-cyan/60 bg-kryptonix-cyan/10"
                      : "border-white/10 bg-white/[0.035]",
                  )}
                >
                  <input
                    aria-label={`Select ${service.title}`}
                    type="checkbox"
                    className="h-4 w-4 accent-kryptonix-cyan"
                    checked={values.services.includes(service.slug)}
                    onChange={() => toggleService(service.slug)}
                  />
                  {service.title}
                </label>
              ))}
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div>
            <h2 className="text-xl font-semibold text-white">Project brief</h2>
            <textarea
              aria-label="Project brief"
              className="mt-4 min-h-52 w-full rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-kryptonix-cyan"
              placeholder="Describe your project, current challenge, audience, goals, and any known requirements."
              value={values.brief}
              onChange={(event) => setValues((current) => ({ ...current, brief: event.target.value }))}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="text-xl font-semibold text-white">Budget and timeline</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <select
                aria-label="Budget range"
                className={inputClass}
                value={values.budget}
                onChange={(event) => setValues((current) => ({ ...current, budget: event.target.value }))}
              >
                <option value="">Select budget range</option>
                <option>Below KES 100,000</option>
                <option>KES 100,000 - 500,000</option>
                <option>KES 500,000 - 1,500,000</option>
                <option>Above KES 1,500,000</option>
                <option>Not sure yet</option>
              </select>
              <select
                aria-label="Project timeline"
                className={inputClass}
                value={values.timeline}
                onChange={(event) => setValues((current) => ({ ...current, timeline: event.target.value }))}
              >
                <option value="">Select timeline</option>
                <option>Urgent: 1-2 weeks</option>
                <option>Short-term: 1 month</option>
                <option>Standard: 2-3 months</option>
                <option>Long-term: 3+ months</option>
              </select>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="text-xl font-semibold text-white">Contact details</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <input
                aria-label="Your name"
                className={inputClass}
                placeholder="Your name"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
              />
              <input
                aria-label="Email address"
                className={inputClass}
                type="email"
                placeholder="Email address"
                value={values.email}
                onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
              />
              <select
                aria-label="Preferred contact method"
                className={inputClass}
                value={values.contactMethod}
                onChange={(event) => setValues((current) => ({ ...current, contactMethod: event.target.value }))}
              >
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>
        ) : null}

        {attemptedSubmit && stepError ? <p className="mt-4 text-sm text-red-300">{stepError}</p> : null}
        {submitError ? (
          <div className="mt-4 rounded-md border border-red-300/40 bg-red-500/10 p-3 text-sm leading-6 text-red-200" role="alert">
            We could not send your quote request. Please try again, or contact us directly on WhatsApp.
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.09] disabled:cursor-not-allowed disabled:opacity-40"
            disabled={step === 0}
            onClick={() => {
              setStep((current) => Math.max(current - 1, 0));
              setAttemptedSubmit(false);
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md bg-kryptonix-green px-4 text-sm font-semibold text-ink-950 shadow-glow-blue transition hover:bg-kryptonix-green/90"
              onClick={goNext}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-md bg-kryptonix-green px-4 text-sm font-semibold text-ink-950 shadow-glow-blue transition hover:bg-kryptonix-green/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit Quote Request"}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </GlassCard>
  );
}
