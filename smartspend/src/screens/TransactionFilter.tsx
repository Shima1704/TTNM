// src/screens/TransactionFilter.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export default function TransactionFilter() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedTime, setSelectedTime] = useState('Tháng này');

  const categories = ['Tất cả', 'Ăn uống', 'Di chuyển', 'Mua sắm', 'Giải trí', 'Y tế', 'Giáo dục'];
  const timeRanges = ['Hôm nay', 'Tuần này', 'Tháng này', 'Năm nay', 'Tùy chỉnh'];

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lọc giao dịch</h1>
        <button 
          onClick={() => navigate(-1)} 
          className="p-3 bg-[#1A2F2C] rounded-full"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 space-y-10 pb-8">
        
        {/* Danh mục */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Danh mục</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-500 text-black shadow-lg' 
                    : 'bg-[#1A2F2C] text-gray-300 hover:bg-[#243D39]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Thời gian */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Thời gian</p>
          <div className="flex flex-wrap gap-3">
            {timeRanges.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
                  selectedTime === time 
                    ? 'bg-emerald-500 text-black shadow-lg' 
                    : 'bg-[#1A2F2C] text-gray-300 hover:bg-[#243D39]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Khoảng giá */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Khoảng giá</p>
          <div className="bg-[#1A2F2C] rounded-3xl p-6 text-center">
            <p className="text-gray-400">Từ 0 ₫ đến không giới hạn</p>
            <p className="text-xs text-gray-500 mt-1">(Có thể chỉnh sau trong giao dịch)</p>
          </div>
        </div>
      </div>

      {/* Nút Áp dụng - Đặt an toàn với PhoneFrame */}
      <div className="px-6 pb-8 pt-4 bg-[#0A1F1C]">
        <button 
          onClick={() => navigate('/transactions')}
          className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] 
                     text-black font-semibold py-[18px] rounded-3xl text-lg 
                     transition shadow-xl shadow-emerald-500/30"
        >
          Áp dụng bộ lọc
        </button>
      </div>
    </div>
  );
}