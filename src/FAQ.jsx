import { useState } from 'react';

const faqs = [
  { q: 'iNIPT có phải xét nghiệm chẩn đoán không?', a: 'Không. iNIPT là xét nghiệm sàng lọc trước sinh, không phải xét nghiệm chẩn đoán. Nếu kết quả có nguy cơ cao, mẹ bầu cần được bác sĩ tư vấn và có thể cần thực hiện xét nghiệm chẩn đoán phù hợp (ví dụ: chọc ối hoặc sinh thiết gai nhau).' },
  { q: 'Khi nào có thể thực hiện xét nghiệm NIPT?', a: 'Mẹ bầu có thể thực hiện iNIPT từ tuần thai thứ 10 trở đi — đây là thời điểm nồng độ cfDNA của thai nhi trong máu mẹ đủ để phân tích đáng tin cậy.' },
  { q: 'iNIPT+ khác iNIPT thường ở điểm nào?', a: 'iNIPT+ ngoài phần sàng lọc NIPT tiêu chuẩn còn bao gồm thêm sàng lọc 25 gene bệnh di truyền lặn cho mẹ — thông tin quan trọng để bác sĩ đánh giá thêm nguy cơ di truyền cho em bé.' },
  { q: 'Gene lặn cho mẹ có ý nghĩa gì?', a: 'Xét nghiệm gene lặn giúp phát hiện mẹ có mang một số biến thể gene bệnh di truyền lặn hay không. Nếu mẹ mang biến thể, bác sĩ có thể tư vấn thêm — bao gồm khuyến nghị xét nghiệm gene lặn cho bố với giá ưu đãi 1.800.000 VNĐ.' },
  { q: 'Bao lâu có kết quả xét nghiệm NIPT?', a: 'Thời gian trả kết quả dự kiến 5–7 ngày làm việc kể từ khi mẫu được phân tích tại phòng xét nghiệm.' },
  { q: 'Gói iNIPT nào phù hợp với mẹ mang song thai?', a: 'Invivo Lab có các gói iNIPT Twins và iNIPT Twins+ được thiết kế riêng cho mẹ mang song thai. Liên hệ hotline 1900 8668 96 để được tư vấn chi tiết.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section id="faq" className="py-16 bg-slate-50" aria-labelledby="faq-title">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-8">
            <div className="section-label justify-center">Câu hỏi thường gặp</div>
            <h2 id="faq-title" className="text-2xl sm:text-3xl font-black text-slate-900">FAQ</h2>
          </div>

          <div className="flex flex-col gap-3" role="list">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden" role="listitem">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between px-5 py-4 text-left hover:bg-brand-blueLighter transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-bold text-slate-800 pr-4">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
