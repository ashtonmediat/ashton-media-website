"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const INTENTS = [
  { value: "general", label: "Advertising enquiry" },
  { value: "agency", label: "Media agency — rates and availability" },
  { value: "international", label: "International brand or agency" },
  { value: "landlord", label: "I own a site or wall" },
  { value: "press", label: "Press" },
  { value: "careers", label: "Careers" },
];

export function EnquiryForm({ defaultIntent = "general", page = "/contact/" }: { defaultIntent?: string; page?: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit", form_intent: data.intent, page_path: page });
      router.push(`/thank-you/?type=${encodeURIComponent(String(data.intent))}`);
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form action="/api/enquiry/" method="post" onSubmit={onSubmit} className="grid gap-5" noValidate>
      <input type="hidden" name="page" value={page} />
      <div className="hidden" aria-hidden>
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div>
        <label htmlFor="intent" className="lbl">What is this about?</label>
        <select id="intent" name="intent" defaultValue={defaultIntent} className="field">
          {INTENTS.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="lbl">Your name</label>
          <input id="name" name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="company" className="lbl">Company</label>
          <input id="company" name="company" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="lbl">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="lbl">Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="+255 …" />
        </div>
        <div>
          <label htmlFor="country" className="lbl">Country</label>
          <input id="country" name="country" autoComplete="country-name" className="field" defaultValue="Tanzania" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="lbl">What would you like to do?</label>
        <textarea id="message" name="message" className="field" placeholder="Where you want to be seen, when, and roughly what you'd like to spend." />
      </div>
      {error && (
        <p role="alert" className="border-2 border-red px-4 py-3 text-sm font-semibold">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-red" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        <span className="text-sm text-steel">We reply by email or WhatsApp, usually within a few hours on business days.</span>
      </div>
    </form>
  );
}
