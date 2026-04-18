// src/screens/DashboardBills.tsx
//43
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardBills() {
  return (
    <div className="min-h-screen bg-[#0A1F1C] pb-24 text-white">
      <div className="px-6 pt-12">
        <h1 className="text-2xl font-bold">Hóa đơn sắp đến hạn</h1>
        <p className="text-sm text-gray-400">3 hóa đơn</p>
      </div>

      <div className="px-6 mt-8 space-y-4">
        {[
          { name: "Cước điện thoại", amount: "250.000 ₫", date: "Hôm nay" },
          { name: "Tiền điện", amount: "480.000 ₫", date: "15/04" },
          { name: "Netflix Premium", amount: "260.000 ₫", date: "20/04" },
        ].map((bill, i) => (
          <div key={i} className="bg-[#1A2F2C] rounded-3xl p-5 flex justify-between items-center">
            <div>
              <p className="font-medium">{bill.name}</p>
              <p className="text-xs text-gray-400">{bill.date}</p>
            </div>
            <p className="font-bold">{bill.amount}</p>
          </div>
        ))}
      </div>

      <div className="px-6 mt-10">
        <div className="bg-[#1A2F2C] rounded-3xl p-5 text-center">
          <p className="text-2xl font-bold">990.000 ₫</p>
          <p className="text-gray-400">Tổng cần thanh toán</p>
          <button className="mt-6 w-full bg-emerald-500 text-black py-4 rounded-2xl font-semibold">
            Thanh toán tất cả
          </button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}