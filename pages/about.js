import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const team = [
    { id: 1, name: '张宇', role: '创始人 & 设计总监', bio: '多年品牌与交互设计经验，擅长用视觉讲故事。' },
    { id: 2, name: '刘晴', role: '前端技术负责人', bio: '专注 React 与性能优化，追求极致的用户体验。' },
    { id: 3, name: '陈思', role: '产品策划', bio: '从需求到落地，负责项目规划与客户沟通。' },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>关于 CloudPlan 云朵计划</h1>
          <p className="text-secondary">我们以性能、可访问性与清晰的设计为核心，为你打造原创且现代的网页体验。</p>
        </section>

        <section className="mission" style={{ marginBottom: '4rem', padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px' }}>
          <h2 style={{ marginBottom: '1rem' }}>使命与愿景</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            让每个品牌都拥有兼具美感与功能的数字体验，通过设计与技术驱动业务增长。
          </p>
        </section>

        <section className="team" style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>团队</h2>
          <div className="team-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {team.map(t => (
              <div key={t.id} className="team-card" style={{
                padding: '2rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                textAlign: 'center',
              }}>
                <div className="team-avatar" style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  margin: '0 auto 1rem',
                }}></div>
                <h3 style={{ margin: '0 0 0.25rem' }}>{t.name}</h3>
                <p className="text-secondary" style={{ marginBottom: '1rem' }}>{t.role}</p>
                <p style={{ margin: 0 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values" className="feature-grid">
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
