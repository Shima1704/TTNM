// src/screens/DashboardScreen.tsx
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2A24] via-[#0F2A25] to-[#0A1F1C] text-white pb-20">
      
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <div>
          <p className="text-emerald-400 text-sm flex items-center gap-1.5">
            Xin chào 👋
          </p>
          <p className="text-2xl font-bold">Nguyễn Văn An</p>
        </div>
        <div className="w-11 h-11 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold ring-2 ring-emerald-400/30">
          A
        </div>
      </div>

      {/* Total Asset Card */}
      <div className="px-6 mt-8">
        <div className="bg-[#132F2A] rounded-3xl p-6 shadow-2xl border border-white/5">
          <p className="text-gray-400 text-sm">Tổng tài sản</p>
          <p className="text-4xl font-bold mt-3 tracking-tighter">28.900.000 ₫</p>

          {/* Thu & Chi - Fix tràn số */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Thu tháng */}
            <div className="bg-emerald-600 rounded-2xl p-4">
              <p className="text-emerald-100 text-sm font-medium">Thu tháng</p>
              <p className="text-[22px] font-semibold text-white mt-1 leading-none">
                +15.000.000 ₫
              </p>
            </div>

            {/* Chi tháng */}
            <div className="bg-red-600 rounded-2xl p-4">
              <p className="text-red-100 text-sm font-medium">Chi tháng</p>
              <p className="text-[22px] font-semibold text-white mt-1 leading-none">
                -8.450.000 ₫
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-8 grid grid-cols-4 gap-4">
        <button 
          onClick={() => navigate('/add-expense')}
          className="bg-[#1A2F2C] hover:bg-[#243D39] rounded-3xl py-5 flex flex-col items-center gap-2 transition"
        >
          <div className="text-3xl text-white">+</div>
          <p className="text-xs text-gray-400">Thêm chi</p>
        </button>

        <button 
          onClick={() => navigate('/add-income')}
          className="bg-[#1A2F2C] hover:bg-[#243D39] rounded-3xl py-5 flex flex-col items-center gap-2 transition"
        >
          <div className="text-3xl">💰</div>
          <p className="text-xs text-gray-400">Thêm thu</p>
        </button>

        <button className="bg-[#1A2F2C] hover:bg-[#243D39] rounded-3xl py-5 flex flex-col items-center gap-2 transition">
          <div className="text-3xl">↔️</div>
          <p className="text-xs text-gray-400">Chuyển ví</p>
        </button>

        <button 
          onClick={() => navigate('/reports')}
          className="bg-[#1A2F2C] hover:bg-[#243D39] rounded-3xl py-5 flex flex-col items-center gap-2 transition"
        >
          <div className="text-3xl">📊</div>
          <p className="text-xs text-gray-400">Báo cáo</p>
        </button>
      </div>

      {/* Budget Section */}
      <div className="px-6 mt-8">
        <div className="bg-[#132F2A] rounded-3xl p-6">
          <div className="flex justify-between items-center mb-3">
            <p className="font-medium">Ngân sách tháng 4</p>
            <p className="text-emerald-400 font-semibold">56%</p>
          </div>
          <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[56%]"></div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Đã chi 8.450.000 ₫ / 15.000.000 ₫
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4 px-1">
          <p className="font-semibold">Giao dịch gần nhất</p>
          <p 
            onClick={() => navigate('/transactions')}
            className="text-emerald-400 text-sm cursor-pointer hover:underline"
          >
            Xem tất cả →
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-orange-500/10 rounded-2xl flex items-center justify-center text-3xl">🍔</div>
              <div>
                <p className="font-medium">KFC Đà Nẵng</p>
                <p className="text-xs text-gray-400">Ăn uống • Hôm nay</p>
              </div>
            </div>
            <p className="text-red-400 font-bold">-125K</p>
          </div>

          <div className="bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-3xl">💵</div>
              <div>
                <p className="font-medium">Lương tháng 4</p>
                <p className="text-xs text-gray-400">Thu nhập • 10/04</p>
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