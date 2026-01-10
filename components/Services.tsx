import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            השירותים <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">שלנו</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            מבניית אתר מנצח ועד השתלטות על תוצאות החיפוש והסושיאל. אנחנו בונים לכם אקו-סיסטם דיגיטלי מושלם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-transparent stroke-[1.5] text-white" />
                  <service.icon size={32} className="absolute text-purple-500 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
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