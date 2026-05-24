import { useState } from 'react';
import { IMG_B3, IMG_B4 } from './images';

const TABS = [
  {
    id: 'plus', label: 'iNIPT+ gene lặn', short: 'iNIPT+',
    img: IMG_B4, imgAlt: 'Gia đình mẹ bầu với bé gái — nhóm iNIPT+ kèm 25 gene lặn Invivo Lab',
    accent: 'bg-emerald-600', badge: 'Nhóm iNIPT+',
    title: 'iNIPT+ kèm 25 gene bệnh di truyền lặn cho mẹ',
    desc: 'Ngoài sàng lọc NIPT đầy đủ, nhóm iNIPT+ giúp mẹ đánh giá thêm nguy cơ mang gene bệnh di truyền lặn. Phù hợp với mẹ muốn kiểm tra sâu hơn, khách IVF, thai quý, có tiền sử gia đình.',
    pkgs: [
      { n:'iNIPT Twins+', t:'Song thai + gene lặn', c:'bg-purple-100 text-purple-700' },
      { n:'iNIPT 7+',     t:'★ Khuyến nghị',        c:'bg-red-100 text-brand-red',    rec:true },
      { n:'iNIPT 23+',    t:'Mở rộng',              c:'bg-emerald-100 text-emerald-700' },
      { n:'iNIPT Pro+',   t:'Chuyên sâu',           c:'bg-teal-100 text-teal-700' },
    ],
    hint: '✔ Kèm 25 gene bệnh di truyền lặn · Xét nghiệm gene lặn cho bố ưu đãi nếu cần',
    ctaClass: 'btn-primary',
  },
  {
    id: 'inipt', label: 'iNIPT vi chất', short: 'iNIPT',
    img: IMG_B3, imgAlt: 'Gia đình mẹ bầu hạnh phúc — nhóm gói iNIPT kèm vi chất Invivo Lab',
    accent: 'bg-brand-blue', badge: 'Nhóm iNIPT',
    title: 'iNIPT kèm xét nghiệm vi chất thiết yếu cho mẹ',
    desc: 'Sàng lọc bất thường NST thai nhi, đồng thời tặng kèm xét nghiệm vi chất thiết yếu như công thức máu, sắt huyết thanh, calci hoặc vitamin D tùy gói.',
    pkgs: [
      { n:'iNIPT Twins', t:'Dành cho song thai',  c:'bg-purple-100 text-purple-700' },
      { n:'iNIPT 3',     t:'Cơ bản',              c:'bg-slate-100 text-slate-600' },
      { n:'iNIPT 4',     t:'Mở rộng NST giới tính', c:'bg-blue-100 text-blue-700' },
      { n:'iNIPT 7',     t:'Tiêu chuẩn',          c:'bg-blue-100 text-blue-700' },
      { n:'iNIPT 23',    t:'Mở rộng',             c:'bg-indigo-100 text-indigo-700' },
      { n:'iNIPT Pro',   t:'Chuyên sâu',          c:'bg-indigo-100 text-indigo-700' },
    ],
    hint: '🎁 Tặng kèm xét nghiệm vi chất (trị giá 178.000–505.000 VNĐ) tùy gói được chọn',
    ctaClass: 'btn-outline',
  },
];

export default function Packages() {
  const [active, setActive] = useState('plus');
  const tab = TABS.find(t => t.id === active);

  return (
    <section id="packages" className="section bg-white" aria-labelledby="packages-h2">
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Danh mục gói</div>
          <h2 id="packages-h2" className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            2 Nhóm gói <span className="text-brand-blue">iNIPT</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
            Từ sàng lọc thiết yếu đến đánh giá chuyên sâu di truyền — mỗi nhóm cho nhu cầu khác nhau.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-slate-100 rounded-2xl p-1.5 mb-7 max-w-sm mx-auto gap-1">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200
                ${active === t.id ? 'bg-white shadow-card text-brand-blue' : 'text-slate-500 hover:text-slate-700'}`}>
              {t.short}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="card overflow-hidden animate-fade-in max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-0">
            <div className="h-52 sm:h-auto overflow-hidden">
              <img src={tab.img} alt={tab.imgAlt}
                className="w-full h-full object-cover object-[center_25%] transition-all duration-500"/>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className={`inline-block ${tab.accent} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {tab.badge}
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-3 leading-snug">{tab.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{tab.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tab.pkgs.map(p => (
                    <span key={p.n}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full ${p.c} ${p.rec ? 'ring-2 ring-red-200' : ''}`}>
                      {p.rec && '⭐ '}{p.n}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-500 bg-slate-50 rounded-xl px-3 py-2.5 leading-relaxed mb-5">
                  {tab.hint}
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <a href="#form"
                  onClick={e => { e.preventDefault(); document.querySelector('#form')?.scrollIntoView({ behavior:'smooth' }); }}
                  className={`${tab.ctaClass} justify-center text-sm py-3`}>
                  Nhận tư vấn gói phù hợp
                </a>
                <a href="#quiz"
                  onClick={e => { e.preventDefault(); document.querySelector('#quiz')?.scrollIntoView({ behavior:'smooth' }); }}
                  className="btn-ghost text-sm py-3 justify-center">
                  🌱 Để Bé Mầm gợi ý
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center text-xs text-slate-400 bg-slate-50 rounded-xl px-5 py-3 border border-slate-200 max-w-md mx-auto">
          💬 Gói iNIPT chỉ từ <strong className="text-brand-red">1.500.000 VNĐ</strong> — liên hệ để nhận tư vấn bảng giá đầy đủ
        </div>
      </div>
    </section>
  );
}
