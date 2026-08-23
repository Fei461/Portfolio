export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function splitCommaList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseGalleryUrls(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    return [];
  }

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is string => typeof item === "string" && item.length > 0,
      );
    }
  } catch {
    return splitCommaList(trimmed);
  }

  return splitCommaList(trimmed);
}

export function formatDateRange(start: Date | string, end?: Date | string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : undefined;

  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  });

  const startLabel = formatter.format(startDate);
  const endLabel = endDate ? formatter.format(endDate) : "Present";
  return `${startLabel} — ${endLabel}`;
}

export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
}

