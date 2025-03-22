import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(8);

  const galleryImages = [
    { id: 1, src: '/assets/Gallery/IMG_5396.jpeg', title: 'Gourmet Dish' },
    { id: 2, src: '/assets/Gallery/IMG_5408.jpeg', title: 'Fine Dining' },
    { id: 3, src: '/assets/Gallery/IMG_5415.jpeg', title: 'Special Creation' },
    { id: 4, src: '/assets/Gallery/IMG_5421.jpeg', title: 'Culinary Art' },
    { id: 5, src: '/assets/Gallery/IMG_5429.jpeg', title: 'Chef\'s Special' },
    { id: 6, src: '/assets/Gallery/IMG_5433.jpeg', title: 'Signature Dish' },
    { id: 7, src: '/assets/Gallery/IMG_5456.jpeg', title: 'Elegant Plating' },
    { id: 8, src: '/assets/Gallery/IMG_5463.jpeg', title: 'Masterpiece' },
    { id: 9, src: '/assets/Gallery/IMG_5476.jpeg', title: 'Exquisite Dining' },
    { id: 10, src: '/assets/Gallery/IMG_5481.jpeg', title: 'Premium Selection' },
    { id: 11, src: '/assets/Gallery/IMG_5488.jpeg', title: 'Culinary Excellence' },
    { id: 12, src: '/assets/Gallery/IMG_5496.jpeg', title: 'Gourmet Experience' },
    { id: 13, src: '/assets/Gallery/IMG_5501.jpeg', title: 'Special Event' },
    { id: 14, src: '/assets/Gallery/IMG_5502.jpeg', title: 'Catering Service' },
    { id: 15, src: '/assets/Gallery/IMG_5760.jpeg', title: 'Private Dining' },
    { id: 16, src: '/assets/Gallery/IMG_5880.jpeg', title: 'Chef\'s Table' }
  ];

  const loadMore = () => {
    setVisibleImages(prev => Math.min(prev + 4, galleryImages.length));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-amber-800 mb-6">
            <span className="inline-block border-b-4 border-amber-400 pb-2">
              Galleries
            </span>
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            A showcase of our culinary artistry and memorable moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index % 4 * 0.1 // Stagger effect
              }}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-lg font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleImages < galleryImages.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              See More
            </button>
          </motion.div>
        )}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/70 backdrop-blur-sm transition-all duration-200 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
