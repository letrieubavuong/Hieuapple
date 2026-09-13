import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, Menu, X, ShieldCheck, Wrench, RefreshCw, Lock, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Trang Chủ', icon: Sparkles },
    { id: 'iphone', label: 'iPhone Chính Hãng', icon: ShieldCheck },
    { id: 'accessory', label: 'Phụ Kiện', icon: ShoppingBag },
    { id: 'repair', label: 'Sửa Chữa - Ép Kính', icon: Wrench },
    { id: 'trade-in', label: 'Thu Mua Máy Cũ', icon: RefreshCw },
    { id: 'icloud', label: 'Dịch Vụ iCloud', icon: Lock },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-purple-900/60 text-xs py-1.5 px-4 text-center border-b border-white/5 flex items-center justify-center gap-2 text-gray-300">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>🔥 Ưu đãi tháng này: <strong>Thu cũ đổi mới trợ giá 3 Triệu</strong> | <strong>Ép kính lấy ngay 30 phút</strong> | Bảo hành 1 đổi 1</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center">
                {/* Apple Logo SVG */}
                <svg className="w-6 h-6 fill-current text-blue-400 group-hover:text-white transition-colors" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.1-3.69-3-7.79-7.85-12.3-14.56-6.19-9.15-11.22-19.46-15.1-30.93-3.88-11.48-5.82-22.16-5.82-32.06 0-14.56 3.6-26.4 10.8-35.53 7.2-9.13 16.27-13.8 27.21-14.02 4.69 0 9.87 1.25 15.54 3.75 5.67 2.5 9.49 3.75 11.46 3.75 1.62 0 5.61-1.31 11.97-3.94 6.36-2.63 11.83-3.81 16.41-3.56 12.19.98 21.84 5.56 28.96 13.73-10.88 6.59-16.14 15.75-15.78 27.48.37 9.17 3.86 16.92 10.47 23.25 6.61 6.33 14.54 10.02 23.79 11.07-2.66 7.82-6.18 15.5-10.57 23.04zM119.22 31.92c0-7.07 2.56-13.74 7.68-20.01 5.12-6.27 11.58-10.29 19.38-12.06.25 1.07.38 2.05.38 2.94 0 6.94-2.67 13.72-8.01 20.34-5.34 6.62-11.83 10.66-19.43 12.12-.13-1.07-.19-2.05-.19-2.93z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-apple-gradient block">
                HIẾU APPLE
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium block">
                iPhone & Repair Care
              </span>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm iPhone 16 Pro Max, Ép kính, Thay pin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#16181d] text-sm text-gray-200 placeholder-gray-500 rounded-full pl-10 pr-4 py-2 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Phone Link */}
            <a
              href={`tel:${STORE_INFO.hotline}`}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce-soft" />
              <span>{STORE_INFO.hotlineFormatted}</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-all active:scale-95"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0b0c10] shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Tìm kiếm máy, sửa kính, iCloud..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#16181d] text-sm text-gray-200 placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 border border-white/10 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2 px-3 py-3 rounded-xl text-xs font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-blue-600/25 text-blue-400 border border-blue-500/40'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
            <span className="text-gray-400">Hotline tư vấn 24/7:</span>
            <a href={`tel:${STORE_INFO.hotline}`} className="font-bold text-emerald-400 hover:underline">
              {STORE_INFO.hotlineFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
