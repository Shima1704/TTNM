// src/screens/WelcomeScreen.tsx
import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white px-6 py-8 flex flex-col relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-40 right-12 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-white rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8">
          <div className="w-28 h-28 bg-gradient-to-br from-[#00C48C] to-[#00a67a] rounded-full flex items-center justify-center text-6xl shadow-2xl">
            A
          </div>
          <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center border-4 border-[#0A1F1C]">
            ✓
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Xin chào,</h1>
        <h2 className="text-3xl font-bold text-[#00C48C]">Nguyễn Văn An! 👋</h2>

        <p className="text-gray-400 mt-6 text-[15px] max-w-[280px]">
          Tài khoản của bạn đã được xác thực thành công.<br />
          Bây giờ bạn có thể bắt đầu quản lý tài chính.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 mb-10">
        <button className="w-full bg-[#1A2F2C] hover:bg-[#243D39] py-4 rounded-2xl text-left px-5 flex justify-between items-center">
          <span>Cá nhân</span>
          <span className="text-[#00C48C]">✓</span>
        </button>

        <button className="w-full bg-[#1A2F2C] hover:bg-[#243D39] py-4 rounded-2xl text-left px-5 flex justify-between items-center">
          <span>Google</span>
          <span className="text-[#00C48C]">✓</span>
        </button>
      </div>

      <button 
        onClick={() => navigate('/')} // hoặc trang Home chính
        className="w-full bg-[#00C48C] text-black font-semibold py-4 rounded-2xl text-base"
      >
        Bắt đầu ngay
      </button>

      <p className="text-center text-gray-500 text-xs mt-6">Đang đồng bộ dữ liệu... 75%</p>
    </div>
  );
}