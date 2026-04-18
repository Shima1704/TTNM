import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const goals = [
  { id: 'save_more', icon: '💰', label: 'Tiết kiệm nhiều hơn' },
  { id: 'cut_spend', icon: '✂️', label: 'Giảm chi tiêu lãng phí' },
  { id: 'home_car', icon: '🏠', label: 'Mua nhà / xe' },
  { id: 'travel', icon: '✈️', label: 'Quỹ du lịch' },
  { id: 'invest', icon: '📈', label: 'Đầu tư tài chính' },
  { id: 'learn', icon: '🎓', label: 'Học tập / phát triển' },
];

const OnboardingGoals = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['save_more', 'home_car', 'learn']);

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '30%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 3 / 10 · Mục tiêu
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Mục tiêu tài chính<br />của bạn là gì?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Chọn nhiều mục tiêu cùng lúc nhé.
        </p>

        {/* Grid of goals */}
        <div className="grid grid-cols-2 gap-3 flex-1">
          {goals.map(goal => {
            const isSelected = selected.includes(goal.id);
            return (
              <button
                key={goal.id}
                onClick={() => toggle(goal.id)}
                className={`relative flex flex-col items-start p-4 rounded-2xl border-2 text-left transition-all ${
                  isSelected
                    ? 'border-[#00C48C] bg-[#f0fdf9]'
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                }`}
              >
                <span className="text-2xl mb-2">{goal.icon}</span>
                <p className={`text-sm font-semibold leading-tight ${isSelected ? 'text-[#00916a]' : 'text-gray-800'}`}>
                  {goal.label}
                </p>
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-[#00C48C] rounded-full flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Hint */}
        {selected.length > 0 && (
          <p className="text-xs text-[#00916a] mt-4">
            ✦ Đã chọn {selected.length} mục tiêu — SmartSpend sẽ gợi ý ngân sách phù hợp
          </p>
        )}

        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/income')}
            disabled={selected.length === 0}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md disabled:opacity-40"
          >
            Tiếp tục →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGoals;