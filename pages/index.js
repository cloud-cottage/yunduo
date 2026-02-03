import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem' }}>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
