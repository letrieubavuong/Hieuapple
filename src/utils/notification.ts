export interface OrderNotificationPayload {
  type: 'ORDER' | 'REPAIR_BOOKING' | 'TRADE_IN' | 'ICLOUD_INQUIRY';
  orderId?: string;
  customerName: string;
  customerPhone: string;
  address?: string;
  paymentMethod?: string;
  items?: string[];
  totalPrice?: number;
  notes?: string;
  deviceModel?: string;
  serviceType?: string;
  estimatedPrice?: number;
}

/**
 * Gửi thông báo đơn hàng trực tiếp về Telegram Bot hoặc Webhook của chủ shop HIẾU APPLE.
 * Đơn hàng sẽ được gửi trực tiếp đến Telegram điện thoại của bạn ngay lập tức!
 */
export async function sendOrderNotification(payload: OrderNotificationPayload): Promise<boolean> {
  // Đọc từ biến môi trường Vercel hoặc cấu hình mặc định
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
  const webhookUrl = import.meta.env.VITE_ORDER_WEBHOOK_URL || '';

  // Format nội dung tin nhắn gửi về Telegram của chủ cửa hàng
  let message = '';

  if (payload.type === 'ORDER') {
    message = `🔥 *ĐƠN HÀNG MỚI TỪ WEBSITE HIẾU APPLE*\n\n` +
      `📦 *Mã đơn:* \`${payload.orderId}\` \n` +
      `👤 *Khách hàng:* ${payload.customerName}\n` +
      `📞 *SĐT:* [${payload.customerPhone}](tel:${payload.customerPhone})\n` +
      `📍 *Địa chỉ:* ${payload.address || 'Chưa nhập'}\n` +
      `💳 *Thanh toán:* ${payload.paymentMethod === 'installment' ? 'Trả góp 0%' : 'Thanh toán COD'}\n\n` +
      `🛍️ *Chi tiết sản phẩm:*\n${payload.items?.join('\n') || ''}\n\n` +
      `💰 *TỔNG TIỀN:* *${payload.totalPrice?.toLocaleString('vi-VN')}đ*`;
  } else if (payload.type === 'REPAIR_BOOKING') {
    message = `🛠️ *LỊCH ĐẶT SỬA CHỮA / ÉP KÍNH MỚI*\n\n` +
      `👤 *Khách hàng:* ${payload.customerName}\n` +
      `📞 *SĐT:* [${payload.customerPhone}](tel:${payload.customerPhone})\n` +
      `📱 *Máy sửa:* ${payload.deviceModel}\n` +
      `🔧 *Dịch vụ:* ${payload.serviceType}\n` +
      `💵 *Giá dự kiến:* ${payload.estimatedPrice?.toLocaleString('vi-VN')}đ\n` +
      `📝 *Ghi chú:* ${payload.notes || 'Không có'}`;
  } else if (payload.type === 'TRADE_IN') {
    message = `🔄 *YÊU CẦU ĐỊNH GIÁ THU MUA MÁY CỦ*\n\n` +
      `👤 *Khách bán:* ${payload.customerName}\n` +
      `📞 *SĐT/Zalo:* [${payload.customerPhone}](tel:${payload.customerPhone})\n` +
      `📱 *Máy muốn bán:* ${payload.deviceModel}\n` +
      `💵 *Giá thu ước tính:* ${payload.estimatedPrice?.toLocaleString('vi-VN')}đ\n` +
      `🚀 *Nhu cầu nâng cấp:* ${payload.notes || 'Bán máy'}`;
  } else if (payload.type === 'ICLOUD_INQUIRY') {
    message = `🔐 *YÊU CẦU TƯ VẤN MỞ KHÓA ICLOUD*\n\n` +
      `📞 *SĐT Khách:* [${payload.customerPhone}](tel:${payload.customerPhone})\n` +
      `🔎 *IMEI/Serial:* ${payload.notes || 'Chưa có'}`;
  }

  try {
    // 1. Gửi qua Telegram Bot API (Nếu được cấu hình)
    if (botToken && chatId) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    }

    // 2. Gửi qua Webhook (nếu kết nối Google Sheets hoặc bệ tin nhắn khác)
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    // In thông báo console cho môi trường dev
    console.log('✅ Đã gửi thông báo đơn hàng thành công!', payload);
    return true;
  } catch (error) {
    console.error('❌ Lỗi gửi thông báo đơn hàng:', error);
    return false;
  }
}
