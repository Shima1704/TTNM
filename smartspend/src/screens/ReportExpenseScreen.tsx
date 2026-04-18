// Screen 93 – Báo cáo chi tiêu
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const CATEGORIES = [
  { color: '#FF6B5B', pct: 38, label: '🍔 Ăn uống' },
  { color: '#00D6A4', pct: 20, label: '🚗 Di chuyển' },
  { color: '#FFB830', pct: 14, label: '🛒 Mua sắm' },
  { color: '#7C5CFC', pct: 12, label: '🎬 Giải trí' },
  { color: 'rgba(255,255,255,0.15)', pct: 16, label: 'Khác' },
];

const TOP3 = [
  { rank: '#1', name: 'Siêu thị Lotte · 08/04', amt: '-340K' },
  { rank: '#2', name: 'Gym VMA · 01/04', amt: '-500K' },
  { rank: '#3', name: 'Netflix Premium · 09/04', amt: '-180K' },
];

// Build conic-gradient stops
function buildConic(cats: typeof CATEGORIES) {
  let acc = 0;
  return cats.map(c => {
    const start = acc;
    acc += c.pct;
    return `${c.color} ${start}% ${acc}%`;
  }).join(', ');
}

export default function ReportExpenseScreen() {
  const navigate = useNavigate();
  const conic = buildConic(CATEGORIES);

  return (
    <PhoneFrame dark>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/reports')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: 'rgba(255,255,255,0.06)' }}>←</button>
        <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>Chi tiêu</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl p-5" style={{ background: 'rgba(255,107,91,0.08)', border: '1px solid rgba(255,107,91,0.15)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Tổng chi · Tháng 4/2026</div>
        <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 32, fontWeight: 700, color: '#FF6B5B', marginBottom: 8 }}>-8.450.000 ₫</div>
        <div className="flex gap-2">
          {['↑ 12% vs T3', '58 giao dịch'].map(t => (
            <div key={t} className="rounded-2xl px-3 py-1 text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Donut */}
      <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="relative shrink-0" style={{ width: 90, height: 90 }}>
          <div style={{ width: 90, height: 90, borderRadius: '50%', background: `conic-gradient(${conic})` }} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ inset: 14, position: 'absolute', background: '#0D1F1A', borderRadius: '50%' }}>
            <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 11, fontWeight: 700, color: 'white' }}>8.45M</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          {CATEGORIES.map((c) => (
            <div key={c.label} className="flex justify-between">
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-sm" style={{ background: c.color }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{c.label}</span>
              </div>
              <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 11, fontWeight: 700, color: 'white' }}>{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Top 3 chi tiêu lớn nhất</div>
        <div className="flex flex-col gap-2">
          {TOP3.map((item) => (
            <div key={item.rank} className="flex items-center gap-2">
              <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.2)', minWidth: 24 }}>{item.rank}</span>
              <span className="flex-1" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{item.name}</span>
              <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 12, fontWeight: 700, color: '#FF6B5B' }}>{item.amt}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
