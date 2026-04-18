// src/screens/ResetPasswordScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <div className="text-xl font-medium">9:41</div>
      </div>

      <h1 className="text-3xl font-bold mb-1">Tạo mật khẩu mới</h1>
      <p className="text-gray-600">Mật khẩu mới phải khác mật khẩu cũ và đủ điều kiện</p>

      {/* New Password */}
      <div className="mt-8">
        <label className="text-sm text-gray-600 block mb-2">Mật khẩu mới</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mt-6">
        <label className="text-sm text-gray-600 block mb-2">Nhập lại mật khẩu</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-green-500"
          >
            ✓
          </button>
        </div>
      </div>

      {/* Password Rules */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-2 text-sm text-green-600">
          <span>✔</span> Ít nhất 8 ký tự
        </div>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <span>✔</span> Chứa chữ hoa, chữ thường và số
        </div>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <span>✔</span> Chứa ký tự đặc biệt (nếu có)
        </div>
      </div>

      {/* Button */}
      <button 
        onClick={() => {
          alert('Đặt mật khẩu mới thành công!');
          navigate('/');
        }}
        className="mt-10 w-full bg-[#00C48C] hover:bg-[#00b37a] text-white font-semibold py-4 rounded-2xl text-base transition active:scale-95"
      >
        Đặt mật khẩu mới →
      </button>
    </div>
  );
}