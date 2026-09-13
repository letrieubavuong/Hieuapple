import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Zap, ShieldCheck, Truck, RotateCcw, Sparkles, Check } from 'lucide-react';
import { Product, ProductColor, StoragePriceOption } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    color: ProductColor,
    storage?: string,
    calculatedPrice?: number,
    calculatedOriginalPrice?: number
  ) => void;
  onBuyNow: (
    product: Product,
    color: ProductColor,
    storage?: string,
    calculatedPrice?: number,
    calculatedOriginalPrice?: number
  ) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedStorageOpt, setSelectedStorageOpt] = useState<StoragePriceOption | undefined>(
    product.storageOptions ? product.storageOptions[0] : undefined
  );

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedStorageOpt(product.storageOptions ? product.storageOptions[0] : undefined);
    }
  }, [product]);

  const currentPrice = selectedStorageOpt ? selectedStorageOpt.price : product.price;
  const currentOriginalPrice = selectedStorageOpt ? selectedStorageOpt.originalPrice : product.originalPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column - Product Images & Colors */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-black/40 p-4 flex items-center justify-center overflow-hidden border border-white/10">
              <img
                src={selectedColor.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-blue-600/90 text-white font-extrabold text-xs uppercase tracking-wide">
                {product.condition}
              </span>
            </div>

            {/* Colors Selector */}
            <div className="mt-4 space-y-2">
              <label className="text-sm font-bold text-gray-200 block">
                Màu sắc: <span className="text-blue-400 font-extrabold">{selectedColor.name}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(col)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition-all ${
                      selectedColor.name === col.name
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500 shadow-md'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/30"
                      style={{ backgroundColor: col.code }}
                    />
                    <span>{col.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Specs & Purchase Options */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Title & Price */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {product.name} {selectedStorageOpt ? `(${selectedStorageOpt.size})` : ''}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">{product.description}</p>
              
              {/* Dynamic Price Output */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                  {currentPrice.toLocaleString('vi-VN')}đ
                </span>
                {currentOriginalPrice > currentPrice && (
                  <span className="text-sm sm:text-base text-gray-400 line-through">
                    {currentOriginalPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
            </div>

            {/* Storage Selection (Dynamic Price Trigger) */}
            {product.storageOptions && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-200 block">
                  Chọn Dung Lượng Bộ Nhớ (Giá thay đổi tương ứng):
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.storageOptions.map((st) => (
                    <button
                      key={st.size}
                      onClick={() => setSelectedStorageOpt(st)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold border transition-all ${
                        selectedStorageOpt?.size === st.size
                          ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-105'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{st.size}</span>
                      <span className="block text-[11px] font-normal text-blue-300 opacity-90">
                        {st.price.toLocaleString('vi-VN')}đ
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Summary */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider">Thông Số Kỹ Thuật:</h4>
              <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 p-3.5 rounded-xl border border-white/10">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between border-b border-white/5 pb-1.5 last:border-none">
                    <span className="text-gray-400 font-medium">{key}:</span>
                    <span className="font-bold text-gray-100">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranties & Policies */}
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bảo hành 12 Tháng 1 Đổi 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Giao hỏa tốc toàn quốc</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-purple-400" />
                <span>Dùng thử 7 ngày miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Tặng sạc 20W + Cường lực</span>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                onClick={() => {
                  onAddToCart(
                    product,
                    selectedColor,
                    selectedStorageOpt?.size,
                    currentPrice,
                    currentOriginalPrice
                  );
                  onClose();
                }}
                className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-100 font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4 text-blue-400" />
                <span>Thêm Vào Giỏ</span>
              </button>

              <button
                onClick={() => {
                  onBuyNow(
                    product,
                    selectedColor,
                    selectedStorageOpt?.size,
                    currentPrice,
                    currentOriginalPrice
                  );
                  onClose();
                }}
                className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all active:scale-95"
              >
                <Zap className="w-4 h-4 fill-current text-amber-300" />
                <span>Mua Ngay Lấy Máy</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
