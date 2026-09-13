import React from 'react';

interface IPhoneImageProps {
  modelId: string;
  colorName: string;
  colorCode: string;
  className?: string;
  view?: 'back' | 'front' | 'side';
}

export const IPhoneImage: React.FC<IPhoneImageProps> = ({
  modelId,
  colorName,
  colorCode,
  className = 'w-full h-full',
  view = 'back',
}) => {
  // Determine layout style based on model ID
  const isProSeries =
    modelId.includes('pro') ||
    modelId.includes('16-pro-max') ||
    modelId.includes('15-pro-max') ||
    modelId.includes('14-pro-max') ||
    modelId.includes('13-pro-max') ||
    modelId.includes('12-pro-max') ||
    modelId.includes('11-pro-max');

  const isDynamicIsland =
    modelId.includes('16') ||
    modelId.includes('15') ||
    modelId.includes('14-pro');

  const isDiagonalCamera =
    modelId.includes('13') ||
    modelId.includes('14-plus') ||
    (modelId.includes('15') && !modelId.includes('pro'));

  const isVerticalCamera = modelId.includes('11') || modelId.includes('12');

  // Gradient colors for titanium / metallic back glass finishes
  const getFinishGradients = (code: string) => {
    switch (code.toLowerCase()) {
      case '#c2a88f': // Desert Titanium
        return { bg: '#d4bc9f', highlight: '#f3e5d8', shadow: '#967d64', ring: '#e8d4c0' };
      case '#9f9d96': // Natural Titanium
        return { bg: '#adab9f', highlight: '#d5d3c8', shadow: '#767469', ring: '#c5c3b8' };
      case '#3b3b3d': // Black Titanium / Space Black
        return { bg: '#2b2b2d', highlight: '#4f4f53', shadow: '#151517', ring: '#444448' };
      case '#e3e4e5': // White Titanium / Silver
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

  return (
    <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
      <svg
        viewBox="0 0 280 520"
        className="w-full h-full max-h-full max-w-full drop-shadow-2xl transition-all duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Body Gradient */}
          <linearGradient id={`bodyGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={finish.highlight} />
            <stop offset="45%" stopColor={finish.bg} />
            <stop offset="100%" stopColor={finish.shadow} />
          </linearGradient>

          {/* Camera Module Glass Gradient */}
          <linearGradient id={`camBumpGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={finish.highlight} stopOpacity="0.8" />
            <stop offset="100%" stopColor={finish.bg} stopOpacity="0.4" />
          </linearGradient>

          {/* Metallic Lens Bezel Gradient */}
          <linearGradient id={`bezelGrad-${modelId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="50%" stopColor={finish.ring} />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>

          {/* Lens Glass Reflection */}
          <linearGradient id="lensReflect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="35%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#020617" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          {/* Apple Logo Gradient */}
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
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

        {/* Outer Outer Frame / Bezel */}
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

        {/* 1. TRIPLE CAMERA PRO LAYOUT (16 Pro Max, 15 Pro Max, 14 Pro Max, 12 Pro Max, 11 Pro Max) */}
        {isProSeries && (
          <g>
            {/* Glossy Rounded Square Glass Plateau */}
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

            {/* Lens 1: Top Left Main Camera */}
            <circle cx="68" cy="68" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="68" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="68" cy="68" r="9" fill="#020617" />
            <circle cx="65" cy="65" r="3" fill="white" fillOpacity="0.7" />

            {/* Lens 2: Bottom Left Telephoto / UltraWide Camera */}
            <circle cx="68" cy="114" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="68" cy="114" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="68" cy="114" r="9" fill="#020617" />
            <circle cx="65" cy="111" r="3" fill="white" fillOpacity="0.7" />

            {/* Lens 3: Middle Right Telephoto Camera */}
            <circle cx="114" cy="91" r="22" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="114" cy="91" r="19" fill="url(#lensReflect)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="114" cy="91" r="9" fill="#020617" />
            <circle cx="111" cy="88" r="3" fill="white" fillOpacity="0.7" />

            {/* True Tone Dual Flash */}
            <circle cx="114" cy="58" r="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="114" cy="58" r="4" fill="#ffffff" />

            {/* LiDAR Scanner 3D Sensor */}
            <circle cx="114" cy="124" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <circle cx="114" cy="124" r="5" fill="#020617" />

            {/* Mic hole */}
            <circle cx="95" cy="124" r="2" fill="#000000" opacity="0.6" />
          </g>
        )}

        {/* 2. DIAGONAL DUAL CAMERA LAYOUT (iPhone 13, iPhone 14 Plus, iPhone 15 Standard) */}
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
            {/* Top Left Lens */}
            <circle cx="63" cy="63" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="63" cy="63" r="15" fill="url(#lensReflect)" />
            <circle cx="63" cy="63" r="7" fill="#020617" />
            <circle cx="61" cy="61" r="2" fill="white" fillOpacity="0.8" />

            {/* Bottom Right Lens */}
            <circle cx="103" cy="103" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="103" cy="103" r="15" fill="url(#lensReflect)" />
            <circle cx="103" cy="103" r="7" fill="#020617" />
            <circle cx="101" cy="101" r="2" fill="white" fillOpacity="0.8" />

            {/* Flash */}
            <circle cx="103" cy="58" r="6" fill="#fef08a" />
            {/* Mic */}
            <circle cx="63" cy="103" r="2" fill="#000000" opacity="0.6" />
          </g>
        )}

        {/* 3. VERTICAL DUAL CAMERA LAYOUT (iPhone 11, iPhone 12) */}
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
            {/* Top Lens */}
            <circle cx="77" cy="65" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="77" cy="65" r="15" fill="url(#lensReflect)" />
            <circle cx="77" cy="65" r="7" fill="#020617" />

            {/* Bottom Lens */}
            <circle cx="77" cy="121" r="18" fill={`url(#bezelGrad-${modelId})`} />
            <circle cx="77" cy="121" r="15" fill="url(#lensReflect)" />
            <circle cx="77" cy="121" r="7" fill="#020617" />

            {/* Flash */}
            <circle cx="98" cy="93" r="6" fill="#fef08a" />
          </g>
        )}

        {/* Model Name Stamp Label on Frame */}
        <text
          x="140"
          y="485"
          textAnchor="middle"
          fill={finish.highlight}
          fillOpacity="0.4"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="1"
        >
          {colorName.toUpperCase()}
        </text>

      </svg>
    </div>
  );
};
