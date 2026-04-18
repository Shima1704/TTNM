// Screen 91 – Báo cáo tổng quan  (hub với đầy đủ điều hướng)
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const BARS = [
  { month: 'T11', h: 50, color: 'rgba(0,214,164,0.4)' },
  { month: 'T12', h: 65, color: 'rgba(0,214,164,0.5)' },
  { month: 'T1', h: 72, color: 'rgba(255,107,91,0.5)' },
  { month: 'T2', h: 44, color: 'rgba(0,214,164,0.35)' },
  { month: 'T3', h: 60, color: 'rgba(0,214,164,0.55)' },
  { month: 'T4', h: 80, color: '#00D6A4', glow: true },
];

const PL = [
  { label: 'Thu nhập', val: '+15.0M', color: '#00D6A4', sub: '↑ 5% so tháng trước' },
  { label: 'Chi tiêu', val: '-8.45M', color: '#FF6B5B', sub: '↑ 12% so tháng trước' },
  { label: 'Tiết kiệm', val: '+6.55M', color: '#FFB830', sub: '43.7% thu nhập' },
];

// Danh sách tất cả màn hình báo cáo
const REPORT_LINKS: {
  icon: string;
  label: string;
  path: string;
  color: string;
  bg: string;
}[] = [
    { icon: '📈', label: 'Thu nhập', path: '/reports/income', color: '#00D6A4', bg: 'rgba(0,214,164,0.08)' },
    { icon: '📉', label: 'Chi tiêu', path: '/reports/expense', color: '#FF6B5B', bg: 'rgba(255,107,91,0.08)' },
    { icon: '⚖️', label: 'So sánh tháng', path: '/reports/compare', color: '#7C5CFC', bg: 'rgba(124,92,252,0.08)' },
    { icon: '📅', label: 'Xu hướng năm', path: '/reports/trend', color: '#FFB830', bg: 'rgba(255,184,48,0.08)' },
    { icon: '🤖', label: 'Phân tích AI', path: '/reports/ai', color: '#00D6A4', bg: 'rgba(0,214,164,0.06)' },
    { icon: '⭐', label: 'Sức khoẻ', path: '/reports/score', color: '#FFB830', bg: 'rgba(255,184,48,0.06)' },
    { icon: '📄', label: 'Xuất PDF', path: '/reports/export', color: '#FF6B5B', bg: 'rgba(255,107,91,0.06)' },
    { icon: '🏆', label: 'Tổng kết năm', path: '/reports/year-review', color: '#00D6A4', bg: 'rgba(0,214,164,0.08)' },
  ];

export default function ReportOverviewScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame dark>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Báo cáo phân tích</div>
          <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>Tháng 4 / 2026</div>
        </div>
        {/* Nút xuất PDF trực tiếp từ header */}
        <div
          className="dark-chip"
          onClick={() => navigate('/reports/export')}
          style={{ cursor: 'pointer' }}
        >Xuất PDF 📄</div>
      </div>

      {/* Period tabs */}
      <div style={{ display: 'flex', gap: 6 }}>
        {['Tháng', 'Quý', 'Năm', 'Tuỳ chỉnh'].map((t, i) => (
          <div key={t} className="chip" style={{
            background: i === 0 ? '#00D6A4' : 'rgba(255,255,255,0.08)',
            color: i === 0 ? '#0D1F1A' : 'rgba(255,255,255,0.5)',
          }}>{t}</div>
        ))}
      </div>

      {/* P&L summary */}
      <div className="glass-card" style={{ display: 'flex', gap: 8 }}>
        {PL.map((item, i) => (
          <div key={i} style={{
            flex: 1, textAlign: 'center',
            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
            paddingLeft: i > 0 ? 8 : undefined,
          }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{item.label}</div>
            <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: item.color }}>{item.val}</div>
            <div style={{ fontSize: 10, color: item.color, marginTop: 2 }}>{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Trend bar chart */}
      <div className="glass-card">
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>6 tháng gần nhất</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 80 }}>
          {BARS.map((bar) => (
            <div key={bar.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{
                width: '100%', background: bar.color, borderRadius: 4, height: bar.h,
                boxShadow: bar.glow ? '0 0 10px rgba(0,214,164,0.4)' : undefined,
              }} />
              <div style={{ fontSize: 9, color: bar.glow ? '#00D6A4' : 'rgba(255,255,255,0.25)' }}>{bar.month}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 10, justifyContent: 'center' }}>
          {[{ c: '#00D6A4', l: 'Thu' }, { c: '#FF6B5B', l: 'Chi' }].map(({ c, l }) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="glass-card">
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>📌 Điểm nổi bật</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>• Chi Ăn uống tăng 20% vs tháng 3</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>• Ngày 08/04 chi nhiều nhất: 1.2M</div>
          <div style={{ fontSize: 12, color: '#00D6A4' }}>• Tiết kiệm đạt 43.7% — kỷ lục cá nhân! 🎉</div>
        </div>
      </div>

      {/* ── Grid điều hướng tất cả màn hình báo cáo ── */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
          Xem chi tiết
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {REPORT_LINKS.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              style={{
                background: link.bg,
                border: `1px solid ${link.color}22`,
                borderRadius: 16,
                padding: '14px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ fontSize: 22 }}>{link.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
