import { LOGO } from './images';

const go = id => {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const NAV_LINKS = [
  { href: '#quiz',       label: 'Chọn gói phù hợp' },
  { href: '#nipt-what',  label: 'iNIPT là gì?' },
  { href: '#packages',   label: 'Bảng gói xét nghiệm' },
  { href: '#recessive',  label: 'Gene lặn cho mẹ' },
  { href: '#policy',     label: 'Chính sách hỗ trợ' },
  { href: '#faq',        label: 'Câu hỏi thường gặp' },
  { href: '#form',       label: 'Đăng ký tư vấn' },
];

const SUPPORT_LINKS = [
  { label: 'Chính sách bảo mật', href: '#' },
  { label: 'Điều khoản sử dụng', href: '#' },
  { label: 'Liên hệ hợp tác', href: '#' },
  { label: 'Báo lỗi / Góp ý', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-6" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* White logo on dark bg */}
            <div className="mb-4">
              <img
                src={LOGO}
                alt="Invivo Lab"
                className="h-9 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
              Invivo Lab cung cấp dịch vụ xét nghiệm gene và sàng lọc di truyền chất lượng cao,
              đồng hành cùng bác sĩ và gia đình Việt.
            </p>
            <a href="tel:19008668"
              className="inline-flex items-center gap-2 bg-brand-blue/20 hover:bg-brand-blue/30
                text-brand-blueLight px-4 py-2.5 rounded-xl text-sm font-bold transition-all">
              📞 1900 8668 96
            </a>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">🏢 Địa chỉ</h3>
            <div className="space-y-3 text-[13px] text-slate-400 leading-relaxed">
              <div>
                <div className="text-slate-200 font-bold mb-0.5">Hà Nội</div>
                257B1 Giải Phóng, P. Bạch Mai, Hà Nội
              </div>
              <div>
                <div className="text-slate-200 font-bold mb-0.5">TP. Hồ Chí Minh</div>
                178 Nguyễn Duy Dương, P. Vườn Lài, TP.HCM
              </div>
              <div className="pt-1">
                <a href="https://invivolab.vn" target="_blank" rel="noopener noreferrer"
                  className="text-brand-blueLight hover:text-white transition-colors font-semibold">
                  🌐 invivolab.vn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">📋 Dịch vụ iNIPT</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-[13px] text-slate-400 hover:text-white font-semibold
                      transition-colors text-left w-full py-0.5 group flex items-center gap-1.5"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blueLight">›</span>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">🔧 Hỗ trợ</h3>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-slate-400 hover:text-white font-semibold
                      transition-colors py-0.5 group flex items-center gap-1.5"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blueLight">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA block */}
            <div className="mt-5 bg-brand-blue/15 border border-brand-blue/20 rounded-xl p-4">
              <div className="text-xs text-slate-300 mb-2 font-semibold">Cần tư vấn ngay?</div>
              <button
                onClick={() => go('#form')}
                className="w-full text-center bg-brand-red hover:bg-brand-redHover
                  text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
              >
                Đăng ký tư vấn miễn phí →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row
          items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>© 2026 Invivo Lab. Tất cả quyền được bảo lưu.</span>
          <div className="flex gap-4">
            {SUPPORT_LINKS.slice(0, 2).map(l => (
              <a key={l.label} href={l.href} className="hover:text-slate-300 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Sticky mobile CTA */
export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden
        bg-white/96 backdrop-blur-md border-t border-slate-200
        px-4 py-3 flex gap-2.5 shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
    >
      <a
        href="tel:19008668"
        className="flex-1 flex items-center justify-center gap-1.5
          bg-brand-blueLight text-brand-blue font-bold text-[14px]
          rounded-full py-3 active:scale-95 transition-all"
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
        </svg>
        Gọi hotline
      </a>
      <button
        onClick={() => go('#form')}
        className="flex-1 flex items-center justify-center
          bg-brand-red text-white font-bold text-[14px]
          rounded-full py-3 active:scale-95 transition-all"
        style={{ boxShadow: '0 4px 16px rgba(198,40,40,0.3)' }}
      >
        Nhận tư vấn gói
      </button>
    </div>
  );
}

/* Desktop floating buttons */
export function StickyDesktopButtons() {
  return (
    <div className="fixed right-5 bottom-6 z-40 hidden sm:flex flex-col gap-2.5">
      <a
        href="tel:19008668"
        className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center
          shadow-float hover:bg-brand-blueDark transition-all hover:scale-110 active:scale-95"
        title="Gọi hotline 1900 8668 96"
        aria-label="Gọi hotline"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
        </svg>
      </a>
      <button
        onClick={() => go('#form')}
        className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center
          active:scale-95 transition-all hover:scale-110"
        style={{ boxShadow: '0 6px 20px rgba(198,40,40,0.35)' }}
        title="Đăng ký tư vấn"
        aria-label="Đăng ký tư vấn"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </button>
    </div>
  );
}
