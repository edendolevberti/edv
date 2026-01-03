import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            השירותים <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">שלנו</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            אנחנו מספקים מעטפת מלאה של פתרונות וידאו וקריאייטיב כדי שהמותג שלכם יבלוט מעל כולם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-transparent stroke-[1.5] text-white" style={{ stroke: "url(#blue-gradient)" }} />
                  {/* Fallback for icon color since gradient on svg stroke is tricky in pure react without definitions */}
                  <service.icon size={32} className="absolute text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;