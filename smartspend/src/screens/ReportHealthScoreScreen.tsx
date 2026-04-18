// Screen 97 – Điểm sức khoẻ tài chính
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const SCORE_ITEMS = [
  { label: '💰 Tỷ lệ tiết kiệm', score: '23/25', pct: 92, color: '#00D6A4' },
  { label: '🎯 Tuân thủ ngân sách', score: '18/25', pct: 72, color: '#FFB830' },
  { label: '📈 Xu hướng chi tiêu', score: '22/25', pct: 88, color: '#00D6A4' },
  { label: '🏆 Mục tiêu đạt', score: '19/25', pct: 76, color: '#FF6B5B' },
];

export default function ReportHealthScoreScreen() {
  const navigate = useNavigate();
  const TOTAL = 82;
  const PCT = TOTAL; // out of 100 → degrees

  return (
    <PhoneFrame dark>
      <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>Sức khoẻ tài chính</div>

      {/* Score circle */}
      <div className="rounded-3xl p-6 flex flex-col items-center gap-3"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Điểm SmartScore™</div>

        {/* Conic circle */}
        <div className="relative" style={{ width: 130, height: 130 }}>
          <div style={{
            width: 130, height: 130, borderRadius: '50%',
            background: `conic-gradient(#00D6A4 0% ${PCT}%, rgba(255,255,255,0.08) ${PCT}% 100%)`,
            boxShadow: '0 0 40px rgba(0,214,164,0.2)',
          }} />
          <div className="absolute flex flex-col items-center justify-center"
            style={{ inset: 14, background: '#0D1F1A', borderRadius: '50%' }}>
            <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 30, fontWeight: 700, color: '#00D6A4' }}>{TOTAL}</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>/ 100</span>
          </div>
        </div>

        <div className="rounded-2xl px-3 py-1 text-xs font-bold"
          style={{ background: 'rgba(0,214,164,0.15)', color: '#00D6A4' }}>⭐ Rất tốt</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Top 25% người dùng SmartSpend</div>
      </div>

      {/* Score breakdown */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Chi tiết điểm</div>
        <div className="flex flex-col gap-3">
          {SCORE_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: item.color }}>{item.score}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/reports/ai')}
        className="w-full h-14 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg,#00D6A4,#00A880)', color: '#0D1F1A', boxShadow: '0 8px 24px rgba(0,214,164,0.4)' }}
      >
        💡 Nhận gợi ý cải thiện
      </button>
    </PhoneFrame>
  );
}
