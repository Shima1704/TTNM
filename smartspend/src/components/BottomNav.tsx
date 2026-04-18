// src/components/BottomNav.tsx
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BarChart2, Plus, Layout, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/dashboard-total', label: 'Trang chủ' },
    { icon: BarChart2, path: '/dashboard-chart', label: 'Thống kê' },
    { icon: Plus, path: '/add-transaction', label: 'Thêm', isMain: true },
    { icon: Layout, path: '/dashboard-monthly', label: 'Ngân sách' },
    { icon: User, path: '/welcome', label: 'Cá nhân' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A1F1C]/80 backdrop-blur-lg border-t border-white/10 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        if (item.isMain) {
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-14 h-14 bg-[#00C48C] rounded-2xl flex items-center justify-center -mt-10 shadow-lg shadow-[#00C48C]/30 active:scale-95 transition"
            >
              <Plus className="text-black w-8 h-8" />
            </button>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1 group"
          >
            <Icon 
              className={`w-6 h-6 transition ${
                isActive ? 'text-[#00C48C]' : 'text-gray-500 group-hover:text-gray-300'
              }`} 
            />
            {isActive && <div className="w-1 h-1 bg-[#00C48C] rounded-full"></div>}
          </button>
        );
      })}
    </div>
  );
}
