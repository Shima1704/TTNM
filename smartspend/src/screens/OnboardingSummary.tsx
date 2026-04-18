import { useNavigate } from 'react-router-dom';

const summaryItems = [
  { icon: '👤', label: 'Họ tên', value: 'Nguyễn Vân An', action: 'Sửa' },
  { icon: '💼', label: 'Nghề nghiệp', value: 'Nhân viên văn phòng', action: 'Sửa' },
  { icon: '💵', label: 'Thu nhập', value: '~15.000.000 đ/tháng', action: 'Sửa' },
  { icon: '📊', label: 'Ngân sách tháng', value: '10.000.000 đ', action: 'Sửa' },
  { icon: '🏦', label: 'Tài khoản', value: 'VCB + Ví tiền mặt', action: 'Sửa' },
  { icon: '🗂️', label: 'Danh mục', value: '7 danh mục đã chọn', action: 'Sửa' },
];

const OnboardingSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ maxWidth: 430, margin: '0 auto', background: '#0d2b22' }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1">
        <span className="text-sm font-semibold text-white opacity-80">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-3 rounded-sm bg-white opacity-70" />
          <div className="w-1 h-3 rounded-sm bg-white opacity-70" />
          <div className="w-5 h-3 rounded-full border-2 border-white opacity-70" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-2 pb-6">
        <div className="h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
          <div className="h-full bg-[#00C48C] rounded-full w-full" />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#00C48C] rounded-2xl flex items-center justify-center">
            <span className="text-2xl">🎉</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase">
              Tất cả hoàn tất!
            </p>
            <h1 className="text-2xl font-bold text-white">Hồ sơ của bạn</h1>
          </div>
        </div>

        {/* Summary cards */}
        <div className="bg-[#1a3d2e] rounded-2xl overflow-hidden divide-y divide-white/10 flex-1">
          {summaryItems.map((item, i) => (
            <div key={i} className="flex items-center px-4 py-4 gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{item.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold text-white truncate">{item.value}</p>
              </div>
              <button className="text-xs text-[#00C48C] font-medium flex-shrink-0 hover:underline">
                {item.action}
              </button>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="pb-8 pt-4">
          <button
            onClick={() => navigate('/dashboard')}   // ← Thay đổi ở đây
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-lg"
          >
            🚀 Vào Dashboard ngay!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSummary;