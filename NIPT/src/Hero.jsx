import BeMam from './BeMam';
import { IMG_B1 } from './images';

const TRUST = [
  { icon: '⏰', label: 'Từ tuần thai thứ 9' },
  { icon: '🎯', label: 'Độ đặc hiệu 99,9%' },
  { icon: '📋', label: 'Kết quả 5–7 ngày' },
  { icon: '🧬', label: '25 gene lặn' },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden dna-bg"
      aria-label="Giới thiệu iNIPT Invivo Lab"
    >
      {/* Soft blob backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #1976d2, transparent 70%)' }}/>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }}/>
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}/>
      </div>

      <div className="container-main w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-10">

          {/* ── LEFT ── */}
          <div className="animate-fade-up order-2 lg:order-1">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 mb-5
              bg-white/80 border border-blue-100 rounded-full px-4 py-1.5
              text-xs font-bold text-brand-blueMid shadow-card">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
              Xét nghiệm NIPT · Không xâm lấn · Invivo Lab 2026
            </div>

            {/* H1 */}
            <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-slate-900
              leading-[1.18] tracking-tight mb-4">
              iNIPT – Sàng lọc trước sinh
              <span className="block text-brand-blue mt-1">từ tuần thai thứ 9,</span>
              <span className="block text-slate-700 text-[80%] font-bold mt-1 leading-snug">
                an tâm hơn cho hành trình làm mẹ
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-7 max-w-[480px]">
              Trả lời vài câu hỏi ngắn —&nbsp;
              <strong className="text-brand-blue font-bold">Bé Mầm</strong>{' '}
              sẽ gợi ý nhóm gói iNIPT phù hợp nhất với tuần thai
              và câu chuyện riêng của mẹ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('#quiz')}
                className="btn-primary text-sm sm:text-base px-6 py-3.5"
              >
                🌱 Bắt đầu cùng Bé Mầm
              </button>
              <button
                onClick={() => scrollTo('#nipt-what')}
                className="btn-outline text-sm sm:text-base px-6 py-3.5"
              >
                iNIPT là gì?
              </button>
            </div>

            {/* Trust grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TRUST.map(t => (
                <div key={t.label}
                  className="bg-white/70 backdrop-blur-sm border border-blue-100/80
                    rounded-xl px-3 py-2.5 text-center shadow-sm hover:shadow-card transition-all">
                  <div className="text-xl mb-1">{t.icon}</div>
                  <div className="text-[11px] font-bold text-slate-600 leading-tight">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3.5xl shadow-float">
                <img
                  src={IMG_B1}
                  alt="Mẹ bầu châu Á an tâm — iNIPT sàng lọc trước sinh không xâm lấn Invivo Lab"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-[center_20%]"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/8 via-transparent to-emerald-500/5"/>
                {/* Frosted bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24
                  bg-gradient-to-t from-white/20 to-transparent rounded-b-3.5xl"/>
              </div>

              {/* Floating Bé Mầm card */}
              <div className="absolute -left-10 sm:-left-14 bottom-24
                animate-float bg-white rounded-2.5xl shadow-float border border-blue-50 p-3">
                <div className="flex items-end gap-2">
                  <BeMam size={50} state="wave" showBubble={false}/>
                  <div className="bg-brand-blueLight rounded-2xl rounded-bl-none px-3 py-2
                    text-[11px] font-bold text-brand-blue max-w-[110px] leading-relaxed">
                    Mẹ muốn biết gói nào phù hợp nhé! 🌟
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="absolute -right-4 sm:-right-6 top-12
                bg-white rounded-2xl shadow-card border border-green-100 px-4 py-3
                animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-[22px] font-black text-brand-blue leading-none">99,9%</div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Độ đặc hiệu</div>
              </div>

              <div className="absolute -right-2 sm:-right-4 bottom-36
                bg-white rounded-2xl shadow-card border border-purple-100 px-3 py-2
                animate-float-delay">
                <div className="text-[11px] font-bold text-purple-600">🧬 25 gene lặn</div>
                <div className="text-[9px] text-slate-400 font-medium mt-0.5">nhóm iNIPT+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#quiz')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center
          gap-1 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
        aria-label="Cuộn xuống để bắt đầu quiz"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">Bắt đầu</span>
        <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce"/>
        </div>
      </button>
    </section>
  );
}
