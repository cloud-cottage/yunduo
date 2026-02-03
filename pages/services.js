import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <main>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>服务</h1>
          <p className="text-secondary">我们提供端到端的现代前端解决方案，帮助你的业务快速上线。</p>
        </section>
        <section className="feature-grid">
          <div className="feature">
            <h3>React/Next.js 开发</h3>
            <p>使用业界领先的框架，构建高性能的 SPA 与 SSR 应用。</p>
          </div>
          <div className="feature">
            <h3>UI/UX 设计与原型</h3>
            <p>从线框图到高保真原型，帮你实现清晰的交互与视觉语言。</p>
          </div>
          <div className="feature">
            <h3>性能优化与无障碍</h3>
            <p>性能审计、懒加载、键盘与屏幕阅读器支持，让每位用户都顺畅体验。</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
