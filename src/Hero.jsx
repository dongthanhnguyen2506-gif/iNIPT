import { useState, useEffect, useCallback } from 'react';
import BeMam from './BeMam';
import { IMG_B1, IMG_B2, IMG_B4, IMG_B5 } from './images';

const SLIDES = [
  { img: IMG_B1, alt: 'Mẹ bầu châu Á — iNIPT sàng lọc trước sinh Invivo Lab', caption: 'An toàn · Không xâm lấn' },
  { img: IMG_B2, alt: 'Vợ chồng mẹ bầu châu Á — iNIPT 7+ khuyến nghị',        caption: 'Đồng hành cùng gia đình' },
  { img: IMG_B4, alt: 'Gia đình mẹ bầu với bé gái — iNIPT+ kèm gene lặn',       caption: 'Từ tuần thai thứ 9' },
  { img: IMG_B5, alt: 'Mẹ bầu với giày baby xanh — xét nghiệm NIPT Invivo Lab',  caption: 'Kết quả 5–7 ngày' },
];

const TRUST = [
  { icon: '⏰', line1: 'Từ tuần',    line2: 'thai thứ 9' },
  { icon: '🎯', line1: 'Đặc hiệu',  line2: '99,9%' },
  { icon: '📋', line1: 'Kết quả',   line2: '5–7 ngày' },
  { icon: '🧬', line1: '25 gene',   line2: 'lặn cho mẹ' },
];

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
};

