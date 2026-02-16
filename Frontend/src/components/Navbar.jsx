import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'dark-glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-1.5 rounded-lg">
            <Cpu className="text-white" size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-primary'}`}>
            TECH<span className="text-secondary">ORBIT</span>
          </span>
        </div>
        
        <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-gray-300' : 'text-primary'}`}>
          <a href="#" className="hover:text-secondary transition-colors">Ürünler</a>
          <a href="#" className="hover:text-secondary transition-colors">Özellikler</a>
          <a href="#" className="hover:text-secondary transition-colors">Galeri</a>
          <a href="#" className="hover:text-secondary transition-colors">Destek</a>
        </div>

        <div className="flex items-center gap-4">
          <button className={`p-2 rounded-full ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-gray-100'}`}>
            <ShoppingBag size={20} />
          </button>
          <button className="bg-secondary text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
            İncele
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;