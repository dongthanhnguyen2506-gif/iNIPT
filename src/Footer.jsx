import { LOGO_DARK } from './images';

const go = id => {
  const el = document.querySelector(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const NAV_LINKS = [
  { href: '#quiz',       label: 'Chon goi phu hop' },
  { href: '#nipt-what',  label: 'iNIPT la gi?' },
  { href: '#packages',   label: 'Bang goi xet nghiem' },
  { href: '#recessive',  label: 'Gene lan cho me' },
  { href: '#policy',     label: 'Chinh sach ho tro' },
  { href: '#faq',        label: 'Cau hoi thuong gap' },
  { href: '#form',       label: 'Dang ky tu van' },
];

const SUPPORT_LINKS = [
  { label: 'Chinh sach bao mat', href: '#' },
  { label: 'Dieu khoan su dung', href: '#' },
  { label: 'Lien he hop tac',    href: '#' },
  { label: 'Bao loi / Gop y',   href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-6" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo dark — file thật từ public/images/logo_dark.webp */}
            <div className="mb-4">
              <img
                src={LOGO_DARK}
                alt="Invivo Lab"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
              Invivo Lab cung cap dich vu xet nghiem gene va sang loc di truyen chat luong cao,
              dong hanh cung bac si va gia dinh Viet.
            </p>
            <a
              href="tel:19008668"
              className="inline-flex items-center gap-2 bg-brand-blue/20 hover:bg-brand-blue/30
                text-brand-blueLight px-4 py-2.5 rounded-xl text-sm font-bold transition-all"
            >
              &#128222; 1900 8668 96
            </a>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">&#127970; Dia chi</h3>
            <div className="space-y-3 text-[13px] text-slate-400 leading-relaxed">
              <div>
                <div className="text-slate-200 font-bold mb-0.5">Ha Noi</div>
                257B1 Giai Phong, P. Bach Mai, Ha Noi
              </div>
              <div>
                <div className="text-slate-200 font-bold mb-0.5">TP. Ho Chi Minh</div>
                178 Nguyen Duy Duong, P. Vuon Lai, TP.HCM
              </div>
              <div className="pt-1">
                <a
                  href="https://invivolab.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blueLight hover:text-white transition-colors font-semibold"
                >
                  &#127760; invivolab.vn &#8599;
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">&#128203; Dich vu iNIPT</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-[13px] text-slate-400 hover:text-white font-semibold
                      transition-colors text-left w-full py-0.5 group flex items-center gap-1.5"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blueLight">&#8250;</span>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-black text-white mb-4 tracking-wide">&#128295; Ho tro</h3>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-slate-400 hover:text-white font-semibold
                      transition-colors py-0.5 group flex items-center gap-1.5"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blueLight">&#8250;</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 bg-brand-blue/15 border border-brand-blue/20 rounded-xl p-4">
              <div className="text-xs text-slate-300 mb-2 font-semibold">Can tu van ngay?</div>
              <button
                onClick={() => go('#form')}
                className="w-full text-center bg-brand-red hover:bg-brand-redHover
                  text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
              >
                Dang ky tu van mien phi &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row
          items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>&#169; 2026 Invivo Lab. Tat ca quyen duoc bao luu.</span>
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
        Goi hotline
      </a>
      <button
        onClick={() => go('#form')}
        className="flex-1 flex items-center justify-center
          bg-brand-red text-white font-bold text-[14px]
          rounded-full py-3 active:scale-95 transition-all"
        style={{ boxShadow: '0 4px 16px rgba(198,40,40,0.3)' }}
      >
        Nhan tu van goi
      </button>
    </div>
  );
}

export function StickyDesktopButtons() {
  return (
    <div className="fixed right-5 bottom-6 z-40 hidden sm:flex flex-col gap-2.5">
      <a
        href="tel:19008668"
        className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center
          shadow-float hover:bg-brand-blueDark transition-all hover:scale-110 active:scale-95"
        title="Goi hotline 1900 8668 96"
        aria-label="Goi hotline"
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
        title="Dang ky tu van"
        aria-label="Dang ky tu van"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </button>
    </div>
  );
}
