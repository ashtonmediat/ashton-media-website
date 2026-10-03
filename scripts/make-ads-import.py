"""Build the Google Ads Editor import CSV for the new site (2 Oct 2026).

Input: the Ad report exported from Google Ads (UTF-16 TSV). Output: one UTF-8 CSV that
Google Ads Editor imports (Account → Import → From file), containing:
  - every existing Ashton ad with its new Final URL and display paths (text and pins kept
    verbatim, so Editor treats the row as an edit of the existing ad, not a new ad)
  - the ads to pause (claims the site doesn't make / LED-supplier wording / duplicates)
  - one new responsive search ad per ad group with copy that matches the site
  - a new "Rates & cost" ad group in Ashton Core search, with phrase-match keywords and one ad
  - six sitelinks attached to each of the four Ashton campaigns (campaign level, because the
    account is shared with ZO Spaces)
Run: python3 scripts/make-ads-import.py <Ad_report.csv> <out.csv>
"""
import csv, io, sys

src, out = sys.argv[1], sys.argv[2]
SITE = "https://www.ashtonmedia.net"

# ---- landing pages --------------------------------------------------------------------
LANDING = {
    ("Ashton Core search", "billboards - General"): (f"{SITE}/billboards-in-tanzania/", "billboards", "tanzania"),
    ("Ashton Core search", "Outdoor Advertising"): (f"{SITE}/billboards-in-tanzania/", "outdoor", "advertising"),
    ("Ashton Core search", "Digital Screens"): (f"{SITE}/digital-billboards-tanzania/", "digital", "screens"),
    ("Ashton Core search", "Airport Advertising"): (f"{SITE}/airport-advertising-tanzania/", "airport", "advertising"),
    ("Ashton | International | 30-09-2026", "Advertising in Tanzania — international"): (f"{SITE}/advertising-in-tanzania/", "tanzania", "advertising"),
    ("Ashton | Competitor names | 30-09-2026", "OOH competitors"): (f"{SITE}/billboards-in-tanzania/", "compare", "billboards"),
    ("Leads-Search-Ashton Media- Branded- 24-05-25", "Branded Keywords"): (f"{SITE}/", "", ""),
}
NEW_GROUP = ("Ashton Core search", "Rates & cost", f"{SITE}/billboard-advertising-cost-tanzania/", "cost", "guide")

# ---- ads to pause: identified by a phrase that appears only in that ad's text ------------
PAUSE_IF_CONTAINS = [
    "Supplies Led Screens",                      # reads as an LED hardware supplier (wrong audience)
    "#1 OOH Network in Tanzania|Out of Home Advertising TZ|plain",  # Outdoor: un-inserted duplicate of the {KeyWord} ad
    "Airport Billboard Advertising|plain",       # Airport: un-inserted duplicate of the {KeyWord} ad
    "Comparing Billboard Companies?",            # Competitor: replaced by the 15-headline version below
    "Sites, Production & Permits",               # International: permits are an internal matter; two new ads replace it
]

# ---- new copy (every headline ≤ 30, every description ≤ 90; checked below) ----------------
COMMON_H = ["Largest Digital Screen Network", "Award-Winning Outdoor Media", "Digital, Static, Airport, SGR",
            "Plan A Campaign In 2 Minutes", "Reply Within A Few Hours", "Site List & Photos On WhatsApp",
            "Quote With Sites And Photos", "Rate Card On WhatsApp", "Billboards Across Tanzania"]
D_AWARD = "Award-winning out-of-home media: Tanzania's largest digital screen network. WhatsApp us."
D_FORMATS = "Digital screens, static billboards, airport and SGR terminal advertising across Tanzania."
D_BRIEF = "Tell us where you want to be seen. We reply with sites, photographs and a quote."
D_CITIES = "Sites in Dar es Salaam, Zanzibar, Dodoma and Mwanza. Production and installation handled."
D_RATES = "No published rate card anywhere? Ours comes with sites and photos. WhatsApp or call now."
D_PRICE = "Five things set the price: site, size, format, duration and production. See the guide."

