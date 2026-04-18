// Screen 92 – Báo cáo thu nhập
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

export default function ReportIncomeScreen() {
  const navigate = useNavigate();
  const bars = [52, 45, 50, 50, 48, 60];
  const months = ['T11', 'T12', 'T1', 'T2', 'T3', 'T4'];

  return (
    <PhoneFrame dark>
      {/* Back + Title */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/reports')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: 'rgba(255,255,255,0.06)' }}>←</button>
        <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>Thu nhập</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl p-5" style={{ background: 'rgba(0,214,164,0.08)', border: '1px solid rgba(0,214,164,0.15)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Tổng thu · Tháng 4/2026</div>
        <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 32, fontWeight: 700, color: '#00D6A4', marginBottom: 8 }}>+15.000.000 ₫</div>
        <div className="flex gap-2">
          {['↑ 5% vs T3', '1 nguồn'].map(t => (
            <div key={t} className="rounded-2xl px-3 py-1 text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Breakdown */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Theo nguồn thu</div>
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full" style={{ background: '#00D6A4' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>💼 Lương chính</span>
            </div>
            <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 12, fontWeight: 700, color: '#00D6A4' }}>100%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full" style={{ width: '100%', background: '#00D6A4' }} />
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>15.000.000 ₫</div>
        </div>
        <div className="my-3 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="text-center py-2" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>+ Thêm nguồn thu</div>
      </div>

      {/* 6-month trend */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Xu hướng 6 tháng</div>
        <div className="flex gap-1 items-end" style={{ height: 60 }}>
          {bars.map((h, i) => {
            const isLast = i === bars.length - 1;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-sm" style={{
                  height: h, background: isLast ? '#00D6A4' : 'rgba(0,214,164,0.35)',
                  boxShadow: isLast ? '0 0 10px rgba(0,214,164,0.4)' : undefined,
                }} />
                <span style={{ fontSize: 9, color: isLast ? '#00D6A4' : 'rgba(255,255,255,0.25)' }}>{months[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </PhoneFrame>
  );
}
