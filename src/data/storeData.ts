import { Product, RepairOption, TradeInOption, IcloudServiceOption } from '../types';

export const STORE_INFO = {
  name: 'HIẾU APPLE',
  tagline: 'Chuyên iPhone Hàng Chuẩn Zin - Lỗi 1 Đổi 1 Trong 3 Tháng - Sửa Chữa Ép Kính - Thu Mua',
  hotline: '0988.888.888',
  hotlineFormatted: '0988 888 888',
  zaloUrl: 'https://zalo.me/0988888888',
  messengerUrl: 'https://m.me/hieuappleofficial',
  address: 'Số 168 Đường Trần Phú, Quận Hà Đông, TP. Hà Nội',
  workingHours: '8:30 - 21:30 (Tất cả các ngày trong tuần)',
  email: 'hotro@hieuapple.vn',
  facebook: 'https://facebook.com/hieuappleofficial',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Hà+Đông+Hà+Nội&t=&z=13&ie=UTF8&iwloc=&output=embed',
  commitments: [
    '💥 Lỗi 1 đổi 1 trong vòng 3 tháng',
    '❤️ Cam kết 100% KO THAY VỎ - KO ÉP KÍNH. Phát hiện đả thay vỏ/ép kính kể cả rơi vỡ ➔ TẶNG LUÔN MÁY + HOÀN 100% TIỀN',
    '✴️ Khách hàng mua máy ở cửa hàng có bể vỡ/hư hỏng sẽ hỗ trợ 30% chi phí khi sửa chữa'
  ]
};