NEW_ADS = [
    (("Ashton Core search", "billboards - General"), (
        ["Billboard Advertising Tanzania", "Billboards In Tanzania", "Dar, Zanzibar, Dodoma, Mwanza",
         "Static Billboards Tanzania", "One Partner, Whole Network", "Advertise Now"] + COMMON_H,
        [D_AWARD, D_FORMATS, D_BRIEF, D_CITIES])),
    (("Ashton Core search", "Outdoor Advertising"), (
        ["Outdoor Advertising Tanzania", "OOH Advertising Tanzania", "Out-Of-Home Media Owner",
         "Dar, Zanzibar, Dodoma, Mwanza", "One Partner, Whole Network", "Advertise Now"] + COMMON_H,
        [D_AWARD, D_FORMATS, D_BRIEF, D_CITIES])),
    (("Ashton Core search", "Digital Screens"), (
        ["Digital Billboards Tanzania", "LED Screens On Main Roads", "Change Artwork In Seconds",
         "Screens On Bagamoyo Road", "Screens At JNIA Terminal 3", "Live Data On Screen"] + COMMON_H,
        [D_AWARD,
         "Digital screens on Dar es Salaam's main roads, at the airport and in malls. One booking.",
         "Change the message in seconds, run dayparts, react to live data. Ask for the screen list.",
         D_BRIEF])),
    (("Ashton Core search", "Airport Advertising"), (
        ["Airport Advertising Tanzania", "JNIA Terminal 3 Screens", "Kilimanjaro & Arusha Airports",
         "Mwanza & Dodoma Airports", "Reach Travellers On Arrival", "Baggage Hall & Departures"] + COMMON_H,
        ["Airport advertising at JNIA Terminal 3, Kilimanjaro, Arusha, Mwanza and Dodoma airports.",
         "Digital totems and screens in arrivals, baggage halls and departures. Ask for the list.",
         D_AWARD, D_BRIEF])),
    (("Ashton | International | 30-09-2026", "Advertising in Tanzania — international"), (
        ["Entering The Tanzanian Market?", "Advertising In Tanzania", "One Partner For Outdoor Media",
         "Sites, Print And Installation", "Agencies & Global Brands", "Launch In Tanzania With Us"] + COMMON_H,
        ["Launching in Tanzania? One partner for sites, production and installation.",
         D_AWARD, D_FORMATS, D_BRIEF])),
    (("Ashton | International | 30-09-2026", "Advertising in Tanzania — international"), (
        ["Advertising In Tanzania", "Launching In Tanzania?", "One Partner On The Ground",
         "Sites, Print And Installation", "Agencies & Global Brands", "Quote In US Dollars"] + COMMON_H,
        ["Entering Tanzania? One partner for sites, production and installation, with proof when live.",
         D_FORMATS, D_AWARD, D_BRIEF])),
    (("Ashton | Competitor names | 30-09-2026", "OOH competitors"), (
        ["Comparing Billboard Companies?", "Call Our Team Today", "Compare Before You Book",
         "Get Our Rate Card Today", "Digital & Static Billboards", "Airport & Highway Sites",
         "Same-Day Quote By WhatsApp", "Prime Locations Citywide", "Book A Site Visit",
         "Outdoor Advertising Experts", "Largest Digital Screen Network", "Award-Winning Outdoor Media",
         "Billboards Across Tanzania", "Quote With Sites And Photos", "Plan A Campaign In 2 Minutes"],
        ["Before you book elsewhere, compare our network: more sites, prime spots, one rate card.",
         "Digital, static and airport billboards across Tanzania. Call for a same-day quote today.",
         "Tap to call or WhatsApp us for the rate card, locations and availability within the hour.",
         D_AWARD])),
    (("Leads-Search-Ashton Media- Branded- 24-05-25", "Branded Keywords"), (
        ["Ashton Media Tanzania", "Ashton Media – Official Site", "Out-Of-Home Media Owner",
         "Head Office: New Bagamoyo Road", "See Our Awards", "Campaign Stories On The Blog"] + COMMON_H,
        [D_AWARD, D_FORMATS, D_BRIEF, D_CITIES])),
    (("Ashton Core search", "Rates & cost"), (
        ["Billboard Advertising Cost", "What A Billboard Costs", "Billboard Rates In Tanzania",
         "Rates And How To Book", "Five Things Set The Price", "Advertise Now"] + COMMON_H,
        [D_PRICE, D_RATES, D_BRIEF, D_FORMATS])),
]
KEYWORDS = ["billboard advertising cost", "billboard cost tanzania", "digital billboard cost", "billboard rental cost",
            "billboard rates", "billboard rates tanzania", "billboard prices tanzania", "advertising rate card",
            "cost of billboard advertising", "how much does a billboard cost", "billboard advertising prices",
            "outdoor advertising rates tanzania"]
SITELINKS = [
    ("Digital screens", "Tanzania's largest screen network", "Live data, dayparts, fast changes", f"{SITE}/digital-billboards-tanzania/"),
    ("Static billboards", "Main roads and city sites", "Printed and installed for you", f"{SITE}/static-billboards-tanzania/"),
    ("Airport advertising", "JNIA T3, Kilimanjaro, Arusha", "Mwanza and Dodoma airports", f"{SITE}/airport-advertising-tanzania/"),
    ("SGR advertising", "Dar, Morogoro, Dodoma terminals", "Digital and static inside", f"{SITE}/sgr-advertising-tanzania/"),
    ("Rates and booking", "How pricing and booking work", "Quote with sites and photos", f"{SITE}/rates-and-booking/"),
    ("Plan a campaign", "Two-minute brief", "We reply with a plan and quote", f"{SITE}/plan-a-campaign/"),
]

