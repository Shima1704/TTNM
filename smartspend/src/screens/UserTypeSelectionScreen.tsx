// src/screens/UserTypeSelectionScreen.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const userTypes = [
  { id: 'personal', label: 'Cá nhân', desc: 'Quản lý tài chính cá nhân & tiết kiệm', icon: '👤' },
  { id: 'family', label: 'Gia đình', desc: 'Quản lý chi tiêu chung cho cả gia đình', icon: '👨‍👩‍👧' },
  { id: 'business', label: 'Doanh nghiệp nhỏ', desc: 'Quản lý thu chi, hóa đơn, lợi nhuận', icon: '🏪' },
  { id: 'student', label: 'Sinh viên', desc: 'Quản lý chi tiêu, học phí, sinh hoạt', icon: '🎓' },
];

export default function UserTypeSelectionScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('personal');

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <div className="text-xl font-medium">9:41</div>
      </div>

      <h1 className="text-2xl font-bold leading-tight mb-1">
        Bạn sử dụng<br />ứng dụng như thế nào?
      </h1>
      <p className="text-gray-600 mb-8">Chúng tôi sẽ tối ưu trải nghiệm theo cách của bạn.</p>

      <div className="space-y-3 flex-1">
        {userTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => setSelected(type.id)}
            className={`flex items-center gap-4 p-4 border rounded-2xl cursor-pointer transition-all ${
              selected === type.id 
                ? 'border-[#00C48C] bg-[#F0FFF9]' 
                : 'border-gray-200'
            }`}
          >
            <div className="text-3xl">{type.icon}</div>
            <div className="flex-1">
              <p className="font-semibold">{type.label}</p>
              <p className="text-sm text-gray-500">{type.desc}</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selected === type.id ? 'border-[#00C48C] bg-[#00C48C]' : 'border-gray-300'
            }`}>
              {selected === type.id && <span className="text-white text-xs">✓</span>}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => navigate('/welcome')}
        className="w-full bg-[#00C48C] hover:bg-[#00b37a] text-white font-semibold py-4 rounded-2xl text-base mt-6 transition"
      >
        Xác nhận →
      </button>
    </div>
  );
}