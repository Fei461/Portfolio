export type ProjectRecord = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImageUrl: string;
  year: number;
  role: string;
  tools: string;
  tags: string;
  overviewContent: string;
  strategyContent: string;
  executionContent: string;
  resultsContent: string;
  galleryUrls: string;
  isFeatured: boolean;
};

export type ExperienceRecord = {
  id: string;
  company: string;
  position: string;
  startDate: Date | string;
  endDate?: Date | string;
  description: string;
};

export type EducationRecord = {
  id: string;
  institution: string;
  degree: string;
  startDate: Date | string;
  endDate: Date | string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type SeoMeta = {
  title: string;
  description: string;
  canonical?: string;
};

export type NavSection = "about" | "portfolio" | "resume" | "contact";
