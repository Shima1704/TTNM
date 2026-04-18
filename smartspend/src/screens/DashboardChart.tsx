// src/screens/DashboardChart.tsx
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ArrowLeft } from 'lucide-react';

export default function DashboardChart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 bg-[#1A2F2C] rounded-xl">
            <ArrowLeft className="w-5 h-5 text-gray-300" />
          </button>
          <h1 className="text-2xl font-bold">Thống kê chi tiết</h1>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl font-bold">Tháng 4 / 2026</h1>
          <select className="bg-[#1A2F2C] rounded-2xl px-4 py-2 text-sm">
            <option>Tháng</option>
          </select>
        </div>
      </div>

      {/* Biểu đồ cột */}
      <div className="px-6 mt-6">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="text-gray-400 text-sm mb-4">Chi tiêu theo tuần (triệu ₫)</p>
          <div className="flex items-end gap-3 h-64">
            {[4.2, 5.8, 4.5, 8.45, 6.2, 7.1, 5.9].map((value, i) => (
              <div 
                key={i} 
                onClick={() => navigate('/dashboard-daily')}
                className="flex-1 flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div 
                  className="w-full bg-emerald-500 rounded-t-xl transition-all group-hover:bg-emerald-400 group-hover:scale-y-105"
                  style={{ height: `${(value / 8.45) * 100}%` }}
                ></div>
                <p className="text-xs text-gray-500 group-hover:text-white transition">T{i+1}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <p>8.45M tổng</p>
          </div>
        </div>
      </div>

      {/* Phân bổ chi tiêu */}
      <div className="px-6 mt-8">
        <p className="font-semibold mb-4">Phân bổ chi tiêu</p>
        <div className="space-y-4">
          {[
            { name: "Ăn uống", percent: 38, color: "red" },
            { name: "Di chuyển", percent: 20, color: "blue" },
            { name: "Mua sắm", percent: 14, color: "yellow" },
            { name: "Khác", percent: 28, color: "purple" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <p>{item.name}</p>
                  <p>{item.percent}%</p>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full mt-1">
                  <div className={`h-1.5 bg-${item.color}-500 rounded-full w-[${item.percent}%]`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}