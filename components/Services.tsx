import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-24 relative scroll-mt-24 z-10"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            השירותים <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">שלנו</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            מבניית אתר מנצח ועד השתלטות על תוצאות החיפוש והסושיאל. אנחנו בונים לכם אקו-סיסטם דיגיטלי מושלם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 flex flex-col items-center text-center lg:items-start lg:text-right"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-blue-500/30">
                  <service.icon size={32} className="text-gray-500 group-hover:text-transparent group-hover:stroke-blue-400 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
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