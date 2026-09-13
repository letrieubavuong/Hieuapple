import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const FloatingSupport: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickTooltip, setShowQuickTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Floating Welcome Tooltip */}
      {showQuickTooltip && (
        <div className="relative glass-panel py-2 px-3.5 rounded-2xl border border-white/20 shadow-2xl text-xs flex items-center gap-2 animate-bounce-soft max-w-[220px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
          <span className="text-gray-200 font-semibold leading-tight">
            Cần tư vấn mua iPhone hoặc ép kính? Chat ngay!
          </span>
          <button
            onClick={() => setShowQuickTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex flex-col gap-2.5 items-end">
        
        {/* Zalo Button */}
        <a
          href={STORE_INFO.zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center"
          title="Chat qua Zalo Hiếu Apple"
        >
          <span className="absolute right-14 bg-[#0068ff] text-white text-xs font-bold py-1 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat Zalo 24/7
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0068ff] to-[#00a2ff] text-white flex items-center justify-center shadow-lg shadow-blue-500/40 btn-zalo-glow transition-transform hover:scale-110 active:scale-95 border-2 border-white/20">
            {/* Zalo Logo SVG */}
            <svg className="w-7 h-7 fill-current" viewBox="0 0 500 500">
              <path d="M468.6 308.2c-15.6-32.9-42.3-59.5-75.1-75.1-39.7-18.9-85.3-22.3-128.5-13.6-43.2 8.7-82.6 31-110.8 63.8-28.2 32.8-43.7 75-43.7 118.8 0 43.8 15.5 86 43.7 118.8 28.2 32.8 67.6 55.1 110.8 63.8 13.9 2.8 28.1 4.2 42.3 4.2 29.8 0 59.2-6.2 86.2-18.4l69 23-23-69c12.2-27 18.4-56.4 18.4-86.2 0-14.2-1.4-28.4-4.2-42.3 shadow-md" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="180" fontWeight="bold" fill="white" fontFamily="sans-serif">
                Zalo
              </text>
            </svg>
          </div>
        </a>

        {/* Facebook Messenger Button */}
        <a
          href={STORE_INFO.messengerUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center"
          title="Chat qua Facebook Messenger"
        >
          <span className="absolute right-14 bg-[#0084ff] text-white text-xs font-bold py-1 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Messenger
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0084ff] to-[#a033ff] text-white flex items-center justify-center shadow-lg shadow-purple-500/40 btn-messenger-glow transition-transform hover:scale-110 active:scale-95 border-2 border-white/20">
            {/* Messenger Icon */}
            <MessageCircle className="w-7 h-7" />
          </div>
        </a>

        {/* Phone Call Hotline Button */}
        <a
          href={`tel:${STORE_INFO.hotline}`}
          className="group relative flex items-center"
          title="Gọi Hotline tư vấn"
        >
          <span className="absolute right-14 bg-emerald-600 text-white text-xs font-bold py-1 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Gọi {STORE_INFO.hotlineFormatted}
          </span>
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-transform hover:scale-110 active:scale-95 border-2 border-white/20">
            <Phone className="w-6 h-6 animate-pulse" />
          </div>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-panel border border-white/20 text-gray-300 hover:text-white flex items-center justify-center shadow-lg hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>
    </div>
  );
};
