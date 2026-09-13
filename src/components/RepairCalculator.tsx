import React, { useState } from 'react';
import { Wrench, Clock, ShieldCheck, CheckCircle2, Calendar, Phone, User, MessageSquare, Sparkles } from 'lucide-react';
import { REPAIR_SERVICES, STORE_INFO } from '../data/storeData';

export const RepairCalculator: React.FC = () => {
  const deviceModels = [
    'iPhone 16 Pro Max',
    'iPhone 16 Pro',
    'iPhone 15 Pro Max',
    'iPhone 15 Pro',
    'iPhone 15',
    'iPhone 14 Pro Max',
    'iPhone 14 Pro',
    'iPhone 13 Pro Max',
    'iPhone 13',
    'iPhone 12 Pro Max',
    'iPhone 11 Pro Max'
  ];

  const serviceTypes = [
    { id: 'ép kính', name: 'Ép Kính Màn Hình (Kính Zin)' },
    { id: 'thay mặt lưng', name: 'Thay Mặt Lưng Kính Sau (Laser)' },
    { id: 'thay pin', name: 'Thay Pin Dung Lượng Cao Pisen/Bison' },
    { id: 'thay màn hình', name: 'Thay Màn Hình Zin Bóc Máy' },
    { id: 'sửa main', name: 'Sửa Main IC / Mất Nguồn' },
  ];

  const [selectedModel, setSelectedModel] = useState<string>('iPhone 16 Pro Max');
  const [selectedService, setSelectedService] = useState<string>('ép kính');
  
  // Booking Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Find matching service option
  const matchedService = REPAIR_SERVICES.find(
    (s) => s.deviceModel === selectedModel && s.serviceType === selectedService
  ) || {
    id: 'default',
    deviceModel: selectedModel,
    serviceType: selectedService as any,
    estimatedPrice: selectedService === 'ép kính' ? 950000 : selectedService === 'thay mặt lưng' ? 750000 : 650000,
    durationMinutes: 35,
    warrantyMonths: 12,
    notes: 'Linh kiện Zin chính hãng 100%. Quý khách được quan sát trực tiếp kỹ thuật viên thao tác.'
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim()) return;
    setBookingSubmitted(true);
  };

  return (
    <section id="repair" className="py-16 relative bg-[#111319]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Trung Tâm Sửa Chữa Uy Tín</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tra Cứu Bảng Giá <span className="text-apple-gradient">Ép Kính & Thay Mặt Lưng</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Công nghệ tách kính bằng Máy Laser tự động & Hút chân không OCA không tháo máy, giữ nguyên áp suất chống nước. Bảo hành ép kính bọt bụi 12 tháng.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Repair Price Estimator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>1. Chọn Dòng Máy & Dịch Vụ Cần Sửa</span>
              </h3>

              {/* Device Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Dòng Máy iPhone:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {deviceModels.map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedModel(model)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left border transition-all ${
                        selectedModel === model
                          ? 'bg-blue-600/30 text-blue-400 border-blue-500 shadow-md shadow-blue-500/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Dịch Vụ Sửa Chữa:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceTypes.map((serv) => (
                    <button
                      key={serv.id}
                      onClick={() => setSelectedService(serv.id)}
                      className={`px-4 py-3 rounded-xl text-xs font-bold text-left flex items-center justify-between border transition-all ${
                        selectedService === serv.id
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{serv.name}</span>
                      {selectedService === serv.id && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Price Output Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 to-purple-950/60 border border-blue-500/30 space-y-4 mt-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs text-gray-400 block">Dịch vụ đã chọn:</span>
                    <span className="text-base font-extrabold text-white">
                      {selectedModel} — {matchedService.serviceType.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">Chi phí dự kiến:</span>
                    <span className="text-2xl font-extrabold text-amber-400">
                      {matchedService.estimatedPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Thời gian làm: <strong>{matchedService.durationMinutes} phút</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Bảo hành: <strong>{matchedService.warrantyMonths} Tháng</strong></span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 italic">
                  💡 Ghi chú kỹ thuật: {matchedService.notes}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Online Booking Form */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-[11px] uppercase shadow-md">
                Giảm 10% khi đặt trước
              </div>

              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>2. Đặt Lịch Sửa Chữa Trực Tuyến</span>
              </h3>
              <p className="text-xs text-gray-400">
                Điền thông tin đặt hẹn trước giúp Hiếu Apple chuẩn bị linh kiện zin sẵn sàng và tiết kiệm thời gian chờ đợi của bạn.
              </p>

              {bookingSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h4 className="font-bold text-white text-base">Đặt Lịch Hẹn Thành Công!</h4>
                  <p className="text-xs text-gray-300">
                    Cảm ơn <strong>{customerName || 'Quý khách'}</strong>! Nhân viên Hiếu Apple sẽ gọi lại xác nhận lịch hẹn trong ít phút nữa.
                  </p>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                  >
                    Đặt Lịch Hẹn Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4 text-xs">
                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Họ & Tên khách hàng:</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Nhập họ và tên..."
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#16181d] text-gray-200 rounded-xl pl-9 pr-3 py-2.5 border border-white/15 focus:outline-none focus:border-emerald-500"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Số điện thoại liên hệ (*):</label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Nhập số điện thoại..."
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-[#16181d] text-gray-200 rounded-xl pl-9 pr-3 py-2.5 border border-white/15 focus:outline-none focus:border-emerald-500"
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Thời gian dự kiến mang máy đến:</label>
                    <input
                      type="datetime-local"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full bg-[#16181d] text-gray-200 rounded-xl px-3 py-2.5 border border-white/15 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 font-semibold block mb-1">Ghi chú thêm về máy (Ví dụ: vỡ góc màn, chai pin 75%...):</label>
                    <textarea
                      rows={2}
                      placeholder="Mô tả tình trạng hỏng..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#16181d] text-gray-200 rounded-xl px-3 py-2 border border-white/15 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Xác Nhận Đặt Lịch Ưu Đãi 10%</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    Hoặc liên hệ nhanh qua Hotline 24/7: <a href={`tel:${STORE_INFO.hotline}`} className="text-emerald-400 font-bold">{STORE_INFO.hotlineFormatted}</a>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
