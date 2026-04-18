// src/screens/LoginScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      navigate('/user-type');
    } else {
      alert('Vui lòng nhập đầy đủ email và mật khẩu!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1F1C] flex flex-col relative overflow-hidden">
      {/* === Phần Balance trên cùng (giống Dashboard) === */}
      <div className="pt-12 px-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1A2F2C] rounded-3xl p-5 shadow-inner">
            <p className="text-gray-400 text-sm">Số dư hôm nay</p>
            <p className="text-2xl font-semibold text-white mt-1">28.900.000 ₫</p>
            <p className="text-emerald-400 text-xs mt-1">+2.4% so với hôm qua</p>
          </div>

          <div className="bg-[#1A2F2C] rounded-3xl p-5 shadow-inner">
            <p className="text-gray-400 text-sm">Tiết kiệm</p>
            <p className="text-2xl font-semibold text-emerald-400 mt-1">+6.800.000 ₫</p>
          </div>
        </div>
      </div>

      {/* === Card trắng chính (phần đăng nhập) === */}
      <div className="flex-1 bg-white rounded-t-[40px] mt-8 px-6 pt-8 pb-12 text-black relative shadow-2xl">
        
        {/* Logo + Tên app */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#00C48C] rounded-2xl flex items-center justify-center text-3xl shadow-md">
            💰
          </div>
          <div>
            <p className="font-bold text-3xl tracking-tight text-gray-900">SmartSpend</p>
          </div>
        </div>

        {/* Tiêu đề */}
        <h1 className="text-[32px] font-bold leading-tight mb-2 text-gray-900">
          Chào mừng<br />trở lại 👋
        </h1>
        <p className="text-gray-600 text-[15.5px] mb-10">
          Đăng nhập để tiếp tục quản lý tài chính
        </p>

        {/* Form */}
        <div className="space-y-6">
          {/* Email */}
          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Email</p>
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl px-5 py-4 flex items-center focus-within:border-[#00C48C] transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@gmail.com"
                className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
              />
              <span className="text-gray-400 text-xl">✉️</span>
            </div>
          </div>

          {/* Mật khẩu */}
          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Mật khẩu</p>
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl px-5 py-4 flex items-center focus-within:border-[#00C48C] transition-all">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 text-2xl"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between text-sm mt-2">
            <span 
              className="text-[#00C48C] font-medium cursor-pointer hover:underline"
              onClick={() => navigate('/signup')}
            >
              Đăng ký
            </span>
            <span 
              className="text-[#00C48C] font-medium cursor-pointer hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Quên mật khẩu?
            </span>
          </div>

          {/* Nút Đăng nhập */}
          <button 
            onClick={handleLogin}
            className="w-full bg-[#00C48C] hover:bg-[#00b37a] active:scale-[0.985] 
                       text-black font-semibold py-4 rounded-3xl text-lg 
                       transition mt-8 shadow-lg shadow-[#00C48C]/30"
          >
            Đăng nhập
          </button>
        </div>

        {/* Hoặc + Social */}
        <div className="flex items-center my-10">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-6 text-gray-400 text-sm font-medium">hoặc</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="flex justify-center gap-8">
          <button className="w-14 h-14 bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-sm hover:shadow transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
              alt="Google" 
              className="w-7 h-7" 
            />
          </button>

          <button className="w-14 h-14 bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-sm hover:shadow transition text-3xl">
            
          </button>
        </div>
      </div>
    </div>
  );
}