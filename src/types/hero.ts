export type HeroType = 
  | 'classic-centered'
  | 'split-screen'
  | 'app-mockup'
  | 'video-background'
  | 'minimalist'
  | 'feature-highlights'
  | '3d-illustration'
  | 'testimonials'
  | 'interactive'
  | 'multi-cta';

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface HeroConfig {
  type: HeroType;
  headline: string;
  subheadline: string;
  ctaButtons: CTAButton[];
  backgroundImage?: string;
  videoUrl?: string;
  mockupImage?: string;
  features?: FeatureCard[];
  testimonials?: Testimonial[];
  illustration?: string;
  interactiveElements?: string[];
  personaCTAs?: {
    title: string;
    description: string;
    buttons: CTAButton[];
  }[];
}

export interface HeroProps {
  config: HeroConfig;
  className?: string;
}
