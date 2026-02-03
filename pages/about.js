import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>关于 CloudPlan 云朵计划</h1>
        <p>我们以性能、可访问性与清晰的设计为核心，为你打造原创且现代的网页体验。</p>
      </main>
      <Footer />
    </div>
  );
}
