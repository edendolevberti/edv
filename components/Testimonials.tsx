import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden scroll-mt-24">
       {/* Background decoration (Same as About) */}
       <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Frame / Card Container - Made more transparent */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden transition-colors duration-300">
          
           {/* Top Fade / Glow Effect */}
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none"></div>

           <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 transition-colors duration-300">
                  הלקוחות <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">מספרים על התוצאות</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="mt-4 text-slate-600 transition-colors duration-300">
                  עסקים ששידרגו את הנוכחות הדיגיטלית שלהם וראו תוצאות בשטח
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((review) => (
                  <div key={review.id} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/30 transition-all duration-300 relative group shadow-sm">
                    <Quote className="absolute top-6 left-6 text-slate-200 w-10 h-10 group-hover:text-emerald-500/20 transition-colors" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="text-slate-900 font-bold transition-colors duration-300">{review.name}</h4>
                        <p className="text-sm text-slate-500 transition-colors duration-300">{review.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 italic leading-relaxed relative z-10 transition-colors duration-300">
                      "{review.content}"
                    </p>
                    
                    <div className="mt-6 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-pink-600 text-sm">★</span>
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