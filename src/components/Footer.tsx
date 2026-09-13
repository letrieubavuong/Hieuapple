import React from 'react';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Heart, Facebook, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080b] border-t border-white/10 pt-16 pb-24 md:pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Store info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
                <div className="w-full h-full bg-[#0b0c10] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-blue-400 text-base">H</span>
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-wide">
                HIẾU APPLE
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Hệ thống bán lẻ iPhone chính hãng, phụ kiện cao cấp và trung tâm sửa chữa ép kính lấy liền uy tín hàng đầu. Cam kết 100% linh kiện Zin chuẩn.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-blue-400 border border-white/10 flex items-center justify-center transition-colors"
                title="Facebook Fanpage"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500/30 text-gray-300 hover:text-blue-400 border border-white/10 flex items-center justify-center transition-colors font-bold text-[11px]"
                title="Zalo Chat"
              >
                Zalo
              </a>
              <a
                href={STORE_INFO.messengerUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-purple-600/30 text-gray-300 hover:text-purple-400 border border-white/10 flex items-center justify-center transition-colors"
                title="Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Dịch Vụ Nổi Bật</h4>
            <ul className="space-y-2">
              <li><a href="#iphone" className="hover:text-blue-400 transition-colors">iPhone 16 / 15 Series Chính Hãng</a></li>
              <li><a href="#repair" className="hover:text-blue-400 transition-colors">Ép Kính Màn Hình Điện Thoại</a></li>
              <li><a href="#repair" className="hover:text-blue-400 transition-colors">Thay Mặt Lưng Kính Sau Laser</a></li>
              <li><a href="#repair" className="hover:text-blue-400 transition-colors">Thay Pin Pisen / Bison Dung Lượng Cao</a></li>
              <li><a href="#trade-in" className="hover:text-blue-400 transition-colors">Thu Mua Điện Thoại Cũ Giá Cao</a></li>
              <li><a href="#icloud" className="hover:text-blue-400 transition-colors">Mở Khóa & Bypass iCloud</a></li>
            </ul>
          </div>

          {/* Col 3: Commitments & Warranties */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Chính Sách & Cam Kết</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Bảo hành 12 Tháng 1 Đổi 1</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hoàn tiền 100% nếu máy không Zin</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dùng thử 7 ngày miễn phí</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Trả góp 0% qua CCCD / Thẻ Tín Dụng</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Liên Hệ Cửa Hàng</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.hotline}`} className="font-bold text-emerald-400 hover:underline">
                  {STORE_INFO.hotlineFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{STORE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{STORE_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} HIẾU APPLE. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1">
            <span>Thiết kế tối ưu cho Vercel bởi</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span className="text-gray-300 font-bold">HIẾU APPLE Team</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
