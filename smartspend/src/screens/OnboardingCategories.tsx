import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allCategories = [
  { id: 'food', icon: '🍜', label: 'Ăn uống' },
  { id: 'transport', icon: '🚗', label: 'Di chuyển' },
  { id: 'entertain', icon: '🎮', label: 'Giải trí' },
  { id: 'shopping', icon: '🛍️', label: 'Mua sắm' },
  { id: 'health', icon: '❤️', label: 'Sức khoẻ' },
  { id: 'education', icon: '📚', label: 'Học tập' },
  { id: 'home', icon: '🏠', label: 'Nhà cửa' },
  { id: 'travel', icon: '✈️', label: 'Du lịch' },
  { id: 'beauty', icon: '💅', label: 'Làm đẹp' },
  { id: 'pet', icon: '🐾', label: 'Thú cưng' },
  { id: 'gift', icon: '🎁', label: 'Quà tặng' },
  { id: 'utility', icon: '💡', label: 'Tiện ích' },
  { id: 'sport', icon: '⚽', label: 'Thể thao' },
  { id: 'tech', icon: '💻', label: 'Công nghệ' },
];

const OnboardingCategories = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([
    'food', 'transport', 'entertain', 'shopping', 'health', 'education', 'home',
  ]);

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '90%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 9 / 10 · Danh mục
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Danh mục<br />chi tiêu của bạn
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          Chọn danh mục bạn thường chi tiêu nhất. Bạn có thể thêm sau.
        </p>

        {/* Counter */}
        <p className="text-xs font-medium text-[#00C48C] mb-4">
          ✓ Đã chọn {selected.length}/{allCategories.length} danh mục
        </p>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 flex-1">
          {allCategories.map(cat => {
            const isSelected = selected.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggle(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                  isSelected
                    ? 'border-[#00C48C] bg-[#f0fdf9] text-[#00916a]'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}

          {/* Add new */}
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-full border-2 border-dashed border-gray-300 text-sm text-gray-400 hover:border-gray-400 transition-all">
            + Tạo mới
          </button>
        </div>

        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/summary')}
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

export default OnboardingCategories;