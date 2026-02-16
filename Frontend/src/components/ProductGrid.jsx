import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'Orbit Watch Pro', category: 'Wearables', price: '₺8.499', img: 'https://images.unsplash.com/photo-1544117518-30dd5f7a942d?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Orbit Sound X', category: 'Audio', price: '₺4.200', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Orbit Phone 15', category: 'Phones', price: '₺54.999', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Orbit Tab Air', category: 'Tablets', price: '₺18.500', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400' },
];

const ProductGrid = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Phones', 'Wearables', 'Audio', 'Tablets'];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">En Yeni Amiral Gemileri</h2>
          <p className="text-gray-500">İhtiyacınıza uygun teknolojik çözümleri keşfedin.</p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat ? 'bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-xl font-bold text-primary mt-1">{product.name}</h3>
                  <p className="text-gray-900 font-semibold mt-4">{product.price}</p>
                  <button className="w-full mt-4 py-3 rounded-xl border border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-all">
                    Detaylar
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;