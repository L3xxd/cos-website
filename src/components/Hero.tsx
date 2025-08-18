import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-orange-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600">+1000 clientes felices</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cupcakes
              <span className="text-pink-400"> Artesanales</span>
              <br />
              que Enamoran
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Endulzamos tus momentos especiales con cupcakes únicos, hechos con amor 
              y los mejores ingredientes. Cada bocado es una experiencia inolvidable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Ver Precios</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Conoce Nuestra Historia
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cupcakes artesanales" 
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-orange-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;