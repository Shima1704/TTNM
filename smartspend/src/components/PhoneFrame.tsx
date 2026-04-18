// src/components/PhoneFrame.tsx
import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  dark?: boolean;
  lightBg?: boolean;
  gradientBg?: string;
  time?: string;
  battery?: number;
  network?: string;
  className?: string;
}

export default function PhoneFrame({
  children,
  dark = true,
  lightBg = false,
  gradientBg,
  time = "9:41",
  battery = 92,
  network = "5G",
  className = "",
}: PhoneFrameProps) {
  
  const contentStyle: React.CSSProperties = gradientBg
    ? { background: gradientBg }
    : lightBg
    ? { background: '#F8FAFC', color: '#0F172A' }
    : { background: '#0A1F1C', color: 'white' };

  const textColor = lightBg ? '#111827' : 'white';

  return (
    <div
      className={`relative mx-auto shadow-2xl ${className}`}
      style={{
        width: '390px',           // iPhone 16 Pro size (gần giống)
        height: '780px',
        background: '#111111',
        borderRadius: '76px',     // iPhone 16 bo tròn hơn
        padding: '12px',
        border: '14px solid #1a1a1a',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -15px rgb(0 0 0 / 0.6)',
      }}
    >
      {/* Dynamic Island (iPhone 16 style) */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50">
        <div className="w-36 h-8 bg-black rounded-[28px] flex items-center justify-center relative">
          {/* Camera pill */}
          <div className="w-20 h-6 bg-zinc-900 rounded-full absolute" />
          {/* Camera lens */}
          <div className="w-4 h-4 bg-zinc-800 rounded-full absolute left-6" />
        </div>
      </div>

      {/* Status Bar */}
      <div
        className="h-12 flex items-center px-7 text-sm z-40 relative font-medium pt-2"
        style={{ color: textColor }}
      >
        <div className="flex-1">{time}</div>
        <div className="flex items-center gap-2">
          {network}
          <span>{battery}%</span>
          {/* Battery Icon */}
          <div className="relative w-9 h-3.5 border border-current rounded-[3px] overflow-hidden">
            <div
              className="absolute top-[2px] left-[2px] h-[9px] bg-current rounded-[1px]"
              style={{ width: `${Math.max(4, battery * 0.78)}px` }}
            />
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-2 bg-current rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Scrollable Content - Ẩn hoàn toàn thanh cuộn */}
      <div
        className="h-[calc(100%-52px)] rounded-[48px] overflow-y-auto 
                   scrollbar-none overscroll-contain"
        style={contentStyle}
      >
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/70 rounded-full z-50" />
    </div>
  );
}