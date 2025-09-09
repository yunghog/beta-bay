import React from 'react';
import Hero from '../../components/hero/Hero';
import { heroConfigs } from '../../components/hero/heroConfigs';

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hero Component Variations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore all 10 different hero section styles
          </p>
        </div>

        <div className="space-y-24">
          {/* Classic Centered */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              1. Classic Centered CTA
            </h2>
            <Hero config={heroConfigs.classicCentered} />
          </div>

          {/* Split Screen */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              2. Split Screen
            </h2>
            <Hero config={heroConfigs.splitScreen} />
          </div>

          {/* App Mockup */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              3. App Mockup Showcase
            </h2>
            <Hero config={heroConfigs.appMockup} />
          </div>

          {/* Video Background */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              4. Video Background Hero
            </h2>
            <Hero config={heroConfigs.videoBackground} />
          </div>

          {/* Minimalist */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              5. Minimalist (Text-Only)
            </h2>
            <Hero config={heroConfigs.minimalist} />
          </div>

          {/* Feature Highlights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              6. Feature Highlights in Hero
            </h2>
            <Hero config={heroConfigs.featureHighlights} />
          </div>

          {/* 3D Illustration */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              7. 3D/Illustration Hero
            </h2>
            <Hero config={heroConfigs.illustration3D} />
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              8. Testimonials as Hero
            </h2>
            <Hero config={heroConfigs.testimonials} />
          </div>

          {/* Interactive */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              9. Interactive Hero
            </h2>
            <Hero config={heroConfigs.interactive} />
          </div>

          {/* Multi CTA */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              10. Multi-CTA Hero
            </h2>
            <Hero config={heroConfigs.multiCTA} />
          </div>
        </div>
      </div>
    </div>
  );
}
