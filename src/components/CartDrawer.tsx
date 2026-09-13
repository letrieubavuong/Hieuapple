import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.calculatedPrice * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel border-l border-white/10 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              <h3 className="font-extrabold text-white text-lg">Giỏ Hàng Mua Sắm ({cartItems.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-gray-400 text-3xl">
                  🛒
                </div>
                <p className="text-base font-bold text-gray-200">Giỏ hàng của bạn đang trống</p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Hãy chọn sản phẩm iPhone hoặc Phụ kiện ưa thích để thêm vào giỏ.
                </p>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-3.5 items-center"
                >
                  <img
                    src={item.selectedColor.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain rounded-xl bg-black/30 p-1 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="font-bold text-sm text-white truncate">{item.product.name}</h4>
                    <div className="text-xs text-gray-300 flex items-center gap-2 flex-wrap">
                      <span>Màu: <strong className="text-blue-400">{item.selectedColor.name}</strong></span>
                      {item.selectedStorage && (
                        <span>| Bộ nhớ: <strong className="text-emerald-400">{item.selectedStorage}</strong></span>
                      )}
                    </div>
                    <div className="font-extrabold text-sm text-blue-400">
                      {item.calculatedPrice.toLocaleString('vi-VN')}đ
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(idx)}
                      className="text-gray-400 hover:text-red-400 p-1"
                      title="Xóa sản phẩm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-black/50 rounded-xl p-1 border border-white/10">
                      <button
                        onClick={() => onUpdateQuantity(idx, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white font-bold"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-extrabold px-1 text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 space-y-3 bg-[#0d0e13]">
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
                <span>Miễn phí giao hàng:</span>
                <span className="text-emerald-400 font-bold">0đ (Toàn Quốc)</span>
              </div>
              <div className="flex items-center justify-between text-base">
                <span className="font-bold text-gray-100">Tổng tiền thanh toán:</span>
                <span className="text-xl font-extrabold text-blue-400">
                  {totalPrice.toLocaleString('vi-VN')}đ
                </span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Tiến Hành Mua Ngay</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cam kết 100% chính hãng • Đổi mới 30 ngày nếu lỗi</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
