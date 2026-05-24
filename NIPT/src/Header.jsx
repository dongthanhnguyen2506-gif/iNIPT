import { useState, useEffect } from 'react';
import { LOGO } from './images';

const NAV = [
  { href: '#quiz',        label: 'Chọn gói' },
  { href: '#nipt-what',   label: 'iNIPT là gì' },
  { href: '#recessive',   label: 'Gene lặn' },
  { href: '#policy',      label: 'Chính sách' },
  { href: '#form',        label: 'Đăng ký' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-slate-100 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={LOGO}
              alt="Invivo Lab – Xét nghiệm NIPT sàng lọc trước sinh"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav — nowrap on one line */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[13px] font-600 text-slate-600 px-3 py-1.5 rounded-lg
                  hover:text-brand-blue hover:bg-brand-blueLight transition-all whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0 flex-shrink-0">
            {/* Hotline — hide text on small screens */}
            <a
              href="tel:19008668"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-bold text-brand-blue
                bg-brand-blueLight px-3 py-2 rounded-full hover:bg-brand-bluePale transition-all whitespace-nowrap"
              aria-label="Hotline Invivo Lab 1900 8668 96"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
              </svg>
              <span className="hidden md:inline">1900 8668 96</span>
            </a>

            {/* CTA */}
            <a
              href="#quiz"
              onClick={(e) => { e.preventDefault(); scrollTo('#quiz'); }}
              className="btn-primary text-[13px] py-2 px-4"
            >
              Chọn gói ngay
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
                border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="absolute top-16 left-0 right-0 bg-white border-b border-slate-100
              shadow-xl px-4 py-3 flex flex-col gap-1 animate-fade-up"
            onClick={e => e.stopPropagation()}
          >
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
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
        </div>
      )}
    </>
  );
}
