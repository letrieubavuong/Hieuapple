import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Zap, ShieldCheck, Truck, RotateCcw, Sparkles, Check, Eye } from 'lucide-react';
import { Product, ProductColor, StoragePriceOption } from '../types';
import { IPhoneImage } from './IPhoneImage';

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

  // Active Gallery Image index or type
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  useEffect(() => {
    if (product) {
      const defaultCol = product.colors[0];
      setSelectedColor(defaultCol);
      setActiveGalleryIndex(0);
      setSelectedStorageOpt(product.storageOptions ? product.storageOptions[0] : undefined);
    }
  }, [product]);

  const handleColorSelect = (col: ProductColor) => {
    setSelectedColor(col);
    setActiveGalleryIndex(0);
  };

  const galleryList = selectedColor.gallery && selectedColor.gallery.length > 0
    ? selectedColor.gallery
    : [selectedColor.image];

  const currentPrice = selectedStorageOpt ? selectedStorageOpt.price : product.price;
  const currentOriginalPrice = selectedStorageOpt ? selectedStorageOpt.originalPrice : product.originalPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl rounded-3xl overflow-hidden border border-white/20 relative shadow-2xl my-6 max-h-[92vh] flex flex-col">
        
        {/* Header Bar inside Modal */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white font-extrabold text-xs uppercase tracking-wide">
              {product.condition}
            </span>
            <h3 className="font-extrabold text-white text-base sm:text-lg truncate max-w-md sm:max-w-xl">
              {product.name} {selectedStorageOpt ? `(${selectedStorageOpt.size})` : ''}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 grid md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Column - Model Accurate Render & Color Select */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-black/50 p-4 flex items-center justify-center overflow-hidden border border-white/10 group">
              {product.category === 'iphone' ? (
                <IPhoneImage
                  modelId={product.id}
                  colorName={selectedColor.name}
                  colorCode={selectedColor.code}
                  className="w-full h-full"
                />
              ) : (
                <img
                  src={galleryList[activeGalleryIndex] || selectedColor.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              )}
              
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md text-gray-200 text-xs font-semibold flex items-center gap-1.5 border border-white/15">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Màu: <strong className="text-white font-bold">{selectedColor.name}</strong></span>
              </span>
            </div>

            {/* Color Select Buttons */}
            <div className="space-y-2 pt-1">
              <label className="text-sm font-bold text-gray-200 block">
                Chọn Màu Sắc Máy Chuẩn Zin:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleColorSelect(col)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition-all ${
                      selectedColor.name === col.name
                        ? 'bg-blue-600/30 text-blue-300 border-blue-400 shadow-md ring-1 ring-blue-500/40 scale-105'
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

            {/* Key Highlights */}
            {product.highlights && (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 mt-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  ✨ Điểm Nổi Bật Dòng Máy:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                  {product.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column - Product Specs & Options */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Title & Description */}
            <div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{product.description}</p>
              
              {/* Price Tag */}
              <div className="flex items-baseline gap-3 mt-4 p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30">
                <div>
                  <span className="text-xs text-gray-400 block">Giá bán khuyến mãi:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                    {currentPrice.toLocaleString('vi-VN')}đ
                  </span>
                </div>
                {currentOriginalPrice > currentPrice && (
                  <div className="text-right ml-auto">
                    <span className="text-xs text-gray-400 block">Giá niêm yết cũ:</span>
                    <span className="text-sm sm:text-base text-gray-400 line-through">
                      {currentOriginalPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Storage Selection */}
            {product.storageOptions && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-200 block">
                  Chọn Dung Lượng Bộ Nhớ:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.storageOptions.map((st) => (
                    <button
                      key={st.size}
                      onClick={() => setSelectedStorageOpt(st)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold border transition-all text-left ${
                        selectedStorageOpt?.size === st.size
                          ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-105'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="block">{st.size}</span>
                      <span className="text-[11px] font-normal text-blue-200">
                        {st.price.toLocaleString('vi-VN')}đ
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Technical Specifications Table */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider">
                Bảng Thông Số Kỹ Thuật Chi Tiết:
              </h4>
              <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300 bg-black/40 p-4 rounded-2xl border border-white/10 max-h-64 overflow-y-auto">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-white/5 pb-2 gap-1 last:border-none">
                    <span className="text-gray-400 font-bold sm:w-1/3 flex-shrink-0">{key}:</span>
                    <span className="font-semibold text-gray-100 sm:w-2/3">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Guarantee Badge */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Cam Kết Vàng Tại Hiếu Apple:</span>
              </div>
              <p>• Lỗi 1 đổi 1 trong 3 tháng | Đền 100% tiền nếu đã thay vỏ/ép kính | Hỗ trợ 30% khi sửa bể vỡ</p>
            </div>

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="grid grid-cols-2 gap-3 pt-2">
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