# ---- checks -----------------------------------------------------------------------------
for key, (hs, ds) in NEW_ADS:
    assert len(hs) == 15 and len(set(hs)) == 15, (key, len(hs), len(set(hs)))
    assert len(ds) == 4 and len(set(ds)) == 4, key
    for h in hs: assert len(h) <= 30, (key, h, len(h))
    for d in ds: assert len(d) <= 90, (key, d, len(d))
for t, l1, l2, _ in SITELINKS:
    assert len(t) <= 25 and len(l1) <= 35 and len(l2) <= 35, (t, l1, l2)

# ---- read the report --------------------------------------------------------------------
txt = open(src, "rb").read().decode("utf-16")
lines = txt.splitlines()
rows = list(csv.reader(io.StringIO("\n".join(lines[2:])), delimiter="\t"))
hdr = rows[0]
data = [dict(zip(hdr, r)) for r in rows[1:] if len(r) >= len(hdr) - 2]
ads = [d for d in data if "ashton" in d["Campaign"].lower()]

def clean(v):
    v = (v or "").strip()
    return "" if v == "--" else v

HCOLS = [f"Headline {i}" for i in range(1, 16)]
HPOS = [f"Headline {i} position" for i in range(1, 16)]
DCOLS = [f"Description {i}" for i in range(1, 5)]
DPOS = [f"Description {i} position" for i in range(1, 5)]
COLUMNS = (["Campaign", "Ad Group", "Max CPC", "Keyword", "Criterion Type", "Final URL", "Path 1", "Path 2", "Ad type"]
           + HCOLS + HPOS + DCOLS + DPOS + ["Sitelink text", "Description line 1", "Description line 2", "Status"])

def should_pause(d):
    text = " | ".join(clean(d[c]) for c in HCOLS + DCOLS)
    has_insertion = "{KeyWord" in text
    for rule in PAUSE_IF_CONTAINS:
        parts = rule.split("|")
        plain_only = parts[-1] == "plain"
        needles = [p for p in parts if p != "plain"]
        if all(n in text for n in needles) and (not plain_only or not has_insertion):
            return True
    return False

out_rows = []
edited = paused = 0
for d in ads:
    key = (d["Campaign"], d["Ad group"])
    url, p1, p2 = LANDING[key]
    row = {c: "" for c in COLUMNS}
    row.update({"Campaign": d["Campaign"], "Ad Group": d["Ad group"], "Final URL": url, "Path 1": p1, "Path 2": p2,
                "Ad type": "Responsive search ad"})
    for c in HCOLS + HPOS + DCOLS + DPOS:
        row[c] = clean(d.get(c, ""))
    status = "Paused" if clean(d["Ad status"]) == "Paused" else "Enabled"
    if status == "Enabled" and should_pause(d):
        status = "Paused"; paused += 1
    row["Status"] = status
    edited += 1
    out_rows.append(row)

# new ad group + keywords
camp, group, gurl, gp1, gp2 = NEW_GROUP
g = {c: "" for c in COLUMNS}; g.update({"Campaign": camp, "Ad Group": group, "Max CPC": "1.00", "Status": "Enabled"})
out_rows.append(g)
for kw in KEYWORDS:
    k = {c: "" for c in COLUMNS}
    k.update({"Campaign": camp, "Ad Group": group, "Keyword": kw, "Criterion Type": "Phrase", "Status": "Enabled"})
    out_rows.append(k)

# new ads
new = 0
for key, (hs, ds) in NEW_ADS:
    url, p1, p2 = LANDING.get(key, (gurl, gp1, gp2))
    row = {c: "" for c in COLUMNS}
    row.update({"Campaign": key[0], "Ad Group": key[1], "Final URL": url, "Path 1": p1, "Path 2": p2,
                "Ad type": "Responsive search ad", "Status": "Enabled"})
    for i, h in enumerate(hs): row[f"Headline {i+1}"] = h
    for i, dd in enumerate(ds): row[f"Description {i+1}"] = dd
    out_rows.append(row); new += 1

# sitelinks, campaign level
campaigns = sorted({k[0] for k in LANDING})
sl = 0
for c in campaigns:
    for text, l1, l2, url in SITELINKS:
        row = {col: "" for col in COLUMNS}
        row.update({"Campaign": c, "Sitelink text": text, "Description line 1": l1, "Description line 2": l2,
                    "Final URL": url, "Status": "Enabled"})
        out_rows.append(row); sl += 1

with open(out, "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=COLUMNS)
    w.writeheader(); w.writerows(out_rows)
print(f"existing ads re-pointed: {edited} (of which newly paused: {paused}); new ads: {new}; "
      f"new ad group: 1 with {len(KEYWORDS)} keywords; sitelinks: {sl} ({len(SITELINKS)} × {len(campaigns)} campaigns)")
