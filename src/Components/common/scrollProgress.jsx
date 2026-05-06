
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let timeoutId = null;

    const debounce = (func, delay) => {
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const handleScroll = debounce(() => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
      setScrollProgress(scrollPercent);
    }, 16); // ~60fps

    handleScroll(); // Initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  // Determine colors based on scroll position
  const isAtBottom = scrollProgress === 100;
  const progressColor = isAtBottom ? '#ffffff' : '#058846';
  const iconColor = isAtBottom ? 'text-white' : 'text-(--yellow)';

  return (
    <div className={`fixed bottom-20 right-6 z-50 transition-opacity duration-300 ${scrollProgress === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-13 h-13">
        {/* Background circle */}
        <svg className="w-13 h-13 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#1c1c1d50"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={progressColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        {/* Up arrow icon */}
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={handleClick}>
          <svg 
            className={`w-6 h-6 transition-all duration-300 ease-in-out ${iconColor}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}