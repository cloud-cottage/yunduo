import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ContactCta from '../components/ContactCta';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Features />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