export default function Hero() {
  const [cur, setCur]   = useState(0);
  const [busy, setBusy] = useState(false);

  const go = useCallback((next) => {
    if (busy) return;
    setBusy(true);
    setCur(next);
    setTimeout(() => setBusy(false), 500);
  }, [busy]);

  const next = useCallback(() => go((cur + 1) % SLIDES.length), [cur, go]);
  const prev = useCallback(() => go((cur - 1 + SLIDES.length) % SLIDES.length), [cur, go]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  // Touch swipe
  useEffect(() => {
    let sx = 0;
    const s = (e) => { sx = e.touches[0].clientX; };
    const e = (ev) => { const dx = ev.changedTouches[0].clientX - sx; if (dx < -40) next(); if (dx > 40) prev(); };
    const el = document.getElementById('hero-slides');
    if (!el) return;
    el.addEventListener('touchstart', s, { passive: true });
    el.addEventListener('touchend',   e, { passive: true });
    return () => { el.removeEventListener('touchstart', s); el.removeEventListener('touchend', e); };
  }, [next, prev]);

  return (
    <section id="hero" className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#f4f9ff 0%,#fdfcf8 50%,#f0fdf8 100%)' }} aria-label="Giới thiệu iNIPT Invivo Lab">

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col lg:hidden pt-16">

        {/* Carousel — chiếm 55vw, focus người */}
        <div id="hero-slides" className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 58vw, 340px)' }}>
          {SLIDES.map((s, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === cur ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={s.img} alt={s.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchpriority={i === 0 ? 'high' : 'auto'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
            </div>
          ))}

          {/* Prev / Next */}
          {[['←', prev, 'left-3'], ['→', next, 'right-3']].map(([label, fn, pos]) => (
            <button key={pos} onClick={fn}
              className={`absolute ${pos} top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow text-slate-700 font-bold z-10 active:scale-90`}
              aria-label={label === '←' ? 'Ảnh trước' : 'Ảnh sau'}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={label === '←' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
              </svg>
            </button>
          ))}

          {/* Dots */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                className={`rounded-full transition-all ${i === cur ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pt-5 pb-24">
          <div className="inline-flex items-center gap-1.5 bg-white border border-blue-100 rounded-full px-3 py-1 text-[11px] font-bold text-brand-blueMid shadow-sm mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Xét nghiệm NIPT · Không xâm lấn · 2026
          </div>

          <h1 className="text-[25px] font-black text-slate-900 leading-[1.2] mb-3" aria-hidden="true">
            iNIPT – Sàng lọc trước sinh
            <span className="text-brand-blue block">từ tuần thai thứ 9,</span>
            <span className="text-slate-600 font-bold text-[17px] block mt-1">an tâm hơn cho hành trình làm mẹ</span>
          </h1>

          <p className="text-[14px] text-slate-500 leading-relaxed mb-5">
            Trả lời 4 câu hỏi — <strong className="text-brand-blue">Bé Mầm</strong> gợi ý gói phù hợp nhất cho mẹ.
          </p>

          <div className="flex gap-2.5 mb-5">
            <button onClick={() => scrollTo('#quiz')} className="btn-primary flex-1 justify-center text-[14px] py-3">🌱 Bắt đầu cùng Bé Mầm</button>
            <button onClick={() => scrollTo('#nipt-what')} className="btn-outline px-4 py-3 text-[13px]">Tìm hiểu</button>
          </div>

          {/* Trust badges 4 ô */}
          <div className="grid grid-cols-4 gap-2">
            {TRUST.map(t => (
              <div key={t.line1} className="bg-white border border-blue-100 rounded-xl px-2 py-2.5 text-center shadow-sm">
                <div className="text-base mb-1">{t.icon}</div>
                <div className="text-[9px] font-bold text-slate-600 leading-tight">{t.line1}<br />{t.line2}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden lg:flex min-h-screen items-center pt-16">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">

            {/* Left */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-bold text-brand-blueMid shadow-card mb-5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Xét nghiệm NIPT · Không xâm lấn · Invivo Lab 2026
              </div>

              <h1 className="text-[42px] font-black text-slate-900 leading-[1.18] mb-5">
                iNIPT – Sàng lọc trước sinh
                <span className="block text-brand-blue">từ tuần thai thứ 9,</span>
                <span className="block text-slate-600 font-bold text-[75%] mt-1">an tâm hơn cho hành trình làm mẹ</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-7 max-w-[480px]">
                Trả lời vài câu hỏi ngắn — <strong className="text-brand-blue">Bé Mầm</strong> gợi ý nhóm gói iNIPT phù hợp nhất với tuần thai và câu chuyện của mẹ.
              </p>

              <div className="flex gap-3 mb-9">
                <button onClick={() => scrollTo('#quiz')} className="btn-primary text-base px-7 py-3.5">🌱 Bắt đầu cùng Bé Mầm</button>
                <button onClick={() => scrollTo('#nipt-what')} className="btn-outline px-6 py-3.5">iNIPT là gì?</button>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {TRUST.map(t => (
                  <div key={t.line1} className="bg-white/70 border border-blue-100 rounded-xl px-3 py-2.5 text-center shadow-sm hover:shadow-card transition-all">
                    <div className="text-xl mb-1">{t.icon}</div>
                    <div className="text-[11px] font-bold text-slate-600 leading-tight">{t.line1}<br />{t.line2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — carousel */}
            <div className="relative">
              <div id="hero-slides-desktop" className="relative rounded-3xl overflow-hidden" style={{ height: 500, boxShadow: '0 24px 64px -12px rgba(21,101,192,0.2)' }}>
                {SLIDES.map((s, i) => (
                  <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === cur ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                      loading={i === 0 ? 'eager' : 'lazy'} />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {SLIDES.map((_, i) => (
                    <button key={i} onClick={() => go(i)}
                      className={`rounded-full transition-all ${i === cur ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
                      aria-label={`Slide ${i + 1}`} />
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-12 bottom-20 animate-float bg-white rounded-2xl shadow-float border border-blue-50 p-3">
                <div className="flex items-end gap-2">
                  <BeMam size={48} state="wave" showBubble={false} />
                  <div className="bg-brand-blueLight rounded-xl rounded-bl-none px-3 py-2 text-[11px] font-bold text-brand-blue max-w-[110px] leading-relaxed">
                    Mẹ muốn biết gói phù hợp? 🌟
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 top-10 bg-white rounded-2xl shadow-card border border-green-100 px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xl font-black text-brand-blue">99,9%</div>
                <div className="text-[10px] text-slate-500 font-semibold">Độ đặc hiệu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
