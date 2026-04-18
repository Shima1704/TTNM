// Screen 96 – Phân tích AI
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame';

const AI_CARDS = [
  {
    title: 'Phân tích tháng 4',
    body: <>Chi tiêu Ăn uống của bạn tăng <strong style={{ color: '#FF6B5B' }}>+20%</strong> so với tháng trước. Nếu giữ xu hướng này, ngân sách Ăn uống sẽ vượt <strong style={{ color: '#FF6B5B' }}>500K</strong> vào tháng 5.</>,
  },
  {
    title: 'Điểm mạnh tài chính',
    body: <>Tuyệt vời! Bạn tiết kiệm được <strong style={{ color: '#00D6A4' }}>43.7%</strong> thu nhập — đây là kỷ lục cá nhân! Bạn đang vượt mục tiêu tiết kiệm 10%.</>,
  },
  {
    title: 'Đề xuất tháng 5',
    body: <>Giảm chi Ăn uống 15%, tăng đóng góp mục tiêu Du lịch thêm <strong style={{ color: '#FFB830' }}>1.000K</strong>, có thể hoàn thành 2 tháng sớm hơn.</>,
  },
];

export default function ReportAIScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame dark>
      <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: 'white' }}>🤖 Phân tích AI</div>

      {/* AI chat cards */}
      <div className="flex flex-col gap-3">
        {AI_CARDS.map((card) => (
          <div key={card.title} className="flex gap-3 items-start">
            <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              style={{ background: 'linear-gradient(135deg,#00D6A4,#00A880)' }}>🤖</div>
            <div className="flex-1 rounded-2xl rounded-tl-sm p-4"
              style={{ background: 'rgba(0,214,164,0.08)', border: '1px solid rgba(0,214,164,0.12)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#00D6A4', marginBottom: 6 }}>{card.title}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{card.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick replies */}
      <div className="flex gap-2 flex-wrap">
        {['📊 So sánh chi tiêu', '🎯 Xem mục tiêu', '💡 Gợi ý tiết kiệm'].map((q) => (
          <div key={q} className="rounded-2xl px-3 py-1.5 text-xs font-semibold cursor-pointer"
            style={{ background: 'rgba(0,214,164,0.1)', border: '1px solid rgba(0,214,164,0.2)', color: '#00D6A4' }}>
            {q}
          </div>
        ))}
      </div>

      {/* Input box — pinned to bottom via margin-top auto */}
      <div className="mt-auto flex items-center gap-2 rounded-2xl px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="flex-1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>Hỏi AI về tài chính của bạn...</span>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
          style={{ background: '#00D6A4' }}>↑</div>
      </div>
    </PhoneFrame>
  );
}
