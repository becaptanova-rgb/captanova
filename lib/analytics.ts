"use client";

// ─── Google Analytics ───────────────────────────────────────────────────────

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  gtag("event", eventName, params);
}

// ─── Meta Pixel ─────────────────────────────────────────────────────────────

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function fbq(event: string, eventName: string, params?: object) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq(event, eventName, params);
  }
}

export function trackLead(params?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) {
  fbq("track", "Lead", params);
  trackEvent("generate_lead", params);
}

export function trackPurchase(params: {
  value: number;
  currency: string;
  content_ids?: string[];
  content_name?: string;
}) {
  fbq("track", "Purchase", params);
  trackEvent("purchase", {
    value: params.value,
    currency: params.currency,
    items: [{ item_name: params.content_name }],
  });
}

export function trackInitiateCheckout(params?: {
  value?: number;
  currency?: string;
  content_name?: string;
}) {
  fbq("track", "InitiateCheckout", params);
  trackEvent("begin_checkout", params);
}

export function trackViewContent(params?: { content_name?: string }) {
  fbq("track", "ViewContent", params);
  trackEvent("view_item", params);
}

export function trackQuizComplete(profile: string) {
  fbq("track", "CompleteRegistration", { content_name: `Quiz: ${profile}` });
  trackEvent("quiz_complete", { profile });
}
