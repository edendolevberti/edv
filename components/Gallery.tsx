import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Play, Image as ImageIcon, ExternalLink, MessageCircle } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'video' | 'design'>('all');

  const filteredItems = GALLERY_ITEMS.filter(item => 
    filter === 'all' ? true : item.category === filter
  );

  const phoneNumber = '972547202011';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('היי עדן, ראיתי עבודות באתר ואשמח לשמוע פרטים')}`;

  return (
    <section id="gallery" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            תיק <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">עבודות</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            הצצה קטנה לפרויקטים נבחרים שיצרנו עבור הלקוחות שלנו. וידאו, עיצוב וכל מה שביניהם.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                filter === 'all' 
                ? 'animate-gradient text-white shadow-lg shadow-purple-500/25' 
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
            >
              הכל
            </button>
            <button 
              onClick={() => setFilter('video')}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                filter === 'video' 
                ? 'animate-gradient text-white shadow-lg shadow-purple-500/25' 
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
            >
              <Play size={16} /> וידאו
            </button>
            <button 
              onClick={() => setFilter('design')}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                filter === 'design' 
                ? 'animate-gradient text-white shadow-lg shadow-purple-500/25' 
                : 'bg-slate-800 text-gray-400 hover:text-white border border-slate-700'
              }`}
            >
              <ImageIcon size={16} /> עיצוב פוסטים
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    {item.category === 'video' ? <Play fill="white" size={32} /> : <ExternalLink size={32} />}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider border border-slate-700">
                  {item.category === 'video' ? 'Video' : 'Design'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to WhatsApp in middle section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">אהבתם את מה שראיתם? בואו ניצור משהו כזה גם עבורכם!</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={24} fill="white" />
            <span>דברו איתי בוואטסאפ עכשיו</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;