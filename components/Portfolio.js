import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const categories = ['全部', 'Web', '品牌', '设计', '其他'];
  const projects = [
    { id: 1, title: '企业官网改版', description: '为某科技公司打造全新官网，提升品牌与转化', tags: ['Web'] },
    { id: 2, title: '品牌视觉体系', description: '从 logo 到全套 VI，打造现代品牌识别', tags: ['品牌'] },
    { id: 3, title: '交互原型设计', description: '高保真交互原型，落地用户体验流程', tags: ['设计'] },
    { id: 4, title: '移动应用界面', description: '简洁高效的移动端 UI 与交互设计', tags: ['Web'] },
    { id: 5, title: '营销活动页', description: '多场景营销页，快速响应与数据追踪', tags: ['Web'] },
    { id: 6, title: '品牌动画短片', description: '动态视觉叙事，提升品牌感染力', tags: ['其他'] },
  ];

  const filteredProjects = activeFilter === '全部' ? projects : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section className="portfolio" aria-label="作品集">
      <div className="section-header">
        <h2>精选作品</h2>
        <p className="text-secondary">我们为客户创造兼具美感与功能的数字体验</p>
      </div>
      <div className="filter-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '0.5rem 1rem',
              background: activeFilter === cat ? 'var(--primary)' : 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              color: activeFilter === cat ? '#fff' : 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredProjects.map(proj => (
          <div key={proj.id} className="portfolio-card" style={{
            padding: '1.5rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
          }}>
            <div className="portfolio-thumb" style={{
              width: '100%',
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}></div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>{proj.title}</h3>
            <p className="text-secondary" style={{ margin: '0 0 1rem' }}>{proj.description}</p>
            <a href={`/portfolio/${proj.id}`} className="button" style={{ padding: '10px 16px', fontSize: '0.9rem', borderRadius: '8px', display: 'inline-block' }}>查看详情</a>
          </div>
        ))}
      </div>
    </section>
  );
}