import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // En una implementación real, controlarías la reproducción del video aquí
  };

  return (
    <section id="video" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Video <span className="text-pink-400">Promocional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre el arte detrás de nuestros cupcakes. Ve cómo cada creación 
            cobra vida con amor, dedicación y los mejores ingredientes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Promocional - Sweet Dreams Cupcakes"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-2 w-10 h-10 bg-orange-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥧</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Proceso Artesanal</h4>
              <p className="text-gray-600">Ve cómo nuestros maestros pasteleros crean cada cupcake desde cero.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Decoración Única</h4>
              <p className="text-gray-600">Descubre las técnicas especiales que hacen únicos nuestros diseños.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Hechos con Amor</h4>
              <p className="text-gray-600">Siente la pasión y dedicación que ponemos en cada creación.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Te gustó lo que viste?</h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestra comunidad dulce y recibe descuentos exclusivos, 
              recetas secretas y las últimas novedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email aquí"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;