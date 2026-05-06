import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const OurCoreValues = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const values = [
        { id: "01", title: "Innovation", desc: "Pushing boundaries in agricultural tech.", img: "https://i.pinimg.com/736x/b6/10/cb/b610cb8e86a9e4310c543f30b16c0fb5.jpg" },
        { id: "02", title: "Quality", desc: "Uncompromising standards in every product.", img: "https://i.pinimg.com/736x/6c/cf/87/6ccf873cb76d7a5e6651271758e7ce81.jpg" },
        { id: "03", title: "Sustainability", desc: "Farming for a better tomorrow.", img: "https://i.pinimg.com/736x/b0/71/e1/b071e1da64ded30817d2114364848f82.jpg" },
        { id: "04", title: "Expertise", desc: "Decades of deep agricultural knowledge.", img: "https://i.pinimg.com/736x/31/94/1c/31941c6fc50dba58cb6c302899cc524c.jpg" },
        { id: "05", title: "Integrity", desc: "Honesty and transparency in all dealings.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
        { id: "06", title: "Global Reach", desc: "Connecting farmers across continents.", img: "https://i.pinimg.com/736x/6b/1f/d8/6b1fd894ccf2d3a7fe2cf1ef58939274.jpg" },
    ];

    // Double the array for seamless infinite sliding on desktop
    const repeatedValues = isMobile ? values : [...values, ...values];

    const handleNext = () => {
        if (currentIndex < values.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                        <span data-aos="zoom-in-right" className="text-md font-bold tracking-wide mb-6 block text-neutral-800">
                            Our Foundation
                        </span>
                        <h2 data-aos="zoom-in-right" className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-neutral-900">
                            Core Values <br />
                            <span className="flex items-center gap-4 mt-2">
                                <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-black"></span> & Principles
                            </span>
                        </h2>
                    </div>
                    <p data-aos="zoom-in-left" className="text-gray-500 text-[17px] lg:max-w-lg leading-relaxed md:mb-4">
                        Upholding excellence and integrity. Continuously evolving and staying true to our roots while transforming the future of tillage globally.
                    </p>
                </div>
            </div>

            {/* Slider Container */}
            <div className="relative flex">
                <motion.div 
                    className="flex gap-8 whitespace-nowrap lg:pl-6"
                    animate={isMobile ? { x: `-${currentIndex * (320 + 32)}px` } : { x: ["0%", "-50%"] }}
                    transition={
                        isMobile 
                        ? { type: "tween", ease: "easeInOut", duration: 0.5 }
                        : { duration: 40, repeat: Infinity, ease: "linear" }
                    }
                >
                    {repeatedValues.map((val, index) => (
                        <div 
                            key={`${val.id}-${index}`}
                            className={`flex-shrink-0 w-[320px] md:w-[380px] h-[480px] relative overflow-hidden group border border-gray-100 bg-black shadow-sm transition-all duration-500 ${
                                index % 2 === 0 ? 'mt-0' : 'mt-16'
                            }`}
                        >
                            {/* Background Image */}
                            <img 
                                src={val.img} 
                                alt={val.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                            />

                            {/* Black Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Number Background */}
                            <div className="absolute top-8 right-8 text-7xl font-black text-white/10 outfit group-hover:text-[var(--yellow)]/20 transition-colors duration-500">
                                {val.id}
                            </div>

                            {/* Content Wrapper */}
                            <div className="h-full p-10 flex flex-col justify-end relative z-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-1 bg-[var(--yellow)] rounded-full group-hover:w-20 transition-all duration-500" />
                                    <h3 className="text-2xl font-bold text-white outfit">
                                        {val.title}
                                    </h3>
                                    <p className="text-gray-300 whitespace-normal outfit leading-relaxed text-sm">
                                        {val.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Navigation Buttons */}
            {isMobile && (
                <div className="flex justify-center items-center gap-4 mt-12 md:hidden">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentIndex === 0}
                        className={`p-3 rounded-full transition-all duration-300 ${currentIndex === 0 ? 'text-gray-300 bg-gray-50' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        <ArrowLeft strokeWidth={1.5} size={24} />
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={currentIndex === values.length - 1}
                        className={`p-3 rounded-full transition-all duration-300 ${currentIndex === values.length - 1 ? 'text-gray-300 bg-gray-50' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        <ArrowRight strokeWidth={1.5} size={24} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default OurCoreValues;
