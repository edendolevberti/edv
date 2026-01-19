import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { ExternalLink, MessageCircle, Globe } from 'lucide-react';

const Gallery: React.FC = () => {
  const phoneNumber = '972547202011';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('היי עדן, התרשמתי מתיק העבודות באתר ואשמח לשמוע על בניית אתר')}`;

  return (
    <section id="gallery" className="py-24 relative scroll-mt-24 z-10">
      <div className="container mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            תיק <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">עבודות</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            מבחר פרויקטים נבחרים שביצענו. מוזמנים להתרשם מהעיצוב, המיתוג והחוויה הדיגיטלית.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
              
              {/* Browser Window Frame */}
              <div className="relative bg-slate-800 rounded-t-xl border-t border-x border-slate-700 p-3 flex items-center gap-2 shadow-xl">
                {/* Browser Dots */}
                <div className="flex gap-2 mr-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                {/* Address Bar Simulation */}
                <div className="flex-grow bg-slate-900/50 rounded-md px-3 py-1 text-xs text-gray-500 truncate font-mono flex items-center gap-2 border border-slate-700/50">
                   <Globe size={12} className="text-blue-500" />
                   {item.url}
                </div>

                {/* Open External Link Button */}
                {item.url && (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 text-gray-400 hover:text-white transition-colors"
                    title="פתח בחלון חדש"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Image Container (Replaces Iframe) */}
              <div className="relative w-full h-[300px] md:h-[400px] bg-slate-900 border-x border-b border-slate-700 shadow-2xl overflow-hidden rounded-b-xl group-hover:shadow-purple-500/20 transition-all duration-500">
                 <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800 text-gray-500">
                        תצוגה מקדימה לא זמינה
                      </div>
                    )}
                    
                    {/* Dark Gradient Overlay for text readability at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>

                    {/* Hover Overlay with Button */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                       <span className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                          <ExternalLink size={18} />
                          מעבר לאתר
                       </span>
                    </div>
                 </a>
              </div>

              {/* Description */}
              <div className="mt-5 px-2 pb-2">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed border-l-2 border-purple-500 pl-4 py-1">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center relative z-20">
          <div className="inline-block bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
             <p className="text-gray-300 mb-6 text-xl">רוצים אתר כזה לעסק שלכם? בואו נדבר תכלס.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={24} fill="white" />
                <span>לשיחת ייעוץ בוואטסאפ</span>
              </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;