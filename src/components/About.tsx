import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Hechos con Amor",
      description: "Cada cupcake es elaborado con pasión y dedicación por nuestros maestros pasteleros."
    },
    {
      icon: Users,
      title: "Familia Sombrilla Rosa",
      description: "Somos un equipo unido que comparte la misión de endulzar tus momentos especiales."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Utilizamos solo los mejores ingredientes importados y técnicas artesanales."
    },
    {
      icon: Clock,
      title: "Tradición & Innovación",
      description: "10 años combinando recetas tradicionales con sabores innovadores."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes <span className="text-pink-400">Somos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sombrilla Rosa nació de la pasión por crear momentos dulces e inolvidables. 
            Somos más que una pastelería, somos los arquitectos de tus sonrisas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Nuestro equipo de pasteleros" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comenzamos en 2014 como un pequeño sueño en la cocina de casa. Hoy, 
              somos el destino favorito para cupcakes artesanales en la ciudad.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro compromiso es simple: crear cupcakes que no solo sean deliciosos, 
              sino que también cuenten una historia y creen recuerdos especiales.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">10+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">50k+</div>
                <div className="text-gray-600">Cupcakes vendidos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-pink-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;