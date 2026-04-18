// Screen 99 – Chia sẻ báo cáo
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const SHARE_METHODS = [
  { icon: '💬', label: 'Zalo', bg: 'rgba(37,211,102,0.1)' },
  { icon: '📲', label: 'Messenger', bg: 'rgba(37,211,102,0.1)' },
  { icon: '📧', label: 'Email', bg: 'rgba(66,133,244,0.1)' },
  { icon: '📁', label: 'Lưu file', bg: '#E6FBF6' },
];

export default function ReportShareScreen() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PhoneFrame lightBg>
      {/* Blurred background doc */}
      <div className="rounded-2xl p-3 flex gap-3 items-center opacity-50 blur-sm pointer-events-none"
        style={{ background: 'white' }}>
        <span className="text-xl">📄</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1F1A' }}>BaoCaoT4_2026.pdf</div>
          <div style={{ fontSize: 11, color: '#5A7068' }}>2.4 MB · Vừa tạo</div>
        </div>
      </div>

      {/* Share bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 rounded-t-3xl p-6 pb-8 z-40"
        style={{ background: 'white', boxShadow: '0 -8px 40px rgba(0,0,0,0.1)' }}>

        {/* Handle */}
        <div className="w-10 h-1 rounded-full mx-auto mb-5" style={{ background: '#E0E0E0' }} />

        <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 18, fontWeight: 700, color: '#0D1F1A', marginBottom: 4 }}>
          Chia sẻ báo cáo
        </div>
        <div style={{ fontSize: 12, color: '#5A7068', marginBottom: 18 }}>BaoCaoT4_2026.pdf · 2.4 MB</div>

        {/* Share icons */}
        <div className="flex gap-5 justify-center mb-5">
          {SHARE_METHODS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: s.bg }}>
                {s.icon}
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#5A7068' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Copy link */}
        <div className="rounded-2xl px-4 py-3 flex justify-between items-center mb-3"
          style={{ background: '#F4FAF7' }}>
          <span style={{ fontSize: 12, color: '#5A7068' }} className="flex-1 truncate">
            smartspend.app/report/april2026
          </span>
          <button onClick={handleCopy}
            style={{ fontSize: 12, fontWeight: 700, color: '#00A880', marginLeft: 10 }}>
            {copied ? '✓ Đã sao chép' : 'Sao chép'}
          </button>
        </div>

        {/* More share */}
        <button onClick={() => navigate('/reports')}
          className="w-full h-12 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
          style={{ background: 'linear-gradient(135deg,#00D6A4,#00A880)', color: 'white', boxShadow: '0 4px 12px rgba(0,214,164,0.4)' }}>
          Chia sẻ thêm →
        </button>
      </div>
    </PhoneFrame>
  );
}
