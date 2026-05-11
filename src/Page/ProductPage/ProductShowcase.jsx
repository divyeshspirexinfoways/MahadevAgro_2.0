import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: '1121-basmati-rice',
    name: '1121 Basmati Rice',
    category: 'Premium Export Quality',
    image: 'https://i.pinimg.com/1200x/24/e0/3c/24e03ce4d4762dcbc3980ce4a49983f6.jpg',
    description: 'Known for its extra-long grain and unmatched aroma, our 1121 Basmati Rice is the gold standard of quality.'
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-neutral-900">
                Premium <br />
                <span className="flex items-center gap-6 mt-2">
                   <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Collection
                </span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-sm text-neutral-500 font-medium leading-relaxed lg:text-right pb-4"
            >
              From the heart of fertile lands to the global market, we bring you the finest varieties of rice.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-sm font-medium text-neutral-400 tracking-wide mb-1 block">{product.category}</span>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ProductShowcase;
