import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Contact Info */}
            <div className="text-right">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                בואו ניצור <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                  קסם ביחד
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-md">
                יש לכם פרויקט מעניין? רוצים לשדרג את הנוכחות שלכם ברשת?
                השאירו פרטים ונחזור אליכם בהקדם.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">054-7202011</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-pink-400">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">office@edv.co.il</span>
                </div>
                 <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">תל אביב והמרכז</span>
                </div>
              </div>

              {/* Social Icons Footer Style */}
              <div className="mt-12">
                <p className="text-sm text-gray-400 mb-4">עקבו אחרינו</p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:scale-110 hover:bg-slate-700 ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">טלפון</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="050-0000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">אימייל</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">שירות מבוקש</label>
                  <select 
                    id="service" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  >
                    <option value="">בחר שירות...</option>
                    <option value="video">וידאו</option>
                    <option value="posts">עיצוב פוסטים</option>
                    <option value="both">שניהם (וידאו + עיצוב)</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">תיאור הפרויקט</label>
                  <textarea 
                    id="description" 
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    placeholder="ספרו לנו קצת על העסק ומה המטרות שלכם..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full animate-gradient text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                  <span>שלח הודעה</span>
                  <Send size={18} />
                </button>
              </div>
            </form>

          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} EDV - Eden Dolev Video. כל הזכויות שמורות.
        </div>
      </div>
    </section>
  );
};

export default Contact;