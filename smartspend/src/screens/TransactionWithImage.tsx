// src/screens/TransactionWithImage.tsx
//50
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Camera, Image as ImageIcon, Tag, CreditCard, Calendar } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function TransactionWithImage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-[#1A2F2C] rounded-xl">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-bold">Hóa đơn đính kèm</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 mt-8 space-y-8">
        {/* Image Preview Card */}
        <div className="relative group">
          <div className="w-full h-80 bg-[#1A2F2C] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative">
            {/* Mock receipt image using CSS/Icons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
              <div className="w-48 h-64 bg-white rounded-lg shadow-2xl rotate-2 p-4 flex flex-col gap-2">
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                <div className="w-full h-1 bg-gray-100 rounded"></div>
                <div className="w-full h-1 bg-gray-100 rounded"></div>
                <div className="w-2/3 h-1 bg-gray-100 rounded"></div>
                <div className="mt-auto flex justify-between">
                  <div className="w-10 h-2 bg-emerald-100 rounded"></div>
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                </div>
              </div>
            </div>
            {/* Overlay Buttons */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <button className="px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#00C48C]" />
                Chụp lại
              </button>
              <button className="px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#00C48C]" />
                Thay ảnh
              </button>
            </div>
          </div>
        </div>

        {/* Scanned Info Section */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Thông tin trích xuất</p>
          <div className="bg-[#1A2F2C] rounded-[32px] p-2 border border-white/5">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Tag className="w-5 h-5 text-gray-500" />
                <p className="text-sm font-medium">Khoản chi</p>
              </div>
              <p className="font-bold text-red-400">-125.000 ₫</p>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-gray-500" />
                <p className="text-sm font-medium">Ngày</p>
              </div>
              <p className="font-semibold text-gray-300">19/04/2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6">
        <button 
          onClick={() => navigate('/transactions')}
          className="w-full bg-[#00C48C] text-black py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-[#00C48C]/20 active:scale-[0.98] transition"
        >
          <Check className="w-6 h-6" />
          Xác nhận giao dịch
        </button>
      </div>

      <BottomNav />
    </div>
  );
}