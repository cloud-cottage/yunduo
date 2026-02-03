import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>服务</h1>
        <ul>
          <li>使用 React/Next.js 的前端开发</li>
          <li>UI/UX 设计与原型实现</li>
          <li>性能优化与无障碍设计</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
