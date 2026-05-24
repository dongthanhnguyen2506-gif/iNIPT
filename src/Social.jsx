// Team photos will be added when available

/* ── Policy ── */
export function Policy() {
  const CARDS = [
    { icon:'🎯', n:'99,9%',   l:'Độ đặc hiệu', c:'border-blue-100' },
    { icon:'📋', n:'5–7 ngày', l:'Trả kết quả', c:'border-emerald-100' },
    { icon:'💰', n:'Hỗ trợ',  l:'Chi phí chọc ối khi kết quả nguy cơ cao', c:'border-amber-100' },
    { icon:'🛡️', n:'300 triệu', l:'Bảo hiểm sau sinh tối đa', c:'border-rose-100' },
  ];

  const TABLE = [
    { r:'Độ đặc hiệu', vs:['99,9%','99,9%','99,9%','99,9%','99,9%','99,9%'], bold:false },
    { r:'Kết quả',     vs:['5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày','5–7 ngày'], bold:false },
    { r:'Hỗ trợ chọc ối', vs:['1.5tr','1.5tr','1.5tr','2tr','4.5tr','5.5tr'], bold:true },
    { r:'Bảo hiểm',    vs:['100tr','100tr','100tr','300tr','300tr','300tr'], bold:true },
  ];
  const COLS = ['Twins/Twins+','iNIPT 3','iNIPT 4','iNIPT 7/7+','iNIPT 23/23+','iNIPT Pro/Pro+'];

  return (
    <section id="policy" className="section"
      style={{ background:'linear-gradient(145deg,#0d3c7a 0%,#1565c0 60%,#1976d2 100%)' }}
      aria-labelledby="policy-h2">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-200 uppercase mb-3">
            <span className="block w-4 h-0.5 bg-blue-300 rounded-full"/>Chính sách dịch vụ
          </div>
          <h2 id="policy-h2" className="text-2xl sm:text-3xl font-black text-white">
            Chính sách hỗ trợ Invivo Lab
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CARDS.map(c => (
            <div key={c.n}
              className={`bg-white/10 border ${c.c} rounded-2xl p-5 text-center backdrop-blur-sm
                hover:bg-white/15 transition-all`}>
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
                  {COLS.map(c => <th key={c} className="py-3 px-3 text-center font-bold text-white whitespace-nowrap text-[11px]">{c}</th>)}
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

/* ── Expert team ── */
const EXPERTS = [
  { init:'PTN', name:'PGS.TS.BS. Phạm Thiện Ngọc', role:'Phụ trách chuyên môn HN', spec:'Tư vấn di truyền & Hóa sinh', color:'bg-blue-100 text-brand-blue' },
  { init:'LTT', name:'PGS.TS.BS. Lê Trung Thọ',   role:'Cố vấn chuyên môn',       spec:'Giải phẫu bệnh', color:'bg-indigo-100 text-indigo-700' },
  { init:'NTT', name:'BS. Ngô Thế Toàn',           role:'Cố vấn chuyên môn',       spec:'Chuyên môn xét nghiệm HN', color:'bg-sky-100 text-sky-700' },
  { init:'LPL', name:'TS. Lưu Phúc Lợi',           role:'Cố vấn chuyên môn',       spec:'Y sinh học phân tử', color:'bg-emerald-100 text-emerald-700' },
  { init:'PMT', name:'ThS. Phạm Minh Trung',       role:'Phụ trách chuyên môn HCM', spec:'Xét nghiệm phân tử', color:'bg-teal-100 text-teal-700' },
];

export function Team() {
  return (
    <section id="team" className="section-sm bg-white" aria-labelledby="team-h2">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Đội ngũ chuyên môn</div>
          <h2 id="team-h2" className="text-2xl sm:text-3xl font-black text-slate-900">
            Chuyên gia <span className="text-brand-blue">đồng hành cùng mẹ</span>
          </h2>
        </div>

        {/* Desktop: row. Mobile: scroll x */}
        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
          {EXPERTS.map(e => (
            <div key={e.init}
              className="card p-5 flex-shrink-0 w-52 sm:w-auto text-center hover:shadow-card-hover transition-all" style={{ scrollSnapAlign: "start" }}>
              <div className={`w-16 h-16 ${e.color} rounded-full flex items-center justify-center mx-auto mb-3
                text-xl font-black border-4 border-white shadow-card`}>
                {e.init}
              </div>
              <div className="text-xs font-black text-slate-900 leading-snug mb-1">{e.name}</div>
              <div className="text-[11px] font-bold text-brand-blue mb-1">{e.role}</div>
              <div className="text-[10px] text-slate-400">{e.spec}</div>
              <div className="text-[9px] text-slate-300 mt-2 italic">Ảnh sẽ được cập nhật</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
const REVIEWS = [
  { stars:5, text:'"Được bác sĩ tư vấn rõ ràng, tôi hiểu hơn về từng gói sàng lọc và lựa chọn được gói phù hợp với thai kỳ của mình."', author:'Mẹ bầu tại TP.HCM' },
  { stars:5, text:'"Quy trình lấy máu nhanh, nhân viên tận tình. Kết quả trả đúng hẹn và bác sĩ giải thích rõ từng chỉ số."', author:'Mẹ bầu tại Hà Nội' },
  { stars:5, text:'"Lần đầu biết đến iNIPT+ và gene lặn. Thấy an tâm hơn rất nhiều khi hiểu rõ nguy cơ di truyền trước khi sinh."', author:'Mẹ bầu IVF tại TP.HCM' },
];

export function Testimonials() {
  return (
    <section className="section-sm" style={{ background:'linear-gradient(145deg,#fdfcf8,#f4f9ff)' }}
      aria-label="Phản hồi từ mẹ bầu về iNIPT Invivo Lab">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Phản hồi</div>
          <h2 className="text-2xl font-black text-slate-900">
            Câu chuyện từ <span className="text-brand-blue">mẹ bầu</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card p-6 relative overflow-hidden hover:shadow-card-hover">
              <div className="absolute top-4 right-5 text-5xl text-blue-50 font-serif select-none leading-none">"</div>
              <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(r.stars)}</div>
              <p className="text-sm text-slate-700 italic leading-relaxed mb-4">{r.text}</p>
              <div className="text-sm font-bold text-slate-800">{r.author}</div>
              <div className="text-[10px] text-slate-400 mt-1">Nội dung minh họa — sẽ thay bằng phản hồi thực tế</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
