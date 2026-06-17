import { useState } from 'react';

const FAQS = [
  {
    q: 'iNIPT có phải xét nghiệm chẩn đoán không?',
    a: 'Không. iNIPT là xét nghiệm sàng lọc, không phải chẩn đoán. Nếu kết quả có nguy cơ cao, mẹ bầu cần được bác sĩ tư vấn và có thể cần xét nghiệm chẩn đoán phù hợp (chọc ối hoặc sinh thiết gai nhau).',
  },
  {
    q: 'Từ tuần thai thứ mấy có thể làm iNIPT?',
    a: 'Mẹ bầu có thể thực hiện iNIPT từ tuần thai thứ 9 trở đi — đây là thời điểm nồng độ cfDNA của thai nhi trong máu mẹ đủ để phân tích đáng tin cậy. Invivo Lab có thể tư vấn thêm về thời điểm phù hợp cho từng trường hợp.',
  },
  {
    q: 'Có cần nhịn ăn trước khi làm xét nghiệm iNIPT không?',   /* ← CÂU HỎI MỚI */
    a: 'Không. Thai phụ không cần nhịn ăn trước khi lấy mẫu xét nghiệm NIPT và có thể thực hiện xét nghiệm vào bất kỳ thời điểm nào trong ngày.',
  },
  {
    q: 'iNIPT+ khác iNIPT thường ở điểm nào?',
    a: 'iNIPT+ ngoài sàng lọc NIPT tiêu chuẩn còn bao gồm thêm sàng lọc 25 gene bệnh di truyền lặn cho mẹ — thông tin quan trọng để bác sĩ đánh giá thêm nguy cơ di truyền cho em bé.',
  },
  {
    q: 'Gene lặn cho mẹ có ý nghĩa gì?',
    a: 'Giúp phát hiện mẹ có mang một số biến thể gene bệnh di truyền lặn hay không. Nếu mẹ mang biến thể, bác sĩ có thể tư vấn xét nghiệm gene lặn cho bố (giá ưu đãi giảm 25%) để đánh giá nguy cơ di truyền cho con.',
  },
  {
    q: 'Bao lâu có kết quả?',
    a: 'Thời gian trả kết quả dự kiến 5–7 ngày làm việc kể từ khi mẫu được phân tích. Kết quả sẽ được bác sĩ tư vấn và hướng dẫn bước tiếp theo nếu cần.',
  },
  {
    q: 'Gói nào phù hợp với mẹ mang song thai?',
    a: 'Invivo Lab có các gói iNIPT Twins và iNIPT Twins+ được thiết kế riêng cho mẹ mang song thai. Liên hệ hotline 1900 8668 96 hoặc điền form để được tư vấn chi tiết.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="section"
      style={{ background: 'linear-gradient(145deg,#f8fbff,#fdfcf8)' }}
      aria-labelledby="faq-h2"
    >
      <div className="container-main">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">Câu hỏi thường gặp</div>
          <h2 id="faq-h2" className="text-2xl sm:text-3xl font-black text-slate-900">
            Câu hỏi thường gặp về xét nghiệm NIPT
          </h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between px-5 py-4 text-left
                  hover:bg-brand-blueLighter transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm font-bold text-slate-800 pr-4 leading-snug">
                  {f.q}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5
                    transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed
                  border-t border-slate-100 pt-3 animate-fade-up">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
