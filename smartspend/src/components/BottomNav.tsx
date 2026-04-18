// src/components/BottomNav.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart3, Plus, FileText, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => 
    location.pathname === path || location.pathname.startsWith(path);

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[370px] z-50 pointer-events-auto">
      <div className="bg-[#0A1F1C] border border-white/10 rounded-3xl py-2 px-5 shadow-2xl flex items-center justify-around relative h-14">
        
        <button 
          onClick={() => navigate('/dashboard')}
          className={`flex flex-col items-center gap-0.5 transition ${isActive('/dashboard') ? 'text-emerald-400' : 'text-gray-400'}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[9px]">Trang chủ</span>
        </button>

        <button 
          onClick={() => navigate('/reports')}
          className={`flex flex-col items-center gap-0.5 transition ${isActive('/reports') ? 'text-emerald-400' : 'text-gray-400'}`}
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-[9px]">Báo cáo</span>
        </button>

        {/* Nút + lớn */}
        <button 
          onClick={() => navigate('/add-expense')}
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-600/70 active:scale-95 transition-all"
        >
          <Plus className="w-9 h-9 text-black" strokeWidth={4} />
        </button>

        <button 
          onClick={() => navigate('/transactions')}
          className={`flex flex-col items-center gap-0.5 transition ${isActive('/transactions') ? 'text-emerald-400' : 'text-gray-400'}`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[9px]">Giao dịch</span>
        </button>

        <button 
          onClick={() => navigate('/dashboard/total')}
          className={`flex flex-col items-center gap-0.5 transition ${isActive('/dashboard/total') ? 'text-emerald-400' : 'text-gray-400'}`}
        >
          <User className="w-5 h-5" />
          <span className="text-[9px]">Cá nhân</span>
        </button>
      </div>
    </div>
  );
}