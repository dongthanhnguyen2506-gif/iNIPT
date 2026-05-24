import BeMam from './BeMam';
import { IMG_B2 } from './images';

const CHECKS = [
  'Phù hợp đa số mẹ bầu từ tuần thai thứ 9',
  'Sàng lọc T21 (Down), T18 (Edwards), T13 (Patau)',
  'Bao gồm 4 nhóm bất thường NST giới tính',
  'Kèm 25 gene bệnh di truyền lặn cho mẹ',
  'Hỗ trợ bác sĩ tư vấn toàn diện cho từng thai kỳ',
];

export default function Recommended() {
  return (
    <section id="recommended" className="section overflow-hidden"
      style={{ background:'linear-gradient(145deg,#e8f5e9 0%,#e3f2fd 45%,#fce4ec 100%)' }}
      aria-labelledby="rec-h2">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.07]"
          style={{ background:'radial-gradient(circle,#1976d2,transparent)' }}/>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.07]"
          style={{ background:'radial-gradient(circle,#ec4899,transparent)' }}/>
      </div>
      <div className="container-main relative z-10">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Gói được chọn nhiều nhất</div>
          <h2 id="rec-h2" className="text-2xl sm:text-3xl font-black text-slate-900">
            Lựa chọn tối ưu — <span className="text-brand-blue">iNIPT 7+</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow:'0 20px 60px -12px rgba(21,101,192,0.18)' }}>
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image */}
            <div className="lg:col-span-2 h-60 lg:h-auto overflow-hidden">
              <img src={IMG_B2}
                alt="Vợ chồng mẹ bầu châu Á nhìn xuống bụng — iNIPT 7+ gói khuyến nghị"
                className="w-full h-full object-cover object-top"/>
            </div>
            {/* Content */}
            <div className="lg:col-span-3 p-7 lg:p-10">
              <div className="inline-flex items-center gap-1.5 bg-red-50 text-brand-red border border-red-200 rounded-full px-4 py-1.5 text-sm font-bold mb-5">
                ⭐ Gói khuyến nghị cho đa số mẹ bầu
              </div>

              {/* Bé Mầm speech */}
              <div className="flex items-start gap-3 mb-5 bg-brand-blueLighter rounded-2xl p-4 border border-blue-100">
                <BeMam size={44} state="suggest" showBubble={false}/>
                <p className="text-sm text-brand-blue font-semibold leading-relaxed">
                  "iNIPT 7+ là gói mà Bé Mầm gợi ý nhiều nhất — cân bằng tốt giữa phạm vi sàng lọc, gene lặn và giá trị thực tiễn cho mẹ!" 🌿
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {CHECKS.map(c => (
                  <div key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    {c}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#form"
                  onClick={e=>{ e.preventDefault(); document.querySelector('#form')?.scrollIntoView({behavior:'smooth'}); }}
                  className="btn-primary flex-1 justify-center py-3.5">
                  Nhận tư vấn iNIPT 7+
                </a>
                <a href="#packages"
                  onClick={e=>{ e.preventDefault(); document.querySelector('#packages')?.scrollIntoView({behavior:'smooth'}); }}
                  className="btn-outline flex-1 justify-center py-3.5 text-sm">
                  Xem tất cả gói
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
