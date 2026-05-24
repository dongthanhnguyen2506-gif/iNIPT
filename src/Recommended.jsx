import BeMam from './BeMam';
import { IMG_B2 } from './images';

const checks = [
  'Phù hợp với đa số mẹ bầu từ tuần thai thứ 10',
  'Bao phủ bất thường NST thường gặp (Down T21, Edwards T18, Patau T13)',
  'Bao gồm nhóm bất thường NST giới tính (Turner, Triple X, Klinefelter, Jacobs)',
  'Kèm 25 gene bệnh di truyền lặn cho mẹ',
  'Hỗ trợ bác sĩ tư vấn toàn diện cho đa số thai kỳ',
];

export default function Recommended() {
  return (
    <section
      id="recommended"
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #e8f5e9 0%, #e3f2fd 50%, #fce4ec 100%)' }}
      aria-labelledby="rec-title"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <div className="text-center mb-8">
          <div className="section-label justify-center">Gói được chọn nhiều nhất</div>
          <h2 id="rec-title" className="text-2xl sm:text-3xl font-black text-slate-900">
            Lựa chọn tối ưu — <span className="text-brand-blue">iNIPT 7+</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Image */}
            <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
              <img
                src={IMG_B2}
                alt="Vợ chồng mẹ bầu châu Á — iNIPT 7+ gói khuyến nghị Invivo Lab"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-7 lg:p-9">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 text-brand-red border border-red-200 rounded-full px-4 py-1.5 text-sm font-bold mb-4">
                ⭐ Gói được khuyến nghị cho đa số mẹ bầu
              </div>

              {/* Bé Mầm speech */}
              <div className="flex items-start gap-3 mb-5 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <BeMam size={44} animate />
                <p className="text-sm text-brand-blue font-semibold leading-relaxed">
                  "iNIPT 7+ là lựa chọn mà Bé Mầm hay gợi ý nhất cho các mẹ — vì nó cân bằng tốt giữa phạm vi sàng lọc, thông tin gene lặn và giá trị thực tiễn!" 🌿
                </p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 mb-6">
                {checks.map(c => (
                  <div key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#form" className="btn-primary flex-1 justify-center py-3.5">
                  Nhận tư vấn iNIPT 7+
                </a>
                <a href="#packages" className="btn-outline flex-1 justify-center py-3.5 text-sm">
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
