// src/screens/DeleteConfirm.tsx
//48
import { useNavigate } from 'react-router-dom';
import { Trash2, AlertCircle, ArrowLeft } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function DeleteConfirm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col justify-center px-6 pb-32">
      <div className="bg-[#1A2F2C] rounded-[40px] p-10 border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-500/20 rounded-full blur-[60px] -mt-20"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-red-500/20">
            <Trash2 className="w-12 h-12 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-bold mb-3">Xóa giao dịch?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-[200px] mx-auto">
            Hành động này sẽ xóa vĩnh viễn dữ liệu và không thể hoàn tác.
          </p>

          {/* Transaction Preview */}
          <div className="bg-[#0A1F1C] rounded-2xl p-4 mb-10 flex items-center justify-between border border-white/5">
             <div className="text-left">
               <p className="text-xs text-gray-500 mb-0.5">Khoản chi</p>
               <p className="font-semibold text-sm">KFC Đà Nẵng</p>
             </div>
             <p className="font-bold text-red-400">-125.000 ₫</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                alert("Đã xóa giao dịch thành công");
                navigate('/transactions');
              }}
              className="w-full py-4.5 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-500/20 active:scale-[0.98] transition"
            >
              Xác nhận xóa
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full py-4.5 bg-transparent text-gray-400 rounded-2xl font-bold hover:bg-white/5 transition flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </button>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}