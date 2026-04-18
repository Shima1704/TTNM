// Screen 94 – So sánh tháng
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const DELTAS = [
  { emoji: '🍔', name: 'Ăn uống', delta: '+20%', up: true },
  { emoji: '🚗', name: 'Di chuyển', delta: '-8%', up: false },
  { emoji: '🛒', name: 'Mua sắm', delta: '+5%', up: true },
  { emoji: '🎬', name: 'Giải trí', delta: '-12%', up: false },
];

// [T3, T4] pairs per category
const PAIRS = [
  { t3: 85, t4: 100, color3: 'rgba(255,255,255,0.2)', color4: '#FF6B5B', shadow4: 'rgba(255,107,91,0.3)', label: 'Ăn uống' },
  { t3: 45, t4: 40, color3: 'rgba(0,214,164,0.3)', color4: '#00D6A4', shadow4: 'rgba(0,214,164,0.3)', label: 'Di chuyển' },
  { t3: 62, t4: 60, color3: 'rgba(255,184,48,0.35)', color4: '#FFB830', shadow4: 'rgba(255,184,48,0.3)', label: 'Mua sắm' },
  { t3: 65, t4: 50, color3: 'rgba(124,92,252,0.35)', color4: '#7C5CFC', shadow4: 'rgba(124,92,252,0.3)', label: 'Giải trí' },
];

export default function ReportCompareScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame dark>
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/reports')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: 'rgba(255,255,255,0.06)' }}>←</button>
        <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>So sánh tháng</span>
      </div>

      {/* Month vs month totals */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex justify-between mb-4">
          <div className="text-center flex-1">
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Tháng 3/2026</div>
            <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 16, fontWeight: 700, color: 'white' }}>8.050K</div>
          </div>
          <div className="w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="text-center flex-1">
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Tháng 4/2026</div>
            <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 16, fontWeight: 700, color: '#FF6B5B' }}>8.450K</div>
          </div>
        </div>

        {/* Side-by-side bars */}
        <div className="flex gap-1 items-end" style={{ height: 70 }}>
          {PAIRS.map((p) => (
            <div key={p.label} className="flex gap-0.5 flex-1">
              <div className="flex-1 rounded" style={{ height: p.t3 * 0.7, background: p.color3 }} />
              <div className="flex-1 rounded" style={{ height: p.t4 * 0.7, background: p.color4, boxShadow: `0 0 8px ${p.shadow4}` }} />
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-1">
          {PAIRS.map((p) => (
            <div key={p.label} className="flex-1 text-center" style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>{p.label}</div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-3 justify-center">
          {[{ color: 'rgba(255,255,255,0.3)', label: 'T3/2026' }, { color: '#FF6B5B', label: 'T4/2026' }].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category deltas */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Thay đổi theo danh mục</div>
        <div className="flex flex-col gap-3">
          {DELTAS.map((d) => (
            <div key={d.name} className="flex justify-between items-center">
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{d.emoji} {d.name}</span>
              <div className="rounded-2xl px-3 py-1 text-xs font-bold" style={{
                background: d.up ? 'rgba(255,107,91,0.15)' : 'rgba(0,214,164,0.15)',
                color: d.up ? '#FF6B5B' : '#00D6A4',
              }}>
                {d.up ? '↑' : '↓'} {d.delta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
