
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

// All JSON-LD schemas are now static in index.html for better SEO crawlability

export default function App() {

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
