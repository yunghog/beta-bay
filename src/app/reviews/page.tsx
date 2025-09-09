import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      rating: 5,
      content: "Beta Bay transformed our digital presence completely. Their team delivered an exceptional web application that exceeded our expectations. The attention to detail and user experience is outstanding.",
      avatar: "SJ",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CTO",
      rating: 5,
      content: "Working with Beta Bay was a game-changer for our business. They built a robust e-commerce platform that handles thousands of transactions daily without any issues. Highly recommended!",
      avatar: "MC",
      date: "2024-01-08"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "Product Manager",
      rating: 5,
      content: "The mobile app they developed for us has been a huge success. The user interface is intuitive, and the performance is flawless. Our users love it!",
      avatar: "ER",
      date: "2023-12-20"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FinanceFlow",
      role: "Founder",
      rating: 5,
      content: "Beta Bay's cloud solutions helped us scale our infrastructure seamlessly. Their expertise in AWS and security is impressive. We couldn't have done it without them.",
      avatar: "DT",
      date: "2023-12-10"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Creative Agency",
      role: "Creative Director",
      rating: 5,
      content: "The team's creativity and technical skills are unmatched. They brought our vision to life with a beautiful, functional website that perfectly represents our brand.",
      avatar: "LW",
      date: "2023-11-28"
    },
    {
      id: 6,
      name: "James Wilson",
      company: "DataCorp",
      role: "Operations Director",
      rating: 5,
      content: "Their consulting services helped us optimize our entire tech stack. The improvements in performance and cost savings have been remarkable. Great team to work with!",
      avatar: "JW",
      date: "2023-11-15"
    }
  ];

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
              {" "}Reviews
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{review.avatar}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{review.role} at {review.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {getStars(review.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <svg className="w-16 h-16 mx-auto mb-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "Beta Bay doesn't just build software; they build partnerships. Their commitment to our success 
              goes beyond project delivery. They've become an integral part of our team."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AJ</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold">Alex Johnson</div>
                <div className="text-blue-200">CEO, Innovation Labs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
