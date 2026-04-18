// src/screens/ForgotPasswordScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<'email' | 'sms'>('email');
  const [email, setEmail] = useState('an.nguyen@gmail.com');

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-2xl text-gray-700"
        >
          ←
        </button>
        <div className="text-xl font-medium">9:41</div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center text-5xl shadow-inner">
          🔑
        </div>
      </div>

      {/* Tiêu đề */}
      <div className="text-center mb-8">
        <p className="text-[#00C48C] font-semibold text-sm tracking-widest">KHÔI PHỤC TÀI KHOẢN</p>
        <h1 className="text-3xl font-bold mt-2">Quên mật khẩu?</h1>
        <p className="text-gray-600 mt-3 text-[15px]">
          Đừng lo! Nhập email đã đăng ký,<br />
          chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu.
        </p>
      </div>

      {/* Chọn phương thức */}
      <div className="flex gap-3 bg-gray-100 p-1 rounded-2xl mb-6">
        <button
          onClick={() => setMethod('email')}
          className={`flex-1 py-3 rounded-xl font-medium transition ${
            method === 'email' 
              ? 'bg-white shadow text-black' 
              : 'text-gray-500'
          }`}
        >
          📧 Email
        </button>
        <button
          onClick={() => setMethod('sms')}
          className={`flex-1 py-3 rounded-xl font-medium transition ${
            method === 'sms' 
              ? 'bg-white shadow text-black' 
              : 'text-gray-500'
          }`}
        >
          📱 SMS
        </button>
      </div>

      {/* Input Email */}
      <div className="mb-8">
        <label className="text-sm text-gray-600 block mb-2">Địa chỉ email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 border border-gray-200 focus:border-[#00C48C] rounded-2xl px-5 py-4 text-base outline-none"
        />
      </div>

      {/* Nút Gửi */}
      <button 
        onClick={() => navigate('/otp-verification')}
        className="w-full bg-[#00C48C] hover:bg-[#00b37a] text-white font-semibold py-4 rounded-2xl text-base transition active:scale-95"
      >
        Gửi hướng dẫn →
      </button>

      {/* Link quay lại */}
      <p className="text-center text-gray-600 mt-8 text-sm">
        Nhớ ra?{' '}
        <span 
          className="text-[#00C48C] font-semibold cursor-pointer hover:underline"
          onClick={() => navigate('/')}
        >
          Quay lại đăng nhập
        </span>
      </p>
    </div>
  );
}