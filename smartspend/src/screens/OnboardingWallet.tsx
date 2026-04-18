import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280', '#111827'];
const ICONS = ['👛', '💰', '🏦', '💳', '🏠', '🚗', '🎁', '💼'];

const OnboardingWallet = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Ví tiền mặt');
  const [balance, setBalance] = useState('2.500.000');
  const [color, setColor] = useState('#22C55E');
  const [icon, setIcon] = useState('👛');

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '80%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 8 / 10 · Ví
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-1">
          Thêm ví<br />tiền mặt
        </h1>
        <p className="text-sm text-gray-500 mb-5">
          Theo dõi cả tiền mặt lẫn tài khoản ngân hàng.
        </p>

        {/* Wallet card preview */}
        <div
          className="rounded-2xl p-5 mb-6 transition-all"
          style={{ background: color }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{icon}</span>
            <p className="text-white font-semibold text-sm">{name || 'Ví tiền mặt'}</p>
          </div>
          <p className="text-xs text-white opacity-70 mb-1">Số dư hiện tại</p>
          <p className="text-3xl font-bold text-white">{balance ? balance + ' đ' : '0 đ'}</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên ví</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C48C] bg-gray-50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">✏️</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số dư ban đầu</label>
            <div className="relative">
              <input
                type="text"
                value={balance}
                onChange={e => setBalance(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C48C] bg-gray-50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg">💵</span>
            </div>
          </div>

          {/* Color picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Màu ví</label>
            <div className="flex gap-2 flex-wrap">
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className="w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center"
                  style={{
                    background: c,
                    borderColor: color === c ? '#00C48C' : 'transparent',
                    transform: color === c ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  {color === c && <span className="text-white text-xs font-bold">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Icon picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Biểu tượng</label>
            <div className="flex gap-2">
              {ICONS.map(ic => (
                <button
                  key={ic}
                  onClick={() => setIcon(ic)}
                  className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition-all ${
                    icon === ic ? 'border-[#00C48C] bg-[#f0fdf9]' : 'border-gray-100 bg-gray-50'
                  }`}
                >
                  {ic}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/categories')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Thêm ví →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWallet;