import { useState } from 'react';
import BeMam from './BeMam';
import { GENES_25 } from './quizData';
import { IMG_B3 } from './images';

function GeneModal({ onClose }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden border border-blue-100 animate-fade-up"
        style={{ boxShadow:'0 24px 80px -16px rgba(21,101,192,0.25)' }}>
        {/* Handle */}
        <div className="sm:hidden w-10 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-1"/>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0"
          style={{ background:'linear-gradient(145deg,#f4f9ff,#fdfcf8)' }}>
          <div>
            <h3 className="text-base font-black text-slate-900">🧬 25 Gene Di Truyền Lặn</h3>
            <p className="text-xs text-slate-500 mt-0.5">Sàng lọc trong nhóm gói iNIPT+</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Đóng">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-2">
          {GENES_25.map(g => (
            <div key={g.group} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-brand-blueLight transition-colors text-left"
                onClick={() => setOpen(open === g.group ? null : g.group)}>
                <span className="text-sm font-bold text-slate-700">{g.group}
                  <span className="text-slate-400 font-normal ml-1.5">({g.items.length})</span>
                </span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform ${open===g.group?'rotate-180':''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {open === g.group && (
                <div className="divide-y divide-slate-50">
                  {g.items.map(item => (
                    <div key={item.stt} className="px-4 py-3 grid grid-cols-[24px_1fr_56px] gap-2.5 items-start">
                      <span className="text-[10px] font-bold text-slate-300 pt-0.5">{item.stt}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-snug mb-0.5">{item.disease}</div>
                        <div className="text-[11px] text-slate-500 leading-relaxed">{item.note}</div>
                      </div>
                      <span className="bg-blue-50 text-brand-blue text-[10px] font-black px-2 py-1 rounded-lg text-center font-mono leading-tight">
                        {item.gene}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-amber-50 flex-shrink-0">
          <p className="text-xs text-amber-700 leading-relaxed">
            (*) Nếu mẹ mang biến thể gây bệnh, bác sĩ có thể khuyến nghị xét nghiệm gene lặn cho bố — giá ưu đãi <strong>1.800.000 VNĐ</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Recessive() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <section id="recessive" className="section bg-white" aria-labelledby="recessive-h2">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3.5xl overflow-hidden"
                style={{ boxShadow:'0 20px 60px -12px rgba(21,101,192,0.15)' }}>
                <img src={IMG_B3}
                  alt="Gia đình mẹ bầu châu Á với em bé nhỏ — xét nghiệm gene lặn iNIPT+ Invivo Lab"
                  className="w-full h-72 sm:h-[380px] object-cover object-[center_35%]"/>
              </div>
              <div className="absolute -bottom-4 right-6 bg-white rounded-2xl px-5 py-3 shadow-float border border-emerald-100">
                <div className="text-xl font-black text-emerald-600 leading-none">25 Gene</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Di truyền lặn</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="section-eyebrow">Gene di truyền lặn</div>
              <h2 id="recessive-h2" className="text-2xl sm:text-3xl font-black text-slate-900 mb-5 leading-tight">
                Gene lặn là gì?
              </h2>

              {/* Conversation */}
              <div className="flex flex-col gap-3.5 mb-5">
                <div className="flex items-start gap-3">
                  <BeMam size={44} state="ask" showBubble={false}/>
                  <div className="bg-brand-blueLight rounded-2xl rounded-tl-none border border-blue-100 px-4 py-3
                    text-sm text-brand-blue font-semibold leading-relaxed max-w-[260px]">
                    Mẹ ơi, nếu bố mẹ khỏe mạnh thì có cần quan tâm đến gene lặn không?
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse pl-8">
                  <div className="w-9 h-9 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 text-base">👩</div>
                  <div className="bg-slate-50 rounded-2xl rounded-tr-none border border-slate-200 px-4 py-3
                    text-sm text-slate-700 leading-relaxed max-w-[260px] text-right">
                    Có thể cần đấy Bé ơi! Nhiều gene bệnh không biểu hiện ở bố mẹ nhưng vẫn có thể truyền cho con...
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-4">
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  Nếu cả bố và mẹ cùng mang biến thể liên quan đến cùng một bệnh, em bé có thể có nguy cơ mắc bệnh di truyền lặn đó.
                </p>
                <p className="text-sm font-bold text-emerald-700">
                  🧬 Xét nghiệm 25 gene lặn cho mẹ giúp bác sĩ có thêm thông tin để tư vấn bước tiếp theo khi cần.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-xs text-amber-700 leading-relaxed">
                💡 Nếu mẹ mang biến thể gây bệnh, bác sĩ có thể khuyến nghị xét nghiệm gene lặn cho bố để đánh giá thêm nguy cơ di truyền cho con.
              </div>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => setModal(true)} className="btn-soft text-sm px-5 py-2.5">
                  🧬 Xem danh mục 25 gene
                </button>
                <a href="#form"
                  onClick={e=>{ e.preventDefault(); document.querySelector('#form')?.scrollIntoView({behavior:'smooth'}); }}
                  className="btn-primary text-sm px-5 py-2.5">
                  Tư vấn iNIPT+
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal && <GeneModal onClose={() => setModal(false)}/>}
    </>
  );
}
