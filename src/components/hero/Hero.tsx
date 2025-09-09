"use client";

import React from 'react';
import Image from 'next/image';
import { HeroProps, HeroType } from '../../types/hero';

const Hero: React.FC<HeroProps> = ({ config, className = '' }) => {
  const renderCTAButtons = (buttons: any[]) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className={`
            font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center
            ${button.variant === 'primary' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : button.variant === 'secondary'
              ? 'bg-gray-600 hover:bg-gray-700 text-white'
              : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }
          `}
        >
          {button.icon && <span className="mr-2">{button.icon}</span>}
          {button.text}
        </a>
      ))}
    </div>
  );

  const renderStars = (rating: number) => (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const renderHeroContent = () => {
    switch (config.type) {
      case 'classic-centered':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
            {config.mockupImage && (
              <div className="mt-16">
                <Image
                  src={config.mockupImage}
                  alt="App Mockup"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
            )}
          </div>
        );

      case 'split-screen':
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {config.headline}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {config.subheadline}
              </p>
              {renderCTAButtons(config.ctaButtons)}
            </div>
            <div className="relative">
              {config.mockupImage && (
                <Image
                  src={config.mockupImage}
                  alt="App Screenshots"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              )}
            </div>
          </div>
        );

      case 'app-mockup':
        return (
          <div className="text-center">
            <div className="relative max-w-4xl mx-auto mb-12">
              {config.mockupImage && (
                <div className="relative">
                  <Image
                    src={config.mockupImage}
                    alt="App Mockup"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl mx-auto"
                  />
                  {/* Floating features */}
                  {config.interactiveElements?.map((element, index) => (
                    <div
                      key={index}
                      className="absolute bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse"
                      style={{
                        top: `${20 + index * 20}%`,
                        left: `${10 + index * 15}%`,
                        transform: 'translateY(-50%)'
                      }}
                    >
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {element}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
          </div>
        );

      case 'video-background':
        return (
          <div className="relative min-h-screen flex items-center justify-center">
            {config.videoUrl && (
              <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={config.videoUrl} type="video/mp4" />
              </video>
            )}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {config.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                {config.subheadline}
              </p>
              {renderCTAButtons(config.ctaButtons)}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        );

      case 'minimalist':
        return (
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8">
              {config.headline}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
          </div>
        );

      case 'feature-highlights':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {config.headline}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {config.subheadline}
              </p>
              {renderCTAButtons(config.ctaButtons)}
            </div>
            {config.features && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {config.features.map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case '3d-illustration':
        return (
          <div className="text-center max-w-6xl mx-auto">
            <div className="relative mb-16">
              {config.illustration && (
                <div className="relative">
                  <Image
                    src={config.illustration}
                    alt="3D Illustration"
                    width={600}
                    height={400}
                    className="mx-auto transform hover:scale-105 transition-transform duration-300"
                  />
                  {/* Floating elements */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
                  <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-bounce delay-500"></div>
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
          </div>
        );

      case 'testimonials':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {config.headline}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {config.subheadline}
              </p>
            </div>
            {config.testimonials && (
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {config.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>
            )}
            {renderCTAButtons(config.ctaButtons)}
          </div>
        );

      case 'interactive':
        return (
          <div className="text-center max-w-4xl mx-auto relative">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
            
            {/* Interactive floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              {config.interactiveElements?.map((element, index) => (
                <div
                  key={index}
                  className="absolute bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg animate-float"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${10 + index * 20}%`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {element}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'multi-cta':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {config.headline}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {config.subheadline}
              </p>
            </div>
            {config.personaCTAs && (
              <div className="grid md:grid-cols-3 gap-8">
                {config.personaCTAs.map((persona, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {persona.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {persona.description}
                    </p>
                    <div className="space-y-3">
                      {persona.buttons.map((button, btnIndex) => (
                        <a
                          key={btnIndex}
                          href={button.href}
                          className={`
                            block w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200
                            ${button.variant === 'primary' 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }
                          `}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {config.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {config.subheadline}
            </p>
            {renderCTAButtons(config.ctaButtons)}
          </div>
        );
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {renderHeroContent()}
      </div>
    </section>
  );
};

export default Hero;
