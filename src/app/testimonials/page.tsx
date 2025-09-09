import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      company: "StartupHub",
      role: "Founder & CEO",
      content: "Beta Bay transformed our vision into reality. Their technical expertise and creative approach helped us launch our platform ahead of schedule. The team's dedication and attention to detail is unmatched.",
      avatar: "JM",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Robert Kim",
      company: "HealthTech Innovations",
      role: "CTO",
      content: "Working with Beta Bay was one of the best decisions we made. They delivered a complex healthcare application that meets all compliance requirements while providing an exceptional user experience.",
      avatar: "RK",
      rating: 5,
      project: "Healthcare Management System"
    },
    {
      id: 3,
      name: "Amanda Foster",
      company: "EduTech Solutions",
      role: "Product Director",
      content: "The mobile learning app they built for us has revolutionized how our students engage with content. The intuitive design and smooth performance have significantly improved learning outcomes.",
      avatar: "AF",
      rating: 5,
      project: "Educational Mobile App"
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      company: "FinanceFirst",
      role: "Operations Manager",
      content: "Beta Bay's cloud migration services saved us thousands in infrastructure costs while improving our system's reliability. Their expertise in AWS and security is truly impressive.",
      avatar: "CR",
      rating: 5,
      project: "Cloud Infrastructure Migration"
    },
    {
      id: 5,
      name: "Sarah Thompson",
      company: "RetailMax",
      role: "Digital Marketing Director",
      content: "Our new website has increased online sales by 150%. The user experience is flawless, and the backend integration with our inventory system works seamlessly. Highly recommended!",
      avatar: "ST",
      rating: 5,
      project: "E-commerce Website Redesign"
    },
    {
      id: 6,
      name: "Michael Chang",
      company: "TechConsult Pro",
      role: "Managing Partner",
      content: "Their consulting services helped us modernize our entire tech stack. The performance improvements and cost optimizations have been game-changing for our business operations.",
      avatar: "MC",
      rating: 5,
      project: "Technology Stack Modernization"
    }
  ];

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Client
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Testimonials
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {"Discover how we've helped businesses achieve their goals through innovative technology solutions."}
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {getStars(5)}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              {"Beta Bay exceeded our expectations in every way. Their team's technical expertise, creative problem-solving, and commitment to our success made them the perfect partner for our project."}
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold">DL</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-semibold">David Lee</div>
                <div className="text-blue-200 text-lg">CEO, NextGen Solutions</div>
                <div className="text-blue-100 text-sm">Enterprise Software Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {getStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{testimonial.project}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Project: <span className="font-medium text-gray-700 dark:text-gray-300">{testimonial.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Numbers that speak to our commitment to client success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Retention Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">On-Time Delivery</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their businesses with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
