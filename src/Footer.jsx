import { LOGO } from './images';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12" role="contentinfo">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={LOGO} alt="Invivo Lab" className="h-9 w-auto mb-3 brightness-0 invert" />
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Invivo Lab cung cấp dịch vụ xét nghiệm gene và sàng lọc di truyền chất lượng cao, đồng hành cùng bác sĩ và gia đình trong hành trình chăm sóc sức khỏe.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-white">Hotline:</strong> 1900 8668 96</div>
              <div><strong className="text-white">Website:</strong> invivolab.vn</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-white mb-4">Địa chỉ</h3>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <div><strong className="text-slate-300">Hà Nội:</strong><br />257B1 Giải Phóng, P. Bạch Mai, TP. Hà Nội</div>
              <div><strong className="text-slate-300">TP.HCM:</strong><br />178 Nguyễn Duy Dương, P. Vườn Lài, TP.HCM</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-white mb-4">Dịch vụ iNIPT</h3>
            <ul className="text-xs text-slate-400 space-y-1.5">
              {['iNIPT là gì?', 'Gói xét nghiệm', 'Gene lặn cho mẹ', 'Chính sách hỗ trợ', 'Đội ngũ chuyên môn', 'Đăng ký tư vấn'].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 Invivo Lab. Bản quyền thuộc Invivo Lab.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-lg">
      <a
        href="tel:19008668"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-blueLight text-brand-blue font-bold text-sm rounded-full py-3 active:scale-95 transition-all"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
        Gọi hotline
      </a>
      <a
        href="#form"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-red text-white font-bold text-sm rounded-full py-3 shadow-md active:scale-95 transition-all"
      >
        Tư vấn gói phù hợp
      </a>
    </div>
  );
}

export function StickyDesktopButtons() {
  return (
    <div className="fixed right-5 bottom-6 z-40 hidden sm:flex flex-col gap-2.5">
      <a
        href="tel:19008668"
        className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg hover:bg-brand-blueDark transition-all hover:scale-110"
        title="Gọi hotline"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
      </a>
      <a
        href="#form"
        className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all hover:scale-110"
        title="Đăng ký tư vấn"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
      </a>
    </div>
  );
}
