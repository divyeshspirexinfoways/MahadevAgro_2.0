import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2 } from 'lucide-react';

const VisionMission = () => {
  const visionPoints = [
    "Global Leadership in Quality Standards",
    "Innovation in Sustainable Farming",
    "Purity and Trust in Every Grain",
    "Global Accessibility of Premium Grains"
  ];

  const missionPoints = [
    "Transparent and Ethical Sourcing",
    "Empowering Local Farming Communities",
    "Zero-Compromise on Purity and Taste",
    "Reliable and Efficient Global Supply Chain"
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24 lg:mb-40">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden w-full h-[350px] lg:h-[550px]">
              <img 
                src="https://i.pinimg.com/736x/6c/cf/87/6ccf873cb76d7a5e6651271758e7ce81.jpg" 
                alt="Our Vision" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[5.5rem] font-bold tracking-tight mb-4 leading-[1.1] text-neutral-900">
              Our <br />
              <span className="flex items-center gap-6 mt-2">
                 <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Vision
              </span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed font-medium mb-8">
              To be the global benchmark in agricultural exports, recognized for purity, innovation, and sustainable farming practices that enrich lives worldwide. We aim to set the standard for excellence in every grain we deliver.
            </p>
            
            <ul className="space-y-4 mb-8">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-600 font-medium">
                  <CheckCircle2 className="text-neutral-900 w-5 h-5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-neutral-400 text-base leading-relaxed italic border-t border-neutral-100 pt-6">
              Our long-term goal is to bridge the gap between traditional farming wisdom and modern global demand, ensuring that natural goodness reaches every household.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden w-full h-[350px] lg:h-[550px]">
              <img 
                src="https://i.pinimg.com/1200x/66/0a/07/660a07cfef3474671d03d41bc6742027.jpg" 
                alt="Our Mission" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[5.5rem] font-bold tracking-tight mb-4 leading-[1.1] text-neutral-900">
              Our <br />
              <span className="flex items-center gap-6 mt-2">
                 <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Mission
              </span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed font-medium mb-8">
              To deliver the highest quality grains through transparent processes, empower local farmers, and maintain excellence in every export to exceed global expectations. Our mission is built on the foundation of trust and purity.
            </p>

            <ul className="space-y-4 mb-8">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-600 font-medium">
                  <CheckCircle2 className="text-neutral-900 w-5 h-5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-neutral-400 text-base leading-relaxed italic border-t border-neutral-100 pt-6">
              By investing in cutting-edge logistics and maintaining direct relationships with growers, we ensure a sustainable and reliable future for agro-exports.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
