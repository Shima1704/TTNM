// src/screens/WelcomeScreen.tsx
import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/onboarding/name');
  };

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white px-6 py-8 flex flex-col relative overflow-hidden">
      {/* Decorative floating dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-12 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-28 right-24 w-2 h-2 bg-green-400 rounded-full"></div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-sm font-medium">9:41</div>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-white/80 rounded-full"></div>
          <div className="w-3 h-3 bg-white/80 rounded-full"></div>
          <div className="w-3 h-3 bg-white/80 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Avatar with verification check */}
        <div className="relative mb-6">
          <div className="w-28 h-28 bg-gradient-to-br from-[#00C48C] to-[#00A67A] rounded-full flex items-center justify-center text-6xl shadow-2xl ring-4 ring-green-500/30">
            A
          </div>
          <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-[#0A1F1C]">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>

        {/* Success Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-medium px-5 py-1.5 rounded-full mb-4 border border-green-500/30">
          <span>✔</span> XÁC THỰC THÀNH CÔNG
        </div>

        {/* Greeting */}
        <h1 className="text-3xl font-bold mb-1">Xin chào,</h1>
        <h2 className="text-3xl font-bold text-[#00C48C] mb-6">
          Nguyễn Văn An! 👋
        </h2>

        <p className="text-gray-400 text-[15px] max-w-[300px] leading-relaxed">
          Tài khoản của bạn đã được xác thực.<br />
          Đang chuyển đến Dashboard...
        </p>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
          <div className="text-xs text-gray-400 mb-1">Tài khoản</div>
          <div className="font-medium">Cá nhân</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
          <div className="text-xs text-gray-400 mb-1">Đăng nhập qua</div>
          <div className="font-medium flex items-center gap-2">
            Google <span className="text-green-400">✓</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
          <div className="text-xs text-gray-400 mb-1">Bảo mật</div>
          <div className="font-medium text-green-400">Đã bật 2FA</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
          <div className="text-xs text-gray-400 mb-1">Lần cuối</div>
          <div className="font-medium">Vừa xong</div>
        </div>
      </div>

      {/* Big Start Button */}
      <button
        onClick={handleStart}
        className="w-full bg-gradient-to-r from-[#00C48C] to-[#00A67A] 
                   text-black font-semibold py-5 rounded-2xl text-lg 
                   active:scale-95 transition-all shadow-xl shadow-green-500/40"
      >
        Bắt đầu ngay 🚀
      </button>

      {/* Progress text */}
      <p className="text-center text-gray-500 text-xs mt-6">
        Đang đồng bộ dữ liệu... 75%
      </p>
    </div>
  );
}