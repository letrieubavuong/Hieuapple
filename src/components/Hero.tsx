import React from 'react';
import { ShieldCheck, Wrench, RefreshCw, Lock, Zap, Award, ChevronRight, CheckCircle2, Gift } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 lg:pt-12 lg:pb-20">
      {/* Ambient background glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Banner */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Hàng Chuẩn Zin 100% • Lỗi 1 Đổi 1 Trong 3 Tháng</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              <span className="block text-apple-gradient">HIẾU APPLE</span>
              <span className="text-xl sm:text-3xl font-bold text-gray-200 mt-2 block">
                Bảng Giá iPhone Hàng 99% Like New Chuẩn Zin Tham Khảo
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Tất cả các dòng từ iPhone 7 Plus đến iPhone 16 Pro Max. Máy cam kết nguyên bản 100%, không thay vỏ, không ép kính. Phát hiện đả thay vỏ ép kính (kể cả rơi vỡ) <strong>TẶNG LUÔN MÁY + HOÀN 100% TIỀN!</strong>
            </p>

            {/* Golden Commitments Highlight Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-purple-950/40 to-blue-950/40 border border-red-500/30 text-left space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold">
                <Gift className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>CAM KẾT VÀNG TẠI HIẾU APPLE:</span>
              </div>
              <ul className="space-y-1.5 text-gray-200 font-medium pl-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Lỗi 1 Đổi 1 trong 3 tháng</strong> đối với tất cả dòng máy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Cam kết 100% không thay vỏ, không ép kính</strong> (Phát hiện đã thay ➔ Tặng máy + Hoàn 100% tiền).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Hỗ trợ 30% chi phí sửa chữa</strong> nếu khách mua tại cửa hàng gặp sự cố rơi bể vỡ.</span>
                </li>
              </ul>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onNavigate('iphone')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Xem Bảng Giá Chuẩn Zin</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('repair')}
                className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-gray-200 font-bold text-xs sm:text-sm border border-white/15 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Giá Ép Kính & Sửa Chữa</span>
              </button>

              <button
                onClick={() => onNavigate('trade-in')}
                className="px-6 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Thu Cũ Đổi Mới</span>
              </button>
            </div>

          </div>

          {/* Right Product Showcase Hero Banner Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/15 shadow-2xl">
              
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                  HOTTEST 2026
                </span>
                <span className="text-xs text-emerald-400 font-bold">100% Chuẩn Zin</span>
              </div>

              {/* iPhone Visual Showcase */}
              <div className="relative group cursor-pointer my-3" onClick={() => onNavigate('iphone')}>
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/products/ip-16-pro-max/main.jpg"
                    alt="iPhone 16 Pro Max 256GB Like New 99%"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700 bg-black/40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">iPhone 16 Pro Max 256GB</h3>
                    <p className="text-xs text-emerald-400 font-semibold">Like New 99% - Titan Sa Mạc</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through block">25.950.000đ</span>
                    <span className="text-base sm:text-lg font-extrabold text-blue-400">23.950.000đ</span>
                  </div>
                </div>
              </div>

              {/* Banner Footer Callout */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Lỗi 1 đổi 1 trong 3 tháng</span>
                </div>
                <button
                  onClick={() => onNavigate('iphone')}
                  className="text-blue-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Xem bảng giá</span>
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
