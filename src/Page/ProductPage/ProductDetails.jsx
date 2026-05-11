import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../Components/common/PageHeader';

const productData = {
  '1121-basmati-rice': {
    name: '1121 Basmati Rice',
    category: 'Premium Export Quality',
    image: 'https://i.pinimg.com/1200x/24/e0/3c/24e03ce4d4762dcbc3980ce4a49983f6.jpg',
    headerImage: 'https://i.pinimg.com/1200x/da/4c/c8/da4cc84e4aba23138da71ae896b78b29.jpg',
    description: 'Mahadev Agro presents the finest 1121 Basmati Rice, a variety celebrated globally for its extraordinary grain length, slender shape, and enchanting aroma. Sourced from the best rice-growing regions, our 1121 Basmati is processed using state-of-the-art technology to ensure purity and nutritional integrity.',
    features: [
      "Extra Long Grain (8.35mm+)",
      "Non-Sticky and Fluffy Texture",
      "Superior Natural Aroma",
      "Pesticide-Free Cultivation",
      "Perfectly Aged for Richer Taste"
    ],
    specs: [
      { label: "Moisture", value: "12% Max" },
      { label: "Broken", value: "1% Max" },
      { label: "Purity", value: "95%" },
      { label: "Admixture", value: "5% Max" }
    ]
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <div className="py-40 text-center font-bold text-2xl">Product not found.</div>;

  return (
    <main className="outfit bg-white pb-20 lg:pb-32">
      <PageHeader 
        title={product.name}
        subtitle={product.category}
        image={product.headerImage}
      />
      <div className="container mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
        
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors mb-12 font-semibold tracking-wide text-md">
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-sm font-semibold text-neutral-400 tracking-wide mb-4 block">
              {product.category}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-neutral-500 text-lg leading-relaxed mb-12 font-medium">
              {product.description}
            </p>

            <div className="space-y-12">
              {/* Features List */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-600 font-medium">
                      <CheckCircle2 className="text-neutral-900 w-5 h-5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {product.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="text-sm font-semibold text-neutral-400 tracking-wide block mb-2">{spec.label}</span>
                      <span className="text-xl font-bold text-neutral-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link to="/contact" className="inline-block bg-neutral-900 text-white py-5 px-12 rounded-sm font-bold hover:bg-neutral-800 transition-colors">
                Inquiry Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
