import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardMonthly() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Tháng 4 / 2026</h1>
          <div className="flex gap-1">
            {['T1','T2','T3','T4','T5','T6'].map((t, i) => (
              <div key={i} className={`px-3 py-1 rounded-xl text-sm ${i === 3 ? 'bg-[#00C48C] text-black' : 'bg-[#1A2F2C]'}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 bg-[#1A2F2C] rounded-3xl p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">Chi tiêu</p>
            <p className="text-4xl font-bold">8.450.000 ₫</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Mục tiêu</p>
            <p className="text-4xl font-bold text-gray-400">6.550K</p>
          </div>
        </div>
        <div className="h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
          <div className="h-2 bg-emerald-500 w-[56%] rounded-full"></div>
        </div>
        <p className="text-xs text-gray-400 mt-2">56% đã dùng</p>
      </div>

      <div className="px-6 mt-8 space-y-4">
        <p className="font-semibold px-2">Ngân sách chi tiết</p>
        {[
          { name: "Ăn uống", spent: "4.2M", total: "4M", color: "red", percent: "105%" },
          { name: "Di chuyển", spent: "1.2M", total: "2M", color: "blue", percent: "60%" },
          { name: "Mua sắm", spent: "3M", total: "5M", color: "orange", percent: "60%" },
        ].map((item, i) => (
          <div 
            key={i} 
            onClick={() => navigate('/dashboard-alert')}
            className="bg-[#1A2F2C] rounded-3xl p-6 cursor-pointer hover:bg-[#243D39] transition"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="font-medium">{item.name}</p>
              <p className={`text-sm ${item.name === 'Ăn uống' ? 'text-red-400' : 'text-gray-400'}`}>
                {item.spent} / {item.total}
              </p>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-1.5 rounded-full ${item.name === 'Ăn uống' ? 'bg-red-500' : 'bg-emerald-500'}`} 
                style={{ width: item.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <BottomNav />
    </div>
  );
}