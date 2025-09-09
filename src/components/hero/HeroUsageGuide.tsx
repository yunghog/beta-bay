import React from 'react';

const HeroUsageGuide: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        How to Use the Hero Component
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            1. Import the Component
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
{`import Hero from '../components/hero/Hero';
import { heroConfigs } from '../components/hero/heroConfigs';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            2. Use Pre-configured Variants
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
{`<Hero config={heroConfigs.classicCentered} />
<Hero config={heroConfigs.splitScreen} />
<Hero config={heroConfigs.appMockup} />
// ... and 7 more variants`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            3. Create Custom Configuration
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-x-auto">
{`const customHero: HeroConfig = {
  type: 'classic-centered',
  headline: 'Your Custom Headline',
  subheadline: 'Your custom subheadline text',
  ctaButtons: [
    { text: 'Primary Action', href: '/action', variant: 'primary' },
    { text: 'Secondary Action', href: '/secondary', variant: 'outline' }
  ],
  mockupImage: 'https://your-image-url.com/image.jpg'
};

<Hero config={customHero} />`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Available Hero Types
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">classic-centered</code> - Big headline + subheadline + CTA buttons</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">split-screen</code> - Text on left, image on right</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app-mockup</code> - Large mockup with floating features</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">video-background</code> - Full-width video with overlay text</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">minimalist</code> - Clean text-only design</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">feature-highlights</code> - Text + feature cards</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">3d-illustration</code> - 3D mockups with floating elements</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">testimonials</code> - Customer testimonials as hero</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">interactive</code> - Mouse-reactive elements</li>
            <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">multi-cta</code> - Multiple persona-based CTAs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Demo All Variations
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Visit <a href="/hero-demo" className="text-blue-600 dark:text-blue-400 hover:underline">/hero-demo</a> to see all 10 hero variations in action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroUsageGuide;
