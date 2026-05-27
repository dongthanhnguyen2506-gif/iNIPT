/**
 * BeMam.jsx — Real mascot V1 + Lottie + CSS animations
 */
import Lottie from 'lottie-react';
import {
  BEMAM_WAVE, BEMAM_ASK, BEMAM_THINK,
  BEMAM_SUGGEST, BEMAM_CELEBRATE, BEMAM_GUIDE, BEMAM_WORRY
} from './images';

// All imports MUST come first — const after imports
const LOTTIE_WAVE_URL = '/images/lottie_wave.json';

const ASSETS = {
  wave:      BEMAM_WAVE,
  ask:       BEMAM_ASK,
  think:     BEMAM_THINK,
  suggest:   BEMAM_SUGGEST,
  celebrate: BEMAM_CELEBRATE,
  guide:     BEMAM_GUIDE,
  worry:     BEMAM_WORRY,
};

const LOTTIE = {
  wave: LOTTIE_WAVE_URL,
};

const CSS = `
@keyframes bm-float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  35%     { transform: translateY(-11px) rotate(1.5deg); }
  70%     { transform: translateY(-6px) rotate(-1deg); }
}
@keyframes bm-wiggle {
  0%,100% { transform: rotate(0deg) scale(1); }
  15%     { transform: rotate(-9deg) scale(1.02); }
  35%     { transform: rotate(9deg) scale(1.02); }
  55%     { transform: rotate(-5deg) scale(1); }
  75%     { transform: rotate(5deg) scale(1); }
}
@keyframes bm-think {
  0%,100% { transform: translateX(0) rotate(0deg); }
  25%     { transform: translateX(-5px) rotate(-4deg); }
  75%     { transform: translateX(5px) rotate(4deg); }
}
@keyframes bm-pulse {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.07); }
}
@keyframes bm-celebrate {
  0%  { transform: scale(0.92) rotate(-4deg); }
  20% { transform: scale(1.14) rotate(4deg) translateY(-14px); }
  40% { transform: scale(1.06) rotate(-2deg) translateY(-8px); }
  60% { transform: scale(1.12) rotate(3deg) translateY(-16px); }
  80% { transform: scale(1.04) rotate(-1deg) translateY(-5px); }
  100%{ transform: scale(1) rotate(0deg) translateY(0); }
}
@keyframes bm-sparkle {
  0%,100% { opacity:0; transform: scale(0) rotate(0deg); }
  50%     { opacity:1; transform: scale(1.2) rotate(180deg); }
}
@keyframes bm-dot-bounce {
  0%,80%,100% { transform: scale(0.6) translateY(0); opacity:0.5; }
  40%         { transform: scale(1) translateY(-5px); opacity:1; }
}
@keyframes bm-fade-slide {
  from { opacity:0; transform: translateY(8px); }
  to   { opacity:1; transform: translateY(0); }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('bm-css')) {
  const s = document.createElement('style');
  s.id = 'bm-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

const ANIM = {
  wave:      { css: 'bm-float 3.8s ease-in-out infinite',        sparkle: false },
  ask:       { css: 'bm-wiggle 2.2s ease-in-out infinite',        sparkle: false },
  think:     { css: 'bm-think 1.9s ease-in-out infinite',         sparkle: false },
  suggest:   { css: 'bm-pulse 2s ease-in-out infinite',           sparkle: true  },
  celebrate: { css: 'bm-celebrate 1.6s ease-in-out 3 forwards',   sparkle: true  },
  guide:     { css: 'bm-float 4.2s ease-in-out infinite',         sparkle: false },
  worry:     { css: 'bm-pulse 2.8s ease-in-out infinite',         sparkle: false },
};

const BUBBLE_TEXT = {
  wave:      'Xin chào mẹ! Bé Mầm đây 🌸',
  ask:       null,
  think:     null,
  suggest:   'Bé Mầm có gợi ý cho mẹ rồi! ✨',
  celebrate: 'Tuyệt vời! Chúc mừng mẹ! 🎉',
  guide:     null,
  worry:     'Mẹ sắp đến thời điểm phù hợp! ⏳',
};

const SPARKLE_POS = [
  { top: '-12%', left: '78%',  delay: 0 },
  { top: '5%',   left: '-14%', delay: 0.25 },
  { top: '-16%', left: '35%',  delay: 0.5 },
  { top: '8%',   left: '88%',  delay: 0.15 },
];

export default function BeMam({
  size = 72,
  state = 'wave',
  showBubble = true,
  bubbleText = null,
  loop = true,
  className = '',
}) {
  const cfg    = ANIM[state] || ANIM.wave;
  const src    = ASSETS[state] || ASSETS.wave;
  const lottie = LOTTIE[state];
  const bubble = bubbleText ?? (showBubble ? BUBBLE_TEXT[state] : null);

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{ gap: 8 }}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        {cfg.sparkle && SPARKLE_POS.map((pos, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              fontSize: size * 0.2,
              lineHeight: 1,
              pointerEvents: 'none',
              animation: `bm-sparkle ${1.3 + i * 0.28}s ease-in-out ${pos.delay}s infinite`,
              top: pos.top,
              left: pos.left,
            }}
          >✨</span>
        ))}

        {lottie ? (
          <Lottie
            path={lottie}
            loop={loop}
            autoplay
            style={{ width: size, height: size }}
            aria-label={`Bé Mầm — ${state}`}
          />
        ) : (
          <img
            src={src}
            alt={`Bé Mầm — ${state}`}
            width={size}
            height={size}
            draggable={false}
            style={{
              width: size,
              height: size,
              objectFit: 'contain',
              animation: cfg.css,
              display: 'block',
            }}
          />
        )}

        {state === 'think' && (
          <div style={{
            position: 'absolute', bottom: -2, right: -4,
            background: 'white', borderRadius: 20,
            border: '1.5px solid #dbeafe',
            padding: '4px 8px',
            boxShadow: '0 2px 10px rgba(21,101,192,0.12)',
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                width: 5, height: 5, borderRadius: '50%',
                background: '#1565c0', display: 'inline-block',
                animation: `bm-dot-bounce 1.3s ease-in-out ${i * 0.2}s infinite`,
              }}/>
            ))}
          </div>
        )}
      </div>

      {bubble && (
        <div style={{ animation: 'bm-fade-slide 0.35s ease forwards', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: -6, left: 22,
            width: 12, height: 12, background: 'white',
            border: '1.5px solid #dbeafe',
            borderRight: 'none', borderBottom: 'none',
            transform: 'rotate(45deg)', zIndex: 1,
          }}/>
          <div style={{
            position: 'relative', zIndex: 2,
            background: 'white', border: '1.5px solid #dbeafe',
            borderRadius: 16, borderBottomLeftRadius: 4,
            padding: '8px 14px',
            fontSize: Math.max(10, size * 0.155),
            fontWeight: 700, color: '#1565c0',
            lineHeight: 1.5,
            maxWidth: Math.max(150, size * 2.4),
            textAlign: 'center',
            boxShadow: '0 3px 14px rgba(21,101,192,0.1)',
            whiteSpace: 'pre-wrap',
          }}>
            {bubble}
          </div>
        </div>
      )}
    </div>
  );
}
