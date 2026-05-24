import { LOGO } from './images';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={LOGO} alt="Invivo Lab" className="h-8 w-auto mb-3 brightness-0 invert"/>
            <p className="text-xs leading-relaxed mb-4">
              Invivo Lab cung cấp dịch vụ xét nghiệm gene và sàng lọc di truyền chất lượng cao,
              đồng hành cùng bác sĩ và gia đình.
            </p>
            <div className="text-xs space-y-1.5">
              <div><strong className="text-white">Hotline:</strong> 1900 8668 96</div>
              <div><strong className="text-white">Website:</strong> invivolab.vn</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-white mb-4">Địa chỉ</h3>
            <div className="text-xs space-y-2 leading-relaxed">
              <div><strong className="text-slate-300">Hà Nội:</strong><br/>257B1 Giải Phóng, P. Bạch Mai</div>
              <div><strong className="text-slate-300">TP.HCM:</strong><br/>178 Nguyễn Duy Dương, P. Vườn Lài</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-white mb-4">Dịch vụ iNIPT</h3>
            <ul className="text-xs space-y-1.5">
              {['iNIPT là gì?','Gói xét nghiệm','Gene lặn cho mẹ','Chính sách hỗ trợ','Đăng ký tư vấn'].map(l=>(
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 Invivo Lab. Bản quyền thuộc Invivo Lab.</span>
          <div className="flex gap-4">
            {['Chính sách bảo mật','Điều khoản','Liên hệ'].map(l=>(
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md
      border-t border-slate-200 px-4 py-3 pb-safe flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a href="tel:19008668"
        className="flex-1 flex items-center justify-center gap-1.5 bg-brand-blueLight
          text-brand-blue font-bold text-sm rounded-full py-3 active:scale-95 transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
        </svg>
        Gọi hotline
      </a>
      <a href="#form"
        onClick={e=>{ e.preventDefault(); document.querySelector('#form')?.scrollIntoView({behavior:'smooth'}); }}
        className="flex-1 flex items-center justify-center bg-brand-red text-white font-bold
          text-sm rounded-full py-3 shadow-cta active:scale-95 transition-all">
        Nhận tư vấn gói
      </a>
    </div>
  );
}

export function StickyDesktopButtons() {
  return (
    <div className="fixed right-5 bottom-6 z-40 hidden sm:flex flex-col gap-2.5">
      <a href="tel:19008668"
        className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center
          shadow-float hover:bg-brand-blueDark transition-all hover:scale-110 active:scale-95"
        title="Gọi hotline 1900 8668 96" aria-label="Gọi hotline">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
        </svg>
      </a>
      <a href="#form"
        onClick={e=>{ e.preventDefault(); document.querySelector('#form')?.scrollIntoView({behavior:'smooth'}); }}
        className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center
          shadow-cta hover:bg-brand-redHover transition-all hover:scale-110 active:scale-95"
        title="Đăng ký tư vấn" aria-label="Đăng ký tư vấn">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
    </div>
  );
}
