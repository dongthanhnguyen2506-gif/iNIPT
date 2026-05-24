import { IMG_B5 } from './images';

const steps = [
  {
    num: '01',
    icon: '💉',
    title: 'Lấy mẫu máu mẹ',
    desc: 'Chỉ cần một mẫu máu tĩnh mạch nhỏ — không xâm lấn, an toàn cho mẹ và bé.',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    num: '02',
    icon: '🧬',
    title: 'Phân tích cfDNA',
    desc: 'DNA tự do của thai nhi (cfDNA) trong máu mẹ được tách chiết và phân tích tại phòng xét nghiệm hiện đại.',
    color: 'bg-emerald-50 border-emerald-200',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Trả kết quả & tư vấn',
    desc: 'Kết quả trong 5–7 ngày. Bác sĩ tư vấn hướng theo dõi phù hợp nếu có kết quả nguy cơ cao.',
    color: 'bg-amber-50 border-amber-200',
  },
];

export default function NIPTWhat() {
  return (
    <section id="nipt-what" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30" aria-labelledby="nipt-what-title">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <img
              src={IMG_B5}
              alt="Mẹ bầu châu Á cầm giày baby — xét nghiệm NIPT an toàn cho mẹ và bé"
              className="w-full h-80 lg:h-[420px] object-cover object-center rounded-3xl shadow-xl"
            />
            {/* Floating stat */}
            <div className="absolute -bottom-4 left-6 bg-white rounded-2xl shadow-xl px-5 py-3 border border-blue-100">
              <div className="text-2xl font-black text-brand-blue">5–7 ngày</div>
              <div className="text-xs font-semibold text-slate-500">Nhận kết quả</div>
            </div>
            <div className="absolute -top-4 right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-green-100">
              <div className="text-xs font-bold text-green-600 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Từ tuần thai thứ 10
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <div className="section-label">Tìm hiểu về iNIPT</div>
            <h2 id="nipt-what-title" className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              NIPT là gì?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-brand-blue">iNIPT</strong> là xét nghiệm sàng lọc trước sinh không xâm lấn, sử dụng mẫu máu của mẹ để phân tích DNA tự do của thai nhi (cfDNA), từ đó đánh giá nguy cơ một số bất thường nhiễm sắc thể thường gặp.
            </p>

            {/* Alert note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-700 leading-relaxed">
              ⚠️ <strong>Lưu ý:</strong> iNIPT là xét nghiệm <em>sàng lọc</em>, không thay thế xét nghiệm chẩn đoán. Kết quả nguy cơ cao cần được bác sĩ tư vấn và có thể cần xét nghiệm chẩn đoán phù hợp.
            </div>

            {/* 3 steps */}
            <div className="flex flex-col gap-3">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className={`border rounded-2xl p-4 flex items-start gap-4 ${s.color}`}
                >
                  <div className="text-2xl flex-shrink-0">{s.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 mb-0.5">Bước {s.num}</div>
                    <div className="text-sm font-bold text-slate-800 mb-1">{s.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
