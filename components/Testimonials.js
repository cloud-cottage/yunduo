export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '张明',
      role: '产品总监',
      company: '某科技公司',
      content: 'CloudPlan 帮我们把想法变成了现实，团队专业又高效。',
    },
    {
      id: 2,
      name: '李静',
      role: 'CEO',
      company: '某创意工作室',
      content: '他们的设计让我们的品牌焕然一新，深受客户好评。',
    },
    {
      id: 3,
      name: '王涛',
      role: '运营总监',
      company: '某电商平台',
      content: '项目交付快，质量高，是值得长期合作的伙伴。',
    },
  ];

  return (
    <section className="testimonials" aria-label="客户评价">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>客户评价</h2>
        <p className="text-secondary">来自合作客户的声音</p>
      </div>
      <div className="testimonials-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {testimonials.map(t => (
          <div key={t.id} className="testimonial-card" style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            textAlign: 'center',
          }}>
            <div className="testimonial-avatar" style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              margin: '0 auto 1rem',
            }}></div>
            <p className="testimonial-content" style={{ marginBottom: '1rem', fontStyle: 'italic' }}>{t.content}</p>
            <p className="testimonial-name" style={{ fontWeight: 'bold', margin: '0 0 0.25rem' }}>{t.name}</p>
            <p className="testimonial-role" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}