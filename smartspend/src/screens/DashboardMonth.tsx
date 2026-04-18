import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { ArrowLeft } from 'lucide-react';

export default function DashboardMonth() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <button onClick={() => navigate(-1)} className="mb-4 p-2 bg-[#1A2F2C] rounded-xl inline-block">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>
        <p className="text-gray-400">VietcomBank ••••4821</p>
        <p className="text-4xl font-bold mt-2">18.200.000 ₫</p>
      </div>

      <div className="px-6 mt-8 grid grid-cols-2 gap-4">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="text-emerald-400">Thu nhập</p>
          <p className="text-2xl font-bold">15.000.000 ₫</p>
        </div>
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="text-red-400">Chi tiêu</p>
          <p className="text-2xl font-bold">-8.450.000 ₫</p>
        </div>
      </div>

      {/* Mục tiêu tháng */}
      <div className="px-6 mt-8">
        <div className="bg-[#1A2F2C] rounded-3xl p-6">
          <p className="font-medium">Mục tiêu tháng</p>
          <div className="mt-4 h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-purple-500 w-[68%] rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Tiết kiệm 6.8M / 10M mục tiêu</p>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}