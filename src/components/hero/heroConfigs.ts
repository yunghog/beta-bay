import { HeroConfig } from '../../types/hero';

export const heroConfigs: Record<string, HeroConfig> = {
  classicCentered: {
    type: 'classic-centered',
    headline: 'Welcome to Beta Bay',
    subheadline: 'Your gateway to innovative solutions and cutting-edge technology. We build amazing experiences that matter.',
    ctaButtons: [
      { text: 'Get Started', href: '/contact', variant: 'primary' },
      { text: 'Learn More', href: '/about', variant: 'outline' }
    ],
    mockupImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  splitScreen: {
    type: 'split-screen',
    headline: 'Build Something Amazing',
    subheadline: 'Create stunning applications with our powerful tools and intuitive interface. Join thousands of developers who trust our platform.',
    ctaButtons: [
      { text: 'Start Building', href: '/services', variant: 'primary' },
      { text: 'View Demo', href: '/contact', variant: 'outline' }
    ],
    mockupImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  appMockup: {
    type: 'app-mockup',
    headline: 'Experience the Future',
    subheadline: 'See how our platform transforms your workflow with intelligent automation and seamless collaboration.',
    ctaButtons: [
      { text: 'Try It Free', href: '/contact', variant: 'primary' }
    ],
    mockupImage: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    interactiveElements: ['Smart Analytics', 'Team Collaboration', 'Real-time Sync', 'Advanced Security']
  },

  videoBackground: {
    type: 'video-background',
    headline: 'Transform Your Business',
    subheadline: 'Watch how our solutions drive real results for companies worldwide.',
    ctaButtons: [
      { text: 'Watch Demo', href: '/contact', variant: 'primary' },
      { text: 'Get Started', href: '/services', variant: 'outline' }
    ],
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761'
  },

  minimalist: {
    type: 'minimalist',
    headline: 'Simple. Powerful. Effective.',
    subheadline: 'The future of productivity is here.',
    ctaButtons: [
      { text: 'Get Started', href: '/contact', variant: 'primary' }
    ]
  },

  featureHighlights: {
    type: 'feature-highlights',
    headline: 'Everything You Need',
    subheadline: 'Powerful features designed to accelerate your success.',
    ctaButtons: [
      { text: 'Start Free Trial', href: '/contact', variant: 'primary' }
    ],
    features: [
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Blazing fast performance with optimized infrastructure'
      },
      {
        icon: '🔒',
        title: 'Secure',
        description: 'Enterprise-grade security and compliance'
      },
      {
        icon: '📊',
        title: 'Analytics',
        description: 'Comprehensive insights and reporting'
      },
      {
        icon: '🤝',
        title: 'Collaboration',
        description: 'Seamless team collaboration tools'
      }
    ]
  },

  illustration3D: {
    type: '3d-illustration',
    headline: 'Innovation Meets Design',
    subheadline: 'Beautiful, functional, and built for the modern web.',
    ctaButtons: [
      { text: 'Explore Features', href: '/services', variant: 'primary' },
      { text: 'See Examples', href: '/reviews', variant: 'outline' }
    ],
    illustration: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  testimonials: {
    type: 'testimonials',
    headline: 'Trusted by Industry Leaders',
    subheadline: 'See what our customers say about their experience.',
    ctaButtons: [
      { text: 'Read More Reviews', href: '/reviews', variant: 'primary' }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Inc.',
        content: 'Beta Bay transformed our digital presence completely. Their team delivered an exceptional solution.',
        avatar: 'SJ',
        rating: 5
      },
      {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'E-commerce Plus',
        content: 'Working with Beta Bay was a game-changer. They built a robust platform that handles thousands of transactions.',
        avatar: 'MC',
        rating: 5
      },
      {
        name: 'Emily Rodriguez',
        role: 'Product Manager',
        company: 'HealthTech Solutions',
        content: 'The mobile app they developed has been a huge success. Our users love it!',
        avatar: 'ER',
        rating: 5
      }
    ]
  },

  interactive: {
    type: 'interactive',
    headline: 'Interactive Experience',
    subheadline: 'Move your mouse around to see the magic happen.',
    ctaButtons: [
      { text: 'Try Interactive Demo', href: '/contact', variant: 'primary' }
    ],
    interactiveElements: ['Hover Effects', 'Smooth Animations', 'Dynamic Content', 'Real-time Updates']
  },

  multiCTA: {
    type: 'multi-cta',
    headline: 'Choose Your Path',
    subheadline: 'Different solutions for different needs.',
    ctaButtons: [],
    personaCTAs: [
      {
        title: 'I\'m a Developer',
        description: 'Build amazing applications with our developer tools and APIs.',
        buttons: [
          { text: 'View Documentation', href: '/services', variant: 'primary' },
          { text: 'Start Coding', href: '/contact', variant: 'outline' }
        ]
      },
      {
        title: 'I\'m a Business Owner',
        description: 'Scale your business with our enterprise solutions and support.',
        buttons: [
          { text: 'View Solutions', href: '/services', variant: 'primary' },
          { text: 'Schedule Demo', href: '/contact', variant: 'outline' }
        ]
      },
      {
        title: 'I\'m a Designer',
        description: 'Create stunning interfaces with our design tools and templates.',
        buttons: [
          { text: 'Browse Templates', href: '/services', variant: 'primary' },
          { text: 'Start Designing', href: '/contact', variant: 'outline' }
        ]
      }
    ]
  }
};
