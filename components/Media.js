export default function Media() {
  const reports = [
    {
      date: '2024.04',
      source: '《人物》杂志',
      title: '小镇里的财商课：当孩子开始思考"钱能做什么"',
      summary: '记者蹲点一个月，记录云朵计划如何改变一群孩子的金钱观。',
      link: '#',
    },
    {
      date: '2023.11',
      source: '央视《朝闻天下》',
      title: '艺术下乡：让美育的种子在田野发芽',
      summary: '视频时长：3分28秒',
      link: '#',
      video: true,
    },
    {
      date: '2023.06',
      source: '《第一财经》',
      title: '公益新思路：为什么小镇孩子需要财商教育？',
      summary: '',
      link: '#',
    },
  ];

  return (
    <section className="media" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-header">
        <h2>云上回响</h2>
        <p className="text-secondary">被看见的，被记住的</p>
      </div>
      <div className="media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {reports.map((r, idx) => (
          <a key={idx} href={r.link} style={{ display: 'block', textDecoration: 'none' }}>
            <div className="media-card" style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ background: '#A7D2E8', color: '#2D3748', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>{r.date}</span>
                {r.video && <span style={{ color: '#E53E3E' }}>▶ 视频</span>}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2D3748' }}>{r.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#718096', margin: 0 }}>{r.source}</p>
              {r.summary && <p style={{ fontSize: '0.9rem', color: '#4A5568', marginTop: '0.75rem' }}>{r.summary}</p>}
            </div>
          </a>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="mailto:media@cloudplan.org" style={{ color: '#A7D2E8', fontWeight: 600 }}>媒体合作：media@cloudplan.org</a>
      </div>
    </section>
  );
}