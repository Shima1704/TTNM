// src/screens/DashboardTotal.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardTotal() {
  const navigate = useNavigate();
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12 flex items-center justify-between">
        <div>
          <p className="text-gray-400">Xin chào 👋</p>
          <p className="text-2xl font-bold">Nguyễn Văn An</p>
        </div>
        <div className="w-9 h-9 bg-[#00C48C] rounded-full flex items-center justify-center font-bold">A</div>
      </div>

      {/* Tổng tài sản */}
      <div className="px-6 mt-6">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="text-gray-400 text-sm">Tổng tài sản</p>
          <p className="text-4xl font-bold mt-2">
            {hideBalance ? '••••••' : '28.900.000'} ₫
          </p>
          <button onClick={() => setHideBalance(!hideBalance)} className="text-xs mt-1 text-gray-400">
            {hideBalance ? '👁️ Hiện' : '🙈 Ẩn'}
          </button>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-emerald-500/10 rounded-2xl p-4">
              <p className="text-emerald-400 text-sm">Thu tháng</p>
              <p className="font-bold text-emerald-400">+15.000.000 ₫</p>
            </div>
            <div className="bg-red-500/10 rounded-2xl p-4">
              <p className="text-red-400 text-sm">Chi tháng</p>
              <p className="font-bold text-red-400">-8.450.000 ₫</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-8 grid grid-cols-4 gap-3">
        <button onClick={() => navigate('/add-expense')} className="bg-[#1A2F2C] py-5 rounded-2xl text-xl hover:bg-red-500/10">＋</button>
        <button onClick={() => navigate('/add-income')} className="bg-[#1A2F2C] py-5 rounded-2xl text-xl hover:bg-emerald-500/10">💰</button>
        <button className="bg-[#1A2F2C] py-5 rounded-2xl text-xl">↔️</button>
        <button onClick={() => navigate('/dashboard-chart')} className="bg-[#1A2F2C] py-5 rounded-2xl text-xl">📊</button>
      </div>

      {/* Ngân sách */}
      <div className="px-6 mt-8">
        <div 
          onClick={() => navigate('/dashboard-monthly')}
          className="bg-[#1A2F2C] rounded-3xl p-6 cursor-pointer hover:bg-[#243D39] transition"
        >
          <div className="flex justify-between">
            <p>Ngân sách tháng 4</p>
            <p className="text-gray-400">56%</p>
          </div>
          <div className="h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
            <div className="h-2 bg-emerald-500 w-[56%] rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Đã chi 8.450.000 ₫</p>
        </div>
      </div>

      {/* Giao dịch gần nhất */}
      <div className="px-6 mt-8">
        <div className="flex justify-between mb-4">
          <p className="font-semibold">Giao dịch gần nhất</p>
          <p onClick={() => navigate('/transactions')} className="text-[#00C48C] cursor-pointer">Xem tất cả →</p>
        </div>
        <div className="space-y-3">
          <div className="bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-3xl">🍔</div>
              <div>
                <p>KFC Đà Nẵng</p>
                <p className="text-xs text-gray-500">Ăn uống • 11/04</p>
              </div>
            </div>
            <p className="text-red-400 font-bold">-125K</p>
          </div>

          <div className="bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl">💵</div>
              <div>
                <p>Lương tháng 4</p>
                <p className="text-xs text-gray-500">Thu nhập • 10/04</p>
              </div>
            </div>
            <p className="text-emerald-400 font-bold">+15M</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}