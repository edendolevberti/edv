import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Helper to get service text with specific emoji
    const getServiceDisplay = (val: string) => {
      switch(val) {
        case 'website': return 'בניית אתר תדמית 💻';
        case 'store': return 'בניית חנות דיגיטלית 🛍️';
        case 'gmb': return 'ניהול גוגל לעסק שלי 📍';
        case 'seo': return 'קידום אורגני (SEO) 🔍';
        case 'full': return 'מעטפת דיגיטלית מלאה 💎';
        case 'other': return 'אחר 🤔';
        default: return 'לא נבחר ❓';
      }
    };

    const intro = "היי עדן, פניה חדשה מהאתר (Digital Presence) 👋";
    const nameLine = `👤 *שם מלא:* ${formData.name || 'לא צוין'}`;
    const phoneLine = `📱 *טלפון:* ${formData.phone || 'לא צוין'}`;
    const emailLine = `📧 *אימייל:* ${formData.email || 'לא צוין'}`;
    const serviceLine = `🛠️ *מתעניין ב:* ${getServiceDisplay(formData.service)}`;
    const contentLine = `✍️ *הודעה:* \n${formData.description || 'ללא תוכן נוסף'}`;

    const fullMessage = `${intro}\n\n${nameLine}\n${phoneLine}\n${emailLine}\n${serviceLine}\n\n${contentLine}`;

    // Properly encode the Hebrew and Emojis
    const encodedText = encodeURIComponent(fullMessage);
    const phoneNumber = '972547202011';
    
    // Use api.whatsapp.com/send instead of wa.me to prevent encoding corruption ( symbols)
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20">
        
        {/* Main Card - Glassmorphism Style to match others */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-md p-8 md:p-16 shadow-2xl overflow-hidden transition-colors duration-300">
          
          {/* Top Fade / Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none"></div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Contact Info */}
            <div className="text-right">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 transition-colors duration-300">
                בואו נבנה את <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  הנוכחות שלכם
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mb-8"></div>
              
              <p className="text-slate-600 text-lg mb-10 max-w-md transition-colors duration-300">
                רוצים אתר שנראה מיליון דולר? חנות שמוכרת בלי הפסקה? או פשוט שימצאו אתכם בגוגל?
                השאירו פרטים ונצא לדרך משותפת.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600 border border-slate-200 transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">054-7202011</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-pink-600 border border-slate-200 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">edendolevberti@gmail.com</span>
                </div>
                 <div className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-purple-600 border border-slate-200 transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">תל אביב והמרכז</span>
                </div>
              </div>

              {/* Social Icons Footer Style */}
              <div className="mt-12">
                <p className="text-sm text-slate-500 mb-4 transition-colors duration-300">עקבו אחרינו</p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-all hover:scale-110 hover:bg-slate-200 ${link.color} border border-slate-200`}
                      aria-label={link.name}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-inner transition-colors duration-300" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 transition-colors duration-300">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2 transition-colors duration-300">טלפון</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="050-0000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 transition-colors duration-300">אימייל</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2 transition-colors duration-300">מה המטרה העיקרית?</label>
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  >
                    <option value="">בחר שירות...</option>
                    <option value="website">בניית אתר תדמית</option>
                    <option value="store">בניית חנות דיגיטלית</option>
                    <option value="gmb">ניהול גוגל לעסק שלי (GMB)</option>
                    <option value="seo">קידום אורגני (SEO)</option>
                    <option value="full">מעטפת דיגיטלית מלאה</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2 transition-colors duration-300">ספרו לנו קצת על העסק</label>
                  <textarea 
                    id="description" 
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                    placeholder="סוג העסק, מטרות, אתגרים..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-emerald-600/20 transform transition hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                  <span>התחל שיחה בוואטסאפ</span>
                  <Send size={18} />
                </button>
              </div>
            </form>

          </div>
        </div>
        
        <div className="text-center mt-12 text-slate-500 text-sm transition-colors duration-300">
          © {new Date().getFullYear()} Eden Dolev - Digital Presence. כל הזכויות שמורות.
        </div>
      </div>
    </section>
  );
};

export default Contact;