import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

export default function WorksPage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <section className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>作品集</h1>
          <p className="text-secondary">我们为客户创造兼具美感与功能的数字体验</p>
        </section>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}