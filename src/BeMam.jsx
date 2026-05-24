// BeMam — Premium mascot component with multiple emotional states
import { useState, useEffect } from 'react';

const STATES = {
  wave:    { anim: 'mascot-wave',     bubble: 'Xin chào mẹ! Bé Mầm đây! 🌸', emoji: '👋' },
  ask:     { anim: 'animate-float',   bubble: null, emoji: null },
  think:   { anim: 'mascot-thinking', bubble: 'Bé Mầm đang tìm gói phù hợp...', emoji: '🤔' },
  suggest: { anim: 'mascot-happy',    bubble: 'Bé Mầm có gợi ý cho mẹ rồi! ✨', emoji: '💡' },
  celebrate: { anim: 'mascot-happy', bubble: 'Tuyệt vời! Mẹ đã chọn được gói phù hợp! 🎉', emoji: '🎉' },
  guide:   { anim: 'animate-float',   bubble: null, emoji: null },
};

export default function BeMam({ size = 72, state = 'wave', showBubble = true, bubbleText = null, className = '' }) {
  const [sparkles, setSparkles] = useState([]);
  const stateConfig = STATES[state] || STATES.wave;

  useEffect(() => {
    if (state === 'celebrate' || state === 'suggest') {
      const s = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 60 - 30,
        y: Math.random() * -40 - 10,
        delay: i * 0.15,
        size: 8 + Math.random() * 8,
      }));
      setSparkles(s);
    } else {
      setSparkles([]);
    }
  }, [state]);

  const bubbleMsg = bubbleText || (showBubble ? stateConfig.bubble : null);

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Sparkles */}
        {sparkles.map(s => (
          <div
            key={s.id}
            className="absolute animate-sparkle"
            style={{
              left: `calc(50% + ${s.x}px)`,
              top: `${s.y}px`,
              animationDelay: `${s.delay}s`,
              fontSize: `${s.size}px`,
            }}
          >✨</div>
        ))}

        {/* Mascot SVG */}
        <div className={stateConfig.anim} style={{ width: size, height: size }}>
          <svg
            viewBox="0 0 80 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size * 1.1}
            role="img"
            aria-label="Bé Mầm mascot Invivo Lab"
          >
            {/* Glow ring for celebrate/suggest */}
            {(state === 'celebrate' || state === 'suggest') && (
              <circle cx="40" cy="56" r="28" fill="rgba(21,101,192,0.06)" className="animate-pulse-ring"/>
            )}

            {/* Body — soft teardrop */}
            <ellipse cx="40" cy="62" rx="26" ry="24" fill="url(#bodyG)"/>
            <ellipse cx="40" cy="58" rx="22" ry="18" fill="url(#bodyG2)"/>

            {/* Face */}
            <circle cx="40" cy="48" r="19" fill="url(#faceG)"/>
            <circle cx="40" cy="48" r="19" fill="url(#faceGlow)" opacity="0.3"/>

            {/* Eyes */}
            <ellipse cx="33.5" cy="46.5" rx="2.8" ry="3.2" fill="#1e3a5f"/>
            <ellipse cx="46.5" cy="46.5" rx="2.8" ry="3.2" fill="#1e3a5f"/>
            {/* Eye shine */}
            <circle cx="34.8" cy="45.3" r="1.1" fill="white"/>
            <circle cx="47.8" cy="45.3" r="1.1" fill="white"/>

            {/* Expression based on state */}
            {state === 'think' ? (
              // Thinking: slightly furrowed brow, small o mouth
              <>
                <path d="M 31 42 Q 33.5 41 36 42" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M 44 42 Q 46.5 41 49 42" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <circle cx="40" cy="51.5" r="2" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
              </>
            ) : state === 'celebrate' || state === 'suggest' ? (
              // Happy big smile + closed happy eyes
              <>
                <path d="M 32 45 Q 33 43 34.5 44.5" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M 45.5 44.5 Q 47 43 48 45" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M 33 50 Q 40 56 47 50" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </>
            ) : (
              // Default sweet smile
              <>
                <path d="M 34 50 Q 40 55 46 50" stroke="#1e3a5f" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </>
            )}

            {/* Blush cheeks */}
            <ellipse cx="28" cy="51" rx="4" ry="2.5" fill="#fca5a5" opacity="0.45"/>
            <ellipse cx="52" cy="51" rx="4" ry="2.5" fill="#fca5a5" opacity="0.45"/>

            {/* Sprout leaves */}
            <path d="M 40 30 C 40 30 32 21 34.5 13 C 35.5 9 40 11 40 11" fill="#86efac" stroke="#4ade80" strokeWidth="0.7"/>
            <path d="M 40 30 C 40 30 48 21 45.5 13 C 44.5 9 40 11 40 11" fill="#4ade80" stroke="#22c55e" strokeWidth="0.7"/>
            <path d="M 40 30 L 40 11" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Leaf shine */}
            <path d="M 36 20 Q 37 17 38.5 18" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" strokeLinecap="round" fill="none"/>

            {/* Arms */}
            {state === 'wave' || state === 'celebrate' ? (
              <>
                <path d="M 16 64 Q 11 58 14 52" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M 64 64 Q 69 56 64 50" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
                {/* Wave hand */}
                <circle cx="14" cy="50" r="3.5" fill="#bfdbfe"/>
              </>
            ) : (
              <>
                <path d="M 16 64 Q 12 60 15 55" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M 64 64 Q 68 60 65 55" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </>
            )}

            <defs>
              <radialGradient id="bodyG" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#eff6ff"/>
                <stop offset="100%" stopColor="#bfdbfe"/>
              </radialGradient>
              <radialGradient id="bodyG2" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4"/>
              </radialGradient>
              <radialGradient id="faceG" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#fffde7"/>
                <stop offset="70%" stopColor="#fef9c3"/>
                <stop offset="100%" stopColor="#fde68a" stopOpacity="0.4"/>
              </radialGradient>
              <radialGradient id="faceGlow" cx="50%" cy="20%" r="60%">
                <stop offset="0%" stopColor="white"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* State emoji badge */}
        {stateConfig.emoji && state !== 'wave' && (
          <div className="absolute -top-1 -right-1 text-base animate-bounce-gentle select-none">
            {stateConfig.emoji}
          </div>
        )}
      </div>

      {/* Speech bubble */}
      {bubbleMsg && (
        <div className="relative animate-fade-up">
          <div className="bg-white rounded-2xl rounded-bl-sm border border-blue-100 px-3.5 py-2
            text-xs font-semibold text-brand-blue leading-relaxed max-w-[170px] text-center
            shadow-card">
            {bubbleMsg}
          </div>
          {/* Bubble tail */}
          <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-blue-100 rotate-45"/>
        </div>
      )}
    </div>
  );
}
