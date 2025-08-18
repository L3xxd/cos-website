import React from 'react';
import { Umbrella, Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Umbrella className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Sombrilla Rosa</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Endulzamos tus momentos especiales desde 2014. Cada cupcake es una 
              pequeña obra de arte creada con amor y dedicación para hacer sonreír 
              a nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-pink-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">¿Quiénes somos?</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Precios</a></li>
              <li><a href="#video" className="text-gray-300 hover:text-white transition-colors duration-200">Video</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-pink-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">Av. Dulce Hogar 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">hola@sombrillarosa.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-pink-400">Horarios</h5>
              <p className="text-gray-300 text-sm">Lun - Vie: 8:00 - 20:00</p>
              <p className="text-gray-300 text-sm">Sáb - Dom: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sombrilla Rosa. Todos los derechos reservados. 
            Hecho con <Heart className="inline h-4 w-4 text-pink-400 mx-1" /> por nuestro equipo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;