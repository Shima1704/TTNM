// src/screens/SignUpScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col text-gray-900">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-medium">9:41</div>
        <div className="flex gap-1.5">
          <div>• • •</div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-10">
        <p className="text-[#00C48C] font-semibold text-sm tracking-widest mb-2">
          TẠO TÀI KHOẢN MỚI
        </p>
        <h1 className="text-3xl font-bold leading-tight">
          Bắt đầu hành trình<br />
          tài chính thông minh
        </h1>
        <p className="text-gray-500 mt-3 text-[15px]">
          Miễn phí, bảo mật và dễ sử dụng.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6 flex-1">
        {/* Họ và tên */}
        <div>
          <label className="text-sm text-gray-600 block mb-1.5">Họ và tên</label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nguyễn Văn An"
              className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base outline-none text-gray-900"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600 block mb-1.5">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="an.nguyen@gmail.com"
              className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base outline-none text-gray-900"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
          </div>
        </div>

        {/* Mật khẩu */}
        <div>
          <label className="text-sm text-gray-600 block mb-1.5">Mật khẩu</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base outline-none text-gray-900"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Xác nhận mật khẩu */}
        <div>
          <label className="text-sm text-gray-600 block mb-1.5">Xác nhận mật khẩu</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base outline-none text-gray-900"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔒</span>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 leading-relaxed">
          Bằng cách đăng ký, bạn đồng ý với{' '}
          <span className="text-[#00C48C] underline">Điều khoản sử dụng</span> và{' '}
          <span className="text-[#00C48C] underline">Chính sách bảo mật</span>
        </p>

        {/* Button */}
        <button 
          onClick={() => alert('Tạo tài khoản thành công!')}
          className="w-full bg-[#00C48C] hover:bg-[#00b37a] text-white font-semibold py-[18px] rounded-2xl text-base mt-6 active:scale-95 transition"
        >
          Tạo tài khoản →
        </button>

        {/* Link Login */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Đã có tài khoản?{' '}
          <span 
            className="text-[#00C48C] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/')}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
}