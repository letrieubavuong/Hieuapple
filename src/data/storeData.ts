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
  // 1. iPhone 17 Pro Max (MỚI THÊM - Thông tin chính xác từ CellphoneS)
  {
    id: 'ip-17-pro-max',
    name: 'iPhone 17 Pro Max 256GB (Like New 99%)',
    category: 'iphone',
    series: '17',
    price: 30500000,
    originalPrice: 34590000,
    condition: 'Likenew 99%',
    storageOptions: [
      { size: '256GB', price: 30500000, originalPrice: 34590000 },
      { size: '512GB', price: 35500000, originalPrice: 39590000 },
      { size: '1TB', price: 41500000, originalPrice: 45590000 },
      { size: '2TB', price: 47500000, originalPrice: 51590000 }
    ],
    isHot: true,
    isNew: true,
    inStock: true,
    badge: 'SIÊU PHẨM 2026 - MỚI VỀ',
    description: 'iPhone 17 Pro Max chính hãng Apple sở hữu màn hình Super Retina XDR 6.9 inch siêu nét 3000 nits, chip Apple A19 Pro vô địch hiệu năng, hệ điều hành iOS 26 tiên tiến, cụm 3 camera 48MP Zoom quang học 8x và sạc nhanh 40W xem video lên tới 37 giờ.',
    highlights: [
      'Chipset Apple A19 Pro mới nhất với 6 lõi CPU & GPU 6 lõi Neural Accelerator cực mạnh',
      'Cụm 3 camera 48MP toàn diện: Chính 48MP OIS + Góc siêu rộng 48MP 120° + Tele 48MP Zoom 8x',
      'Màn hình 6.9" Super Retina XDR ProMotion 120Hz chống phản chiếu, độ sáng đỉnh 3000 nits',
      'Camera selfie 18MP Center Stage khẩu độ ƒ/1.9 linh hoạt tự động căn chỉnh góc chụp',
      'Pin xem video liên tục lên đến 37 giờ (+8 tiếng so với thế hệ trước), sạc nhanh 50% trong 20 phút',
      'Cam kết 100% hàng Chuẩn Zin nguyên bản 99% đền 100% tiền nếu phát hiện thay vỏ/ép kính'
    ],
    colors: [
      {
        name: 'Cam Vũ Trụ (Cosmic Orange)',
        code: '#cbb197',
        image: '/images/iphone-17-pro-max/cam-vu-tru-main.jpg',
        gallery: [
          '/images/iphone-17-pro-max/cam-vu-tru-main.jpg',
          '/images/iphone-17-pro-max/cam-vu-tru-back.jpg',
          '/images/iphone-17-pro-max/cam-vu-tru-front.jpg',
          '/images/iphone-17-pro-max/gallery-camera.png'
        ]
      },
      {
        name: 'Bạc (Silver Titanium)',
        code: '#e3e4e5',
        image: '/images/iphone-17-pro-max/gallery-overview.png',
        gallery: [
          '/images/iphone-17-pro-max/gallery-overview.png',
          '/images/iphone-17-pro-max/gallery-front.png'
        ]
      },
      {
        name: 'Xanh Đậm (Deep Blue Titanium)',
        code: '#2c3e50',
        image: '/images/iphone-17-pro-max/cam-vu-tru-back.jpg',
        gallery: [
          '/images/iphone-17-pro-max/cam-vu-tru-back.jpg'
        ]
      }
    ],
    specs: {
      'Màn hình': '6.9 inch Super Retina XDR (2868 x 1320 px), ProMotion 120Hz, Always-On, True Tone, Anti-reflective, 3000 nits max',
      'Chipset & CPU': 'Chip Apple A19 Pro (6 lõi CPU: 2 hiệu năng + 4 tiết kiệm điện) | GPU 6 lõi Neural Accelerator',
      'Bộ nhớ trong': '256GB / 512GB / 1TB / 2TB',
      'Hệ điều hành': 'iOS 26 (Khi ra mắt)',
      'Camera sau': 'Chính 48MP ƒ/1.6 OIS + Góc Siêu Rộng 48MP ƒ/2.2 120° + Tele 48MP ƒ/2.8 OIS Zoom quang 8x',
      'Camera trước': '18MP Center Stage khẩu độ ƒ/1.9',
      'Pin & Sạc nhanh': 'Thời lượng xem video 37 giờ | Sạc nhanh 50% trong 20 phút (Củ sạc 40W trở lên)',
      'SIM & Kết nối': '5G, SIM kép (nano-SIM & eSIM / Hỗ trợ 2 eSIM), NFC',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng | Đền 100% tiền nếu không zin | Hỗ trợ 30% khi rơi vỡ'
    }
  },

  // 2. iPhone 16 Pro Max
  {
    id: 'ip-16-pro-max',
    name: 'iPhone 16 Pro Max 256GB (Like New 99%)',
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
    badge: 'HOT - Like New 99%',
    description: 'iPhone 16 Pro Max siêu phẩm màn hình 6.9 inch viền mỏng nhất lịch sử Apple. Viền Titan chuẩn hàng không vũ trụ, chip A18 Pro hỗ trợ Apple Intelligence đột phá cùng cụm camera 48MP zoom quang 5x chuyên nghiệp.',
    highlights: [
      'Màn hình 6.9 inch OLED Super Retina XDR 120Hz viền mỏng nhất từ trước đến nay',
      'Nút điều khiển camera Camera Control cảm ứng lực nhấn chụp ảnh quay video tức thì',
      'Khung viền Titan sa mạc đẳng cấp bền bỉ, nhẹ hơn và tản nhiệt tối ưu',
      'Cam kết 100% máy Chuẩn Zin nguyên bản chưa qua sửa chữa hay thay thế vỏ/kính'
    ],
    colors: [
      {
        name: 'Titan Sa Mạc (Desert Titanium)',
        code: '#c2a88f',
        image: '/images/products/ip-16-pro-max/ip16-pro-front-back.png',
        gallery: [
          '/images/products/ip-16-pro-max/ip16-pro-front-back.png',
          '/images/products/ip-16-pro-max/ip16-pro-lineup.png',
          '/images/products/ip-16-pro-max/ip16-pro-real-hands-on.jpg'
        ]
      },
      {
        name: 'Titan Tự Nhiên (Natural Titanium)',
        code: '#9f9d96',
        image: '/images/products/ip-16-pro-max/ip16-pro-lineup.png',
        gallery: [
          '/images/products/ip-16-pro-max/ip16-pro-lineup.png',
          '/images/products/ip-16-pro-max/ip16-pro-front-back.png'
        ]
      },
      {
        name: 'Titan Đen (Black Titanium)',
        code: '#3b3b3d',
        image: '/images/products/ip-16-pro-max/ip16-pro-real-hands-on.jpg',
        gallery: [
          '/images/products/ip-16-pro-max/ip16-pro-real-hands-on.jpg',
          '/images/products/ip-16-pro-max/ip16-pro-lineup.png'
        ]
      }
    ],
    specs: {
      'Màn hình': '6.9 inch Super Retina XDR OLED (2868 x 1320 pixel), ProMotion 120Hz, Độ sáng 2000 nits',
      'Chipset': 'Apple A18 Pro (3nm) 6 nhân CPU, 6 nhân GPU, 16 nhân Neural Engine',
      'RAM & Bộ nhớ': '8GB RAM | Dung lượng 256GB High-Speed NVMe',
      'Camera sau': 'Chính Fusion 48MP (OIS Sensor-shift) + Góc siêu rộng 48MP + Tele 12MP (Zoom optical 5x)',
      'Camera trước': '12MP TrueDepth Autofocus, Quay phim 4K 60fps Dolby Vision',
      'Pin & Sạc': 'Pin 4685 mAh, Sạc nhanh MagSafe 25W, Sạc dây USB-C 3.0 (10Gbps)',
      'Chất liệu & Kháng nước': 'Khung Titan Cấp 5 + Mặt kính Ceramic Shield thế hệ mới, IP68',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng | Cam kết hoàn 100% tiền nếu không zin | Hỗ trợ 30% chi phí sửa vỡ'
    }
  },

  // 3. iPhone 15 Pro Max
  {
    id: 'ip-15-pro-max',
    name: 'iPhone 15 Pro Max 256GB (Like New 99%)',
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
    description: 'iPhone 15 Pro Max siêu phẩm Titan đầu tiên của Apple với trọng lượng nhẹ ấn tượng, trang bị chip A17 Pro 3nm cân mọi tựa game AAA và camera Zoom quang 5x đỉnh cao.',
    highlights: [
      'Khung viền Titan hàng không nhẹ hơn 19g so với thế hệ trước',
      'Cổng sạc chuẩn USB-C truyền dữ liệu tốc độ cao 10Gbps',
      'Nút bấm Action Button đa năng tùy biến nhanh tiện lợi',
      'Zin áp 100% bao test thợ, tặng luôn máy nếu phát hiện ép kính/thay vỏ'
    ],
    colors: [
      {
        name: 'Titan Tự Nhiên',
        code: '#9f9d96',
        image: '/images/products/ip-15-pro-max/main.jpg',
        gallery: ['/images/products/ip-15-pro-max/main.jpg']
      },
      {
        name: 'Titan Xanh (Blue)',
        code: '#2c3b4e',
        image: '/images/products/ip-15-pro-max/main.jpg',
        gallery: ['/images/products/ip-15-pro-max/main.jpg']
      },
      {
        name: 'Titan Đen',
        code: '#3b3b3d',
        image: '/images/products/ip-15-pro-max/main.jpg',
        gallery: ['/images/products/ip-15-pro-max/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.7 inch OLED Super Retina XDR, 120Hz ProMotion, Dynamic Island',
      'Chipset': 'Apple A17 Pro (3nm) GPU 6 nhân',
      'RAM & Bộ nhớ': '8GB RAM | 256GB NVMe',
      'Camera': 'Camera chính 48MP + Ultra Wide 12MP + Tele 12MP (Zoom optical 5x)',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng | Cam kết tặng máy + hoàn tiền nếu đã thay vỏ/ép kính'
    }
  },

  // 4. iPhone 15 Pro
  {
    id: 'ip-15-pro',
    name: 'iPhone 15 Pro 256GB (Like New 99%)',
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
    description: 'iPhone 15 Pro 256GB sở hữu thiết kế viền Titan 6.1 inch nhỏ gọn tối ưu, hiệu năng vô địch từ chip A17 Pro và camera Pro 48MP sắc nét.',
    highlights: [
      'Kích thước 6.1 inch cầm vừa vặn tay cực kỳ êm ái',
      'Nút Tác Vụ Action Button nhanh nhạy',
      'Cổng USB-C sạc tiện lợi dùng chung cáp với MacBook / iPad'
    ],
    colors: [
      {
        name: 'Titan Tự Nhiên',
        code: '#9f9d96',
        image: '/images/products/ip-15-pro/main.jpg',
        gallery: ['/images/products/ip-15-pro/main.jpg']
      },
      {
        name: 'Titan Đen',
        code: '#3b3b3d',
        image: '/images/products/ip-15-pro/main.jpg',
        gallery: ['/images/products/ip-15-pro/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch Super Retina XDR 120Hz ProMotion, Dynamic Island',
      'Chipset': 'Apple A17 Pro (3nm)',
      'RAM & Bộ nhớ': '8GB RAM | 256GB',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng | Hỗ trợ 30% chi phí sửa chữa bể vỡ'
    }
  },

  // 5. iPhone 14 Pro Max
  {
    id: 'ip-14-pro-max',
    name: 'iPhone 14 Pro Max (Like New 99%)',
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
    description: 'iPhone 14 Pro Max là dòng máy huyền thoại giới thiệu màn hình Dynamic Island, viền thép không gỉ bóng bẩy và màu Tím Deep Purple quyến rũ.',
    highlights: [
      'Màn hình 6.7 inch 120Hz ProMotion độ sáng tối đa 2000 nits ngoài trời',
      'Camera chính nâng cấp đột phá lên 48MP hỗ trợ ProRAW chuyên nghiệp',
      'Viền thép sang trọng cầm đầm tay tôn vinh đẳng cấp'
    ],
    colors: [
      {
        name: 'Tím Deep Purple',
        code: '#4b3b55',
        image: '/images/products/ip-14-pro-max/main.jpg',
        gallery: ['/images/products/ip-14-pro-max/main.jpg']
      },
      {
        name: 'Vàng Gold',
        code: '#f2e3c6',
        image: '/images/products/ip-14-pro-max/main.jpg',
        gallery: ['/images/products/ip-14-pro-max/main.jpg']
      },
      {
        name: 'Đen Space Black',
        code: '#1f1f21',
        image: '/images/products/ip-14-pro-max/main.jpg',
        gallery: ['/images/products/ip-14-pro-max/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.7 inch OLED Super Retina XDR 120Hz, Dynamic Island',
      'Chipset': 'Apple A16 Bionic (4nm)',
      'RAM & Bộ nhớ': '6GB RAM | 128GB / 256GB',
      'Camera sau': '48MP Main + 12MP Ultra Wide + 12MP Tele (Zoom 3x)',
      'Bảo hành Hiếu Apple': '💥 1 đổi 1 trong 3 tháng | Tặng máy nếu đả ép kính/thay vỏ'
    }
  },

  // 6. iPhone 14 Pro
  {
    id: 'ip-14-pro',
    name: 'iPhone 14 Pro (Like New 99%)',
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
    badge: 'Dynamic Island',
    description: 'iPhone 14 Pro màn hình Dynamic Island 6.1 inch mượt mà 120Hz, chip A16 Bionic mạnh mẽ. Bản 128GB chỉ 12.500k, bản 256GB chỉ 13.300k.',
    highlights: [
      'Dynamic Island hiển thị thông báo và tác vụ phát nhạc cực vui mắt',
      'Camera 48MP chi tiết gấp 4 lần thế hệ iPhone 13 Pro',
      'Máy zin đẹp 99% nguyên bản chưa tháo ốc'
    ],
    colors: [
      {
        name: 'Tím Deep Purple',
        code: '#4b3b55',
        image: '/images/products/ip-14-pro/main.jpg',
        gallery: ['/images/products/ip-14-pro/main.jpg']
      },
      {
        name: 'Vàng Gold',
        code: '#f2e3c6',
        image: '/images/products/ip-14-pro/main.jpg',
        gallery: ['/images/products/ip-14-pro/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch OLED 120Hz ProMotion, Dynamic Island',
      'Chipset': 'Apple A16 Bionic (4nm)',
      'RAM': '6GB RAM',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 7. iPhone 14 Plus
  {
    id: 'ip-14-plus',
    name: 'iPhone 14 Plus 128GB (Like New 99%)',
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
    description: 'iPhone 14 Plus 128GB dành cho ai thích màn hình lớn 6.7 inch và dung lượng pin trâu nhất dòng 14 series với chi phí tiết kiệm chỉ 9.850k.',
    highlights: [
      'Màn hình rộng 6.7 inch tha hồ xem phim chơi game',
      'Pin dung lượng khủng dùng thoải mái 2 ngày liên tục',
      'Trọng lượng máy rất nhẹ tay cầm lâu không bị mỏi'
    ],
    colors: [
      {
        name: 'Xanh Blue',
        code: '#a0c4ff',
        image: '/images/products/ip-14-plus/main.jpg',
        gallery: ['/images/products/ip-14-plus/main.jpg']
      },
      {
        name: 'Tím Purple',
        code: '#c8b6ff',
        image: '/images/products/ip-14-plus/main.jpg',
        gallery: ['/images/products/ip-14-plus/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.7 inch Super Retina XDR OLED',
      'Chipset': 'Apple A15 Bionic',
      'Pin': '4325 mAh (Pin siêu trâu)',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 8. iPhone 13
  {
    id: 'ip-13-128gb',
    name: 'iPhone 13 128GB (Like New 99%)',
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
    description: 'iPhone 13 128GB máy quốc dân thành công nhất của Apple. Cụm camera đặt chéo thời thượng, chip A15 Bionic mượt mà mọi ứng dụng.',
    highlights: [
      'Camera chéo nhận diện độc đáo, chế độ quay phim Điện Ảnh Cinematic Mode',
      'Thời lượng pin vượt trội so với iPhone 12',
      'Giá chỉ 8.200k cho siêu phẩm zin 100%'
    ],
    colors: [
      {
        name: 'Trắng Starlight',
        code: '#f0ebd8',
        image: '/images/products/ip-13/main.jpg',
        gallery: ['/images/products/ip-13/main.jpg']
      },
      {
        name: 'Hồng Pink',
        code: '#f4c7d0',
        image: '/images/products/ip-13/main.jpg',
        gallery: ['/images/products/ip-13/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch OLED Super Retina XDR',
      'Chipset': 'Apple A15 Bionic (4nm)',
      'RAM & Bộ nhớ': '4GB RAM | 128GB',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 9. iPhone 12 Pro Max
  {
    id: 'ip-12-pro-max',
    name: 'iPhone 12 Pro Max (Like New 99%)',
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
    description: 'iPhone 12 Pro Max mở đầu xu hướng thiết kế khung viền thép vát phẳng vuông vức sang trọng. Bản 128GB giá 9.500k, 256GB giá 10.500k. (Bản 512GB hết hàng).',
    highlights: [
      'Thiết kế viền thép vuông vức vô cùng mạnh mẽ sang trọng',
      'Camera 3 mắt hỗ trợ cảm biến LiDAR quét 3D đêm ấn tượng',
      'Chuẩn zin 100% áp suất chống nước còn nguyên'
    ],
    colors: [
      {
        name: 'Xanh Pacific Blue',
        code: '#2c3e50',
        image: '/images/products/ip-12-pro-max/main.jpg',
        gallery: ['/images/products/ip-12-pro-max/main.jpg']
      },
      {
        name: 'Vàng Gold',
        code: '#f2e3c6',
        image: '/images/products/ip-12-pro-max/main.jpg',
        gallery: ['/images/products/ip-12-pro-max/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.7 inch OLED Super Retina XDR',
      'Chipset': 'Apple A14 Bionic',
      'RAM': '6GB RAM',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 10. iPhone 12 Pro
  {
    id: 'ip-12-pro',
    name: 'iPhone 12 Pro (Like New 99%)',
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
    description: 'iPhone 12 Pro khung viền thép chống gỉ 6.1 inch vừa vặn tay. Bản 128GB chỉ 7.900k, 256GB chỉ 8.500k.',
    highlights: [
      'Viền thép bóng sang chảnh như đồ trang sức',
      'Chip A14 Bionic đáp ứng mượt mà liên quân, pubg, tiktok',
      'Bao test thợ thoải mái, tặng máy nếu không zin'
    ],
    colors: [
      {
        name: 'Xanh Pacific Blue',
        code: '#2c3e50',
        image: '/images/products/ip-12-pro-max/main.jpg',
        gallery: ['/images/products/ip-12-pro-max/main.jpg']
      },
      {
        name: 'Xám Space',
        code: '#3b3b3d',
        image: '/images/products/ip-12-pro-max/main.jpg',
        gallery: ['/images/products/ip-12-pro-max/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch OLED Super Retina XDR',
      'Chipset': 'Apple A14 Bionic',
      'RAM': '6GB RAM',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 11. iPhone 12
  {
    id: 'ip-12-128gb',
    name: 'iPhone 12 128GB (Like New 99%)',
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
    description: 'iPhone 12 128GB nâng cấp màn hình OLED rực rỡ, hỗ trợ mạng 5G tốc độ cao giá cực êm chỉ 6.500k.',
    highlights: [
      'Màn hình OLED sắc nét mỏng nhẹ hơn nhiều so với iPhone 11',
      'Hỗ trợ mạng 5G siêu nhanh',
      'Máy chuẩn zin bảo hành 1 đổi 1 3 tháng'
    ],
    colors: [
      {
        name: 'Đen Black',
        code: '#222222',
        image: '/images/products/ip-12/main.jpg',
        gallery: ['/images/products/ip-12/main.jpg']
      },
      {
        name: 'Trắng White',
        code: '#ffffff',
        image: '/images/products/ip-12/main.jpg',
        gallery: ['/images/products/ip-12/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch Super Retina XDR OLED',
      'Chipset': 'Apple A14 Bionic',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 12. iPhone 11 Pro Max
  {
    id: 'ip-11-pro-max',
    name: 'iPhone 11 Pro Max (Like New 99%)',
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
    description: 'iPhone 11 Pro Max nổi tiếng với thời lượng pin siêu khủng. Bản 64GB Hàng NEW Chưa Kích giá chỉ 7.200k, bản 256GB zin đẹp 7.600k.',
    highlights: [
      'Hàng 64GB New chưa kích hoạt cực hiếm trên thị trường',
      'Thời lượng pin siêu bền dùng nghe gọi 2 ngày không lo hết',
      'Cam kết 100% nguyên zin bao test toàn quốc'
    ],
    colors: [
      {
        name: 'Xanh Midnight Green',
        code: '#4e5d52',
        image: '/images/products/ip-11/main.jpg',
        gallery: ['/images/products/ip-11/main.jpg']
      },
      {
        name: 'Vàng Gold',
        code: '#f2e3c6',
        image: '/images/products/ip-11/main.jpg',
        gallery: ['/images/products/ip-11/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.5 inch OLED Super Retina XDR',
      'Chipset': 'Apple A13 Bionic',
      'Pin': '3969 mAh',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
    }
  },

  // 13. iPhone 11
  {
    id: 'ip-11-128gb',
    name: 'iPhone 11 128GB (Like New 99%)',
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
    description: 'iPhone 11 128GB lựa chọn số 1 cho học sinh sinh viên giá chỉ 5.200k. (Bản 64GB 5.000k hiện tạm hết hàng).',
    highlights: [
      'Giá hợp túi tiền sử dụng ổn định lâu dài 3-4 năm',
      'Bản 128GB thoải mái lưu trữ hình ảnh clip',
      'Bảo hành 1 đổi 1 trong 3 tháng'
    ],
    colors: [
      {
        name: 'Tím Purple',
        code: '#d8b4e2',
        image: '/images/products/ip-11/main.jpg',
        gallery: ['/images/products/ip-11/main.jpg']
      },
      {
        name: 'Trắng White',
        code: '#ffffff',
        image: '/images/products/ip-11/main.jpg',
        gallery: ['/images/products/ip-11/main.jpg']
      }
    ],
    specs: {
      'Màn hình': '6.1 inch Liquid Retina HD',
      'Chipset': 'Apple A13 Bionic',
      'Bảo hành Hiếu Apple': '💥 Lỗi 1 đổi 1 trong 3 tháng'
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
    deviceModel: 'iPhone 16 Pro Max / 17 Pro Max',
    serviceType: 'ép kính',
    estimatedPrice: 1450000,
    durationMinutes: 45,
    warrantyMonths: 12,
    notes: 'Kính Zin chính hãng loại 1, keo khô OCA chuẩn máy nhà máy. Tặng kính cường lực miễn phí.'
  },
  {
    id: 'rep-16pm-back',
    deviceModel: 'iPhone 16 Pro Max / 17 Pro Max',
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
    id: 'trade-16pm',
    deviceModel: 'iPhone 16 Pro Max 256GB',
    conditions: [
      { grade: 'Đẹp 99%', estimatedValue: 22000000 },
      { grade: 'Trầy xước nhẹ (97-98%)', estimatedValue: 20500000 },
      { grade: 'Vỡ kính/Thay màn', estimatedValue: 17500000 },
      { grade: 'Hỏng FaceID / Mất vân', estimatedValue: 15000000 }
    ]
  },
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
  }
];

export const ICLOUD_SERVICES: IcloudServiceOption[] = [
  {
    id: 'ic-clean',
    name: 'Mở Khóa iCloud Chính Chủ (Clean IMEI Server)',
    description: 'Giải pháp xóa tài khoản iCloud ẩn/quên mật khẩu cho máy clean chính chủ. Tháo sạch 100% trên hệ thống Server Apple, không đụng chạm phần cứng.',
    supportedModels: 'Hỗ trợ từ iPhone XR đến iPhone 17 Pro Max, iPad, Apple Watch',
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
