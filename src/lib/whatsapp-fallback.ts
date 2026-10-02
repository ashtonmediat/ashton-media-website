/**
 * If the enquiry email can't be sent (no mail key, network down), the visitor must not lose what
 * they typed: turn the form data into a WhatsApp message they can send in one tap.
 */
const FIELDS: [label: string, key: string][] = [
  ["Name", "name"],
  ["Company", "company"],
  ["Role", "role"],
  ["Country", "country"],
  ["About", "intent"],
  ["Objective", "objective"],
  ["Where", "cities"],
  ["Mediums", "mediums"],
  ["Start", "start"],
  ["Duration", "duration"],
  ["Budget", "budget"],
  ["Creative", "creative"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Message", "message"],
];

const INTENT_LABELS: Record<string, string> = {
  general: "Advertising enquiry",
  agency: "Media agency — rates and availability",
  international: "International brand or agency",
  landlord: "I own a site or wall",
  press: "Press",
  careers: "Careers",
};

export function formToWhatsApp(data: Record<string, unknown>, intro = "Hi Ashton, here is my enquiry from the website:"): string {
  const lines = [intro];
  for (const [label, key] of FIELDS) {
    const raw = data[key];
    let value = Array.isArray(raw) ? raw.join(", ") : typeof raw === "string" ? raw.trim() : "";
    if (key === "intent") value = INTENT_LABELS[value] ?? "";
    if (value) lines.push(`${label}: ${value}`);
  }
  return lines.join("\n");
}
