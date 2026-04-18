import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingName = () => {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState('Nguyễn');
  const [firstName, setFirstName] = useState('Vân An');
  const [nickname, setNickname] = useState('');

  const displayName = `${lastName} ${firstName}`.trim();

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '10%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        {/* Step label */}
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 1 / 10 · Làm quen
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Bạn tên gì? 😊
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Chúng tôi sẽ gọi tên bạn trong suốt trải nghiệm.
        </p>

        {/* Avatar upload */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-2xl border-2 border-dashed border-[#00C48C] flex flex-col items-center justify-center cursor-pointer bg-[#f0fdf9] hover:bg-[#e6f9f4] transition-colors"
              style={{ borderColor: '#00C48C' }}
            >
              <span className="text-3xl">😊</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#00C48C] rounded-full flex items-center justify-center shadow">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 -mt-4 mb-8">Thêm ảnh đại diện (tuỳ chọn)</p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ</label>
            <div className="relative">
              <input
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C48C] focus:border-transparent bg-gray-50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">✏️</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
            <div className="relative">
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#00C48C] text-gray-900 text-sm focus:outline-none bg-white"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">✏️</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Biệt danh (tuỳ chọn)</label>
            <div className="relative">
              <input
                type="text"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                placeholder="Ví dụ: An béo, Anh An…"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C48C] focus:border-transparent bg-gray-50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">😄</span>
            </div>
          </div>
        </div>

        {/* Greeting */}
        {displayName && (
          <div className="mt-4 px-4 py-3 bg-[#f0fdf9] rounded-xl border border-[#b2f0d8]">
            <p className="text-sm text-[#00916a]">
              👋 Chào <strong>{displayName}</strong>! Lên của bạn trông thật tuyệt.
            </p>
          </div>
        )}

        <div className="flex-1" />

        {/* Button */}
        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/onboarding/job')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Tiếp tục →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingName;