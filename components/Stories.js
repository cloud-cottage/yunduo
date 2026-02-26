export default function Stories() {
  const stories = [
    {
      id: 1,
      title: '小梅的"第一桶金"',
      subtitle: '她用手工扎染，为妈妈买了一条围巾',
      quote: '"美，是童年第一缕阳光"',
      image: '',
    },
    {
      id: 2,
      title: '那个总低着头的男孩',
      subtitle: '在壁画墙上画下了整个星空',
      quote: '"你种下一朵云，TA收获一片天空"',
      image: '',
    },
  ];

  return (
    <section className="stories" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-header">
        <h2>最新播种故事</h2>
        <p className="text-secondary">每一朵花开，都值得被记录</p>
      </div>
      <div className="stories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {stories.map(story => (
          <div key={story.id} className="story-card" style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ width: '100%', aspectRatio: '16/10', background: 'linear-gradient(135deg, #A7D2E8 0%, #FADADD 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem' }}>🎨</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ color: '#A7D2E8', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>画面：{story.quote}</p>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#2D3748' }}>{story.title}</h3>
              <p style={{ color: '#718096', fontSize: '0.95rem' }}>{story.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}