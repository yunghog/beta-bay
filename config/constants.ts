// Application constants
export const APP_CONFIG = {
  NAME: 'Beta Bay',
  VERSION: '1.0.0',
  DESCRIPTION: 'Your gateway to innovative solutions and cutting-edge technology',
  URL: 'https://beta-bay.com',
  SUPPORT_EMAIL: 'support@beta-bay.com',
} as const;

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.beta-bay.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Feature Flags
export const FEATURES = {
  REVIEWS: {
    ENABLED: true,
    MAX_PER_PAGE: 10,
    ALLOW_ANONYMOUS: false,
  },
  TESTIMONIALS: {
    ENABLED: true,
    MAX_PER_PAGE: 6,
    AUTO_ROTATE: true,
    ROTATION_INTERVAL: 5000,
  },
  DARK_MODE: {
    ENABLED: true,
    DEFAULT_THEME: 'system' as const,
  },
  ANALYTICS: {
    ENABLED: true,
    TRACK_PAGE_VIEWS: true,
    TRACK_USER_INTERACTIONS: true,
  },
} as const;

// UI Constants
export const UI_CONFIG = {
  THEME: {
    PRIMARY_COLOR: '#3B82F6',
    SECONDARY_COLOR: '#8B5CF6',
    ACCENT_COLOR: '#06B6D4',
  },
  BREAKPOINTS: {
    MOBILE: '640px',
    TABLET: '768px',
    DESKTOP: '1024px',
    WIDE: '1280px',
  },
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  REVIEWS: '/reviews',
  TESTIMONIALS: '/testimonials',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  VALIDATION: 'Please check your input and try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  REVIEW_SUBMITTED: 'Thank you for your review!',
  TESTIMONIAL_SUBMITTED: 'Thank you for your testimonial!',
  CONTACT_SUBMITTED: 'Thank you for contacting us!',
  SETTINGS_SAVED: 'Settings saved successfully!',
} as const;
