import React from 'react';
import { ShieldCheck, Globe2, Layers, Clock, DollarSign, ArrowRight } from 'lucide-react';

const usps = [
  {
    title: "High-Quality Grains",
    description: "Sourced directly from the best farms, ensuring pristine quality and nutritional value in every grain.",
    icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
  },
  {
    title: "International Standards",
    description: "Certified and compliant with global food safety and quality regulations for seamless export.",
    icon: <Globe2 className="w-6 h-6 stroke-[1.5]" />
  },
  {
    title: "Timely Delivery",
    description: "Efficient logistics and supply chain management to guarantee your orders arrive right on schedule.",
    icon: <Clock className="w-6 h-6 stroke-[1.5]" />
  },
  {
    title: "Competitive Pricing",
    description: "Experience premium quality products at fair, market-leading prices without breaking the bank.",
    icon: <DollarSign className="w-6 h-6 stroke-[1.5]" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white overflow-hidden outfit">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading and Description Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:mb-16">
          <div>
            <span className="text-md font-bold tracking-wide mb-6 block text-neutral-800">
              Why Choose Us?
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem]  font-bold tracking-tight leading-[1.1] text-neutral-900">
              The Mahadev <br />
              <span className="flex items-center gap-4 mt-2">
                <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-black"></span> Difference
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-[17px] lg:max-w-lg leading-relaxed md:mb-4">
            Our unwavering commitment to excellence ensures that you receive the highest quality products, backed by a global supply chain you can trust.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 xl:gap-25 relative">
          
          {/* Left Column - Uneven Staggered Layout */}
          <div className="w-full lg:w-[55%] flex flex-col sm:flex-row mt-12 lg:mt-0">
            
            {/* Sub-column 1 (Staggered down) */}
            <div className="w-full sm:w-1/2 flex flex-col sm:pt-24 sm:border-r border-gray-200">
              <div className="bg-white p-8 lg:p-4 xl:p-10 flex gap-5 lg:gap-3 xl:gap-5 items-start group transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-md border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 group-hover:text-[#b04a3e] transition-all duration-500">
                  {usps[0].icon}
                </div>
                <div>
                  <h3 className="text-[19px] lg:text-[17px] xl:text-[19px] font-bold text-neutral-900 mb-2 tracking-tight">{usps[0].title}</h3>
                  <p className="text-gray-500 text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed">{usps[0].description}</p>
                </div>
              </div>
              
              {/* Horizontal Divider - Not joining the vertical border */}
              <div className="mx-8 lg:mx-4 xl:mx-10 h-px bg-gray-200"></div>
              
              <div className="bg-white p-8 lg:p-4 xl:p-10 flex gap-5 lg:gap-3 xl:gap-5 items-start group transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-md border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 group-hover:text-[#b04a3e] transition-all duration-500">
                  {usps[1].icon}
                </div>
                <div>
                  <h3 className="text-[19px] lg:text-[17px] xl:text-[19px] font-bold text-neutral-900 mb-2 tracking-tight">{usps[1].title}</h3>
                  <p className="text-gray-500 text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed">{usps[1].description}</p>
                </div>
              </div>
            </div>

            {/* Sub-column 2 (Aligned top) */}
            <div className="w-full sm:w-1/2 flex flex-col sm:pb-24">
              <div className="bg-white p-8 lg:p-4 xl:p-10 flex gap-5 lg:gap-3 xl:gap-5 items-start group transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-md border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 group-hover:text-[#b04a3e] transition-all duration-500">
                  {usps[2].icon}
                </div>
                <div>
                  <h3 className="text-[19px] lg:text-[17px] xl:text-[19px] font-bold text-neutral-900 mb-2 tracking-tight">{usps[2].title}</h3>
                  <p className="text-gray-500 text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed">{usps[2].description}</p>
                </div>
              </div>
              
              {/* Horizontal Divider - Not joining the vertical border */}
              <div className="mx-8 lg:mx-4 xl:mx-10 h-px bg-gray-200"></div>
              
              <div className="bg-white p-8 lg:p-4 xl:p-10 flex gap-5 lg:gap-3 xl:gap-5 items-start group transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-md border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 group-hover:text-[#b04a3e] transition-all duration-500">
                  {usps[3].icon}
                </div>
                <div>
                  <h3 className="text-[19px] lg:text-[17px] xl:text-[19px] font-bold text-neutral-900 mb-2 tracking-tight">{usps[3].title}</h3>
                  <p className="text-gray-500 text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed">{usps[3].description}</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column - Image with Overlay */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="relative overflow-hidden flex flex-col justify-end h-100 xl:h-[530px] shadow-sm mt-auto">
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800" 
                alt="Quality Export" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content overlayed at bottom with Glass Effect */}
              <div className="relative z-10 p-6 lg:p-4 xl:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-4 xl:p-8 shadow-xl flex flex-col justify-end transition-all duration-300 hover:bg-white/15">
                  <p className="text-white text-[16px] lg:text-[13px] xl:text-[16px] leading-relaxed max-w-sm font-medium">
                    For years, we've been a proud exporter, earning and maintaining the trust of global markets through uncompromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
