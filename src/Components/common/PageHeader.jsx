import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-full h-[50vh] lg:h-[60vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6 text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase mt-12 lg:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white">{title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-4 tracking-tight">
            {title}
          </h1>

          {/* Subtitle (Optional) */}
          {subtitle && (
            <p className="text-white/80 text-sm lg:text-l font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;