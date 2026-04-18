import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ArrowLeft } from 'lucide-react';

export default function DashboardDaily() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <button onClick={() => navigate(-1)} className="mb-4 p-2 bg-[#1A2F2C] rounded-xl inline-block">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <p className="text-gray-400">Thứ Sáu, 11/04</p>
        <p className="text-3xl font-bold mt-1">Hôm nay</p>
      </div>

      <div className="px-6 mt-6 bg-[#1A2F2C] rounded-3xl p-6">
        <p className="text-4xl font-bold">310.000 ₫</p>
        <p className="text-gray-400">Chi tiêu hôm nay • 3 lần</p>
      </div>

      {/* Dòng thời gian */}
      <div className="px-6 mt-8">
        <p className="font-semibold mb-4">Dòng thời gian</p>
        <div className="space-y-5">
          {[
            { time: "09:30", name: "Grab Xe máy", amount: "-35K", category: "Di chuyển" },
            { time: "12:15", name: "Cơm trưa văn phòng", amount: "-50K", category: "Ăn uống" },
            { time: "15:00", name: "Highland Coffee", amount: "-65K", category: "Ăn uống" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <p className="text-gray-400 w-12 text-sm">{item.time}</p>
              <div className="flex-1 bg-[#1A2F2C] rounded-3xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <p className="text-red-400 font-semibold">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}