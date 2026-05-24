import { useState } from 'react';
import { IMG_B3, IMG_B4 } from './images';

const tabs = [
  {
    id: 'inipt',
    label: 'iNIPT kèm vi chất thiết yếu',
    shortLabel: 'Nhóm iNIPT',
    img: IMG_B3,
    imgAlt: 'Gia đình mẹ bầu châu Á hạnh phúc — nhóm gói iNIPT Invivo Lab',
    color: 'from-blue-50 to-sky-50',
    accent: 'bg-brand-blue',
    title: 'iNIPT kèm xét nghiệm vi chất thiết yếu cho mẹ',
    desc: 'Phù hợp với mẹ bầu muốn sàng lọc bất thường nhiễm sắc thể thai nhi, đồng thời kiểm tra thêm một số chỉ số thiết yếu như công thức máu, sắt huyết thanh, calci hoặc vitamin D tùy từng gói.',
    packages: [
      { name: 'iNIPT Twins', note: 'Dành cho song thai', color: 'bg-purple-100 text-purple-700' },
      { name: 'iNIPT 3', note: 'Cơ bản', color: 'bg-slate-100 text-slate-600' },
      { name: 'iNIPT 4', note: 'Mở rộng NST giới tính', color: 'bg-blue-100 text-blue-700' },
      { name: 'iNIPT 7', note: 'Tiêu chuẩn', color: 'bg-blue-100 text-blue-700' },
      { name: 'iNIPT 23', note: 'Mở rộng', color: 'bg-indigo-100 text-indigo-700' },
      { name: 'iNIPT Pro', note: 'Chuyên sâu', color: 'bg-indigo-100 text-indigo-700' },
    ],
    hint: 'Tặng kèm gói xét nghiệm vi chất (trị giá 178.000–505.000 VNĐ) tùy gói được chọn',
  },
  {
    id: 'inipt-plus',
    label: 'iNIPT+ kèm 25 gene lặn',
    shortLabel: 'Nhóm iNIPT+',
    img: IMG_B4,
    imgAlt: 'Gia đình mẹ bầu với bé gái — nhóm gói iNIPT+ kèm gene lặn cho mẹ',
    color: 'from-emerald-50 to-teal-50',
    accent: 'bg-emerald-600',
    title: 'iNIPT+ kèm 25 gene bệnh di truyền lặn cho mẹ',
    desc: 'Ngoài sàng lọc NIPT đầy đủ, nhóm iNIPT+ giúp mẹ đánh giá thêm nguy cơ mang gene bệnh di truyền lặn. Phù hợp với mẹ muốn kiểm tra sâu hơn, khách IVF, thai quý, có tiền sử gia đình hoặc cần tư vấn di truyền.',
    packages: [
      { name: 'iNIPT Twins+', note: 'Song thai + gene lặn', color: 'bg-purple-100 text-purple-700' },
      { name: 'iNIPT 7+', note: '★ Khuyến nghị', color: 'bg-red-100 text-red-600', rec: true },
      { name: 'iNIPT 23+', note: 'Mở rộng', color: 'bg-emerald-100 text-emerald-700' },
      { name: 'iNIPT Pro+', note: 'Chuyên sâu', color: 'bg-teal-100 text-teal-700' },
    ],
    hint: '✔ Kèm 25 gene bệnh di truyền lặn cho mẹ · Xét nghiệm gene lặn cho bố ưu đãi 1.800.000 VNĐ nếu cần',
  },
];

export default function Packages() {
  const [active, setActive] = useState('inipt-plus');
  const tab = tabs.find(t => t.id === active);

  return (
    <section id="packages" className="py-16 bg-white" aria-labelledby="packages-title">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-8">
          <div className="section-label justify-center">Danh mục gói xét nghiệm</div>
          <h2 id="packages-title" className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            2 Nhóm gói <span className="text-brand-blue">iNIPT</span> của Invivo Lab
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Mỗi nhóm được thiết kế cho nhu cầu khác nhau — từ sàng lọc thiết yếu đến đánh giá chuyên sâu di truyền.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-slate-100 rounded-2xl p-1.5 mb-8 max-w-lg mx-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
                active === t.id
                  ? 'bg-white shadow-md text-brand-blue'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.shortLabel}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={`rounded-3xl bg-gradient-to-br ${tab.color} border border-blue-100 overflow-hidden shadow-lg`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="h-56 lg:h-auto overflow-hidden">
              <img
                src={tab.img}
                alt={tab.imgAlt}
                className="w-full h-full object-cover object-center lg:object-top transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col justify-between">
              <div>
                <span className={`inline-block ${tab.accent} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {tab.shortLabel}
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug">{tab.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{tab.desc}</p>

                {/* Package chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tab.packages.map(pkg => (
                    <span
                      key={pkg.name}
                      className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${pkg.color} ${pkg.rec ? 'ring-2 ring-red-300' : ''}`}
                    >
                      {pkg.rec && '⭐ '}
                      {pkg.name}
                    </span>
                  ))}
                </div>

                {/* Hint */}
                <div className="bg-white/70 rounded-xl px-4 py-3 text-xs text-slate-600 border border-white leading-relaxed mb-5">
                  {tab.hint}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#form" className="btn-primary flex-1 justify-center text-sm py-3">
                  Nhận tư vấn gói phù hợp
                </a>
                <a href="#quiz" className="btn-soft flex-1 justify-center text-sm py-3">
                  🌱 Để Bé Mầm gợi ý
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Price hint */}
        <div className="mt-5 text-center text-xs text-slate-400 bg-slate-50 rounded-xl px-5 py-3 border border-slate-200 max-w-lg mx-auto">
          💬 Gói iNIPT chỉ từ <strong className="text-brand-red">1.500.000 VNĐ</strong> — liên hệ Invivo Lab để nhận tư vấn bảng giá đầy đủ và chính sách phù hợp.
        </div>
      </div>
    </section>
  );
}
