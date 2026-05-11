import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Settings, Globe } from 'lucide-react';

const WhatWeDo = () => {
  const activities = [
    {
      icon: <Sprout className="w-8 h-8 text-neutral-900" />,
      title: "Ethical Sourcing",
      description: "We work directly with local farmers to ensure the finest raw materials are sourced sustainably and ethically."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-neutral-900" />,
      title: "Quality Assurance",
      description: "Every grain undergoes rigorous multi-stage testing to meet international safety and quality standards."
    },
    {
      icon: <Settings className="w-8 h-8 text-neutral-900" />,
      title: "Advanced Processing",
      description: "Utilizing state-of-the-art machinery to process grains while preserving their natural aroma and nutrients."
    },
    {
      icon: <Globe className="w-8 h-8 text-neutral-900" />,
      title: "Global Distribution",
      description: "A robust logistics network that ensures timely and safe delivery of our products to over 50 countries."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Heading Section */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-neutral-900">
            What <br />
            <span className="flex items-center gap-6 mt-2">
               <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> We Do
            </span>
          </h2>
          <p className="text-neutral-500 text-lg lg:text-lg leading-relaxed font-medium max-w-3xl">
            At Mahadev Agro, we manage the entire value chain from farm to fork, ensuring excellence at every step of the journey.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-neutral-100 transition-shadow duration-500 group"
            >
              <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {activity.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{activity.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
