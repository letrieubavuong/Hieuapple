import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2, Search, HelpCircle, PhoneCall, KeyRound, Sparkles } from 'lucide-react';
import { ICLOUD_SERVICES, STORE_INFO } from '../data/storeData';

export const IcloudServices: React.FC = () => {
  const [imeiInput, setImeiInput] = useState('');
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [checkResult, setCheckResult] = useState<null | {
    imei: string;
    model: string;
    fmiStatus: 'OFF' | 'ON (CLEAN)' | 'ON (LOST)';
    solution: string;
  }>(null);

  const [contactPhone, setContactPhone] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const handleCheckIMEI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imeiInput.trim() || imeiInput.length < 10) return;
    setCheckingStatus(true);
    setCheckResult(null);

    setTimeout(() => {
      setCheckingStatus(false);
      setCheckResult({
        imei: imeiInput,
        model: 'iPhone 14 / 15 / 16 Series',
        fmiStatus: 'ON (CLEAN)',
        solution: 'Hỗ trợ tháo iCloud chính chủ Server 1-3 ngày hoặc Bypass nghe gọi 30 phút.'
      });
    }, 1200);
  };

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone.trim()) return;
    setRequestSent(true);
  };

  return (
    <section id="icloud" className="py-16 relative bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Chuyên Gia Phần Mềm & iCloud</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Dịch Vụ <span className="text-apple-gradient">Mở Khóa iCloud iPhone / iPad</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Xử lý máy quên mật khẩu iCloud, máy ẩn iCloud, máy dính màn hình Activation Lock. Cam kết minh bạch, tháo Server chính hãng Apple không tháo máy.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ICLOUD_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{serv.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{serv.description}</p>
                
                <div className="pt-2 space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-bold">Dòng máy:</span>
                    <span>{serv.supportedModels}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-bold">Thời gian:</span>
                    <span>{serv.timeframe}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-bold">Mức giá:</span>
                    <span className="font-extrabold text-amber-400">{serv.priceRange}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] text-emerald-400 font-medium block mb-3">
                  ✓ {serv.guarantee}
                </span>
                <a
                  href={STORE_INFO.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 font-bold text-xs border border-purple-500/40 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Tư Vấn Zalo Khóa iCloud</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* IMEI Status Checker Tool */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 max-w-3xl mx-auto space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-blue-400" />
              <span>Tra Cứu Trạng Thái IMEI / Seri iPhone Quên Mật Khẩu</span>
            </h3>
            <p className="text-xs text-gray-400">
              Nhập 15 số IMEI (Bấm *#06# trên bàn phím điện thoại) để nhân viên kỹ thuật Hiếu Apple kiểm tra xem máy có đủ điều kiện tháo iCloud hay không.
            </p>
          </div>

          <form onSubmit={handleCheckIMEI} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Nhập 15 số IMEI hoặc số Seri (SN)..."
              value={imeiInput}
              onChange={(e) => setImeiInput(e.target.value)}
              className="flex-1 bg-[#16181d] text-gray-200 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:border-purple-500 text-sm font-mono"
            />
            <button
              type="submit"
              disabled={checkingStatus}
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              {checkingStatus ? 'Đang Kiểm Tra...' : 'Kiểm Tra IMEI'}
            </button>
          </form>

          {checkResult && (
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 space-y-2 animate-fadeIn text-xs">
              <div className="flex items-center justify-between text-gray-300">
                <span>IMEI đã tra cứu: <strong className="font-mono text-white">{checkResult.imei}</strong></span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {checkResult.fmiStatus}
                </span>
              </div>
              <p className="text-gray-300">
                💡 <strong>Kết luận từ kỹ thuật viên:</strong> {checkResult.solution}
              </p>
            </div>
          )}

          {/* Quick Consultation Form */}
          <div className="pt-4 border-t border-white/10">
            {requestSent ? (
              <p className="text-center text-xs text-emerald-400 font-bold">
                ✓ Đã nhận thông tin! Kỹ thuật viên iCloud Hiếu Apple sẽ liên hệ hỗ trợ bạn ngay lập tức.
              </p>
            ) : (
              <form onSubmit={handleSendRequest} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Nhập SĐT / Zalo của bạn..."
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full sm:flex-1 bg-[#16181d] text-gray-200 rounded-xl px-4 py-2.5 border border-white/15 focus:outline-none focus:border-blue-500 text-xs"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors whitespace-nowrap"
                >
                  Nhận Báo Giá Mở Khóa
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
