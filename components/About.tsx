import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
      {/* Decorative Element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-slate-800">
                  <img 
                    src="https://i.postimg.cc/TYKr2B9w/Gemini-Generated-Image-29ykem29ykem29yk.png" 
                    alt="Eden Dolev" 
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 right-6 text-right z-10">
                    <p className="text-white font-bold text-2xl drop-shadow-md">עדן דולב</p>
                    <p className="text-blue-400 font-medium drop-shadow-md">Digital Presence Expert</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-right">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              מי <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">אני?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              היי, אני עדן. המומחיות שלי היא לקחת עסקים ולהפוך אותם למותגים דומיננטיים בדיגיטל.
              אני לא רק "צלם" או "בונה אתרים" – אני בונה תשתיות דיגיטליות שמייצרות כסף.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              העולם הדיגיטלי עובד כהוליסטי: האתר שלכם צריך לתקשר עם הסושיאל, והמיקום שלכם בגוגל חייב להיות בולט. 
              אני מספק את המעטפת המלאה: בניית אתרים מתקדמים, הפקת תוכן וידאו שובר רשת, ושליטה אבסולוטית בתוצאות החיפוש. הכל תחת קורת גג אחת.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={24} />
                <span className="text-white font-medium">מומחה לפיתוח אתרים וחנויות</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-purple-500" size={24} />
                <span className="text-white font-medium">אשף תוכן ויראלי וסושיאל</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-pink-500" size={24} />
                <span className="text-white font-medium">שליטה בגוגל מפות (GMB)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;