import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="outfit bg-neutral-50 text-neutral-900 py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-neutral-100">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-15">
        {/* Tagline & CTA */}
        <div className="lg:col-span-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl xl:text-5xl font-medium mb-8 leading-tight forum"
          >
            Cultivating Trust,<br />
            Exporting Excellence.
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-3 border border-neutral-900/30 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-semibold"
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-neutral-400 text-md font-bold mb-6">Explore</h4>
          <ul className="space-y-4">
            {['Home', 'Products', 'About Us', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(' ', '')}`} className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300 forum text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h4 className="text-neutral-400 text-md font-bold mb-6">Contact</h4>
          <ul className="space-y-4 mb-8">
            <li className="text-neutral-500 forum text-lg">Gujarat, India</li>
            <li className="text-neutral-500 forum text-lg">info@mahadevagro.com</li>
            <li className="text-neutral-500 forum text-lg">+91 98765 43210</li>
          </ul>
          <div className="flex gap-4">
            {['In', 'Tw', 'Ig'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 border border-neutral-900/10 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300 text-xs font-bold text-neutral-500">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Name Footer */}
      {/* <div className="relative mt-5 pt-5">
        <motion.div
           initial={{ y: "100%" }}
           whileInView={{ y: 0 }}
           transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
           className="flex flex-col items-center"
        >
          <h1 className="text-[17vw] md:text-[20vw] leading-[0.8] font-black tracking-tighter select-none uppercase bg-gradient-to-b from-white via-white/40 to-black bg-clip-text text-transparent">
            MAHADEV
          </h1>
        </motion.div>
      </div> */}

      {/* Copyright Line */}
      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wide font-medium">
        <p>© 2026 Mahadev Agro Product. All Rights Reserved.</p>
        <p>Designed and Developed by <span className="text-gray-800 hover:text-[var(--orange)] transition-colors cursor-pointer">Spirex Infoways</span></p>
      </div>
    </footer>
  );
};

export default Footer;
