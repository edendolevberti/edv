import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '972547202011';
  const message = 'היי עדן, אשמח לשמוע פרטים נוספים';
  // Use api.whatsapp.com/send to prevent encoding issues with Hebrew/Emojis
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-28 md:right-10 z-50 flex items-center gap-3">
       {/* Button (Right side in RTL) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-2.5 md:p-4 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative z-20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="white" className="text-white md:hidden" />
        <MessageCircle size={32} fill="white" className="text-white hidden md:block" />
      </a>

      {/* Text Label (Left side in RTL) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-lg shadow-lg border border-white/20 transform transition-all hover:scale-105 origin-right relative"
      >
        <span className="text-xs font-bold whitespace-nowrap">
          שלחו עכשיו וואטסאפ
        </span>
        {/* Triangle pointing to the button (which is on the right) */}
        <div className="absolute top-1/2 -right-2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white/90 border-b-[6px] border-b-transparent -translate-y-1/2"></div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;