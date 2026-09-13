import React from 'react';

interface IPhoneImageProps {
  modelId: string;
  colorName?: string;
  colorCode?: string;
  className?: string;
  view?: 'back' | 'front' | 'side' | 'camera';
}

export const IPhoneImage: React.FC<IPhoneImageProps> = ({
  modelId,
  colorName,
  className = 'w-full h-full',
  view = 'back',
}) => {
  // Normalize model ID to folder name
  const getFolder = (id: string) => {
    if (id.includes('17-pro-max')) return 'ip-17-pro-max';
    if (id.includes('16-pro-max')) return 'ip-16-pro-max';
    if (id.includes('15-pro-max')) return 'ip-15-pro-max';
    if (id.includes('15-pro')) return 'ip-15-pro';
    if (id.includes('14-pro-max')) return 'ip-14-pro-max';
    if (id.includes('14-pro')) return 'ip-14-pro';
    if (id.includes('14-plus')) return 'ip-14-plus';
    if (id.includes('13')) return 'ip-13';
    if (id.includes('12-pro-max')) return 'ip-12-pro-max';
    if (id.includes('12-pro')) return 'ip-12-pro';
    if (id.includes('12')) return 'ip-12';
    if (id.includes('11-pro-max')) return 'ip-11-pro-max';
    if (id.includes('11')) return 'ip-11';
    if (id.includes('7-plus')) return 'ip-7-plus';
    return 'ip-16-pro-max';
  };

  const folder = getFolder(modelId);

  // Map view angle to real photo URL
  const getImageSrc = () => {
    if (folder === 'ip-17-pro-max') {
      if (view === 'front') return '/images/iphone-17-pro-max/cam-vu-tru-front.jpg';
      if (view === 'camera') return '/images/iphone-17-pro-max/cam-vu-tru-camera.jpg';
      if (view === 'side') return '/images/iphone-17-pro-max/cam-vu-tru-side.jpg';
      return '/images/iphone-17-pro-max/cam-vu-tru-main.jpg';
    }

    if (view === 'front') return `/images/products/${folder}/front.png`;
    if (view === 'camera') return `/images/products/${folder}/camera.jpg`;
    if (view === 'side') return `/images/products/${folder}/side.png`;
    return `/images/products/${folder}/main.jpg`;
  };

  const src = getImageSrc();

  return (
    <div className={`relative flex items-center justify-center p-1 select-none overflow-hidden ${className}`}>
      <img
        src={src}
        alt={`iPhone ${modelId} - ${colorName || view}`}
        className="w-full h-full object-contain max-h-full transition-transform duration-300 drop-shadow-xl animate-fadeIn"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          if (!target.src.endsWith('main.jpg')) {
            target.src = `/images/products/${folder}/main.jpg`;
          }
        }}
      />
    </div>
  );
};

