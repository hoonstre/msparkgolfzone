
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'bg-green-700 text-white' : 'bg-white text-green-700'
            }`}>
              <span className="font-black text-xl">MS</span>
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${
              isScrolled ? 'text-green-900' : 'text-white'
            }`}>
              MS <span className={isScrolled ? 'text-green-600' : 'text-green-400'}>PARK GOLF</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-bold text-sm tracking-widest uppercase group transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white/90'
                } hover:text-green-500`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#reservation" 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'bg-green-700 text-white hover:bg-green-800 shadow-md' 
                  : 'bg-white text-green-900 hover:bg-green-50'
              }`}
            >
              예약하기
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 h-full flex flex-col justify-center items-center space-y-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-gray-900 text-3xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-4xl font-black text-gray-900 hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#reservation" 
            className="mt-10 bg-green-700 text-white px-12 py-5 rounded-full text-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            예약 상담 신청
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
