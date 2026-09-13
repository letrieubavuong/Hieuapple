import React from 'react';
import { Phone, MessageSquare, ShoppingBag, Wrench } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface MobileQuickBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-white/10 px-3 py-2.5">
      <div className="grid grid-cols-4 gap-1 text-center">
        
        {/* Call Hotline */}
        <a
          href={`tel:${STORE_INFO.hotline}`}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-emerald-400 hover:bg-white/5 transition-colors"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-extrabold mt-1">Gọi Điện</span>
        </a>

        {/* Zalo */}
        <a
          href={STORE_INFO.zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-blue-400 hover:bg-white/5 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-extrabold mt-1">Zalo Chat</span>
        </a>

        {/* Repair Fast Nav */}
        <button
          onClick={() => onNavigate('repair')}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-amber-400 hover:bg-white/5 transition-colors"
        >
          <Wrench className="w-5 h-5" />
          <span className="text-xs font-extrabold mt-1">Ép Kính</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1 rounded-xl text-purple-400 hover:bg-white/5 transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-3.5 bg-red-500 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#0b0c10]">
              {cartCount}
            </span>
          )}
          <span className="text-xs font-extrabold mt-1">Giỏ Hàng</span>
        </button>

      </div>
    </div>
  );
};
