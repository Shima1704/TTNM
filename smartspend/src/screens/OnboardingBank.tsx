import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const banks = [
  { id: 'vcb', label: 'VCB', color: '#006400' },
  { id: 'tcb', label: 'TCB', color: '#E31837' },
  { id: 'mb', label: 'MB', color: '#1E3A8A' },
  { id: 'bidv', label: 'BIDV', color: '#005BAA' },
  { id: 'acb', label: 'ACB', color: '#003087' },
  { id: 'agri', label: 'Agri', color: '#009933' },
  { id: 'momo', label: 'MoMo', color: '#A50064' },
  { id: 'other', label: 'Khác', color: '#6B7280' },
];

const OnboardingBank = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState('vcb');

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
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '70%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 7 / 10 · Kết nối
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Kết nối<br />tài khoản ngân hàng
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Đồng bộ giao dịch tự động, không cần nhập tay.
        </p>

        {/* Bank card preview */}
        <div className="rounded-2xl p-5 mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a5c3a 0%, #0d3d25 100%)' }}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs text-green-300 font-medium">Vietcombank · Thẻ chính</p>
            </div>
            <div className="w-10 h-7 rounded bg-yellow-400 opacity-90 flex items-center justify-center">
              <div className="w-6 h-4 rounded border border-yellow-600 opacity-70" />
            </div>
          </div>
          <p className="text-white font-mono text-lg tracking-widest mb-4">
            •••• •••• •••• 4821
          </p>
          <div className="flex justify-between items-end">
            <p className="text-green-200 text-sm font-medium uppercase tracking-wide">NGUYEN VAN AN</p>
            <p className="text-green-200 text-sm">08/28</p>
          </div>
          {/* Card shine */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
        </div>

        {/* Bank selector */}
        <p className="text-sm font-semibold text-gray-700 mb-3">Chọn ngân hàng</p>
        <div className="grid grid-cols-4 gap-2 mb-5">
          {banks.map(bank => (
            <button
              key={bank.id}
              onClick={() => setSelectedBank(bank.id)}
              className={`py-3 rounded-xl flex flex-col items-center justify-center border-2 transition-all ${
                selectedBank === bank.id
                  ? 'border-[#00C48C] bg-[#f0fdf9]'
                  : 'border-gray-100 bg-gray-50 hover:border-gray-200'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                style={{ background: bank.id === 'other' ? '#f3f4f6' : bank.color + '15' }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: bank.id === 'other' ? '#6B7280' : bank.color }}
                >
                  {bank.label.substring(0, 3)}
                </span>
              </div>
              <span className="text-xs text-gray-500">{bank.label}</span>
            </button>
          ))}
        </div>

        {/* Security note */}
        <div className="flex items-start gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
          <span className="text-sm">🔒</span>
          <p className="text-xs text-green-700">
            Kết nối chỉ đọc — SmartSpend không thể thực hiện giao dịch
          </p>
        </div>

        <div className="flex-1" />

        <div className="pb-4 pt-4 space-y-3">
          <button
            onClick={() => navigate('/onboarding/wallet')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Kết nối ngay →
          </button>
          <button
            onClick={() => navigate('/onboarding/wallet')}
            className="w-full py-3 text-gray-500 text-sm font-medium"
          >
            Bỏ qua, nhập tay sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBank;