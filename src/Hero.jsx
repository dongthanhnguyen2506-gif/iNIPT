import { useState, useEffect, useCallback } from 'react';
import BeMam from './BeMam';
import { IMG_B1, IMG_B2, IMG_B4, IMG_B5 } from './images';

// Slides for the hero carousel
const SLIDES = [
  {
    img: IMG_B1,
    alt: 'Mẹ bầu châu Á đứng bên cửa sổ — iNIPT sàng lọc trước sinh an toàn Invivo Lab',
    caption: 'An toàn · Không xâm lấn',
  },
  {
    img: IMG_B2,
    alt: 'Vợ chồng mẹ bầu châu Á — iNIPT 7+ gói khuyến nghị Invivo Lab',
    caption: 'Đồng hành cùng gia đình',
  },
  {
    img: IMG_B4,
    alt: 'Gia đình mẹ bầu với bé gái — iNIPT+ kèm 25 gene lặn',
    caption: 'Từ tuần thai thứ 9',
  },
  {
    img: IMG_B5,
    alt: 'Mẹ bầu với giày baby xanh — sàng lọc trước sinh iNIPT Invivo Lab',
    caption: 'Kết quả 5–7 ngày',
  },
];

const TRUST = [
  { icon: '⏰', label: 'Từ tuần\nthai thứ 9' },
  { icon: '🎯', label: 'Độ đặc\nhiệu 99,9%' },
  { icon: '📋', label: 'Kết quả\n5–7 ngày' },
  { icon: '🧬', label: '25 gene\nlặn cho mẹ' },
];

const go = id => {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(c => (c + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goTo = (i) => {
    if (isAnimating || i === current) return;
    setIsAnimating(true);
    setCurrent(i);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  // Touch swipe
  useEffect(() => {
    let sx = 0;
    const onStart = e => { sx = e.touches[0].clientX; };
    const onEnd = e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (dx < -40) next();
      if (dx > 40)  prev();
    };
    const el = document.getElementById('hero-carousel');
    if (el) {
      el.addEventListener('touchstart', onStart, { passive: true });
      el.addEventListener('touchend', onEnd, { passive: true });
      return () => {
        el.removeEventListener('touchstart', onStart);
        el.removeEventListener('touchend', onEnd);
      };
    }
  }, [next, prev]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col lg:flex-row pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f4f9ff 0%,#fdfcf8 50%,#f0fdf8 100%)' }}
      aria-label="Giới thiệu iNIPT Invivo Lab"
    >
      {/* Blob decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#1976d2,transparent 70%)' }} />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#10b981,transparent 70%)' }} />
      </div>

      {/* ── MOBILE LAYOUT: stacked ── */}
      <div className="flex flex-col flex-1 lg:hidden">

        {/* Mobile: Image carousel FIRST — compact height */}
        <div
          id="hero-carousel"
          className="relative w-full overflow-hidden"
          style={{ height: '52vw', minHeight: 200, maxHeight: 320 }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500
                ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                className="w-full h-full object-cover object-[center_15%]"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </div>
          ))}

          {/* Prev/Next arrows */}
          <button onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
              bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md
              text-slate-700 hover:bg-white transition-all z-10 active:scale-90"
            aria-label="Ảnh trước">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
              bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md
              text-slate-700 hover:bg-white transition-all z-10 active:scale-90"
            aria-label="Ảnh sau">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300
                  ${i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                aria-label={`Ảnh ${i + 1}`}
              />
            ))}
          </div>

          {/* Caption badge */}
          <div className="absolute bottom-7 right-3 bg-white/90 backdrop-blur-sm rounded-xl
            px-2.5 py-1 text-[10px] font-bold text-brand-blue shadow-sm z-10">
            {SLIDES[current].caption}
          </div>
        </div>

        {/* Mobile: Content block */}
        <div className="flex-1 px-4 pt-5 pb-24 flex flex-col">
          {/* Top pill */}
          <div className="inline-flex items-center gap-1.5 mb-3
            bg-white border border-blue-100 rounded-full px-3 py-1
            text-[11px] font-bold text-brand-blueMid shadow-sm self-start">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Xét nghiệm NIPT · Không xâm lấn · 2026
          </div>

          <h1 className="text-[26px] font-black text-slate-900 leading-[1.2] tracking-tight mb-3">
            iNIPT – Sàng lọc trước sinh
            <span className="text-brand-blue block">từ tuần thai thứ 9,</span>
            <span className="text-slate-600 font-bold text-[18px] block mt-1 leading-snug">
              an tâm hơn cho hành trình làm mẹ
            </span>
          </h1>

          <p className="text-[14px] text-slate-500 leading-relaxed mb-5">
            Trả lời 4 câu hỏi ngắn —{' '}
            <strong className="text-brand-blue">Bé Mầm</strong>{' '}
            gợi ý gói iNIPT phù hợp nhất với câu chuyện riêng của mẹ.
          </p>

          {/* CTAs */}
          <div className="flex gap-2.5 mb-5">
            <button onClick={() => go('#quiz')}
              className="btn-primary flex-1 justify-center text-[14px] py-3.5">
              🌱 Bắt đầu cùng Bé Mầm
            </button>
            <button onClick={() => go('#nipt-what')}
              className="btn-outline px-4 py-3.5 text-[13px]">
              Tìm hiểu
            </button>
          </div>

          {/* Trust grid — 2x2 compact */}
          <div className="grid grid-cols-4 gap-2">
            {TRUST.map(t => (
              <div key={t.label}
                className="bg-white border border-blue-100 rounded-xl px-2 py-2.5 text-center shadow-sm">
                <div className="text-base mb-1">{t.icon}</div>
                <div className="text-[10px] font-bold text-slate-600 leading-tight whitespace-pre-line">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT: side-by-side ── */}
      <div className="hidden lg:flex flex-1 items-center">
        <div className="container-main w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)] py-12">

            {/* Left content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 mb-5
                bg-white/80 border border-blue-100 rounded-full px-4 py-1.5
                text-xs font-bold text-brand-blueMid shadow-card">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Xét nghiệm NIPT · Không xâm lấn · Invivo Lab 2026
              </div>

              <h1 className="text-[40px] xl:text-[46px] font-black text-slate-900 leading-[1.18] tracking-tight mb-5">
                iNIPT – Sàng lọc trước sinh
                <span className="block text-brand-blue">từ tuần thai thứ 9,</span>
                <span className="block text-slate-600 font-bold text-[75%] mt-1 leading-snug">
                  an tâm hơn cho hành trình làm mẹ
                </span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-7 max-w-[480px]">
                Trả lời vài câu hỏi ngắn —{' '}
                <strong className="text-brand-blue">Bé Mầm</strong>{' '}
                sẽ gợi ý nhóm gói iNIPT phù hợp nhất với tuần thai và câu chuyện riêng của mẹ.
              </p>

              <div className="flex gap-3 mb-9">
                <button onClick={() => go('#quiz')} className="btn-primary text-base px-7 py-3.5">
                  🌱 Bắt đầu cùng Bé Mầm
                </button>
                <button onClick={() => go('#nipt-what')} className="btn-outline px-6 py-3.5">
                  iNIPT là gì?
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {TRUST.map(t => (
                  <div key={t.label}
                    className="bg-white/70 backdrop-blur-sm border border-blue-100/80
                      rounded-xl px-3 py-2.5 text-center shadow-sm hover:shadow-card transition-all">
                    <div className="text-xl mb-1">{t.icon}</div>
                    <div className="text-[11px] font-bold text-slate-600 leading-tight whitespace-pre-line">
                      {t.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image carousel */}
            <div className="relative">
              <div
                id="hero-carousel-desktop"
                className="relative rounded-3xl overflow-hidden"
                style={{ height: 500, boxShadow: '0 24px 64px -12px rgba(21,101,192,0.2)' }}
              >
                {SLIDES.map((s, i) => (
                  <div key={i}
                    className={`absolute inset-0 transition-opacity duration-700
                      ${i === current ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={s.img} alt={s.alt}
                      className="w-full h-full object-cover object-[center_15%]"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/8 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Dots desktop */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {SLIDES.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer
                        ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`}
                      aria-label={`Ảnh ${i+1}`}/>
                  ))}
                </div>
              </div>

              {/* Desktop floating cards */}
              <div className="absolute -left-12 bottom-20 animate-float
                bg-white rounded-2xl shadow-float border border-blue-50 p-3">
                <div className="flex items-end gap-2">
                  <BeMam size={48} state="wave" showBubble={false} />
                  <div className="bg-brand-blueLight rounded-xl rounded-bl-none px-3 py-2
                    text-[11px] font-bold text-brand-blue max-w-[110px] leading-relaxed">
                    Mẹ muốn biết gói phù hợp? 🌟
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 top-10 bg-white rounded-2xl shadow-card
                border border-green-100 px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xl font-black text-brand-blue leading-none">99,9%</div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Độ đặc hiệu</div>
              </div>

              <div className="absolute -right-3 bottom-32 bg-white rounded-xl shadow-card
                border border-purple-100 px-3 py-2 animate-float-delay">
                <div className="text-[11px] font-bold text-purple-600">🧬 25 gene lặn</div>
                <div className="text-[9px] text-slate-400 mt-0.5">nhóm iNIPT+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <button onClick={() => go('#quiz')}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2
          flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
        aria-label="Cuộn xuống">
        <span className="text-[10px] font-bold tracking-widest uppercase">Bắt đầu</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
