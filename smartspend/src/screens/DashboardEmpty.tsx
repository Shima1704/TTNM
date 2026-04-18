// src/screens/DashboardEmpty.tsx
import { useNavigate } from 'react-router-dom';

export default function DashboardEmpty() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-[#1A2F2C] rounded-3xl flex items-center justify-center text-5xl mb-8">
        📊
      </div>
      
      <h1 className="text-2xl font-bold">Chưa có dữ liệu</h1>
      <p className="text-gray-400 mt-3 leading-relaxed">
        Bắt đầu bằng cách thêm giao dịch đầu tiên của bạn hoặc kết nối tài khoản ngân hàng
      </p>

      <button 
        onClick={() => navigate('/add-expense')}
        className="mt-12 w-full bg-[#00C48C] text-black py-5 rounded-2xl font-semibold flex items-center justify-center gap-2"
      >
        + Thêm giao dịch đầu tiên
      </button>

      <button className="mt-4 w-full border border-gray-600 py-5 rounded-2xl">
        🔗 Kết nối ngân hàng
      </button>
    </div>
  );
}