import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '972547202011';
  const message = 'היי עדן, אשמח לשמוע פרטים נוספים';
  // Use api.whatsapp.com/send to prevent encoding issues with Hebrew/Emojis
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Text Label - Placed first so in RTL it appears on the Right */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-xl shadow-lg border border-white/20 transform transition-all hover:scale-105 origin-left"
      >
        <span className="text-sm font-bold whitespace-nowrap">
          שלחו עכשיו וואטסאפ
        </span>
        {/* Triangle pointing to the button (which is on the left) */}
        <div className="absolute top-1/2 -left-2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-white/90 border-b-[6px] border-b-transparent -translate-y-1/2"></div>
      </a>

       {/* Button - Placed second so in RTL it appears on the Left */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative z-20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" className="text-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;