import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Enquiry = Record<string, string | string[]>;

const LABELS: Record<string, string> = {
  intent: "Enquiry type",
  objective: "Objective",
  cities: "Cities",
  mediums: "Mediums",
  start: "Start",
  duration: "Duration",
  budget: "Budget",
  creative: "Creative",
  name: "Name",
  company: "Company",
  role: "Role",
  email: "Email",
  phone: "Phone / WhatsApp",
  country: "Country",
  message: "Message",
  heard: "How they heard of us",
  page: "Submitted from",
};

function toEnquiry(input: FormData | Record<string, unknown>): Enquiry {
  const out: Enquiry = {};
  if (input instanceof FormData) {
    for (const [k, v] of input.entries()) {
      if (typeof v !== "string") continue;
      if (k in out) out[k] = ([] as string[]).concat(out[k], v);
      else out[k] = v;
    }
  } else {
    for (const [k, v] of Object.entries(input)) {
      if (typeof v === "string") out[k] = v;
      else if (Array.isArray(v)) out[k] = v.map(String);
    }
  }
  return out;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function render(e: Enquiry) {
  const rows = Object.keys(LABELS)
    .filter((k) => e[k] && String(e[k]).trim() !== "")
    .map((k) => {
      const v = Array.isArray(e[k]) ? (e[k] as string[]).join(", ") : String(e[k]);
      return { label: LABELS[k], value: v };
    });
  const text = rows.map((r) => `${r.label}: ${r.value}`).join("\n");
  const html = `<table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">${rows
    .map((r) => `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(r.label)}</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(r.value).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  return { text, html };
}

export async function POST(req: Request) {
  const ctype = req.headers.get("content-type") || "";
  let enquiry: Enquiry;
  try {
    if (ctype.includes("application/json")) enquiry = toEnquiry((await req.json()) as Record<string, unknown>);
    else enquiry = toEnquiry(await req.formData());
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read the form." }, { status: 400 });
  }

  // Honeypot: real people never fill this field.
  if (enquiry.website && String(enquiry.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(enquiry.name || "").trim();
  const email = String(enquiry.email || "").trim();
  const phone = String(enquiry.phone || "").trim();
  if (!name || (!email && !phone)) {
    return NextResponse.json({ ok: false, error: "Please give your name and an email address or phone number." }, { status: 400 });
  }

  const intent = String(enquiry.intent || "general");
  const subject = `${intent === "brief" ? "Campaign brief" : "Website enquiry"} — ${name}${enquiry.company ? `, ${enquiry.company}` : ""}`;
  const { text, html } = render(enquiry);

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.ENQUIRY_TO || site.email).split(",").map((s) => s.trim());
  const from = process.env.ENQUIRY_FROM || "Ashton Media website <enquiries@notify.ashtonmedia.net>";

  if (!key) {
    console.error("[enquiry] RESEND_API_KEY is not set; enquiry not delivered:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject,
      text,
      html,
    });
    if (result.error) throw new Error(result.error.message);
  } catch (err) {
    console.error("[enquiry] send failed", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message. Please WhatsApp or call us instead." }, { status: 502 });
  }

  const wantsRedirect = !ctype.includes("application/json");
  if (wantsRedirect) {
    return NextResponse.redirect(new URL(`/thank-you/?type=${encodeURIComponent(intent)}`, req.url), 303);
  }
  return NextResponse.json({ ok: true, delivered: true });
}
