import React from 'react';
import { Menu, Globe, ArrowUpRight } from 'lucide-react';
import hero from '../../assets/HomeImg/heroImg.jpeg'

const Hero = () => {
  return (
    <div className="outfit relative w-full min-h-screen lg:h-screen bg-neutral-950 text-white overflow-hidden pb-16 lg:pb-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src='https://i.pinimg.com/1200x/91/17/46/911746a1a981b16119772ef44cf2f2ab.jpg'
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </div>

      {/* Subtle Horizontal Line */}
      {/* <div className="absolute top-[14vw] left-0 w-full h-[0.5px] bg-white/5 z-0 transform -translate-y-1/2 "></div> */}

      {/* Main Content */}
      <div className="relative z-10 w-full lg:h-[calc(100vh-140px)] flex flex-col lg:flex-row items-start justify-between px-6 lg:px-24 max-w-[1800px] mx-auto gap-12 lg:gap-0 pt-32 lg:pt-0 lg:mt-[25vw] xl:mt-[15vw]">
        
        {/* Left Side Text */}
        <div className="w-full lg:w-5/10 xl:w-5/12">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Global Excellence <br /> In Rice Export.
          </h1>
          <p className="text-lg sm:text-xl lg:text-md xl:text-2xl leading-relaxed font-light text-neutral-300 tracking-wide mb-10">
            Mahadev Agro delivers refined, high-quality, & sustainably sourced rice to help your business thrive in a competitive global market.
          </p>
          <button className="bg-white text-black px-8 py-4 font-semibold tracking-wide rounded-full cursor-pointer flex items-center gap-3 hover:bg-neutral-200 transition-colors uppercase text-sm group w-fit">
            Explore Our Products 
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="w-full lg:w-[350px] xl:w-[500px] flex flex-col gap-6 lg:transform lg:translate-y-8">
          
          {/* Top Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 lg:p-4 xl:p-6 flex items-start gap-6 hover:bg-white/15 transition-colors cursor-pointer group">
            <div className="text-white mt-1 group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-md xl:text-xl font-semibold mb-2 tracking-wide">50+ Countries Served</h3>
              <p className="text-neutral-300 text-xs md:text-sm leading-relaxed font-light">
                Delivering premium quality rice and transforming agricultural trade with seamless global logistics.
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 lg:p-4 xl:p-6 flex flex-col sm:flex-row gap-6 hover:bg-white/15 transition-colors cursor-pointer group">
            <div className="w-full md:w-50 lg:w-30 xl:w-40 h-40 lg:h-30 xl:h-40 shrink-0 overflow-hidden">
              <img 
                // src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400"
                src="https://i.pinimg.com/1200x/9e/08/6e/9e086e95a797f5659413ce3d39c1e6df.jpg"
                alt="Premium Rice Export" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <h3 className="lg:text-md xl:text-xl font-semibold mb-2 tracking-wide">Export Excellence</h3>
                <p className="text-neutral-300 lg:text-xs xl:text-md leading-relaxed font-light mb-4">
                  We ensure quality, purity, and timely delivery worldwide.
                </p>
              </div>
              <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold tracking-wide group-hover:text-neutral-300 transition-colors">
                Our Products <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
