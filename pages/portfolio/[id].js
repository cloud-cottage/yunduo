import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PortfolioDetailPage({ query }) {
  // 临时模拟数据，实际可从 CMS/API 获取
  const projects = {
    1: { title: '企业官网改版', description: '为某科技公司打造全新官网，提升品牌与转化。', images: [], tags: ['Web'] },
    2: { title: '品牌视觉体系', description: '从 logo 到全套 VI，打造现代品牌识别。', images: [], tags: ['品牌'] },
    3: { title: '交互原型设计', description: '高保真交互原型，落地用户体验流程。', images: [], tags: ['设计'] },
    4: { title: '移动应用界面', description: '简洁高效的移动端 UI 与交互设计。', images: [], tags: ['Web'] },
    5: { title: '营销活动页', description: '多场景营销页，快速响应与数据追踪。', images: [], tags: ['Web'] },
    6: { title: '品牌动画短片', description: '动态视觉叙事，提升品牌感染力。', images: [], tags: ['其他'] },
  };

  const project = projects[query.id] || { title: '项目未找到', description: '' };

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <section className="project-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>{project.title}</h1>
          <p className="text-secondary">{project.description}</p>
        </section>

        <section className="project-body" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="project-thumb" style={{
            width: '100%',
            aspectRatio: '16/9',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            borderRadius: '12px',
            marginBottom: '2rem',
          }}></div>

          <div className="project-content" style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
          }}>
            <h2 style={{ marginBottom: '1rem' }}>项目概述</h2>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              这里放置项目详细描述，包括需求背景、目标、解决方案等。支持 Markdown 富文本。
            </p>
          </div>

          <div className="project-gallery" style={{ marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>项目展示</h3>
            {[1, 2, 3].map(i => (
              <div key={i} className="gallery-item" style={{
                width: '100%',
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                borderRadius: '12px',
                marginBottom: '1.5rem',
              }}></div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/works" className="button">返回作品集</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// 动态路由示例（Next.js pages 目录结构需要 pages/portfolio/[id].js）
export async function getServerSideProps({ query }) {
  return { props: { query } };
}