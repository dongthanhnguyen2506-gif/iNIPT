import { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Quiz from './Quiz';
import NIPTWhat from './NIPTWhat';
import Packages from './Packages';
import Recommended from './Recommended';
import Recessive from './Recessive';
import { Policy, Team, Testimonials } from './Social';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import { Footer, StickyMobileCTA, StickyDesktopButtons } from './Footer';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalTest',
  name: 'iNIPT – Xét nghiệm sàng lọc trước sinh không xâm lấn',
  description: 'iNIPT Invivo Lab giúp mẹ bầu sàng lọc trước sinh không xâm lấn từ tuần thai thứ 10, kết hợp xét nghiệm thiết yếu và 25 gene bệnh di truyền lặn cho mẹ.',
  provider: {
    '@type': 'MedicalOrganization',
    name: 'Invivo Lab',
    telephone: '1900868896',
    url: 'https://invivolab.vn',
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Hà Nội', streetAddress: '257B1 Giải Phóng, P. Bạch Mai', addressCountry: 'VN' },
      { '@type': 'PostalAddress', addressLocality: 'TP. Hồ Chí Minh', streetAddress: '178 Nguyễn Duy Dương, P. Vườn Lài', addressCountry: 'VN' },
    ],
  },
};

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(SERVICE_SCHEMA);
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Quiz />
        <NIPTWhat />
        <Packages />
        <Recommended />
        <Recessive />
        <Policy />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
      <StickyDesktopButtons />
    </>
  );
}
