// src/screens/AddExpense.tsx
//45
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, CreditCard, ChevronDown } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function AddExpense() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Ăn uống');

  const categories = ['Ăn uống', 'Di chuyển', 'Mua sắm', 'Giải trí', 'Y tế', 'Giáo dục', 'Nhà cửa'];

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </button>
        <h1 className="text-xl font-bold">Thêm khoản chi</h1>
        <div className="w-10"></div>
      </div>

      {/* Amount Input Section */}
      <div className="px-6 mt-12 text-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-2">Số tiền chi</p>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="text-7xl font-bold bg-transparent text-center outline-none text-red-400 placeholder-red-400/20 w-full max-w-[280px]"
            autoFocus
          />
          <span className="text-3xl text-red-400 font-bold">₫</span>
        </div>
      </div>

      <div className="px-6 mt-12 space-y-8 flex-1">
        {/* Category Selection */}
        <div>
          <p className="text-gray-400 text-sm font-medium mb-4">Danh mục</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                    : 'bg-[#1A2F2C] text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="px-4 py-2.5 rounded-2xl bg-[#1A2F2C] text-gray-400 flex items-center gap-1">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input Fields Group */}
        <div className="space-y-4">
          <div className="bg-[#1A2F2C] rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <p className="text-sm font-medium">Tài khoản</p>
            </div>
            <div className="flex items-center gap-2 text-[#00C48C]">
              <span className="text-sm font-semibold">Vietcombank</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-[#1A2F2C] rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <p className="text-sm font-medium">Thời gian</p>
            </div>
            <p className="text-sm font-semibold text-gray-300">Hôm nay, 19/04/2026</p>
          </div>
          
          <button 
            onClick={() => navigate('/transaction-image')}
            className="w-full bg-[#1A2F2C] border-2 border-dashed border-white/5 rounded-2xl p-4 flex items-center justify-center gap-3 active:bg-[#243D39] transition"
          >
            <Plus className="w-5 h-5 text-[#00C48C]" />
            <span className="text-sm font-medium text-gray-400">Đính kèm ảnh hóa đơn</span>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-6">
        <button 
          onClick={() => navigate('/transactions')}
          className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-500/20 active:scale-[0.98] transition"
        >
          Lưu khoản chi
        </button>
      </div>

      <BottomNav />
    </div>
  );
}