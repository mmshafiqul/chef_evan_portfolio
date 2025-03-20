import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Meet Chef Evan</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/assets/chef_evan_profile.jpg"
              alt="Chef Evan"
              className="h-auto max-h-[600px] w-auto rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all duration-300"
              style={{ height: 'max-content' }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-amber-800 leading-relaxed">
              I'm Chef Evan, a passionate culinary artist with over 10 years of experience in fine dining
              and private events. Trained at Le Cordon Bleu, I specialize in creating unforgettable
              dining experiences using locally sourced ingredients, with a focus on sustainable and
              innovative cooking methods.
            </p>
            <p className="text-lg text-amber-800 leading-relaxed">
              My culinary journey began in the bustling kitchens of Paris, where I honed my skills
              under renowned chefs. Today, I bring that expertise and creativity to every dish I create,
              combining classical techniques with modern innovation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all duration-300 border border-amber-100"
              >
                <div className="text-3xl font-bold text-amber-700">10+</div>
                <div className="text-sm text-amber-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all duration-300 border border-amber-100"
              >
                <div className="text-3xl font-bold text-amber-700">500+</div>
                <div className="text-sm text-amber-600">Events Catered</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all duration-300 border border-amber-100"
              >
                <div className="text-3xl font-bold text-amber-700">50+</div>
                <div className="text-sm text-amber-600">Signature Dishes</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
