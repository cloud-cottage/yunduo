export default function Donate() {
  const options = [
    {
      title: '一对一陪伴',
      image: '👧',
      price: '1200元/年',
      desc: '陪伴一个孩子，走过一整年的成长',
     回报: ['你的名字，会出现在TA的感谢信里', '季度成长报告', '孩子手写感谢卡'],
    },
    {
      title: '艺术种子包',
      image: '🎨',
      price: '200元/份',
      desc: '一盒画笔，一本财商绘本，一个孩子的世界',
     回报: ['你可以指定捐赠给某个小镇', '物资签收照片', '电子版感谢证书'],
    },
    {
      title: '月捐人·云朵伙伴',
      image: '☁️',
      price: '49元/月',
      desc: '每月一杯咖啡的价格，换一个孩子眼里的光',
     回报: ['月捐人专属分享会', '年度艺术日历', '项目进展月报'],
    },
  ];

  return (
    <section className="donate" style={{ padding: '80px 20px', background: '#F7FAFC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header">
          <h2>成为播种人</h2>
          <p className="text-secondary">你的每一次托举，都是一场春雨</p>
        </div>
        <div className="donate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {options.map((opt, idx) => (
            <div key={idx} className="donate-card" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{opt.image}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#2D3748' }}>{opt.title}</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#A7D2E8', marginBottom: '0.5rem' }}>{opt.price}</p>
              <p style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{opt.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', textAlign: 'left' }}>
                {opt.回报.map((item, i) => (
                  <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #EDF2F7', color: '#4A5568', fontSize: '0.9rem' }}>✓ {item}</li>
                ))}
              </ul>
              <a href="/contact" className="button" style={{ width: '100%', display: 'block', textAlign: 'center' }}>立即支持</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}