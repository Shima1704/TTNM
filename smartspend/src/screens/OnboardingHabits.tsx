import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const habits = [
  {
    id: 'online',
    icon: '📱',
    label: 'Mua sắm online thường xuyên',
    desc: 'Shopee, Lazada, TikTokShop…',
  },
  {
    id: 'food',
    icon: '🍜',
    label: 'Ăn ngoài hàng ngày',
    desc: 'Thường xuyên đặt đồ ăn, cafe…',
  },
  {
    id: 'cashless',
    icon: '💳',
    label: 'Chủ yếu thanh toán không tiền mặt',
    desc: 'Thẻ, ví điện tử, chuyển khoản',
  },
  {
    id: 'tracker',
    icon: '📊',
    label: 'Đã từng ghi chép chi tiêu',
    desc: 'Bổ tay, Excel, app khác…',
  },
  {
    id: 'impulse',
    icon: '🛍️',
    label: 'Hay chi tiêu theo cảm hứng',
    desc: 'Mua đồ không có kế hoạch trước',
  },
];

const OnboardingHabits = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['online', 'cashless']);

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '50%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 5 / 10 · Thói quen
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Bạn thường<br />chi tiêu như thế nào?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Chọn các thói quen phản ánh đúng bạn nhất.
        </p>

        <div className="space-y-3 flex-1">
          {habits.map(habit => {
            const isSelected = selected.includes(habit.id);
            return (
              <button
                key={habit.id}
                onClick={() => toggle(habit.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 text-left transition-all ${
                  isSelected
                    ? 'border-[#00C48C] bg-[#f0fdf9]'
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                }`}
              >
                <span className="text-2xl">{habit.icon}</span>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${isSelected ? 'text-[#00916a]' : 'text-gray-800'}`}>
                    {habit.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{habit.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected ? 'border-[#00C48C] bg-[#00C48C]' : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="pb-8 pt-6">
          <button
            onClick={() => navigate('/onboarding/budget')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Tiếp tục →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingHabits;