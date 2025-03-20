import React from 'react';
import AnimatedSection from './AnimatedSection';

const dishes = [
  {
    id: 1,
    name: 'Grilled Scallops with Lemon Butter Sauce',
    category: 'Appetizers',
    image: '/assets/dish1.jpg',
    ingredients: 'Scallops, garlic, lemon, butter, herbs',
    award: 'Featured in Food & Wine Magazine'
  },
  {
    id: 2,
    name: 'Roasted Lamb with Herb Crust',
    category: 'Main Courses',
    image: '/assets/dish2.jpg',
    ingredients: 'Grass-fed lamb, rosemary, garlic, thyme, Dijon mustard',
    award: 'Best Dish Award 2024'
  },
  {
    id: 3,
    name: 'Dark Chocolate Soufflé',
    category: 'Desserts',
    image: '/assets/dish3.jpg',
    ingredients: 'Dark chocolate, eggs, butter, vanilla bean',
    award: 'Pastry Excellence Award'
  },
  {
    id: 4,
    name: 'Grilled Scallops with Lemon Butter Sauce',
    category: 'Appetizers',
    image: '/assets/dish1.jpg',
    ingredients: 'Scallops, garlic, lemon, butter, herbs',
    award: 'Featured in Food & Wine Magazine'
  },
  {
    id: 5,
    name: 'Roasted Lamb with Herb Crust',
    category: 'Main Courses',
    image: '/assets/dish2.jpg',
    ingredients: 'Grass-fed lamb, rosemary, garlic, thyme, Dijon mustard',
    award: 'Best Dish Award 2024'
  },
  {
    id: 6,
    name: 'Dark Chocolate Soufflé',
    category: 'Desserts',
    image: '/assets/dish3.jpg',
    ingredients: 'Dark chocolate, eggs, butter, vanilla bean',
    award: 'Pastry Excellence Award'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">My Culinary Creations</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-amber-100 hover:shadow-amber-200/50 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-amber-600">{dish.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-amber-900">{dish.name}</h3>
                <p className="mt-3 text-sm text-amber-700">
                  <span className="font-medium">Ingredients:</span> {dish.ingredients}
                </p>
                <div className="mt-4 flex items-center">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2 text-sm text-amber-600">{dish.award}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
