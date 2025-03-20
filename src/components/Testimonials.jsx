import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    content: "Chef Evan catered our wedding, and every dish was absolutely perfect. The guests are still talking about the food months later!",
    author: "Sarah & James Thompson",
    event: "Wedding Reception",
    image: "/src/assets/testimonial1.jpg"
  },
  {
    id: 2,
    content: "The private dining experience was exceptional. Chef Evan's attention to detail and creativity made our anniversary dinner unforgettable.",
    author: "Michael Chen",
    event: "Anniversary Dinner",
    image: "/src/assets/testimonial2.jpg"
  },
  {
    id: 3,
    content: "Our corporate event was elevated by Chef Evan's incredible menu. Professional, punctual, and the food was outstanding.",
    author: "Emily Rodriguez",
    event: "Corporate Event",
    image: "/src/assets/testimonial3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">What My Clients Are Saying</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-amber-100 hover:shadow-amber-200/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-amber-900">{testimonial.author}</h4>
                  <p className="text-sm text-amber-600">{testimonial.event}</p>
                </div>
              </div>
              <p className="text-amber-700 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
