import { Product, RepairOption, TradeInOption, IcloudServiceOption } from '../types';

export const STORE_INFO = {
  name: 'HIẾU APPLE',
  tagline: 'Chuyên iPhone Chính Hãng - Sửa Chữa Ép Kính - Thu Mua & Dịch Vụ iCloud',
  hotline: '0988.888.888',
  hotlineFormatted: '0988 888 888',
  zaloUrl: 'https://zalo.me/0988888888',
  messengerUrl: 'https://m.me/hieuappleofficial',
  address: 'Số 168 Đường Trần Phú, Quận Hà Đông, TP. Hà Nội',
  workingHours: '8:30 - 21:30 (Tất cả các ngày trong tuần)',
  email: 'hotro@hieuapple.vn',
  facebook: 'https://facebook.com/hieuappleofficial',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Hà+Đông+Hà+Nội&t=&z=13&ie=UTF8&iwloc=&output=embed'
};

export const PRODUCTS: Product[] = [
  {
    id: 'ip-16-pro-max',
    name: 'iPhone 16 Pro Max',
    category: 'iphone',
    series: '16',
    price: 34990000,
    originalPrice: 36990000,
    condition: 'Mới 100%',
    storageOptions: [
      { size: '256GB', price: 34990000, originalPrice: 36990000 },
      { size: '512GB', price: 40990000, originalPrice: 42990000 },
      { size: '1TB', price: 46990000, originalPrice: 48990000 }
    ],
    isHot: true,
    isNew: true,
    inStock: true,
    badge: 'Giảm 2Tr + Trả Góp 0%',
    description: 'iPhone 16 Pro Max khung Titan sa mạc đẳng cấp, màn hình 6.9 inch siêu nét, chip A18 Pro hỗ trợ Apple Intelligence đột phá và cụm camera 48MP zoom quang 5x chuyên nghiệp.',
    colors: [
      { name: 'Titan Sa Mạc (Desert Titanium)', code: '#c2a88f', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Tự Nhiên (Natural Titanium)', code: '#9f9d96', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen (Black Titanium)', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Trắng (White Titanium)', code: '#e3e4e5', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': 'Super Retina XDR OLED 6.9 inch 120Hz ProMotion',
      'Chipset': 'Apple A18 Pro 3nm 6 nhân',
      'RAM': '8GB',
      'Camera sau': 'Chính 48MP + Góc rộng 48MP + Tele 12MP (Zoom 5x)',
      'Camera trước': '12MP TrueDepth',
      'Pin & Sạc': 'Dùng cả ngày, Sạc nhanh MagSafe 25W',
      'Hệ điều hành': 'iOS 18'
    }
  },
  {
    id: 'ip-16-pro',
    name: 'iPhone 16 Pro',
    category: 'iphone',
    series: '16',
    price: 28990000,
    originalPrice: 30990000,
    condition: 'Mới 100%',
    storageOptions: [
      { size: '128GB', price: 28990000, originalPrice: 30990000 },
      { size: '256GB', price: 31990000, originalPrice: 33990000 },
      { size: '512GB', price: 37990000, originalPrice: 39990000 },
      { size: '1TB', price: 43990000, originalPrice: 45990000 }
    ],
    isHot: true,
    isNew: true,
    inStock: true,
    badge: 'Mới Ra Mắt',
    description: 'iPhone 16 Pro kích thước 6.3 inch vừa vặn, khung viền Titan siêu nhẹ, camera nút bấm Chụp Ảnh độc quyền và sức mạnh vượt trội từ A18 Pro.',
    colors: [
      { name: 'Titan Sa Mạc', code: '#c2a88f', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Trắng', code: '#e3e4e5', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.3 inch Super Retina XDR ProMotion 120Hz',
      'Chipset': 'Apple A18 Pro',
      'RAM': '8GB',
      'Camera': 'Dòng 48MP Zoom 5x',
      'Pin': 'Sạc nhanh 50% trong 30p'
    }
  },
  {
    id: 'ip-15-pro-max',
    name: 'iPhone 15 Pro Max (Zin Đẹp 99%)',
    category: 'iphone',
    series: '15',
    price: 25490000,
    originalPrice: 28990000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '256GB', price: 25490000, originalPrice: 28990000 },
      { size: '512GB', price: 29490000, originalPrice: 32990000 },
      { size: '1TB', price: 34490000, originalPrice: 37990000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Bán Chạy Nhất - Zin Đẹp',
    description: 'iPhone 15 Pro Max Like New 99% nguyên bản chưa qua sửa chữa, pin 95-100%, tặng kèm sạc nhanh 20W và bảo hành 1 đổi 1 trong 12 tháng tại Hiếu Apple.',
    colors: [
      { name: 'Titan Tự Nhiên', code: '#9f9d96', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Xanh (Blue)', code: '#2c3b4e', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Titan Đen', code: '#3b3b3d', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.7 inch OLED 120Hz Dynamic Island',
      'Chipset': 'Apple A17 Pro 3nm',
      'Cổng sạc': 'USB-C Tốc độ cao',
      'Tình trạng': 'Zin 100%, Áp suất còn nguyên',
      'Bảo hành': '12 tháng lỗi 1 đổi 1'
    }
  },
  {
    id: 'ip-15-plus',
    name: 'iPhone 15 (Chính Hãng VN/A)',
    category: 'iphone',
    series: '15',
    price: 18490000,
    originalPrice: 21990000,
    condition: 'Mới 100%',
    storageOptions: [
      { size: '128GB', price: 18490000, originalPrice: 21990000 },
      { size: '256GB', price: 21490000, originalPrice: 24990000 },
      { size: '512GB', price: 26490000, originalPrice: 29990000 }
    ],
    inStock: true,
    badge: 'Giá Cực Tốt',
    description: 'iPhone 15 thiết kế Dynamic Island hiện đại, mặt lưng kính pha màu mịn sang trọng, cổng sạc Type-C tiện lợi và camera 48MP vô cùng sắc nét.',
    colors: [
      { name: 'Hồng (Pink)', code: '#f4c7d0', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Xanh Xanh (Green)', code: '#d3e4cd', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Đen (Black)', code: '#222222', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.1 inch Super Retina XDR OLED',
      'Chipset': 'Apple A16 Bionic',
      'Camera': '48MP Dual Camera System',
      'Cổng kết nối': 'USB-C'
    }
  },
  {
    id: 'ip-14-pro-max',
    name: 'iPhone 14 Pro Max (Zin Đẹp 99%)',
    category: 'iphone',
    series: '14',
    price: 20990000,
    originalPrice: 24990000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 20990000, originalPrice: 24990000 },
      { size: '256GB', price: 22990000, originalPrice: 26990000 },
      { size: '512GB', price: 26990000, originalPrice: 30990000 }
    ],
    isHot: true,
    inStock: true,
    badge: 'Siêu HOT - Giá Ngon',
    description: 'iPhone 14 Pro Max dòng máy làm mưa làm gió với Dynamic Island, màu Tím Deep Purple quyến rũ, viền thép chống gỉ chắc chắn.',
    colors: [
      { name: 'Tím Deep Purple', code: '#4b3b55', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Vàng Gold', code: '#f2e3c6', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Đen Space Black', code: '#1f1f21', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.7 inch Super Retina XDR ProMotion 120Hz',
      'Chipset': 'Apple A16 Bionic',
      'Camera': 'Chính 48MP + UltraWide 12MP + Tele 12MP'
    }
  },
  {
    id: 'ip-13-128gb',
    name: 'iPhone 13 (Zin Đẹp 99%)',
    category: 'iphone',
    series: '13',
    price: 12490000,
    originalPrice: 14990000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '128GB', price: 12490000, originalPrice: 14990000 },
      { size: '256GB', price: 14490000, originalPrice: 16990000 }
    ],
    inStock: true,
    badge: 'Quốc Dân - Pin Trâu',
    description: 'iPhone 13 máy quốc dân hiệu năng cực khỏe với chip A15 Bionic, pin siêu trâu, thiết kế camera chéo trẻ trung.',
    colors: [
      { name: 'Trắng Starlight', code: '#f0ebd8', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Xanh Sierra Blue', code: '#7999b9', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hồng Pink', code: '#f4c7d0', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Màn hình': '6.1 inch OLED Super Retina XDR',
      'Chipset': 'Apple A15 Bionic',
      'Camera': 'Dual 12MP Cinema Mode'
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
      'Tính năng': 'Chống ồn ANC + Xuyên âm + Âm thanh vòm Spatial Audio',
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
      'Chất liệu': 'TPU dẻo viền chống ố + Lưng PC cứng trong',
      'Hỗ trợ': 'Sạc MagSafe / Ví MagSafe'
    }
  },
  {
    id: 'cable-c-to-c-braided',
    name: 'Cáp Dù Apple Type-C to Type-C 60W (1 Meter)',
    category: 'accessory',
    price: 290000,
    originalPrice: 450000,
    condition: 'Mới 100%',
    inStock: true,
    badge: 'Siêu Bền',
    description: 'Dây cáp bọc dù chính hãng đi kèm máy iPhone 15/16 series, chống gãy gập, truyền dữ liệu và sạc nhanh an toàn cho iPhone & iPad.',
    colors: [
      { name: 'Trắng Dù', code: '#f3f4f6', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop' }
    ],
    specs: {
      'Độ dài': '1m',
      'Chất liệu': 'Sợi bện cao cấp chống xoắn'
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
    id: 'rep-13pm-screen',
    deviceModel: 'iPhone 13 Pro Max',
    serviceType: 'thay màn hình',
    estimatedPrice: 4200000,
    durationMinutes: 30,
    warrantyMonths: 6,
    notes: 'Màn hình Zin bóc máy / Zin mới 120Hz Fix trắng xanh màn hình vĩnh viễn.'
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
      { grade: 'Đẹp 99%', estimatedValue: 23500000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 21800000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 18500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 16000000 }
    ]
  },
  {
    id: 'trade-14pm',
    deviceModel: 'iPhone 14 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 18800000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 17200000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 14500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 12500000 }
    ]
  },
  {
    id: 'trade-13pm',
    deviceModel: 'iPhone 13 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 14200000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 12900000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 10500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 8800000 }
    ]
  },
  {
    id: 'trade-12pm',
    deviceModel: 'iPhone 12 Pro Max 128GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 10500000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 9200000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 7500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 6000000 }
    ]
  },
  {
    id: 'trade-11pm',
    deviceModel: 'iPhone 11 Pro Max 64GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 7200000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 6300000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 4800000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 3900000 }
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
