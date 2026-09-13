import React, { useState } from 'react';
import { ShoppingCart, Zap, Eye, CheckCircle2 } from 'lucide-react';
import { Product, ProductColor, StoragePriceOption } from '../types';
import { IPhoneImage } from './IPhoneImage';

interface ProductCardProps {
  product: Product;
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
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  
  // Storage Selection
  const [selectedStorageOpt, setSelectedStorageOpt] = useState<StoragePriceOption | undefined>(
    product.storageOptions ? product.storageOptions[0] : undefined
  );
  const [addedToast, setAddedToast] = useState(false);

  // Dynamic Price Calculation
  const currentPrice = selectedStorageOpt ? selectedStorageOpt.price : product.price;
  const currentOriginalPrice = selectedStorageOpt ? selectedStorageOpt.originalPrice : product.originalPrice;

  const discountPercent = Math.round(
    ((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(
      product,
      selectedColor,
      selectedStorageOpt?.size,
      currentPrice,
      currentOriginalPrice
    );
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 1800);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuyNow(
      product,
      selectedColor,
      selectedStorageOpt?.size,
      currentPrice,
      currentOriginalPrice
    );
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="glass-card rounded-3xl p-5 flex flex-col justify-between relative group cursor-pointer border border-white/10 hover:border-blue-500/40 transition-all duration-300 h-full"
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-1 z-10 mb-2">
        <div className="flex flex-wrap gap-1.5">
          {product.badge && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
              {product.badge}
            </span>
          )}
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
            product.condition === 'Mới 100%' 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
          }`}>
            {product.condition}
          </span>
        </div>

        {discountPercent > 0 && (
          <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Main Image: Exact Model Vector Render for iPhones, SVG/Img for accessories */}
      <div className="relative w-full h-56 sm:h-60 my-2 rounded-2xl overflow-hidden bg-black/30 flex items-center justify-center group-hover:scale-102 transition-transform p-2">
        {product.category === 'iphone' ? (
          <IPhoneImage
            modelId={product.id}
            colorName={selectedColor.name}
            colorCode={selectedColor.code}
            className="w-full h-full"
          />
        ) : (
          <img
            src={selectedColor.image}
            alt={product.name}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Hover Quick View Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white transition-opacity duration-300"
        >
          <Eye className="w-4 h-4 text-blue-400" />
          <span>Xem Chi Tiết & Ảnh Đa Góc</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-3 mt-1 flex-grow">
        
        {/* Storage Buttons Selector (Dynamic Price Change) */}
        {product.storageOptions && (
          <div className="space-y-1">
            <span className="text-[11px] text-gray-400 font-semibold block text-center">Chọn dung lượng bộ nhớ:</span>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {product.storageOptions.map((st) => (
                <button
                  key={st.size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedStorageOpt(st);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                    selectedStorageOpt?.size === st.size
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/30 font-extrabold scale-105'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {st.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors Selector Dots */}
        {product.colors.length > 1 && (
          <div className="flex items-center gap-2 justify-center py-1">
            <span className="text-[11px] text-gray-400 font-semibold">Màu:</span>
            {product.colors.map((col, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(col);
                }}
                className={`w-4.5 h-4.5 rounded-full border transition-all ${
                  selectedColor.name === col.name 
                    ? 'border-blue-400 scale-125 ring-2 ring-blue-500/50' 
                    : 'border-white/20 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: col.code }}
                title={col.name}
              />
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-gray-100 text-base sm:text-lg leading-snug group-hover:text-blue-400 transition-colors line-clamp-2 text-center">
          {product.name} {selectedStorageOpt ? `(${selectedStorageOpt.size})` : ''}
        </h3>

        {/* Dynamic Price Display */}
        <div className="text-center pt-1 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-blue-400">
              {currentPrice.toLocaleString('vi-VN')}đ
            </span>
            {currentOriginalPrice > currentPrice && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                {currentOriginalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
          </div>
          <p className="text-xs text-emerald-400 font-semibold">
            ✓ Trả góp 0% • Bao test lỗi 1 đổi 1 3 tháng
          </p>
        </div>
      </div>

      {/* Action Buttons: Thêm vào giỏ & Mua ngay */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
        <button
          onClick={handleAddToCart}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
            addedToast 
              ? 'bg-emerald-600 text-white' 
              : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/15'
          }`}
        >
          {addedToast ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã Thêm!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 text-blue-400" />
              <span>Thêm Giỏ</span>
            </>
          )}
        </button>

        <button
          onClick={handleBuyNow}
          className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all active:scale-95"
        >
          <Zap className="w-4 h-4 fill-current text-amber-300" />
          <span>Mua Ngay</span>
        </button>
      </div>

    </div>
  );
};
