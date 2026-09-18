"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Phone, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitToWeb3Forms } from "@/lib/web3forms";

type CallbackRequestProps = {
  className?: string;
  onOpen?: () => void;
};

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return /^[+\d][\d\s().-]*$/.test(value.trim()) && digits.length >= 9 && digits.length <= 15;
}

export function CallbackRequest({ className, onOpen }: CallbackRequestProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const phoneError = !phone.trim()
    ? "Enter your phone number."
    : !isValidPhone(phone)
      ? "Enter a valid phone number, including the country code where possible."
      : "";

  const closeModal = useCallback(() => {
    if (isSubmitting) return;
    setIsOpen(false);
    setPhone("");
    setHoneypot("");
    setAttemptedSubmit(false);
    setSubmitted(false);
    setSubmitError("");
  }, [isSubmitting]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, isOpen]);

  function openModal() {
    onOpen?.();
    setIsOpen(true);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitError("");

    if (honeypot) {
      setSubmitted(true);
      return;
    }

    if (phoneError || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await submitToWeb3Forms({
        subject: `Call me back request: ${phone.trim()}`,
        from_name: "Kryptonix website visitor",
        phone: phone.trim(),
        message: `A website visitor requested a callback on ${phone.trim()}.`,
        page_url: window.location.href,
        form_name: "Kryptonix callback request",
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Your callback request could not be sent right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink-950/15 bg-white px-4 py-2 text-center text-sm font-semibold text-ink-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-kryptonix-gold/40 hover:bg-kryptonix-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kryptonix-blue focus-visible:ring-offset-2",
          className,
        )}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Me Back
      </button>

      {isOpen && typeof document !== "undefined" ? createPortal(
        <div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-ink-950/70 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-title"
            aria-describedby="callback-description"
            className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white p-6 text-ink-950 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Close callback form"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-ink-950/10 text-slate-600 transition hover:bg-slate-100 hover:text-ink-950 disabled:opacity-50"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div role="status" className="pr-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-kryptonix-green/15 text-kryptonix-green">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 id="callback-title" className="mt-5 font-display text-2xl font-semibold">
                  Request received
                </h2>
                <p id="callback-description" className="mt-3 text-sm leading-6 text-slate-600">
                  Thank you. Your phone number has been sent to Kryptonix Technologies, and our team will call you back within one business day.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-kryptonix-green px-5 py-2 text-sm font-semibold text-ink-950 transition hover:bg-kryptonix-green/90"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-kryptonix-gold/15 text-kryptonix-gold">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="callback-title" className="mt-5 pr-8 font-display text-2xl font-semibold">
                  Request a callback
                </h2>
                <p id="callback-description" className="mt-2 text-sm leading-6 text-slate-600">
                  Enter the phone number you would like us to call. We respond within one business day.
                </p>

                <form className="mt-6" onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <label htmlFor="callback-phone" className="text-sm font-semibold text-ink-950">
                    Phone number
                  </label>
                  <input
                    ref={inputRef}
                    id="callback-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. +254 712 345 678"
                    value={phone}
                    aria-invalid={Boolean(attemptedSubmit && phoneError)}
                    aria-describedby={attemptedSubmit && phoneError ? "callback-phone-error" : undefined}
                    onChange={(event) => setPhone(event.target.value)}
                    className={cn(
                      "mt-2 h-12 w-full rounded-md border bg-white px-4 text-base text-ink-950 outline-none transition placeholder:text-slate-400 focus:border-kryptonix-gold focus:ring-2 focus:ring-kryptonix-gold/20",
                      attemptedSubmit && phoneError ? "border-red-500" : "border-ink-950/15",
                    )}
                  />
                  {attemptedSubmit && phoneError ? (
                    <p id="callback-phone-error" className="mt-2 text-sm text-red-600">
                      {phoneError}
                    </p>
                  ) : null}

                  {submitError ? (
                    <p className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
                      We could not send your request. Please try again or contact us on WhatsApp.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-kryptonix-green px-5 py-2 text-sm font-semibold text-ink-950 transition hover:bg-kryptonix-green/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Callback Request"}
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                    By submitting, you agree that Kryptonix Technologies may contact you about this request.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