export const PRODUCTS: Product[] = [
  // iPhone 16 Pro Max
  {
    id: 'ip-16-pro-max',
    name: 'iPhone 16 Pro Max 256GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '16',
    price: 23950000,
    originalPrice: 25950000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '256GB', price: 23950000, originalPrice: 25950000 }
    ],
    isHot: true,
    isNew: true,
    inStock: true,
    badge: 'HOT - Hàng Chuẩn Zin',
    description: 'iPhone 16 Pro Max hàng chuẩn zin 100%, không thay vỏ, không ép kính. Bảo hành 1 đổi 1 trong 3 tháng. Tặng ngay máy + hoàn 100% tiền nếu phát hiện thay vỏ/ép kính!',
    colors: [
      { name: 'Titan Sa Mạc', code: '#c2a88f', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Tự Nhiên', code: '#9f9d96', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Zin 100% không ép kính/thay vỏ',
      'Đổi trả': '1 đổi 1 trong 3 tháng',
      'Hỗ trợ sửa chữa': 'Hỗ trợ 30% chi phí nếu bể vỡ sau này',
      'Màn hình': '6.9 inch ProMotion 120Hz',
      'Chipset': 'Apple A18 Pro'
    }
  },

  // iPhone 15 Pro Max
  {
    id: 'ip-15-pro-max',
    name: 'iPhone 15 Pro Max 256GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '15',
    price: 17400000,
    originalPrice: 19500000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '256GB', price: 17400000, originalPrice: 19500000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Bán Chạy Nhất',
    description: 'iPhone 15 Pro Max 256GB hàng chuẩn zin 100% đẹp nét. Khung viền Titan nhẹ bền, chip A17 Pro cực mạnh.',
    colors: [
      { name: 'Titan Tự Nhiên', code: '#9f9d96', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Xanh', code: '#2c3b4e', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Zin 100% chưa qua sửa chữa',
      'Bảo hành': '1 đổi 1 trong 3 tháng',
      'Ưu đãi sửa chữa': 'Hỗ trợ 30% khi rơi vỡ bể kính',
      'Màn hình': '6.7 inch Dynamic Island 120Hz'
    }
  },

  // iPhone 15 Pro
  {
    id: 'ip-15-pro',
    name: 'iPhone 15 Pro 256GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '15',
    price: 15400000,
    originalPrice: 17200000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '256GB', price: 15400000, originalPrice: 17200000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Giá Cực Tốt',
    description: 'iPhone 15 Pro 256GB viền Titan nhỏ gọn sang trọng, hàng nguyên bản cam kết tặng máy + hoàn tiền nếu không zin.',
    colors: [
      { name: 'Titan Tự Nhiên', code: '#9f9d96', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Zin 100% nguyên bản',
      'Đổi trả': '1 đổi 1 trong 3 tháng',
      'Chipset': 'Apple A17 Pro 3nm'
    }
  },

  // iPhone 14 Pro Max
  {
    id: 'ip-14-pro-max',
    name: 'iPhone 14 Pro Max (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '14',
    price: 13800000,
    originalPrice: 15500000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 13800000, originalPrice: 15500000 },
      { size: '256GB', price: 15200000, originalPrice: 16900000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Siêu HOT',
    description: 'iPhone 14 Pro Max dòng máy quốc dân cực hot. Bản 128GB chỉ 13.800k, bản 256GB chỉ 15.200k. Đảm bảo 100% máy nguyên zin.',
    colors: [
      { name: 'Tím Deep Purple', code: '#4b3b55', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Vàng Gold', code: '#f2e3c6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Đen Space Black', code: '#1f1f21', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.7 inch ProMotion Dynamic Island',
      'Đổi trả': 'Lỗi 1 đổi 1 trong 3 tháng',
      'Hỗ trợ': 'Hỗ trợ 30% chi phí sửa chữa bể vỡ về sau'
    }
  },

  // iPhone 14 Pro
  {
    id: 'ip-14-pro',
    name: 'iPhone 14 Pro (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '14',
    price: 12500000,
    originalPrice: 13900000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 12500000, originalPrice: 13900000 },
      { size: '256GB', price: 13300000, originalPrice: 14800000 }
    ],
    inStock: true,
    badge: 'Màn Dynamic Island',
    description: 'iPhone 14 Pro đẹp nét 99%. Bản 128GB giá 12.500k, 256GB giá 13.300k. Cam kết không ép kính không thay vỏ.',
    colors: [
      { name: 'Tím Deep Purple', code: '#4b3b55', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Vàng Gold', code: '#f2e3c6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Chuẩn Zin 100%',
      'Đổi trả': '1 đổi 1 trong 3 tháng'
    }
  },

  // iPhone 14 Plus
  {
    id: 'ip-14-plus',
    name: 'iPhone 14 Plus 128GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '14',
    price: 9850000,
    originalPrice: 11200000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 9850000, originalPrice: 11200000 }
    ],
    inStock: true,
    badge: 'Màn Rộng - Pin Trâu',
    description: 'iPhone 14 Plus 128GB màn hình lớn 6.7 inch pin siêu trâu giá cực mềm chỉ 9.850k.',
    colors: [
      { name: 'Xanh Blue', code: '#a0c4ff', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tím Purple', code: '#c8b6ff', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Pin': 'Trâu nhất dòng iPhone 14',
      'Bảo hành': 'Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // iPhone 13
  {
    id: 'ip-13-128gb',
    name: 'iPhone 13 128GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: '13',
    price: 8200000,
    originalPrice: 9500000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 8200000, originalPrice: 9500000 }
    ],
    inStock: true,
    badge: 'Máy Quốc Dân',
    description: 'iPhone 13 128GB giá siêu yêu 8.200k. Máy đẹp 99% nguyên bản chưa từng đụng chạm linh kiện.',
    colors: [
      { name: 'Trắng Starlight', code: '#f0ebd8', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hồng Pink', code: '#f4c7d0', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Zin 100%',
      'Đổi mới': '3 tháng 1 đổi 1'
    }
  },

  // iPhone 12 Pro Max
  {
    id: 'ip-12-pro-max',
    name: 'iPhone 12 Pro Max (Chuẩn Zin 99%)',
    category: 'iphone',
    series: 'other',
    price: 9500000,
    originalPrice: 10900000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 9500000, originalPrice: 10900000 },
      { size: '256GB', price: 10500000, originalPrice: 11900000 },
      { size: '512GB (Hết hàng)', price: 10900000, originalPrice: 12200000 }
    ],
    inStock: true,
    badge: 'Khung Thép Sang Trọng',
    description: 'iPhone 12 Pro Max màn to camera 3 mắt thép chắc chắn. Bản 128GB giá 9.500k, 256GB giá 10.500k. (Bản 512GB hiện tạm hết hàng).',
    colors: [
      { name: 'Xanh Pacific Blue', code: '#2c3e50', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Vàng Gold', code: '#f2e3c6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Tình trạng': 'Zin 100% bao test thợ',
      'Đổi mới': '3 tháng lỗi 1 đổi 1'
    }
  },

  // iPhone 12 Pro
  {
    id: 'ip-12-pro',
    name: 'iPhone 12 Pro (Chuẩn Zin 99%)',
    category: 'iphone',
    series: 'other',
    price: 7900000,
    originalPrice: 8900000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 7900000, originalPrice: 8900000 },
      { size: '256GB', price: 8500000, originalPrice: 9500000 }
    ],
    inStock: true,
    badge: 'Camera 3 Mắt',
    description: 'iPhone 12 Pro chuẩn zin đẹp 99%. Bản 128GB giá 7.900k, 256GB giá 8.500k.',
    colors: [
      { name: 'Xanh Pacific Blue', code: '#2c3e50', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Xám Space', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Bảo hành': '1 đổi 1 trong 3 tháng'
    }
  },

  // iPhone 12
  {
    id: 'ip-12-128gb',
    name: 'iPhone 12 128GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: 'other',
    price: 6500000,
    originalPrice: 7500000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 6500000, originalPrice: 7500000 }
    ],
    inStock: true,
    badge: 'Màn OLED Siêu Nét',
    description: 'iPhone 12 128GB vuông vắn trẻ trung giá chỉ 6.500k.',
    colors: [
      { name: 'Đen Black', code: '#222222', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Trắng White', code: '#ffffff', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Đổi trả': '1 đổi 1 trong 3 tháng'
    }
  },

  // iPhone 11 Pro Max
  {
    id: 'ip-11-pro-max',
    name: 'iPhone 11 Pro Max (Chuẩn Zin 99%)',
    category: 'iphone',
    series: 'other',
    price: 7200000,
    originalPrice: 8500000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '64GB New Chưa Kích', price: 7200000, originalPrice: 8500000 },
      { size: '256GB 99%', price: 7600000, originalPrice: 8900000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Pin Trâu - New Chưa Kích',
    description: 'iPhone 11 Pro Max pin trâu vút ngàn. Bản 64GB New chưa kích giá 7.200k, 256GB zin đẹp giá 7.600k.',
    colors: [
      { name: 'Xanh Xám Midnight Green', code: '#4e5d52', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Vàng Gold', code: '#f2e3c6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Pin': 'Dùng cực bền 1.5 - 2 ngày',
      'Đổi trả': '3 tháng lỗi 1 đổi 1'
    }
  },

  // iPhone 11
  {
    id: 'ip-11-128gb',
    name: 'iPhone 11 128GB (Chuẩn Zin 99%)',
    category: 'iphone',
    series: 'other',
    price: 5200000,
    originalPrice: 6000000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '64GB (Hết hàng)', price: 5000000, originalPrice: 5800000 },
      { size: '128GB', price: 5200000, originalPrice: 6000000 }
    ],
    inStock: true,
    badge: 'Giá Học Sinh - Sinh Viên',
    description: 'iPhone 11 128GB máy zin đẹp nét giá chỉ 5.200k. (Bản 64GB 5.000k hiện tạm hết hàng).',
    colors: [
      { name: 'Tím Purple', code: '#d8b4e2', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Trắng White', code: '#ffffff', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Bảo hành': '1 đổi 1 trong 3 tháng'
    }
  },

  // Phụ Kiện
  {
    id: 'charger-20w-apple',
    name: 'Củ Sạc Nhanh Apple 20W Type-C Chính Hãng',
    category: 'accessory',
    price: 490000,
    originalPrice: 690000,
    condition: 'Mới 100%',
    inStock: true,
    badge: 'Khuyên Dùng',
    description: 'Củ sạc nhanh Apple 20W Type-C chuẩn chân tròn VN/A, hỗ trợ Power Delivery sạc từ 0% lên 50% chỉ trong 30 phút. Bảo hành 1 đổi 1 trong 12 tháng.',
    colors: [
      { name: 'Trắng Apple', code: '#ffffff', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Công suất': '20W PD Fast Charging',
      'Cổng ra': 'USB Type-C',
      'Bảo hành': '12 Tháng 1 Đổi 1'
    }
  },
  {
    id: 'airpods-pro-2-usbc',
    name: 'Tai Nghe Apple AirPods Pro 2 (USB-C)',
    category: 'accessory',
    price: 5490000,
    originalPrice: 6190000,
    condition: 'Mới 100%',
    isHot: true,
    inStock: true,
    badge: 'Chính Hãng VNA',
    description: 'AirPods Pro 2 trang bị chip H2 chống ồn chủ động gấp 2 lần, hộp sạc hỗ trợ cổng USB-C & loa tìm kiếm Find My. Chất âm chi tiết vô cùng sống động.',
    colors: [
      { name: 'Trắng', code: '#ffffff', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Chipset': 'Apple H2',
      'Tính năng': 'Chống ồn ANC + Xuyên âm',
      'Pin': 'Lên tới 30 giờ (kèm hộp sạc)'
    }
  },
  {
    id: 'case-magsafe-clear',
    name: 'Ốp Lưng MagSafe Chống Sốc Trong Suốt Cao Cấp',
    category: 'accessory',
    price: 250000,
    originalPrice: 390000,
    condition: 'Mới 100%',
    inStock: true,
    badge: 'Giảm 35%',
    description: 'Ốp lưng trong suốt tích hợp vòng nam châm MagSafe hít chặt sạc không dây, bảo vệ camera gờ cao chống va đập tuyệt đối.',
    colors: [
      { name: 'Trong Suốt', code: '#e5e7eb', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Chất liệu': 'TPU dẻo viền chống ố + Lưng PC cứng trong'
    }
  }
];

export const REPAIR_SERVICES: RepairOption[] = [
  {
    id: 'rep-16pm-glass',
    deviceModel: 'iPhone 16 Pro Max',
    serviceType: 'ép kính',
    estimatedPrice: 1450000,
    durationMinutes: 45,
    warrantyMonths: 12,
    notes: 'Kính Zin chính hãng loại 1, keo khô OCA chuẩn máy nhà máy. Tặng kính cường lực miễn phí.'
  },
  {
    id: 'rep-16pm-back',
    deviceModel: 'iPhone 16 Pro Max',
    serviceType: 'thay mặt lưng',
    estimatedPrice: 950000,
    durationMinutes: 40,
    warrantyMonths: 12,
    notes: 'Bằng máy tách Laser hiện đại không tháo máy, giữ nguyên chống nước nguyên bản.'
  },
  {
    id: 'rep-15pm-glass',
    deviceModel: 'iPhone 15 Pro Max',
    serviceType: 'ép kính',
    estimatedPrice: 1150000,
    durationMinutes: 45,
    warrantyMonths: 12,
    notes: 'Ép kính hút chân không công nghệ Hàn Quốc. Bảo hành bọt bụi vĩnh viễn.'
  },
  {
    id: 'rep-15pm-back',
    deviceModel: 'iPhone 15 Pro Max',
    serviceType: 'thay mặt lưng',
    estimatedPrice: 750000,
    durationMinutes: 30,
    warrantyMonths: 12,
    notes: 'Kính lưng Titan khớp 100% màu máy zin.'
  },
  {
    id: 'rep-14pm-glass',
    deviceModel: 'iPhone 14 Pro Max',
    serviceType: 'ép kính',
    estimatedPrice: 950000,
    durationMinutes: 45,
    warrantyMonths: 12,
    notes: 'Ép kính hiển thị chuẩn cảm ứng mượt mà.'
  },
  {
    id: 'rep-14pm-battery',
    deviceModel: 'iPhone 14 Pro Max',
    serviceType: 'thay pin',
    estimatedPrice: 850000,
    durationMinutes: 25,
    warrantyMonths: 12,
    notes: 'Pin Dung Lượng Cao Pisen / BISON chính hãng, hiển thị 100% sức khỏe pin.'
  },
  {
    id: 'rep-13pm-glass',
    deviceModel: 'iPhone 13 Pro Max',
    serviceType: 'ép kính',
    estimatedPrice: 750000,
    durationMinutes: 40,
    warrantyMonths: 12,
    notes: 'Khắc phục kính vỡ trầy xước, hiển thị OLED mượt mà như mới.'
  },
  {
    id: 'rep-12pm-battery',
    deviceModel: 'iPhone 12 Pro Max',
    serviceType: 'thay pin',
    estimatedPrice: 650000,
    durationMinutes: 20,
    warrantyMonths: 12,
    notes: 'Thay pin lấy ngay sau 20 phút, tặng dán ron chống nước.'
  }
];

export const TRADE_IN_DATA: TradeInOption[] = [
  {
    id: 'trade-15pm',
    deviceModel: 'iPhone 15 Pro Max 256GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 16200000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 14800000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 12500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 11000000 }
    ]
  },
  {
    id: 'trade-14pm',
    deviceModel: 'iPhone 14 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 12800000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 11500000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 9800000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 8500000 }
    ]
  },
  {
    id: 'trade-13pm',
    deviceModel: 'iPhone 13 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 9500000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 8500000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 7000000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 5800000 }
    ]
  },
  {
    id: 'trade-12pm',
    deviceModel: 'iPhone 12 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 8500000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 7500000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 6000000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 4800000 }
    ]
  },
  {
    id: 'trade-11pm',
    deviceModel: 'iPhone 11 Pro Max 64GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 6200000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 5300000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 4000000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 3200000 }
    ]
  }
];

