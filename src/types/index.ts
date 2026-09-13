export type CategoryType = 'all' | 'iphone' | 'accessory' | 'repair' | 'trade-in' | 'icloud';

export type ConditionType = 'Mới 100%' | 'Likenew 99%' | '98%';

export interface ProductColor {
  name: string;
  code: string;
  image: string; // Primary image
  gallery?: string[]; // Additional multi-angle / detail photos
}

export interface StoragePriceOption {
  size: string;
  price: number;
  originalPrice: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'iphone' | 'accessory';
  series?: '17' | '16' | '15' | '14' | '13' | 'other';
  price: number;
  originalPrice: number;
  condition: ConditionType;
  storageOptions?: StoragePriceOption[];
  colors: ProductColor[];
  description: string;
  specs: { [key: string]: string };
  highlights?: string[];
  isHot?: boolean;
  isNew?: boolean;
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedStorage?: string;
  calculatedPrice: number;
  calculatedOriginalPrice?: number;
  quantity: number;
}

export interface RepairOption {
  id: string;
  deviceModel: string;
  serviceType: 'ép kính' | 'thay mặt lưng' | 'thay pin' | 'thay màn hình' | 'sửa main';
  estimatedPrice: number;
  durationMinutes: number;
  warrantyMonths: number;
  notes: string;
}

export interface TradeInOption {
  id: string;
  deviceModel: string;
  conditions: {
    grade: 'Đẹp 99%' | 'Trầy xước nhẹ (97-98%)' | 'Vỡ kính/Thay màn' | 'Hỏng FaceID / Mất vân';
    estimatedValue: number;
  }[];
}

export interface IcloudServiceOption {
  id: string;
  name: string;
  description: string;
  supportedModels: string;
  timeframe: string;
  priceRange: string;
  guarantee: string;
}
