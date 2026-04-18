// src/components/PhoneFrame.tsx
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  dark?: boolean;
  lightBg?: boolean;
  gradientBg?: string;
}

const NAV_ITEMS = [
  { id: 'home',         icon: '🏠', label: 'Trang chủ', path: '/' },
  { id: 'transactions', icon: '📋', label: 'Giao dịch',  path: '/transactions' },
  { id: 'report',       icon: '📊', label: 'Báo cáo',   path: '/reports' },
  { id: 'settings',     icon: '⚙️', label: 'Cài đặt',   path: '/settings' },
];

export default function PhoneFrame({ children, dark = true, lightBg = false, gradientBg }: Props) {
  const navigate  = useNavigate();
  const { pathname } = useLocation();

  /* ---------- background ---------- */
  const bgStyle = gradientBg
    ? { background: gradientBg }
    : lightBg
    ? { background: '#F4FAF7' }
    : { background: '#0D1F1A' };

  /* ---------- colours ---------- */
  const timeColor  = dark ? 'rgba(255,255,255,0.7)' : '#0D1F1A';
  const batsColor  = dark ? 'rgba(255,255,255,0.5)' : '#0D1F1A';
  const navBg      = dark ? '#0D1F1A' : 'white';
  const navBorder  = dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)';
  const labelDim   = dark ? 'rgba(255,255,255,0.3)' : 'rgba(13,31,26,0.4)';

  return (
    <div className="min-h-screen flex flex-col relative" style={{ ...bgStyle, overflowX: 'hidden' }}>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-6 pt-4 pb-1 shrink-0">
        <span style={{ fontSize: 15, fontWeight: 700, color: timeColor }}>9:41</span>
        <span style={{ fontSize: 13, color: batsColor }}>●●●</span>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto px-5 pt-2 pb-28 flex flex-col gap-3">
        {children}
      </div>

      {/* ── Bottom Navigation ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 pb-5 pt-2"
        style={{ background: navBg, borderTop: navBorder }}
      >
        {/* Left two nav items */}
        {NAV_ITEMS.slice(0, 2).map((item) => {
          const isActive = pathname === item.path;
          return (
            <button key={item.id} onClick={() => navigate(item.path)}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 600, color: isActive ? '#00D6A4' : labelDim }}>{item.label}</span>
            </button>
          );
        })}

        {/* FAB centre */}
        <div style={{ width: 60, position: 'relative', flexShrink: 0 }}>
          <button onClick={() => navigate('/add')}
            style={{
              position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
              width: 52, height: 52, borderRadius: 16, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg,#00D6A4,#00A880)',
              boxShadow: '0 6px 20px rgba(0,214,164,0.45)',
              fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>➕</button>
        </div>

        {/* Right two nav items */}
        {NAV_ITEMS.slice(2).map((item) => {
          const isActive = item.id === 'report' ? pathname.startsWith('/report') : pathname === item.path;
          return (
            <button key={item.id} onClick={() => navigate(item.path)}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 600, color: isActive ? '#00D6A4' : labelDim }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
