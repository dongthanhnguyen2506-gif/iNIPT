import {
  IMG_EXPERT_PTN, IMG_EXPERT_LTT, IMG_EXPERT_NTT,
  IMG_EXPERT_LPL, IMG_EXPERT_PMT
} from './images';

/* ══════════════════════════════════
   POLICY SECTION
══════════════════════════════════ */
export function Policy() {
  const CARDS = [
    { icon:'🎯', n:'99,9%',    l:'Độ đặc hiệu',                           border:'border-blue-100' },
    { icon:'📋', n:'5–7 ngày', l:'Trả kết quả',                           border:'border-emerald-100' },
    { icon:'💰', n:'Hỗ trợ',   l:'Chi phí chọc ối khi kết quả nguy cơ cao', border:'border-amber-100' },
    { icon:'🛡️', n:'300 triệu', l:'Bảo hiểm sau sinh tối đa',             border:'border-rose-100' },
  ];

  const COLS = ['Twins/Twins+','iNIPT 3','iNIPT 4','iNIPT 7/7+','iNIPT 23/23+','iNIPT Pro/Pro+'];
  const TABLE = [
    { r:'Độ đặc hiệu',      vs:['99,9%','99,9%','99,9%','99,9%','99,9%','99,9%'],           bold:false },
    { r:'Kết quả',          vs:['5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày'], bold:false },
    { r:'Hỗ trợ chọc ối',  vs:['1.5tr','1.5tr','1.5tr','2tr','4.5tr','5.5tr'],              bold:true },
    { r:'Bảo hiểm',         vs:['100tr','100tr','100tr','300tr','300tr','300tr'],             bold:true },
  ];

  return (
    <section id="policy" className="section"
      style={{ background:'linear-gradient(145deg,#0d3c7a 0%,#1565c0 60%,#1976d2 100%)' }}
      aria-labelledby="policy-h2">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest
            text-blue-200 uppercase mb-3 justify-center">
            <span className="block w-4 h-0.5 bg-blue-300 rounded-full"/>
            Chính sách dịch vụ
          </div>
          <h2 id="policy-h2" className="text-2xl sm:text-3xl font-black text-white">
            Chính sách hỗ trợ Invivo Lab
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CARDS.map(c => (
            <div key={c.n}
              className={`bg-white/10 border ${c.border} rounded-2xl p-5 text-center
                backdrop-blur-sm hover:bg-white/15 transition-all`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-xl font-black text-white leading-none">{c.n}</div>
              <div className="text-xs text-blue-100 mt-1.5 leading-relaxed">{c.l}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/8 rounded-2xl overflow-hidden border border-white/15 mb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-xs" aria-label="Bảng chính sách hỗ trợ gói iNIPT">
              <thead>
                <tr className="bg-white/15">
                  <th className="py-3 px-4 text-left font-bold text-blue-100 whitespace-nowrap">Gói</th>
                  {COLS.map(c => (
                    <th key={c} className="py-3 px-3 text-center font-bold text-white whitespace-nowrap text-[11px]">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE.map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-3 px-4 font-bold text-blue-200 whitespace-nowrap">{row.r}</td>
                    {row.vs.map((v, j) => (
                      <td key={j} className={`py-3 px-3 text-center whitespace-nowrap
                        ${row.bold ? 'font-black text-white' : 'text-blue-100'}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-blue-200 text-center max-w-2xl mx-auto leading-relaxed">
          Chi tiết điều kiện hỗ trợ được áp dụng theo chính sách của từng gói và được tư vấn cụ thể bởi Invivo Lab hoặc bác sĩ phụ trách.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════
   EXPERT TEAM SECTION
══════════════════════════════════ */
const EXPERTS = [
  {
    photo: IMG_EXPERT_PTN,
    name: 'PGS.TS.BS. Phạm Thiện Ngọc',
    role: 'Phụ trách chuyên môn Invivo Lab Hà Nội',
    spec: 'Nguyên Trưởng bộ môn Hóa sinh ĐH Y Hà Nội · Phó Chủ Tịch Hội Hóa Sinh Y Học Việt Nam',
    tag: 'Hóa sinh · Di truyền',
    tagColor: 'bg-blue-100 text-brand-blue',
  },
  {
    photo: IMG_EXPERT_LTT,
    name: 'PGS.TS.BS. Lê Trung Thọ',
    role: 'Cố vấn chuyên môn',
    spec: 'Trưởng khoa Giải phẫu bệnh, Bệnh viện Phổi Trung ương',
    tag: 'Giải phẫu bệnh',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    photo: IMG_EXPERT_NTT,
    name: 'BS. Ngô Thế Toàn',
    role: 'Cố vấn chuyên môn',
    spec: 'Bác sĩ chuyên môn Invivo Lab Hà Nội',
    tag: 'Xét nghiệm lâm sàng',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    photo: IMG_EXPERT_LPL,
    name: 'TS. Lưu Phúc Lợi',
    role: 'Cố vấn chuyên môn',
    spec: 'Tiến sĩ tại Viện Max Planck (Đức) · Viện Garvan Sydney (Úc)',
    tag: 'Y sinh học phân tử',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    photo: IMG_EXPERT_PMT,
    name: 'ThS. Phạm Minh Trung',
    role: 'Phụ trách chuyên môn Invivo Lab TP.HCM',
    spec: 'Thạc sĩ Xét nghiệm ĐH Y Dược TP.HCM · Fellow tại Yonsei University (Seoul)',
    tag: 'Xét nghiệm phân tử',
    tagColor: 'bg-teal-100 text-teal-700',
  },
];

export function Team() {
  return (
    <section id="team" className="section-sm bg-white" aria-labelledby="team-h2">
      <div className="container-main">
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-eyebrow justify-center">Đội ngũ chuyên môn</div>
          <h2 id="team-h2" className="text-2xl sm:text-3xl font-black text-slate-900">
            Đội ngũ chuyên gia xét nghiệm <span className="text-brand-blue">Invivo Lab</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
            Đội ngũ chuyên gia đầu ngành về di truyền, xét nghiệm phân tử và y sinh học
          </p>
        </div>

        {/* Desktop: 5-column grid. Mobile: horizontal scroll with snap */}
        <div
          className="flex gap-4 pb-4 sm:grid sm:grid-cols-3 lg:grid-cols-5
            sm:gap-5 sm:overflow-visible sm:pb-0 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {EXPERTS.map((e) => (
            <div
              key={e.name}
              className="card flex-shrink-0 w-[200px] sm:w-auto overflow-hidden
                hover:shadow-card-hover transition-all group"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
                <img
                  src={e.photo}
                  alt={`${e.name} — ${e.role} tại Invivo Lab`}
                  className="w-full h-full object-cover object-top
                    transition-transform duration-500 group-hover:scale-105"
                 loading="lazy" decoding="async"/>
                {/* Subtle gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12
                  bg-gradient-to-t from-slate-900/20 to-transparent"/>
              </div>

              {/* Info */}
              <div className="p-4">
                {/* Tag */}
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1
                  rounded-full mb-2.5 ${e.tagColor}`}>
                  {e.tag}
                </span>

                <div className="text-[12px] font-black text-slate-900 leading-snug mb-1">
                  {e.name}
                </div>
                <div className="text-[11px] font-bold text-brand-blue mb-2 leading-snug">
                  {e.role}
                </div>
                <div className="text-[10px] text-slate-500 leading-relaxed">
                  {e.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <div className="flex justify-center mt-3 sm:hidden">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
            Vuốt để xem thêm
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════
   TESTIMONIALS
══════════════════════════════════ */
const REVIEWS = [
  {
    stars: 5,
    text: '"Được bác sĩ tư vấn rõ ràng, tôi hiểu hơn về từng gói sàng lọc và lựa chọn được gói phù hợp với thai kỳ của mình."',
    author: 'Mẹ bầu tại TP.HCM',
    week: 'Tuần thai 12',
    photo: null, // Thêm ảnh khi có: import IMG_MOM_1 from './images' rồi điền vào đây
  },
  {
    stars: 5,
    text: '"Quy trình lấy máu nhanh, nhân viên tận tình. Kết quả trả đúng hẹn và bác sĩ giải thích rõ từng chỉ số."',
    author: 'Mẹ bầu tại Hà Nội',
    week: 'Tuần thai 10',
    photo: null,
  },
  {
    stars: 5,
    text: '"Lần đầu biết đến iNIPT+ và gene lặn. Thấy an tâm hơn rất nhiều khi hiểu rõ nguy cơ di truyền trước khi sinh."',
    author: 'Mẹ bầu IVF tại TP.HCM',
    week: 'Tuần thai 11',
    photo: null,
  },
];

export function Testimonials() {
  return (
    <section
      className="section-sm"
      style={{ background: 'linear-gradient(145deg,#fdfcf8,#f4f9ff)' }}
      aria-label="Phản hồi từ mẹ bầu về iNIPT Invivo Lab"
    >
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Phản hồi</div>
          <h2 className="text-2xl font-black text-slate-900">
            Mẹ bầu nói gì về <span className="text-brand-blue">iNIPT Invivo Lab</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Nội dung minh họa — sẽ thay bằng phản hồi thực tế khi được khách hàng đồng ý
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card p-6 relative overflow-hidden hover:shadow-card-hover transition-all">
              {/* Quote mark */}
              <div className="absolute top-3 right-5 text-5xl text-blue-50 font-serif
                select-none leading-none pointer-events-none">"</div>

              {/* Stars */}
              <div className="text-yellow-400 text-sm mb-4 tracking-widest">
                {'★'.repeat(r.stars)}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-700 italic leading-relaxed mb-5">{r.text}</p>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {r.photo ? (
                  <img
                    src={r.photo}
                    alt={r.author}
                    className="w-11 h-11 rounded-full object-cover object-top
                      border-2 border-blue-100 flex-shrink-0"
                   loading="lazy" decoding="async"/>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-100 to-rose-100
                    flex items-center justify-center flex-shrink-0 border-2 border-pink-100 text-xl">
                    🤱
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-slate-800">{r.author}</div>
                  {r.week && (
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">{r.week}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
