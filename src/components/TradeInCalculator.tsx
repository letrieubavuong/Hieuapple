import React, { useState } from 'react';
import { RefreshCw, DollarSign, ArrowRight, ShieldCheck, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { TRADE_IN_DATA, STORE_INFO } from '../data/storeData';

export const TradeInCalculator: React.FC = () => {
  const [selectedTradeItem, setSelectedTradeItem] = useState(TRADE_IN_DATA[0]);
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(0);

  const [sellerName, setSellerName] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [targetUpgrade, setTargetUpgrade] = useState('iPhone 16 Pro Max');
  const [tradeSubmitted, setTradeSubmitted] = useState(false);

  const currentCondition = selectedTradeItem.conditions[selectedGradeIndex];

  const handleTradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellerPhone.trim()) return;
    setTradeSubmitted(true);
  };

  return (
    <section id="trade-in" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-4 h-4" />
            <span>Chương Trình Thu Cũ Đổi Mới</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Thu Mua Điện Thoại Cũ <span className="text-gold-gradient">Định Giá Trực Tiếp</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Hiếu Apple nhận thu mua tất cả các dòng iPhone cũ, máy lock, máy vỡ kính, hỏng FaceID với giá cao nhất thị trường. Trợ giá đổi máy mới lên đến <strong>3.000.000đ</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Valuation Matrix Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span>1. Chọn Máy Cũ Đang Sử Dụng</span>
              </h3>

              {/* Model selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Model iPhone Cần Bán:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TRADE_IN_DATA.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedTradeItem(item);
                        setSelectedGradeIndex(0);
                      }}
                      className={`px-3 py-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        selectedTradeItem.id === item.id
                          ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500 shadow-md shadow-emerald-500/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {item.deviceModel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Selection */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Tình Trạng Máy Thực Tế:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTradeItem.conditions.map((cond, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGradeIndex(idx)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold text-left border transition-all flex items-center justify-between ${
                        selectedGradeIndex === idx
                          ? 'bg-blue-600/30 text-blue-300 border-blue-500 shadow-md shadow-blue-500/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{cond.grade}</span>
                      {selectedGradeIndex === idx && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Value Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-teal-950/60 to-blue-950/70 border border-emerald-500/40 text-center space-y-3">
                <span className="text-xs text-gray-300 font-medium block">
                  Mức Giá Thu Mua Dự Kiến Tại Hiếu Apple:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                  {currentCondition.estimatedValue.toLocaleString('vi-VN')}đ
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  <span>+ Trợ Giá Đổi Máy Mới: <strong>3.000.000đ</strong></span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5">
              
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                <span>2. Đăng Ký Bán Máy / Thu Cũ Đổi Mới</span>
              </h3>

              {tradeSubmitted ? (
                <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h4 className="font-bold text-white text-base">Đã Gửi Đăng Ký Định Giá!</h4>
                  <p className="text-xs text-gray-300">
                    Chuyên viên thu mua máy cũ của Hiếu Apple sẽ kiểm tra và gọi điện chốt giá trực tiếp cho bạn qua số {sellerPhone}.
                  </p>
                  <button
                    onClick={() => setTradeSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500"
                  >
                    Định Giá Máy Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTradeSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Họ tên của bạn:</label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập tên..."
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                      className="w-full bg-[#16181d] text-gray-200 rounded-xl px-3.5 py-2.5 border border-white/15 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Số điện thoại / Zalo nhận báo giá (*):</label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số Zalo / ĐT..."
                      value={sellerPhone}
                      onChange={(e) => setSellerPhone(e.target.value)}
                      className="w-full bg-[#16181d] text-gray-200 rounded-xl px-3.5 py-2.5 border border-white/15 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Máy muốn đổi sang (Nếu có nhu cầu lên đời):</label>
                    <select
                      value={targetUpgrade}
                      onChange={(e) => setTargetUpgrade(e.target.value)}
                      className="w-full bg-[#16181d] text-gray-200 rounded-xl px-3 py-2.5 border border-white/15 focus:outline-none focus:border-blue-500"
                    >
                      <option value="iPhone 16 Pro Max">Lên đời iPhone 16 Pro Max</option>
                      <option value="iPhone 16 Pro">Lên đời iPhone 16 Pro</option>
                      <option value="iPhone 15 Pro Max">Lên đời iPhone 15 Pro Max</option>
                      <option value="iPhone 15">Lên đời iPhone 15</option>
                      <option value="Chi Ban May Cu">Chỉ bán máy cũ lấy tiền mặt</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Gửi Yêu Cầu Định Giá Ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
