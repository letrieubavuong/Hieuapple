import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { IPhoneImage } from './IPhoneImage';

interface ImageGalleryViewerProps {
  product: Product;
  selectedColor: ProductColor;
  className?: string;
}

export const ImageGalleryViewer: React.FC<ImageGalleryViewerProps> = ({
  product,
  selectedColor,
  className = '',
}) => {
  const [activeView, setActiveView] = useState<'back' | 'front' | 'camera' | 'side' | 'video'>('back');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Gallery items matching user's reference preview strip
  const galleryItems: {
    id: 'video' | 'back' | 'front' | 'camera' | 'side';
    title: string;
    subLabel: string;
  }[] = [
    { id: 'video', title: 'Video 360', subLabel: 'Clip xem' },
    { id: 'back', title: 'Mặt sau', subLabel: 'Tổng thể' },
    { id: 'front', title: 'Mặt trước', subLabel: 'Màn hình' },
    { id: 'camera', title: 'Camera', subLabel: 'Cận cảnh' },
    { id: 'side', title: 'Cạnh viền', subLabel: 'Nút bấm' },
  ];

  // Helper to resolve specific real downloaded image path for each view if available
  const getRealImageForView = (view: string): string | null => {
    const gallery = selectedColor.gallery || [];
    if (view === 'back' && (selectedColor.image || gallery[0])) {
      return selectedColor.image || gallery[0];
    }
    if (view === 'front' && gallery[2]) {
      return gallery[2];
    }
    if (view === 'camera' && gallery[3]) {
      return gallery[3];
    }
    if (view === 'side' && gallery[1]) {
      return gallery[1];
    }
    return selectedColor.image || gallery[0] || product.colors[0]?.image || null;
  };

  const currentRealImage = getRealImageForView(activeView);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -160 : 160;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      
      {/* 1. Main Stage Preview - Clean White Background matching reference UI */}
      <div className="relative w-full h-72 sm:h-96 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-sm">
        
        {isVideoPlaying ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 text-center space-y-3 animate-fadeIn text-white">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 text-red-500 flex items-center justify-center animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="font-extrabold text-white text-base">Video 360° {product.name}</h4>
            <p className="text-xs text-gray-300">
              Góc quay thực tế màu <strong className="text-blue-400">{selectedColor.name}</strong>
            </p>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-gray-200 border border-white/15"
            >
              Thoát Video
            </button>
          </div>
        ) : currentRealImage ? (
          <img
            src={currentRealImage}
            alt={`${product.name} - ${selectedColor.name}`}
            className="w-full h-full object-contain max-h-full drop-shadow-xl animate-fadeIn transition-all duration-300"
            onError={(e) => {
              // Graceful fallback to SVG render if local image load fails
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          <IPhoneImage
            modelId={product.id}
            colorName={selectedColor.name}
            colorCode={selectedColor.code}
            view={activeView === 'video' ? 'back' : activeView}
            className="w-full h-full object-contain max-h-full"
          />
        )}

        {/* View Badge Label */}
        <div className="absolute bottom-3 left-4 bg-gray-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-700/50 text-xs text-gray-200 flex items-center gap-2 shadow-md">
          <Eye className="w-3.5 h-3.5 text-red-400" />
          <span className="text-[11px] sm:text-xs">
            {activeView === 'back' && 'Mặt Sau Tổng Thể (Ảnh Thật)'}
            {activeView === 'front' && 'Mặt Trước Dynamic Island (Ảnh Thật)'}
            {activeView === 'camera' && 'Cận Cảnh Cụm Camera (Ảnh Thật)'}
            {activeView === 'side' && 'Góc Nghiêng Cạnh Viền'}
            {activeView === 'video' && 'Clip Video 360°'}
          </span>
        </div>
      </div>

      {/* 2. Thumbnail Carousel Track with Red Highlight Border & Nav Buttons */}
      <div className="relative flex items-center gap-2 px-1">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center flex-shrink-0 shadow-sm active:scale-95 transition-all"
          title="Xem ảnh trước"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Horizontal Scrollable Thumbnails */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center gap-2.5 overflow-x-auto py-1 px-1 no-scrollbar scroll-smooth"
        >
          {galleryItems.map((item) => {
            const isActive = activeView === item.id;
            const thumbImg = getRealImageForView(item.id);

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  if (item.id === 'video') {
                    setIsVideoPlaying(true);
                  } else {
                    setIsVideoPlaying(false);
                  }
                }}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 flex flex-col items-center justify-center p-1 flex-shrink-0 transition-all duration-150 bg-white dark:bg-gray-900 overflow-hidden relative ${
                  isActive
                    ? 'border-red-600 ring-2 ring-red-500/50 shadow-md scale-105'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 opacity-80 hover:opacity-100'
                }`}
              >
                {item.id === 'video' ? (
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700">
                      <Play className="w-3.5 h-3.5 text-red-600 fill-current ml-0.5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">Video</span>
                  </div>
                ) : thumbImg ? (
                  <img
                    src={thumbImg}
                    alt={item.title}
                    className="w-full h-full object-contain p-0.5"
                  />
                ) : (
                  <IPhoneImage
                    modelId={product.id}
                    colorName={selectedColor.name}
                    colorCode={selectedColor.code}
                    view={item.id}
                    className="w-full h-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center flex-shrink-0 shadow-sm active:scale-95 transition-all"
          title="Xem ảnh tiếp theo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};


