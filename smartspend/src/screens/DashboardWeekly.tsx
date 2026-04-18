import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ArrowLeft } from 'lucide-react';

export default function DashboardWeekly() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <button onClick={() => navigate(-1)} className="mb-4 p-2 bg-[#1A2F2C] rounded-xl inline-block">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <p className="text-gray-400">Tuần 2 • Tháng 4</p>
        <p className="text-3xl font-bold mt-1">01/04 - 13/04/2026</p>
      </div>

      <div className="px-6 mt-6 bg-[#1A2F2C] rounded-3xl p-6">
        <p className="text-4xl font-bold">2.350.000 ₫</p>
        <p className="text-emerald-400 text-sm">+18% so với tuần trước</p>
      </div>

      {/* Mini Chart */}
      <div className="px-6 mt-8">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <div className="flex gap-2 h-40 items-end">
            {[1200, 800, 1500, 900, 2100, 1350, 1850].map((v, i) => (
              <div key={i} className="flex-1 bg-emerald-500 rounded-t" style={{ height: `${v / 25}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Theo danh mục */}
      <div className="px-6 mt-8">
        <p className="font-semibold mb-4">Theo danh mục</p>
        <div className="space-y-4">
          {[
            { name: "Ăn uống", amount: "850K" },
            { name: "Di chuyển", amount: "420K" },
            { name: "Mua sắm", amount: "680K" },
          ].map((item) => (
            <div key={item.name} className="flex justify-between bg-[#1A2F2C] rounded-3xl p-5">
              <p>{item.name}</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}