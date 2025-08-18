import React, { useState } from 'react';
import { Menu, X, Umbrella } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Umbrella className="h-8 w-8 text-pink-400" />
            <span className="text-2xl font-bold text-gray-800">Sombrilla Rosa</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-400 transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pink-400 transition-colors duration-200"
            >
              ¿Quiénes somos?
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-pink-400 transition-colors duration-200"
            >
              Precios
            </button>
            <button 
              onClick={() => scrollToSection('video')}
              className="text-gray-700 hover:text-pink-400 transition-colors duration-200"
            >
              Video
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-pink-400 transition-colors duration-200"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-pink-400 transition-colors duration-200"
              >
                ¿Quiénes somos?
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-pink-400 transition-colors duration-200"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('video')}
                className="text-left text-gray-700 hover:text-pink-400 transition-colors duration-200"
              >
                Video
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;