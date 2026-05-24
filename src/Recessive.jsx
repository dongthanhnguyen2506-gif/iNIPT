import { useState } from 'react';
import BeMam from './BeMam';
import { GENES_25 } from './quizData';
import { IMG_B3 } from './images';

function GeneModal({ onClose }) {
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Danh mục 25 gene bệnh di truyền lặn"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-blue-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-emerald-50">
          <div>
            <h3 className="text-lg font-black text-slate-900">🧬 Danh mục 25 Gene Bệnh Di Truyền Lặn</h3>
            <p className="text-xs text-slate-500 mt-0.5">Được sàng lọc trong nhóm gói iNIPT+</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Gene list */}
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-2">
          {GENES_25.map(group => (
            <div key={group.group} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-blue-50 transition-colors text-left"
                onClick={() => setOpenGroup(openGroup === group.group ? null : group.group)}
              >
                <span className="text-sm font-bold text-slate-700">{group.group} <span className="text-slate-400 font-normal ml-1">({group.items.length} gene)</span></span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform ${openGroup === group.group ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openGroup === group.group && (
                <div className="divide-y divide-slate-100">
                  {group.items.map(item => (
                    <div key={item.stt} className="px-4 py-3 grid grid-cols-[28px_1fr_60px] gap-3 items-start">
                      <span className="text-xs font-bold text-slate-300 pt-0.5">{item.stt}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-tight mb-0.5">{item.disease}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{item.note}</div>
                      </div>
                      <span className="bg-blue-50 text-brand-blue text-[11px] font-black px-2 py-1 rounded-lg text-center font-mono">
                        {item.gene}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-amber-50">
          <p className="text-xs text-amber-700 leading-relaxed">
            (*) Nếu mẹ có kết quả mang biến thể gây bệnh, bác sĩ có thể khuyến nghị xét nghiệm gene lặn cho bố với giá ưu đãi <strong>1.800.000 VNĐ</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Recessive() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="recessive" className="py-16 bg-white" aria-labelledby="recessive-title">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Image */}
            <div className="relative">
              <img
                src={IMG_B3}
                alt="Gia đình mẹ bầu châu Á với em bé — xét nghiệm gene lặn cho mẹ iNIPT+"
                className="w-full h-72 lg:h-[400px] object-cover object-center rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-4 right-6 bg-white rounded-2xl shadow-xl px-5 py-3 border border-emerald-100">
                <div className="text-xl font-black text-emerald-600">25 Gene</div>
                <div className="text-xs font-semibold text-slate-500">Di truyền lặn</div>
              </div>
            </div>

            {/* Right: Story */}
            <div>
              <div className="section-label">Gene di truyền lặn</div>
              <h2 id="recessive-title" className="text-2xl sm:text-3xl font-black text-slate-900 mb-5">
                Gene lặn là gì?
              </h2>

              {/* Conversation */}
              <div className="flex flex-col gap-4 mb-6">
                {/* Bé Mầm asks */}
                <div className="flex items-start gap-3">
                  <BeMam size={44} animate={false} />
                  <div className="bg-blue-50 rounded-2xl rounded-tl-none border border-blue-100 px-4 py-3 text-sm text-brand-blue font-semibold leading-relaxed max-w-xs">
                    Mẹ ơi, nếu bố mẹ khỏe mạnh thì có cần quan tâm đến gene lặn không?
                  </div>
                </div>

                {/* Answer */}
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-9 h-9 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-base">
                    👩
                  </div>
                  <div className="bg-slate-50 rounded-2xl rounded-tr-none border border-slate-200 px-4 py-3 text-sm text-slate-700 leading-relaxed max-w-xs text-right">
                    Có thể cần đấy Bé ơi! Một số gene bệnh lặn không biểu hiện ở bố hoặc mẹ nhưng vẫn có thể truyền cho con...
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-5">
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  Nếu cả bố và mẹ cùng mang biến thể liên quan đến cùng một bệnh, em bé có thể có nguy cơ mắc bệnh di truyền lặn đó.
                </p>
                <p className="text-sm font-semibold text-emerald-700">
                  🧬 Xét nghiệm 25 gene bệnh di truyền lặn cho mẹ giúp bác sĩ có thêm thông tin để tư vấn bước tiếp theo khi cần.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-xs text-amber-700 leading-relaxed">
                💡 Nếu mẹ có kết quả mang biến thể gây bệnh, bác sĩ có thể khuyến nghị xét nghiệm gene lặn cho bố để đánh giá thêm nguy cơ di truyền cho con.
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-soft text-sm px-5 py-2.5"
                >
                  🧬 Xem danh mục 25 gene
                </button>
                <a href="#form" className="btn-primary text-sm px-5 py-2.5">
                  Tư vấn iNIPT+
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <GeneModal onClose={() => setShowModal(false)} />}
    </>
  );
}
