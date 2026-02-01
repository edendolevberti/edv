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
        case 'ppc': return 'ניהול קמפיינים (PPC) 🚀';
        case 'leads': return 'הגדלת כמות לידים 📈';
        case 'website': return 'בניית אתר/חנות 💻';
        case 'gmb': return 'קידום בגוגל מפות 📍';
        case 'full': return 'מעטפת שיווקית מלאה 💎';
        case 'other': return 'אחר 🤔';
        default: return 'לא נבחר ❓';
      }
    };

    const intro = "היי עדן, פניה חדשה מהאתר (Digital Marketing) 👋";
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
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20">
        
        {/* Main Card - Glassmorphism Style to match others */}
        <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-800/10 to-slate-900/60 backdrop-blur-md p-8 md:p-16 shadow-2xl overflow-hidden">
          
          {/* Top Fade / Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Contact Info */}
            <div className="text-right">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                בואו נגדיל את <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
                  המכירות שלכם
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-8"></div>
              
              <p className="text-gray-300 text-lg mb-10 max-w-md">
                מרגישים שתקציב הפרסום שלכם לא מנוצל? צריכים יותר לידים איכותיים?
                השאירו פרטים ונבנה אסטרטגיה מותאמת אישית לצמיחה.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 border border-slate-700">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">054-7202011</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-pink-500 border border-slate-700">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">edendolevberti@gmail.com</span>
                </div>
                 <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-purple-500 border border-slate-700">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:scale-110 hover:bg-slate-700 ${link.color} border border-slate-700`}
                      aria-label={link.name}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-inner" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">טלפון</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="050-0000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">אימייל</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">מה המטרה העיקרית?</label>
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">בחר שירות...</option>
                    <option value="ppc">ניהול קמפיינים (PPC)</option>
                    <option value="leads">הגדלת כמות לידים</option>
                    <option value="website">בניית אתר/חנות מכירתית</option>
                    <option value="gmb">קידום בגוגל מפות</option>
                    <option value="full">מעטפת מלאה 360°</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">ספרו לנו קצת על העסק</label>
                  <textarea 
                    id="description" 
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="תקציב פרסום נוכחי, מטרות, אתגרים..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-600/20 transform transition hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                  <span>התחל שיחה בוואטסאפ</span>
                  <Send size={18} />
                </button>
              </div>
            </form>

          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Eden Dolev - Performance Marketing. כל הזכויות שמורות.
        </div>
      </div>
    </section>
  );
};

export default Contact;