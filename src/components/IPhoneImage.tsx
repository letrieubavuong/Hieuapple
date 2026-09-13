import React from 'react';

interface IPhoneImageProps {
  modelId: string;
  colorName: string;
  colorCode: string;
  className?: string;
  view?: 'back' | 'front' | 'side' | 'camera';
}

export const IPhoneImage: React.FC<IPhoneImageProps> = ({
  modelId,
  colorName,
  colorCode,
  className = 'w-full h-full',
  view = 'back',
}) => {
  const is17ProMax = modelId.includes('17-pro-max');
  
  const isProSeries =
    is17ProMax ||
    modelId.includes('pro') ||
    modelId.includes('16-pro-max') ||
    modelId.includes('15-pro-max') ||
    modelId.includes('14-pro-max') ||
    modelId.includes('13-pro-max') ||
    modelId.includes('12-pro-max') ||
    modelId.includes('11-pro-max');

  const isDynamicIsland =
    modelId.includes('17') ||
    modelId.includes('16') ||
    modelId.includes('15') ||
    modelId.includes('14-pro');

  const isDiagonalCamera =
    modelId.includes('13') ||
    modelId.includes('14-plus') ||
    (modelId.includes('15') && !modelId.includes('pro'));

  const isVerticalCamera = modelId.includes('11') || modelId.includes('12');

  const getFinishGradients = (code: string) => {
    switch (code.toLowerCase()) {
      case '#cbb197': // Titan Sa Mạc Thẫm 17 Pro Max
        return { bg: '#c9b197', highlight: '#f7ebd9', shadow: '#7e644a', ring: '#dfcbb5' };
      case '#7d898c': // Titan Xanh Xám 17 Pro Max
        return { bg: '#727e81', highlight: '#afbcc0', shadow: '#434c4f', ring: '#9aa7ab' };
      case '#222327': // Titan Đen Vũ Trụ 17 Pro Max
        return { bg: '#1d1e21', highlight: '#41444b', shadow: '#0c0c0e', ring: '#363940' };
      case '#c2a88f': // Desert Titanium 16 Pro Max
        return { bg: '#d4bc9f', highlight: '#f3e5d8', shadow: '#967d64', ring: '#e8d4c0' };
      case '#9f9d96': // Natural Titanium
        return { bg: '#adab9f', highlight: '#d5d3c8', shadow: '#767469', ring: '#c5c3b8' };
      case '#3b3b3d': // Black Titanium
        return { bg: '#2b2b2d', highlight: '#4f4f53', shadow: '#151517', ring: '#444448' };
      case '#e3e4e5': // White Titanium
        return { bg: '#ebecee', highlight: '#ffffff', shadow: '#b5b7bb', ring: '#dbdcde' };
      case '#4b3b55': // Deep Purple
        return { bg: '#483552', highlight: '#6d547b', shadow: '#281a30', ring: '#5e456c' };
      case '#2c3e50': // Pacific Blue
        return { bg: '#233446', highlight: '#3a526d', shadow: '#121c27', ring: '#304760' };
      case '#4e5d52': // Midnight Green
        return { bg: '#3f4c42', highlight: '#5f7163', shadow: '#232b25', ring: '#4b5b4e' };
      case '#f2e3c6': // Gold
        return { bg: '#e8d1a7', highlight: '#fbf0d9', shadow: '#b59b6b', ring: '#e0c798' };
      case '#a0c4ff': // Blue 14 Plus
        return { bg: '#8bb6f8', highlight: '#c4dbfe', shadow: '#5382cc', ring: '#a8cdfc' };
      case '#c8b6ff': // Purple 14
        return { bg: '#bca6f8', highlight: '#e2d7fe', shadow: '#8365cc', ring: '#cfbeff' };
      case '#f4c7d0': // Pink
        return { bg: '#e9adb7', highlight: '#fbdbe1', shadow: '#b87581', ring: '#f2bdc6' };
      default:
        return { bg: code, highlight: '#ffffff', shadow: '#000000', ring: code };
    }
  };

  const finish = getFinishGradients(colorCode);

  // ---------------- VIEW 1: SIDE PROFILE VIEW (GÓC NGHIÊNG CẠNH VIỀN & NÚT BẤM) ----------------
  if (view === 'side') {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg
          viewBox="0 0 120 520"
          className="w-full h-full max-h-full max-w-full drop-shadow-2xl transition-all duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`sideGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={finish.shadow} />
              <stop offset="40%" stopColor={finish.highlight} />
              <stop offset="80%" stopColor={finish.bg} />
              <stop offset="100%" stopColor={finish.shadow} />
            </linearGradient>
          </defs>

          {/* Side Chassis Frame */}
          <rect
            x="42"
            y="20"
            width="36"
            height="480"
            rx="18"
            fill={`url(#sideGrad-${modelId})`}
            stroke={finish.highlight}
            strokeWidth="1"
          />

          {/* Side Camera Bump Profile (Right side) */}
          <rect
            x="76"
            y="42"
            width="14"
            height="100"
            rx="6"
            fill={finish.bg}
            stroke={finish.highlight}
            strokeWidth="1"
          />
          <circle cx="92" cy="68" r="6" fill="#1e293b" stroke={finish.ring} strokeWidth="1" />
          <circle cx="92" cy="116" r="6" fill="#1e293b" stroke={finish.ring} strokeWidth="1" />

          {/* Side Buttons: Action / Power Button */}
          <rect x="36" y="160" width="6" height="50" rx="3" fill={finish.highlight} stroke="#000" strokeWidth="0.5" />
          <rect x="36" y="230" width="6" height="35" rx="3" fill={finish.highlight} stroke="#000" strokeWidth="0.5" />
          <rect x="36" y="275" width="6" height="35" rx="3" fill={finish.highlight} stroke="#000" strokeWidth="0.5" />

          {/* Camera Control Button (Bottom Right) */}
          <rect x="76" y="360" width="4" height="40" rx="2" fill={finish.shadow} stroke={finish.highlight} strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  // ---------------- VIEW 2: FRONT SCREEN VIEW (MẶT TRƯỚC MÀN HÌNH DYNAMIC ISLAND) ----------------
  if (view === 'front') {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg
          viewBox="0 0 280 520"
          className="w-full h-full max-h-full max-w-full drop-shadow-2xl transition-all duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Frame */}
          <rect
            x="20"
            y="20"
            width="240"
            height="480"
            rx="46"
            fill={finish.shadow}
            stroke={finish.highlight}
            strokeWidth="1.5"
          />

          {/* Black Bezel & Screen Glass */}
          <rect x="24" y="24" width="232" height="472" rx="42" fill="#000000" />

          {/* Screen Wallpaper Preview (Sleek iOS Gradient) */}
          <rect x="28" y="28" width="224" height="464" rx="38" fill="url(#screenGrad)" />
          
          <defs>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="30%" stopColor="#1e1b4b" />
              <stop offset="70%" stopColor="#31104b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Dynamic Island Notch at Top */}
          {isDynamicIsland ? (
            <rect x="105" y="38" width="70" height="20" rx="10" fill="#000000" stroke="#1e293b" strokeWidth="0.5">
              <animate attributeName="width" values="70;90;70" dur="4s" repeatCount="indefinite" />
            </rect>
          ) : (
            <path d="M100 28 H180 V44 C180 50 174 54 168 54 H112 C106 54 100 50 100 44 Z" fill="#000000" />
          )}

          {/* iOS Lockscreen Time Widget */}
          <text x="140" y="115" textAnchor="middle" fill="#ffffff" fillOpacity="0.9" fontSize="38" fontWeight="800" fontFamily="sans-serif">
            09:41
          </text>
          <text x="140" y="138" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            Chủ Nhật, 13 Tháng 9
          </text>

          {/* iOS Dock Bar */}
          <rect x="42" y="440" width="196" height="42" rx="21" fill="white" fillOpacity="0.15" />
          <circle cx="70" cy="461" r="14" fill="#22c55e" />
          <circle cx="116" cy="461" r="14" fill="#3b82f6" />
          <circle cx="164" cy="461" r="14" fill="#a855f7" />
          <circle cx="210" cy="461" r="14" fill="#ec4899" />
        </svg>
      </div>
    );
  }

  // ---------------- VIEW 3: CLOSE-UP CAMERA LENS VIEW (CẬN CẢNH CỤM CAMERA) ----------------
  if (view === 'camera') {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg
          viewBox="0 0 280 280"
          className="w-full h-full max-h-full max-w-full drop-shadow-2xl transition-all duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`camZoomGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={finish.highlight} />
              <stop offset="50%" stopColor={finish.bg} />
              <stop offset="100%" stopColor={finish.shadow} />
            </linearGradient>
          </defs>

          {/* Camera Plate Background */}
          <rect x="20" y="20" width="240" height="240" rx="44" fill={finish.bg} stroke={finish.highlight} strokeWidth="2" />
          <rect x="30" y="30" width="220" height="220" rx="38" fill={`url(#camZoomGrad-${modelId})`} />

          {/* Lens 1 Big */}
          <circle cx="95" cy="95" r="42" fill="#0f172a" stroke={finish.highlight} strokeWidth="3" />
          <circle cx="95" cy="95" r="34" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="95" cy="95" r="16" fill="#090d16" />
          <circle cx="88" cy="88" r="6" fill="#ffffff" fillOpacity="0.7" />

          {/* Lens 2 Big */}
          <circle cx="95" cy="185" r="42" fill="#0f172a" stroke={finish.highlight} strokeWidth="3" />
          <circle cx="95" cy="185" r="34" fill="#020617" stroke="#818cf8" strokeWidth="2" />
          <circle cx="95" cy="185" r="16" fill="#090d16" />
          <circle cx="88" cy="178" r="6" fill="#ffffff" fillOpacity="0.7" />

          {/* Lens 3 Big */}
          <circle cx="185" cy="140" r="42" fill="#0f172a" stroke={finish.highlight} strokeWidth="3" />
          <circle cx="185" cy="140" r="34" fill="#020617" stroke="#c084fc" strokeWidth="2" />
          <circle cx="185" cy="140" r="16" fill="#090d16" />
          <circle cx="178" cy="133" r="6" fill="#ffffff" fillOpacity="0.7" />

          {/* Flash */}
          <circle cx="185" cy="70" r="14" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="185" cy="70" r="7" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  // ---------------- DEFAULT VIEW: BACK FULL VIEW (MẶT SAU TỔNG THỂ) ----------------
  return (
    <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
      <svg
        viewBox="0 0 280 520"
        className="w-full h-full max-h-full max-w-full drop-shadow-2xl transition-all duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bodyGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={finish.highlight} />
            <stop offset="45%" stopColor={finish.bg} />
            <stop offset="100%" stopColor={finish.shadow} />
          </linearGradient>

          <linearGradient id={`camBumpGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={finish.highlight} stopOpacity="0.85" />
            <stop offset="100%" stopColor={finish.bg} stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id={`bezelGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="50%" stopColor={finish.ring} />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="lensReflect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="35%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#020617" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Outer Shadow */}
        <rect
          x="22"
          y="22"
          width="236"
          height="476"
          rx="44"
          fill="black"
          fillOpacity="0.4"
          filter="blur(10px)"
        />

        {/* Outer Frame / Metallic Bezel */}
        <rect
          x="20"
          y="20"
          width="240"
          height="480"
          rx="46"
          fill={`url(#bodyGrad-${modelId})`}
          stroke={finish.highlight}
          strokeWidth="1.5"
        />

        {/* Inner Antenna Lines */}
        <line x1="20" y1="90" x2="24" y2="90" stroke="#000000" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="256" y1="90" x2="260" y2="90" stroke="#000000" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="20" y1="430" x2="24" y2="430" stroke="#000000" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="256" y1="430" x2="260" y2="430" stroke="#000000" strokeOpacity="0.3" strokeWidth="2" />

        {/* Main Back Matte Glass Plate */}
        <rect
          x="24"
          y="24"
          width="232"
          height="472"
          rx="42"
          fill={finish.bg}
        />
        <rect
          x="24"
          y="24"
          width="232"
          height="472"
          rx="42"
          fill={`url(#bodyGrad-${modelId})`}
          fillOpacity="0.5"
        />

        {/* Apple Logo Centered */}
        <g transform="translate(130, 245) scale(0.22)">
          <path
            d="M17.039 20.39c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.1-3.69-3-7.79-7.85-12.3-14.56-6.19-9.15-11.22-19.46-15.1-30.93-3.88-11.48-5.82-22.16-5.82-32.06 0-14.56 3.6-26.4 10.8-35.53 7.2-9.13 16.27-13.8 27.21-14.02 4.69 0 9.87 1.25 15.54 3.75 5.67 2.5 9.49 3.75 11.46 3.75 1.62 0 5.61-1.31 11.97-3.94 6.36-2.63 11.83-3.81 16.41-3.56 12.19.98 21.84 5.56 28.96 13.73-10.88 6.59-16.14 15.75-15.78 27.48.37 9.17 3.86 16.92 10.47 23.25 6.61 6.33 14.54 10.02 23.79 11.07-2.66 7.82-6.18 15.5-10.57 23.04zM-14.11-77.94c0-7.07 2.56-13.74 7.68-20.01 5.12-6.27 11.58-10.29 19.38-12.06.25 1.07.38 2.05.38 2.94 0 6.94-2.67 13.72-8.01 20.34-5.34 6.62-11.83 10.66-19.43 12.12-.13-1.07-.19-2.05-.19-2.93z"
            fill="url(#logoGrad)"
          />
        </g>

        {/* ---------------- CAMERA MODULE BUMP STYLES ---------------- */}

        {/* SPECIAL IPHONE 17 PRO MAX CAMERA ISLAND */}
        {is17ProMax && (
          <g>
            <rect
              x="36"
              y="36"
              width="112"
              height="112"
              rx="30"
              fill={`url(#camBumpGrad-${modelId})`}
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              filter="drop-shadow(0px 6px 14px rgba(0,0,0,0.3))"
            />
            <circle cx="68" cy="68" r="23" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="68" r="20" fill="url(#lensReflect)" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="68" cy="68" r="9" fill="#020617" />
            <circle cx="65" cy="65" r="3.5" fill="white" fillOpacity="0.8" />

            <circle cx="68" cy="116" r="23" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="116" r="20" fill="url(#lensReflect)" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="68" cy="116" r="9" fill="#020617" />
            <circle cx="65" cy="113" r="3.5" fill="white" fillOpacity="0.8" />

            <circle cx="118" cy="92" r="23" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="118" cy="92" r="20" fill="url(#lensReflect)" stroke="#6366f1" strokeWidth="1" />
            <circle cx="118" cy="92" r="9" fill="#020617" />
            <circle cx="115" cy="89" r="3.5" fill="white" fillOpacity="0.8" />

            <circle cx="118" cy="58" r="8" fill="#fef08a" stroke="#eab308" strokeWidth="1" />
            <circle cx="118" cy="58" r="4" fill="#ffffff" />
            <circle cx="118" cy="126" r="7.5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <circle cx="118" cy="126" r="5" fill="#020617" />
            <circle cx="96" cy="126" r="2.5" fill="#000000" opacity="0.7" />
          </g>
        )}

        {/* REGULAR TRIPLE CAMERA PRO LAYOUT */}
        {isProSeries && !is17ProMax && (
          <g>
            <rect
              x="38"
              y="38"
              width="106"
              height="106"
              rx="28"
              fill={`url(#camBumpGrad-${modelId})`}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.25))"
            />
            <circle cx="68" cy="68" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="68" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="68" cy="68" r="9" fill="#020617" />
            <circle cx="65" cy="65" r="3" fill="white" fillOpacity="0.7" />

            <circle cx="68" cy="114" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="114" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="68" cy="114" r="9" fill="#020617" />
            <circle cx="65" cy="111" r="3" fill="white" fillOpacity="0.7" />

            <circle cx="114" cy="91" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="114" cy="91" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="114" cy="91" r="9" fill="#020617" />
            <circle cx="111" cy="88" r="3" fill="white" fillOpacity="0.7" />

            <circle cx="114" cy="58" r="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="114" cy="58" r="4" fill="#ffffff" />
            <circle cx="114" cy="124" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <circle cx="114" cy="124" r="5" fill="#020617" />
            <circle cx="95" cy="124" r="2" fill="#000000" opacity="0.6" />
          </g>
        )}

        {/* DIAGONAL DUAL CAMERA LAYOUT */}
        {!isProSeries && isDiagonalCamera && (
          <g>
            <rect
              x="38"
              y="38"
              width="90"
              height="90"
              rx="24"
              fill={`url(#camBumpGrad-${modelId})`}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.25))"
            />
            <circle cx="63" cy="63" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="63" cy="63" r="15" fill="url(#lensReflect)" />
            <circle cx="63" cy="63" r="7" fill="#020617" />
            <circle cx="61" cy="61" r="2" fill="white" fillOpacity="0.8" />

            <circle cx="103" cy="103" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="103" cy="103" r="15" fill="url(#lensReflect)" />
            <circle cx="103" cy="103" r="7" fill="#020617" />
            <circle cx="101" cy="101" r="2" fill="white" fillOpacity="0.8" />

            <circle cx="103" cy="58" r="6" fill="#fef08a" />
            <circle cx="63" cy="103" r="2" fill="#000000" opacity="0.6" />
          </g>
        )}

        {/* VERTICAL DUAL CAMERA LAYOUT */}
        {!isProSeries && isVerticalCamera && (
          <g>
            <rect
              x="38"
              y="38"
              width="78"
              height="110"
              rx="24"
              fill={`url(#camBumpGrad-${modelId})`}
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1"
              filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.25))"
            />
            <circle cx="77" cy="65" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="77" cy="65" r="15" fill="url(#lensReflect)" />
            <circle cx="77" cy="65" r="7" fill="#020617" />

            <circle cx="77" cy="121" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="77" cy="121" r="15" fill="url(#lensReflect)" />
            <circle cx="77" cy="121" r="7" fill="#020617" />

            <circle cx="98" cy="93" r="6" fill="#fef08a" />
          </g>
        )}

      </svg>
    </div>
  );
};
