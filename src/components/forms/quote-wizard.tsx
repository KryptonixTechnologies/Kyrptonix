"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
  phone: string;
  company: string;
  contactMethod: string;
};

const initialValues: QuoteValues = {
  services: [],
  brief: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  contactMethod: "Email",
};

const steps = ["Select services", "Project brief", "Budget & timeline", "Contact details"];

const inputClass =
  "w-full h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all";

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<QuoteValues>(initialValues);
  const [honeypot, setHoneypot] = useState("");
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
    if (stepError || isSubmitting) return;

    if (honeypot) {
      setSubmitted(true);
      return;
    }

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
        phone: values.phone,
        company: values.company,
        preferred_contact_method: values.contactMethod,
        services: selectedServices,
        project_brief: values.brief,
        budget: values.budget,
        timeline: values.timeline,
        message: [
          `Services: ${selectedServices.join(", ")}`,
          `Company: ${values.company}`,
          `Phone: ${values.phone}`,
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 text-emerald-950">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold">Quote request sent successfully.</h2>
        <p className="mt-2 text-sm leading-relaxed text-emerald-800">
          Thanks! Your project details have been sent to Kryptonix Technologies. <strong>We respond within one business day.</strong>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-xl border border-emerald-300 bg-white px-4 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-50"
            onClick={() => {
              setValues(initialValues);
              setStep(0);
              setSubmitted(false);
              setAttemptedSubmit(false);
            }}
          >
            Start a new quote
          </button>
          <a
            href="/thank-you/"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-amber-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
          >
            View Next Steps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Multi-step Header Navigation */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            className={cn(
              "rounded-xl border p-3 text-left transition-all",
              index === step
                ? "border-amber-400 bg-amber-50/60 ring-1 ring-amber-400"
                : "border-gray-100 bg-white hover:border-gray-200"
            )}
            onClick={() => setStep(index)}
          >
            <p className="text-xs font-semibold text-amber-600">Step {index + 1}</p>
            <h3 className="mt-1 text-xs font-bold text-gray-900 sm:text-sm truncate">{label}</h3>
          </button>
        ))}
      </div>

      <form className="mt-8" onSubmit={handleSubmit} noValidate>
        {/* Step 1: Select Services */}
        {step === 0 ? (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Services needed</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCategories.map((service) => {
                const isChecked = values.services.includes(service.slug);
                return (
                  <label
                    key={service.slug}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border p-3.5 text-sm font-medium cursor-pointer transition-all",
                      isChecked
                        ? "border-amber-400 bg-amber-50/30 text-gray-900"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    )}
                  >
                    <input
                      aria-label={`Select ${service.title}`}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
                      checked={isChecked}
                      onChange={() => toggleService(service.slug)}
                    />
                    <span>{service.title}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Step 2: Project Brief */}
        {step === 1 ? (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Project brief</h2>
            <textarea
              aria-label="Project brief"
              className="mt-2 min-h-48 w-full rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
              placeholder="Tell us about your project or support need (describe goals, requirements, target audience, etc.)."
              value={values.brief}
              onChange={(event) => setValues((current) => ({ ...current, brief: event.target.value }))}
            />
          </div>
        ) : null}

        {/* Step 3: Budget and Timeline */}
        {step === 2 ? (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Budget and timeline</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Budget Range</label>
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
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Timeline</label>
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
          </div>
        ) : null}

        {/* Step 4: Contact Details (Matching Contact Us Form layout) */}
        {step === 3 ? (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Contact details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Name</label>
                <input
                  aria-label="Your name"
                  className={inputClass}
                  placeholder="Your name"
                  value={values.name}
                  onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Email</label>
                <input
                  aria-label="Email address"
                  className={inputClass}
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Phone</label>
                <input
                  aria-label="Phone number"
                  className={inputClass}
                  type="tel"
                  placeholder="+254..."
                  value={values.phone}
                  onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Company</label>
                <input
                  aria-label="Company name"
                  className={inputClass}
                  placeholder="Company name"
                  value={values.company}
                  onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Preferred Contact Method</label>
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

              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />
            </div>
          </div>
        ) : null}

        {attemptedSubmit && stepError ? <p className="mt-4 text-sm font-medium text-red-500">{stepError}</p> : null}
        {submitError ? (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
            We could not send your quote request. Please try again, or contact us directly on WhatsApp.
          </div>
        ) : null}

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            disabled={step === 0}
            onClick={() => {
              setStep((current) => Math.max(current - 1, 0));
              setAttemptedSubmit(false);
            }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-500 px-6 text-sm font-semibold text-white transition hover:bg-amber-600 shadow-sm gap-2"
              onClick={goNext}
            >
              Continue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-amber-500 px-6 text-sm font-semibold text-white transition hover:bg-amber-600 shadow-sm disabled:opacity-70 gap-2"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}