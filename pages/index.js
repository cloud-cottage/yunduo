import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stories from '../components/Stories';
import Features from '../components/Features';
import Donate from '../components/Donate';
import Media from '../components/Media';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 0 }}>
        <Hero />
        <Stories />
        <Features />
        <Donate />
        <Media />
      </main>
      <Footer />
    </div>
  );
}
