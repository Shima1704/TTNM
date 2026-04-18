// Screen 98 – Xuất báo cáo PDF
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const FORMATS = [
  { id: 'pdf', icon: '📄', label: 'PDF' },
  { id: 'excel', icon: '📊', label: 'Excel' },
  { id: 'csv', icon: '📋', label: 'CSV' },
];

const PERIODS = ['Tháng 4/2026', 'Q1/2026', 'Năm 2026', 'Tuỳ chỉnh'];

const CONTENTS = [
  { id: 'summary', label: 'Tóm tắt thu chi', default: true },
  { id: 'chart', label: 'Biểu đồ danh mục', default: true },
  { id: 'transactions', label: 'Danh sách giao dịch', default: true },
  { id: 'budget', label: 'Ngân sách & tiết kiệm', default: false },
];

export default function ReportExportScreen() {
  const navigate = useNavigate();
  const [format, setFormat] = useState('pdf');
  const [period, setPeriod] = useState(PERIODS[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(CONTENTS.map((c) => [c.id, c.default]))
  );
  const [exporting, setExporting] = useState(false);

  const handleExport = () => {
    if (exporting) return;          // ngăn double-click
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      navigate('/reports/share');
    }, 1800);
  };

  return (
    <PhoneFrame lightBg>
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/reports')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm"
          style={{ background: 'white' }}>←</button>
        <span style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: '#0D1F1A' }}>Xuất báo cáo</span>
      </div>

      {/* Format */}
      <div>
        <div className="text-xs font-bold uppercase mb-2" style={{ color: '#5A7068', letterSpacing: '0.1em' }}>Định dạng</div>
        <div className="grid grid-cols-3 gap-2">
          {FORMATS.map((f) => {
            const active = format === f.id;
            return (
              <div key={f.id} onClick={() => setFormat(f.id)}
                className="rounded-2xl p-4 text-center cursor-pointer transition-all"
                style={{
                  background: active ? 'rgba(255,107,91,0.1)' : 'white',
                  border: active ? '2px solid #FF6B5B' : '2px solid rgba(0,0,0,0.06)',
                }}>
                <div className="text-3xl mb-1">{f.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: active ? '#FF6B5B' : '#5A7068' }}>
                  {f.label}{active ? ' ✓' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Period */}
      <div>
        <div className="text-xs font-bold uppercase mb-2" style={{ color: '#5A7068', letterSpacing: '0.1em' }}>Khoảng thời gian</div>
        <div className="flex gap-2 flex-wrap">
          {PERIODS.map((p) => (
            <div key={p} onClick={() => setPeriod(p)}
              className="rounded-2xl px-3 py-1.5 text-xs font-semibold cursor-pointer"
              style={{
                background: period === p ? '#00D6A4' : 'white',
                color: period === p ? '#0D1F1A' : '#5A7068',
                boxShadow: period === p ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
              }}>
              {p}{period === p ? ' ✓' : ''}
            </div>
          ))}
        </div>
      </div>

      {/* Contents */}
      <div>
        <div className="text-xs font-bold uppercase mb-2" style={{ color: '#5A7068', letterSpacing: '0.1em' }}>Nội dung bao gồm</div>
        <div className="flex flex-col gap-2">
          {CONTENTS.map((c) => (
            <div key={c.id} onClick={() => setChecked(prev => ({ ...prev, [c.id]: !prev[c.id] }))}
              className="rounded-2xl px-4 py-3 flex justify-between items-center cursor-pointer"
              style={{ background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0D1F1A' }}>{c.label}</span>
              <div className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{
                  background: checked[c.id] ? '#00D6A4' : 'white',
                  border: checked[c.id] ? 'none' : '2px solid #B2C5BF',
                }}>
                {checked[c.id] && <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>✓</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export button */}
      <button
        type="button"
        onClick={handleExport}
        disabled={exporting}
        className="w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
        style={{
          background: exporting
            ? 'rgba(0,214,164,0.5)'
            : 'linear-gradient(135deg,#00D6A4,#00A880)',
          color: 'white',
          boxShadow: '0 8px 24px rgba(0,214,164,0.4)',
          border: 'none',
          cursor: exporting ? 'not-allowed' : 'pointer',
          transform: 'scale(1)',
          transition: 'transform 0.1s, background 0.2s',
        }}
        onMouseDown={e => !exporting && (e.currentTarget.style.transform = 'scale(0.97)')}
        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {exporting ? '⏳ Đang tạo báo cáo...' : '📄 Xuất báo cáo PDF'}
      </button>
    </PhoneFrame>
  );
}
