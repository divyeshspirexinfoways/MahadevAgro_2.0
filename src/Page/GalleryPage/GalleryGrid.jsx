import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GalleryGrid = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, src: "https://i.pinimg.com/1200x/66/0a/07/660a07cfef3474671d03d41bc6742027.jpg", span: "lg:col-span-1 lg:row-span-1" },
    { id: 2, src: "https://i.pinimg.com/1200x/24/e0/3c/24e03ce4d4762dcbc3980ce4a49983f6.jpg", span: "lg:col-span-1 lg:row-span-2" },
    { id: 3, src: "https://i.pinimg.com/1200x/b7/83/fc/b783fc79b95ad307d428b3cb44d98771.jpg", span: "lg:col-span-1 lg:row-span-1" },
    { id: 4, src: "https://i.pinimg.com/1200x/72/49/f9/7249f9d4dc613069a15fe165267cad98.jpg", span: "lg:col-span-1 lg:row-span-1" },
    { id: 5, src: "https://i.pinimg.com/736x/0a/e8/88/0ae8882e4ce432796de6e19604aecdca.jpg", span: "lg:col-span-1 lg:row-span-2" },
    { id: 6, src: "https://i.pinimg.com/736x/64/96/a2/6496a24188eddf6d5941958d9e90653a.jpg", span: "lg:col-span-2 lg:row-span-1" },
    // { id: 7, src: "https://i.pinimg.com/1200x/da/4c/c8/da4cc84e4aba23138da71ae896b78b29.jpg", span: "lg:col-span-1 lg:row-span-1" },
  ];

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Precise Grid Layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px]">
          {images.map((img) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 ${img.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-gray-400 transition-colors cursor-pointer z-[110]"
                onClick={() => setSelectedImg(null)}
              >
                <X size={40} strokeWidth={1} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-5xl h-[70vh] lg:h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImg} 
                  alt="Full view" 
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryGrid;
