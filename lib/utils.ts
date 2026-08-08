import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a downloadable .ics calendar file for an event and returns a blob
 * URL. Caller is responsible for revoking the URL after use.
 */
export function buildICSDownloadUrl(opts: {
  title: string;
  description: string;
  startISO: string;
  durationMinutes?: number;
  location?: string;
}): string {
  const { title, description, startISO, durationMinutes = 60, location = "Online (link sent by email)" } = opts;
  const start = new Date(startISO);
  const end = new Date(start.getTime() + durationMinutes * 60000);

  const toICSDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const escapeText = (s: string) => s.replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Captanova Academy//Masterclass//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@captanovaacademy.com`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${escapeText(title)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  return URL.createObjectURL(blob);
}
