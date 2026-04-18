// src/screens/TransactionSearch.tsx
//43
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, X, Utensils, Coffee } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function TransactionSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const recentSearches = ['KFC', 'Highland', 'Lương', 'Netflix'];
  const results = [
    { id: 1, name: "KFC Đà Nẵng", amount: -125000, category: "Ăn uống", date: "Hôm nay", icon: Utensils },
    { id: 3, name: "Highland Coffee", amount: -65000, category: "Ăn uống", date: "17/04/2026", icon: Coffee },
  ].filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white flex flex-col pb-32">
      {/* Header / Search Bar */}
      <div className="px-6 pt-12 flex gap-4 items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </button>
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm giao dịch..."
            className="w-full bg-[#1A2F2C] rounded-2xl pl-12 pr-12 py-3.5 text-base outline-none border border-transparent focus:border-[#00C48C]/30 transition-all font-medium"
            autoFocus
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 bg-gray-700/50 rounded-full"
            >
              <X className="w-3 h-3 text-gray-300" />
            </button>
          )}
        </div>
      </div>

      <div className="px-6 mt-8 flex-1">
        {!search ? (
          <div>
            <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Tìm kiếm gần đây</p>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map(s => (
                <button 
                  key={s} 
                  onClick={() => setSearch(s)}
                  className="px-4 py-2 bg-[#1A2F2C] rounded-xl text-sm text-gray-300 hover:text-[#00C48C] transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Kết quả tìm kiếm ({results.length})</p>
            {results.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.id}
                  onClick={() => navigate(`/transaction/${r.id}`)}
                  className="bg-[#1A2F2C]/50 rounded-3xl p-5 flex justify-between items-center active:scale-[0.98] transition border border-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0A1F1C] text-red-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.category} • {r.date}</p>
                    </div>
                  </div>
                  <p className="font-bold text-red-400">
                    {r.amount.toLocaleString('vi-VN')} ₫
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}