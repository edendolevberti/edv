import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-24">
      {/* Background decoration behind the frame */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* The Frame / Card Container - Made more transparent */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden transition-colors duration-300">
          
          {/* Top Fade / Glow Effect inside the frame */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-slate-100">
                    <img 
                      src="https://i.postimg.cc/TYKr2B9w/Gemini-Generated-Image-29ykem29ykem29yk.png"
                      alt="Eden Dolev" 
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-right z-10">
                      <p className="text-white font-bold text-2xl drop-shadow-md">עדן דולב</p>
                      <p className="text-emerald-400 font-medium drop-shadow-md">מומחה לנוכחות דיגיטלית</p>
                    </div>
                  </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-right">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 transition-colors duration-300">
                מי <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">אני?</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mb-8"></div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6 transition-colors duration-300">
                היי, אני עדן. אני לא רק "בונה אתרים" – אני האדריכל של הנוכחות הדיגיטלית שלכם.
                בעולם שבו הרושם הראשוני נקבע בשניות, המטרה שלי היא לבנות לכם נכסים דיגיטליים שמשדרים מקצועיות, אמינות ויוקרה.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 transition-colors duration-300">
                אני משלב ידע טכני עמוק בפיתוח (Front End) עם הבנה עסקית רחבה.
                אני בונה עבורכם את כל התשתית: מאתר תדמית מרשים או חנות איקומרס מתקדמת, ועד לניהול הפרופיל העסקי בגוגל (GMB) שיביא לכם לקוחות מהאזור. הכל מנוהל מא' ועד ת' עם דגש על חווית משתמש מושלמת.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors">
                  <CheckCircle className="text-pink-600 flex-shrink-0" size={24} />
                  <span className="text-slate-800 font-medium transition-colors duration-300">מומחה בפיתוח אתרים וחנויות (WordPress/Shopify)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors">
                  <CheckCircle className="text-purple-600 flex-shrink-0" size={24} />
                  <span className="text-slate-800 font-medium transition-colors duration-300">בניית נכסים דיגיטליים שמייצרים לידים</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                  <span className="text-slate-800 font-medium transition-colors duration-300">שליטה בתוצאות מקומיות (GMB) ומפות</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;