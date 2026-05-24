import { IMG_B5 } from './images';

const STEPS = [
  { n:'01', icon:'💉', color:'bg-blue-50 border-blue-100',   title:'Lấy mẫu máu mẹ',
    desc:'Chỉ một mẫu máu tĩnh mạch nhỏ — không xâm lấn, an toàn tuyệt đối cho mẹ và bé.' },
  { n:'02', icon:'🧬', color:'bg-emerald-50 border-emerald-100', title:'Phân tích cfDNA thai nhi',
    desc:'DNA tự do của thai nhi (cfDNA) trong máu mẹ được tách chiết và phân tích tại phòng xét nghiệm hiện đại.' },
  { n:'03', icon:'📋', color:'bg-amber-50 border-amber-100',  title:'Trả kết quả & tư vấn',
    desc:'Kết quả trong 5–7 ngày làm việc. Bác sĩ tư vấn hướng theo dõi phù hợp nếu có kết quả nguy cơ cao.' },
];

export default function NIPTWhat() {
  return (
    <section id="nipt-what" className="section" style={{ background: 'linear-gradient(145deg, #f8fbff 0%, #fdfcf8 100%)' }}
      aria-labelledby="nipt-what-h2">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3.5xl overflow-hidden" style={{ boxShadow:'0 20px 60px -12px rgba(21,101,192,0.18)' }}>
              <img src={IMG_B5}
                alt="Mẹ bầu châu Á cầm giày baby xanh — xét nghiệm NIPT an toàn không xâm lấn"
                className="w-full h-72 sm:h-[360px] lg:h-[420px] object-cover object-center"/>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/6 via-transparent to-emerald-500/4"/>
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-4 left-6 bg-white rounded-2xl px-5 py-3 shadow-float border border-blue-50">
              <div className="text-xl font-black text-brand-blue leading-none">5–7 ngày</div>
              <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Nhận kết quả</div>
            </div>
            <div className="absolute -top-3 right-6 bg-white rounded-2xl px-4 py-2.5 shadow-card border border-green-100">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
                Từ tuần thai thứ 9
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="section-eyebrow">Tìm hiểu về iNIPT</div>
            <h2 id="nipt-what-h2" className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
              NIPT là gì?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
              <strong className="text-brand-blue">iNIPT</strong> là xét nghiệm sàng lọc trước sinh không xâm lấn,
              sử dụng mẫu máu của mẹ để phân tích DNA tự do của thai nhi (cfDNA),
              từ đó đánh giá nguy cơ một số bất thường nhiễm sắc thể thường gặp.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3.5 mb-6 text-sm text-amber-700 leading-relaxed">
              ⚠️ <strong>Lưu ý quan trọng:</strong> iNIPT là xét nghiệm <em>sàng lọc</em>, không thay thế xét nghiệm chẩn đoán.
              Kết quả nguy cơ cao cần được bác sĩ tư vấn và có thể cần xét nghiệm chẩn đoán phù hợp.
            </div>

            <div className="flex flex-col gap-3">
              {STEPS.map(s => (
                <div key={s.n} className={`border rounded-2xl p-4 flex items-start gap-3.5 ${s.color}`}>
                  <div className="text-xl flex-shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 tracking-wider uppercase mb-0.5">Bước {s.n}</div>
                    <div className="text-sm font-bold text-slate-900 mb-1">{s.title}</div>
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
