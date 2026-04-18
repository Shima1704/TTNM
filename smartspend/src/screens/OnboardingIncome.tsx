import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RANGES = ['5-10M', '10-20M ✓', '20-35M', '35M+'];

const OnboardingIncome = () => {
  const navigate = useNavigate();
  const [income, setIncome] = useState(15);

  const formatted = (income * 1_000_000).toLocaleString('vi-VN') + ' đ';

  const needPercent = 50;
  const wantPercent = 30;
  const savePercent = 20;

  const need = Math.round(income * needPercent / 100 * 1_000_000).toLocaleString('vi-VN');
  const want = Math.round(income * wantPercent / 100 * 1_000_000).toLocaleString('vi-VN');
  const save = Math.round(income * savePercent / 100 * 1_000_000).toLocaleString('vi-VN');

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '40%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 4 / 10 · Thu nhập
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Thu nhập hàng<br />tháng của bạn?
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Thông tin này giúp chúng tôi để xuất ngân sách hợp lý. Bạn có thể chỉnh sau.
        </p>

        {/* Income display */}
        <div className="text-center mb-2">
          <p className="text-xs text-gray-400 mb-1">Thu nhập ước tính / tháng</p>
          <p className="text-4xl font-bold text-gray-900">{formatted}</p>
        </div>

        {/* Slider */}
        <div className="px-2 mb-4">
          <input
            type="range"
            min={1}
            max={50}
            value={income}
            onChange={e => setIncome(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #00C48C ${(income / 50) * 100}%, #e5e7eb ${(income / 50) * 100}%)`,
              accentColor: '#00C48C',
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0M</span>
            <span>5M</span>
            <span>10M</span>
            <span>30M</span>
            <span>50M+</span>
          </div>
        </div>

        {/* Quick range chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {RANGES.map(r => {
            const isActive = r.includes('✓');
            return (
              <button
                key={r}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? 'bg-[#00C48C] text-white border-[#00C48C]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {r.replace(' ✓', '')}
              </button>
            );
          })}
        </div>

        {/* 50/30/20 breakdown */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 mb-3">
            💡 Gợi ý phân bổ 50/30/20
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
              <p className="text-lg font-bold text-gray-900">50%</p>
              <p className="text-xs text-gray-500 mt-0.5">Thiết yếu</p>
              <p className="text-xs font-medium text-gray-700 mt-1">{need}đ</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
              <p className="text-lg font-bold text-amber-500">30%</p>
              <p className="text-xs text-gray-500 mt-0.5">Cá nhân</p>
              <p className="text-xs font-medium text-gray-700 mt-1">{want}đ</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
              <p className="text-lg font-bold text-[#00C48C]">20%</p>
              <p className="text-xs text-gray-500 mt-0.5">Tiết kiệm</p>
              <p className="text-xs font-medium text-gray-700 mt-1">{save}đ</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          🔒 Thông tin chỉ dùng nội bộ, không chia sẻ bên ngoài
        </p>

        <div className="flex-1" />

        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/habits')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Tiếp tục →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingIncome;