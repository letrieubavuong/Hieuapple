import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Phone, User, MapPin } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/storeData';
import { sendOrderNotification } from '../utils/notification';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'installment'>('cod');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.calculatedPrice * item.quantity,
    0
  );

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !name.trim()) return;

    const generatedId = 'HA-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);

    // Gửi thông báo đến Telegram / Webhook của chủ cửa hàng Hiếu Apple
    const itemDetails = cartItems.map(
      (item) => `• ${item.product.name} (${item.selectedColor.name}${item.selectedStorage ? `, ${item.selectedStorage}` : ''}) x${item.quantity} - ${(item.calculatedPrice * item.quantity).toLocaleString('vi-VN')}đ`
    );

    await sendOrderNotification({
      type: 'ORDER',
      orderId: generatedId,
      customerName: name,
      customerPhone: phone,
      address,
      paymentMethod,
      items: itemDetails,
      totalPrice,
    });

    setOrderComplete(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl overflow-hidden border border-white/20 relative shadow-2xl my-8">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h3 className="font-extrabold text-white text-lg flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <span>Xác Nhận Đặt Mua Hàng</span>
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          <div className="p-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">ĐẶT HÀNG THÀNH CÔNG!</h3>
            <p className="text-sm text-gray-200">
              Mã đơn hàng của bạn: <strong className="text-blue-400 font-mono text-base">{orderId}</strong>
            </p>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Cảm ơn <strong>{name}</strong> đã tin tưởng lựa chọn Hiếu Apple. Nhân viên chăm sóc khách hàng sẽ gọi xác nhận qua số điện thoại <strong>{phone}</strong> trong vòng 10 phút.
            </p>
            
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm"
            >
              Hoàn Tất & Về Trang Chủ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6 text-xs sm:text-sm">
            
            {/* Order Summary Brief */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <h4 className="font-bold text-gray-100 text-sm">Sản phẩm thanh toán ({cartItems.length}):</h4>
              <div className="max-h-36 overflow-y-auto space-y-2 pr-2">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-gray-200 text-xs sm:text-sm">
                    <span className="truncate max-w-[280px]">
                      • {item.product.name} ({item.selectedColor.name}{item.selectedStorage ? `, ${item.selectedStorage}` : ''}) x{item.quantity}
                    </span>
                    <span className="font-extrabold text-blue-400 ml-2">
                      {(item.calculatedPrice * item.quantity).toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-extrabold text-base text-white">
                <span>Tổng cộng:</span>
                <span className="text-blue-400">{totalPrice.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            {/* Customer Inputs */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-gray-100 uppercase tracking-wider text-xs">Thông tin người nhận:</h4>
              
              <div>
                <label className="text-gray-200 font-semibold block mb-1">Họ & Tên (*):</label>
                <input
                  type="text"
                  required
                  placeholder="Nhập tên người nhận..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#16181d] text-gray-200 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="text-gray-200 font-semibold block mb-1">Số điện thoại nhận hàng (*):</label>
                <input
                  type="tel"
                  required
                  placeholder="Nhập số điện thoại..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#16181d] text-gray-200 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="text-gray-200 font-semibold block mb-1">Địa chỉ giao hàng chi tiết:</label>
                <input
                  type="text"
                  required
                  placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#16181d] text-gray-200 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <h4 className="font-bold text-gray-100 uppercase tracking-wider text-xs">Hình thức thanh toán:</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-2 font-bold transition-all text-xs sm:text-sm ${
                    paymentMethod === 'cod'
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500'
                      : 'bg-white/5 text-gray-300 border-white/10'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Thanh Toán Khi Nhận (COD)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('installment')}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-2 font-bold transition-all text-xs sm:text-sm ${
                    paymentMethod === 'installment'
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500'
                      : 'bg-white/5 text-gray-300 border-white/10'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Trả Góp 0% Lãi Suất</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/30 transition-all active:scale-95"
            >
              Xác Nhận Đặt Mua Ngay
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
