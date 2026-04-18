// src/screens/RecurringTransaction.tsx
//49
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Clock, Bell, ChevronRight, PlayCircle, Zap } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function RecurringTransaction() {
  const navigate = useNavigate();

  const recurringItems = [
    { name: "Netflix Premium", amount: "260.000 ₫", interval: "Hàng tháng", next: "26/04", icon: PlayCircle, color: "text-red-400", bg: "bg-red-500/10" },
    { name: "Tiền điện", amount: "480.000 ₫", interval: "Hàng tháng", next: "15/05", icon: Zap, color: "text-orange-400", bg: "bg-orange-500/10" },
    { name: "SaaS Subscription", amount: "1.200.000 ₫", interval: "Hàng năm", next: "01/01", icon: Clock, color: "text-blue-400", bg: "bg-blue-500/10" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Header */}
      <div className="px-6 pt-12">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-[#1A2F2C] rounded-xl">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex items-center gap-3 bg-[#1A2F2C] p-1.5 rounded-2xl border border-white/5">
            <span className="text-xs font-bold px-3 py-1 bg-[#00C48C] text-black rounded-xl">Bật</span>
            <span className="text-xs font-bold px-3 py-1 text-gray-500">Tắt</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold">Giao dịch định kỳ</h1>
        <p className="text-gray-500 text-sm mt-2">Tự động hóa các khoản chi hàng tháng của bạn</p>
      </div>

      <div className="px-6 mt-10 space-y-4 flex-1">
        {recurringItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-[#1A2F2C]/50 hover:bg-[#1A2F2C] rounded-[32px] p-6 border border-white/5 transition flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{item.interval}</span>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <span className="text-xs text-[#00C48C]">Tiếp theo: {item.next}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold text-lg">{item.amount}</p>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 mt-8">
        <button className="w-full bg-gradient-to-r from-[#00C48C] to-[#00A67A] text-black py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#00C48C]/20 active:scale-[0.98] transition">
          <Plus className="w-6 h-6" />
          Thêm định kỳ mới
        </button>
      </div>

      <BottomNav />
    </div>
  );
}