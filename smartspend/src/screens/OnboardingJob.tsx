import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 'office',
    icon: '💼',
    label: 'Nhân viên văn phòng',
    desc: 'Thu nhập cố định hàng tháng',
  },
  {
    id: 'student',
    icon: '🎓',
    label: 'Sinh viên',
    desc: 'Học bổng, trợ cấp, làm thêm',
  },
  {
    id: 'freelance',
    icon: '🚀',
    label: 'Freelancer / Tự doanh',
    desc: 'Thu nhập biến động theo dự án',
  },
  {
    id: 'business',
    icon: '🏢',
    label: 'Chủ doanh nghiệp',
    desc: 'Quản lý tài chính cá nhân & công ty',
  },
  {
    id: 'retired',
    icon: '🏡',
    label: 'Nội trợ / Nghỉ hưu',
    desc: 'Quản lý ngân sách gia đình',
  },
];

const OnboardingJob = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('office');

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ maxWidth: 430, margin: '0 auto' }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1">
        <span className="text-sm font-semibold text-gray-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-3 rounded-sm bg-gray-900 opacity-80" />
          <div className="w-1 h-3 rounded-sm bg-gray-900 opacity-80" />
          <div className="w-5 h-3 rounded-full border-2 border-gray-900 opacity-80" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-2 pb-4">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '20%' }} />
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col">
        <p className="text-xs font-semibold text-[#00C48C] tracking-widest uppercase mb-3">
          Bước 2 / 10 · Về bạn
        </p>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
          Nghề nghiệp<br />của bạn là gì?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Chúng tôi sẽ gợi ý danh mục phù hợp hơn.
        </p>

        {/* Options */}
        <div className="space-y-3 flex-1">
          {jobs.map(job => (
            <button
              key={job.id}
              onClick={() => setSelected(job.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 text-left transition-all ${
                selected === job.id
                  ? 'border-[#00C48C] bg-[#f0fdf9]'
                  : 'border-gray-100 bg-gray-50 hover:border-gray-200'
              }`}
            >
              <span className="text-2xl">{job.icon}</span>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${selected === job.id ? 'text-[#00916a]' : 'text-gray-800'}`}>
                  {job.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{job.desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                selected === job.id ? 'border-[#00C48C] bg-[#00C48C]' : 'border-gray-300'
              }`}>
                {selected === job.id && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="pb-8 pt-6">
          <button
            onClick={() => navigate('/onboarding/goals')}
            className="w-full py-4 bg-[#00C48C] text-white font-semibold rounded-2xl text-base hover:bg-[#00b07e] active:scale-95 transition-all shadow-md"
          >
            Tiếp tục →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingJob;