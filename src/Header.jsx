import { useState, useEffect } from 'react';
import { LOGO } from './images';

const NAV = [
  { href: '#quiz',      label: 'Chọn gói' },
  { href: '#nipt-what', label: 'iNIPT là gì' },
  { href: '#recessive', label: 'Gene lặn' },
  { href: '#policy',    label: 'Chính sách' },
  { href: '#form',      label: 'Đăng ký' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white shadow-sm border-b border-slate-100'
            : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        {/* Single row — never wraps */}
        <div className="max-w-6xl mx-auto px-4 sm:px-5 h-16 flex items-center gap-3">

          {/* Logo — white bg, no filter needed */}
          <a href="#" className="flex-shrink-0" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img
              src={LOGO}
              alt="Invivo Lab – Xét nghiệm NIPT sàng lọc trước sinh"
              className="h-9 w-auto object-contain"
              style={{ background: 'white' }}
            />
          </a>

          {/* Desktop nav — spacer push to center */}
          <nav className="hidden lg:flex items-center gap-0.5 mx-auto" aria-label="Điều hướng chính">
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-[13px] font-semibold text-slate-600 px-3 py-1.5 rounded-lg
                  hover:text-brand-blue hover:bg-brand-blueLight transition-all whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0 flex-shrink-0">
            {/* Hotline pill — visible from md+ */}
            <a
              href="tel:19008668"
              className="hidden md:flex items-center gap-1.5 text-[13px] font-bold text-brand-blue
                bg-brand-blueLight px-3 py-2 rounded-full hover:bg-brand-bluePale transition-all whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
              </svg>
              <span>1900 8668 96</span>
            </a>

            {/* CTA button */}
            <button
              onClick={() => go('#quiz')}
              className="btn-primary text-[13px] py-2 px-4"
            >
              Chọn gói ngay
            </button>

            {/* Hamburger — mobile/tablet only */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl
                border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100
              shadow-xl px-4 py-3 flex flex-col gap-1 lg:hidden animate-fade-up"
          >
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm font-semibold text-slate-700 text-left py-3 px-4
                  rounded-xl hover:bg-brand-blueLight hover:text-brand-blue transition-all"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:19008668"
              className="flex items-center gap-2 text-sm font-bold text-brand-blue
                py-3 px-4 rounded-xl bg-brand-blueLight mt-1"
            >
              📞 Gọi hotline 1900 8668 96
            </a>
          </nav>
        </>
      )}
    </>
  );
}
