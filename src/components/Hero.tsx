import React from 'react';
import { ShieldCheck, Wrench, RefreshCw, Lock, Zap, Award, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Ambient background glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Banner */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Hệ Thống Mua Bán & Sửa Chữa iPhone Uy Tín Hàng Đầu</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              <span className="block text-apple-gradient">HIẾU APPLE</span>
              <span className="text-2xl sm:text-4xl font-bold text-gray-200 mt-2 block">
                iPhone Chính Hãng • Sửa Chữa Ép Kính • Mở Khóa iCloud
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Chuyên phân phối iPhone Mới 100% & Like New 99% nguyên zin. Dịch vụ ép kính mặt trước, thay mặt lưng kính sau bằng laser lấy liền 30 phút, thu mua điện thoại cũ định giá cao nhất thị trường.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onNavigate('iphone')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Xem Sản Phẩm iPhone</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('repair')}
                className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-gray-200 font-bold text-sm border border-white/15 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Tra Giá Ép Kính / Thay Lưng</span>
              </button>

              <button
                onClick={() => onNavigate('trade-in')}
                className="px-6 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Định Giá Thu Mua Cũ</span>
              </button>
            </div>

            {/* Key Value Propositions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-left">
              <div className="glass-panel p-3 rounded-2xl flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200">100% Zin Máy</h4>
                  <p className="text-[10px] text-gray-400">Bảo hành 1 đổi 1</p>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-2xl flex items-start gap-2.5">
                <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Ép Kính 30P</h4>
                  <p className="text-[10px] text-gray-400">Trực tiếp quan sát</p>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-2xl flex items-start gap-2.5">
                <RefreshCw className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Thu Cũ Giá Cao</h4>
                  <p className="text-[10px] text-gray-400">Trợ giá tới 3 Triệu</p>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-2xl flex items-start gap-2.5">
                <Lock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Mở Khóa iCloud</h4>
                  <p className="text-[10px] text-gray-400">An toàn & Bảo mật</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Showcase Hero Banner Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/15 shadow-2xl">
              
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  HOTTEST 2026
                </span>
                <span className="text-xs text-gray-400 font-medium">Sẵn hàng VN/A</span>
              </div>

              {/* iPhone Visual Showcase */}
              <div className="relative group cursor-pointer my-4" onClick={() => onNavigate('iphone')}>
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop"
                    alt="iPhone 16 Pro Max Titan Sa Mạc"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">iPhone 16 Pro Max</h3>
                    <p className="text-xs text-gold-gradient font-semibold">Titan Sa Mạc (Desert Titanium)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through block">36.990.000đ</span>
                    <span className="text-sm font-extrabold text-blue-400">34.990.000đ</span>
                  </div>
                </div>
              </div>

              {/* Banner Footer Callout */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Bảo hành 12 tháng 1 đổi 1</span>
                </div>
                <button
                  onClick={() => onNavigate('iphone')}
                  className="text-blue-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Đặt mua ngay</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
