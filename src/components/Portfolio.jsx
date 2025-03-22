import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: 'Signature Seafood Platter',
    category: 'Seafood',
    image: '/assets/Gallery/IMG_5396.jpeg',
    ingredients: 'Fresh prawns, calamari, grilled fish, lemon butter sauce',
    award: 'Best Seafood Dish 2024'
  },
  {
    id: 2,
    name: 'Gourmet Beef Wellington',
    category: 'Main Courses',
    image: '/assets/Gallery/IMG_5408.jpeg',
    ingredients: 'Prime beef tenderloin, mushroom duxelles, prosciutto, puff pastry',
    award: 'Chef\'s Special Creation'
  },
  {
    id: 3,
    name: 'Asian Fusion Delight',
    category: 'Fusion',
    image: '/assets/Gallery/IMG_5415.jpeg',
    ingredients: 'Seared tuna, wasabi cream, Asian slaw, soy reduction',
    award: 'Best Fusion Dish 2024'
  },
  {
    id: 4,
    name: 'Mediterranean Grilled Platter',
    category: 'Mediterranean',
    image: '/assets/Gallery/IMG_5421.jpeg',
    ingredients: 'Grilled vegetables, halloumi, hummus, tzatziki',
    award: 'Mediterranean Excellence Award'
  },
  {
    id: 5,
    name: 'Artisanal Pasta Creation',
    category: 'Italian',
    image: '/assets/Gallery/IMG_5429.jpeg',
    ingredients: 'Homemade pasta, truffle cream sauce, wild mushrooms',
    award: 'Best Italian Dish'
  },
  {
    id: 6,
    name: 'Exotic Dessert Platter',
    category: 'Desserts',
    image: '/assets/Gallery/IMG_5433.jpeg',
    ingredients: 'Chocolate mousse, berry compote, vanilla ice cream',
    award: 'Pastry Excellence Award'
  },
  {
    id: 7,
    name: 'Crispy Fried Chicken Special',
    category: 'Comfort Food',
    image: '/assets/Gallery/Crispy fried chicken by chef evan_Original.jpeg',
    ingredients: 'Farm-fresh chicken, secret spice blend, honey glaze',
    award: 'People\'s Choice Award'
  },
  {
    id: 8,
    name: 'Gourmet Breakfast Platter',
    category: 'Breakfast',
    image: '/assets/Gallery/IMG_20190308_121603624_Original.jpeg',
    ingredients: 'Farm eggs, artisanal bread, smoked salmon, avocado',
    award: 'Best Breakfast 2024'
  },
  {
    id: 9,
    name: 'Traditional Curry Selection',
    category: 'Indian Cuisine',
    image: '/assets/Gallery/IMG_20190414_121502165_Original.jpeg',
    ingredients: 'Aromatic spices, tender meat, fresh herbs, basmati rice',
    award: 'Authentic Flavor Award'
  },
  {
    id: 10,
    name: 'Summer Fresh Salad',
    category: 'Healthy',
    image: '/assets/Gallery/IMG_20190803_191554384_Original.jpeg',
    ingredients: 'Mixed greens, grilled chicken, quinoa, citrus dressing',
    award: 'Health & Wellness Choice'
  },
  {
    id: 11,
    name: 'Festive Special Platter',
    category: 'Special Events',
    image: '/assets/Gallery/IMG_5760.jpeg',
    ingredients: 'Selection of seasonal specialties, festive garnishes',
    award: 'Event Catering Excellence'
  },
  {
    id: 12,
    name: 'Chef\'s Table Experience',
    category: 'Fine Dining',
    image: '/assets/Gallery/IMG_5880.jpeg',
    ingredients: 'Premium ingredients, artistic presentation, seasonal elements',
    award: 'Fine Dining Excellence'
  },
  {
    id: 13,
    name: 'Modern Sushi Selection',
    category: 'Japanese',
    image: '/assets/Gallery/IMG_5456.jpeg',
    ingredients: 'Fresh sashimi, premium rice, wasabi, soy sauce',
    award: 'Best Sushi 2024'
  },
  {
    id: 14,
    name: 'French Steak Frites',
    category: 'French Cuisine',
    image: '/assets/Gallery/IMG_5463.jpeg',
    ingredients: 'Premium steak, golden fries, béarnaise sauce',
    award: 'Classic French Excellence'
  },
  {
    id: 15,
    name: 'Spanish Paella',
    category: 'Spanish',
    image: '/assets/Gallery/IMG_5476.jpeg',
    ingredients: 'Saffron rice, seafood, chorizo, bell peppers',
    award: 'Best Paella 2024'
  },
  {
    id: 16,
    name: 'Italian Risotto',
    category: 'Italian',
    image: '/assets/Gallery/IMG_5481.jpeg',
    ingredients: 'Arborio rice, parmesan, white wine, saffron',
    award: 'Traditional Italian Award'
  },
  {
    id: 17,
    name: 'Mexican Tacos',
    category: 'Mexican',
    image: '/assets/Gallery/IMG_5488.jpeg',
    ingredients: 'Grilled steak, fresh salsa, guacamole, cilantro',
    award: 'Best Mexican Street Food'
  },
  {
    id: 18,
    name: 'Thai Green Curry',
    category: 'Thai Cuisine',
    image: '/assets/Gallery/IMG_5496.jpeg',
    ingredients: 'Coconut milk, green curry paste, chicken, bamboo shoots',
    award: 'Best Thai Curry 2024'
  },
  {
    id: 19,
    name: 'Greek Meze Platter',
    category: 'Mediterranean',
    image: '/assets/Gallery/IMG_5501.jpeg',
    ingredients: 'Hummus, tzatziki, pita, olives, feta cheese',
    award: 'Best Meze Selection'
  },
  {
    id: 20,
    name: 'German Schnitzel',
    category: 'German',
    image: '/assets/Gallery/IMG_5502.jpeg',
    ingredients: 'Breaded veal, lemon, capers, potato salad',
    award: 'Classic German Excellence'
  },
  {
    id: 21,
    name: 'Modern Steakhouse',
    category: 'American',
    image: '/assets/Gallery/IMG_5396.jpeg',
    ingredients: 'Prime rib, roasted vegetables, red wine sauce',
    award: 'Best Steakhouse 2024'
  },
  {
    id: 22,
    name: 'Fresh Seafood Pasta',
    category: 'Italian',
    image: '/assets/Gallery/IMG_5408.jpeg',
    ingredients: 'Linguine, shrimp, scallops, white wine sauce',
    award: 'Best Pasta 2024'
  },
  {
    id: 23,
    name: 'Asian Hot Pot',
    category: 'Asian',
    image: '/assets/Gallery/IMG_5415.jpeg',
    ingredients: 'Premium broth, fresh vegetables, meat, tofu',
    award: 'Best Hot Pot 2024'
  },
  {
    id: 24,
    name: 'Mediterranean Mezze',
    category: 'Mediterranean',
    image: '/assets/Gallery/IMG_5421.jpeg',
    ingredients: 'Hummus, tabbouleh, falafel, pita',
    award: 'Best Mezze 2024'
  },
  {
    id: 25,
    name: 'Artisanal Pizza',
    category: 'Italian',
    image: '/assets/Gallery/IMG_5429.jpeg',
    ingredients: 'Wood-fired, fresh toppings, mozzarella',
    award: 'Best Pizza 2024'
  },
  {
    id: 26,
    name: 'Gourmet Burger',
    category: 'American',
    image: '/assets/Gallery/IMG_5433.jpeg',
    ingredients: 'Premium beef, artisanal cheese, special sauce',
    award: 'Best Burger 2024'
  },
  {
    id: 27,
    name: 'French Ratatouille',
    category: 'French',
    image: '/assets/Gallery/IMG_5456.jpeg',
    ingredients: 'Fresh vegetables, tomato sauce, herbs',
    award: 'Best Ratatouille 2024'
  },
  {
    id: 28,
    name: 'Spanish Tapas',
    category: 'Spanish',
    image: '/assets/Gallery/IMG_5463.jpeg',
    ingredients: 'Patatas bravas, croquetas, jamón',
    award: 'Best Tapas 2024'
  },
  {
    id: 29,
    name: 'Italian Arancini',
    category: 'Italian',
    image: '/assets/Gallery/IMG_5476.jpeg',
    ingredients: 'Risotto balls, mozzarella, breadcrumbs',
    award: 'Best Arancini 2024'
  },
  {
    id: 30,
    name: 'Mexican Tostadas',
    category: 'Mexican',
    image: '/assets/Gallery/IMG_5481.jpeg',
    ingredients: 'Crispy tortillas, beans, salsa, cheese',
    award: 'Best Tostadas 2024'
  }
];

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = React.useState(6);

  const handleSeeMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, dishes.length));
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-800 mb-6">
              <span className="inline-block border-b-4 border-amber-400 pb-2">
                Signature Dishes
              </span>
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Explore our award-winning culinary creations that blend tradition with innovation
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.slice(0, visibleItems).map((dish, index) => (
            <AnimatedSection key={dish.id} delay={index * 0.1}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl hover:shadow-amber-200/50 transform hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {dish.category}
                    </span>
                    <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{dish.name}</h3>
                  <p className="text-amber-700 text-sm mb-4">
                    <span className="font-medium">Ingredients:</span> {dish.ingredients}
                  </p>
                  <div className="pt-3 border-t border-amber-100">
                    <span className="text-sm font-medium text-amber-600">{dish.award}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {visibleItems < dishes.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              See More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
