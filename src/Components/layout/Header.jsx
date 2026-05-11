import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/HomeImg/brandlogo.png'
import LanguageSelector from '../common/LanguageSelector';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 lg:px-16 flex items-center justify-between border-b border-white/10">
        {/* Left Side: Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Mahadev Agro" className='w-20'/>
        </Link>

        {/* Center: Navlinks */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-white text-sm font-medium tracking-widest hover:text-gray-300 transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Language Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button 
            className="lg:hidden text-white cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-neutral-950 z-[70] lg:hidden flex flex-col p-8 border-l border-white/10"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8 mt-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-200 text-xl font-medium tracking-wider hover:text-white transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
