// src/screens/TransactionList.tsx
//41
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { Search, Filter, ArrowUpRight, ArrowDownLeft, Coffee, ShoppingBag, Utensils, PlayCircle } from 'lucide-react';

export default function TransactionList() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, name: "KFC Đà Nẵng", amount: -125000, category: "Ăn uống", date: "Hôm nay", icon: Utensils, color: "text-red-400" },
    { id: 2, name: "Lương tháng 4", amount: 18500000, category: "Thu nhập", date: "Hôm qua", icon: ArrowUpRight, color: "text-emerald-400" },
    { id: 3, name: "Highland Coffee", amount: -65000, category: "Ăn uống", date: "17/04/2026", icon: Coffee, color: "text-red-400" },
    { id: 4, name: "Netflix Premium", amount: -180000, category: "Giải trí", date: "16/04/2026", icon: PlayCircle, color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-32 text-white">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Giao dịch</h1>
        <div className="flex gap-4">
          <button onClick={() => navigate('/search')} className="p-2 bg-[#1A2F2C] rounded-xl">
            <Search className="w-5 h-5 text-gray-400" />
          </button>
          <button onClick={() => navigate('/filter')} className="p-2 bg-[#1A2F2C] rounded-xl">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="px-6 mt-6">
        <div className="bg-gradient-to-br from-[#1A3D37] to-[#142926] rounded-[32px] p-6 border border-white/5 shadow-xl">
          <p className="text-gray-400 text-sm">Tổng chi tiêu tháng này</p>
          <p className="text-3xl font-bold mt-1">12.450.000 ₫</p>
          <div className="flex gap-4 mt-4 py-3 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <p className="text-xs text-gray-400">Thu: +18.5M</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <p className="text-xs text-gray-400">Chi: -6.1M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Range Tabs */}
      <div className="px-6 mt-8 flex gap-2 overflow-x-auto no-scrollbar">
        {['Hàng ngày', 'Hàng tuần', 'Hàng tháng', 'Hàng năm'].map((tab, i) => (
          <button 
            key={tab}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              i === 0 ? 'bg-[#00C48C] text-black shadow-lg shadow-[#00C48C]/20' : 'bg-[#1A2F2C] text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="px-6 mt-8 space-y-4">
        {transactions.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.id}
              onClick={() => navigate(`/transaction/${t.id}`)}
              className="bg-[#1A2F2C]/50 hover:bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center active:scale-[0.98] transition border border-transparent hover:border-white/5 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0A1F1C] ${t.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.category} • {t.date}</p>
                </div>
              </div>
              <p className={`font-bold ${t.color}`}>
                {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString('vi-VN')} ₫
              </p>
            </div>
          );
        })}
      </div>
      
      <BottomNav />
    </div>
  );
}