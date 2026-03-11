import React from 'react';
import { GraduationCap, Award, BookOpen, Code, Terminal } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    year: '2025-2026',
    title: 'קורס סייבר אנליסט',
    institution: 'אוניברסיטת רייכמן בשיתוף עם Google',
    icon: Terminal,
    color: 'text-emerald-600'
  },
  {
    id: 2,
    year: '2023',
    title: 'פיתוח Full Stack',
    institution: 'לימוד עצמי ופרויקטים מעשיים (React, Node.js)',
    icon: Code,
    color: 'text-purple-600'
  },
  {
    id: 3,
    year: '2019-2021',
    title: 'הנדסאי תוכנה',
    institution: 'מכללת אורט רחובות',
    icon: GraduationCap,
    color: 'text-pink-600'
  },
  {
    id: 4,
    year: '2018',
    title: 'מומחה WordPress & Elementor',
    institution: 'התמחות בבניית אתרים וחנויות מורכבות',
    icon: BookOpen,
    color: 'text-emerald-600'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative scroll-mt-24">
      {/* Background decoration (Same style) */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Frame / Card Container - Transparent Style */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden transition-colors duration-300">
          
          {/* Top Fade / Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 transition-colors duration-300">
                הניסיון <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">והרקורד שלי</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-slate-600 transition-colors duration-300">
                הכשרה מקצועית עמוקה בפיתוח, סייבר וטכנולוגיה - הבסיס לנכסים דיגיטליים חזקים.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-pink-600/0 via-purple-600/50 to-pink-600/0 hidden md:block"></div>

              <div className="space-y-8 md:space-y-0">
                {EXPERIENCES.map((item, index) => (
                  <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Width spacer for opposite side */}
                    <div className="hidden md:block w-5/12"></div>

                    {/* Timeline Node/Icon */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg group-hover:scale-110 group-hover:border-emerald-500 transition-all duration-300">
                      <item.icon size={20} className={item.color} />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10 text-center md:text-right">
                          <span className={`inline-block px-3 py-1 rounded-full bg-slate-100/80 text-xs font-bold mb-3 ${item.color} border border-slate-200 transition-colors duration-300`}>
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-sm transition-colors duration-300">
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