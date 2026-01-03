import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
       {/* Background gradient orb */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/20 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            לקוחות <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ממליצים</span>
          </h2>
          <p className="mt-4 text-gray-400">
            ההצלחה שלכם היא כרטיס הביקור שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-pink-500/30 transition-all duration-300 relative group">
              <Quote className="absolute top-6 left-6 text-slate-700 w-10 h-10 group-hover:text-purple-500/20 transition-colors" />
              
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
                  <span key={star} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;