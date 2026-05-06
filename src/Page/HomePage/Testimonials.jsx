import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Karan",
    time: "1 week ago",
    text: "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Catherine",
    time: "10 days ago",
    text: "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Peter",
    time: "2 weeks ago",
    text: "Visited to EO store. Product looks great, particularly welds, looked fantastic. My wife and I took small test ride around the parking lot area. We bought 2 bikes along with customization after sales support went over all the options. Highly satisfied.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 4,
    name: "Alex",
    time: "1 month ago",
    text: "Amazing experience! The quality of the products and the attention to detail is outstanding. I have been using their products for over a month now and I couldn't be happier. Highly recommended to everyone.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 5,
    name: "Sarah",
    time: "2 months ago",
    text: "I was skeptical at first, but after receiving my order, I was blown away by the quality. The delivery was fast and the packaging was secure. The support team was also very helpful in answering my questions.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: 6,
    name: "David",
    time: "3 months ago",
    text: "A truly premium product. The performance is exactly as advertised, maybe even better. It has completely changed my daily commute. I am very satisfied with my purchase and will definitely buy again.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardWidth = () => {
    if (windowWidth >= 1280) return 400; // Desktop original UI
    if (windowWidth >= 1024) return (windowWidth - 448 - 24) / 2; // Laptop 1024px (fits exactly 2 cards side-by-side)
    if (windowWidth >= 768) return (windowWidth - 48 - 24) / 2;  // Tablet (fits 2 cards completely)
    return windowWidth - 48; // Mobile
  };

  const cardWidth = getCardWidth();
  const cardsToShow = windowWidth >= 768 ? 2 : 1;
  const maxIndex = testimonials.length - cardsToShow;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const progressPercentage = ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="pb-10 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-[320px] flex-shrink-0 pt-4 z-10">
            <div className="mb-10">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 opacity-60" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <h2 className="text-[38px] leading-[1.2] font-medium text-gray-900 mb-16 tracking-tight">
              What our<br />customers are<br />saying
            </h2>
            
            {/* Navigation and Progress */}
            <div className="flex items-center gap-4 w-[260px]">
              <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className={`p-2 -ml-2 transition-all duration-300 cursor-pointer ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 hover:text-gray-500'}`}
              >
                <ArrowLeft strokeWidth={1.5} size={28} />
              </button>
              
              <div className="flex-1 h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
              
              <button 
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`p-2 -mr-2 transition-all duration-300 cursor-pointer ${currentIndex === maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 hover:text-gray-500'}`}
              >
                <ArrowRight strokeWidth={1.5} size={28} />
              </button>
            </div>
          </div>

          {/* Right Content - Cards Carousel */}
          <div className="w-full flex-1 relative min-h-[420px] overflow-hidden -my-4 py-4">
            <motion.div 
              className="flex gap-6 absolute top-4 left-0"
              animate={{ x: `calc(-${currentIndex * (cardWidth + 24)}px)` }} 
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.8 }}
            >
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={testimonial.id}
                  className={`
                    min-h-[380px] h-auto bg-[#FCFCFC] p-6 md:p-8 xl:p-10
                    flex flex-col justify-between
                    border border-gray-50 flex-shrink-0
                    ${idx < currentIndex ? 'opacity-0 transition-opacity duration-300 pointer-events-none' : 'opacity-100 transition-opacity duration-500 delay-200'}
                  `}
                  style={{ width: `${cardWidth}px` }}
                >
                  <div>
                    <p className="text-[#444] text-[15px] leading-[1.8] mb-8 line-clamp-5">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 text-[17px]">{testimonial.name}</h4>
                      <p className="text-[13px] text-gray-500 mt-0.5">{testimonial.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
