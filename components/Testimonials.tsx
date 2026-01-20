import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden scroll-mt-24">
       {/* Background decoration (Same as About) */}
       <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Frame / Card Container - Made more transparent */}
        <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-800/10 to-slate-900/60 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden">
          
           {/* Top Fade / Glow Effect */}
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

           <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                  לקוחות <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">ממליצים</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mb-6"></div>
                <p className="mt-4 text-gray-400">
                  עסקים שצמחו איתנו בדיגיטל
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((review) => (
                  <div key={review.id} className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-purple-500/30 transition-all duration-300 relative group">
                    <Quote className="absolute top-6 left-6 text-slate-700 w-10 h-10 group-hover:text-blue-500/20 transition-colors" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="text-white font-bold">{review.name}</h4>
                        <p className="text-sm text-gray-400">{review.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 italic leading-relaxed relative z-10">
                      "{review.content}"
                    </p>
                    
                    <div className="mt-6 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-pink-500 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;