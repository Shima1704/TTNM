// src/screens/TransactionDetail.tsx
//44
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Trash2, Edit3, Calendar, Tag, CreditCard, AlignLeft, MoreHorizontal } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function TransactionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Top Header Section */}
      <div className="bg-red-500/90 pt-12 pb-16 px-6 rounded-b-[48px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex justify-between items-center relative z-10">
          <button onClick={() => navigate(-1)} className="p-2 bg-black/20 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 bg-black/20 rounded-full">
            <MoreHorizontal className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="text-center mt-8 relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-white/30 backdrop-blur-md">
            <Tag className="w-10 h-10 text-white" />
          </div>
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest">Ăn uống</p>
          <p className="text-5xl font-bold text-white mt-3">-125.000 ₫</p>
        </div>
      </div>

      {/* Details List */}
      <div className="px-6 -mt-8 relative z-20 flex-1">
        <div className="bg-[#1A2F2C] rounded-[32px] p-8 shadow-xl border border-white/5 space-y-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Thời gian</p>
              <p className="font-semibold">Hôm nay, 19/04/2026 • 12:30</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Tài khoản</p>
              <p className="font-semibold">Vietcombank (•••4821)</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0">
              <AlignLeft className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Ghi chú</p>
              <p className="font-semibold">KFC Đà Nẵng - Ăn trưa cùng đồng nghiệp</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => navigate('/delete-confirm')}
            className="flex-1 bg-[#1A2F2C] text-red-400 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border border-red-500/20 active:scale-[0.98] transition"
          >
            <Trash2 className="w-5 h-5" />
            Xóa
          </button>
          <button 
            onClick={() => navigate(`/edit`)}
            className="flex-3 bg-[#00C48C] text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00C48C]/20 active:scale-[0.98] transition"
          >
            <Edit3 className="w-5 h-5" />
            Chỉnh sửa giao dịch
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}