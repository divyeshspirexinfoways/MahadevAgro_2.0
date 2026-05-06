import React from 'react';

const About = () => {
  return (
    <section className="outfit w-full bg-white text-black py-16 lg:py-20 relative overflow-hidden font-sans">
      
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center lg:gap-10 relative">
        
        {/* Left Side: Image with Accent Blocks */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          
          {/* Main Image Container */}
          <div className="relative z-10 w-[85%] lg:w-[620px] lg:h-[650px] h-auto shadow-md ml-auto md:ml-0 lg:ml-12 mt-12 lg:mt-0">
            <img 
              src="https://i.pinimg.com/1200x/da/4c/c8/da4cc84e4aba23138da71ae896b78b29.jpg" 
              alt="Mahadev Agro Fields" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orange Accent - Left */}
          <div className="absolute top-1/4 left-0 lg:-left-0 w-20 h-55 lg:w-24 md:h-72 bg-(--beige) z-20 flex items-center justify-center">
            <span className="text-black text-lg font-medium tracking-[0.2em] -rotate-90 whitespace-nowrap flex items-center gap-4">
              Discover <span className="inline-block w-8 h-[1px] bg-black"></span>
            </span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10 mt-16 lg:mt-0 pl-0 lg:pl-12">
          
          <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem] font-bold tracking-tight mb-4 leading-[1.1] text-neutral-900">
            Premium <br />
            <span className="flex items-center gap-6 mt-2">
               <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Quality
            </span>
          </h2>

          <div className="relative lg:pl-0 xl:pl-10 max-w-4xl mt-6 lg:mt-10">
            <p className="text-neutral-500 text-sm lg:text-base xl:text-lg leading-[1.9] font-medium tracking-wide">
              Mahadev Agro is the leading exporter of the finest quality rice, cultivated with traditional practices and modern precision. We are dedicated to ensuring excellence from the paddy fields directly to the global market. A strictly rational use of sustainable materials, an openness to innovation, and the preference of natural processes.
            </p>

            <div className="mt-10 lg:mt-10">
              <h3 className="text-xl lg:text-2xl font-medium text-neutral-900 mb-6">Global connection</h3>
              <div className="flex flex-wrap gap-1 xl:gap-4 text-sm lg:text-base text-neutral-800">
                {['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait'].map((country) => (
                  <span 
                    key={country} 
                    className="px-6 lg:px-8 py-2.5 lg:py-3 bg-white border border-neutral-200 shadow-xs hover:shadow-md transition-shadow rounded-full font-light cursor-default"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
