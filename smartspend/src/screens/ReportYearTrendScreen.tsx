// Screen 95 – Xu hướng năm
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const MONTHS_BARS = [
  { m: 'T1', h: 65, done: true },
  { m: 'T2', h: 72, done: true },
  { m: 'T3', h: 60, done: true },
  { m: 'T4', h: 80, done: true },
  { m: 'T5', h: 100, done: true, active: true },
  { m: 'T6', h: 20, done: false },
  { m: 'T7', h: 20, done: false },
  { m: 'T8', h: 20, done: false },
  { m: 'T9', h: 20, done: false },
  { m: 'T10', h: 20, done: false },
  { m: 'T11', h: 20, done: false },
  { m: 'T12', h: 20, done: false },
];

export default function ReportYearTrendScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame dark>
      <div className="flex justify-between items-center">
        <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>Xu hướng 2026</span>
        <div className="rounded-2xl px-3 py-1 text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>Năm 2026</div>
      </div>

      {/* YTD summary */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-2">
          {[
            { label: 'Tổng thu YTD', val: '58.0M', color: '#00D6A4' },
            { label: 'Tổng chi YTD', val: '38.8M', color: '#FF6B5B' },
            { label: 'Tiết kiệm YTD', val: '19.2M', color: '#FFB830' },
          ].map((item, i) => (
            <div key={i} className="flex-1 text-center py-2">
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 18, fontWeight: 700, color: item.color }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 12-month bar chart */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>Chi tiêu hàng tháng (triệu ₫)</div>
        <div className="flex gap-0.5 items-end" style={{ height: 70 }}>
          {MONTHS_BARS.map((bar) => (
            <div key={bar.m} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm" style={{
                height: bar.h * 0.7,
                background: bar.active
                  ? '#00D6A4'
                  : bar.done
                    ? 'rgba(0,214,164,0.3)'
                    : 'rgba(255,255,255,0.1)',
                border: !bar.done ? '1px dashed rgba(255,255,255,0.15)' : undefined,
                boxShadow: bar.active ? '0 0 8px rgba(0,214,164,0.4)' : undefined,
              }} />
              <span style={{ fontSize: 8, color: bar.active ? '#00D6A4' : bar.done ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)' }}>{bar.m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(0,214,164,0.06)', border: '1px solid rgba(0,214,164,0.1)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#00D6A4', marginBottom: 6 }}>📊 Nhận xét AI</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
          Chi tiêu tháng 4 tăng so với Q1 nhưng tỷ lệ tiết kiệm đang ổn định ở mức 33%.
          Dự báo năm 2026 bạn tiết kiệm được{' '}
          <strong style={{ color: '#00D6A4' }}>58.2M ₫</strong>.
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/reports/ai')}
        className="w-full h-14 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(135deg,#00D6A4,#00A880)', color: '#0D1F1A', boxShadow: '0 8px 24px rgba(0,214,164,0.4)' }}
      >
        🤖 Xem phân tích AI chi tiết
      </button>
    </PhoneFrame>
  );
}
