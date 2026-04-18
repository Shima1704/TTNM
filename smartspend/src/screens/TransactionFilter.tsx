// src/screens/TransactionFilter.tsx
//42
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export default function TransactionFilter() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Ăn uống');
  const [selectedTime, setSelectedTime] = useState('Tháng này');

  const categories = ['Tất cả', 'Ăn uống', 'Di chuyển', 'Mua sắm', 'Giải trí', 'Y tế', 'Giáo dục'];
  const timeRanges = ['Hôm nay', 'Tuần này', 'Tháng này', 'Năm nay', 'Tùy chỉnh'];

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lọc giao dịch</h1>
        <button onClick={() => navigate(-1)} className="p-2 bg-[#1A2F2C] rounded-full">
          <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 mt-8 space-y-8 pb-32">
        {/* Category Section */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Danh mục</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#00C48C] text-black shadow-lg shadow-[#00C48C]/20' 
                    : 'bg-[#1A2F2C] text-gray-400 hover:bg-[#243D39]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Time Section */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Thời gian</p>
          <div className="flex flex-wrap gap-3">
            {timeRanges.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  selectedTime === time 
                    ? 'bg-[#00C48C] text-black shadow-lg shadow-[#00C48C]/20' 
                    : 'bg-[#1A2F2C] text-gray-400 hover:bg-[#243D39]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Range (Mockup) */}
        <div>
          <p className="text-gray-400 font-medium mb-4">Khoảng giá</p>
          <div className="flex gap-4">
            <div className="flex-1 bg-[#1A2F2C] rounded-2xl p-4">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Từ</p>
              <p className="font-semibold text-gray-300">0 ₫</p>
            </div>
            <div className="flex-1 bg-[#1A2F2C] rounded-2xl p-4">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Đến</p>
              <p className="font-semibold text-gray-300">Không giới hạn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1F1C] via-[#0A1F1C] to-transparent">
        <button 
          onClick={() => navigate('/transactions')}
          className="w-full bg-[#00C48C] text-black py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#00C48C]/20 active:scale-[0.98] transition-all"
        >
          Áp dụng bộ lọc
        </button>
      </div>
    </div>
  );
}