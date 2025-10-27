import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  screenshot: string;
  image: string;
  color: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BadgeInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}



