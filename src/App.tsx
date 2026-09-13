import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RepairCalculator } from './components/RepairCalculator';
import { TradeInCalculator } from './components/TradeInCalculator';
import { IcloudServices } from './components/IcloudServices';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingSupport } from './components/FloatingSupport';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { Product, ProductColor, CartItem } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Shopping Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Quick View Modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Add to cart handler with calculated price
  const handleAddToCart = (
    product: Product,
    color: ProductColor,
    storage?: string,
    calculatedPrice?: number,
    calculatedOriginalPrice?: number
  ) => {
    const finalPrice = calculatedPrice ?? product.price;
    const finalOriginalPrice = calculatedOriginalPrice ?? product.originalPrice;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedStorage === storage
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedColor: color,
            selectedStorage: storage,
            calculatedPrice: finalPrice,
            calculatedOriginalPrice: finalOriginalPrice,
            quantity: 1,
          },
        ];
      }
    });
  };

  // Buy Now handler
  const handleBuyNow = (
    product: Product,
    color: ProductColor,
    storage?: string,
    calculatedPrice?: number,
    calculatedOriginalPrice?: number
  ) => {
    handleAddToCart(product, color, storage, calculatedPrice, calculatedOriginalPrice);
    setIsCheckoutOpen(true);
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  // Remove item from Cart
  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Total items count in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Header Bar */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Banner */}
        <Hero onNavigate={handleNavigate} />

        {/* Product Catalog: iPhones & Accessories */}
        <ProductCatalog
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onQuickView={(product) => setSelectedProduct(product)}
        />

        {/* Repair & Glass Replacement Calculator */}
        <RepairCalculator />

        {/* Trade-In Valuation Calculator */}
        <TradeInCalculator />

        {/* iCloud Unlocking Services */}
        <IcloudServices />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Messenger, Zalo, Call & Scroll Top Buttons */}
      <FloatingSupport />

      {/* Mobile Quick Action Bottom Bar */}
      <MobileQuickBar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Quick Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

      {/* Product Detail Quick View Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

    </div>
  );
};

export default App;
