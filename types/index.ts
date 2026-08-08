export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  source: string;
  quizProfile?: string;
  timestamp: string;
}

export interface QuizAnswer {
  question: number;
  answer: string;
  profile: ProfileType;
}

export type ProfileType =
  | "overthinker"
  | "doubter"
  | "silent-voice"
  | "action-seeker"
  | "hidden-leader";

export interface Profile {
  id: ProfileType;
  title: string;
  emoji: string;
  tagline: string;
  gift: string;
  holding: string;
  focus: string[];
  insight: string;
  challenge: string;
  cta: string;
  ctaLink: string;
  color: string;
  accentColor: string;
}

export interface Program {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  features: string[];
  highlight?: boolean;
  razorpayAmount: number; // in paise
}

export interface OrderData {
  programId: string;
  programName: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}
