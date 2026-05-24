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

const SCHEMA = {
  '@context':'https://schema.org',
  '@type':'MedicalTest',
  name:'iNIPT – Xét nghiệm sàng lọc trước sinh không xâm lấn',
  description:'iNIPT Invivo Lab giúp mẹ bầu sàng lọc trước sinh không xâm lấn từ tuần thai thứ 9, kết hợp xét nghiệm thiết yếu và 25 gene bệnh di truyền lặn cho mẹ.',
  usesDevice: { '@type':'MedicalDevice', name:'Hệ thống phân tích cfDNA' },
  provider:{
    '@type':'MedicalOrganization', name:'Invivo Lab',
    telephone:'1900868896', url:'https://invivolab.vn',
    address:[
      {'@type':'PostalAddress',addressLocality:'Hà Nội',streetAddress:'257B1 Giải Phóng, P. Bạch Mai',addressCountry:'VN'},
      {'@type':'PostalAddress',addressLocality:'TP. Hồ Chí Minh',streetAddress:'178 Nguyễn Duy Dương, P. Vườn Lài',addressCountry:'VN'},
    ],
  },
};

export default function App() {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(SCHEMA);
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <>
      <Header/>
      <main id="main-content">
        <Hero/>
        <Quiz/>
        <NIPTWhat/>
        <Packages/>
        <Recommended/>
        <Recessive/>
        <Policy/>
        <Team/>
        <Testimonials/>
        <FAQ/>
        <ContactForm/>
      </main>
      <Footer/>
      <StickyMobileCTA/>
      <StickyDesktopButtons/>
    </>
  );
}
