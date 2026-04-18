import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QUICK = [5_000_000, 10_000_000, 15_000_000, 20_000_000];

const breakdown = [
  { icon: '🍜', label: 'Ăn uống', amount: 4_000_000, color: 'text-orange-500' },
  { icon: '🚗', label: 'Di chuyển', amount: 2_000_000, color: 'text-blue-500' },
  { icon: '🎮', label: 'Giải trí', amount: 1_500_000, color: 'text-purple-500' },
  { icon: '❤️', label: 'Sức khoẻ', amount: 1_000_000, color: 'text-red-500' },
];

const OnboardingBudget = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState(10_000_000);

  const total = breakdown.reduce((s, b) => s + b.amount, 0);
  const remaining = budget - total;

  const fmt = (n: number) => n.toLocaleString('vi-VN');

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ maxWidth: 430, margin: '0 auto' }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1">
        <span className="text-sm font-semibold text-gray-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-3 rounded-sm bg-gray-900 opacity-80" />
          <div className="w-1 h-3 rounded-sm bg-gray-900 opacity-80" />
          <div className="w-5 h-3 rounded-full border-2 border-gray-900 opacity-80" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-2 pb-4">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '60%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 6 / 10 · Ngân sách
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-1">
          Ngân sách<br />tháng này
        </h1>
        <p className="text-sm text-gray-500 mb-5">
          Thiết lập tổng ngân sách chi tiêu cho tháng 4/2026.
        </p>

        {/* Budget card */}
        <div className="bg-[#0A2420] rounded-2xl p-5 mb-5">
          <p className="text-xs text-gray-400 mb-1">Đồng Việt Nam (đ)</p>
          <p className="text-4xl font-bold text-white">{fmt(budget)}</p>
          <p className="text-xs text-gray-400 mt-1">Ngân sách tháng 4/2026</p>
        </div>

        {/* Quick picks */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {QUICK.map(q => (
            <button
              key={q}
              onClick={() => setBudget(q)}
              className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                budget === q
                  ? 'bg-[#00C48C] text-white border-[#00C48C]'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {q / 1_000_000}tr
            </button>
          ))}
        </div>

        {/* Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-4 flex-1">
          <p className="text-xs font-semibold text-gray-500 mb-3">📊 Phân bổ đề xuất</p>
          <div className="space-y-2">
            {breakdown.map(b => (
              <div key={b.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">{b.icon}</span>
                  <span className="text-sm text-gray-700">{b.label}</span>
                </div>
                <span className={`text-sm font-semibold ${b.color}`}>{fmt(b.amount)}.000 đ</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Còn lại (tiết kiệm)</span>
              <span className="text-sm font-bold text-[#00C48C]">{fmt(remaining)}.000 đ</span>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/bank')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Xác nhận ngân sách →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBudget;