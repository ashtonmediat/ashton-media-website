"use client";

import { useEffect } from "react";

/** Fires a conversion event when a thank-you page is shown. */
export function ConversionPing({ type }: { type: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "enquiry_complete", enquiry_type: type });
  }, [type]);
  return null;
}
