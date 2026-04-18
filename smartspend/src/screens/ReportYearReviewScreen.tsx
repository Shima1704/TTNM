// Screen 100 – Tổng kết năm (Year in Review)
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const STATS = [
  { label: 'Thu nhập', val: '180M ₫', color: '#00D6A4' },
  { label: 'Chi tiêu', val: '121.8M ₫', color: '#FF6B5B' },
  { label: 'Giao dịch', val: '684', color: 'white' },
  { label: 'Mục tiêu đạt', val: '3 / 4 🏆', color: '#FFB830' },
];

const BADGES = [
  { icon: '💰', label: 'Người tiết kiệm' },
  { icon: '📊', label: 'Nhà phân tích' },
  { icon: '🎯', label: 'Mục tiêu' },
  { icon: '⚡', label: 'Kỷ lục' },
];

// Sparkle dots
const SPARKS = [
  { top: '8%', left: '10%', size: 3, color: '#00D6A4', opacity: 0.7 },
  { top: '15%', right: '15%', size: 4, color: '#FFB830', opacity: 0.7 },
  { top: '25%', left: '25%', size: 2, color: 'white', opacity: 0.5 },
  { top: '20%', right: '30%', size: 3, color: '#00D6A4', opacity: 0.5 },
  { top: '60%', left: '5%', size: 2, color: '#FFB830', opacity: 0.4 },
  { top: '70%', right: '8%', size: 3, color: 'white', opacity: 0.3 },
];

export default function ReportYearReviewScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame gradientBg="linear-gradient(160deg,#001A14,#0D1F1A,#001F12)">
      {/* Sparkles */}
      {SPARKS.map((s, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: s.top, left: (s as any).left, right: (s as any).right,
          width: s.size, height: s.size,
          borderRadius: '50%',
          background: s.color,
          opacity: s.opacity,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}

      {/* Hero text */}
      <div className="text-center py-2 relative z-10">
        <div style={{ fontSize: 13, fontFamily: 'Sora,sans-serif', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00D6A4', marginBottom: 8 }}>
          TỔNG KẾT
        </div>
        <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
          Năm tài chính 2026
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>
          Nguyễn Văn An · SmartScore 82/100
        </div>
      </div>

      {/* Big savings stat */}
      <div className="rounded-3xl p-6 text-center relative overflow-hidden z-10"
        style={{ background: 'rgba(0,214,164,0.08)', border: '1px solid rgba(0,214,164,0.15)' }}>
        {/* Glow blot */}
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 120, height: 120,
          background: 'radial-gradient(circle,rgba(0,214,164,0.2),transparent 70%)', borderRadius: '50%',
        }} />
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>Tổng tiết kiệm cả năm</div>
        <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 36, fontWeight: 700, color: '#00D6A4', marginBottom: 4 }}>
          58.200.000 ₫
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          Tăng <strong style={{ color: '#00D6A4' }}>22%</strong> so với năm 2025
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2.5 z-10">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl p-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 18, fontWeight: 700, color: s.color }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="rounded-2xl p-4 z-10"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>🏅 Thành tích đạt được</div>
        <div className="flex gap-4 justify-center">
          {BADGES.map((b) => (
            <div key={b.label} className="text-center">
              <div className="text-3xl mb-1">{b.icon}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/')}
        className="w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center gap-2 z-10"
        style={{ background: 'linear-gradient(135deg,#00D6A4,#00A880)', color: 'white', boxShadow: '0 8px 24px rgba(0,214,164,0.4)' }}
      >
        🎯 Đặt mục tiêu năm 2027
      </button>
    </PhoneFrame>
  );
}
