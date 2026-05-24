// Bé Mầm mascot — a cute sprout/seedling character
export default function BeMam({ size = 64, animate = true, speaking = false }) {
  return (
    <div
      className={`inline-flex flex-col items-center gap-1 ${animate ? 'animate-float' : ''}`}
      style={{ width: size }}
    >
      <svg
        width={size}
        height={size * 1.1}
        viewBox="0 0 60 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bé Mầm mascot"
      >
        {/* Body — soft rounded teardrop */}
        <ellipse cx="30" cy="40" rx="20" ry="22" fill="#dbeafe" />
        <ellipse cx="30" cy="40" rx="20" ry="22" fill="url(#bodyGrad)" />

        {/* Face */}
        <circle cx="30" cy="34" r="14" fill="#fef9c3" />
        <circle cx="30" cy="34" r="14" fill="url(#faceGrad)" />

        {/* Eyes */}
        <ellipse cx="25" cy="33" rx="2.2" ry="2.5" fill="#1e3a5f" />
        <ellipse cx="35" cy="33" rx="2.2" ry="2.5" fill="#1e3a5f" />
        <circle cx="25.8" cy="32.2" r="0.8" fill="white" />
        <circle cx="35.8" cy="32.2" r="0.8" fill="white" />

        {/* Smile */}
        <path d="M 25 37.5 Q 30 41 35 37.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Cheeks */}
        <circle cx="21" cy="37" r="3" fill="#fca5a5" opacity="0.5" />
        <circle cx="39" cy="37" r="3" fill="#fca5a5" opacity="0.5" />

        {/* Sprout/leaf on top */}
        <path d="M30 21 C30 21 24 14 26 9 C27 6 30 8 30 8" fill="#86efac" stroke="#4ade80" strokeWidth="0.5" />
        <path d="M30 21 C30 21 36 14 34 9 C33 6 30 8 30 8" fill="#4ade80" stroke="#22c55e" strokeWidth="0.5" />
        <path d="M30 21 L30 8" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />

        {/* Arms */}
        <path d="M12 42 Q8 38 10 34" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M48 42 Q52 38 50 34" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Gradients */}
        <defs>
          <radialGradient id="bodyGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </radialGradient>
          <radialGradient id="faceGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fffde7" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>

      {speaking && (
        <div className="bg-white border border-blue-100 rounded-2xl rounded-bl-none px-3 py-1.5 text-xs text-blue-700 font-semibold shadow-sm max-w-[120px] text-center leading-tight animate-fade-up">
          Bé Mầm
        </div>
      )}
    </div>
  );
}
