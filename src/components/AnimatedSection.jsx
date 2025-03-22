import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,
        scale: 0.95
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
