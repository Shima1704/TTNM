// src/screens/EditTransaction.tsx
//47
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CreditCard, ChevronDown, Tag, AlignLeft } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function EditTransaction() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('125000');
  const [selectedCategory, setSelectedCategory] = useState('Ăn uống');

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </button>
        <h1 className="text-xl font-bold">Sửa giao dịch</h1>
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
            className="text-7xl font-bold bg-transparent text-center outline-none text-red-400 w-full max-w-[320px]"
          />
          <span className="text-3xl text-red-400 font-bold">₫</span>
        </div>
      </div>

      <div className="px-6 mt-12 space-y-6 flex-1">
        {/* Fields Group */}
        <div className="bg-[#1A2F2C] rounded-[32px] p-2 space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Tag className="w-5 h-5 text-orange-400" />
              </div>
              <p className="text-sm font-medium">Danh mục</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-sm font-semibold">{selectedCategory}</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm font-medium">Tài khoản</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-sm font-semibold">Vietcombank</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-sm font-medium">Thời gian</p>
            </div>
            <p className="text-sm font-semibold text-gray-300">19/04/2026</p>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <AlignLeft className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm font-medium">Ghi chú</p>
            </div>
            <textarea 
              className="w-full bg-[#0A1F1C] rounded-2xl p-4 text-sm text-gray-300 outline-none border border-white/5 focus:border-[#00C48C]/30 resize-none h-24"
              defaultValue="KFC Đà Nẵng - Ăn trưa cùng đồng nghiệp"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-6">
        <button 
          onClick={() => navigate('/transactions')}
          className="w-full bg-[#00C48C] text-black py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#00C48C]/20 active:scale-[0.98] transition"
        >
          Lưu thay đổi
        </button>
      </div>

      <BottomNav />
    </div>
  );
}