import React from 'react';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    year: '2025-2026',
    title: 'קורס סייבר אנליסט',
    institution: 'אוניברסיטת רייכמן בשיתוף עם Google',
    icon: Award,
    color: 'text-blue-400'
  },
  {
    id: 2,
    year: '2023',
    title: 'קורס שיווק דיגיטלי',
    institution: 'מכללת "גרילה" - הבית ספר למקצועות הדיגיטל',
    icon: BookOpen,
    color: 'text-pink-400'
  },
  {
    id: 3,
    year: '2019-2021',
    title: 'הנדסאי תוכנה',
    institution: 'מכללת אורט רחובות',
    icon: GraduationCap,
    color: 'text-purple-400'
  },
  {
    id: 4,
    year: '2018',
    title: 'קורס בניית אתרי וורדפרס',
    institution: 'מכללת "גרילה" - הבית ספר למקצועות הדיגיטל',
    icon: BookOpen,
    color: 'text-pink-400'
  },
  {
    id: 5,
    year: '2012',
    title: 'בגרות מלאה - מגמת מחשבים (10 יח"ל)',
    institution: 'ביה"ס האלון, יבנה',
    icon: School,
    color: 'text-blue-400'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative scroll-mt-24">
      {/* Background decoration (Same style) */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Frame / Card Container - Transparent Style */}
        <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-800/10 to-slate-900/60 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Top Fade / Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                הניסיון <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">שלי</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-400">
                ההכשרה המקצועית והרקע שלי בעולם הטכנולוגי
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/0 via-purple-500/50 to-pink-500/0 hidden md:block"></div>

              <div className="space-y-8 md:space-y-0">
                {EXPERIENCES.map((item, index) => (
                  <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Width spacer for opposite side */}
                    <div className="hidden md:block w-5/12"></div>

                    {/* Timeline Node/Icon */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-700 shadow-lg group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                      <item.icon size={20} className={item.color} />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10 text-center md:text-right">
                          <span className={`inline-block px-3 py-1 rounded-full bg-slate-800/80 text-xs font-bold mb-3 ${item.color} border border-slate-700`}>
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;