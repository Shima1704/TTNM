// src/screens/EmailVerificationScreen.tsx
import { useNavigate } from 'react-router-dom';

export default function EmailVerificationScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <div className="text-xl font-medium">9:41</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[#E0F7F0] rounded-full flex items-center justify-center mb-8">
          ✉️
        </div>
        <h1 className="text-2xl font-bold mb-3">Xác thực địa chỉ email</h1>
        <p className="text-gray-600 mb-8">
          Chúng tôi đã gửi mã xác thực đến<br />
          <strong>an.nguyen@gmail.com</strong>
        </p>

        <button 
          onClick={() => navigate('/otp-verification')}
          className="w-full bg-[#00C48C] text-white font-semibold py-4 rounded-2xl text-base"
        >
          Mở ứng dụng Email
        </button>
      </div>
    </div>
  );
}