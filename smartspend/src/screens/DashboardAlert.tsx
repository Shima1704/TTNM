// src/screens/DashboardAlert.tsx
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ArrowLeft } from 'lucide-react';

export default function DashboardAlert() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <button onClick={() => navigate(-1)} className="mb-4 p-2 bg-[#1A2F2C] rounded-xl inline-block">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <div className="bg-red-600 rounded-3xl p-5 text-center mb-6">
          <p className="text-sm font-medium">⚠️ Vượt ngân sách Ăn uống!</p>
          <p className="text-xl font-bold mt-2">Bạn đã chi 105% ngân sách tháng này</p>
        </div>

        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="font-semibold">Ăn uống - Tháng 4</p>
          <p className="text-3xl font-bold text-red-400 mt-2">4.200.000 / 4.000.000 ₫</p>
          <p className="text-red-400 text-sm">+105%</p>
        </div>

        <div className="px-6 mt-8 space-y-6">
          <div>
            <p className="text-gray-400 mb-3">Ngân sách khác</p>
            <div className="space-y-4">
              {['Di chuyển 40%', 'Giải trí 83%', 'Mua sắm 60%'].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-yellow-400 rounded-full" style={{ width: ['40%','83%','60%'][i] }}></div>
                  </div>
                  <p className="text-sm w-20">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 mt-10 flex gap-4">
          <button className="flex-1 py-4 bg-gray-600 rounded-2xl">Bỏ qua</button>
          <button className="flex-1 py-4 bg-[#00C48C] text-black rounded-2xl font-semibold">Điều chỉnh ngân sách</button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}