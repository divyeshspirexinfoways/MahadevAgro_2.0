import React from 'react';
import { Award, Globe, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Premium Quality Milling',
      icon: <Award className="w-16 h-16 lg:w-20 lg:h-20 stroke-[0.5]" />,
      description: 'We use state-of-the-art milling facilities to ensure every grain is perfectly polished and sorted to meet global standards.'
    },
    {
      title: 'Global Shipping',
      icon: <Globe className="w-16 h-16 lg:w-20 lg:h-20 stroke-[0.5]" />,
      description: 'Our seamless supply chain guarantees timely and safe delivery of agricultural products across international borders.'
    },
    {
      title: 'Custom Packaging',
      icon: <Layers className="w-16 h-16 lg:w-20 lg:h-20 stroke-[0.5]" />,
      description: 'We offer flexible and branded packaging options tailored to suit diverse market requirements and maintain product freshness.'
    }
  ];

  return (
    <section className="outfit w-full bg-white text-black py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-12 lg:p-10 border border-neutral-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <h3 className="text-xl lg:text-2xl font-light mb-10 text-neutral-800 tracking-wide">
                {service.title}
              </h3>
              
              <div className="mb-16 text-neutral-700">
                {service.icon}
              </div>
              
              <p className="text-neutral-500 leading-relaxed font-light text-base lg:text-lg mb-10 max-w-[320px]">
                {service.description}
              </p>
              
              <button className="mt-auto text-md font-medium tracking-wide text-neutral-800 hover:text-black transition-colors cursor-pointer">
                View Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
