import { useState, useEffect } from 'react';
import { LOGO } from './images';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#quiz', label: 'Chọn gói phù hợp' },
    { href: '#nipt-what', label: 'iNIPT là gì' },
    { href: '#packages', label: 'Gói xét nghiệm' },
    { href: '#recessive', label: 'Gene lặn' },
    { href: '#policy', label: 'Chính sách' },
    { href: '#form', label: 'Đăng ký' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex-shrink-0">
          <img src={LOGO} alt="Invivo Lab – Trung tâm xét nghiệm gene" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-slate-600 px-3 py-1.5 rounded-lg hover:text-brand-blue hover:bg-brand-blueLight transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:19008668"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-brand-blue bg-brand-blueLight px-3 py-2 rounded-full hover:bg-blue-100 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            1900 8668 96
          </a>
          <a href="#quiz" className="btn-primary text-sm py-2 px-4">
            Chọn gói ngay
          </a>
          <button
            className="lg:hidden p-2 rounded-lg border border-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-3 flex flex-col gap-1 shadow-lg animate-fade-up">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-600 text-slate-700 py-2.5 px-3 rounded-lg hover:bg-brand-blueLight hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:19008668" className="btn-soft text-sm mt-1">
            📞 Gọi hotline 1900 8668 96
          </a>
        </div>
      )}
    </header>
  );
}
