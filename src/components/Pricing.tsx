import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Sencillos",
      price: "$20",
      unit: "",
      popular: false,
      description: "Deliciosos y accesibles para cualquier momento desde: ",
      features: [
        "Sabores tradicionales",
        "Decoración básica",
        "Ingredientes frescos",
        "Empaque individual"
      ],
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Especiales",
      price: "$25",
      unit: "",
      popular: true,
      description: "Únicos y personalizados para ocasiones especiales por tan solo: ",
      features: [
        "Sabores gourmet exclusivos",
        "Decoración personalizada",
        "Ingredientes premium",
        "Empaque de lujo",
        "Mensaje personalizado",
        "Diseño temático"
      ],
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-pink-400">Precios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tenemos opciones para todos los gustos y presupuestos. 
            Cada cupcake es una obra de arte que vale cada centavo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-pink-400 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-pink-400 text-white text-center py-2 font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  MÁS POPULAR
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-pink-400">{pkg.price}</span>
                  <span className="text-gray-600 ml-1">{pkg.unit}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-pink-400 hover:bg-pink-500 text-white shadow-lg hover:shadow-xl' 
                    : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}>
                  Ordenar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas algo personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para crear cupcakes únicos para tu evento especial. 
            Trabajamos contigo para hacer realidad tu visión dulce.
          </p>
          <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;