import React from 'react';
import { motion } from 'framer-motion';

const AboutMahadev = () => {
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '50+', label: 'Global Markets' }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Flex Row (Content & Image) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24 mb-16 lg:mb-20">

          {/* Left Side: Content about Products */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-6xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[5.5rem] font-bold tracking-tight mb-4 leading-[1.1] text-neutral-900">
                About <br />
                <span className="flex items-center gap-6 mt-2">
                  <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Mahadev Agro
                </span>
              </h2>

              <div className="mt-8 lg:mt-12">
                <p className="text-neutral-500 text-md leading-relaxed mb-6 font-medium">
                  Mahadev Agro is a trusted name in the global agricultural market, specializing in the export of the finest varieties of grains. Our portfolio includes meticulously processed products that retain their natural aroma and superior nutritional value.
                </p>

                <p className="text-neutral-500 text-md leading-relaxed mb-10 font-medium">
                  We are committed to maintaining the highest international standards of purity and trust,
                  ensuring that every export reflects our dedication to agricultural excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-neutral-100 pl-6">
                  <h5 className="font-bold text-neutral-900 mb-2">Global Export</h5>
                  <p className="text-neutral-400 text-sm">Expanding horizons with trusted quality worldwide.</p>
                </div>
                <div className="border-l-2 border-neutral-100 pl-6">
                  <h5 className="font-bold text-neutral-900 mb-2">Pure Origins</h5>
                  <p className="text-neutral-400 text-sm">Sourced directly from the heart of fertile lands.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image Column */}
          <motion.div
            className="w-full lg:w-1/2 relative flex flex-col items-center xl:block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[450px] aspect-[3/4] xl:h-[650px] overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/24/e0/3c/24e03ce4d4762dcbc3980ce4a49983f6.jpg"
                alt="Mahadev Agro Rice Fields"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Stats - Only visible on XL and above */}
            <div className="hidden xl:block">
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute xl:-right-24 2xl:-right-50 top-0 bg-(--green)/20 backdrop-blur-xl p-10 border border-gray-200 z-30 w-full xl:max-w-[380px] 2xl:max-w-[400px]"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-4xl font-bold text-neutral-900 tracking-tighter">98%</h3>
                  <span className="text-neutral-500 font-semibold tracking-wide text-sm">Quality Success</span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                  Mahadev Agro is dedicated to empowering global markets with the finest,
                  purest quality rice cultivated through sustainable practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute xl:-right-12 2xl:-right-16 top-[35%] bg-white/60 backdrop-blur-xl p-10 border border-gray-100 z-30 w-full xl:max-w-[380px] 2xl:max-w-[400px]"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-4xl font-bold text-neutral-900 tracking-tighter">15+</h3>
                  <span className="text-neutral-500 font-semibold tracking-wide text-sm">Experience</span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                  Our vision is to be a global leader in rice export, creating a
                  brighter future through natural excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row - Visible on Mobile and LG (1024px) screens */}
        <div className="xl:hidden flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-(--green)/20 backdrop-blur-xl p-8 border border-gray-200"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-3xl font-bold text-neutral-900">98%</h3>
              <span className="text-neutral-500 font-semibold text-sm">Quality Success</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Dedicated to empowering global markets with the finest, purest quality rice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white/60 backdrop-blur-xl p-8 border border-gray-100"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-3xl font-bold text-neutral-900">15+</h3>
              <span className="text-neutral-500 font-semibold text-sm">Experience</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Global leader in rice export, creating a brighter future through excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMahadev;
