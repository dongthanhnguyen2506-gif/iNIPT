import { IMG_TEAM } from './images';

export function Policy() {
  const cards = [
    { icon: '🎯', title: '99,9%', sub: 'Độ đặc hiệu', color: 'bg-blue-50 border-blue-200' },
    { icon: '📋', title: '5–7 ngày', sub: 'Trả kết quả', color: 'bg-emerald-50 border-emerald-200' },
    { icon: '💰', title: 'Hỗ trợ', sub: 'Chi phí chọc ối khi kết quả nguy cơ cao (theo điều kiện từng gói)', color: 'bg-amber-50 border-amber-200' },
    { icon: '🛡️', title: '300 triệu', sub: 'Bảo hiểm sau sinh tối đa (theo chính sách áp dụng)', color: 'bg-rose-50 border-rose-200' },
  ];

  const policyTable = [
    { label: 'Gói', cols: ['iNIPT Twins / Twins+', 'iNIPT 3', 'iNIPT 4', 'iNIPT 7 / 7+', 'iNIPT 23 / 23+', 'iNIPT Pro / Pro+'] },
    { label: 'Độ đặc hiệu', cols: ['99,9%', '99,9%', '99,9%', '99,9%', '99,9%', '99,9%'] },
    { label: 'Thời gian KQ', cols: ['5–7 ngày', '5–7 ngày', '5–7 ngày', '5–7 ngày', '5–7 ngày', '5–7 ngày'] },
    { label: 'Hỗ trợ chọc ối (VNĐ)', cols: ['1.500.000', '1.500.000', '1.500.000', '2.000.000', '4.500.000', '5.500.000'], bold: true },
    { label: 'Bảo hiểm sau sinh', cols: ['100 triệu', '100 triệu', '100 triệu', '300 triệu', '300 triệu', '300 triệu'], bold: true },
  ];

  return (
    <section id="policy" className="py-16 bg-gradient-to-br from-blue-900 to-blue-700" aria-labelledby="policy-title">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-widest text-blue-200 uppercase flex items-center justify-center gap-2 mb-3">
            <span className="block w-5 h-0.5 bg-blue-300 rounded" />
            Chính sách dịch vụ
          </div>
          <h2 id="policy-title" className="text-2xl sm:text-3xl font-black text-white">
            Chính sách hỗ trợ của Invivo Lab
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cards.map(c => (
            <div key={c.title} className={`border rounded-2xl p-5 text-center ${c.color}`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-xl font-black text-slate-800">{c.title}</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Policy table */}
        <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 mb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-xs" aria-label="Bảng chính sách hỗ trợ gói iNIPT">
              <tbody>
                {policyTable.map((row, i) => (
                  <tr key={row.label} className={i === 0 ? 'bg-white/20' : 'border-t border-white/10'}>
                    <td className="py-3 px-4 font-bold text-blue-100 whitespace-nowrap">{row.label}</td>
                    {row.cols.map((c, j) => (
                      <td key={j} className={`py-3 px-3 text-center whitespace-nowrap ${row.bold ? 'font-bold text-white' : 'text-blue-100'} ${i === 0 ? 'font-black text-white text-xs' : ''}`}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-blue-200 text-center max-w-2xl mx-auto leading-relaxed">
          Chi tiết điều kiện hỗ trợ được áp dụng theo chính sách của từng gói dịch vụ và được tư vấn cụ thể bởi Invivo Lab hoặc bác sĩ phụ trách.
        </p>
      </div>
    </section>
  );
}

export function Team() {
  const experts = [
    { name: 'PGS.TS.BS. Phạm Thiện Ngọc', role: 'Phụ trách chuyên môn Invivo Lab Hà Nội', note: 'Nguyên Trưởng bộ môn Hóa sinh ĐH Y Hà Nội · Phó Chủ Tịch Hội Hóa Sinh Y Học Việt Nam' },
    { name: 'PGS.TS.BS. Lê Trung Thọ', role: 'Cố vấn chuyên môn', note: 'Trưởng khoa Giải phẫu bệnh, Bệnh viện Phổi Trung ương' },
    { name: 'BS. Ngô Thế Toàn', role: 'Cố vấn chuyên môn', note: 'Bác sĩ chuyên môn Invivo Lab Hà Nội' },
    { name: 'TS. Lưu Phúc Lợi', role: 'Cố vấn chuyên môn', note: 'Tiến sĩ tại Viện Max Planck (Đức) · Viện Garvan Sydney (Úc)' },
    { name: 'ThS. Phạm Minh Trung', role: 'Phụ trách chuyên môn Invivo Lab TP.HCM', note: 'Thạc sĩ Xét nghiệm ĐH Y Dược TP.HCM · Fellow tại Yonsei University (Seoul)' },
  ];

  return (
    <section id="team" className="py-16 bg-slate-50" aria-labelledby="team-title">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-8">
          <div className="section-label justify-center">Chuyên môn</div>
          <h2 id="team-title" className="text-2xl sm:text-3xl font-black text-slate-900">
            Đội ngũ <span className="text-brand-blue">tư vấn & chuyên môn</span>
          </h2>
        </div>
        <img
          src={IMG_TEAM}
          alt="Đội ngũ chuyên môn Invivo Lab — chuyên gia xét nghiệm, tư vấn di truyền và sản khoa"
          className="w-full rounded-3xl shadow-xl mb-6 object-contain"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experts.slice(0, 5).map(e => (
            <div key={e.name} className="bg-white rounded-2xl border border-blue-100 p-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-brand-blueLight rounded-full flex items-center justify-center mb-3 text-brand-blue font-black text-sm">
                {e.name.split(' ').pop()[0]}
              </div>
              <div className="text-sm font-black text-slate-900 mb-0.5">{e.name}</div>
              <div className="text-xs font-bold text-brand-blue mb-1.5">{e.role}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{e.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    { stars: 5, text: 'Được bác sĩ tư vấn rõ ràng, tôi hiểu hơn về từng gói sàng lọc và lựa chọn được gói phù hợp với thai kỳ của mình.', author: 'Mẹ bầu tại TP.HCM' },
    { stars: 5, text: 'Quy trình lấy máu nhanh, nhân viên tận tình. Kết quả trả đúng hẹn và bác sĩ giải thích rõ từng chỉ số.', author: 'Mẹ bầu tại Hà Nội' },
    { stars: 5, text: 'Lần đầu biết đến iNIPT+ và xét nghiệm gene lặn cho mẹ. Thấy an tâm hơn rất nhiều khi hiểu rõ nguy cơ di truyền.', author: 'Mẹ bầu IVF tại TP.HCM' },
  ];

  return (
    <section className="py-16 bg-white" aria-label="Phản hồi từ mẹ bầu">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-8">
          <div className="section-label justify-center">Phản hồi</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Câu chuyện từ <span className="text-brand-blue">mẹ bầu</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 relative">
              <div className="text-6xl text-blue-100 font-serif absolute top-3 right-5 leading-none select-none">"</div>
              <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(r.stars)}</div>
              <p className="text-sm text-slate-700 italic leading-relaxed mb-4">{r.text}</p>
              <div className="text-sm font-bold text-slate-800">{r.author}</div>
              <div className="text-xs text-slate-400 mt-1">Nội dung minh họa — sẽ thay bằng phản hồi thực tế</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
