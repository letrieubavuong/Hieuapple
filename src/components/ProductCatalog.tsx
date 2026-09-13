import React, { useState, useMemo } from 'react';
import { Filter, Smartphone, Headphones, Check, Sparkles } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  searchQuery: string;
  onAddToCart: (product: Product, color: ProductColor, storage?: string) => void;
  onBuyNow: (product: Product, color: ProductColor, storage?: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onAddToCart,
  onBuyNow,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'iphone' | 'accessory'>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Series filter
      if (selectedSeries !== 'all' && item.series !== selectedSeries) {
        return false;
      }

      // Condition filter
      if (selectedCondition !== 'all' && item.condition !== selectedCondition) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedSeries, selectedCondition, sortBy]);

  return (
    <section id="iphone" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store iPhone & Phụ Kiện</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Danh Mục <span className="text-apple-gradient">iPhone & Phụ Kiện Apple</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Cam kết 100% nguyên bản zin áp, tặng kèm đầy đủ sạc cáp cường lực. Hỗ trợ mua trả góp 0% thủ tục 5 phút lấy máy ngay.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="glass-panel p-4 rounded-3xl mb-8 border border-white/10 space-y-4">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedSeries('all'); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <span>Tất Cả Sản Phẩm</span>
              </button>

              <button
                onClick={() => setSelectedCategory('iphone')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  selectedCategory === 'iphone'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span>iPhone Series</span>
              </button>

              <button
                onClick={() => setSelectedCategory('accessory')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  selectedCategory === 'accessory'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Headphones className="w-4 h-4 text-purple-400" />
                <span>Phụ Kiện Chính Hãng</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-400 hidden sm:inline">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#16181d] text-gray-200 border border-white/15 rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 text-xs"
              >
                <option value="default">Mới nhất / Bán chạy</option>
                <option value="price-low">Giá tăng dần ↑</option>
                <option value="price-high">Giá giảm dần ↓</option>
              </select>
            </div>
          </div>

          {/* Sub Filters: Series & Condition */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            {/* Series Filter */}
            {selectedCategory !== 'accessory' && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-gray-400 font-medium">Dòng iPhone:</span>
                {['all', '16', '15', '14', '13'].map((ser) => (
                  <button
                    key={ser}
                    onClick={() => setSelectedSeries(ser)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      selectedSeries === ser
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {ser === 'all' ? 'Tất cả Series' : `iPhone ${ser}`}
                  </button>
                ))}
              </div>
            )}

            {/* Condition Filter */}
            <div className="flex items-center gap-1.5 flex-wrap ml-auto">
              <span className="text-gray-400 font-medium">Tình trạng:</span>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'Mới 100%', label: 'Mới 100% VN/A' },
                { id: 'Likenew 99%', label: 'Likenew 99% Zin' },
              ].map((cond) => (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    selectedCondition === cond.id
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {cond.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-gray-400 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-gray-200">Không tìm thấy sản phẩm phù hợp</h3>
            <p className="text-xs text-gray-400">
              Vui lòng thử tìm kiếm lại với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ sản phẩm tại Hiếu Apple.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSeries('all');
                setSelectedCondition('all');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors"
            >
              Đặt Lại Bộ Lọc
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
