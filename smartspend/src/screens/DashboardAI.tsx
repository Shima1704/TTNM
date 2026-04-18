// src/screens/DashboardAI.tsx
//44
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardAI() {
  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🤖</div>
          <h1 className="text-2xl font-bold">Gợi ý AI</h1>
        </div>
      </div>

      <div className="px-6 mt-8 space-y-6">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="text-emerald-400 font-medium">Phân tích tháng này</p>
          <p className="mt-2">Nếu giảm 20% chi Ăn uống, bạn có thể tiết kiệm thêm <span className="text-emerald-400">840K/tháng</span></p>
        </div>

        <div className="bg-[#1A2F2C] rounded-3xl p-6 space-y-5">
          <div className="flex justify-between">
            <p>Nấu ăn ở nhà 3 bữa/tuần</p>
            <p className="text-emerald-400">-450K/tháng</p>
          </div>
          <div className="flex justify-between">
            <p>Di xe đạp 2 ngày/tuần</p>
            <p className="text-emerald-400">-200K/tháng</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}