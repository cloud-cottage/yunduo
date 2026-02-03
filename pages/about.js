import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>关于 CloudPlan 云朵计划</h1>
          <p className="text-secondary">我们以性能、可访问性与清晰的设计为核心，为你打造原创且现代的网页体验。</p>
        </section>
        <section className="feature-grid" style={{ marginBottom: '3rem' }}>
          <div className="feature">
            <h3>性能驱动</h3>
            <p>代码分割、懒加载与缓存策略，让你的网站飞快。</p>
          </div>
          <div className="feature">
            <h3>无障碍优先</h3>
            <p>键盘导航、ARIA 与语义化标签，让所有人都能无障碍使用。</p>
          </div>
          <div className="feature">
            <h3>清晰视觉</h3>
            <p>统一的设计系统与品牌风格，确保视觉一致性。</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
