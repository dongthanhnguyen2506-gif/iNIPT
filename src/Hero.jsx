import BeMam from './BeMam';
import { IMG_B1 } from './images';

const trustBadges = [
  { icon: '⏰', label: 'Từ tuần thai thứ 10' },
  { icon: '🎯', label: 'Độ đặc hiệu 99,9%' },
  { icon: '📋', label: 'Trả kết quả 5–7 ngày' },
  { icon: '🧬', label: '25 gene lặn cho mẹ' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #fef9f0 50%, #f0fdf8 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100 rounded-full opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="animate-fade-up">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-blue shadow-sm mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Xét nghiệm NIPT · Không xâm lấn · iNIPT 2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight mb-4">
              iNIPT – Sàng lọc trước sinh<br />
              <span className="text-brand-blue">từ tuần thai thứ 10,</span><br />
              an tâm hơn cho hành trình làm mẹ
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6 max-w-lg">
              Trả lời vài câu hỏi ngắn, <strong className="text-brand-blue">Bé Mầm</strong> sẽ gợi ý nhóm gói iNIPT
              phù hợp với tuần thai, nhu cầu và câu chuyện riêng của mẹ.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#quiz" className="btn-primary text-base px-7 py-3.5">
                <span>🌱</span>
                Bắt đầu cùng Bé Mầm
              </a>
              <a href="#nipt-what" className="btn-outline text-base px-6 py-3.5">
                iNIPT là gì?
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-3 py-2.5 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-lg mb-0.5">{b.icon}</div>
                  <div className="text-xs font-bold text-slate-600 leading-tight">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={IMG_B1}
                alt="Mẹ bầu châu Á đứng bên cửa sổ tràn đầy ánh sáng — iNIPT sàng lọc trước sinh Invivo Lab"
                className="w-full max-w-sm lg:max-w-md h-[480px] object-cover object-top rounded-3xl shadow-2xl"
              />
              {/* Overlay gradient left */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f0f7ff]/40 to-transparent pointer-events-none" />

              {/* Floating Bé Mầm */}
              <div className="absolute -left-8 bottom-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-blue-100 animate-float">
                <div className="flex items-end gap-2">
                  <BeMam size={48} animate={false} />
                  <div className="bg-brand-blueLight rounded-2xl rounded-bl-none px-3 py-2 text-xs font-semibold text-brand-blue max-w-[130px] leading-relaxed">
                    Mẹ muốn biết gói nào phù hợp nhé! 🌟
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 border border-green-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-black text-brand-blue leading-none">99,9%</div>
                <div className="text-xs text-slate-500 font-semibold">Độ đặc hiệu</div>
              </div>

              {/* Gene badge */}
              <div className="absolute -right-2 bottom-28 bg-white rounded-2xl shadow-lg px-3 py-2 border border-purple-100 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-xs font-bold text-purple-600">🧬 25 gene lặn</div>
                <div className="text-[10px] text-slate-400 font-medium">nhóm iNIPT+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