export const ICLOUD_SERVICES: IcloudServiceOption[] = [
  {
    id: 'ic-clean',
    name: 'Mở Khóa iCloud Chính Chủ (Clean IMEI Server)',
    description: 'Giải pháp xóa tài khoản iCloud ẩn/quên mật khẩu cho máy clean chính chủ. Tháo sạch 100% trên hệ thống Server Apple, không đụng chạm phần cứng.',
    supportedModels: 'Hỗ trợ từ iPhone XR đến iPhone 16 Pro Max, iPad, Apple Watch',
    timeframe: '1 - 3 Ngày làm việc',
    priceRange: 'Từ 1.200.000đ - 3.500.000đ (Tùy model & trạng thái IMEI)',
    guarantee: 'Cam kết thành công 100%, không thành công hoàn tiền 100%'
  },
  {
    id: 'ic-bypass-signal',
    name: 'Bypass iCloud Hỗ Trợ Nghe Gọi (Full Chức Năng)',
    description: 'Giải pháp Bypass vượt màn hình Activation Lock cho máy dính iCloud. Nghe gọi 4G/5G, Facetime, iMessage, đăng nhập tài khoản iCloud mới hoàn toàn bình thường.',
    supportedModels: 'Hỗ trợ từ iPhone 7 đến iPhone X, iPad chip A9-A11',
    timeframe: 'Lấy ngay sau 15 - 30 Phút',
    priceRange: 'Từ 300.000đ - 800.000đ',
    guarantee: 'Bảo hành phần mềm trọn đời máy, hỗ trợ relock lại miễn phí'
  },
  {
    id: 'ic-off-open-menu',
    name: 'Tháo iCloud Open Menu (Vẫn Vào Được Màn Hình Trong)',
    description: 'Dành cho máy quên mật khẩu tài khoản iCloud nhưng vẫn dùng được bên trong màn hình home. Xóa vĩnh viễn tài khoản cũ để nhập tài khoản mới.',
    supportedModels: 'Mọi dòng iPhone chạy iOS 12 đến iOS 18',
    timeframe: '30 - 60 Phút',
    priceRange: 'Từ 500.000đ - 1.500.000đ',
    guarantee: 'Xóa vĩnh viễn trên Server Apple, nâng cấp iOS reset thoải mái'
  }
];
