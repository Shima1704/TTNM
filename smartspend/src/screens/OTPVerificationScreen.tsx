// src/screens/OTPVerificationScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTPVerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['8', '3', '7', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white px-6 py-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <div className="text-xl font-medium">9:41</div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-[#00C48C] rounded-3xl flex items-center justify-center text-4xl shadow-lg">
          🔒
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-[#00C48C] text-sm font-semibold tracking-widest">XÁC MINH BẢO MẬT</p>
        <h1 className="text-2xl font-bold mt-2">Nhập mã OTP</h1>
        <p className="text-gray-400 mt-1">+84 96 *******12</p>
      </div>

      {/* OTP Input */}
      <div className="flex gap-3 justify-center mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="w-12 h-14 bg-[#1A2F2C] text-center text-2xl font-semibold rounded-2xl border border-gray-700 focus:border-[#00C48C] outline-none"
          />
        ))}
      </div>

      {/* Countdown */}
      <p className="text-center text-gray-400 text-sm mb-8">
        Mã hết hạn sau <span className="text-[#00C48C]">01:47</span> Giờ lại
      </p>

      {/* Confirm Button */}
      <button 
        onClick={() => navigate('/reset-password')}
        className="w-full bg-[#00C48C] text-black font-semibold py-4 rounded-2xl text-base mb-10"
      >
        Xác nhận →
      </button>

      {/* Numeric Keypad */}
      <div className="grid grid-cols-3 gap-4 text-2xl font-light">
        {[1,2,3,4,5,6,7,8,9].map(num => (
          <button key={num} className="h-14 hover:bg-gray-800 rounded-xl transition">
            {num}
          </button>
        ))}
        <div></div>
        <button className="h-14 hover:bg-gray-800 rounded-xl transition text-3xl">0</button>
        <button className="h-14 hover:bg-gray-800 rounded-xl transition text-3xl">⌫</button>
      </div>
    </div>
  );
}