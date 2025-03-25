import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setLoading(false);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Log the data being sent
      console.log('Sending data:', formData);

      // Make API call using axios
      const response = await axios.post('http://chefevan.se/api/messages', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: false,
        crossDomain: true,
        mode: 'cors'
      });

      // Log the response
      console.log('Response:', response.data);

      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      // Show error message
      alert('Failed to send message. Please try again.');

      // Log detailed error information
      console.error('API Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: error.config
      });
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getInputClasses = (fieldName) => {
    const baseClasses = "block w-full px-4 py-3 pl-10 rounded-lg border bg-white transition-all duration-200";
    const focusClasses = focusedField === fieldName
      ? "border-amber-500 ring-2 ring-amber-200 shadow-lg"
      : "border-amber-300 hover:border-amber-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 shadow-sm";
    return `${baseClasses} ${focusClasses}`;
  };

  const labelClasses = "block text-sm font-medium text-amber-700 mb-1";

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'contact@chef-evan.com',
      link: 'mailto:contact@chef-evan.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'New York City, NY',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-amber-900 sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-xl text-amber-700">
              Ready to create an unforgettable culinary experience? Let's discuss how I can help make your event special.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Methods */}
          <div className="space-y-8 flex flex-col h-full">
            <AnimatedSection className="flex-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full border border-amber-100 hover:shadow-amber-100/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.title}
                      href={method.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex items-center p-4 rounded-lg hover:bg-amber-50/80 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center">
                          {method.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-amber-700">{method.title}</p>
                        <p className="text-base font-semibold text-amber-900">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex-1">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-lg p-8 text-white h-full hover:shadow-amber-200/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Available Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 h-full border border-amber-100 hover:shadow-amber-100/50 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 md:mb-8">Send a Message</h3>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <label htmlFor="name" className={labelClasses}>
                      Your Name
                    </label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-amber-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`${getInputClasses('name')} text-base md:text-lg`}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-amber-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`${getInputClasses('email')} text-base md:text-lg`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="subject" className={labelClasses}>
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-amber-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`${getInputClasses('subject')} text-base md:text-lg`}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="message" className={labelClasses}>
                    Your Message
                  </label>
                  <div className="relative">
                    <div class="absolute top-4 left-3 flex items-start pointer-events-none text-amber-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${getInputClasses('message')} h-48 resize-none text-base md:text-lg`}
                      placeholder="Enter your message"
                      required
                      rows={10}
                    />
                  </div>
                </motion.div>

                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all duration-300 text-base md:text-lg"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
