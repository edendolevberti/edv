import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { ExternalLink, MessageCircle, TrendingUp, BarChart, CheckCircle } from 'lucide-react';

const Gallery: React.FC = () => {
  const phoneNumber = '972547202011';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('היי עדן, ראיתי את הפרויקטים באתר ואשמח לשמוע איך אפשר לקדם את העסק שלי')}`;

  return (
    <section id="gallery" className="py-24 relative scroll-mt-24 z-10">
      <div className="container mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            פרויקטים <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">נבחרים</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg transition-colors duration-300">
            לא רק אתרים יפים, אלא נכסים דיגיטליים שעובדים. הנה הצצה לחלק מהפרויקטים שביצענו, משלב האפיון ועד להשקה המוצלחת.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group flex flex-col h-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-800/50 hover:border-emerald-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
              
              {/* Marketing Results Header Simulation */}
              <div className="relative bg-slate-100 dark:bg-slate-800 rounded-t-xl border-t border-x border-slate-200 dark:border-slate-700 p-3 flex items-center justify-between gap-2 shadow-sm dark:shadow-xl transition-colors duration-300">
                 <div className="flex items-center gap-2">
                    <div className="bg-emerald-500/10 dark:bg-emerald-500/20 p-1.5 rounded-md">
                        <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">פרויקט פעיל</span>
                 </div>
                 
                 {/* URL/Brand Name */}
                 <div className="text-xs text-slate-500 dark:text-gray-400 font-mono hidden sm:block">
                   {item.url?.replace('https://', '')}
                 </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-[300px] md:h-[400px] bg-slate-200 dark:bg-slate-900 border-x border-b border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-2xl overflow-hidden rounded-b-xl group-hover:shadow-purple-500/20 transition-all duration-500">
                 <div className="w-full h-full relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-gray-500 transition-colors duration-300">
                        תצוגה מקדימה לא זמינה
                      </div>
                    )}
                    
                    {/* Dark Gradient Overlay for text readability at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>

                    {/* Stats / Actions Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[3px]">
                       <a 
                         href={item.url} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
                       >
                          <ExternalLink size={18} />
                          צפה בפרויקט
                       </a>
                    </div>
                 </div>
              </div>

              {/* Description & Results */}
              <div className="mt-5 px-2 pb-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/50 mt-2 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                        <BarChart className="text-purple-600 dark:text-purple-500 mt-1 flex-shrink-0" size={20} />
                        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">
                        {item.description}
                        </p>
                    </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center relative z-20">
          <div className="inline-block bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-lg dark:shadow-none">
             <p className="text-slate-700 dark:text-gray-300 mb-6 text-xl transition-colors duration-300">רוצים תוצאות כאלה לעסק שלכם? בואו נתחיל לעבוד.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={24} fill="white" />
                <span>בדיקת התאמה בוואטסאפ</span>
              </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;