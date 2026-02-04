import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'React/Next.js 开发',
      description: '使用业界领先的框架，构建高性能的 SPA 与 SSR 应用。从组件到路由，提供完整的前端解决方案。',
      features: ['组件化开发', 'SSR/SSG', '状态管理', '代码分割'],
    },
    {
      id: 2,
      title: 'UI/UX 设计与原型',
      description: '从线框图到高保真原型，帮你实现清晰的交互与视觉语言。让产品既好看又好用。',
      features: ['交互设计', '视觉系统', '原型制作', '用户测试'],
    },
    {
      id: 3,
      title: '性能优化与无障碍',
      description: '性能审计、懒加载、键盘与屏幕阅读器支持，让每位用户都顺畅体验。',
      features: ['性能审计', '代码优化', '无障碍测试', 'SEO 基础'],
    },
    {
      id: 4,
      title: '品牌与数字营销页',
      description: '快速打造响应式营销页面，兼容多端，便于数据追踪与 A/B 测试。',
      features: ['响应式布局', '埋点集成', 'A/B 测试', '动画动效'],
    },
  ];

  const workflow = [
    { step: 1, title: '需求沟通', desc: '深入了解业务与目标受众，明确需求。' },
    { step: 2, title: '方案设计', desc: '提供线框、原型与视觉稿供确认。' },
    { step: 3, title: '开发交付', desc: '敏捷开发，分阶段交付与联调。' },
    { step: 4, title: '上线支持', desc: '协助部署、监控与后续优化。' },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>服务</h1>
          <p className="text-secondary">我们提供端到端的现代前端解决方案，帮助你的业务快速上线。</p>
        </section>

        <section className="services-list" style={{ marginBottom: '4rem' }}>
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {services.map(s => (
              <div key={s.id} className="service-card feature">
                <h3>{s.title}</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{s.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ marginBottom: '0.5rem' }}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="workflow" style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>工作流程</h2>
          <div className="workflow-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}>
            {workflow.map(w => (
              <div key={w.step} className="workflow-step feature">
                <div className="step-number" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontWeight: 'bold',
                }}>{w.step}</div>
                <h3>{w.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
