"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cities } from "@/content/site";

const OBJECTIVES = ["Launch", "Awareness", "Promotion", "Event", "Always-on"];
const MEDIUMS = ["Any — recommend a mix", "Digital screens", "Static billboards", "Airport", "Malls and retail", "3D screen"];
const DURATIONS = ["2 weeks", "1 month", "3 months", "6 months", "12 months", "Not sure yet"];
const CREATIVE = ["We have artwork", "We need design", "Not sure yet"];

const months = (() => {
  const out: string[] = [];
  const d = new Date();
  for (let i = 0; i < 12; i++) {
    const m = new Date(d.getFullYear(), d.getMonth() + i, 1);
    out.push(m.toLocaleString("en-GB", { month: "long", year: "numeric" }));
  }
  return out;
})();

export function BriefForm({ site: siteName }: { site?: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string | string[]> = {};
    for (const [k, v] of fd.entries()) {
      if (typeof v !== "string") continue;
      if (k in data) data[k] = ([] as string[]).concat(data[k], v);
      else data[k] = v;
    }
    try {
      const res = await fetch("/api/enquiry/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "campaign_brief_submit", page_path: "/plan-a-campaign/" });
      router.push("/thank-you/?type=brief");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form action="/api/enquiry/" method="post" onSubmit={onSubmit} className="grid gap-10" noValidate>
      <input type="hidden" name="intent" value="brief" />
      <input type="hidden" name="page" value="/plan-a-campaign/" />
      {siteName && <input type="hidden" name="message" value={`Interested in: ${siteName}`} />}
      <div className="hidden" aria-hidden>
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <fieldset className="grid gap-5">
        <legend className="display-md mb-2 text-xl">1. What do you want to achieve?</legend>
        <div>
          <label htmlFor="objective" className="lbl">Objective</label>
          <select id="objective" name="objective" className="field" defaultValue="Awareness">
            {OBJECTIVES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <p className="lbl">Where do you want to be seen?</p>
          <div className="grid sm:grid-cols-2">
            {cities.map((c) => (
              <label key={c.slug} className="check"><input type="checkbox" name="cities" value={c.name} /> <span>{c.name}</span></label>
            ))}
            <label className="check"><input type="checkbox" name="cities" value="Nationwide" /> <span>Nationwide</span></label>
            <label className="check"><input type="checkbox" name="cities" value="Not sure yet" /> <span>Not sure yet — recommend</span></label>
          </div>
        </div>
      </fieldset>

      <fieldset className="grid gap-5">
        <legend className="display-md mb-2 text-xl">2. Mediums, timing and budget</legend>
        <div>
          <p className="lbl">Mediums</p>
          <div className="grid sm:grid-cols-2">
            {MEDIUMS.map((m) => (
              <label key={m} className="check"><input type="checkbox" name="mediums" value={m} /> <span>{m}</span></label>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="start" className="lbl">Start</label>
            <select id="start" name="start" className="field">
              {months.map((m) => <option key={m}>{m}</option>)}
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="lbl">Duration</label>
            <select id="duration" name="duration" className="field" defaultValue="1 month">
              {DURATIONS.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="lbl">Budget (TZS or USD)</label>
            <input id="budget" name="budget" className="field" placeholder="e.g. TZS 20m, or 'not sure yet'" />
          </div>
          <div>
            <label htmlFor="creative" className="lbl">Creative</label>
            <select id="creative" name="creative" className="field">
              {CREATIVE.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="grid gap-5">
        <legend className="display-md mb-2 text-xl">3. Where should we send the plan?</legend>
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
            <label htmlFor="role" className="lbl">Role</label>
            <input id="role" name="role" autoComplete="organization-title" className="field" />
          </div>
          <div>
            <label htmlFor="country" className="lbl">Country</label>
            <input id="country" name="country" autoComplete="country-name" className="field" defaultValue="Tanzania" />
          </div>
          <div>
            <label htmlFor="email" className="lbl">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className="field" />
          </div>
          <div>
            <label htmlFor="phone" className="lbl">Phone or WhatsApp</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="+255 …" />
          </div>
        </div>
        <div>
          <label htmlFor="heard" className="lbl">How did you hear about us? <span className="font-normal text-steel">(optional)</span></label>
          <input id="heard" name="heard" className="field" />
        </div>
        <label className="check text-sm">
          <input type="checkbox" name="consent" value="yes" required />
          <span>You can contact me about this brief by email, phone or WhatsApp. See the <Link href="/privacy/" className="underline underline-offset-4">privacy notice</Link>.</span>
        </label>
      </fieldset>

      {error && (
        <p role="alert" className="border-2 border-red px-4 py-3 text-sm font-semibold">{error}</p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send the brief"}
        </button>
        <span className="text-sm text-steel">You’ll get a plan with sites, photos and a quote — usually within a few hours on business days.</span>
      </div>
    </form>
  );
}
